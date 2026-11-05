# Spec — 3-column preview card component (refonte v2.0.0)

> SDL-FM 1.5.0 Phase 4 (remise à niveau, étape B, lot 3). Sources : analyse validée (G2) `specs/visuel/front-3-column-preview-card-analyse.*`, maquette validée (G3) `specs/visuel/penpot/maquette.md`, décisions dans `specs/brainstorming/2026-11-05-front-3-column-preview-card.md`.
> Cette spec dit **quoi** et **pourquoi**, jamais **comment**.

## 1. Objectif

Trois cartes qui présentent trois catégories de voitures de location (Sedans, SUVs, Luxury), chacune avec une icône, un titre, un paragraphe et un lien « Learn More ». Le challenge ne donne aucune adresse aux liens (Q-B1).

## 2. Composants et contenu

| Composant | Contenu | Élément HTML attendu |
|---|---|---|
| Titre de la page | « Choose your car », masqué à l'écran (Q-B2) | `h1` |
| Carte (× 3) | icône, titre, paragraphe, lien | `article` dans `main` |
| Icône | `icon-sedans.svg`, `icon-suvs.svg`, `icon-luxury.svg` (64 × 40), décoratives (Q-B3) | `img alt=""` |
| Titre de carte | « Sedans », « SUVs », « Luxury », affichés en majuscules | `h2` |
| Paragraphe | les textes du starter | `p` |
| Lien | « Learn More », suivi de « about sedans », « about SUVs », « about luxury » masqués ; vers `#` (Q-B1) | `a` |
| Pied de page | « Challenge by Frontend Mentor. Coded by Koya Esdras. » ; liens vers `https://www.frontendmentor.io?ref=challenge` et `https://www.frontendmentor.io/profile/ounokoya` | `footer` |

La page a pour titre « Frontend Mentor | 3-column preview card component » et la langue `en`.

## 3. Tokens

Couleurs, typographie et mesures : `specs/reference/tokens.md` (FM) et la bibliothèque Penpot (`specs/visuel/penpot/maquette.md`).

| Rôle | Sedans | SUVs | Luxury |
|---|---|---|---|
| Fond de la carte | Gold 500 `hsl(31, 77%, 52%)` | Cyan 800 `hsl(184, 100%, 22%)` | Green 950 `hsl(179, 100%, 13%)` |
| Titre | vert foncé `hsl(179, 100%, 10%)` (Q-A1) | Gray 100 `hsl(0, 0%, 95%)` | Gray 100 |
| Paragraphe | vert foncé (Q-A1) | blanc à 80 % (Q-A2) | blanc à 75 % |
| Lien : fond · texte | Gray 100 · vert foncé (Q-A1) | Gray 100 · Cyan 800 | Gray 100 · Green 950 |

Fond de page Gray 100 ; attribution : texte Green 950, liens `hsl(228, 45%, 44%)` (couleur du starter, 6,41:1).
Titres : Big Shoulders Display 700, 40 px (G3-3). Texte et liens : Lexend Deca 400, 15 px, interligne 25 px.

## 4. Responsive

| Largeur | Disposition |
|---|---|
| < 1024 px (Q-B4, G3-1) | Cartes empilées, 327 px au plus et 24 px des bords en dessous, centrées, à 88 px du haut ; le lien suit le paragraphe. |
| ≥ 1024 px | Les trois cartes côte à côte (920 × 500), liens alignés en bas des cartes. |

Positions de la maquette, à 1 px près :

| Élément | 1440 × 800 | 375 × 1502 | 768 × 1024 |
|---|---|---|---|
| Cartes Sedans · SUVs · Luxury | (260, 170) 307 × 500 · (567, 170) 306 × 500 · (873, 170) 307 × 500 | (24, 88) · (24, 530) · (24, 972), 327 × 442 | Sedans (220,5, 88) 327 × 442 |
| Liens | (308, 575) · (615, 575) · (921, 575), 146 × 48 | (72, 434) · (72, 876) · (72, 1318), 146 × 48 | — |

Le pied de page suit les cartes, centré ; en desktop, il tient dans la fenêtre. La page reste utilisable de 320 px aux grands écrans, sans défilement horizontal.

## 5. États et interactions

| Élément | Normal | Survol (`etats.jpg`) | Focus clavier |
|---|---|---|---|
| Lien Learn More | pilule Gray 100, texte de la couleur de la carte (vert foncé sur Sedans) | fond transparent, contour 2 px et texte Gray 100 (vert foncé sur Sedans) | contour 2 px, décalé de 3 px |
| Liens du pied de page | soulignés | soulignement retiré | contour 2 px, décalé de 2 px |

| Événement | Effet |
|---|---|
| Clic ou Entrée sur un lien Learn More | aller à `#` (pas de destination dans le challenge, Q-B1) |

Le changement de couleur au survol peut être progressif ; toute transition est supprimée si `prefers-reduced-motion: reduce`.

## 6. Accessibilité

### Contrats

| # | Contrat |
|---|---|
| A1 | Un seul `h1`, masqué : « Choose your car » ; un `h2` par carte (Q-B2). |
| A2 | Icônes décoratives : ignorées par les lecteurs d'écran (Q-B3). |
| A3 | Chaque lien a un nom distinct : « Learn More about sedans », « … about SUVs », « … about luxury » (Q-B1). |
| A4 | Contraste AA : 4,5:1 pour les paragraphes et les liens, 3:1 pour les titres de 40 px (Q-A1, Q-A2). |
| A5 | Ordre clavier : les trois liens Learn More, puis les deux liens du pied de page ; focus visible (2 px au moins). |
| A6 | Le fond de la page est déclaré : le même en thème clair ou sombre de l'appareil. |
| A7 | Pas de transition si `prefers-reduced-motion: reduce`. |

### Noms accessibles utilisés par les tests

| Élément | Rôle | Nom |
|---|---|---|
| Titre de la page | heading (niveau 1) | « Choose your car » |
| Cartes | article | — (repérées par leur titre) |
| Titres de carte | heading (niveau 2) | « Sedans », « SUVs », « Luxury » |
| Liens | link | « Learn More about sedans », « Learn More about SUVs », « Learn More about luxury » |
| Pied de page | contentinfo | liens « Frontend Mentor » et « Koya Esdras » |

## 7. Critères d'acceptation

```
Mise en page (positions de la maquette, à 1 px près)
S1  Given 1440 × 800   Then cartes (260, 170) 307 × 500, (567, 170) 306 × 500, (873, 170) 307 × 500 ;
                       liens (308, 575), (615, 575), (921, 575), 146 × 48
S2  Given 375 × 1502   Then cartes (24, 88), (24, 530), (24, 972), 327 × 442 ; liens (72, 434), (72, 876), (72, 1318), 146 × 48
S3  Given 768 × 1024   Then carte Sedans (220,5, 88) 327 × 442 ; given 1023 px  Then cartes empilées ;
                       given 1024 px  Then les trois cartes sur une ligne (Q-B4)
S4  Given 320, 375, 768, 1023, 1024, 1440 px  Then pas de défilement horizontal
S5  Given 1440 × 800   Then le pied de page est sous les cartes, centré, dans la fenêtre

Contenu
S6  Given la page  Then h1 « Choose your car » masqué (seul titre de niveau 1) ; h2 « Sedans », « SUVs », « Luxury » ;
                   un paragraphe par carte ; trois liens « Learn More » vers « # », aux noms distincts (A3) ;
                   aucune image exposée aux lecteurs d'écran (icônes chargées)
S7  Given la page  Then titres en Big Shoulders Display 40 px, en majuscules ; paragraphes et liens en Lexend Deca 15 px
S8  Given la page  Then couleurs de la §3 : fonds des cartes, titres, paragraphes (vert foncé, blanc 80 %, blanc 75 %),
                   liens (fond Gray 100, texte vert foncé, Cyan 800, Green 950)
S9  Given l'appareil en thème clair ou sombre  Then le fond de la page reste Gray 100 (A6)

Interactions
S10 Given un lien Learn More  When je le survole  Then fond transparent, contour et texte Gray 100 (vert foncé sur Sedans) ;
                   When je le quitte  Then il revient à la pilule Gray 100
S11 Given prefers-reduced-motion: reduce  When je survole les liens  Then aucune transition n'est jouée
S12 Given la page  When j'appuie sur Tab cinq fois  Then les trois liens Learn More, « Frontend Mentor », « Koya Esdras »,
                   chacun avec un contour de 2 px au moins
S13 Given le pied de page  Then liens soulignés, bonnes adresses ; When je survole un lien  Then son soulignement disparaît

Accessibilité et règles FM
S14 Given 375 et 1440 px  Then axe-core : aucune violation sérieuse ou critique
S15 Given le HTML servi  Then validateur W3C Nu : aucune erreur
S16 Given le HTML servi  Then html-validate au réglage de FM : aucune erreur
S17 Given le JavaScript du dépôt  Then eslint au réglage de FM : aucune erreur
    (et les tests de garde des règles FM déjà vues : longueurs en rem, aria-label, CSS logique)

Visuel (seuils calibrés en Phase 3, G3-2)
S18 1440 × 800 vs desktop.jpg ≤ 5,0 %
S19 1440 × 800, lien SUVs survolé vs etats.jpg ≤ 5,0 %
S20 375 × 1502 vs mobile.jpg ≤ 5,1 %
```
