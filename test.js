const itunes = require('itunes-web-api');

(async () => {
    let data = await itunes.trackVideo('Drake - Jumpman', { limit: 1, lang: 'en', country: 'US' })
    console.log(data)
})()