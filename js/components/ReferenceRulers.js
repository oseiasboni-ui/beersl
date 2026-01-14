import { i18n } from '../i18n/i18n.js';

export class ReferenceRulers {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // SRM Data definition
        this.srmColors = [
            { range: '1-2', key: 'color.straw', color: '#fbfabf', textColor: '#333', srmMin: 1, srmMax: 2 },
            { range: '3', key: 'color.yellow', color: '#f5f0a0', textColor: '#333', srmMin: 3, srmMax: 3 },
            { range: '4-5', key: 'color.yellow', color: '#e8d26d', textColor: '#333', srmMin: 4, srmMax: 5 },
            { range: '6', key: 'color.gold', color: '#d8bc54', textColor: '#333', srmMin: 6, srmMax: 6 },
            { range: '7-9', key: 'color.amber', color: '#d4aa3b', textColor: '#fff', srmMin: 7, srmMax: 9 },
            { range: '10-12', key: 'color.amber', color: '#c48f2e', textColor: '#fff', srmMin: 10, srmMax: 12 },
            { range: '13-15', key: 'color.copper', color: '#ab651d', textColor: '#fff', srmMin: 13, srmMax: 15 },
            { range: '16-19', key: 'color.brown', color: '#8d4c1e', textColor: '#fff', srmMin: 16, srmMax: 19 },
            { range: '20-24', key: 'color.brown', color: '#5d341a', textColor: '#fff', srmMin: 20, srmMax: 24 },
            { range: '25-29', key: 'color.dark_brown', color: '#442116', textColor: '#fff', srmMin: 25, srmMax: 29 },
            { range: '30-39', key: 'color.dark_brown', color: '#2b140e', textColor: '#fff', srmMin: 30, srmMax: 39 },
            { range: '40+', key: 'color.black', color: '#000000', textColor: '#fff', srmMin: 40, srmMax: 100 }
        ];

        // Clarity Data Definition
        this.clarityLevels = [
            { key: 'clarity.brilliant', ftu: '0-35', blur: '0px', opacity: 1, ftuMin: 0, ftuMax: 35 },
            { key: 'clarity.almost_brilliant', ftu: '35-69', blur: '1px', opacity: 0.9, ftuMin: 35, ftuMax: 69 },
            { key: 'clarity.slightly_hazy', ftu: '69-138', blur: '3px', opacity: 0.85, ftuMin: 69, ftuMax: 138 },
            { key: 'clarity.hazy', ftu: '138-276', blur: '5px', opacity: 0.8, ftuMin: 138, ftuMax: 276 },
            { key: 'clarity.opaque', ftu: '> 276', blur: '10px', opacity: 0.7, ftuMin: 276, ftuMax: 500 }
        ];

        // Current filter state
        this.selectedSrmIndex = null;  // null = show all
        this.selectedClarityIndex = null;

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Listen for clear filters from sidebar
        document.addEventListener('clearRulerFilters', () => {
            this.selectedSrmIndex = null;
            this.selectedClarityIndex = null;
            this.render();
            this.emitFilterChange();
        });
    }

    render() {
        this.target.innerHTML = `
            <div class="rulers-toolbar">
                <!-- SRM Timeline -->
                <div class="ruler-group">
                    <div class="ruler-title-wrapper">
                        <span class="ruler-main-title">
                            <span data-i18n="ruler.color_scale">${i18n.t('ruler.color_scale')}</span> 
                            <strong class="highlight-word" data-i18n="ruler.color">${i18n.t('ruler.color')}</strong> 
                            <span data-i18n="ruler.color_suffix">${i18n.t('ruler.color_suffix')}</span> 
                            <span class="acronym">(SRM)</span>
                        </span>
                    </div>
                    <div class="timeline-track">
                        <div class="track-line"></div>
                        <div class="nodes-container">
                            ${this.srmColors.map((item, index) => `
                                <div class="ruler-node srm-node ${this.selectedSrmIndex === index ? 'selected' : ''}" 
                                     style="background-color: ${item.color};" 
                                     data-label="${i18n.t(item.key)}" 
                                     data-value="${item.range}"
                                     data-index="${index}">
                                    <div class="tooltip">
                                        <strong>${item.range}</strong> ${i18n.t(item.key)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Clarity Timeline -->
                <div class="ruler-group">
                    <div class="ruler-title-wrapper">
                        <span class="ruler-main-title">
                            <span data-i18n="ruler.clarity_scale">${i18n.t('ruler.clarity_scale')}</span> 
                            <strong class="highlight-word" data-i18n="ruler.clarity">${i18n.t('ruler.clarity')}</strong> 
                            <span data-i18n="ruler.clarity_suffix">${i18n.t('ruler.clarity_suffix')}</span> 
                            <span class="acronym">(FTU)</span>
                        </span>
                    </div>
                    <div class="timeline-track">
                        <div class="track-line"></div>
                         <div class="nodes-container">
                            ${this.clarityLevels.map((item, index) => `
                                <div class="ruler-node clarity-node ${this.selectedClarityIndex === index ? 'selected' : ''}"
                                     data-index="${index}">
                                    <div class="clarity-circle" style="backdrop-filter: blur(${item.blur}); -webkit-backdrop-filter: blur(${item.blur});"></div>
                                    <div class="tooltip">
                                        <strong>${item.ftu}</strong> ${i18n.t(item.key)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        this.attachEventListeners();
    }

    attachEventListeners() {
        // SRM nodes click
        const srmNodes = this.target.querySelectorAll('.srm-node');
        srmNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);

                // Toggle selection (click again to deselect)
                if (this.selectedSrmIndex === index) {
                    this.selectedSrmIndex = null;
                } else {
                    this.selectedSrmIndex = index;
                }

                this.render();
                this.emitFilterChange();
            });
        });

        // Clarity nodes click
        const clarityNodes = this.target.querySelectorAll('.clarity-node');
        clarityNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);

                if (this.selectedClarityIndex === index) {
                    this.selectedClarityIndex = null;
                } else {
                    this.selectedClarityIndex = index;
                }

                this.render();
                this.emitFilterChange();
            });
        });

        // Clear filters button
        const clearBtn = document.getElementById('clear-ruler-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.selectedSrmIndex = null;
                this.selectedClarityIndex = null;
                this.render();
                this.emitFilterChange();
            });
        }
    }

    hasActiveFilters() {
        return this.selectedSrmIndex !== null || this.selectedClarityIndex !== null;
    }

    emitFilterChange() {
        let srmFilter = { min: 1, max: 100 };
        let ftuFilter = { min: 0, max: 500 };
        let srmLabel = null;
        let ftuLabel = null;

        if (this.selectedSrmIndex !== null) {
            const srm = this.srmColors[this.selectedSrmIndex];
            srmFilter = { min: srm.srmMin, max: srm.srmMax };
            srmLabel = `${srm.range} (${i18n.t(srm.key)})`;
        }

        if (this.selectedClarityIndex !== null) {
            const ftu = this.clarityLevels[this.selectedClarityIndex];
            ftuFilter = { min: ftu.ftuMin, max: ftu.ftuMax };
            ftuLabel = `${ftu.ftu} (${i18n.t(ftu.key)})`;
        }

        const event = new CustomEvent('rulerFilterChanged', {
            detail: {
                srm: srmFilter,
                ftu: ftuFilter,
                srmLabel: srmLabel,
                ftuLabel: ftuLabel
            }
        });
        document.dispatchEvent(event);
    }

    // Static helper to parse SRM range
    static parseSrmRange(rangeStr) {
        if (!rangeStr) return { min: 1, max: 100 };
        const cleaned = rangeStr.replace(/[+]/g, '').trim();
        const parts = cleaned.split(/[–\-]/);
        if (parts.length === 2) {
            return {
                min: parseInt(parts[0]) || 1,
                max: parseInt(parts[1]) || 100
            };
        } else if (parts.length === 1) {
            const val = parseInt(parts[0]) || 1;
            return { min: val, max: val };
        }
        return { min: 1, max: 100 };
    }

    static rangesOverlap(beerRange, filterRange) {
        return beerRange.min <= filterRange.max && beerRange.max >= filterRange.min;
    }
}
