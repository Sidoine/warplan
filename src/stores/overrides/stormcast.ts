import { DataStoreImpl } from "../imported-data";
import { Battalion, Unit, Attack, Ability, WeaponOption, WeaponOptionCategory } from "../units";

function addBoxes(data: DataStoreImpl):void {
    data.boxes.push({
        id: data.serial++,
        name: "Start Collecting! Stormcast Vanguard",
        units: [
            { count: 1, models: [data.models.lordAquilor] },
            { count: 5, models: [data.models.vanguardHunters]},
            { count: 3, models: [data.models.vanguardPalladors]},
            { count: 3, models: [data.models.gryphHound]}
        ],
        price: 65
    });
    data.boxes.push({
        id: data.serial++,
        name: "Judicators",
        units: [
            { count: 10, models: [data.models.judicators] }
        ],
        price: 49
    });
    data.boxes.push({
        id: data.serial++,
        name: "Kinght-Venator/Azyros",
        units: [
            { count: 1, models: [data.models.knightAzyros, data.models.knightVenator] }
        ],
        price: 33
    });
    data.boxes.push({
        id: data.serial++,
        name: "Vanguard-Raptors",
        units: [
            { count: 3, models: [data.models.vanguardRaptorsWithHurricaneCrossbows, data.models.vanguardRaptorsWithLongstrikeCrossbows] },
            { count: 3, models: [data.models.aetherwings] }
        ],
        price: 30
    });
    data.boxes.push({
        id: data.serial++,
        name: "Lord-Aquilor",
        units: [
            { count: 1, models: [data.models.lordAquilor] }
        ],
        price: 32.50
    });
}

function fixBattalions(data: DataStoreImpl):void {
    const aetherstrike: Battalion = data.battalions.aetherstrikeForce;
    aetherstrike.units.push({ unit: [data.units.knightVenator], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.knightAzyros], count: 1, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.judicators], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.vanguardRaptorsWithLongstrikeCrossbows, data.units.vanguardRaptorsWithHurricaneCrossbows], count: 2, id: data.serial++ });
    aetherstrike.units.push({ unit: [data.units.aetherwings], count: 2, id: data.serial++ });
}

function fixUnits(data: DataStoreImpl):void {
    {
        const liberator: Unit = data.units.liberators;
        liberator.move = 5;
        liberator.save = "4+";
        liberator.bravery = 6;
        liberator.keywords = ["ORDER", "CELESTIAL", "HUMAN", "STORMCAST ETERNAL", "REDEEMER", "LIBERATORS"];
        const warhammer: Attack = { name: "Warhammer", range: "1", attacks: "2", toHit: "4+", toWound: "3+", damage: "1", melee: true };
        const warblade: Attack = { name: "Warblade", range: "1", attacks: "2", toHit: "3+", toWound: "4+", damage: "2", melee: true };
        const grandhammer: Attack = { name: "Grandhammer", range: "1", attacks: "2", toHit: "4+", toWound: "3+", rend: "-1", damage: "2", melee: true };
        const grandblade: Attack = { name: "Grandblade", range: "1", attacks: "2", toHit: "3+", toWound: "4+", rend: "-1", damage: "2", melee: true };
        const pairedWeapons: Ability = { name: "Paired Weapons", description: "An extra weapon allows a Liberator to feint and parry, creating openings in their opponent’s guard. You can re-roll hit rolls of 1 for models armed with more than one Warhammer or Warblade." };
        const layLowTheTyrants: Ability = { name: "Lay Low the Tyrants", description: "If any model from this unit selects an enemy unit with a Wounds characteristic of 5 or more as the target for all of its attacks in a combat phase, add 1 to all of that model’s hit rolls in that combat phase." };
        const sigmariteShields: Ability = { name: "Sigmarite Shields", description: "You can re-roll save rolls of 1 for this unit if any models from the unit are carrying Sigmarite Shields." };
        const wc = liberator.weaponOptions![0];
        const wh = wc.options.find(x => x.id === "warhammers")!;
        wh.attacks = [warhammer];
        wh.abilities = [pairedWeapons, layLowTheTyrants];
        const wb = wc.options!.find(x => x.id === "warblades")!;
        wb.attacks = [warblade];
        wb.abilities = [pairedWeapons, layLowTheTyrants];
        const whs = wc.options!.find(x => x.id === "warhammerShield")!;
        whs.attacks = [warhammer];
        whs.abilities = [layLowTheTyrants, sigmariteShields];
        const wbs = wc.options!.find(x => x.id === "warbladeShield")!;
        wbs.attacks = [warblade];
        wbs.abilities = [layLowTheTyrants, sigmariteShields];
        const gwb: WeaponOption = {
            id: "grandblade",
            abilities: [layLowTheTyrants],
            attacks: [grandblade],
            name: "Grandblade"
        };
        const gwh: WeaponOption = {
            id: "grandhammer",
            abilities: [layLowTheTyrants],
            attacks: [grandhammer],
            name: "Grandhammer"
        };
        const gwc: WeaponOptionCategory = {
            options: [gwb, gwh],
            maxCount: 1
        };
        liberator.weaponOptions!.push(gwc);
        liberator.abilities = [{ name: "Liberator-Prime", description: "The leader of this unit is the Liberator-Prime. A Liberator-Prime makes 3 attacks rather than 2." }];    
    }

    {
        const judicator: Unit = data.units.judicators;
        judicator.move = 5;
        judicator.save = "4+";
        judicator.bravery = 6;
        judicator.keywords = ["ORDER", "CELESTIAL", "HUMAN", "STORMCAST ETERNAL", "JUSTICAR", "JUDICATORS"];
        const skyboltBow: Attack = { name: "Skybolt Bow", range: "24", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1", melee: false };
        const boltstormCrossbow: Attack = { name: "Boltstorm Crossbow", range: "12", attacks: "2", toHit: "3+", toWound: "4+", damage: "1", melee: false };
        const shockboltBow: Attack = { name: "Shockbolt Bow", range: "24", attacks: "1", toHit: "3+", toWound: "3+", rend: "-1", damage: "1", melee: false };
        const thunderboltCrossbow: Attack = { name: "Thunderbolt Crossbow", range: "18", melee: false };
        const stormGladius: Attack = { name: "Storm Gladius", range: "1", attacks: "1", toHit: "3+", toWound: "4+", damage: "1", melee: true };
        const judicatorPrime: Ability = { name: "Judicator-Prime", description: "A Judicator-Prime leads this unit. Add 1 to the hit rolls for a Judicator-Prime." };
        const rapidFire: Ability = { name: "Rapid Fire", description: "If a unit of Judicators does not move in the movement phase, then you can add 1 to the Attacks characteristic of any Boltstorm Crossbows the unit uses in the shooting phase of the same turn." }
        const chainedLightning: Ability = { name: "Chained Lightning", description: "If a Judicator attacking with a Shockbolt Bow scores a hit then the bolt explodes into a storm of lightning. Instead of making a single wound roll, roll a dice and make a number of wound rolls equal to the number scored." }
        const eternalJudgment: Ability = { name: "Eternal Judgment", description: "You may re-roll any hit rolls of 1 when a Judicator attacks a CHAOS unit in the shooting phase." };
        const thunderboltCrossbowAbility: Ability = { name: "Thunderbolt Crossbow", description: "When a model attacks with a Thunderbolt Crossbow the target is struck by a mighty blast of Celestial energy; pick an enemy unit within 18\" and roll a dice. Subtract 1 from the roll if the target is a MONSTER. If the result is equal to or less than the number of models in the unit, the unit suffers D3 mortal wounds." };
        
        const base = judicator.weaponOptions![0];
        let wo = base.options.find(x => x.id === "skyboltBows")!;
        wo.attacks = [skyboltBow, stormGladius];
        wo = base.options.find(x => x.id === "boltstormCrossbows")!;
        wo.attacks = [boltstormCrossbow, stormGladius];
        wo.abilities = [rapidFire];
        judicator.weaponOptions!.push({
            maxCount: 1,
            options: [
                { id: "shockboltBow", name: "Shockbolt Bow", abilities: [chainedLightning], attacks: [shockboltBow, stormGladius] },
                { id: "thunderboltCrossbow", name: "Thunderbolt Crossbow", abilities: [thunderboltCrossbowAbility], attacks: [thunderboltCrossbow, stormGladius] }
            ]
        });
        judicator.abilities = [judicatorPrime, eternalJudgment]
    }

}

export function overrideStormcast(data: DataStoreImpl):void {
    addBoxes(data);
    fixBattalions(data);
    fixUnits(data);
}