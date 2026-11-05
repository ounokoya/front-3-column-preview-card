# Tokens fournis par Frontend Mentor — front-3-column-preview-card (3-column preview card component)

> SDL-FM 1.5.0 Phase 1 (remise à niveau, étape B, lot 3 : refonte v2.0.0). Source : `style-guide.md`, `README.md` et images du starter actuel (2026-03-30). Seulement ce que FM fournit ; les valeurs mesurées viendront de l'analyse de la Phase 2 (`specs/visuel/`).

## Largeurs de maquette

Mobile 375 px, desktop 1440 px (images à l'échelle 1). FM demande une page correcte et conforme WCAG de 320 px aux grands écrans. Pas de maquette tablette.

## Couleurs

| Nom FM | Rôle observé | Valeur FM | Hex |
|---|---|---|---|
| Gold 500 | Carte « Sedans », texte de son bouton | `hsl(31, 77%, 52%)` | `#E38826` |
| Cyan 800 | Carte « SUVs », texte de son bouton | `hsl(184, 100%, 22%)` | `#006970` |
| Green 950 | Carte « Luxury », texte de son bouton | `hsl(179, 100%, 13%)` | `#004241` |
| Blanc transparent | Paragraphes | `hsla(0, 0%, 100%, 0.75)` | — |
| Gray 100 | Fond de page, titres, fond des boutons | `hsl(0, 0%, 95%)` | `#F2F2F2` |

| Contraste | Gold 500 | Cyan 800 | Green 950 | Remarque |
|---|---|---|---|---|
| Paragraphe (blanc à 75 %) sur la carte | **2,13:1** | **4,38:1** | 7,05:1 | < 4,5 : repris en Phase 2 |
| Titre Gray 100 sur la carte (texte large, 3:1) | **2,41:1** | 5,80:1 | 10,09:1 | Gold < 3 : repris en Phase 2 |
| Texte du bouton (couleur de la carte) sur Gray 100 | **2,41:1** | 5,80:1 | 10,09:1 | Gold < 4,5 : repris en Phase 2 |
| Lien du starter `#3E52A3` sur Gray 100 | 6,41:1 | | | attribution |

Les contrastes du texte, des composants et de chaque icône sont vérifiés dans l'inventaire de la Phase 2, sur les couleurs mesurées dans les images.

## Typographie

| Élément | Valeur FM |
|---|---|
| Police des titres | Big Shoulders 700 (Google Fonts ; **aucun fichier de police dans le starter**) |
| Police du texte | Lexend Deca 400 |
| Texte | 15 px |

## Images et icônes

`icon-sedans.svg`, `icon-suvs.svg`, `icon-luxury.svg`, favicon

## Contenu (images FM)

Trois cartes : « Sedans », « SUVs », « Luxury », chacune avec une icône, un titre, un paragraphe et un bouton « Learn More ». Image d'états : les trois boutons survolés (fond transparent, contour et texte Gray 100).

## Images de référence

| Fichier | Original | Taille |
|---|---|---|
| `desktop.jpg` | `design/desktop-design.jpg` | 1440 × 800 |
| `etats.jpg` | `design/active-states.jpg` | 1440 × 800 |
| `mobile.jpg` | `design/mobile-design.jpg` | 375 × 1502 |
| `apercu.jpg` | aperçu du starter | 1440 × 1056 |
