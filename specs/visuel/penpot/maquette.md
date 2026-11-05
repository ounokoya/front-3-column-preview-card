# Maquette Penpot — 3-column preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 3 (remise à niveau, étape B, lot 3). Fichier Penpot : « FM Newbie » (créé par Koya ; nom vérifié avant chaque écriture), page « 3-column ». **En attente de G3.**
> Décisions G2 appliquées : texte vert foncé sur la carte Sedans (Q-A1, proposition A), paragraphe SUVs à 80 % (Q-A2), liens « Learn More » (Q-B1), titres (Q-B2), icônes décoratives (Q-B3), cartes empilées sous 1024 px (Q-B4).

## Rendu des exports

L'exportateur PNG de Penpot n'a pas les polices (M16). Chaque écran est exporté en **SVG**, ses `<style>` sont retirés, les images (adresse interne de Penpot) sont remplacées par les fichiers du starter (`media.json`), puis il est rendu dans Chromium avec les polices Google. Les icônes du starter sont posées dans Penpot comme images PNG et rendues avec leurs SVG d'origine. Les titres sont rendus sans la largeur imposée par Penpot (`NATURAL=1`) : voir la police ci-dessous.

**Police des titres (G3-3)** : la maquette FM est en **Big Shoulders Display** 700, 40 px (largeurs d'encre à ± 1 %). Le guide de style dit « Big Shoulders », la famille actuelle de Google qui l'a remplacée : à 40 px, « SEDANS » y mesure 111 px au lieu de 98 (13 % plus large). Penpot ne propose que « Big Shoulders » ; le rendu des exports lui substitue Big Shoulders Display.

## Bibliothèque

### Couleurs (groupe « 3-column »)

| Nom | Rôle | Valeur |
|---|---|---|
| Gold 500 | Carte Sedans | `#E38826` |
| Cyan 800 | Carte SUVs, texte de son bouton | `#006970` |
| Green 950 | Carte Luxury, texte de son bouton, texte de l'attribution | `#004241` |
| Gray 100 | Fond de page, titres SUVs et Luxury, fond des boutons | `#F2F2F2` |
| Vert foncé AA (Q-A1) | Carte Sedans : titre, paragraphe, texte et survol du bouton — 5,13:1 sur l'or | `#003332` = `hsl(179, 100%, 10%)` |
| Blanc 80 % (Q-A2) · 75 % | Paragraphe SUVs (4,76:1) · Luxury (7,05:1) | `#FFFFFF` |
| Lien (starter) | Liens de l'attribution, 6,41:1 sur Gray 100 | `#3E52A3` |

### Typographie

| Usage | Valeur |
|---|---|
| Titres (h2) | Big Shoulders Display 700, 40 px, majuscules (G3-3) |
| Paragraphes | Lexend Deca 400, 15 px, interligne 25 px |
| « Learn More » | Lexend Deca 400, 15 px |
| Attribution | Lexend Deca 400, 11 px |

### Mesures (px)

| Élément | Desktop 1440 × 800 | Mobile 375 × 1502 |
|---|---|---|
| Cartes | 920 × 500 en (260, 170) : 307, 306, 307 de large ; rayon 8 aux coins extérieurs | 327 × 442 chacune, empilées en (24, 88) ; rayon 8 en haut et en bas |
| Marge interne | 48 | 48 |
| Icône 64 × 40 | y 49 | y 48 |
| Titre · paragraphe (capitales) | 132 · 205 sous le haut de la carte | 131 · 203,5 |
| Bouton | 146 × 48, pilule, contour 2 px, à y 405 (en bas, aligné sur les 3 cartes) ; texte (capitales) à 18 | à y 346 (27 sous le paragraphe) |

Tablette 768 × 1502 (proposition G3-1) : les cartes empilées de 327 px, centrées en (220,5, 88).

## Composants (`composants.png`)

| Composant | États |
|---|---|
| Learn More (Sedans, SUVs, Luxury) | Normal (fond Gray 100, texte de la couleur de la carte ; vert foncé sur Sedans, Q-A1) · Survol (fond transparent, contour et texte Gray 100 ; vert foncé sur Sedans) · Focus clavier (contour 2 px décalé de 3 px) |
| Attribution | Normal (texte Green 950, liens `#3E52A3` soulignés) · Survol · Focus clavier |

## Écrans et seuils visuels (calibrage 1.1.0)

Écart = part des pixels dont un canal diffère de plus de 40 sur 255. Seuil de l'écran pour la Phase 7 = **max(5 %, écart + 1 point)**.

| Écran Penpot | Image FM | Écart | Seuil Phase 7 |
|---|---|---|---|
| Desktop · 3-column | `desktop.jpg` | 2,15 % | 5,0 % |
| Desktop · états (boutons survolés) | `etats.jpg` | 2,25 % | 5,0 % |
| Mobile · 3-column | `mobile.jpg` | 4,04 % | 5,1 % |

Notes :
- Écart voulu : le texte vert foncé de la carte Sedans (Q-A1). Hors de cette carte, l'écart desktop est de 1,25 %.
- Écran sans image FM : **Tablette · 3-column (proposition G3-1)**.

## Prototype

| Parcours | Enchaînement |
|---|---|
| **Desktop · survol des boutons « Learn More »** | pointeur sur un bouton → écran des états ; pointeur qui sort → retour (fondu 200 ms) |

## Fichiers

- `desktop.png`, `desktop-etats.png`, `mobile.png`, `tablette.png` : rendus des 4 écrans ; `apercu-maquette.png`.
- `comparaison-*.png` : image FM | maquette | écarts en rouge (moitié de la taille).
- `composants.png` : les composants et leurs états (échelle 2).
