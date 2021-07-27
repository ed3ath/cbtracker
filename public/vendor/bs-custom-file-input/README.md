# bs-custom-file-input

[![npm version](https://img.shields.io/npm/v/bs-custom-file-input.svg)](https://www.npmjs.com/package/bs-custom-file-input)
[![dependencies Status](https://img.shields.io/david/Johann-S/bs-custom-file-input.svg)](https://david-dm.org/Johann-S/bs-custom-file-input)
[![devDependencies Status](https://img.shields.io/david/dev/Johann-S/bs-custom-file-input.svg)](https://david-dm.org/Johann-S/bs-custom-file-input?type=dev)
[![Build Status](https://github.com/Johann-S/bs-custom-file-input/workflows/Tests/badge.svg)](https://github.com/Johann-S/bs-custom-file-input/actions?workflow=Tests)
[![Coverage Status](https://img.shields.io/coveralls/github/Johann-S/bs-custom-file-input/master.svg)](https://coveralls.io/github/Johann-S/bs-custom-file-input?branch=master)
[![JS gzip size](https://img.badgesize.io/Johann-S/bs-custom-file-input/master/dist/bs-custom-file-input.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/Johann-S/bs-custom-file-input/tree/master/dist/bs-custom-file-input.min.js)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=L1Z6cllmR0pVVUZBRmxTaGtEcm1QamUxdTZoQmRLeUFvWVlOcW5iODNVWT0tLUZTVWRKUzc4T05xSmhlZlJObVRKNEE9PQ==--177788f5ac0c50dcd3dd3eed31e39662d5612e7f)](https://www.browserstack.com/automate/public-build/L1Z6cllmR0pVVUZBRmxTaGtEcm1QamUxdTZoQmRLeUFvWVlOcW5iODNVWT0tLUZTVWRKUzc4T05xSmhlZlJObVRKNEE9PQ==--177788f5ac0c50dcd3dd3eed31e39662d5612e7f)

A little plugin which makes Bootstrap 4 custom file input dynamic with no dependencies.

You can use it on [React](https://stackblitz.com/edit/bs-custom-file-input-react) and [Angular](https://stackblitz.com/edit/bs-custom-file-input-angular) too because this plugin is written with the most used JavaScript framework: [VanillaJS](http://vanilla-js.com/).

[Demo](https://bs-custom-file-input.netlify.com/)

Features:

- Works with Bootstrap 4
- Works without *dependencies* and jQuery
- Display file name
- Display file names for `multiple` input
- Reset your custom file input to its initial state
- Handle form reset
- Allow custom selectors for input, and form
- Allow to drag and drop files
- Allow you to change the default display with a child in the `<label>` element
- Built in UMD to be used everywhere
- Small, only **2kb** and less if you gzip it

## Table of contents

- [Install](#install)
- [How to use it](#how-to-use-it)
- [Methods](#methods)
- [Compatibility](#compatibility)
- [Support me](#support-me)
- [Thanks](#thanks)
- [License](#license)

## Install

### With npm

```sh
npm install bs-custom-file-input --save
```

### CDN

CDN | Link
------------ | -------------
jsDelivr | [`https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js`](https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js)
jsDelivr, minified | [`https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js`](https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js)

## How to use it

You should wait for the document ready event and call the `init` method to make your custom file input dynamic.
We expose one global variable available everywhere: `bsCustomFileInput`

```js
$(document).ready(function () {
  bsCustomFileInput.init()
})
```

### Use it with npm

```js
import bsCustomFileInput from 'bs-custom-file-input'
```

For more examples check out [this file](https://github.com/Johann-S/bs-custom-file-input/blob/master/tests/index.html).

This library is UMD ready so you can use it everywhere.

## Methods

### init

Finds your Bootstrap custom file input and will make them dynamic.

#### Parameters

- `inputSelector`
  - default value: `.custom-file input[type="file"]`
  - type: `string`

  You can pass a custom input selector, but be sure to pass a **file input selector**
- `formSelector`
  - default value: `form`
  - type: `string`

  Allows you to pass a custom form selector, but be sure to pass a **form selector**

### destroy

Removes this plugin from your Bootstrap custom file input and restore them at their first initial state

## Compatibility

bsCustomFileInput is compatible with:

- IE10+
- Edge
- Firefox
- Chrome
- Safari
- Chrome Android
- Safari iOS

You can find our BrowserStack list of browsers [here](https://github.com/Johann-S/bs-custom-file-input/blob/master/browsers.js).

## Support me

If you want to thank me, you can support me and become my [Patron](https://www.patreon.com/jservoire)

## Thanks

[![BrowserStack Logo](https://www.browserstack.com/images/mail/browserstack-logo-footer.png)](https://www.browserstack.com/)

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

## License

[MIT](https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
