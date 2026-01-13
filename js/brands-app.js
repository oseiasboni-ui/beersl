import beerBrands from './data/brands.js';
import translations from './i18n/translations.js';

class BrandsApp {
    constructor() {
        this.currentLang = localStorage.getItem('beerStylesLang') || 'pt-BR';
        this.init();
    }

    init() {
        this.renderHeader();
        this.renderFooter();
        this.renderBrands();
        this.setupLanguageSwitcher();
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    renderHeader() {
        const header = document.getElementById('main-header');
        header.innerHTML = `
            <a href="index.html" class="header-logo">
                <div class="site-logo-text">
                    <span class="logo-beer">BEER</span><span class="logo-sl">SL</span>
                </div>
            </a>
            <h1 class="header-title">${this.t('header.title')}</h1>
            <div class="header-right">
                <div class="hamburger-menu">
                    <button class="hamburger-btn" aria-label="Menu">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    <div class="hamburger-dropdown">
                        <div class="dropdown-section">
                            <span class="dropdown-label">${this.t('header.language')}</span>
                            <div class="dropdown-lang">
                                <button class="dropdown-lang-btn ${this.currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR">PT</button>
                                <button class="dropdown-lang-btn ${this.currentLang === 'en-US' ? 'active' : ''}" data-lang="en-US">EN</button>
                                <button class="dropdown-lang-btn ${this.currentLang === 'de-DE' ? 'active' : ''}" data-lang="de-DE">DE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Hamburger Menu Logic
        const hamburgerBtn = header.querySelector('.hamburger-btn');
        const hamburgerDropdown = header.querySelector('.hamburger-dropdown');

        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburgerBtn.classList.toggle('open');
            hamburgerDropdown.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) {
                hamburgerBtn.classList.remove('open');
                hamburgerDropdown.classList.remove('open');
            }
        });
    }

    renderBrands() {
        const grid = document.getElementById('brands-grid');
        grid.innerHTML = beerBrands.map(brand => `
            <div class="brand-card">
                <div class="brand-image-container">
                    <img src="${brand.image}" alt="${brand.name} Logo" class="brand-image" onerror="this.src='assets/beer-placeholder.png'">
                </div>
                <div class="brand-content">
                    <div class="brand-header">
                        <h2 class="brand-name">${brand.name}</h2>
                        <span class="brand-origin">${brand.origin}</span>
                    </div>
                    <p class="brand-description">${this.t(brand.description)}</p>
                    <a href="${brand.website}" target="_blank" class="brand-link">Visit Website →</a>
                </div>
            </div>
        `).join('');

        // Update Hero Text
        document.getElementById('brands-hero-title').innerText = this.t('brands.hero.title') || 'Top Beer Brands';
        document.getElementById('brands-hero-subtitle').innerText = this.t('brands.hero.subtitle') || 'Discover the breweries that define the styles.';

        // Update Sidebar Text
        document.getElementById('nav-home').innerText = this.t('nav.home') || 'Home (Beer Styles)';
        document.getElementById('nav-brands').innerText = this.t('nav.brands') || 'Top Brands';
    }

    renderFooter() {
        const footer = document.getElementById('main-footer');
        footer.innerHTML = `
            <div class="footer-content">
                <p>&copy; 2024 BeerStylesLibrary. ${this.t('footer.rights')}</p>
            </div>
        `;
    }

    setupLanguageSwitcher() {
        const langBtns = document.querySelectorAll('.dropdown-lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                if (lang !== this.currentLang) {
                    this.currentLang = lang;
                    localStorage.setItem('beerStylesLang', lang);
                    window.location.reload();
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BrandsApp();
});
