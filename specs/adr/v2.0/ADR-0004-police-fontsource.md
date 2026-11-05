# ADR-0004 : Big Shoulders Display et Lexend Deca par Fontsource

## Statut
Accepté (2026-11-05) — même choix que le lot 2 et le Social proof (choix de Koya : Fontsource plutôt que le lien Google Fonts).

## Contexte
Le starter ne fournit **aucun fichier de police** ; le guide de style renvoie à Google Fonts (Big Shoulders 700, Lexend Deca 400). La maquette a été calée avec Big Shoulders Display et Lexend Deca de Google Fonts ; les tests visuels comparent des pixels (S18 à S20) : la police doit être là au moment des captures. Les images FM sont en **Big Shoulders Display** ; la famille « Big Shoulders » actuelle de Google, citée par le guide, est 13 % plus large à 40 px (G3-3).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`@fontsource/big-shoulders-display` et `@fontsource/lexend-deca` (choisie)** | Les fichiers de Google Fonts, en woff2 découpés par alphabet, servis avec le site ; aucun appel à un tiers ; tests indépendants du réseau | Une dépendance de plus par famille |
| Lien Google Fonts | Ce que suggère le guide de style ; aucune dépendance | Dépend du réseau et de Google (vie privée, captures des tests) |

## Décision
- `@fontsource/big-shoulders-display` et `@fontsource/lexend-deca` en dépendances d'exécution ; seules les graisses Big Shoulders Display 700 et Lexend Deca 400 sont importées dans `src/style.css`.
- `font-display: swap` (valeur du paquet).

## Conséquences
- Aucun appel à un serveur de polices.
- Fitness function (test « ADR-0004 » de `tests/statique.spec.js`) : rien n'est chargé hors du domaine ; Big Shoulders Display 700 et Lexend Deca 400 se chargent.
