import { i18n } from '../i18n/i18n.js';

export class SearchBar {
    constructor(targetId, beers, onSearch) {
        this.target = document.getElementById(targetId);
        this.beers = beers;
        this.onSearch = onSearch;
        this.debounceTimer = null;

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());
    }

    render() {
        this.target.innerHTML = `
            <div class="search-bar-container">
                <div class="search-input-wrapper">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input 
                        type="text" 
                        id="beer-search-input" 
                        class="search-input"
                        placeholder="${i18n.t('search.placeholder') || 'Pesquisar estilos de cerveja...'}"
                        autocomplete="off"
                    >
                    <button class="search-clear-btn" id="search-clear-btn" style="display: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 6 6 18M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="search-results-count" id="search-results-count"></div>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        const input = document.getElementById('beer-search-input');
        const clearBtn = document.getElementById('search-clear-btn');
        const resultsCount = document.getElementById('search-results-count');

        if (input) {
            input.addEventListener('input', (e) => {
                const query = e.target.value.trim();

                // Show/hide clear button
                clearBtn.style.display = query ? 'flex' : 'none';

                // Debounce the search
                clearTimeout(this.debounceTimer);
                this.debounceTimer = setTimeout(() => {
                    this.performSearch(query, resultsCount);
                }, 200);
            });

            // Handle Enter key
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    input.value = '';
                    clearBtn.style.display = 'none';
                    this.performSearch('', resultsCount);
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                input.value = '';
                clearBtn.style.display = 'none';
                this.performSearch('', resultsCount);
                input.focus();
            });
        }
    }

    performSearch(query, resultsCountEl) {
        let filteredBeers;

        if (!query) {
            filteredBeers = this.beers;
            resultsCountEl.textContent = '';
        } else {
            const lowerQuery = query.toLowerCase();
            filteredBeers = this.beers.filter(beer => {
                // Search in name
                const nameMatch = beer.name.toLowerCase().includes(lowerQuery);

                // Search in translated name
                const translationKey = `beer.${beer.id}`;
                const translatedName = i18n.t(translationKey);
                const translatedMatch = translatedName !== translationKey &&
                    translatedName.toLowerCase().includes(lowerQuery);

                // Search in category
                const categoryMatch = beer.category &&
                    beer.category.toLowerCase().includes(lowerQuery);

                return nameMatch || translatedMatch || categoryMatch;
            });

            // Update results count
            const countText = i18n.t('search.results') || '{count} estilos encontrados';
            resultsCountEl.textContent = countText.replace('{count}', filteredBeers.length);
        }

        // Call the callback with filtered results
        if (this.onSearch) {
            this.onSearch(filteredBeers);
        }

        // Also dispatch event for other components
        document.dispatchEvent(new CustomEvent('searchChanged', {
            detail: { query, results: filteredBeers }
        }));
    }
}
