const { webkit } = require('playwright');

const options = {
  headless: false,
  slowMo: 150,
};

(async () => {
  const browser = await webkit.launch(options);
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();