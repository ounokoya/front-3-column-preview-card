import { test, expect } from '@playwright/test'
import { open, card, learn, footer, box, near, textBox, CARDS, ABOUT } from './helpers.js'

// Spec §4 — S1 à S5 (positions de la maquette Penpot, à 1 px près)

test('S1 — 1440 × 800 : les trois cartes côte à côte, liens alignés en bas', async ({ page }) => {
  await open(page, 1440, 800)
  const cols = [[260, 307, 308], [567, 306, 615], [873, 307, 921]]
  for (const [i, name] of CARDS.entries()) {
    const [x, width, lx] = cols[i]
    near(await box(card(page, name)), { x, y: 170, width, height: 500 }, name)
    near(await box(learn(page, ABOUT[name])), { x: lx, y: 575, width: 146, height: 48 }, `lien ${name}`)
  }
})

test('S2 — 375 × 1502 : cartes empilées, le lien suit le paragraphe', async ({ page }) => {
  await open(page, 375, 1502)
  for (const [i, name] of CARDS.entries()) {
    near(await box(card(page, name)), { x: 24, y: 88 + i * 442, width: 327, height: 442 }, name)
    near(await box(learn(page, ABOUT[name])), { x: 72, y: 434 + i * 442, width: 146, height: 48 }, `lien ${name}`)
  }
})

test('S3 — 768 × 1024 : cartes empilées et centrées ; 1023 px empilées, 1024 px sur une ligne (Q-B4)', async ({ page }) => {
  await open(page, 768, 1024)
  near(await box(card(page, 'Sedans')), { x: 220.5, y: 88, width: 327, height: 442 }, 'Sedans')
  await open(page, 1023, 900)
  const [a, b] = [await box(card(page, 'Sedans')), await box(card(page, 'SUVs'))]
  expect(b.y, '1023 px : SUVs sous Sedans').toBeGreaterThanOrEqual(a.y + a.height - 1)
  expect(b.x, '1023 px : même colonne').toBe(a.x)
  await open(page, 1024, 900)
  const row = await Promise.all(CARDS.map(async (n) => box(card(page, n))))
  expect(row.map((r) => r.y), '1024 px : même ligne').toEqual([row[0].y, row[0].y, row[0].y])
})

for (const width of [320, 375, 768, 1023, 1024, 1440]) {
  test(`S4 — ${width} px : pas de défilement horizontal`, async ({ page }) => {
    await open(page, width, 900)
    // présence d'abord : une page vide n'a jamais de défilement
    await expect(card(page, 'Luxury')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0)
  })
}

test('S5 — 1440 × 800 : pied de page centré sous les cartes, dans la fenêtre', async ({ page }) => {
  await open(page, 1440, 800)
  const c = await box(card(page, 'Sedans'))
  // boîte sans arrondi (somme de deux demi-pixels)
  const f = await footer(page).boundingBox()
  const t = await textBox(footer(page))
  expect(f.y).toBeGreaterThanOrEqual(c.y + c.height)
  expect(f.y + f.height).toBeLessThanOrEqual(800)
  expect(Math.abs((t.left + t.right) / 2 - 720)).toBeLessThanOrEqual(1)
})
