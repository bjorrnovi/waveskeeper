const extension = require('extensionizer')
const allLocales = require('../copied/_locales/index.json')

const existingLocaleCodes = allLocales.map(locale => locale.code.toLowerCase().replace('_', '-'))

async function getFirstLangCode() {
    const langCodes = await new Promise(resolve => {extension.i18n.getAcceptLanguages(resolve)})
    return langCodes.map(code => code.toLowerCase()).find(code => existingLocaleCodes.includes(code))
}

module.exports = getFirstLangCode