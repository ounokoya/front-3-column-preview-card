import { test, expect } from '@playwright/test'
import { open, learn, link, style, cssColor, CARDS, ABOUT } from './helpers.js'

// Spec §5 et §6 — S10 à S13

test.beforeEach(async ({ page }) => {
  await open(page, 1440, 800)
})

test('S10 — survol d\'un lien Learn More : fond transparent, contour et texte clairs (vert foncé sur Sedans), puis retour', async ({ page }) => {
  const gray = await cssColor(page, 'hsl(0, 0%, 95%)')
  const dark = await cssColor(page, 'hsl(179, 100%, 10%)')
  for (const name of CARDS) {
    const l = learn(page, ABOUT[name]), ink = name === 'Sedans' ? dark : gray
    await l.hover()
    await expect.poll(() => style(l, 'backgroundColor'), { message: `${name} : fond` }).toBe('rgba(0, 0, 0, 0)')
    await expect.poll(() => style(l, 'color'), { message: `${name} : texte` }).toBe(ink)
    await expect.poll(() => style(l, 'borderTopColor'), { message: `${name} : contour` }).toBe(ink)
    expect(parseFloat(await style(l, 'borderTopWidth')), `${name} : contour de 2 px`).toBe(2)
    await page.mouse.move(0, 0)
    await expect.poll(() => style(l, 'backgroundColor'), { message: `${name} : retour` }).toBe(gray)
  }
})

test('S11 — prefers-reduced-motion : aucune transition sur les liens Learn More', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const name of CARDS) {
    await learn(page, ABOUT[name]).hover()
    const none = await learn(page, ABOUT[name]).evaluate((el) => {
      const s = getComputedStyle(el)
      return s.transitionProperty === 'none' || s.transitionDuration.split(',').every((d) => parseFloat(d) === 0)
    })
    expect(none, name).toBe(true)
  }
})

test('S12 — Tab : les trois liens Learn More, puis les deux liens du pied de page, chacun avec un contour de 2 px au moins', async ({ page }) => {
  const seen = []
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab')
    seen.push(await page.evaluate(() => {
      const el = document.activeElement
      const s = getComputedStyle(el)
      return { name: el.textContent.replace(/\s+/g, ' ').trim(), outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2 }
    }))
  }
  expect(seen.map((s) => s.name)).toEqual(['Learn More about sedans', 'Learn More about SUVs', 'Learn More about luxury', 'Frontend Mentor', 'Koya Esdras'])
  for (const s of seen) expect.soft(s.outline, `contour sur « ${s.name} »`).toBe(true)
})

test('S13 — liens du pied de page : soulignés, sans soulignement au survol ; bonnes adresses', async ({ page }) => {
  await expect(link(page, 'Frontend Mentor')).toHaveAttribute('href', 'https://www.frontendmentor.io?ref=challenge')
  await expect(link(page, 'Koya Esdras')).toHaveAttribute('href', 'https://www.frontendmentor.io/profile/ounokoya')
  for (const name of ['Frontend Mentor', 'Koya Esdras']) {
    expect(await style(link(page, name), 'textDecorationLine'), name).toBe('underline')
    await link(page, name).hover()
    await expect.poll(() => style(link(page, name), 'textDecorationLine'), { message: `${name} survolé` }).toBe('none')
  }
})
