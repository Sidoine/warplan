import { DataStoreImpl } from "../imported-data";
import { overrideAbility, override } from "./tools";
import { Ability, Allegiance, AbilityCategory } from "../units";

export function overrideLegionOfGrief(data: DataStoreImpl) {
    // Command traits
    overrideAbility(data.extraAbilities.legionOfGriefAspectsOfGriefAmethystGlow.ability, x => {
        x.flavor = "Shyishan magic suffuses this general";
        x.description = "This general is a WIZARD. They can attempt to cast one spell in your hero phase, and attempt to unbind one spell in the enemy hero phase. They know the Arcane Bolt and Mystic Shield spells. If this general is already a WIZARD, they know one extra spell from the Lore of Sorrows.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefAspectsOfGriefVassalOfTheCravenKing.ability, x => {
        x.flavor = "The general is one of Kurdoss Valentian's trusted lords.";
        x.description = "If this general is on the battlefield, each time you spend a command point, roll a dice. On a 5+, you receive 1 extra command point.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefAspectsOfGriefTragicEmanations.ability, x => {
        x.flavor = "This leader radiates an aura of crippling sorrow.";
        x.description = "Subtract 2 from the Bravery characteristic of enemy units while they are within 12\" of this general";
    });

    // Artefacts of power
    overrideAbility(data.extraAbilities.legionOfGriefRelicsOfAnguishGraveSandGem.ability, x =>  {
        x.flavor = "This gem has the power to unmake flesh or stitch it together.";
        x.description = "In your hero phase, you can inflict 1 mortal wound on 1 enemy HERO within 6\" of the bearer, or you can heal 1 wound that has been allocated to the bearer.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefRelicsOfAnguishGothizzariMortuaryCandle.ability, x => {
        x.flavor = "This cursed candle of Gothizzar radiates sickening corps-light.";
        x.description = "Subtract 1 from hit rolls for attacks made with missile weapons that target the bearer.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefRelicsOfAnguishSouldrainPendant.ability, x => {
        x.flavor = "This pendant hungers for the animus of living beings.";
        x.description = "At the end of the combat phase, roll a dice for each enemy unit within 3\" of the bearer. On a 4+ that unit suffers 1 mortal wound.";
    });

    // Spell lores
    overrideAbility(data.extraAbilities.legionOfGriefLoreOfSorrowsDreadWithering.ability, x => {
        x.flavor = "Black roses bloom before instantly withering away.";
        x.description = "Dread Withering has a casting value of 5. If successfuly cast, pick 1 enemy unit within 18\" of the caster that is visible to them. Subtract 1 from save rolls for attacks that target that unit until the start of your next hero phase.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefLoreOfSorrowsWailOfDoom.ability, x => {
        x.flavor = "A piercing shriek borne on Shyishan winds races across the battlefield.";
        x.description = "Wail of Doom has a casting value of 8. If successfuly cast, roll a dice for each enemy unit within 6\" of the caster. On a 4+ that unit suffers D3 mortal wounds.";
    });
    overrideAbility(data.extraAbilities.legionOfGriefLoreOfSorrowsShroudOfTerror.ability, x => {
        x.flavor = "A wave of palpable fear floods those nearby.";
        x.description = "Shroud of Terror has a casting value of 8. If successfuly cast, pick 1 enemy unit within 12\" of the caster that is visible to them. Subtract D3 from the Bravery characteristic of that unit until your next hero phase.";
    });

    // Battle traits
    const theUnquietDead: Ability = {
        name: "The Unquiet Dead",
        flavor: "The dead stir in every corner of the realms, rising up from unhallowed grave-pits and corpse-strewn battlefields to prey upon the living.",
        description: "After territories have been determined, but before any units have been set up, you can pick up to 2 points in your territory and up to 2 points anywhere on the battlefield to be gravesites. You may wish to place suitable markers on these points. Then, instead of setting up a SUMMONABLE unit from your army on the battlefield, you can place it to one side and say that it is set up in the grave. You can do this with as many of your SUMMONABLE units as you wish. At the end of your movement phase, for each friendly DEATH HERO within 9\" of a gravesite, you can pick a single friendly unitin the grave and set it up wholly within 9\" of the gravesite and more than 9\" from any enemy models. Any model that is unable to be set up in this way is slain. If a unit is still in the grave at the end of the battle, it is considered to be slain.",
        category: AbilityCategory.BattleTrait,
    };

    const invigoratingAura: Ability = {
        name: "Invigorating Aura",
        flavor: "The power of death magic swells, empowering the restless dead an drawing more forth from their graves.",
        description: "At the start of your hero phase, pick a friendly SUMMONABLE unit within 9\" of a gravesite (see 'The Unquiet Dead'). You can either heal D3 wounds that have been allocated to models in that unit or, if no wounds are currently allocated to any models in the unit, you can return a number of slain models to the unit that have a combined Wounds characteristic equal or less thant the roll of a D3.",
        category: AbilityCategory.BattleTrait,
    };
    const deathlessMinions: Ability = {
        name: "Deathless Minions",
        flavor: "The powerful death magic that binds the undead grows stronger when these minions are in close proximity of their masters.",
        description: "Roll a dice each time you allocate a wound or mortal wound to a friendly LEGION OF GRIEF unit within 6\" of you general or another friendly LEGION OF GRIEF HERO. On a 6+ the wound or mortal wound is negated.",
        category: AbilityCategory.BattleTrait,
    };
    const auraOfGrief: Ability = {
        name: "Aura of Grief",
        flavor: "To face the Legion of Grief in battle is to be overcome by waves of crushing sorrow.",
        description: "Subtract 1 from the Bravery characteristic of enemy units while they are within 6\" of any friendly LEGION OF GRIEF units.",
        category: AbilityCategory.BattleTrait,
    };
    const endlessLegions: Ability = {
        name: "Endless Legions",
        flavor: "The souls of the deceased are innumerable, a bottomless well of sorrow and bitter hatred from which the lords of death magic can fashion their conquering armies.",
        description: "You can use this command ability at the end of your movement phase. If you do so, pick a gravesite (see 'The Unquiet Dead') that is within 9\" of your general, and then pick a friendly SUMMONABLE unit that has been destroyed. Set up that unit wholly within 9\" of that gravesite and more than 9\" from any enemy units.",
        category: AbilityCategory.Command,
    }

    override<Allegiance>(data.allegiances.legionOfGrief, x => x.battleTraits = [theUnquietDead, invigoratingAura, deathlessMinions, auraOfGrief, endlessLegions]);
}