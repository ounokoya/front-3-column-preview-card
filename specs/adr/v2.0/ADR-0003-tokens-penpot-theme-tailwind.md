# ADR-0003 : Tokens Penpot → thème Tailwind (`@theme`)

## Statut
Accepté (2026-11-05) — même décision que les challenges précédents.

## Contexte
La bibliothèque Penpot (validée G3, `specs/visuel/penpot/maquette.md`) fixe les 4 couleurs FM, la couleur dérivée de la carte Sedans (Q-A1), la couleur des liens de l'attribution, les deux polices, les tailles de texte et le rayon des cartes. Décisions communes : ADR-0001, ADR-0002 (`frontmentor/specs/adr/`).

## Décision
- `src/style.css` déclare les tokens dans un seul bloc `@theme` et vide la palette par défaut (`--color-*: initial`).
- Les longueurs des tokens sont écrites en rem (règle FM).
- Correspondance :

| Penpot | `@theme` |
|---|---|
| Couleurs FM | `--color-gold-500`, `--color-cyan-800`, `--color-green-950`, `--color-gray-100`, `--color-white` (valeurs `hsl()` du style-guide) |
| Dérivée G2 | `--color-green-aa` (`hsl(179, 100%, 10%)`, Q-A1 : texte de la carte Sedans) |
| Attribution | `--color-link` (`hsl(228, 45%, 44%)`, couleur du starter) |
| Polices | `--font-display` (Big Shoulders Display, G3-3), `--font-sans` (Lexend Deca) ; chargement : ADR-0004 |
| Tailles de texte | `--text-title` (40 px), `--text-body` (15 px, interligne 25 px), `--text-attribution` (11 px) |
| Rayon | `--radius-card` (8, coins extérieurs du groupe de cartes) |
- Paragraphes à 80 % (SUVs, Q-A2) et 75 % (Luxury) : modificateur d'opacité de Tailwind sur `--color-white`.
- Point de rupture : `lg` (1024 px, valeur de Tailwind, Q-B4).

## Conséquences
- Changer une couleur du design = changer une ligne de `@theme`.
- Fitness function (test « ADR-0003 » de `tests/statique.spec.js`) : aucune couleur (`#…`, `rgb(`, `hsl(`) dans les classes, les styles et les blocs `<style>` de `index.html`, ni dans `src/style.css` hors des valeurs de tokens.
