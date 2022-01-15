const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

const puppeteer = require("puppeteer");

it('renders correctly', async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
      width: 1024,
      height: 768
  })

  await page.goto('http://localhost:8080/')

  const image = await page.screenshot();

  expect(image).toMatchImageSnapshot();
});