-- Create beers table
CREATE TABLE IF NOT EXISTS beers (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    origin TEXT,
    family TEXT,
    tag TEXT,
    abv TEXT,
    rating DECIMAL(2,1),
    image TEXT,
    description TEXT,
    category TEXT,
    appearance JSONB,
    sensory JSONB,
    mouthfeel JSONB,
    history TEXT,
    comparison TEXT,
    ingredients JSONB,
    specs JSONB,
    variations TEXT[],
    examples JSONB,
    service JSONB,
    pairing TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create translations table for i18n
CREATE TABLE IF NOT EXISTS translations (
    key TEXT NOT NULL,
    language TEXT NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    PRIMARY KEY (key, language)
);

-- Enable Row Level Security
ALTER TABLE beers ENABLE ROW LEVEL SECURITY;
ALTER TABLE translations ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON beers
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON translations
    FOR SELECT USING (true);

-- Create policies for authenticated users (Admin)
CREATE POLICY "Enable update for authenticated users" ON beers
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert for authenticated users" ON beers
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_beers_category ON beers(category);
CREATE INDEX IF NOT EXISTS idx_beers_abv ON beers(abv);
CREATE INDEX IF NOT EXISTS idx_translations_language ON translations(language);

-- Insert initial beer data (Altbier example)
INSERT INTO beers (
    id, name, origin, family, tag, abv, rating, image, description, category,
    appearance, sensory, mouthfeel, history, comparison, ingredients, specs,
    variations, examples, service, pairing
) VALUES (
    'altbier',
    'Altbier',
    '🇩🇪',
    'beer.altbier.family',
    'beer.altbier.tag',
    '4.8%',
    4.5,
    'assets/beer-placeholder.png',
    'beer.altbier.description',
    'Pale Ale',
    '{"color": "beer.altbier.appearance.color", "colorHex": "#A85E14", "clarity": "beer.altbier.appearance.clarity", "foam": "beer.altbier.appearance.foam"}'::jsonb,
    '{"malte": 60, "lupulo": 50, "levedura": 20}'::jsonb,
    '{"body": "beer.altbier.mouthfeel.body", "carbonation": "beer.altbier.mouthfeel.carbonation", "texture": "beer.altbier.mouthfeel.texture", "finish": "beer.altbier.mouthfeel.finish"}'::jsonb,
    'beer.altbier.history',
    'beer.altbier.comparison',
    '{"malts": "beer.altbier.ingredients.malts", "hops": "beer.altbier.ingredients.hops", "yeast": "beer.altbier.ingredients.yeast", "adjuncts": "beer.altbier.ingredients.adjuncts"}'::jsonb,
    '{"abvRange": "4.3–5.5%", "ibu": "25–50", "srm": "11–17", "og": "1.044–1.052", "fg": "1.008–1.014"}'::jsonb,
    ARRAY['Düsseldorfer Altbier', 'Sticke Alt'],
    '[{"brand": "Uerige", "name": "Alt"}, {"brand": "Füchschen", "name": "Alt"}, {"brand": "Schumacher", "name": "Alt"}, {"brand": "Schlüssel", "name": "Alt"}]'::jsonb,
    '{"temperature": "7–10°C", "glass": "Becher (200ml)", "validity": "3–6 meses"}'::jsonb,
    ARRAY['Sauerbraten', 'Bratwurst', 'Queijos suaves']
) ON CONFLICT (id) DO NOTHING;

-- You'll need to insert the rest of your beers data following the same pattern
-- For now, I'll add a few more examples

INSERT INTO beers (id, name, family, tag, abv, rating, image, category) VALUES
    ('altbier-cold', 'Altbier (cold-conditioned)', 'Ale Britânica', 'Maltada', '5.5%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-amber-ale', 'American Amber Ale', 'Ale Britânica', 'Maltada', '6.2%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-barleywine', 'American Barleywine', 'Ale Britânica', 'Maltada', '12.0%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-blonde-ale', 'American Blonde Ale', 'Ale Britânica', 'Maltada', '5.5%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-brown-ale', 'American Brown Ale', 'Ale Britânica', 'Maltada', '6.2%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-ipa', 'American IPA', 'Ale Britânica', 'Maltada', '7.5%', 5.0, 'assets/beer-placeholder.png', 'Ales'),
    ('american-lager', 'American Lager', 'Ale Britânica', 'Maltada', '5.3%', 5.0, 'assets/beer-placeholder.png', 'Lagers')
ON CONFLICT (id) DO NOTHING;

-- Sample translation entries
INSERT INTO translations (key, language, value) VALUES
    ('beer.altbier.family', 'pt', 'Ale Alemã'),
    ('beer.altbier.family', 'en', 'German Ale'),
    ('beer.altbier.family', 'de', 'Deutsche Ale'),
    ('beer.altbier.tag', 'pt', 'Equilibrada'),
    ('beer.altbier.tag', 'en', 'Balanced'),
    ('beer.altbier.tag', 'de', 'Ausgewogen')
ON CONFLICT (key, language) DO NOTHING;
