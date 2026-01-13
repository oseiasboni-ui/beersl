import { top250Beers } from './data/top-250-beers.js';
import { getBeerInfo } from './data/beer-parent-companies.js';

// Cache busting for data updates
const v = new Date().getTime();

let hoverTimeout = null;
let currentPopup = null;
let currentFilters = { country: 'all', parent: 'all' };

function getUniqueValues() {
    const countries = new Set();
    const parents = new Set();

    top250Beers.forEach(beer => {
        const info = getBeerInfo(beer);
        if (info.origin) {
            // Extract country name without emoji
            const countryName = info.origin.replace(/[\u{1F1E0}-\u{1F1FF}][\u{1F1E0}-\u{1F1FF}]/gu, '').trim();
            countries.add(countryName);
        }
        if (info.parent) {
            parents.add(info.parent);
        }
    });

    return {
        countries: Array.from(countries).sort(),
        parents: Array.from(parents).sort()
    };
}

function populateFilters() {
    const { countries, parents } = getUniqueValues();

    const countrySelect = document.getElementById('country-filter');
    const parentSelect = document.getElementById('parent-filter');

    if (countrySelect) {
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });

        countrySelect.addEventListener('change', (e) => {
            currentFilters.country = e.target.value;
            renderGrid();
        });
    }

    if (parentSelect) {
        parents.forEach(parent => {
            const option = document.createElement('option');
            option.value = parent;
            option.textContent = parent;
            parentSelect.appendChild(option);
        });

        parentSelect.addEventListener('change', (e) => {
            currentFilters.parent = e.target.value;
            renderGrid();
        });
    }

    // Clear filters button
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            currentFilters = { country: 'all', parent: 'all' };
            if (countrySelect) countrySelect.value = 'all';
            if (parentSelect) parentSelect.value = 'all';
            renderGrid();
        });
    }
}

function getFilteredBeers() {
    return top250Beers.filter(beer => {
        const info = getBeerInfo(beer);

        // Country filter
        if (currentFilters.country !== 'all') {
            const countryName = (info.origin || '').replace(/[\u{1F1E0}-\u{1F1FF}][\u{1F1E0}-\u{1F1FF}]/gu, '').trim();
            if (countryName !== currentFilters.country) {
                return false;
            }
        }

        // Parent company filter
        if (currentFilters.parent !== 'all') {
            if (info.parent !== currentFilters.parent) {
                return false;
            }
        }

        return true;
    });
}

function renderGrid() {
    const mainContainer = document.querySelector('.top-brands-container');
    if (!mainContainer) return;

    // Check if grid already exists to avoid duplication
    let grid = document.getElementById('brands-grid-250');
    if (!grid) {
        grid = document.createElement('div');
        grid.id = 'brands-grid-250';
        grid.className = 'brands-grid-250';
        mainContainer.appendChild(grid);
    }

    const filteredBeers = getFilteredBeers();

    // Update count
    const countEl = document.getElementById('filter-count');
    if (countEl) {
        countEl.textContent = `${filteredBeers.length} beers`;
    }

    // Only beer name with hover handler for popup
    grid.innerHTML = filteredBeers.map(beer => {
        const info = getBeerInfo(beer);
        return `
            <div class="brand-item" data-beer="${beer}" style="border-left: 4px solid ${info.color};">
                <span class="brand-name">${beer}</span>
            </div>
        `;
    }).join('');

    // Show message if no results
    if (filteredBeers.length === 0) {
        grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">No beers match the selected filters.</div>';
    }

    // Add hover handlers with 500ms delay
    grid.querySelectorAll('.brand-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const beerName = item.dataset.beer;

            // Clear any existing timeout
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }

            // Hide any existing popup
            hidePopup();

            // Set timeout for 500ms before showing popup
            hoverTimeout = setTimeout(() => {
                showPopup(beerName, item);
            }, 500);
        });

        item.addEventListener('mouseleave', (e) => {
            // Clear the timeout if mouse leaves before 500ms
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }

            // Check if mouse moved to popup
            const relatedTarget = e.relatedTarget;
            if (relatedTarget && relatedTarget.closest('.beer-popup')) {
                return; // Don't hide if moving to popup
            }

            // Small delay before hiding to allow moving to popup
            setTimeout(() => {
                if (currentPopup && !currentPopup.matches(':hover') && !item.matches(':hover')) {
                    hidePopup();
                }
            }, 100);
        });
    });

    // Hide popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.brand-item') && !e.target.closest('.beer-popup')) {
            hidePopup();
        }
    });
}

function showPopup(beerName, targetElement) {
    const info = getBeerInfo(beerName);

    // Remove any existing popup
    hidePopup();

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'beer-popup';
    popup.innerHTML = `
        <div class="beer-popup-header" style="background: ${info.color};">
            <h3 class="beer-popup-title">${beerName}</h3>
        </div>
        <div class="beer-popup-body">
            <div class="beer-popup-info">
                <div class="popup-info-row">
                    <span class="popup-info-label">Parent Company</span>
                    <span class="popup-info-value">${info.parent}</span>
                </div>
                <div class="popup-info-row">
                    <span class="popup-info-label">Region</span>
                    <span class="popup-info-value">${info.region}</span>
                </div>
                <div class="popup-info-row">
                    <span class="popup-info-label">Origin</span>
                    <span class="popup-info-value">${info.origin || 'Unknown'}</span>
                </div>
                ${info.year ? `
                <div class="popup-info-row">
                    <span class="popup-info-label">Founded</span>
                    <span class="popup-info-value">${info.year}</span>
                </div>` : ''}
                ${info.description ? `
                <div class="popup-description">${info.description}</div>` : ''}
            </div>
        </div>
    `;

    // Add popup to target element
    targetElement.appendChild(popup);
    currentPopup = popup;

    // Trigger animation
    requestAnimationFrame(() => {
        popup.classList.add('active');
    });

    // Add hover handler to popup itself to keep it open
    popup.addEventListener('mouseenter', () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
    });

    popup.addEventListener('mouseleave', () => {
        hidePopup();
    });

    // Adjust position if popup goes off screen
    adjustPopupPosition(popup, targetElement);
}

function hidePopup() {
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
}

function adjustPopupPosition(popup, targetElement) {
    const rect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Check right edge
    if (rect.right > viewportWidth - 10) {
        popup.style.left = 'auto';
        popup.style.right = '0';
        popup.style.transform = 'none';
    }

    // Check left edge
    if (rect.left < 10) {
        popup.style.left = '0';
        popup.style.right = 'auto';
        popup.style.transform = 'none';
    }

    // Check if popup goes below viewport - show above instead
    if (rect.bottom > viewportHeight - 10) {
        popup.style.top = 'auto';
        popup.style.bottom = '100%';
        popup.style.marginTop = '0';
        popup.style.marginBottom = '8px';

        // Move arrow to bottom
        popup.style.setProperty('--arrow-position', 'top');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderGrid();
});
