import { WebcoreGifEntry, WebcoreGifHandle } from './include/webcore';
import fs, { Dirent } from 'fs';
import path from 'path';

class Build {
    public static run(): Build {
        return new Build();
    }

    private readonly srcPath: string;
    private readonly mainDestPath: string;
    private readonly base64DestPath: string;

    private readonly entries: Array<WebcoreGifEntry>;
    private readonly base64Entries: Record<string, string>;

    private constructor() {
        this.srcPath = path.join('src', 'img', 'gif');
        this.mainDestPath = path.join('src', 'lib', 'gif-index.json');
        this.base64DestPath = path.join('src', 'lib', 'gif-index.b64.json');
        this.entries = [];
        this.base64Entries = {};
        this.start();
    }

    public start(): void {
        const files: Array<Dirent> = fs
            .readdirSync(this.srcPath, { withFileTypes: true, recursive: true, encoding: 'utf8' })
            .filter((f: Dirent<string>): boolean => f.isFile() && f.name.endsWith('.gif'));

        for (const file of files) {
            const entry: WebcoreGifEntry = {
                id: files.indexOf(file),
                name: file.name.substring(0, file.name.lastIndexOf('.')) as WebcoreGifHandle,
                href: path.join(file.parentPath, file.name),
                category: file.parentPath.includes('hypnospace') ?
                    'hypnospace:' + file.parentPath.substring(file.parentPath.lastIndexOf('/') + 1) :
                    'webcore:' + file.parentPath.substring(file.parentPath.lastIndexOf('/') + 1)
            };
            this.entries.push(entry);
            this.base64Entries[entry.name] = fs.readFileSync(path.join(process.cwd(), entry.href)).toString('base64');
        }

        const keys: string = Object.keys(this.base64Entries).map(key => `'${ key }'`).join(' | ');
        const webcorePath: string = path.join('types', 'include', 'webcore.ts');
        let data: string = fs.readFileSync(webcorePath, 'utf-8');

        if (!data.includes('WebcoreGifHandle'))
            data = data.replace(/(gif-index.b64.json';)/g, (substring: string): string =>
                `${ substring }\n\n\rtype WebcoreGifHandle = ${ keys };`
            );
        if (data.includes('type WebcoreGifHandle = any;'))
            data = data.replace(/type WebcoreGifHandle = any;/g, (s: string): string =>
                s.substring(0, s.lastIndexOf('=') + 2) + keys + ';'
            );

        fs.writeFileSync(webcorePath, data);

        fs.writeFileSync(this.mainDestPath, JSON.stringify(this.entries, null, 4));
        fs.writeFileSync(this.base64DestPath, JSON.stringify(this.base64Entries, null, 4));

        fs.copyFileSync(this.mainDestPath, path.join('types', 'include', this.mainDestPath.substring(this.mainDestPath.lastIndexOf('/') + 1)));
        fs.copyFileSync(this.base64DestPath, path.join('types', 'include', this.base64DestPath.substring(this.base64DestPath.lastIndexOf('/') + 1)));
    }
}

Build.run();