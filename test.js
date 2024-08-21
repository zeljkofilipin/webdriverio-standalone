import { remote } from 'webdriverio'

const browser = await remote({
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: process.env.CI ? ['headless', 'disable-gpu'] : []
        }
    }
})

await browser.url('https://webdriver.io')

const apiLink = await browser.$('=API')
await apiLink.click()

// await browser.saveScreenshot('./screenshot.png') // in v9 it fails with `ReferenceError: browser is not defined`
await browser.deleteSession()