import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { open, card } from './helpers.js'

// Spec §6 — S14 : aucune violation sérieuse ou critique

for (const [width, height] of [[375, 1502], [1440, 800]]) {
  test(`S14 — axe-core à ${width} px`, async ({ page }) => {
    await open(page, width, height)
    // présence d'abord : axe ne trouve rien à redire à une page vide
    await expect(card(page, 'Luxury')).toBeVisible()

    const { violations } = await new AxeBuilder({ page }).analyze()
    const serious = violations.filter((v) => ['serious', 'critical'].includes(v.impact))
    expect(serious.map((v) => `${v.id} : ${v.nodes.map((n) => n.target).join(', ')}`)).toEqual([])
  })
}
