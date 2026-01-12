export const beers = [
    {
        id: 'altbier',
        name: 'Altbier',
        origin: '🇩🇪',
        family: 'beer.altbier.family',
        tag: 'beer.altbier.tag',
        abv: '4.8%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.altbier.description',
        category: 'Pale Ale',
        appearance: {
            color: 'beer.altbier.appearance.color',
            colorHex: '#A85E14',
            clarity: 'beer.altbier.appearance.clarity',
            foam: 'beer.altbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.altbier.mouthfeel.body',
            carbonation: 'beer.altbier.mouthfeel.carbonation',
            texture: 'beer.altbier.mouthfeel.texture',
            finish: 'beer.altbier.mouthfeel.finish'
        },
        history: 'beer.altbier.history',
        comparison: 'beer.altbier.comparison',
        ingredients: {
            malts: 'beer.altbier.ingredients.malts',
            hops: 'beer.altbier.ingredients.hops',
            yeast: 'beer.altbier.ingredients.yeast',
            adjuncts: 'beer.altbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.5%',
            ibu: '25–50',
            srm: '11–17',
            og: '1.044–1.052',
            fg: '1.008–1.014'
        },
        variations: ['Düsseldorfer Altbier', 'Sticke Alt'],
        examples: [
            { brand: 'Uerige', name: 'Alt' },
            { brand: 'Füchschen', name: 'Alt' },
            { brand: 'Schumacher', name: 'Alt' },
            { brand: 'Schlüssel', name: 'Alt' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Becher (200ml)',
            validity: '3–6 meses'
        },
        pairing: ['Sauerbraten', 'Bratwurst', 'Queijos suaves']
    },
    {
        id: 'american-light-lager',
        name: 'American Light Lager',
        origin: '🇺🇸',
        family: 'beer.american-light-lager.family',
        tag: 'beer.american-light-lager.tag',
        abv: '3.5%',
        rating: 2.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-light-lager.description',
        category: 'Light Lager',
        appearance: {
            color: 'beer.american-light-lager.appearance.color',
            colorHex: '#F6F5E3', // Very pale straw
            clarity: 'beer.american-light-lager.appearance.clarity',
            foam: 'beer.american-light-lager.appearance.foam'
        },
        sensory: {
            malte: 10,
            lupulo: 5,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.american-light-lager.mouthfeel.body',
            carbonation: 'beer.american-light-lager.mouthfeel.carbonation',
            texture: 'beer.american-light-lager.mouthfeel.texture',
            finish: 'beer.american-light-lager.mouthfeel.finish'
        },
        history: 'beer.american-light-lager.history',
        comparison: 'beer.american-light-lager.comparison',
        ingredients: {
            malts: 'beer.american-light-lager.ingredients.malts',
            hops: 'beer.american-light-lager.ingredients.hops',
            yeast: 'beer.american-light-lager.ingredients.yeast',
            adjuncts: 'beer.american-light-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.8–4.2%',
            ibu: '8–12',
            srm: '2–3',
            og: '1.028–1.040',
            fg: '0.998–1.008'
        },
        variations: ['Lite Beer', 'Diet Beer'],
        examples: [
            { brand: 'Bud Light', name: 'Bud Light' },
            { brand: 'Coors Light', name: 'Coors Light' },
            { brand: 'Miller', name: 'Lite' }
        ],
        service: {
            temperature: '0–4°C',
            glass: 'Pilsner Glass',
            validity: '3–6 meses'
        },
        pairing: ['Saladas', 'Peixes delicados', 'Comidas picantes (para limpar)']
    },
    {
        id: 'american-lager',
        name: 'American Lager',
        origin: '🇺🇸',
        family: 'beer.american-lager.family',
        tag: 'beer.american-lager.tag',
        abv: '5.0%',
        rating: 3.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-lager.description',
        category: 'Standard Lager',
        appearance: {
            color: 'beer.american-lager.appearance.color',
            colorHex: '#F3E5AB', // Pale yellow
            clarity: 'beer.american-lager.appearance.clarity',
            foam: 'beer.american-lager.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 10,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.american-lager.mouthfeel.body',
            carbonation: 'beer.american-lager.mouthfeel.carbonation',
            texture: 'beer.american-lager.mouthfeel.texture',
            finish: 'beer.american-lager.mouthfeel.finish'
        },
        history: 'beer.american-lager.history',
        comparison: 'beer.american-lager.comparison',
        ingredients: {
            malts: 'beer.american-lager.ingredients.malts',
            hops: 'beer.american-lager.ingredients.hops',
            yeast: 'beer.american-lager.ingredients.yeast',
            adjuncts: 'beer.american-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.3%',
            ibu: '8–18',
            srm: '2–4',
            og: '1.040–1.050',
            fg: '1.004–1.010'
        },
        variations: ['Premium Lager'],
        examples: [
            { brand: 'Budweiser', name: 'Original' },
            { brand: 'Pabst', name: 'Blue Ribbon' },
            { brand: 'Coors', name: 'Banquet' }
        ],
        service: {
            temperature: '0–4°C',
            glass: 'Lager Glass / Shaker',
            validity: '4–6 meses'
        },
        pairing: ['Hambúrguer', 'Pizza', 'Churrasco americano', 'Pipoca']
    },
    {
        id: 'cream-ale',
        name: 'Cream Ale',
        origin: '🇺🇸',
        family: 'beer.cream-ale.family',
        tag: 'beer.cream-ale.tag',
        abv: '5.2%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.cream-ale.description',
        category: 'Hybrid / Cream Ale',
        appearance: {
            color: 'beer.cream-ale.appearance.color',
            colorHex: '#F0E68C', // Pale gold
            clarity: 'beer.cream-ale.appearance.clarity',
            foam: 'beer.cream-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 20,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.cream-ale.mouthfeel.body',
            carbonation: 'beer.cream-ale.mouthfeel.carbonation',
            texture: 'beer.cream-ale.mouthfeel.texture',
            finish: 'beer.cream-ale.mouthfeel.finish'
        },
        history: 'beer.cream-ale.history',
        comparison: 'beer.cream-ale.comparison',
        ingredients: {
            malts: 'beer.cream-ale.ingredients.malts',
            hops: 'beer.cream-ale.ingredients.hops',
            yeast: 'beer.cream-ale.ingredients.yeast',
            adjuncts: 'beer.cream-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.6%',
            ibu: '8–20',
            srm: '2–5',
            og: '1.042–1.055',
            fg: '1.006–1.012'
        },
        variations: ['Pre-Prohibition Cream Ale'],
        examples: [
            { brand: 'Genesee', name: 'Cream Ale' },
            { brand: 'New Glarus', name: 'Spotted Cow' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pint Glass',
            validity: '3–5 meses'
        },
        pairing: ['Frango frito', 'Comida mexicana leve', 'Saladas com molho']
    },
    {
        id: 'american-wheat-beer',
        name: 'American Wheat Beer',
        origin: '🇺🇸',
        family: 'beer.american-wheat-beer.family',
        tag: 'beer.american-wheat-beer.tag',
        abv: '5.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-wheat-beer.description',
        category: 'American Ale / Wheat',
        appearance: {
            color: 'beer.american-wheat-beer.appearance.color',
            colorHex: '#FFD700', // Gold
            clarity: 'beer.american-wheat-beer.appearance.clarity',
            foam: 'beer.american-wheat-beer.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.american-wheat-beer.mouthfeel.body',
            carbonation: 'beer.american-wheat-beer.mouthfeel.carbonation',
            texture: 'beer.american-wheat-beer.mouthfeel.texture',
            finish: 'beer.american-wheat-beer.mouthfeel.finish'
        },
        history: 'beer.american-wheat-beer.history',
        comparison: 'beer.american-wheat-beer.comparison',
        ingredients: {
            malts: 'beer.american-wheat-beer.ingredients.malts',
            hops: 'beer.american-wheat-beer.ingredients.hops',
            yeast: 'beer.american-wheat-beer.ingredients.yeast',
            adjuncts: 'beer.american-wheat-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–5.5%',
            ibu: '15–30',
            srm: '3–6',
            og: '1.040–1.055',
            fg: '1.008–1.013'
        },
        variations: ['Hoppy Wheat'],
        examples: [
            { brand: 'Bell\'s', name: 'Oberon' },
            { brand: 'Goose Island', name: '312 Urban Wheat' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Weizen Glass',
            validity: '3–4 meses'
        },
        pairing: ['Frutos do mar', 'Saladas de frutas', 'Sushi', 'Queijo de cabra']
    },
    {
        id: 'international-pale-lager',
        name: 'International Pale Lager',
        origin: '🌍',
        family: 'beer.international-pale-lager.family',
        tag: 'beer.international-pale-lager.tag',
        abv: '5.0%',
        rating: 2.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-pale-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-pale-lager.appearance.color',
            colorHex: '#F6E668', // Pale gold
            clarity: 'beer.international-pale-lager.appearance.clarity',
            foam: 'beer.international-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-pale-lager.mouthfeel.body',
            carbonation: 'beer.international-pale-lager.mouthfeel.carbonation',
            texture: 'beer.international-pale-lager.mouthfeel.texture',
            finish: 'beer.international-pale-lager.mouthfeel.finish'
        },
        history: 'beer.international-pale-lager.history',
        comparison: 'beer.international-pale-lager.comparison',
        ingredients: {
            malts: 'beer.international-pale-lager.ingredients.malts',
            hops: 'beer.international-pale-lager.ingredients.hops',
            yeast: 'beer.international-pale-lager.ingredients.yeast',
            adjuncts: 'beer.international-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.0%',
            ibu: '18–25',
            srm: '2–6',
            og: '1.042–1.050',
            fg: '1.008–1.012'
        },
        variations: ['Premium Import Lager'],
        examples: [
            { brand: 'Heineken', name: 'Original' },
            { brand: 'Stella Artois', name: 'Premium Lager' },
            { brand: 'Beck\'s', name: 'Pilsner' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner Glass',
            validity: '6–9 meses'
        },
        pairing: ['Pizza', 'Tacos', 'Espaguete com almondegas', 'Queijo Gouda']
    },
    {
        id: 'international-amber-lager',
        name: 'International Amber Lager',
        origin: '🌍',
        family: 'beer.international-amber-lager.family',
        tag: 'beer.international-amber-lager.tag',
        abv: '5.2%',
        rating: 3.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-amber-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-amber-lager.appearance.color',
            colorHex: '#D99238', // Amber/Caramel
            clarity: 'beer.international-amber-lager.appearance.clarity',
            foam: 'beer.international-amber-lager.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-amber-lager.mouthfeel.body',
            carbonation: 'beer.international-amber-lager.mouthfeel.carbonation',
            texture: 'beer.international-amber-lager.mouthfeel.texture',
            finish: 'beer.international-amber-lager.mouthfeel.finish'
        },
        history: 'beer.international-amber-lager.history',
        comparison: 'beer.international-amber-lager.comparison',
        ingredients: {
            malts: 'beer.international-amber-lager.ingredients.malts',
            hops: 'beer.international-amber-lager.ingredients.hops',
            yeast: 'beer.international-amber-lager.ingredients.yeast',
            adjuncts: 'beer.international-amber-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '8–25',
            srm: '6–14',
            og: '1.042–1.055',
            fg: '1.008–1.014'
        },
        variations: ['Red Lager'],
        examples: [
            { brand: 'Brooklyn', name: 'Lager' },
            { brand: 'Dos Equis', name: 'Amber' },
            { brand: 'Samuel Adams', name: 'Boston Lager' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Lager Glass / Stein',
            validity: '4–6 meses'
        },
        pairing: ['Hambúrguer na brasa', 'Chili com carne', 'Frango assado']
    },
    {
        id: 'international-dark-lager',
        name: 'International Dark Lager',
        origin: '🌍',
        family: 'beer.international-dark-lager.family',
        tag: 'beer.international-dark-lager.tag',
        abv: '5.0%',
        rating: 3.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-dark-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-dark-lager.appearance.color',
            colorHex: '#3E1C0A', // Dark Brown
            clarity: 'beer.international-dark-lager.appearance.clarity',
            foam: 'beer.international-dark-lager.appearance.foam'
        },
        sensory: {
            malte: 45,
            lupulo: 10,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-dark-lager.mouthfeel.body',
            carbonation: 'beer.international-dark-lager.mouthfeel.carbonation',
            texture: 'beer.international-dark-lager.mouthfeel.texture',
            finish: 'beer.international-dark-lager.mouthfeel.finish'
        },
        history: 'beer.international-dark-lager.history',
        comparison: 'beer.international-dark-lager.comparison',
        ingredients: {
            malts: 'beer.international-dark-lager.ingredients.malts',
            hops: 'beer.international-dark-lager.ingredients.hops',
            yeast: 'beer.international-dark-lager.ingredients.yeast',
            adjuncts: 'beer.international-dark-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–6.0%',
            ibu: '8–20',
            srm: '14–22',
            og: '1.044–1.056',
            fg: '1.008–1.012'
        },
        variations: ['Black Lager (International)'],
        examples: [
            { brand: 'Heineken', name: 'Dark' },
            { brand: 'Baltika', name: '#4 Original' },
            { brand: 'Shiner', name: 'Bock' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Lager Glass',
            validity: '4–6 meses'
        },
        pairing: ['Salsichas', 'Ensopados', 'Costelinha de porco']
    },
    {
        id: 'czech-pale-lager',
        name: 'Czech Pale Lager',
        origin: '🇨🇿',
        family: 'beer.czech-pale-lager.family',
        tag: 'beer.czech-pale-lager.tag',
        abv: '3.8%',
        rating: 3.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-pale-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-pale-lager.appearance.color',
            colorHex: '#F9D858', // Light gold
            clarity: 'beer.czech-pale-lager.appearance.clarity',
            foam: 'beer.czech-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 40,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-pale-lager.mouthfeel.body',
            carbonation: 'beer.czech-pale-lager.mouthfeel.carbonation',
            texture: 'beer.czech-pale-lager.mouthfeel.texture',
            finish: 'beer.czech-pale-lager.mouthfeel.finish'
        },
        history: 'beer.czech-pale-lager.history',
        comparison: 'beer.czech-pale-lager.comparison',
        ingredients: {
            malts: 'beer.czech-pale-lager.ingredients.malts',
            hops: 'beer.czech-pale-lager.ingredients.hops',
            yeast: 'beer.czech-pale-lager.ingredients.yeast',
            adjuncts: 'beer.czech-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.0–4.1%',
            ibu: '20–35',
            srm: '3–6',
            og: '1.028–1.044',
            fg: '1.008–1.014'
        },
        variations: ['Světlé Výčepní Pivo'],
        examples: [
            { brand: 'Únětické pivo', name: '10°' },
            { brand: 'Budweiser Budvar', name: 'Original 10°' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Mug (Caneca)',
            validity: '3–4 meses'
        },
        pairing: ['Petiscos de boteco', 'Picles', 'Queijos leves']
    },
    {
        id: 'czech-premium-pale-lager',
        name: 'Czech Premium Pale Lager',
        origin: '🇨🇿',
        family: 'beer.czech-premium-pale-lager.family',
        tag: 'beer.czech-premium-pale-lager.tag',
        abv: '5.0%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-premium-pale-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-premium-pale-lager.appearance.color',
            colorHex: '#F3BE27', // Deep gold
            clarity: 'beer.czech-premium-pale-lager.appearance.clarity',
            foam: 'beer.czech-premium-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 60,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-premium-pale-lager.mouthfeel.body',
            carbonation: 'beer.czech-premium-pale-lager.mouthfeel.carbonation',
            texture: 'beer.czech-premium-pale-lager.mouthfeel.texture',
            finish: 'beer.czech-premium-pale-lager.mouthfeel.finish'
        },
        history: 'beer.czech-premium-pale-lager.history',
        comparison: 'beer.czech-premium-pale-lager.comparison',
        ingredients: {
            malts: 'beer.czech-premium-pale-lager.ingredients.malts',
            hops: 'beer.czech-premium-pale-lager.ingredients.hops',
            yeast: 'beer.czech-premium-pale-lager.ingredients.yeast',
            adjuncts: 'beer.czech-premium-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.8%',
            ibu: '30–45',
            srm: '3.5–6',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Pilsner Urquell Style'],
        examples: [
            { brand: 'Pilsner Urquell', name: 'Original' },
            { brand: 'Budweiser Budvar', name: 'Lager' },
            { brand: 'Gambrinus', name: 'Premium' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Mug (Caneca) / Pilsner',
            validity: '3–5 meses'
        },
        pairing: ['Goulash', 'Schnitzel', 'Pratos picantes']
    },
    {
        id: 'czech-amber-lager',
        name: 'Czech Amber Lager',
        origin: '🇨🇿',
        family: 'beer.czech-amber-lager.family',
        tag: 'beer.czech-amber-lager.tag',
        abv: '4.9%',
        rating: 3.9,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-amber-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-amber-lager.appearance.color',
            colorHex: '#C6742D', // Deep amber/copper
            clarity: 'beer.czech-amber-lager.appearance.clarity',
            foam: 'beer.czech-amber-lager.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 35,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-amber-lager.mouthfeel.body',
            carbonation: 'beer.czech-amber-lager.mouthfeel.carbonation',
            texture: 'beer.czech-amber-lager.mouthfeel.texture',
            finish: 'beer.czech-amber-lager.mouthfeel.finish'
        },
        history: 'beer.czech-amber-lager.history',
        comparison: 'beer.czech-amber-lager.comparison',
        ingredients: {
            malts: 'beer.czech-amber-lager.ingredients.malts',
            hops: 'beer.czech-amber-lager.ingredients.hops',
            yeast: 'beer.czech-amber-lager.ingredients.yeast',
            adjuncts: 'beer.czech-amber-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.8%',
            ibu: '20–35',
            srm: '10–16',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Polotmavé Pivo'],
        examples: [
            { brand: 'Bernard', name: 'Jantarový Ležák' },
            { brand: 'Primátor', name: 'Polotmavý 13°' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug (Caneca)',
            validity: '3–5 meses'
        },
        pairing: ['Frango assado', 'Hambúrguer de lombo', 'Queijos semiduros']
    },
    {
        id: 'czech-dark-lager',
        name: 'Czech Dark Lager',
        origin: '🇨🇿',
        family: 'beer.czech-dark-lager.family',
        tag: 'beer.czech-dark-lager.tag',
        abv: '5.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-dark-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-dark-lager.appearance.color',
            colorHex: '#361E14', // Very dark/black
            clarity: 'beer.czech-dark-lager.appearance.clarity',
            foam: 'beer.czech-dark-lager.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 25,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-dark-lager.mouthfeel.body',
            carbonation: 'beer.czech-dark-lager.mouthfeel.carbonation',
            texture: 'beer.czech-dark-lager.mouthfeel.texture',
            finish: 'beer.czech-dark-lager.mouthfeel.finish'
        },
        history: 'beer.czech-dark-lager.history',
        comparison: 'beer.czech-dark-lager.comparison',
        ingredients: {
            malts: 'beer.czech-dark-lager.ingredients.malts',
            hops: 'beer.czech-dark-lager.ingredients.hops',
            yeast: 'beer.czech-dark-lager.ingredients.yeast',
            adjuncts: 'beer.czech-dark-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.8%',
            ibu: '18–34',
            srm: '14–35',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Tmavé Pivo', 'Černé Pivo'],
        examples: [
            { brand: 'U Fleků', name: 'Flekovský Tmavý Ležák' },
            { brand: 'Kozel', name: 'Černý' },
            { brand: 'Budweiser Budvar', name: 'Dark' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug (Caneca)',
            validity: '4–6 meses'
        },
        pairing: ['Carne de porco assada', 'Pato', 'Sobremesas de chocolate']
    },
    {
        id: 'munich-helles',
        name: 'Munich Helles',
        origin: '🇩🇪',
        family: 'beer.munich-helles.family',
        tag: 'beer.munich-helles.tag',
        abv: '5.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.munich-helles.description',
        category: 'German Lager / Helles',
        appearance: {
            color: 'beer.munich-helles.appearance.color',
            colorHex: '#EDCD44', // Medium yellow/gold
            clarity: 'beer.munich-helles.appearance.clarity',
            foam: 'beer.munich-helles.appearance.foam'
        },
        sensory: {
            malte: 55,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.munich-helles.mouthfeel.body',
            carbonation: 'beer.munich-helles.mouthfeel.carbonation',
            texture: 'beer.munich-helles.mouthfeel.texture',
            finish: 'beer.munich-helles.mouthfeel.finish'
        },
        history: 'beer.munich-helles.history',
        comparison: 'beer.munich-helles.comparison',
        ingredients: {
            malts: 'beer.munich-helles.ingredients.malts',
            hops: 'beer.munich-helles.ingredients.hops',
            yeast: 'beer.munich-helles.ingredients.yeast',
            adjuncts: 'beer.munich-helles.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.7–5.4%',
            ibu: '16–22',
            srm: '3–5',
            og: '1.044–1.048',
            fg: '1.006–1.012'
        },
        variations: ['Helles Exportbier'],
        examples: [
            { brand: 'Augustiner', name: 'Lagerbier Hell' },
            { brand: 'Spaten', name: 'Premium Lager' },
            { brand: 'Weihenstephaner', name: 'Original' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Willi Becher / Masskrug',
            validity: '3–6 meses'
        },
        pairing: ['Pretzel', 'Weisswurst', 'Frutos do mar leves']
    },
    {
        id: 'festbier',
        name: 'Festbier',
        origin: '🇩🇪',
        family: 'beer.festbier.family',
        tag: 'beer.festbier.tag',
        abv: '6.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.festbier.description',
        category: 'German Lager / Festbier',
        appearance: {
            color: 'beer.festbier.appearance.color',
            colorHex: '#E5B13A', // Deep gold
            clarity: 'beer.festbier.appearance.clarity',
            foam: 'beer.festbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 25,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.festbier.mouthfeel.body',
            carbonation: 'beer.festbier.mouthfeel.carbonation',
            texture: 'beer.festbier.mouthfeel.texture',
            finish: 'beer.festbier.mouthfeel.finish'
        },
        history: 'beer.festbier.history',
        comparison: 'beer.festbier.comparison',
        ingredients: {
            malts: 'beer.festbier.ingredients.malts',
            hops: 'beer.festbier.ingredients.hops',
            yeast: 'beer.festbier.ingredients.yeast',
            adjuncts: 'beer.festbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.8–6.3%',
            ibu: '18–25',
            srm: '4–7',
            og: '1.054–1.057',
            fg: '1.010–1.012'
        },
        variations: ['Wiesn'],
        examples: [
            { brand: 'Paulaner', name: 'Oktoberfest Bier' },
            { brand: 'Hofbräu', name: 'Oktoberfestbier' },
            { brand: 'Augustiner', name: 'Oktoberfestbier' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Masskrug (Canecão)',
            validity: '4–6 meses'
        },
        pairing: ['Frango assado (Hendl)', 'Pretzel gigante', 'Joelho de porco']
    },
    {
        id: 'helles-bock',
        name: 'Helles Bock',
        origin: '🇩🇪',
        family: 'beer.helles-bock.family',
        tag: 'beer.helles-bock.tag',
        abv: '6.8%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.helles-bock.description',
        category: 'German Lager / Bock',
        appearance: {
            color: 'beer.helles-bock.appearance.color',
            colorHex: '#D6AE58', // Deep gold to light amber
            clarity: 'beer.helles-bock.appearance.clarity',
            foam: 'beer.helles-bock.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.helles-bock.mouthfeel.body',
            carbonation: 'beer.helles-bock.mouthfeel.carbonation',
            texture: 'beer.helles-bock.mouthfeel.texture',
            finish: 'beer.helles-bock.mouthfeel.finish'
        },
        history: 'beer.helles-bock.history',
        comparison: 'beer.helles-bock.comparison',
        ingredients: {
            malts: 'beer.helles-bock.ingredients.malts',
            hops: 'beer.helles-bock.ingredients.hops',
            yeast: 'beer.helles-bock.ingredients.yeast',
            adjuncts: 'beer.helles-bock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–7.4%',
            ibu: '23–35',
            srm: '6–11',
            og: '1.064–1.072',
            fg: '1.011–1.018'
        },
        variations: ['Maibock'],
        examples: [
            { brand: 'Ayinger', name: 'Maibock' },
            { brand: 'Einbecker', name: 'Mai-Ur-Bock' },
            { brand: 'Hofbräu', name: 'Maibock' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Seidel / Pokal',
            validity: '1–2 anos (guarda)'
        },
        pairing: ['Comida condimentada', 'Queijo Suíço', 'Presunto defumado']
    },
    {
        id: 'german-leichtbier',
        name: 'German Leichtbier',
        origin: '🇩🇪',
        family: 'beer.german-leichtbier.family',
        tag: 'beer.german-leichtbier.tag',
        abv: '3.2%',
        rating: 3.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-leichtbier.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-leichtbier.appearance.color',
            colorHex: '#F6F5A2', // Pale straw
            clarity: 'beer.german-leichtbier.appearance.clarity',
            foam: 'beer.german-leichtbier.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 45,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-leichtbier.mouthfeel.body',
            carbonation: 'beer.german-leichtbier.mouthfeel.carbonation',
            texture: 'beer.german-leichtbier.mouthfeel.texture',
            finish: 'beer.german-leichtbier.mouthfeel.finish'
        },
        history: 'beer.german-leichtbier.history',
        comparison: 'beer.german-leichtbier.comparison',
        ingredients: {
            malts: 'beer.german-leichtbier.ingredients.malts',
            hops: 'beer.german-leichtbier.ingredients.hops',
            yeast: 'beer.german-leichtbier.ingredients.yeast',
            adjuncts: 'beer.german-leichtbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.4–3.6%',
            ibu: '15–28',
            srm: '1.5–4',
            og: '1.026–1.034',
            fg: '1.006–1.010'
        },
        variations: ['Diät-Pils'],
        examples: [
            { brand: 'Beck’s', name: 'Light' },
            { brand: 'Bitburger', name: 'Light' },
            { brand: 'Paulaner', name: 'Münchner Hell Leicht' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner',
            validity: '3–4 meses'
        },
        pairing: ['Saladas', 'Peixe grelhado', 'Pratos leves']
    },
    {
        id: 'kolsch',
        name: 'Kölsch',
        origin: '🇩🇪',
        family: 'beer.kolsch.family',
        tag: 'beer.kolsch.tag',
        abv: '4.8%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.kolsch.description',
        category: 'German Ale (Kölsch)',
        appearance: {
            color: 'beer.kolsch.appearance.color',
            colorHex: '#F0E68C', // Light gold
            clarity: 'beer.kolsch.appearance.clarity',
            foam: 'beer.kolsch.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.kolsch.mouthfeel.body',
            carbonation: 'beer.kolsch.mouthfeel.carbonation',
            texture: 'beer.kolsch.mouthfeel.texture',
            finish: 'beer.kolsch.mouthfeel.finish'
        },
        history: 'beer.kolsch.history',
        comparison: 'beer.kolsch.comparison',
        ingredients: {
            malts: 'beer.kolsch.ingredients.malts',
            hops: 'beer.kolsch.ingredients.hops',
            yeast: 'beer.kolsch.ingredients.yeast',
            adjuncts: 'beer.kolsch.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.2%',
            ibu: '18–30',
            srm: '3.5–5',
            og: '1.044–1.050',
            fg: '1.007–1.011'
        },
        variations: ['Wieß (unfiltered)'],
        examples: [
            { brand: 'Früh', name: 'Kölsch' },
            { brand: 'Gaffel', name: 'Kölsch' },
            { brand: 'Reissdorf', name: 'Kölsch' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Stange',
            validity: '3–4 meses'
        },
        pairing: ['Queijos suaves', 'Salsichas', 'Peixes delicados']
    },
    {
        id: 'german-helles-exportbier',
        name: 'German Helles Exportbier',
        origin: '🇩🇪',
        family: 'beer.german-helles-exportbier.family',
        tag: 'beer.german-helles-exportbier.tag',
        abv: '5.5%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-helles-exportbier.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-helles-exportbier.appearance.color',
            colorHex: '#EBC75E', // Deep gold
            clarity: 'beer.german-helles-exportbier.appearance.clarity',
            foam: 'beer.german-helles-exportbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 40,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-helles-exportbier.mouthfeel.body',
            carbonation: 'beer.german-helles-exportbier.mouthfeel.carbonation',
            texture: 'beer.german-helles-exportbier.mouthfeel.texture',
            finish: 'beer.german-helles-exportbier.mouthfeel.finish'
        },
        history: 'beer.german-helles-exportbier.history',
        comparison: 'beer.german-helles-exportbier.comparison',
        ingredients: {
            malts: 'beer.german-helles-exportbier.ingredients.malts',
            hops: 'beer.german-helles-exportbier.ingredients.hops',
            yeast: 'beer.german-helles-exportbier.ingredients.yeast',
            adjuncts: 'beer.german-helles-exportbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–6.0%',
            ibu: '20–30',
            srm: '4–6',
            og: '1.050–1.058',
            fg: '1.008–1.015'
        },
        variations: ['Dortmunder Export'],
        examples: [
            { brand: 'DAB', name: 'Original' },
            { brand: 'Dortmunder Kronen', name: 'Export' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Willi Becher',
            validity: '4–6 meses'
        },
        pairing: ['Comida de pub', 'Hambúrgueres', 'Salsichas grelhadas']
    },
    {
        id: 'german-pils',
        name: 'German Pils',
        origin: '🇩🇪',
        family: 'beer.german-pils.family',
        tag: 'beer.german-pils.tag',
        abv: '4.8%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-pils.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-pils.appearance.color',
            colorHex: '#F8F4C4', // Straw to light gold
            clarity: 'beer.german-pils.appearance.clarity',
            foam: 'beer.german-pils.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 70,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-pils.mouthfeel.body',
            carbonation: 'beer.german-pils.mouthfeel.carbonation',
            texture: 'beer.german-pils.mouthfeel.texture',
            finish: 'beer.german-pils.mouthfeel.finish'
        },
        history: 'beer.german-pils.history',
        comparison: 'beer.german-pils.comparison',
        ingredients: {
            malts: 'beer.german-pils.ingredients.malts',
            hops: 'beer.german-pils.ingredients.hops',
            yeast: 'beer.german-pils.ingredients.yeast',
            adjuncts: 'beer.german-pils.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.2%',
            ibu: '22–40',
            srm: '2–4',
            og: '1.044–1.050',
            fg: '1.008–1.013'
        },
        variations: ['Pilsener'],
        examples: [
            { brand: 'Bitburger', name: 'Premium Pils' },
            { brand: 'Warsteiner', name: 'Premium Verum' },
            { brand: 'Trumer', name: 'Pils' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner (Tulipa)',
            validity: '3–5 meses'
        },
        pairing: ['Frutos do mar', 'Queijo de cabra', 'Comida japonesa']
    },
    {
        id: 'marzen',
        name: 'Märzen',
        origin: '🇩🇪',
        family: 'beer.marzen.family',
        tag: 'beer.marzen.tag',
        abv: '5.9%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.marzen.description',
        category: 'German Lager / Amber',
        appearance: {
            color: 'beer.marzen.appearance.color',
            colorHex: '#D98235', // Amber-orange
            clarity: 'beer.marzen.appearance.clarity',
            foam: 'beer.marzen.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 25,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.marzen.mouthfeel.body',
            carbonation: 'beer.marzen.mouthfeel.carbonation',
            texture: 'beer.marzen.mouthfeel.texture',
            finish: 'beer.marzen.mouthfeel.finish'
        },
        history: 'beer.marzen.history',
        comparison: 'beer.marzen.comparison',
        ingredients: {
            malts: 'beer.marzen.ingredients.malts',
            hops: 'beer.marzen.ingredients.hops',
            yeast: 'beer.marzen.ingredients.yeast',
            adjuncts: 'beer.marzen.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.6–6.3%',
            ibu: '18–24',
            srm: '8–17',
            og: '1.054–1.060',
            fg: '1.010–1.014'
        },
        variations: ['Oktoberfest (Historical)'],
        examples: [
            { brand: 'Paulaner', name: 'Oktoberfest' },
            { brand: 'Ayinger', name: 'Oktober Fest-Märzen' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Masskrug (Canecão)',
            validity: '6 meses - 1 ano'
        },
        pairing: ['Salsichas grelhadas', 'Frango assado', 'Pretzel']
    },
    {
        id: 'rauchbier',
        name: 'Rauchbier',
        origin: '🇩🇪',
        family: 'beer.rauchbier.family',
        tag: 'beer.rauchbier.tag',
        abv: '5.3%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.rauchbier.description',
        category: 'German Lager / Smoked',
        appearance: {
            color: 'beer.rauchbier.appearance.color',
            colorHex: '#6F3C1F', // Dark amber/brown
            clarity: 'beer.rauchbier.appearance.clarity',
            foam: 'beer.rauchbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 20,
            levedura: 5,
            smoke: 80 // Custom sensory for smoke
        },
        mouthfeel: {
            body: 'beer.rauchbier.mouthfeel.body',
            carbonation: 'beer.rauchbier.mouthfeel.carbonation',
            texture: 'beer.rauchbier.mouthfeel.texture',
            finish: 'beer.rauchbier.mouthfeel.finish'
        },
        history: 'beer.rauchbier.history',
        comparison: 'beer.rauchbier.comparison',
        ingredients: {
            malts: 'beer.rauchbier.ingredients.malts',
            hops: 'beer.rauchbier.ingredients.hops',
            yeast: 'beer.rauchbier.ingredients.yeast',
            adjuncts: 'beer.rauchbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–6.0%',
            ibu: '20–30',
            srm: '12–22',
            og: '1.050–1.057',
            fg: '1.012–1.016'
        },
        variations: ['Bamberg Rauchbier'],
        examples: [
            { brand: 'Schlenkerla', name: 'Märzen' },
            { brand: 'Spezial', name: 'Rauchbier Märzen' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Willi Becher / Mug',
            validity: '6 meses - 1 ano'
        },
        pairing: ['Churrasco', 'Bacon', 'Feijoada']
    },
    {
        id: 'dunkles-bock',
        name: 'Dunkles Bock',
        origin: '🇩🇪',
        family: 'beer.dunkles-bock.family',
        tag: 'beer.dunkles-bock.tag',
        abv: '6.5%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dunkles-bock.description',
        category: 'German Lager / Bock',
        appearance: {
            color: 'beer.dunkles-bock.appearance.color',
            colorHex: '#4A2511', // Dark copper/brown
            clarity: 'beer.dunkles-bock.appearance.clarity',
            foam: 'beer.dunkles-bock.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 20,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.dunkles-bock.mouthfeel.body',
            carbonation: 'beer.dunkles-bock.mouthfeel.carbonation',
            texture: 'beer.dunkles-bock.mouthfeel.texture',
            finish: 'beer.dunkles-bock.mouthfeel.finish'
        },
        history: 'beer.dunkles-bock.history',
        comparison: 'beer.dunkles-bock.comparison',
        ingredients: {
            malts: 'beer.dunkles-bock.ingredients.malts',
            hops: 'beer.dunkles-bock.ingredients.hops',
            yeast: 'beer.dunkles-bock.ingredients.yeast',
            adjuncts: 'beer.dunkles-bock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–7.2%',
            ibu: '20–27',
            srm: '14–22',
            og: '1.064–1.072',
            fg: '1.013–1.019'
        },
        variations: ['Traditional Bock'],
        examples: [
            { brand: 'Einbecker', name: 'Ur-Bock Dunkel' },
            { brand: 'Kneitinger', name: 'Bock' }
        ],
        service: {
            temperature: '8–10°C',
            glass: 'Pokal',
            validity: '1–3 anos (guarda)'
        },
        pairing: ['Carne de caça', 'Queijos curados', 'Sobremesas de chocolate']
    },
    {
        id: 'vienna-lager',
        name: 'Vienna Lager',
        origin: '🇦🇹',
        family: 'beer.vienna-lager.family',
        tag: 'beer.vienna-lager.tag',
        abv: '5.2%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.vienna-lager.description',
        category: 'Amber Lager',
        appearance: {
            color: 'beer.vienna-lager.appearance.color',
            colorHex: '#C36835', // Reddish amber
            clarity: 'beer.vienna-lager.appearance.clarity',
            foam: 'beer.vienna-lager.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 30,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.vienna-lager.mouthfeel.body',
            carbonation: 'beer.vienna-lager.mouthfeel.carbonation',
            texture: 'beer.vienna-lager.mouthfeel.texture',
            finish: 'beer.vienna-lager.mouthfeel.finish'
        },
        history: 'beer.vienna-lager.history',
        comparison: 'beer.vienna-lager.comparison',
        ingredients: {
            malts: 'beer.vienna-lager.ingredients.malts',
            hops: 'beer.vienna-lager.ingredients.hops',
            yeast: 'beer.vienna-lager.ingredients.yeast',
            adjuncts: 'beer.vienna-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.7–5.5%',
            ibu: '18–30',
            srm: '9–15',
            og: '1.048–1.055',
            fg: '1.010–1.014'
        },
        variations: ['Mexican Vienna Lager (historical derivative)'],
        examples: [
            { brand: 'Schell’s', name: 'Firebrick' },
            { brand: 'Brooklyn', name: 'Lager' },
            { brand: 'Negra Modelo', name: 'Modeling Vienna (commercial)' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Flute / Mug',
            validity: '3–6 meses'
        },
        pairing: ['Frango grelhado', 'Salsichas Bratwurst', 'Queijo Emmental']
    },
    {
        id: 'munich-dunkel',
        name: 'Munich Dunkel',
        origin: '🇩🇪',
        family: 'beer.munich-dunkel.family',
        tag: 'beer.munich-dunkel.tag',
        abv: '5.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.munich-dunkel.description',
        category: 'German Lager / Dunkel',
        appearance: {
            color: 'beer.munich-dunkel.appearance.color',
            colorHex: '#582A16', // Deep copper to dark brown
            clarity: 'beer.munich-dunkel.appearance.clarity',
            foam: 'beer.munich-dunkel.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.munich-dunkel.mouthfeel.body',
            carbonation: 'beer.munich-dunkel.mouthfeel.carbonation',
            texture: 'beer.munich-dunkel.mouthfeel.texture',
            finish: 'beer.munich-dunkel.mouthfeel.finish'
        },
        history: 'beer.munich-dunkel.history',
        comparison: 'beer.munich-dunkel.comparison',
        ingredients: {
            malts: 'beer.munich-dunkel.ingredients.malts',
            hops: 'beer.munich-dunkel.ingredients.hops',
            yeast: 'beer.munich-dunkel.ingredients.yeast',
            adjuncts: 'beer.munich-dunkel.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–5.6%',
            ibu: '18–28',
            srm: '17–28',
            og: '1.048–1.056',
            fg: '1.010–1.016'
        },
        variations: ['Franconian Dunkel'],
        examples: [
            { brand: 'Ayinger', name: 'Altbairisch Dunkel' },
            { brand: 'Spaten', name: 'Dunkel' },
            { brand: 'Hofbräu', name: 'Dunkel' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug / Willi Becher',
            validity: '4–6 meses'
        },
        pairing: ['Salsichas', 'Costela de porco', 'Bolo alemão']
    },
    {
        id: 'schwarzbier',
        name: 'Schwarzbier',
        origin: '🇩🇪',
        family: 'beer.schwarzbier.family',
        tag: 'beer.schwarzbier.tag',
        abv: '4.9%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.schwarzbier.description',
        category: 'German Lager / Dark',
        appearance: {
            color: 'beer.schwarzbier.appearance.color',
            colorHex: '#2E1A12', // Very dark/black
            clarity: 'beer.schwarzbier.appearance.clarity',
            foam: 'beer.schwarzbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 30,
            levedura: 10,
            roast: 10
        },
        mouthfeel: {
            body: 'beer.schwarzbier.mouthfeel.body',
            carbonation: 'beer.schwarzbier.mouthfeel.carbonation',
            texture: 'beer.schwarzbier.mouthfeel.texture',
            finish: 'beer.schwarzbier.mouthfeel.finish'
        },
        history: 'beer.schwarzbier.history',
        comparison: 'beer.schwarzbier.comparison',
        ingredients: {
            malts: 'beer.schwarzbier.ingredients.malts',
            hops: 'beer.schwarzbier.ingredients.hops',
            yeast: 'beer.schwarzbier.ingredients.yeast',
            adjuncts: 'beer.schwarzbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.4%',
            ibu: '20–35',
            srm: '19–30',
            og: '1.046–1.052',
            fg: '1.010–1.016'
        },
        variations: ['Köstritzer Style'],
        examples: [
            { brand: 'Köstritzer', name: 'Schwarzbier' },
            { brand: 'Kulmbacher', name: 'Mönchshof Schwarzbier' }
        ],
        service: {
            temperature: '6–8°C',
            glass: 'Pokal / Pilsner',
            validity: '4–6 meses'
        },
        pairing: ['Churrasco', 'Cogumelos', 'Queijo Munster']
    },
    {
        id: 'doppelbock',
        name: 'Doppelbock',
        origin: '🇩🇪',
        family: 'beer.doppelbock.family',
        tag: 'beer.doppelbock.tag',
        abv: '7.5%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.doppelbock.description',
        category: 'German Lager / Strong',
        appearance: {
            color: 'beer.doppelbock.appearance.color',
            colorHex: '#421C02', // Dark copper to dark brown
            clarity: 'beer.doppelbock.appearance.clarity',
            foam: 'beer.doppelbock.appearance.foam'
        },
        sensory: {
            malte: 80,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.doppelbock.mouthfeel.body',
            carbonation: 'beer.doppelbock.mouthfeel.carbonation',
            texture: 'beer.doppelbock.mouthfeel.texture',
            finish: 'beer.doppelbock.mouthfeel.finish'
        },
        history: 'beer.doppelbock.history',
        comparison: 'beer.doppelbock.comparison',
        ingredients: {
            malts: 'beer.doppelbock.ingredients.malts',
            hops: 'beer.doppelbock.ingredients.hops',
            yeast: 'beer.doppelbock.ingredients.yeast',
            adjuncts: 'beer.doppelbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.0–10.0%+',
            ibu: '16–26',
            srm: '6–25',
            og: '1.072–1.112',
            fg: '1.016–1.024'
        },
        variations: ['Pale (Helles) Doppelbock', 'Dark Doppelbock'],
        examples: [
            { brand: 'Paulaner', name: 'Salvator' },
            { brand: 'Ayinger', name: 'Celebrator' },
            { brand: 'Spaten', name: 'Optimator' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Pokal / Snifter',
            validity: '2–5 anos (guarda)'
        },
        pairing: ['Pato assado', 'Queijo Limburger', 'Torta de chocolate']
    },
    {
        id: 'eisbock',
        name: 'Eisbock',
        origin: '🇩🇪',
        family: 'beer.eisbock.family',
        tag: 'beer.eisbock.tag',
        abv: '10.0%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.eisbock.description',
        category: 'German Lager / Strong',
        appearance: {
            color: 'beer.eisbock.appearance.color',
            colorHex: '#3D150B', // Deep copper to dark brown
            clarity: 'beer.eisbock.appearance.clarity',
            foam: 'beer.eisbock.appearance.foam'
        },
        sensory: {
            malte: 90,
            lupulo: 10,
            levedura: 0,
            alcohol: 90 // Custom sensory for alcohol warmth
        },
        mouthfeel: {
            body: 'beer.eisbock.mouthfeel.body',
            carbonation: 'beer.eisbock.mouthfeel.carbonation',
            texture: 'beer.eisbock.mouthfeel.texture',
            finish: 'beer.eisbock.mouthfeel.finish'
        },
        history: 'beer.eisbock.history',
        comparison: 'beer.eisbock.comparison',
        ingredients: {
            malts: 'beer.eisbock.ingredients.malts',
            hops: 'beer.eisbock.ingredients.hops',
            yeast: 'beer.eisbock.ingredients.yeast',
            adjuncts: 'beer.eisbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '9.0–14.0%+',
            ibu: '25–35',
            srm: '18–30',
            og: '1.078–1.120+',
            fg: 'N/A (concentrada)'
        },
        variations: ['Schneider Aventinus Eisbock (Wheat base)'],
        examples: [
            { brand: 'Kulmbacher', name: 'Eisbock' }
        ],
        service: {
            temperature: '10–14°C',
            glass: 'Snifter',
            validity: '5+ anos (guarda)'
        },
        pairing: ['Queijo azul maduro', 'Sobremesa de trufa', 'Digestivo']
    },
    {
        id: 'baltic-porter',
        name: 'Baltic Porter',
        origin: 'Baltic', // Region
        family: 'beer.baltic-porter.family',
        tag: 'beer.baltic-porter.tag',
        abv: '8.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.baltic-porter.description',
        category: 'Porters / Strong',
        appearance: {
            color: 'beer.baltic-porter.appearance.color',
            colorHex: '#251610', // Dark reddish copper to opaque dark brown
            clarity: 'beer.baltic-porter.appearance.clarity',
            foam: 'beer.baltic-porter.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 25,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.baltic-porter.mouthfeel.body',
            carbonation: 'beer.baltic-porter.mouthfeel.carbonation',
            texture: 'beer.baltic-porter.mouthfeel.texture',
            finish: 'beer.baltic-porter.mouthfeel.finish'
        },
        history: 'beer.baltic-porter.history',
        comparison: 'beer.baltic-porter.comparison',
        ingredients: {
            malts: 'beer.baltic-porter.ingredients.malts',
            hops: 'beer.baltic-porter.ingredients.hops',
            yeast: 'beer.baltic-porter.ingredients.yeast',
            adjuncts: 'beer.baltic-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.5–9.5%',
            ibu: '20–40',
            srm: '17–30',
            og: '1.060–1.090',
            fg: '1.016–1.024'
        },
        variations: ['Traditional Top-Fermented (Rare)', 'Bottom-Fermented (Common)'],
        examples: [
            { brand: 'Zywiec', name: 'Porter' },
            { brand: 'Sinebrychoff', name: 'Porter' },
            { brand: 'Baltika', name: '#6 Porter' }
        ],
        service: {
            temperature: '10–12°C',
            glass: 'Snifter / Pokal',
            validity: '2–4 anos (guarda)'
        },
        pairing: ['Bife grelhado', 'Queijo defumado', 'Tiramisu']
    },
    {
        id: 'weissbier',
        name: 'Weissbier',
        origin: '🇩🇪',
        family: 'beer.weissbier.family',
        tag: 'beer.weissbier.tag',
        abv: '5.2%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.weissbier.description',
        category: 'German Wheat',
        appearance: {
            color: 'beer.weissbier.appearance.color',
            colorHex: '#F4C430', // Pale straw to gold
            clarity: 'beer.weissbier.appearance.clarity',
            foam: 'beer.weissbier.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 10,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.weissbier.mouthfeel.body',
            carbonation: 'beer.weissbier.mouthfeel.carbonation',
            texture: 'beer.weissbier.mouthfeel.texture',
            finish: 'beer.weissbier.mouthfeel.finish'
        },
        history: 'beer.weissbier.history',
        comparison: 'beer.weissbier.comparison',
        ingredients: {
            malts: 'beer.weissbier.ingredients.malts',
            hops: 'beer.weissbier.ingredients.hops',
            yeast: 'beer.weissbier.ingredients.yeast',
            adjuncts: 'beer.weissbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.6%',
            ibu: '8–15',
            srm: '2–6',
            og: '1.044–1.052',
            fg: '1.010–1.014'
        },
        variations: ['Hefeweizen', 'Kristallweizen (filtered)'],
        examples: [
            { brand: 'Weihenstephaner', name: 'Hefeweissbier' },
            { brand: 'Schneider', name: 'Weisse Original' },
            { brand: 'Paulaner', name: 'Hefe-Weißbier' }
        ],
        service: {
            temperature: '6–8°C',
            glass: 'Weizen',
            validity: '3–6 meses'
        },
        pairing: ['Salsicha Weisswurst', 'Saladas leves', 'Pretzel']
    },
    {
        id: 'dunkles-weissbier',
        name: 'Dunkles Weissbier',
        origin: '🇩🇪',
        family: 'beer.dunkles-weissbier.family',
        tag: 'beer.dunkles-weissbier.tag',
        abv: '5.3%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dunkles-weissbier.description',
        category: 'German Wheat',
        appearance: {
            color: 'beer.dunkles-weissbier.appearance.color',
            colorHex: '#6F3C1B', // Light copper to mahogany brown
            clarity: 'beer.dunkles-weissbier.appearance.clarity',
            foam: 'beer.dunkles-weissbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 10,
            levedura: 70
        },
        mouthfeel: {
            body: 'beer.dunkles-weissbier.mouthfeel.body',
            carbonation: 'beer.dunkles-weissbier.mouthfeel.carbonation',
            texture: 'beer.dunkles-weissbier.mouthfeel.texture',
            finish: 'beer.dunkles-weissbier.mouthfeel.finish'
        },
        history: 'beer.dunkles-weissbier.history',
        comparison: 'beer.dunkles-weissbier.comparison',
        ingredients: {
            malts: 'beer.dunkles-weissbier.ingredients.malts',
            hops: 'beer.dunkles-weissbier.ingredients.hops',
            yeast: 'beer.dunkles-weissbier.ingredients.yeast',
            adjuncts: 'beer.dunkles-weissbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.6%',
            ibu: '10–18',
            srm: '14–23',
            og: '1.044–1.056',
            fg: '1.010–1.014'
        },
        variations: ['Ur-Weisse'],
        examples: [
            { brand: 'Erdinger', name: 'Dunkel' },
            { brand: 'Franziskaner', name: 'Hefe-Weisse Dunkel' },
            { brand: 'Ayinger', name: 'Ur-Weisse' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Weizen',
            validity: '4–6 meses'
        },
        pairing: ['Pato assado', 'Sobremesas de banana', 'Queijo Gouda']
    },
    {
        id: 'weizenbock',
        name: 'Weizenbock',
        origin: '🇩🇪',
        family: 'beer.weizenbock.family',
        tag: 'beer.weizenbock.tag',
        abv: '7.7%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.weizenbock.description',
        category: 'German Wheat / Strong',
        appearance: {
            color: 'beer.weizenbock.appearance.color',
            colorHex: '#5D2B15', // Dark amber to dark ruby-brown
            clarity: 'beer.weizenbock.appearance.clarity',
            foam: 'beer.weizenbock.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 15,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.weizenbock.mouthfeel.body',
            carbonation: 'beer.weizenbock.mouthfeel.carbonation',
            texture: 'beer.weizenbock.mouthfeel.texture',
            finish: 'beer.weizenbock.mouthfeel.finish'
        },
        history: 'beer.weizenbock.history',
        comparison: 'beer.weizenbock.comparison',
        ingredients: {
            malts: 'beer.weizenbock.ingredients.malts',
            hops: 'beer.weizenbock.ingredients.hops',
            yeast: 'beer.weizenbock.ingredients.yeast',
            adjuncts: 'beer.weizenbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.5–9.0%',
            ibu: '15–30',
            srm: '6–25',
            og: '1.064–1.090',
            fg: '1.015–1.022'
        },
        variations: ['Pale Weizenbock', 'Dark Weizenbock'],
        examples: [
            { brand: 'Schneider', name: 'Aventinus (TAP6)' },
            { brand: 'Weihenstephaner', name: 'Vitus' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Weizen',
            validity: '1–4 anos (guarda)'
        },
        pairing: ['Carne de veado', 'Torta de frutas', 'Queijo Brie']
    },
    {
        id: 'ordinary-bitter',
        name: 'Ordinary Bitter',
        origin: '🇬🇧',
        family: 'beer.ordinary-bitter.family',
        tag: 'beer.ordinary-bitter.tag',
        abv: '3.6%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.ordinary-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.ordinary-bitter.appearance.color',
            colorHex: '#E5A034', // Gold to light amber
            clarity: 'beer.ordinary-bitter.appearance.clarity',
            foam: 'beer.ordinary-bitter.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 60,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.ordinary-bitter.mouthfeel.body',
            carbonation: 'beer.ordinary-bitter.mouthfeel.carbonation',
            texture: 'beer.ordinary-bitter.mouthfeel.texture',
            finish: 'beer.ordinary-bitter.mouthfeel.finish'
        },
        history: 'beer.ordinary-bitter.history',
        comparison: 'beer.ordinary-bitter.comparison',
        ingredients: {
            malts: 'beer.ordinary-bitter.ingredients.malts',
            hops: 'beer.ordinary-bitter.ingredients.hops',
            yeast: 'beer.ordinary-bitter.ingredients.yeast',
            adjuncts: 'beer.ordinary-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.2–3.8%',
            ibu: '25–35',
            srm: '8–14',
            og: '1.030–1.039',
            fg: '1.007–1.011'
        },
        variations: ['Golden Ale (Modern adaptation)'],
        examples: [
            { brand: 'Fuller’s', name: 'Chiswick Bitter' },
            { brand: 'Greene King', name: 'IPA' },
            { brand: 'Brain’s', name: 'Bitter' }
        ],
        service: {
            temperature: '10–13°C (Cask) / 7–10°C',
            glass: 'Pint (Nonic)',
            validity: '3–4 meses'
        },
        pairing: ['Fish and Chips', 'Queijo Cheddar suave', 'Amendoim']
    },
    {
        id: 'best-bitter',
        name: 'Best Bitter',
        origin: '🇬🇧',
        family: 'beer.best-bitter.family',
        tag: 'beer.best-bitter.tag',
        abv: '4.4%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.best-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.best-bitter.appearance.color',
            colorHex: '#CD7F32', // Amber to copper
            clarity: 'beer.best-bitter.appearance.clarity',
            foam: 'beer.best-bitter.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.best-bitter.mouthfeel.body',
            carbonation: 'beer.best-bitter.mouthfeel.carbonation',
            texture: 'beer.best-bitter.mouthfeel.texture',
            finish: 'beer.best-bitter.mouthfeel.finish'
        },
        history: 'beer.best-bitter.history',
        comparison: 'beer.best-bitter.comparison',
        ingredients: {
            malts: 'beer.best-bitter.ingredients.malts',
            hops: 'beer.best-bitter.ingredients.hops',
            yeast: 'beer.best-bitter.ingredients.yeast',
            adjuncts: 'beer.best-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–4.6%',
            ibu: '25–40',
            srm: '8–16',
            og: '1.040–1.048',
            fg: '1.008–1.012'
        },
        variations: ['Special Bitter'],
        examples: [
            { brand: 'Fuller’s', name: 'London Pride' },
            { brand: 'Timothy Taylor’s', name: 'Landlord' },
            { brand: 'Adnams', name: 'Southwold Bitter' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '3–5 meses'
        },
        pairing: ['Frango assado', 'Queijo Lancashire', 'Sanduíche de presunto']
    },
    {
        id: 'strong-bitter',
        name: 'Strong Bitter',
        origin: '🇬🇧',
        family: 'beer.strong-bitter.family',
        tag: 'beer.strong-bitter.tag',
        abv: '5.6%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.strong-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.strong-bitter.appearance.color',
            colorHex: '#B85C22', // Deep amber to copper
            clarity: 'beer.strong-bitter.appearance.clarity',
            foam: 'beer.strong-bitter.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.strong-bitter.mouthfeel.body',
            carbonation: 'beer.strong-bitter.mouthfeel.carbonation',
            texture: 'beer.strong-bitter.mouthfeel.texture',
            finish: 'beer.strong-bitter.mouthfeel.finish'
        },
        history: 'beer.strong-bitter.history',
        comparison: 'beer.strong-bitter.comparison',
        ingredients: {
            malts: 'beer.strong-bitter.ingredients.malts',
            hops: 'beer.strong-bitter.ingredients.hops',
            yeast: 'beer.strong-bitter.ingredients.yeast',
            adjuncts: 'beer.strong-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.2%',
            ibu: '30–50',
            srm: '8–18',
            og: '1.048–1.060',
            fg: '1.010–1.016'
        },
        variations: ['Extra Special Bitter (ESB)'],
        examples: [
            { brand: 'Fuller’s', name: 'ESB' },
            { brand: 'Shepherd Neame', name: 'Bishop’s Finger' },
            { brand: 'Bass', name: 'Ale' }
        ],
        service: {
            temperature: '11–13°C',
            glass: 'Pint (Nonic)',
            validity: '4–6 meses'
        },
        pairing: ['Cordeiro assado', 'Queijo Stilton', 'Pudim de caramelo']
    },
    {
        id: 'british-golden-ale',
        name: 'British Golden Ale',
        origin: '🇬🇧',
        family: 'beer.british-golden-ale.family',
        tag: 'beer.british-golden-ale.tag',
        abv: '4.6%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.british-golden-ale.description',
        category: 'Pale Commonwealth Beer',
        appearance: {
            color: 'beer.british-golden-ale.appearance.color',
            colorHex: '#F5C04A', // Straw to golden
            clarity: 'beer.british-golden-ale.appearance.clarity',
            foam: 'beer.british-golden-ale.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 65,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.british-golden-ale.mouthfeel.body',
            carbonation: 'beer.british-golden-ale.mouthfeel.carbonation',
            texture: 'beer.british-golden-ale.mouthfeel.texture',
            finish: 'beer.british-golden-ale.mouthfeel.finish'
        },
        history: 'beer.british-golden-ale.history',
        comparison: 'beer.british-golden-ale.comparison',
        ingredients: {
            malts: 'beer.british-golden-ale.ingredients.malts',
            hops: 'beer.british-golden-ale.ingredients.hops',
            yeast: 'beer.british-golden-ale.ingredients.yeast',
            adjuncts: 'beer.british-golden-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–5.0%',
            ibu: '20–45',
            srm: '2–6',
            og: '1.038–1.053',
            fg: '1.006–1.012'
        },
        variations: ['Summer Ale'],
        examples: [
            { brand: 'Hop Back', name: 'Summer Lightning' },
            { brand: 'Fuller’s', name: 'Discovery' },
            { brand: 'Crouch Vale', name: 'Brewers Gold' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint',
            validity: '3–4 meses'
        },
        pairing: ['Salada Caesar', 'Frango grelhado', 'Lemon Tart']
    },
    {
        id: 'australian-sparkling-ale',
        name: 'Australian Sparkling Ale',
        origin: '🇦🇺',
        family: 'beer.australian-sparkling-ale.family',
        tag: 'beer.australian-sparkling-ale.tag',
        abv: '5.8%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.australian-sparkling-ale.description',
        category: 'Pale Commonwealth Beer',
        appearance: {
            color: 'beer.australian-sparkling-ale.appearance.color',
            colorHex: '#EBB44D', // Deep yellow to light amber
            clarity: 'beer.australian-sparkling-ale.appearance.clarity',
            foam: 'beer.australian-sparkling-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 50,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.australian-sparkling-ale.mouthfeel.body',
            carbonation: 'beer.australian-sparkling-ale.mouthfeel.carbonation',
            texture: 'beer.australian-sparkling-ale.mouthfeel.texture',
            finish: 'beer.australian-sparkling-ale.mouthfeel.finish'
        },
        history: 'beer.australian-sparkling-ale.history',
        comparison: 'beer.australian-sparkling-ale.comparison',
        ingredients: {
            malts: 'beer.australian-sparkling-ale.ingredients.malts',
            hops: 'beer.australian-sparkling-ale.ingredients.hops',
            yeast: 'beer.australian-sparkling-ale.ingredients.yeast',
            adjuncts: 'beer.australian-sparkling-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '20–35',
            srm: '4–7',
            og: '1.038–1.050',
            fg: '1.004–1.006'
        },
        variations: [],
        examples: [
            { brand: 'Coopers', name: 'Sparkling Ale' },
            { brand: 'Coopers', name: 'Original Pale Ale' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pokal ou Lager',
            validity: '6 meses'
        },
        pairing: ['Churrasco', 'Fish and Chips', 'Torta de carne']
    },
    {
        id: 'english-ipa',
        name: 'English IPA',
        origin: '🇬🇧',
        family: 'beer.english-ipa.family',
        tag: 'beer.english-ipa.tag',
        abv: '6.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.english-ipa.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.english-ipa.appearance.color',
            colorHex: '#D68A3A', // Golden to deep amber
            clarity: 'beer.english-ipa.appearance.clarity',
            foam: 'beer.english-ipa.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 70,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.english-ipa.mouthfeel.body',
            carbonation: 'beer.english-ipa.mouthfeel.carbonation',
            texture: 'beer.english-ipa.mouthfeel.texture',
            finish: 'beer.english-ipa.mouthfeel.finish'
        },
        history: 'beer.english-ipa.history',
        comparison: 'beer.english-ipa.comparison',
        ingredients: {
            malts: 'beer.english-ipa.ingredients.malts',
            hops: 'beer.english-ipa.ingredients.hops',
            yeast: 'beer.english-ipa.ingredients.yeast',
            adjuncts: 'beer.english-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–7.5%',
            ibu: '40–60',
            srm: '6–14',
            og: '1.050–1.070',
            fg: '1.010–1.015'
        },
        variations: [],
        examples: [
            { brand: 'Meantime', name: 'India Pale Ale' },
            { brand: 'Fuller’s', name: 'Bengal Lancer' },
            { brand: 'Samuel Smith’s', name: 'India Ale' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '4–6 meses'
        },
        pairing: ['Curry indiano', 'Queijo Cheddar envelhecido', 'Gengibre cristalizado']
    },
    {
        id: 'dark-mild',
        name: 'Dark Mild',
        origin: '🇬🇧',
        family: 'beer.dark-mild.family',
        tag: 'beer.dark-mild.tag',
        abv: '3.6%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dark-mild.description',
        category: 'Brown British Beer',
        appearance: {
            color: 'beer.dark-mild.appearance.color',
            colorHex: '#4E2A14', // Copper to dark brown
            clarity: 'beer.dark-mild.appearance.clarity',
            foam: 'beer.dark-mild.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 15,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.dark-mild.mouthfeel.body',
            carbonation: 'beer.dark-mild.mouthfeel.carbonation',
            texture: 'beer.dark-mild.mouthfeel.texture',
            finish: 'beer.dark-mild.mouthfeel.finish'
        },
        history: 'beer.dark-mild.history',
        comparison: 'beer.dark-mild.comparison',
        ingredients: {
            malts: 'beer.dark-mild.ingredients.malts',
            hops: 'beer.dark-mild.ingredients.hops',
            yeast: 'beer.dark-mild.ingredients.yeast',
            adjuncts: 'beer.dark-mild.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.0–3.8%',
            ibu: '10–25',
            srm: '12–25',
            og: '1.030–1.038',
            fg: '1.008–1.013'
        },
        variations: ['Pale Mild (Rare)'],
        examples: [
            { brand: 'Banks\'s', name: 'Mild' },
            { brand: 'Timothy Taylor\'s', name: 'Dark Mild' },
            { brand: 'Moorhouse’s', name: 'Black Cat' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '2–3 meses'
        },
        pairing: ['Cogumelos assados', 'Queijo Cheshire', 'Bolo de frutas']
    },
    {
        id: 'british-brown-ale',
        name: 'British Brown Ale',
        origin: '🇬🇧',
        family: 'beer.british-brown-ale.family',
        tag: 'beer.british-brown-ale.tag',
        abv: '4.8%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.british-brown-ale.description',
        category: 'Brown British Beer',
        appearance: {
            color: 'beer.british-brown-ale.appearance.color',
            colorHex: '#5B3423', // Dark amber to dark reddish-brown
            clarity: 'beer.british-brown-ale.appearance.clarity',
            foam: 'beer.british-brown-ale.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 25,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.british-brown-ale.mouthfeel.body',
            carbonation: 'beer.british-brown-ale.mouthfeel.carbonation',
            texture: 'beer.british-brown-ale.mouthfeel.texture',
            finish: 'beer.british-brown-ale.mouthfeel.finish'
        },
        history: 'beer.british-brown-ale.history',
        comparison: 'beer.british-brown-ale.comparison',
        ingredients: {
            malts: 'beer.british-brown-ale.ingredients.malts',
            hops: 'beer.british-brown-ale.ingredients.hops',
            yeast: 'beer.british-brown-ale.ingredients.yeast',
            adjuncts: 'beer.british-brown-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.4%',
            ibu: '20–30',
            srm: '12–22',
            og: '1.040–1.052',
            fg: '1.008–1.013'
        },
        variations: ['Northern English Brown', 'Southern English Brown (Historical reference)'],
        examples: [
            { brand: 'Newcastle', name: 'Brown Ale' },
            { brand: 'Samuel Smith’s', name: 'Nut Brown Ale' },
            { brand: 'Wychwood', name: 'Hobgoblin' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '3–6 meses'
        },
        pairing: ['Amêndoas torradas', 'Costela de porco', 'Brownie']
    },
    {
        id: 'english-porter',
        name: 'English Porter',
        origin: '🇬🇧',
        family: 'beer.english-porter.family',
        tag: 'beer.english-porter.tag',
        abv: '4.8%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.english-porter.description',
        category: 'Brown British Beer / Porter',
        appearance: {
            color: 'beer.english-porter.appearance.color',
            colorHex: '#3B2317', // Light to dark brown
            clarity: 'beer.english-porter.appearance.clarity',
            foam: 'beer.english-porter.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.english-porter.mouthfeel.body',
            carbonation: 'beer.english-porter.mouthfeel.carbonation',
            texture: 'beer.english-porter.mouthfeel.texture',
            finish: 'beer.english-porter.mouthfeel.finish'
        },
        history: 'beer.english-porter.history',
        comparison: 'beer.english-porter.comparison',
        ingredients: {
            malts: 'beer.english-porter.ingredients.malts',
            hops: 'beer.english-porter.ingredients.hops',
            yeast: 'beer.english-porter.ingredients.yeast',
            adjuncts: 'beer.english-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–5.4%',
            ibu: '18–35',
            srm: '20–30',
            og: '1.040–1.052',
            fg: '1.008–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Fuller’s', name: 'London Porter' },
            { brand: 'Samuel Smith’s', name: 'Taddy Porter' },
            { brand: 'St. Peter’s', name: 'Old-Style Porter' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '6–12 meses'
        },
        pairing: ['Bife defumado', 'Queijo Gruyère', 'Bolo de chocolate']
    }
];
