import { i18n } from '../i18n/i18n.js';

export class Header {
    constructor(targetId) {
        this.target = document.getElementById(targetId);
    }

    render() {
        const currentLang = i18n.getLang();

        this.target.innerHTML = `
            <a href="/" class="header-logo">
                <div class="logo-icon">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M4 3h16a1 1 0 0 1 1 1v5.5A6.5 6.5 0 0 1 14.5 16H9.5A6.5 6.5 0 0 1 3 9.5V4a1 1 0 0 1 1-1zm1 2v4.5A4.5 4.5 0 0 0 9.5 14h5a4.5 4.5 0 0 0 4.5-4.5V5H5zm13 13v2h-2v-2H8v2H6v-2H4v2H2v-2h2v-2h2v2h6v-2h2v2h6v2h-2z"/>
                    </svg>
                </div>
                <div class="logo-text">
                    <h1><span class="highlight">Beer</span>StylesLibrary</h1>
                    <span class="subtitle">BeerSL</span>
                </div>
            </a>
            
            <div class="header-center">
                <div class="header-search">
                    <div class="search-input-wrapper">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input type="text" data-i18n-placeholder="header.search_placeholder" placeholder="${i18n.t('header.search_placeholder')}" id="search-input">
                    </div>
                </div>
            </div>
            
            <div class="header-actions">
                <div class="language-switcher">
                    <button class="lang-btn ${currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR" title="Português">
                        🇧🇷
                    </button>
                    <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" title="English">
                        🇺🇸
                    </button>
                    <button class="lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de" title="Deutsch">
                        🇩🇪
                    </button>
                </div>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        const langBtns = this.target.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.setLang(lang);

                // Update active state
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}
