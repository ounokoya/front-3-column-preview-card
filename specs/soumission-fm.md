# Mise à jour de la solution sur Frontend Mentor

> SDL-FM 1.5.0 Phase 13 (refonte v2.0.0). Textes préparés pour le formulaire « Edit solution » de la solution de 2023 : https://www.frontendmentor.io/solutions/3column-preview-card-component-yqth3VC8P6 (titre « flexbox, border,transition »). La modification est publique et faite au nom de Koya : elle n'est envoyée qu'avec son accord, au moment de l'envoi. Pas de nouveaux points (solution déjà soumise).

## Informations générales

| Champ | Valeur |
|---|---|
| Solution title (70 caractères max) | 3-column cards with WCAG AA colours, distinct link names & Tailwind v4 (70) |
| Repository URL | https://github.com/ounokoya/front-3-column-preview-card |
| Live site URL | https://ounokoya.github.io/front-3-column-preview-card/ |
| Tags (5 max, hors HTML/CSS/JS) | `tailwind-css`, `vite`, `accessibility`, `playwright` |
| Visibilité | Public |
| Capture | « Regenerate screenshot » : la page a changé depuis 2023 |

Après l'envoi : « Regenerate report » (vérifications automatiques gratuites), en vérifiant d'abord que la solution n'a pas de rapport IA (sinon un crédit serait consommé : accord de Koya).

## What are you most proud of, and what would you do differently next time?

I'm most proud of the accessibility work: the design's light text on the gold card is 2.13 to 2.41:1, so that card uses a very dark green (5.13:1), and the SUVs paragraph is white at 80 % (4.76:1). The three "Learn More" links have distinct names for screen readers ("Learn More about sedans"). Screenshots differ from the design JPGs by 1.96 % (desktop), 2.92 % (hover state) and 3.68 % (mobile) of pixels, mostly because of that dark text, and the 32 Playwright tests pass on the live site.

This is a rebuild of my 2023 solution. Next time, I'd check the heading font against the design before trusting the style guide (see below).

## What challenges did you encounter, and how did you overcome them?

- **The heading font**: the design uses Big Shoulders Display; the "Big Shoulders" family Google serves today is 13 % wider at 40 px. The site loads Big Shoulders Display from Fontsource.
- **Line breaks**: the design's paragraph lines fit only between 208.1 and 212.1 px; three 920 px columns with 48 px padding give 210.7 px, so every line breaks as in the design.
- **One hover colour per card**: each card sets a `--ink` custom property, used by the link's hover and focus styles.

## What specific areas of your project would you like help with?

1. Would you keep the gold card's text dark, or darken the gold itself to keep light text?
2. Is a visually hidden suffix ("about sedans") a good way to name the links, or would you use `aria-labelledby` with the card heading?
