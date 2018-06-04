import * as https from "https";
import * as fs from "fs";
import * as path from "path";

function getData(url: string) {
    return new Promise<string>((resolve, reject) =>
        https.get(url, (res) => {
            const { statusCode } = res;
            
            let error;
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' +
                    `Status Code: ${statusCode}`);
            }
            
            if (error) {
                reject(error);

                // consume response data to free up memory
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                resolve(rawData);
            });
        }).on('error', e => {
            reject(e);
        }));
}

async function curl(url: string, output: string, header?:string, footer?:string) {
    let data = await getData(url);
    if (header) data = header + data;
    if (footer) data = data + footer;
    fs.writeFileSync(output, data);
}

let token: string = "";

async function load(name: string) {
    const singleName = path.basename(name); //?temp=13.0_DOK
    try {
        await curl(`https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/data/${name}?temp=${token}`, `src/stores/data/${singleName}`);
        console.log(`${name} loaded`);
    }
    catch(e){
        console.error(`${e} while loading ${name}`);
    }
}

async function main() {
    let version = "4";
    let mainVersion = "5.1";
    
    try {
        const index = await getData(`https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/`);
        const versionMatch = index.match(/library\/js\/src\/allData\.v(.*)\.min\.js/);
        if (versionMatch === null) {
            console.error('Unable to read allData version in index');
            process.exit(1);
            return;
        }
        version = versionMatch[1];
        const mainVersionMatch = index.match(/library\/js\/main\.v(.*)\.min\.js/);
        if (mainVersionMatch === null) {
            console.error('Unable to read main version in index');
            process.exit(1);
            return;
        }
        mainVersion = mainVersionMatch[1];
    }
    catch(error) {
        console.error(`${error} while loading index`);
        return;
    }

    try {
        await curl(`https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/library/js/src/allData.v${version}.min.js`, "src/stores/data/allData.ts", "export function load(availablePoolArmies:any) {\n", "\nloadAllArmiesFaster();\n}\n");
    }
    catch(error) {
        console.error(`${error} while loading main`);
        return;
    }
    let data: string;
    try {
        data = await getData(`https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/library/js/main.v${mainVersion}.min.js`);
    }
    catch(error) {
        console.error(`${error} while loading main.v${version}.min.js`);
        return;
    }
    
    const tokenMatch = data.match(/VERSION="(.*?)"/);
    if (tokenMatch === null) {
        console.error("unable to read token");
        process.exit(1);
        return;
    }
    token = tokenMatch[0];

    await load("weaponOptions/allWeaponOptions.csv");
    await load("bannerOptions.csv");
    await load("optionalLoadoutOptions.csv");
    await load("mountOptions.json");
    await load("musicianOptions.json");
    await load("gwPoints.csv");
    await load("artefacts.csv");
    await load("commandTraits.csv");
    await load("scenery.csv");
    await load("armyOptions.csv");
    await load("genericAttributes.csv");
}

main();