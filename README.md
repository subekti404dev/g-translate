[![view on npm](http://img.shields.io/npm/v/@subekti13/g-translate.svg)](https://www.npmjs.org/package/@subekti13/g-translate)
[![npm module downloads per month](http://img.shields.io/npm/dm/@subekti13/g-translate.svg)](https://www.npmjs.org/package/@subekti13/g-translate)
# G-Translate
Just another nodejs module to translate text from one language to another language. Its fetches data from google translate by the way.

## How to Install
```bash
npm install @subekti13/g-translate
# or
yarn add @subekti13/g-translate
```

## How to Use
```javascript
const gtranslate = require("@subekti13/g-translate");

// its asyncronous
gtranslate.translate("Selamat Siang", {from:"id", to: "ja"})
    .then((result) => {
        console.log(result)
    })
    .catch(err => {
        console.log(error)
    });

// to get list of languages use this variable
console.log(gtranslate.languages)
```

## Response Format
```json
  { 
    "targetText": "こんにちは",
    "romanization": "Kon'nichiwa" 
  }
```