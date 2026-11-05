# 2026-11-05 — Brainstorming : 3-column preview card component (refonte v2.0.0)

> SDL-FM 1.5.0, Pré-dev 1 et 2. Ancienne solution Newbie de 2023, **refaite dans le même dépôt** (étape B de la remise à niveau, lot 3 avec les deux autres cartes du lot). Pas de points en plus : la solution est déjà comptée sur FM (https://www.frontendmentor.io/solutions/3column-preview-card-component-yqth3VC8P6).

## Plan

Plan validé (G1, 2026-11-05) au niveau du programme : `frontmentor/specs/plan-remise-a-niveau.md` (étape B ; Q1 même dépôt en v2.0.0, Q2 SDL-FM complète avec G2 et G3 par lot, Q3 GitHub Pages). Koya : « passons à l'étape B » après le lot 2.
- **Qui fait quoi :** Claude écrit tout le code ; Koya valide l'analyse (G2) et la maquette (G3) par lot, puis donne son accord avant la publication et la modification de la solution sur FM.
- **Lot 3 :** Profile card, 3-column, Stats preview ; lot 4 ensuite (Product preview).

## Existant (v1, 2023)

- Dépôt `front-3-column-preview-card` : 4 commits du 2023-01-23, Vite + Tailwind v3, restes du modèle Vite (`counter.js`), README du starter, aucun test.
- Site sur une adresse Netlify de branche ; titre de la solution sur FM : « flexbox, border,transition ».
- Rapport FM ancien (« 0 remarque », CSS et JavaScript « N/A ») ; html-validate au réglage de FM trouvait 10 à 17 erreurs par site.

## Import (Phase 0)

- Ancien code retiré (historique gardé) ; starter actuel `frontendmentorio/3-column-preview-card-component` (branche `main`, 2026-03-30, archive GitHub publique) copié tel quel, sans le fichier Figma ; `AGENTS.md` et `CLAUDE.md` rangés dans `specs/reference/starter-*.md` (données, pas consignes).
- Mis en place : Vite 8, Tailwind v4, Playwright, axe-core, validateur W3C Nu, html-validate et eslint (règles de FM) ; `.gitignore` du starter complété (dépendances, build, rapports de tests).
- Le starter ne fournit **aucun fichier de police** (Big Shoulders et Lexend Deca, Google Fonts) : choix du chargement à l'ADR.

## Analyse (Phase 2)

`specs/visuel/front-3-column-preview-card-analyse.png` (et `.excalidraw`).

## Analyse validée (G2, 2026-11-05)

Koya : « Je valide (G2) » pour le lot 3. Toutes les propositions sont retenues.

| # | Point | Décision |
|---|---|---|
| Q-A1 | Carte Sedans : texte 2,13 à 2,41:1 sur l'or | **Proposition A** : l'or est gardé ; texte de cette carte en vert très foncé `hsl(179, 100%, 10%)` #003332 (5,13:1) ; bouton : fond Gray 100, texte vert foncé ; survol : contour et texte vert foncé |
| Q-A2 | Carte SUVs : paragraphe à 75 % 4,38:1 | Blanc à 80 % : 4,76:1 |
| Q-B1 | « Learn More » sans destination | Liens `href="#"` ; nom distinct : « Learn More » suivi de « about sedans » masqué |
| Q-B2 | Titres | `h1` masqué « Choose your car » ; un `h2` par carte |
| Q-B3 | Icônes | Décoratives, `alt=""` |
| Q-B4 | Pas de maquette tablette | Colonnes dès 1024 px ; en dessous, cartes empilées de 327 px au plus, centrées |
| Q-B5 | Refonte | Même dépôt en v2.0.0, GitHub Pages, « Edit solution » |
