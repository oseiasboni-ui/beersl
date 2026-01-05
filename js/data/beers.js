export const beers = [
    {
        id: 'altbier',
        name: 'Altbier (Ale)',
        family: 'Ale Britânica', // Note: Image says Ale Brit?nica but Altbier is German. Using image text.
        tag: 'Maltada',
        abv: '5.5%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png', // We will need a placeholder
        description: 'Cerveja de Dusseldorf, cor de cobre, fermentada a frio. Amargor firme de lúpulo equilibrado por um corpo de malte rico, mas com final seco e limpo.',
        category: 'Ales',
        appearance: {
            color: 'Cobre a marrom claro',
            colorHex: '#D89E10', // Approximate
            clarity: 'Brilhante',
            foam: 'Off-white, persistente'
        },
        sensory: {
            malte: 50,
            lupulo: 30,
            levedura: 10
        },
        mouthfeel: {
            body: 'Médio',
            carbonation: 'Média',
            texture: 'Suave',
            finish: 'Seco e amargo'
        },
        history: "'Alt' significa 'velho', referindo-se ao método antigo de fermentação alta (Ale) mantido em Dusseldorf.",
        ingredients: {
            malts: 'Pilsner, Munich, Cara',
            hops: 'Spalt',
            yeast: 'Alt (Ale)',
            adjuncts: 'Nenhum'
        },
        specs: {
            abvRange: '4.3-5.5%',
            ibu: '25-50',
            srm: '11-17',
            og: '1.044-1.052',
            fg: '1.008-1.014'
        },
        variations: ['Düsseldorf Alt'],
        service: {
            temperature: '8-10°C',
            glass: 'Becher (Copo cilíndrico curto)',
            validity: 'Média'
        },
        pairing: ['Porco Assado', 'Mostarda Escura']
    },
    {
        id: 'altbier-cold',
        name: 'Altbier (cold-conditioned)',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '5.5%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-amber-ale',
        name: 'American Amber Ale',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '6.2%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-barleywine',
        name: 'American Barleywine',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '12.0%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-blonde-ale',
        name: 'American Blonde Ale',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '5.5%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-brown-ale',
        name: 'American Brown Ale',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '6.2%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-ipa',
        name: 'American IPA',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '7.5%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Ales'
    },
    {
        id: 'american-lager',
        name: 'American Lager',
        family: 'Ale Britânica',
        tag: 'Maltada',
        abv: '5.3%',
        rating: 5.0,
        image: 'assets/beer-placeholder.png',
        category: 'Lagers'
    }
];
