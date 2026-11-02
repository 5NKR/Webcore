import GifIndexJson from './gif-index.json';
import GifIndexB64Json from './gif-index.b64.json';

type WebcoreGifHandle =
    'hiwave'
    | 'skeleton-run'
    | 'badcitizen-illegalcon'
    | 'beefbrain'
    | 'candlerose'
    | 'coolpunk-mainbg'
    | 'cross-flare'
    | 'cruisepagead'
    | 'festering-heart'
    | 'festeringorifice'
    | 'fre3zeroriginal'
    | 'ghgwiggle'
    | 'goodtime-animbg'
    | 'goodtime_take2'
    | 'gus-happyend'
    | 'gus-sadend'
    | 'gusbut01'
    | 'gusbut02'
    | 'gusbut03'
    | 'gusstair'
    | 'hauntedhouse'
    | 'hscentralemblem'
    | 'inspirobuttons'
    | 'jack-cogs'
    | 'jack-cogsdark'
    | 'jaywave'
    | 'kataklysm-gp1'
    | 'kataklysm-gp3'
    | 'kataklysm-gp4'
    | 'katalkysm-gp2'
    | 'kittenchristmas'
    | 'klyfta-live'
    | 'kruncherspl1'
    | 'kruncherspl2'
    | 'menorah'
    | 'newuser-fig1'
    | 'newuser-fig2'
    | 'newuser-fig3'
    | 'newuser-fig4'
    | 'outlaw-alpha1'
    | 'outlaw-prebeta'
    | 'outlawdetainmentbg'
    | 'phaedrala-award'
    | 'sisroll1'
    | 'sisroll2'
    | 'smolderpics'
    | 'alarmbell'
    | 'alien-tallgreen'
    | 'americanflag'
    | 'angel-doves'
    | 'angel-front'
    | 'angel-grave'
    | 'angel-left'
    | 'angel-right'
    | 'angelguitar'
    | 'angeltoilet'
    | 'apple'
    | 'arlan-snowmansleigh'
    | 'arlansnowman'
    | 'arlanwitch'
    | 'armytank'
    | 'arrow-circular'
    | 'artie-house'
    | 'axxlogo'
    | 'ball-golf'
    | 'ball-soccer'
    | 'balloons'
    | 'bananas'
    | 'bed'
    | 'beerotate'
    | 'bells'
    | 'bible'
    | 'biohazard'
    | 'blinky-arrow'
    | 'bookflip'
    | 'boombox'
    | 'breakfast'
    | 'butterfly'
    | 'cactus-flex-dance'
    | 'card-ace'
    | 'card-queen'
    | 'carrot-jump'
    | 'cd-big'
    | 'celtic-sym2'
    | 'celticknot-rotate'
    | 'citizen_wave'
    | 'cog-single'
    | 'cogs'
    | 'computer-cow'
    | 'constructionworker'
    | 'coolpunk-snowman'
    | 'coolpunkemblem'
    | 'coolsnowman'
    | 'couch-blu-rotate'
    | 'crown'
    | 'crucifix'
    | 'crystalball-big'
    | 'diamond'
    | 'dice'
    | 'dino-run'
    | 'do-not-exit'
    | 'dolphin'
    | 'dragontalk'
    | 'dreidels'
    | 'drum-spin'
    | 'dumpster-nobeemote'
    | 'earth'
    | 'egg'
    | 'engine'
    | 'explosion'
    | 'fairy1'
    | 'fairy2'
    | 'fairy3'
    | 'festeringegg'
    | 'filmrotate'
    | 'fire'
    | 'fish'
    | 'fish2'
    | 'fishdetective'
    | 'flame'
    | 'flowerbasket'
    | 'footb-helmet'
    | 'football'
    | 'furni-armchair'
    | 'furni-dinerstool'
    | 'furni-futon'
    | 'gamesrotate'
    | 'gcream-bowl'
    | 'gemstone'
    | 'gemstone2'
    | 'ghost'
    | 'ghost2'
    | 'gingerbreadman'
    | 'globe-wireframe'
    | 'gooper-3d-fall'
    | 'gooper-3d-look'
    | 'gooper-3d-newspaper'
    | 'gooper-3d-sax'
    | 'gooper-standwith'
    | 'gramaphone'
    | 'gun'
    | 'gus-arrowfront'
    | 'gus-arrowside'
    | 'gusbooks'
    | 'hand-point'
    | 'hand-shrug'
    | 'hand-thumbsup'
    | 'hand-wave-toon'
    | 'hand-wave'
    | 'heartoftheorifice'
    | 'hotairballoon'
    | 'hotdogs'
    | 'hotdogspin'
    | 'hydrant'
    | 'hypnocoin'
    | 'icecream'
    | 'jellyfish'
    | 'ketchupmustard'
    | 'kitcar'
    | 'leaf'
    | 'lightbulb'
    | 'linda-phone'
    | 'linda-sea-01'
    | 'linda-sea-02'
    | 'linda-sea-03'
    | 'lindalibraryold'
    | 'mailbox'
    | 'microphone'
    | 'moth'
    | 'mushroomhop'
    | 'newtonsc'
    | 'noble-clap'
    | 'noble-laugh'
    | 'noble-sunglasses'
    | 'noble-witw'
    | 'nomoney'
    | 'ohno'
    | 'openeyedemblem'
    | 'orb1'
    | 'orb2'
    | 'orb3'
    | 'orb4'
    | 'palmtree'
    | 'peanut'
    | 'peas'
    | 'penguin1'
    | 'penguin2'
    | 'phone-public'
    | 'piggybank'
    | 'pizza-alien'
    | 'pizza-rotate'
    | 'pizzadance'
    | 'playingcards'
    | 'portal'
    | 'pumpkin'
    | 'purse'
    | 'rabbit-3d'
    | 'rabbit-hat'
    | 'raygun'
    | 'relaxwand'
    | 'ring-diamonds'
    | 'robskull'
    | 'rotatingdesk'
    | 'santawindow'
    | 'scifi-fightership'
    | 'scrambleshake'
    | 'security-cam'
    | 'shark'
    | 'skateboard'
    | 'skelehand-point'
    | 'skelehand-rock'
    | 'skeleton-guitar'
    | 'skeleton-motorcycle'
    | 'skeleton-wave'
    | 'skull-cowboy'
    | 'skull-laugh'
    | 'skull-rose'
    | 'snake'
    | 'snowman3dsmaller'
    | 'spider'
    | 'spraybottle'
    | 'squisherz-dec0'
    | 'star-rotate'
    | 'starportemblemb'
    | 'stop'
    | 'strafe-glutton'
    | 'sunswirl'
    | 'sword'
    | 'television'
    | 'timebomb'
    | 'tool-hammer'
    | 'tool-saw'
    | 'traffic-light'
    | 'trashdog'
    | 'trennisra'
    | 'trumpet'
    | 'ufo'
    | 'umbrella'
    | 'vhs-tape'
    | 'warlock-beardflip'
    | 'warlock-raisestaff'
    | 'warlock-strike'
    | 'watermelon'
    | 'xmasorb'
    | 'boo-text'
    | 'congratstext'
    | 'connie-arts'
    | 'connie-different'
    | 'connie-divider'
    | 'connie-funny'
    | 'connie-music'
    | 'connie-tech'
    | 'coolpisdead'
    | 'coolpunk-alive'
    | 'coolpunk-paradise'
    | 'dontnate'
    | 'fungusbutt2'
    | 'fungutsbutt1'
    | 'gcream-heatnsip'
    | 'gcream-logo'
    | 'goodtime-logo'
    | 'hscentral'
    | 'jesus-sparkly'
    | 'noble-aldrinlogo'
    | 'openeyedlogo'
    | 'stopsendingmon'
    | 'blood-divider'
    | 'checker-black-big'
    | 'checker-black'
    | 'checker-white-big'
    | 'checker-white'
    | 'circuit'
    | 'flame-divider'
    | 'gcream-divider'
    | 'icicles'
    | 'ooze-divider'
    | 'starfield';

interface WebcoreGifAccess extends Array<WebcoreGifEntry> {
}

interface WebcoreB64GifAccess extends Record<WebcoreGifHandle, string> {
}

interface WebcoreGifEntry {
    id: number;
    name: WebcoreGifHandle;
    category: string;
    href: string;
}

class WebcoreGifLookupService {
    private static readonly KEY: symbol = Symbol.for('@5nkr/webcore::gif_lookup_service');

    public static getInstance(): WebcoreGifLookupService {
        const glob = globalThis as unknown as Record<symbol, WebcoreGifLookupService | undefined>;
        return glob[this.KEY] ??= new WebcoreGifLookupService();
    }

    private readonly access: WebcoreGifAccess;
    private readonly base64Access: WebcoreB64GifAccess;

    constructor() {
        this.access = JSON.parse(JSON.stringify(GifIndexJson)) as WebcoreGifAccess;
        this.base64Access = JSON.parse(JSON.stringify(GifIndexB64Json)) as WebcoreB64GifAccess;
    }

    public metadata(name: WebcoreGifHandle): WebcoreGifEntry | undefined {
        return this.db(name);
    }

    public base64(name: WebcoreGifHandle, raw?: boolean): string | undefined {
        const db: string | undefined = this.b64db(name);

        if (!db)
            return undefined;
        if (typeof raw !== 'undefined' && raw)
            return db;

        return `data:image/gif;base64,${ db }`;
    }

    public html(name: WebcoreGifHandle, document: Document, transformCallbackFn?: (imgElement: HTMLImageElement) => void): HTMLImageElement {
        const b64: string | undefined = this.base64(name);

        if (!b64)
            throw new WebcoreError('could not find webcore gif with name "{}"', name);

        const img: HTMLImageElement = document.createElement('img');

        img.src = b64;
        img.alt = 'webcore:' + name;
        img.title = 'webcore:' + name;

        if (transformCallbackFn)
            transformCallbackFn(img);

        return img;
    }

    private db(name: WebcoreGifHandle): WebcoreGifEntry | undefined {
        if (typeof name !== 'string') {
            console.error(`invalid webcore gif name: ${ name }`);
            return undefined;
        }

        const lookupResults: WebcoreGifEntry[] = this.access.filter((gif: WebcoreGifEntry): boolean => gif.name === name);

        if (1 !== lookupResults.length) {
            console.error(`could not find webcore gif with name '${ name }'`);
            return undefined;
        }

        return this.access[this.access.indexOf(lookupResults[0]!)];
    }

    private b64db(name: WebcoreGifHandle): string | undefined {
        if (typeof name !== 'string') {
            console.error(`invalid webcore gif name: ${ name }`);
            return undefined;
        }

        const entry: string | undefined = this.base64Access[name];

        if (!entry) {
            console.error(`could not find webcore gif with name '${ name }'`);
            return undefined;
        }

        return entry;
    }
}

class Webcore {
    public static GIFS: WebcoreGifLookupService = WebcoreGifLookupService.getInstance();
}

class WebcoreError extends Error {
    static fmt(msg: string, args: any[]): string {
        if (!msg.includes('{}'))
            return msg;
        let i: number = 0;
        return msg.replace(/{}/g, (match: string): string => {
            const formatted: any = typeof args[i] !== 'undefined' ? args[i] : match;
            i++;
            return formatted;
        });
    }

    constructor(message: string, ...args: any[]) {
        super(WebcoreError.fmt(message, args));
    }
}

export { Webcore, WebcoreGifHandle, WebcoreB64GifAccess, WebcoreGifAccess, WebcoreGifEntry };