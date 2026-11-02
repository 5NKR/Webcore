import GifIndexJson from './gif-index.json';
import GifIndexB64Json from './gif-index.b64.json';
class WebcoreGifLookupService {
    static KEY = Symbol.for('@5nkr/webcore.gifs');
    static getInstance() {
        const glob = globalThis;
        return glob[this.KEY] ??= new WebcoreGifLookupService();
    }
    access;
    base64Access;
    constructor() {
        this.access = JSON.parse(JSON.stringify(GifIndexJson));
        this.base64Access = JSON.parse(JSON.stringify(GifIndexB64Json));
    }
    metadata(name) {
        return this.db(name);
    }
    base64(name, raw) {
        const db = this.b64db(name);
        if (!db)
            return undefined;
        if (typeof raw !== 'undefined' && raw)
            return db;
        return `data:image/gif;base64,${db}`;
    }
    html(name, document, transformCallbackFn) {
        const b64 = this.base64(name);
        if (!b64)
            throw new WebcoreError('could not find webcore gif with name "{}"', name);
        const img = document.createElement('img');
        img.src = b64;
        img.alt = 'webcore:' + name;
        img.title = 'webcore:' + name;
        if (transformCallbackFn)
            transformCallbackFn(img);
        return img;
    }
    db(name) {
        if (typeof name !== 'string') {
            console.error(`invalid webcore gif name: ${name}`);
            return undefined;
        }
        const lookupResults = this.access.filter((gif) => gif.name === name);
        if (1 !== lookupResults.length) {
            console.error(`could not find webcore gif with name '${name}'`);
            return undefined;
        }
        return this.access[this.access.indexOf(lookupResults[0])];
    }
    b64db(name) {
        if (typeof name !== 'string') {
            console.error(`invalid webcore gif name: ${name}`);
            return undefined;
        }
        const entry = this.base64Access[name];
        if (!entry) {
            console.error(`could not find webcore gif with name '${name}'`);
            return undefined;
        }
        return entry;
    }
}
class Webcore {
    static GIFS = WebcoreGifLookupService.getInstance();
}
class WebcoreError extends Error {
    static fmt(msg, args) {
        if (!msg.includes('{}'))
            return msg;
        let i = 0;
        return msg.replace(/{}/g, (match) => {
            const formatted = typeof args[i] !== 'undefined' ? args[i] : match;
            i++;
            return formatted;
        });
    }
    constructor(message, ...args) {
        super(WebcoreError.fmt(message, args));
    }
}
export { Webcore };
//# sourceMappingURL=webcore.js.map