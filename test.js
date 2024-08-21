const { remote } = require('webdriverio');

(async () => {

const browser = await remote({
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            binary: '/Applications/chromium/mac_arm-982146/chrome-mac/Chromium.app/Contents/MacOS/Chromium', // macos chromium 101
            args: process.env.CI ? ['headless', 'disable-gpu'] : []
        }
    }
})

await browser.url('https://webdriver.io')

const apiLink = await browser.$('=API')
await apiLink.click()

await browser.saveScreenshot('./screenshot.png') // in v9 it fails with `ReferenceError: browser is not defined`
await browser.deleteSession()

})();