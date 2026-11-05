# ADR-0005 : « Learn More » en liens au nom distinct ; survols par couleurs seulement

## Statut
Accepté (2026-11-05) — décisions G2 (Q-A1, Q-B1, Q-B3) ; leçon M35 (lot 2).

## Contexte
Les trois « Learn More » mènent à une page de la catégorie (aucune adresse dans le challenge, Q-B1) ; trois liens au même texte seraient indistincts pour un lecteur d'écran (A3). Au survol (`etats.jpg`), la pilule devient transparente avec un contour et un texte clairs (vert foncé sur Sedans, Q-A1). Au lot 2, `transition-colors` animait aussi `outline-color` : le contour de focus arrivait en fondu (M35).

## Options
| Option | Pour | Contre |
|---|---|---|
| **`a href="#"` « Learn More » + suffixe masqué « about sedans » (choisie)** | Nom distinct sans changer le texte visible ; c'est une navigation, donc un lien | Le suffixe est à garder en phase avec le titre de la carte |
| `aria-label` sur chaque lien | Pas d'élément masqué | Le nom ne contient plus exactement le texte visible si on le reformule ; règle FM sur `aria-label` déjà vue (M33) |
| `button` | — | Ce n'est pas une action de la page |

## Décision
- `a href="#"` avec « Learn More » et `span` masqué (`sr-only`) « about sedans », « about SUVs », « about luxury ».
- Pilule : fond Gray 100, contour 2 px Gray 100, texte de la couleur de la carte (vert foncé sur Sedans) ; survol : fond transparent, contour et texte Gray 100 (vert foncé sur Sedans).
- Transition limitée à `color`, `background-color` et `border-color`, supprimée avec `motion-reduce` ; contour de focus 2 px décalé de 3 px.
- Icônes : `img alt=""` 64 × 40 (Q-B3). `src/main.js` n'importe que la feuille de style.

## Conséquences
- Ordre clavier et noms vérifiés par S6 et S12 ; survols par S10, mouvements réduits par S11, états visuels par S19.
