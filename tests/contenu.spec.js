import { test, expect } from '@playwright/test'
import { open, pageTitle, cards, card, learn, style, cssColor, CARDS, ABOUT } from './helpers.js'

// Spec §2, §3 et §6 — S6 à S9

const GRAY = 'hsl(0, 0%, 95%)'
const DARK = 'hsl(179, 100%, 10%)'
const COLORS = {
  Sedans: { bg: 'hsl(31, 77%, 52%)', title: DARK, para: DARK, btn: DARK },
  SUVs: { bg: 'hsl(184, 100%, 22%)', title: GRAY, para: 'hsla(0, 0%, 100%, 0.8)', btn: 'hsl(184, 100%, 22%)' },
  Luxury: { bg: 'hsl(179, 100%, 13%)', title: GRAY, para: 'hsla(0, 0%, 100%, 0.75)', btn: 'hsl(179, 100%, 13%)' },
}

test('S6 — titre masqué, trois cartes (h2, paragraphe, lien distinct vers #) ; icônes décoratives mais chargées', async ({ page }) => {
  await open(page, 1440, 800)
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  const h1 = await pageTitle(page).boundingBox()
  expect(h1.width <= 1 && h1.height <= 1, 'h1 masqué à l\'écran').toBe(true)
  await expect(page.getByRole('heading', { level: 2 })).toHaveText(CARDS)
  await expect(cards(page)).toHaveCount(3)
  for (const name of CARDS) {
    await expect(card(page, name).locator('p').first()).toBeVisible()
    await expect(learn(page, ABOUT[name])).toHaveAttribute('href', '#')
    await expect(learn(page, ABOUT[name])).toContainText('Learn More')
  }
  await expect(page.getByRole('main').getByRole('img')).toHaveCount(0)
  const imgs = page.getByRole('main').locator('img')
  await expect(imgs).toHaveCount(3)
  for (let i = 0; i < 3; i++) expect(await imgs.nth(i).evaluate((img) => img.complete && img.naturalWidth > 0), `icône ${i + 1}`).toBe(true)
})

test('S7 — titres Big Shoulders Display 40 px en majuscules ; paragraphes et liens Lexend Deca 15 px', async ({ page }) => {
  await open(page, 1440, 800)
  for (const name of CARDS) {
    const h2 = page.getByRole('heading', { level: 2, name, exact: true })
    expect(await style(h2, 'fontFamily'), name).toContain('Big Shoulders Display')
    expect(await style(h2, 'fontSize'), name).toBe('40px')
    expect(await style(h2, 'textTransform'), name).toBe('uppercase')
    const p = card(page, name).locator('p').first()
    expect(await style(p, 'fontFamily'), `paragraphe ${name}`).toContain('Lexend Deca')
    expect(await style(p, 'fontSize'), `paragraphe ${name}`).toBe('15px')
    expect(await style(p, 'lineHeight'), `paragraphe ${name}`).toBe('25px')
    expect(await style(learn(page, ABOUT[name]), 'fontSize'), `lien ${name}`).toBe('15px')
  }
})

test('S8 — couleurs des cartes, titres, paragraphes et liens (Q-A1, Q-A2)', async ({ page }) => {
  await open(page, 1440, 800)
  const gray = await cssColor(page, GRAY)
  for (const name of CARDS) {
    const c = COLORS[name]
    expect(await style(card(page, name), 'backgroundColor'), `fond ${name}`).toBe(await cssColor(page, c.bg))
    expect(await style(page.getByRole('heading', { level: 2, name, exact: true }), 'color'), `titre ${name}`).toBe(await cssColor(page, c.title))
    expect(await style(card(page, name).locator('p').first(), 'color'), `paragraphe ${name}`).toBe(await cssColor(page, c.para))
    expect(await style(learn(page, ABOUT[name]), 'backgroundColor'), `fond du lien ${name}`).toBe(gray)
    expect(await style(learn(page, ABOUT[name]), 'color'), `texte du lien ${name}`).toBe(await cssColor(page, c.btn))
  }
})

for (const colorScheme of ['light', 'dark']) {
  test(`S9 — appareil en thème ${colorScheme === 'light' ? 'clair' : 'sombre'} : le fond de la page reste Gray 100 (A6)`, async ({ page }) => {
    await page.emulateMedia({ colorScheme })
    await open(page, 375, 1502)
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe(await cssColor(page, GRAY))
  })
}
