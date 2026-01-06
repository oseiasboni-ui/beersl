// Storage Service Layer for Beer Images
import { SUPABASE_CONFIG } from '../config.js';

let supabase = null;
const BUCKET_NAME = 'beer-images';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// Initialize Supabase client
async function getSupabaseClient() {
    if (supabase) return supabase;

    // Reuse global client if available
    if (window._supabaseClient) {
        supabase = window._supabaseClient;
        return supabase;
    }

    // Load Supabase client from CDN if not loaded
    if (!window.supabase) {
        await loadSupabaseClient();
    }

    supabase = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );

    window._supabaseClient = supabase;
    return supabase;
}

function loadSupabaseClient() {
    return new Promise((resolve, reject) => {
        if (window.supabase) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * Validate image file
 * @param {File} file - File to validate
 * @returns {Object} {valid: boolean, error: string}
 */
export function validateImageFile(file) {
    if (!file) {
        return { valid: false, error: 'Nenhum arquivo selecionado' };
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
        return {
            valid: false,
            error: 'Formato inválido. Use JPG, PNG ou WebP'
        };
    }

    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            error: `Arquivo muito grande. Máximo: ${MAX_FILE_SIZE / 1024 / 1024}MB`
        };
    }

    return { valid: true };
}

/**
 * Upload beer image to Supabase Storage
 * @param {string} beerId - Beer ID
 * @param {File} file - Image file
 * @param {Function} onProgress - Progress callback (optional)
 * @returns {Promise<string>} Public URL of uploaded image
 */
export async function uploadBeerImage(beerId, file, onProgress) {
    try {
        // Validate file
        const validation = validateImageFile(file);
        if (!validation.valid) {
            throw new Error(validation.error);
        }

        const client = await getSupabaseClient();

        // Get file extension
        const ext = file.name.split('.').pop();
        const fileName = `${beerId}.${ext}`;
        const filePath = fileName;

        // Upload with upsert (replace if exists)
        const { data, error } = await client.storage
            .from(BUCKET_NAME)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: true // Replace existing file
            });

        if (error) {
            console.error('Upload error:', error);
            throw error;
        }

        console.log('Image uploaded successfully:', data.path);

        // Get public URL
        const publicUrl = getBeerImageUrl(beerId, ext);

        return publicUrl;
    } catch (error) {
        console.error('Failed to upload image:', error);
        throw error;
    }
}

/**
 * Get public URL for beer image
 * @param {string} beerId - Beer ID
 * @param {string} ext - File extension (jpg, png, webp)
 * @returns {string} Public URL
 */
export function getBeerImageUrl(beerId, ext = 'jpg') {
    const fileName = `${beerId}.${ext}`;
    return `${SUPABASE_CONFIG.url}/storage/v1/object/public/${BUCKET_NAME}/${fileName}`;
}

/**
 * Delete beer image from storage
 * @param {string} beerId - Beer ID
 * @param {string} ext - File extension
 * @returns {Promise<void>}
 */
export async function deleteBeerImage(beerId, ext = 'jpg') {
    try {
        const client = await getSupabaseClient();
        const fileName = `${beerId}.${ext}`;

        const { error } = await client.storage
            .from(BUCKET_NAME)
            .remove([fileName]);

        if (error) {
            console.error('Delete error:', error);
            throw error;
        }

        console.log('Image deleted successfully');
    } catch (error) {
        console.error('Failed to delete image:', error);
        throw error;
    }
}

/**
 * Update beer record with image URL
 * @param {string} beerId - Beer ID
 * @param {string} imageUrl - Image URL
 * @returns {Promise<void>}
 */
export async function updateBeerImageUrl(beerId, imageUrl) {
    try {
        const client = await getSupabaseClient();

        const { error } = await client
            .from('beers')
            .update({ image: imageUrl })
            .eq('id', beerId);

        if (error) {
            console.error('Update beer error:', error);
            throw error;
        }

        console.log('Beer image URL updated in database');
    } catch (error) {
        console.error('Failed to update beer image URL:', error);
        throw error;
    }
}

/**
 * Complete upload flow: upload image and update database
 * @param {string} beerId - Beer ID
 * @param {File} file - Image file
 * @param {Function} onProgress - Progress callback
 * @returns {Promise<string>} Public URL
 */
export async function uploadAndUpdateBeer(beerId, file, onProgress) {
    try {
        // Upload image to storage
        const imageUrl = await uploadBeerImage(beerId, file, onProgress);

        // Update beer record with new image URL
        await updateBeerImageUrl(beerId, imageUrl);

        return imageUrl;
    } catch (error) {
        console.error('Failed to upload and update beer:', error);
        throw error;
    }
}

/**
 * Get list of all images in bucket
 * @returns {Promise<Array>} List of files
 */
export async function listBeerImages() {
    try {
        const client = await getSupabaseClient();

        const { data, error } = await client.storage
            .from(BUCKET_NAME)
            .list();

        if (error) {
            console.error('List error:', error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error('Failed to list images:', error);
        return [];
    }
}
