# 🍺 BeerSL - Beer Styles Library

A comprehensive encyclopedia of beer styles and top beer brands from around the world.

## 🌐 Live Demo

Run locally with:
```bash
python3 -m http.server 8081
```
Then open [http://localhost:8081](http://localhost:8081)

## 📁 Project Structure

```
beersl/
├── index.html          # Main page - Beer styles encyclopedia
├── top-brands.html     # Top 250+ beer brands with image upload
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   ├── variables.css   # CSS custom properties (colors, fonts)
│   ├── styles.css      # Main stylesheet (shared across pages)
│   ├── top-brands.css  # Top brands page styles
│   ├── about.css       # About page styles
│   └── contact.css     # Contact page styles
├── js/
│   ├── app.js          # Main application logic
│   ├── top-brands.js   # Top brands page logic (upload, popups)
│   ├── ui-init.js      # UI initialization
│   ├── theme-manager.js # Theme switching
│   ├── components/     # Reusable UI components
│   ├── data/           # Beer data (styles, brands, histories)
│   └── i18n/           # Internationalization (PT, EN, DE)
└── img/                # Images and backgrounds
```

## ✨ Features

- **250+ Beer Brands** with detailed information
- **Image Upload** for brand cards with cropping
- **Hover Popups** with brand history and details
- **Multi-language** support (Portuguese, English, German)
- **Responsive Design** for mobile and desktop
- **Filter & Search** by country, parent company, and name

## 🛠️ Technologies

- HTML5, CSS3, JavaScript (ES6 Modules)
- [Cropper.js](https://fengyuanchen.github.io/cropperjs/) for image cropping
- Google Fonts (Inter, Playfair Display)

## 📝 License

© 2024 BeerSL. All rights reserved.
