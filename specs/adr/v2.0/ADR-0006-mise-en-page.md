# ADR-0006 : Mise en page — carte centrée, pied de page en bas sans la décaler

## Statut
Accepté (2026-11-05) — décision du lot 3, sur le principe du lot 2 (ADR-0006).

## Contexte
Dès 1024 px, les trois cartes (920 × 500) sont côte à côte, à (260, 170) à 1440 × 800 : 20 px plus bas que le centre de la fenêtre. En dessous (Q-B4, G3-1), elles sont empilées, 327 px au plus, centrées, à 88 px du haut, et la page défile (1502 px en mobile). Les liens sont alignés en bas des cartes en desktop, juste sous le paragraphe en mobile.

## Options
| Option | Pour | Contre |
|---|---|---|
| **Grille de 3 rangées `1fr auto 1fr` sur toute la hauteur (choisie)** | Les cartes sont centrées ; le pied de page se place en bas de la 3e rangée ; si la fenêtre est trop basse, la page s'allonge au lieu de superposer | — |
| Pied de page en position absolue | Simple | Passe sur la carte dans une fenêtre basse |
| Pied de page dans le flux, sous la carte | Simple | Décale la carte |
| Marge haute fixe de 170 px en desktop | Position exacte à 1440 × 800 | Ne suit pas la hauteur de la fenêtre |

## Décision
- Dès `lg` : `body` en grille `grid-rows-[1fr_auto_1fr]` de hauteur minimale `100dvh`, `main` dans la 2e rangée avec une marge haute de 40 px (le groupe se trouve 20 px sous le centre, comme sur l'image FM), `footer` en bas de la 3e.
- Sous `lg` : marges de 88 px en haut et en bas, cartes de largeur `min(20.4375rem, 100% - 3rem)` centrées.
- Cartes : grille de 3 colonnes égales dès `lg` (920 px), une colonne en dessous ; rayon de 8 aux coins extérieurs du groupe (`overflow: clip`).
- Dans chaque carte : colonne flex ; dès `lg`, le lien est poussé en bas (`margin-block-start: auto`).

## Conséquences
- Positions S1 à S3 tenues avec un seul point de rupture ; rien ne se superpose quelle que soit la hauteur de la fenêtre.
- La marge de 40 px est une mesure de l'image FM, notée dans le CSS.
