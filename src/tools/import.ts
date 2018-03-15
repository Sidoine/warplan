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
    curl(`https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/data/${name}?temp=${token}`, `src/stores/data/${singleName}`);
}

async function main() {
    curl("https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/library/js/src/allData.v2.min.js", "src/stores/data/allData.ts", "export function load(availablePoolArmies:any) {\n", "\nloadAllArmiesFaster();\n}\n");
    const data = await getData("https://www.warhammer-community.com/wp-content/themes/gw-community/library/warscrollbuilder/library/js/main.v2.min.js");

    const tokenMatch = data.match(/VERSION="(.*?)"/);
    if (tokenMatch === null) {
        console.error("unable to read token");
        process.exit(1);
        return;
    }
    token = tokenMatch[0];

    load("weaponOptions/allWeaponOptions.csv");
    load("bannerOptions.csv");
    load("optionalLoadoutOptions.csv");
    load("mountOptions.json");
    load("musicianOptions.json");
    load("gwPoints.csv");
    load("artefacts.csv");
    load("commandTraits.csv");
    load("scenery.csv");
    load("armyOptions.csv");
    load("genericAttributes.csv");
}

main();