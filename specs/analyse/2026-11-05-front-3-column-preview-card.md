# 2026-11-05 — Rapport d'exécution : 3-column preview card component (v2.0.0)

> SDL-FM 1.5.0, Phases 7 et 8 (remise à niveau, étape B, lot 3). Tests sur le build de production (`vite build` + `vite preview`) ; parcours réel dans le navigateur intégré (configuration `tc-preview`, `http://localhost:4222/front-3-column-preview-card/`).

## 1. Tests automatiques (Phase 7)

`npm test` : **32 réussis sur 32**.

| Groupe | Scénarios | Résultat |
|---|---|---|
| Mise en page | S1 à S5 (1440, 375, 768 ; 1023 empilées, 1024 sur une ligne ; 320 à 1440 sans défilement horizontal ; pied de page) | ✅ 10 / 10 |
| Contenu | S6 à S9 (h1 masqué, h2, liens aux noms distincts, icônes décoratives chargées ; polices et tailles ; couleurs Q-A1 et Q-A2 ; fond en thème clair et sombre) | ✅ 5 / 5 |
| Interactions | S10 à S13 (survols des liens, mouvements réduits, ordre au clavier, attribution) | ✅ 4 / 4 |
| Accessibilité | S14 : axe-core à 375 et 1440 px | ✅ 2 / 2 |
| HTML, JavaScript, règles FM | S15 (W3C Nu), S16 (html-validate au réglage de FM), S17 (eslint), longueurs en rem, aria-label, CSS logique ; fitness ADR-0003 et ADR-0004 | ✅ 8 / 8 |
| Visuel | S18 à S20 | ✅ 3 / 3 |

### Comparaison visuelle

| Écran | Image FM | Pixels différents | Seuil | Penpot (Phase 3) |
|---|---|---|---|---|
| Desktop 1440 × 800 | `desktop.jpg` | 1,96 % | 5,0 % | 2,15 % |
| États 1440 × 800 (lien SUVs survolé) | `etats.jpg` | 2,92 % | 5,0 % | 2,25 % (les 3 liens survolés) |
| Mobile 375 × 1502 | `mobile.jpg` | 3,68 % | 5,1 % | 4,04 % |

L'écart voulu vient du texte vert foncé de la carte Sedans (Q-A1). Contrôle rouge fait avant le code (Phase 4) : 25 échecs pour la bonne raison sur le starter et 5 tests de garde ; fitness functions (Phase 5) : 2 échecs attendus.

Un test corrigé pendant la Phase 6 (commit `fix(test)`, toujours rouge sur le starter) : Tailwind écrit le blanc à 80 % en `oklab(… / 0.8)` ; S8 compare désormais les couleurs rendues (RGBA) et non leur écriture.

## 2. Parcours réel (Phase 8)

| Étape | 320 px | 1024 px | 1440 px |
|---|---|---|---|
| Disposition | ✅ cartes empilées de 272 px, paragraphes sur 6 lignes, pas de défilement horizontal | ✅ trois colonnes (52, 154), pied de page dans la fenêtre | ✅ (tests S1, S5) |
| Polices | ✅ Big Shoulders Display 700 et Lexend Deca 400 chargées | — | ✅ |
| Clavier | — | ✅ Tab : « Learn More about sedans », contour 2 px vert foncé décalé de 3 px dès l'arrivée du focus (leçon M35 appliquée) | ✅ |

## 3. Écarts relevés et suites

Aucun écart.

Constats de la construction (Phase 6), sans écart restant :
- Paquets Fontsource récents : l'import s'écrit sans `.css` (`@fontsource/big-shoulders-display/700`), le champ `exports` l'ajoute.
- La règle « pas de px » relevait `calc(infinity * 1px)` (pilule) : écrit en rem.
- Largeur du texte : les coupures des paragraphes de l'image FM tiennent pour une largeur de 208,1 à 212,1 px ; les colonnes donnent 210,7 px.

## 4. En ligne (Phase 12)

`BASE_URL=https://ounokoya.github.io/front-3-column-preview-card/ npx playwright test --workers=2` : **32 réussis sur 32**, écarts visuels identiques au local (1,96 %, 2,92 % et 3,68 %), sur la v2.0.0 déployée depuis la branche `gh-pages` (publication avec l'accord de Koya, 2026-11-05). GitHub a activé Pages de lui-même à la première publication de la branche `gh-pages`.

## 5. Verdict

Conforme à la spec et à la maquette validée (G3). README fait (Phase 9) ; v2.0.0 en ligne. Prêt pour « Edit solution » sur FM (Phase 13).
