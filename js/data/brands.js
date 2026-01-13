const beerBrands = [
    {
        id: 'weihenstephaner',
        name: 'Weihenstephaner',
        origin: '🇩🇪 Germany',
        website: 'https://www.weihenstephaner.de',
        description: 'brand.weihenstephaner.description',
        image: 'assets/brands/weihenstephaner.png'
    },
    {
        id: 'guinness',
        name: 'Guinness',
        origin: '🇮🇪 Ireland',
        website: 'https://www.guinness.com',
        description: 'brand.guinness.description',
        image: 'assets/brands/guinness.png'
    },
    {
        id: 'sierra-nevada',
        name: 'Sierra Nevada',
        origin: '🇺🇸 USA',
        website: 'https://sierranevada.com',
        description: 'brand.sierra-nevada.description',
        image: 'assets/brands/sierra-nevada.png'
    },
    {
        id: 'chimay',
        name: 'Chimay',
        origin: '🇧🇪 Belgium',
        website: 'https://chimay.com',
        description: 'brand.chimay.description',
        image: 'assets/brands/chimay.png'
    },
    {
        id: 'pilsner-urquell',
        name: 'Pilsner Urquell',
        origin: '🇨🇿 Czech Republic',
        website: 'https://www.pilsnerurquell.com',
        description: 'brand.pilsner-urquell.description',
        image: 'assets/brands/pilsner-urquell.png'
    },
    {
        id: 'duvel',
        name: 'Duvel Moortgat',
        origin: '🇧🇪 Belgium',
        website: 'https://www.duvel.com',
        description: 'brand.duvel.description',
        image: 'assets/brands/duvel.png'
    },
    {
        id: 'fullers',
        name: "Fuller's",
        origin: '🇬🇧 UK',
        website: 'https://www.fullers.co.uk',
        description: 'brand.fullers.description',
        image: 'assets/brands/fullers.png'
    },
    {
        id: 'stone',
        name: 'Stone Brewing',
        origin: '🇺🇸 USA',
        website: 'https://www.stonebrewing.com',
        description: 'brand.stone.description',
        image: 'assets/brands/stone.png'
    }
];

// Export for usage in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = beerBrands;
} else {
    window.beerBrands = beerBrands;
}
