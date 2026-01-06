// Supabase Service Layer
import { SUPABASE_CONFIG } from '../config.js';

// Initialize Supabase client (using CDN)
let supabase = null;

async function initSupabase() {
    if (supabase) return supabase;

    // Load Supabase client from CDN if not already loaded
    if (!window.supabase) {
        await loadSupabaseClient();
    }

    supabase = window.supabase.createClient(
        SUPABASE_CONFIG.url,
        SUPABASE_CONFIG.anonKey
    );

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
 * Fetch all beers from Supabase
 * @returns {Promise<Array>} Array of beer objects
 */
export async function fetchAllBeers() {
    try {
        const client = await initSupabase();

        const { data, error } = await client
            .from('beers')
            .select('*')
            .order('name', { ascending: true });

        if (error) {
            console.error('Error fetching beers:', error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error('Failed to fetch beers from Supabase:', error);
        // Return empty array on error, component can handle fallback
        return [];
    }
}

/**
 * Fetch a single beer by ID
 * @param {string} beerId - The beer ID
 * @returns {Promise<Object|null>} Beer object or null
 */
export async function fetchBeerById(beerId) {
    try {
        const client = await initSupabase();

        const { data, error } = await client
            .from('beers')
            .select('*')
            .eq('id', beerId)
            .single();

        if (error) {
            console.error(`Error fetching beer ${beerId}:`, error);
            throw error;
        }

        return data;
    } catch (error) {
        console.error(`Failed to fetch beer ${beerId}:`, error);
        return null;
    }
}

/**
 * Fetch translations for a specific language
 * @param {string} language - Language code (pt, en, de)
 * @returns {Promise<Object>} Translations object with key-value pairs
 */
export async function fetchTranslations(language) {
    try {
        const client = await initSupabase();

        const { data, error } = await client
            .from('translations')
            .select('key, value')
            .eq('language', language);

        if (error) {
            console.error(`Error fetching translations for ${language}:`, error);
            throw error;
        }

        // Convert array to object for easy lookup
        const translations = {};
        if (data) {
            data.forEach(item => {
                translations[item.key] = item.value;
            });
        }

        return translations;
    } catch (error) {
        console.error(`Failed to fetch translations for ${language}:`, error);
        return {};
    }
}

/**
 * Search beers by name or category
 * @param {string} query - Search query
 * @returns {Promise<Array>} Filtered beer array
 */
export async function searchBeers(query) {
    try {
        const client = await initSupabase();

        const { data, error } = await client
            .from('beers')
            .select('*')
            .or(`name.ilike.%${query}%,category.ilike.%${query}%`)
            .order('name', { ascending: true });

        if (error) {
            console.error('Error searching beers:', error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error('Failed to search beers:', error);
        return [];
    }
}

/**
 * Filter beers by category
 * @param {string} category - Category name
 * @returns {Promise<Array>} Filtered beer array
 */
export async function fetchBeersByCategory(category) {
    try {
        const client = await initSupabase();

        const { data, error } = await client
            .from('beers')
            .select('*')
            .eq('category', category)
            .order('name', { ascending: true });

        if (error) {
            console.error(`Error fetching beers in category ${category}:`, error);
            throw error;
        }

        return data || [];
    } catch (error) {
        console.error(`Failed to fetch beers in category ${category}:`, error);
        return [];
    }
}
