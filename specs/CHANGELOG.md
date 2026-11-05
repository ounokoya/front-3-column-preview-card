# Changelog

Format : [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) · Versions : [SemVer](https://semver.org/lang/fr/).

## [2.0.0] — 2026-11-05

Refonte complète de la solution de 2023 (SDL-FM 1.5.0, remise à niveau du profil, étape B, lot 3), à partir du starter actuel, dans le même dépôt.

### Added
- Trois cartes empilées sous 1024 px, côte à côte au-delà (Q-B4, G3-1, ADR-0006) ; `h1` masqué et un `h2` par carte (Q-B2) ; icônes décoratives (Q-B3).
- Couleurs AA : texte vert foncé sur la carte Sedans (Q-A1), paragraphe SUVs à 80 % (Q-A2).
- Liens « Learn More » aux noms distincts, survol (fond transparent, contour et texte clairs), focus visible dès son arrivée (Q-B1, ADR-0005).
- Big Shoulders Display (police des images FM, G3-3) et Lexend Deca servies avec le site par Fontsource (ADR-0004).
- Tests : 20 scénarios de la spec, axe-core, validateur W3C Nu, html-validate et eslint réglés comme FM, règles FM déjà vues, fitness functions des ADR-0003 et ADR-0004, comparaisons visuelles (1,96 % ; 2,92 % ; 3,68 % pour un seuil de 5,1 %).

### Changed
- Vite 8 et Tailwind CSS v4 (tokens dans `@theme`, ADR-0003) au lieu de Vite et Tailwind v3 ; publication sur GitHub Pages (branche `gh-pages`) au lieu de Netlify.

### Removed
- Code de 2023 (restes du modèle Vite, dont `counter.js`) et README du starter.
