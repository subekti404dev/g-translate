# G-Translate
Just another nodejs module to translate text from one language to another language. Its fetches data from google translate by the way.

## How to Install
```bash
npm install g-translate
# or
yarn add g-translate
```

## How to Use
```bash
const gtranslate = require("g-translate");

# its asyncronous
const translated = await gtranslate.translate("Selamat Pagi", {from:"id", to: "en"});

# to get list of languages use this variable
gtranslate.languages
```

