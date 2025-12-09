# RAIM Bénin - Website

Professional multipage website for the Réseau des Agences et Instituts du Mannequinat du Bénin (RAIM Bénin).

## Project Structure

```
src/
├── assets/           # Logo and images
├── components/       # Reusable components
│   ├── Header.jsx    # Navigation with mobile hamburger menu
│   ├── Header.css
│   ├── Footer.jsx    # Site footer with links and social
│   └── Footer.css
├── pages/            # Page components
│   ├── Home.jsx      # Homepage with hero, values, benefits
│   ├── About.jsx     # History, mission, vision
│   ├── Leadership.jsx # Team profiles
│   ├── Agencies.jsx  # Member agencies
│   ├── Activities.jsx # Events and press
│   └── Contact.jsx   # Contact form with validation
├── styles/
│   └── variables.css # CSS variables and global styles
├── App.jsx           # Main app with React Router
├── main.jsx          # Entry point
└── index.css         # Base styles
```

## Brand Colors

- White: #FFFFFF
- Black: #111111
- Fashion Yellow: #F7C600
- Fashion Green: #008037
- Fashion Red: #C00000

## Typography

- Headings: Montserrat (Google Fonts)
- Body: Poppins (Google Fonts)

## Features

- 6 fully responsive pages with React Router
- Sticky navigation with mobile hamburger menu
- Scroll-triggered fade-in animations
- Interactive gallery slider
- Contact form with JS validation
- Professional European fashion website design

## Development

- **Framework**: React 19 + Vite 7
- **Port**: 5000
- **Command**: `npm run dev`

## Deployment

- **Type**: Static
- **Build**: `npm run build`
- **Output**: `dist/`

## Pages

1. **Accueil** (/) - Hero, values, benefits, CTA
2. **Qui sommes-nous** (/about) - Timeline, mission, vision
3. **Bureau** (/leadership) - Team profiles
4. **Agences** (/agencies) - Member agencies
5. **Activités** (/activities) - Events and press
6. **Contact** (/contact) - Form with validation

## To Replace Real Content

- Update text content in each page component
- Replace placeholder images in galleries
- Update contact information in Footer.jsx and Contact.jsx
- Add real team photos in Leadership.jsx
- Add real agency logos/images in Agencies.jsx
