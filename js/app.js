import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Hero } from './components/Hero.js';
import { Grid } from './components/Grid.js';
import { Modal } from './components/Modal.js';
import { ReferenceRulers } from './components/ReferenceRulers.js';
import { Footer } from './components/Footer.js';
import { i18n } from './i18n/i18n.js';
import { fetchAllBeers } from './services/supabase.js';
// Keep fallback data import
import { beers as fallbackBeers } from './data/beers.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize i18n first
    i18n.init();

    // Initialize Components
    const header = new Header('main-header');
    header.render();

    // Initialize Sidebar (if exists)
    if (document.getElementById('sidebar')) {
        const sidebar = new Sidebar('sidebar');
        sidebar.render();
    }

    // Initialize Hero (if exists)
    if (document.getElementById('hero-section')) {
        const hero = new Hero('hero-section');
        hero.render();
    }

    // Initialize Reference Rulers (if exists)
    if (document.getElementById('reference-rulers')) {
        const rulers = new ReferenceRulers('reference-rulers');
        rulers.render();
    }

    // Initialize Grid with loading state (if exists)
    if (document.getElementById('beer-grid')) {
        const gridElement = document.getElementById('beer-grid');

        // Show loading state
        gridElement.innerHTML = '<div class="loading-message">🍺 Carregando cervejas...</div>';

        try {
            // Fetch beers from Supabase
            const beers = await fetchAllBeers();

            // Use fetched data if available, otherwise fallback
            const beerData = beers.length > 0 ? beers : fallbackBeers;

            // Initialize grid with data
            const grid = new Grid('beer-grid', beerData);
            grid.render();

            if (beers.length === 0) {
                console.warn('No beers loaded from Supabase, using fallback data');
            }
        } catch (error) {
            console.error('Error loading beers:', error);
            // Use fallback data on error
            const grid = new Grid('beer-grid', fallbackBeers);
            grid.render();
        }
    }

    // Initialize Modal
    new Modal('modal-container');

    // Initialize Footer with language switcher
    const footer = new Footer('main-footer');
    footer.render();

    // Hide filters bar
    const filtersBar = document.getElementById('filters-bar');
    if (filtersBar) {
        filtersBar.style.display = 'none';
    }

    // Translate static HTML elements
    i18n.translatePage();

    // Re-translate on language change
    window.addEventListener('languageChanged', () => {
        i18n.translatePage();
    });
});
