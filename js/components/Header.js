import { i18n } from '../i18n/i18n.js';

export class Header {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        this.currentIndex = 0;
        this.phrases = [
            { id: 'phrase1', color: '#ff9e00' }, // Amber
            { id: 'phrase2', color: '#ff006e' }, // Hot Pink
            { id: 'phrase3', color: '#3a86ff' }, // Blue
            { id: 'phrase4', color: '#8338ec' }, // Purple
            { id: 'phrase5', color: '#fb5607' }  // Orange Red
        ];

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.updateBanner();
        });
    }

    render() {
        this.target.innerHTML = `
            <a href="/" class="header-logo">
                <div class="logo-container">
                     <img src="img/logo.png" alt="BeerSL" class="site-logo">
                     <span class="site-subtitle" data-i18n="header.subtitle">${i18n.t('header.subtitle')}</span>
                </div>
            </a>
            
            <div class="rotating-banner-container">
                <div id="rotating-text" class="rotating-text">
                    <div class="banner-line title"></div>
                    <div class="banner-line subtitle"></div>
                </div>
            </div>
            
            <div class="header-search">
                <div class="search-input-wrapper">
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input type="text" data-i18n-placeholder="header.search_placeholder" placeholder="${i18n.t('header.search_placeholder')}" id="search-input">
                </div>
            </div>
        `;

        this.startRotation();
    }

    startRotation() {
        if (this.rotationTimer) clearTimeout(this.rotationTimer);
        if (this.hideTimer) clearTimeout(this.hideTimer);

        this.runCycle();
    }

    runCycle() {
        const container = this.target.querySelector('#rotating-text');
        if (!container) return;

        // 1. Prepare Content
        const phrase = this.phrases[this.currentIndex];
        const titleEl = container.querySelector('.title');
        const subtitleEl = container.querySelector('.subtitle');

        const titleText = i18n.t(`banner.${phrase.id}.title`);
        const subtitleText = i18n.t(`banner.${phrase.id}.subtitle`);

        titleEl.textContent = titleText || "Start Advertising";
        subtitleEl.textContent = subtitleText || "Grow your brand today.";
        container.style.color = phrase.color;

        // 2. Fade In
        // Force reflow to ensure transition plays if we just removed class
        void container.offsetWidth;
        container.classList.add('visible');

        // 3. Schedule Fade Out (after 1.5s in + 6s visible = 7.5s)
        this.hideTimer = setTimeout(() => {
            container.classList.remove('visible');
        }, 7500);

        // 4. Schedule Next Cycle (after 7.5s + 1.5s out = 9s)
        this.rotationTimer = setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
            this.runCycle();
        }, 9000);
    }

    // Explicit update for language change
    updateBanner() {
        this.startRotation();
    }
}
