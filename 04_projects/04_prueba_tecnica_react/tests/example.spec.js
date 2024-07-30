// @ts-check
import { test, expect } from '@playwright/test'

// const { test, expect } = require('@playwright/test')

/* const LOCALHOST_URL = import.meta.env.VITE_LOCAL_HOST_URL
const CATAAS_IMAGE_URL = import.meta.env.VITE_CATAAS_IMAGE_URL
const PEXELS_URL = import.meta.env.VITE_PEXELS_URL
 */

test('App shows random fact and an image.', async ({ page }) => {
  await page.goto('http://localhost:5173')

  const text = await page.getByTestId('fact-p')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log('This is textContext preview: ', textContent)
  console.log('This is imageSrc preview: ', imageSrc)

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(
    imageSrc?.startsWith('https://cataas.com/cat/says') ||
    imageSrc?.startsWith('https://api.pexels.com/v1')
  ).toBeTruthy()
})
