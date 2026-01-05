import { i18n } from '../i18n/i18n.js';

export class Modal {
    constructor(targetId) {
        this.container = document.getElementById(targetId);
        this.renderShell();

        // Event delegation for closing
        this.container.addEventListener('click', (e) => {
            if (e.target === this.container || e.target.closest('.close-modal-btn')) {
                this.close();
            }
        });

        // Listen for open events
        document.addEventListener('openModal', (e) => {
            this.open(e.detail);
        });
    }

    renderShell() {
        this.container.innerHTML = `
            <div class="modal-content">
                <div class="modal-left" id="modal-left">
                    <!-- Dynamic Left Content -->
                </div>
                <div class="modal-right" id="modal-right">
                   <!-- Dynamic Right Content -->
                </div>
            </div>
        `;
    }

    open(beer) {
        if (!beer) return;

        const leftContent = `
            <div class="modal-info-tag">${beer.category || 'Ale'}</div>
            <div class="beer-detail-glass" style="background-color: ${beer.appearance?.colorHex || '#f1c40f'}"></div>
            <div style="margin-top: 2rem; text-align: center; font-size: 0.8rem; opacity: 0.7;">
                ${beer.id}/139
            </div>
        `;

        const rightContent = `
            <button class="close-modal-btn">x</button>
            
            <div class="beer-title-section">
                <span style="color: #e67e22; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${beer.origin || ''}</span>
                <h2>${beer.name}</h2>
                <p class="aka">${beer.alias || ''}</p>
            </div>
            
            <div class="general-impression">
                <h4>${i18n.t('modal.general_impression').toUpperCase()}</h4>
                <p>${beer.description || i18n.t('modal.no_description')}</p>
            </div>
            
            <div class="section-title">${i18n.t('modal.appearance').toUpperCase()}</div>
            <div class="specs-grid">
                 <div class="spec-item">
                    <h5>${i18n.t('modal.color').toUpperCase()}</h5>
                    <div style="width: 20px; height: 20px; background: ${beer.appearance?.colorHex || '#ccc'}; border-radius: 50%; margin: 0 auto 5px;"></div>
                    <span>${beer.appearance?.color || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.clarity_label').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">✨</div>
                    <span>${beer.appearance?.clarity || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.foam').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">☁️</div>
                    <span>${beer.appearance?.foam || 'N/A'}</span>
                 </div>
            </div>

            <div class="section-title">${i18n.t('modal.sensory_profile').toUpperCase()}</div>
            <div class="sensory-bars">
                 ${this.renderSensoryBar(i18n.t('modal.malt'), beer.sensory?.malte || 0, 'malte')}
                 ${this.renderSensoryBar(i18n.t('modal.hops'), beer.sensory?.lupulo || 0, 'lupulo')}
                 ${this.renderSensoryBar(i18n.t('modal.yeast'), beer.sensory?.levedura || 0, 'levedura')}
            </div>

            <div class="section-title">${i18n.t('modal.mouthfeel').toUpperCase()}</div>
            <div class="specs-grid">
                  <div class="spec-item">
                    <h5>${i18n.t('modal.body').toUpperCase()}</h5>
                    <span>${beer.mouthfeel?.body || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.carbonation').toUpperCase()}</h5>
                    <span>${beer.mouthfeel?.carbonation || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.texture').toUpperCase()}</h5>
                    <span>${beer.mouthfeel?.texture || 'N/A'}</span>
                 </div>
            </div>
        `;

        document.getElementById('modal-left').innerHTML = leftContent;
        document.getElementById('modal-right').innerHTML = rightContent;

        this.container.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.container.classList.add('active');
        });
    }

    close() {
        this.container.classList.remove('active');
        setTimeout(() => {
            this.container.classList.add('hidden');
        }, 300);
    }

    renderSensoryBar(label, value, type) {
        return `
            <div class="sensory-row">
                <span class="sensory-label">${label}</span>
                <div class="bar-container">
                    <div class="bar-fill ${type}" style="width: ${value}%"></div>
                </div>
                <span style="font-size: 0.75rem; color: #7f8c8d; width: 30px; text-align: right;">${value}%</span>
            </div>
        `;
    }
}
