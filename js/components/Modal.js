import { i18n } from '../i18n/i18n.js';


export class Modal {
    constructor(targetId, beers = []) {
        this.container = document.getElementById(targetId);
        this.beers = beers;
        this.currentIndex = -1;
        this.currentBeer = null; // Track current beer for image upload
        this.cropper = null; // Cropper.js instance
        this.renderShell();

        // Bind methods to ensure 'this' context logic
        this.navigate = this.navigate.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
        this.handleWheel = this.handleWheel.bind(this);

        // Event delegation for closing and click navigation
        this.container.addEventListener('click', (e) => {
            if (e.target === this.container || e.target.closest('.close-modal-btn')) {
                this.close();
            }
            if (e.target.closest('.modal-prev-btn')) {
                this.navigate(-1);
            }
            if (e.target.closest('.modal-next-btn')) {
                this.navigate(1);
            }
            // Handle upload button click
            if (e.target.closest('.modal-upload-btn')) {
                const fileInput = document.getElementById('beer-style-image-input');
                if (fileInput) fileInput.click();
            }
        });

        // Touch handling state
        this.touchStartX = 0;
        this.touchEndX = 0;

        // Wheel handling debounce state
        this.isWheeling = false;

        // Listen for open events
        document.addEventListener('openModal', (e) => {
            this.open(e.detail);
        });

        // Setup image upload handlers
        this.setupImageUpload();
    }

    renderShell() {
        this.container.innerHTML = `
            <div class="modal-content">
                <button class="modal-nav-btn modal-prev-btn" aria-label="Previous">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                
                <div class="modal-left" id="modal-left">
                    <!-- Dynamic Left Content -->
                </div>
                <div class="modal-right" id="modal-right">
                   <!-- Dynamic Right Content -->
                </div>
                
                <button class="modal-nav-btn modal-next-btn" aria-label="Next">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                
                <button class="close-modal-btn" aria-label="Close">&times;</button>
            </div>
        `;

        // Inject specific styles for nav buttons if not present
        if (!document.getElementById('modal-nav-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-nav-styles';
            style.textContent = `
                .modal-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgb(255, 255, 255);
                    border: 2px solid white;
                    border-radius: 50%;
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 100;
                    transition: all 0.2s;
                    color: #555;
                    box-shadow: 0 0 10px rgba(230, 126, 34, 0.6); 
                    opacity: 1;
                }
                .modal-nav-btn:hover {
                    background: white;
                    color: #e67e22;
                    box-shadow: 0 0 20px rgba(230, 126, 34, 0.9);
                    transform: translateY(-50%) scale(1.1);
                }
                /* Arrows inside */
                .modal-prev-btn { left: 20px; }
                .modal-next-btn { right: 20px; }

                /* Close Button Outside & 3x Size */
                .close-modal-btn {
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    background: none;
                    border: none;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 3.5rem;
                    line-height: 1;
                    cursor: pointer;
                    z-index: 101;
                    padding: 0;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s, transform 0.2s;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }
                .close-modal-btn:hover {
                    color: white;
                    transform: scale(1.1);
                }
                
                @media (max-width: 768px) {
                    .modal-nav-btn { 
                        width: 36px; 
                        height: 36px;
                    }
                    .modal-prev-btn { left: 10px; }
                    .modal-next-btn { right: 10px; }

                    /* Mobile Close Button handling */
                    .close-modal-btn {
                        top: 10px;
                        right: 10px;
                        color: #555;
                        text-shadow: none;
                        font-size: 2.5rem;
                        width: auto;
                        height: auto;
                    }
                    /* Ensure content doesn't overlap on mobile */
                    .modal-content {
                        position: relative; 
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    async open(beer) {
        if (!beer) return;

        this.currentBeer = beer; // Store reference for image upload

        // Find index of current beer to establish context for navigation
        if (this.beers.length > 0) {
            this.currentIndex = this.beers.findIndex(b => b.id === beer.id);
        }

        this.renderContent(beer);

        this.container.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.container.classList.add('active');
        });

        // Add Event Listeners for navigation when modal opens
        document.addEventListener('keydown', this.handleKeyDown);
        this.container.addEventListener('touchstart', this.handleTouchStart, { passive: true });
        this.container.addEventListener('touchmove', this.handleTouchMove, { passive: true });
        this.container.addEventListener('touchend', this.handleTouchEnd);
        this.container.addEventListener('wheel', this.handleWheel, { passive: false });
    }

    close() {
        this.container.classList.remove('active');
        setTimeout(() => {
            this.container.classList.add('hidden');
        }, 300);

        // Remove listeners to prevent leaks and unwanted behavior
        document.removeEventListener('keydown', this.handleKeyDown);
        this.container.removeEventListener('touchstart', this.handleTouchStart);
        this.container.removeEventListener('touchmove', this.handleTouchMove);
        this.container.removeEventListener('touchend', this.handleTouchEnd);
        this.container.removeEventListener('wheel', this.handleWheel);
    }

    navigate(direction) {
        if (this.currentIndex === -1 || !this.beers.length) return;

        let newIndex = this.currentIndex + direction;

        // Loop navigation
        if (newIndex < 0) newIndex = this.beers.length - 1;
        if (newIndex >= this.beers.length) newIndex = 0;

        this.currentIndex = newIndex;
        this.renderContent(this.beers[newIndex]);
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowLeft') this.navigate(-1);
        if (e.key === 'ArrowRight') this.navigate(1);
        if (e.key === 'Escape') this.close();
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }

    handleTouchMove(e) {
        // Optional: logic if needed during move
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }

    handleSwipe() {
        const threshold = 50; // minimum distance for swipe
        if (this.touchEndX < this.touchStartX - threshold) {
            this.navigate(1); // Swipe Left -> Next
        }
        if (this.touchEndX > this.touchStartX + threshold) {
            this.navigate(-1); // Swipe Right -> Prev
        }
    }

    handleWheel(e) {
        if (this.isWheeling) return;

        // Detect horizontal trackpad swipe (often maps to deltaX)
        // Check if movement is primarily horizontal and significant
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 10) {
            // Prevent browser back/forward or scroll
            e.preventDefault();

            this.isWheeling = true;
            if (e.deltaX > 0) {
                this.navigate(1); // Scroll right -> Next
            } else {
                this.navigate(-1); // Scroll left -> Prev
            }

            // Debounce to prevent rapid-fire skipping
            setTimeout(() => {
                this.isWheeling = false;
            }, 600); // 600ms cooldown
        }
    }

    renderContent(beer) {
        this.currentBeer = beer; // Update current beer reference

        // Check localStorage for custom uploaded image first
        const storedImage = localStorage.getItem(`beer-style-image-${beer.id}`);
        const hasCustomImage = storedImage || (beer.image && !beer.image.includes('placeholder'));
        const imageUrl = storedImage || (hasCustomImage ? beer.image : null);

        // Determine fermentation type (Ale, Lager, Hybrid, Wild)
        const getFermentationType = (category) => {
            if (!category) return 'Ale';
            const cat = category.toLowerCase();
            if (cat.includes('lager') || cat.includes('pilsner') || cat.includes('bock')) return 'Lager';
            if (cat.includes('hybrid') || cat.includes('steam') || cat.includes('kölsch')) return 'Hybrid';
            if (cat.includes('wild') || cat.includes('sour') || cat.includes('lambic')) return 'Wild';
            return 'Ale';
        };
        const fermentationType = getFermentationType(beer.category);

        const uploadButtonHtml = `
            <button class="modal-upload-btn" title="Upload Image">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            </button>
        `;

        const leftContent = `
            <div class="modal-info-tag">${fermentationType}</div>
            
            <div class="modal-image-container" style="text-align: center; margin: 2rem 0; position: relative;">
                ${uploadButtonHtml}
                ${imageUrl ? `
                    <img src="${imageUrl}" alt="${beer.name}" 
                         style="max-width: 100%; max-height: 250px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                ` : `
                    <div class="beer-detail-glass" style="background-color: ${beer.appearance?.colorHex || '#f1c40f'}"></div>
                `}
            </div>
            
            <div style="margin-top: 2rem; text-align: center; font-size: 0.8rem; opacity: 0.7;">
                ${this.currentIndex + 1} / ${this.beers.length || 139}
            </div>
        `;

        const rightContent = `
            
            <div class="beer-title-section">
                <span style="color: #e67e22; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${beer.origin || ''}</span>
                <h2>${beer.name}</h2>
                <p class="aka">${beer.alias || ''}</p>
            </div>
            
            <div class="general-impression">
                <h4>${i18n.t('modal.general_impression').toUpperCase()}</h4>
                <p>${i18n.t(beer.description) || i18n.t('modal.no_description')}</p>
            </div>
            
            <div class="section-title">${i18n.t('modal.appearance').toUpperCase()}</div>
            <div class="specs-grid">
                 <div class="spec-item">
                    <h5>${i18n.t('modal.color').toUpperCase()}</h5>
                    <div style="width: 20px; height: 20px; background: ${beer.appearance?.colorHex || '#ccc'}; border-radius: 50%; margin: 0 auto 5px;"></div>
                    <span>${i18n.t(beer.appearance?.color) || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.clarity_label').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">✨</div>
                    <span>${i18n.t(beer.appearance?.clarity) || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.foam').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">☁️</div>
                    <span>${i18n.t(beer.appearance?.foam) || 'N/A'}</span>
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
                    <span>${i18n.t(beer.mouthfeel?.body) || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.carbonation').toUpperCase()}</h5>
                    <span>${i18n.t(beer.mouthfeel?.carbonation) || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.texture').toUpperCase()}</h5>
                    <span>${i18n.t(beer.mouthfeel?.texture) || 'N/A'}</span>
                 </div>
            </div>

            <div class="section-title">${i18n.t('modal.comparison').toUpperCase()}</div>
            <p style="color: #555; line-height: 1.6; margin-bottom: 2rem;">${i18n.t(beer.comparison) || i18n.t('modal.no_comparison')}</p>

            <div class="section-title">${i18n.t('modal.examples').toUpperCase()}</div>
            <div class="examples-list" style="margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                ${(beer.examples || []).map(ex => `
                    <div class="example-tag" style="background: #f8f9fa; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #e9ecef;">
                        <strong>${ex.brand}</strong> <span style="color: #7f8c8d;">${ex.name}</span>
                    </div>
                `).join('') || '<span style="color: #999;">-</span>'}
            </div>

            <div class="section-title">${i18n.t('modal.history').toUpperCase()}</div>
            <p style="color: #555; line-height: 1.6; margin-bottom: 2rem;">${i18n.t(beer.history) || i18n.t('modal.no_history')}</p>

            <div class="section-title">${i18n.t('modal.ingredients').toUpperCase()}</div>
            <div class="ingredients-list" style="margin-bottom: 2rem;">
                 <p><strong>${i18n.t('modal.malt')}:</strong> ${i18n.t(beer.ingredients?.malts) || '-'}</p>
                 <p><strong>${i18n.t('modal.hops')}:</strong> ${i18n.t(beer.ingredients?.hops) || '-'}</p>
                 <p><strong>${i18n.t('modal.yeast')}:</strong> ${i18n.t(beer.ingredients?.yeast) || '-'}</p>
            </div>

            <div class="section-title">${i18n.t('modal.vital_stats').toUpperCase()}</div>
            <div class="specs-grid">
                  <div class="spec-item">
                    <h5>IBU</h5>
                    <span>${beer.specs?.ibu || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>SRM</h5>
                    <span>${beer.specs?.srm || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>ABV</h5>
                    <span>${beer.specs?.abvRange || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>OG</h5>
                    <span>${beer.specs?.og || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>FG</h5>
                    <span>${beer.specs?.fg || '-'}</span>
                 </div>
            </div>
        `;

        document.getElementById('modal-left').innerHTML = leftContent;
        document.getElementById('modal-right').innerHTML = rightContent;
    }

    setupImageUpload() {
        const fileInput = document.getElementById('beer-style-image-input');
        const uploadModal = document.getElementById('style-upload-modal');
        const imageToCrop = document.getElementById('style-image-to-crop');
        const btnSave = document.getElementById('style-btn-save');
        const btnDiscard = document.getElementById('style-btn-discard');
        const btnRotate = document.getElementById('style-btn-rotate');
        const btnClose = document.getElementById('style-btn-close');

        if (!fileInput || !uploadModal || !imageToCrop) return;

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (evt) => {
                    imageToCrop.src = evt.target.result;
                    uploadModal.classList.add('open');

                    if (this.cropper) {
                        this.cropper.destroy();
                    }

                    this.cropper = new Cropper(imageToCrop, {
                        aspectRatio: 1, // Square crop for beer styles
                        viewMode: 1,
                        autoCropArea: 1,
                    });
                };
                reader.readAsDataURL(file);
            }
            // Reset input so same file can be selected again
            e.target.value = '';
        });

        // Close/Discard handlers
        const closeUploadModal = () => {
            uploadModal.classList.remove('open');
            if (this.cropper) {
                this.cropper.destroy();
                this.cropper = null;
            }
        };

        btnDiscard.addEventListener('click', closeUploadModal);
        btnClose.addEventListener('click', closeUploadModal);

        // Rotate handler
        btnRotate.addEventListener('click', () => {
            if (this.cropper) {
                this.cropper.rotate(90);
            }
        });

        // Save handler
        btnSave.addEventListener('click', () => {
            if (this.cropper && this.currentBeer) {
                const canvas = this.cropper.getCroppedCanvas({
                    width: 500,
                    height: 500
                });

                const croppedImage = canvas.toDataURL('image/jpeg', 0.9);

                // Save to localStorage
                localStorage.setItem(`beer-style-image-${this.currentBeer.id}`, croppedImage);

                // Update current beer in-memory
                this.currentBeer.hasCustomImage = true;
                this.currentBeer.customImage = croppedImage;

                // Update modal view
                this.renderContent(this.currentBeer);

                // Dispatch update event for grid
                const updateEvent = new CustomEvent('beerUpdated', {
                    detail: {
                        ...this.currentBeer,
                        image: croppedImage
                    }
                });
                document.dispatchEvent(updateEvent);

                closeUploadModal();
            }
        });
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
