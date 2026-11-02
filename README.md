# Webcore!!

[![npm version](https://img.shields.io/npm/v/npm?style=flat-square)](https://www.npmjs.com/package/npm) [![license](https://img.shields.io/github/license/5NKR/Webcore?style=flat-square)](https://github.com/5NKR/Webcore/blob/main/LICENSE) [![last commit](https://img.shields.io/github/last-commit/5NKR/Webcore?style=flat-square)](https://github.com/5NKR/Webcore/commits) [![open issues](https://img.shields.io/github/issues/5NKR/Webcore?style=flat-square)](https://github.com/5NKR/Webcore/issues)

Utilities, resources & GIFs focused on replicating and accessing the weird elements of early 2000s internet

- <a href="https://github.com/5NKR/Webcore">Webcore On GitHub ↗</a>
- <a href="https://www.npmjs.com/package/@5nkr/webcore">Webcore On NPM ↗</a>

## Roadmap

| Implemented            |         |
|------------------------|---------|
| Hypnospace Outlaw GIFs | `1.0.2` |

| Planned               |            |
|-----------------------|------------|
| Animation Factory API | `>= 1.0.3` |
| Make Sweet API        | `>= 1.0.4` |
| Builtin GIFs          | `*`        |

| Unplanned           |    |
|---------------------|----|
| Unicornycopia       | ❓ |
| Tetrageddon         | ❓ |
| Desktop Explorer    | ❓ |
| Last Seen Online    | ❓ |
| Lacey's Flash Games | ❓ |

## Installation

Installing w npm:
```sh
npm i @5nkr/webcore
```

Installing as a dev dependency:
```sh
npm i -D @5nkr/webcore
```

## Usage

All GIF names are saved as a `WebcoreGifHandle`

Pretty much all modern IDEs will auto suggest these names upon typing

### Importing webcore:
```js
import { Webcore } from '@5nkr/webcore';
```

### Getting a GIF's metadata:
```js
const gifMeta = Webcore.GIFS.metadata('skeleton-wave');

console.log(gifMeta.id); // 213
console.log(gifMeta.name); // 'skeleton-wave'
console.log(gifMeta.href); // 'src/img/gif/hypnospace/3d/skeleton-wave.gif'
console.log(gifMeta.category); // 'hypnospace:3d'
```

### Getting a GIF as an encoded Base64 string:
```js
const gifBase64 = Webcore.GIFS.base64('snake');
const gifRawBase64 = Webcore.GIFS.base64('snake', true);

console.log(gifBase64); // 'data:image/gif;base64,<GIF_BASE64_STRING>'
console.log(gifRawBase64); // '<GIF_BASE64_STRING>'
```

### Using GIFs w HTML:
```js
const gifHtml = Webcore.GIFS.html('beerotate', document);
const gifHtmlWithCallback = Webcore.GIFS.html('beerotate', document,
    (imgElement /*HTMLImageElement*/) /*void*/ => {
        // add extra callbacks
        imgElement.setAttribute('class', 'gif');
        imgElement.id = 'beeRotateGif';

        // or clear & replace default attrs
        imgElement.removeAttribute('title');
        imgElement.alt = 'spinny bee :3';
    }
);

console.log(gifHtml.outerHTML); // '<img src="data:image/gif;base64,<GIF_BASE64_STRING>" alt="webcore:beerotate" title="webcore:beerotate" />'
console.log(gifHtmlWithCallback.outerHTML); // '<img src="data:image/gif;base64,<GIF_BASE64_STRING>" class="gif" id="beeRotateGif" alt="spinny bee :3" />'
```

## Uninstallation

Uninstalling w npm:
```sh
npm rm @5nkr/webcore
```

## Building 

Cloning the repo:
```sh
git clone https://github.com/5NKR/Webcore.git webcore && cd webcore
npm i
```

Building w npm:
```sh
npm run draft
```

The built tarball is written to `dist/5nkr-webcore-<VERSION>.tar.gz`