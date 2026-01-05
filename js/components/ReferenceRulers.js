import { i18n } from '../i18n/i18n.js';

export class ReferenceRulers {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // SRM Data definition
        this.srmColors = [
            { range: '1-2', name: 'Pale Straw', color: '#fbfabf', textColor: '#333' },
            { range: '3', name: 'Straw', color: '#f5f0a0', textColor: '#333' },
            { range: '4-5', name: 'Pale Gold', color: '#e8d26d', textColor: '#333' },
            { range: '6', name: 'Deep Gold', color: '#d8bc54', textColor: '#333' },
            { range: '7-9', name: 'Pale Amber', color: '#d4aa3b', textColor: '#fff' },
            { range: '10-12', name: 'Medium Amber', color: '#c48f2e', textColor: '#fff' },
            { range: '13-15', name: 'Deep Amber', color: '#ab651d', textColor: '#fff' },
            { range: '16-19', name: 'Amber-Brown', color: '#8d4c1e', textColor: '#fff' },
            { range: '20-24', name: 'Brown', color: '#5d341a', textColor: '#fff' },
            { range: '25-29', name: 'Ruby Brown', color: '#442116', textColor: '#fff' },
            { range: '30-39', name: 'Deep Brown', color: '#2b140e', textColor: '#fff' },
            { range: '40+', name: 'Black', color: '#000000', textColor: '#fff' }
        ];

        // Clarity Data Definition
        this.clarityLevels = [
            { name: 'Brilliant', ftu: '0-35', blur: '0px', opacity: 1 },
            { name: 'Clear', ftu: '35-69', blur: '1px', opacity: 0.9 },
            { name: 'Slightly Hazy', ftu: '69-138', blur: '3px', opacity: 0.85 },
            { name: 'Hazy', ftu: '138-276', blur: '5px', opacity: 0.8 },
            { name: 'Opaque', ftu: '> 276', blur: '10px', opacity: 0.7 }
        ];

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());
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
                            ${this.srmColors.map(item => `
                                <div class="ruler-node srm-node" style="background-color: ${item.color};" data-label="${item.name}" data-value="${item.range}">
                                    <div class="tooltip">
                                        <strong>${item.range}</strong> ${item.name}
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
                            ${this.clarityLevels.map(item => `
                                <div class="ruler-node clarity-node">
                                    <div class="clarity-circle" style="backdrop-filter: blur(${item.blur}); -webkit-backdrop-filter: blur(${item.blur});"></div>
                                    <div class="tooltip">
                                        <strong>${item.ftu}</strong> ${item.name}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
