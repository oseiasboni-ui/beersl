import { i18n } from '../i18n/i18n.js';

export class Footer {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Initialize theme from localStorage
        this.initTheme();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('beersl-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    render() {
        const currentLang = i18n.getLang();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

        this.target.innerHTML = `
            <div class="footer-content">
                <div class="footer-brand">
                    <span class="footer-logo"><strong>Beer</strong>SL</span>
                    <span class="footer-tagline" data-i18n="footer.tagline">${i18n.t('footer.tagline')}</span>
                </div>
                
                <div class="footer-center">
                    <nav class="footer-nav">
                        <a href="about.html" data-i18n="footer.about">${i18n.t('footer.about')}</a>
                        <a href="contact.html" data-i18n="footer.contact">${i18n.t('footer.contact')}</a>
                        <a href="admin.html" style="color: var(--color-primary, #e67e22); font-weight: 600;">🔐 Admin</a>
                    </nav>
                    
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
                
                <div class="footer-right">
                    <div class="footer-copy" data-i18n="footer.copyright">
                        ${i18n.t('footer.copyright')}
                    </div>
                    <div class="theme-toggle">
                        <span class="theme-label">Tema:</span>
                        <button class="theme-btn-text ${currentTheme === 'light' ? 'active' : ''}" data-theme="light">Claro</button>
                        <span class="theme-divider">|</span>
                        <button class="theme-btn-text ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">Escuro</button>
                    </div>
                </div>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        // Language buttons
        const langBtns = this.target.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.setLang(lang);

                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Theme buttons
        const themeBtns = this.target.querySelectorAll('.theme-btn-text');
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('beersl-theme', theme);

                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}
