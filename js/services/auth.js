// Authentication Service Layer
import { SUPABASE_CONFIG } from '../config.js';

let supabase = null;

// Initialize Supabase client (reuse from supabase.js if available)
async function getSupabaseClient() {
    if (supabase) return supabase;

    // Check if already initialized globally
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

    // Store globally for reuse
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
 * Login with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User session data
 */
export async function login(email, password) {
    try {
        const client = await getSupabaseClient();

        const { data, error } = await client.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.error('Login error:', error);
            throw error;
        }

        console.log('Login successful:', data.user.email);
        return data;
    } catch (error) {
        console.error('Failed to login:', error);
        throw error;
    }
}

/**
 * Logout current user
 * @returns {Promise<void>}
 */
export async function logout() {
    try {
        const client = await getSupabaseClient();

        const { error } = await client.auth.signOut();

        if (error) {
            console.error('Logout error:', error);
            throw error;
        }

        console.log('Logout successful');
    } catch (error) {
        console.error('Failed to logout:', error);
        throw error;
    }
}

/**
 * Get current logged-in user
 * @returns {Promise<Object|null>} User object or null
 */
export async function getCurrentUser() {
    try {
        const client = await getSupabaseClient();

        const { data: { user }, error } = await client.auth.getUser();

        if (error) {
            console.error('Get user error:', error);
            return null;
        }

        return user;
    } catch (error) {
        console.error('Failed to get current user:', error);
        return null;
    }
}

/**
 * Get current session
 * @returns {Promise<Object|null>} Session object or null
 */
export async function getSession() {
    try {
        const client = await getSupabaseClient();

        const { data: { session }, error } = await client.auth.getSession();

        if (error) {
            console.error('Get session error:', error);
            return null;
        }

        return session;
    } catch (error) {
        console.error('Failed to get session:', error);
        return null;
    }
}

/**
 * Check if user is authenticated
 * @returns {Promise<boolean>}
 */
export async function isAuthenticated() {
    const session = await getSession();
    return session !== null;
}

/**
 * Check if current user is admin
 * For now, any authenticated user is considered admin
 * You can add role-based checks later
 * @returns {Promise<boolean>}
 */
export async function isAdmin() {
    return await isAuthenticated();
}

/**
 * Listen for auth state changes
 * @param {Function} callback - Callback function(event, session)
 * @returns {Object} Subscription object
 */
export async function onAuthStateChange(callback) {
    const client = await getSupabaseClient();

    const { data: { subscription } } = client.auth.onAuthStateChanged(callback);

    return subscription;
}

/**
 * Redirect to login if not authenticated
 * @param {string} redirectUrl - URL to redirect after login
 */
export async function requireAuth(redirectUrl = '/admin.html') {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        // Store current URL for redirect after login
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        window.location.href = redirectUrl;
        return false;
    }

    return true;
}

/**
 * Get redirect URL after login
 * @returns {string}
 */
export function getRedirectAfterLogin() {
    const redirect = sessionStorage.getItem('redirectAfterLogin');
    sessionStorage.removeItem('redirectAfterLogin');
    return redirect || '/admin-dashboard.html';
}
