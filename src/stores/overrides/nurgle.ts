import { DataStoreImpl } from "../imported-data";
import {
    Ability,
    EndlessSpell,
    TargetType,
    Phase,
    SubPhase,
    AbilityCategory
} from "../units";
import { override, overrideAbility, addAbilityEffect } from "./tools";

function addEndlessSpells(data: DataStoreImpl): void {
    const burningHeaad: EndlessSpell = data.sceneries.theBurningHead;

    const summon: Ability = {
        id: "nurgle_summon",
        name: "Summoning Burning Head",
        description:
            'Summoning the Burning Head has a casting value of 7. If successful, place the Burning Head model entirely within 3" of the summoner.'
    };
    const fiery: Ability = {
        id: "nurgle_fiery",
        name: "Fiery Missile",
        description:
            "When this model is set up, the player who set it up can immediately make a move with it."
    };
    const flaming: Ability = {
        id: "nurgle_flaming",
        name: "Flaming Skull",
        description:
            'After this model has moved, each unit that has any models it passed across, and each other unit that is within 1" of it at the end of its move, suffers D3 mortal wounds.'
    };
    const aura: Ability = {
        id: "nurgle_aura",
        name: "Wrathful Aura",
        description:
            'Re-roll hit rolls of 1 for attacks made by this unit while they are wholly within 9" of this model.'
    };
    const aqshy: Ability = {
        id: "nurgle_aqshy",
        name: "Empowered by Aqshy",
        description:
            "If your battle is taking place in the Realm of Fire, add 1 to the number of mortal wounds inflicted by the Flaming Skull ability"
    };

    burningHeaad.abilities = [summon, fiery, flaming, aura, aqshy];
}

function addCommandAbilities(data: DataStoreImpl): void {
    overrideAbility(
        data.extraAbilities.nurgleCommandTraitsPestilentBreath.ability,
        x => {
            x.description =
                "At the start of your shooting phase, pick an enemy unit withing 6 inches of your general. Roll a dice for each model within 6 inches of your general. The unit suffers a mortal wound for each roll of 5+.";
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Shooting,
                    subPhase: SubPhase.Before
                }
            ];
        }
    );
    addAbilityEffect(data.abilities.theGlottkinLordsOfNurgle, {
        targetType: TargetType.Friend,
        phase: Phase.Hero
    });
}

function addSpells(data: DataStoreImpl): void {
    overrideAbility(
        data.extraAbilities.nurgleLoreOfFoulnessPlagueSquall.ability,
        x => {
            (x.description =
                "Casts on a 6+. If successful, roll 7D6. For each 6, pick an enemy unit (no line of sight needed) and deal D3 Mortal Wounds to it. You can only pick each enemy unit once."),
                (x.effects = [
                    {
                        targetType: TargetType.Enemy,
                        phase: Phase.Hero
                    }
                ]);
            x.category = AbilityCategory.Spell;
        }
    );
    overrideAbility(
        data.extraAbilities.nurgleLoreOfMalignanceBladesOfPutrefaction.ability,
        x => {
            x.category = AbilityCategory.Spell;
            x.spellCastingValue = 7;
            x.description =
                'Casts on a 7+, affects a friendly unit within 14". 6+ To Hit deal a Mortal Wound in addition to other damage, not specifying melee or shooting';
            x.effects = [
                {
                    targetType: TargetType.Friend,
                    phase: Phase.Hero
                }
            ];
        }
    );
    addAbilityEffect(data.abilities.theGlottkinFleshyAbundance, {
        targetType: TargetType.Friend,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.sorcererStreamOfCorruption, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
}

function addArtefact(data: DataStoreImpl): void {
    override(data.extraAbilities.nurgleDaemonicBoonsNoxiousNexus, x => {
        x.category = "artifact";
        x.ability.description =
            'At the start of you hero phase, roll a dice for each enemy unit within 7" of the bearer. If the roll is equal to or less than the number of the current battle round, the unit being rolled for suffers 1 mortal wound. For example, in the second battle round, enemy units would suffers a mortal wounds on a 1 or 2.';
    });
    override(data.extraAbilities.nurgleDaemonicBoonsNurgleSNail, x => {
        x.category = "artifact";
        x.ability.description =
            "Pick one of the bearer's melee weapons to be Nurgle's Nail. At the end of each combat phase, roll 2D6 for each enemy model that was allocated any wounds caused by Nurgle's Nail in that phase and was not slain. If the result is exactly 7, the model being rolled for is slain. Any other result has no effect.";
    });
    override(data.extraAbilities.nurgleDaemonicBoonsTheBountifulSwarm, x => {
        x.category = "artifact";
        x.ability.description =
            'At the start of your hero phase, pick an enemy model within 3" of the bearer and then roll a dice. If the roll is greater than that model\'s Wounds characteristic, then it is slain. If a model with a Wounds characteristic of 4+ is slain by the Bountiful Swarm, before you remove the model, you can add a Beast of Nurgle to your army and set it up within 1" of the enemy model.';
    });
    override(data.extraAbilities.nurgleDaemonicBoonsTheWitherstave, x => {
        x.category = "artifact";
        x.ability.description =
            'Re-roll hit rolls of 6 for enemy units while they are within 12" of the bearer.';
    });
    addAbilityEffect(
        data.extraAbilities.nurgleDaemonicBoonsTheWitherstave.ability,
        {
            targetType: TargetType.Enemy,
            phase: Phase.Combat
        }
    );
    override(data.extraAbilities.nurgleDaemonicBoonsTomeOfAThousandPoxes, x => {
        x.category = "artifact";
        x.ability.description =
            "If the bearer is a WIZARD, add 1 to the casting rolls for any spells from the Lore of Nurgle that they attempt to cast. If the bearer is not a WIZARD, they can attempt to cast the Sumptuous Pestilence spell in each of your hero phase (they cannot unbind spell).";
    });
    override(data.extraAbilities.nurgleDaemonicBoonsTheEndlessGift, x => {
        x.category = "artifact";
        x.ability.description =
            "At the start of the battleshock phase, roll a dice for each wound that was allocated to this model during the same turn. On a 4+ the wound is healed.";
    });

    override(
        data.extraAbilities.nurgleArtefactsOfContagionTheSplithornHelm,
        x => {
            x.category = "artifact";
            x.ability.description =
                "Roll a dice each time you allocate a wound or mortal wound to the bearer. On a 6+ the wound is negated.";
        }
    );
    override(data.extraAbilities.nurgleArtefactsOfContagionMuttergrub, x => {
        x.category = "artifact";
        x.ability.description =
            "If the bearer is a WIZARDn they can attempt to cast one additionnal spell ineach of their hero phases. If the bearer is not a WIZARD, they can attempt to cast Foul Regenesis in each of their hero phases (this does not give them the ability to unbind spells).";
    });
    override(data.extraAbilities.nurgleArtefactsOfContagionRustfang, x => {
        x.category = "artifact";
        x.ability.description =
            'At the start of the combat phase, pick one enemy unit within 3" of the bearer. Subtract 1 from its save rolls for the rest of the battle. You cannot use this ability more than once on the same enemy unit.';
    });
    addAbilityEffect(
        data.extraAbilities.nurgleArtefactsOfContagionRustfang.ability,
        {
            targetType: TargetType.Enemy,
            phase: Phase.Hero
        }
    );
    override(data.extraAbilities.nurgleArtefactsOfContagionFleshPealer, x => {
        x.category = "artifact";
        x.ability.description =
            'In your hero phase, roll a dice for each enemy unit that is within 6" of the bearer. On a 5+ the unit being rolled for suffers D3 mortal wounds.';
    });
    override(data.extraAbilities.nurgleArtefactsOfContagionTheBileheart, x => {
        x.category = "artifact";
        x.ability.description =
            "Roll a dice each time you allocate a wound or mortal wound to the bearer in the combat phase (and it is not negated). On a 4+ the attacking unit suffers 1 mortal wound after all of its attacks have been made.";
    });
    override(
        data.extraAbilities.nurgleArtefactsOfContagionTheFecundFlask,
        x => {
            x.category = "artifact";
            x.ability.description =
                "You can use the fecund flask once per battle, at the start of your hero phase. If you do so, roll a dice. On a 2+ any wounds the bearer has suffered are healed. On a 1, the bearer is slain. If the bearer is slain by the fecund flask, before you remove the bearer's model, you can add a Beast of Nurgle to your army and set it up within 1\" of the bearer.";
        }
    );

    override(data.extraAbilities.nurglePlagueriddenGiftsTheVirulentBlade, x => {
        x.category = "artifact";
        x.ability.description =
            "Pick one of the bearer's melee weapon to be the virulent blade. Add 1 to the Damage characteristic for attacks made with the Virulent Blade if the wound roll for the attack is 5+";
    });
    override(data.extraAbilities.nurglePlagueriddenGiftsTheFoetidShroud, x => {
        x.category = "artifact";
        x.ability.description =
            "Re-roll hit rolls of 6+ or more for attacks that target the bearer in the combat phase.";
    });
    override(
        data.extraAbilities.nurglePlagueriddenGiftsSublucusStenchplate,
        x => {
            x.category = "artifact";
            x.ability.description =
                'Enemy units that are within 3" of the bearer at the end of their movement phase suffer D3 mortal wounds.';
        }
    );
    override(data.extraAbilities.nurglePlagueriddenGiftsTheEyeOfNurgle, x => {
        x.category = "artifact";
        x.ability.description =
            'Once per battle, at the start of your hero phase, you can roll 2D6 if there are any enemy models within 12" of the bearer. If the result is exactly 7, then the closest enemy model to the bearer is slain.';
    });
    override(data.extraAbilities.nurglePlagueriddenGiftsTheCarrionDirge, x => {
        x.category = "artifact";
        x.ability.description =
            'Subtract 2 from the Bravery characteristic of enemy units while they are within 12" of the bearer.';
    });
    override(
        data.extraAbilities.nurglePlagueriddenGiftsTheShieldOfGrowths,
        x => {
            x.category = "artifact";
            x.ability.description =
                "You can re-roll failed save rolls for the bearer if the roll is equal to or less than the number of wounds currently allocated to the bearer.";
        }
    );
}

function addBoxes(data: DataStoreImpl): void {
    data.boxes.push({
        id: "startCollectingNurgleDaemons",
        name: "Start Collecting! Nurgle Daemons",
        units: [
            { count: 3, models: [data.models.nurglings] },
            { count: 10, models: [data.models.plaguebearers] },
            { count: 3, models: [data.models.plagueDrones] },
            { count: 1, models: [data.models.poxbringerHeraldOfNurgle] }
        ],
        price: 65
    });
    data.boxes.push({
        id: "putridBlightkings",
        name: "Putrid Blightkings",
        units: [{ count: 5, models: [data.models.putridBlightkings] }],
        price: 45
    });
    data.boxes.push({
        id: "lordOfBlights",
        name: "Lord of Blights",
        units: [{ count: 1, models: [data.models.lordOfBlights] }],
        price: 20
    });
    data.boxes.push({
        id: "greatUncleanOne",
        name: "Great Unclean One",
        units: [{ count: 1, models: [data.models.greatUncleanOne] }],
        price: 110
    });
    data.boxes.push({
        id: "beastOfNurgle",
        name: "Beast of Nurgle",
        units: [{ count: 1, models: [data.models.beastsOfNurgle] }],
        price: 32
    });
    data.boxes.push({
        id: "sloppityBilepiper",
        name: "Sloppity Bilepiper",
        units: [
            { count: 1, models: [data.models.sloppityBilepiperHeraldOfNurgle] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "pusgoyleBlightlords",
        name: "Pusgoyle Blightlords",
        units: [{ count: 2, models: [data.models.pusgoyleBlightlords] }],
        price: 55
    });
    data.boxes.push({
        id: "spoilpoxScrivener",
        name: "Spoilpox Scrivener",
        units: [
            { count: 1, models: [data.models.spoilpoxScrivenerHeraldOfNurgle] }
        ],
        price: 20
    });
    data.boxes.push({
        id: "poxbringer",
        name: "Poxbringer",
        units: [{ count: 1, models: [data.models.poxbringerHeraldOfNurgle] }],
        price: 20
    });
    data.boxes.push({
        id: "plaguebearersOfNurgle",
        name: "Plaguebearers of Nurgle",
        units: [{ count: 10, models: [data.models.plaguebearers] }],
        price: 23
    });
    data.boxes.push({
        id: "plagueDronesOfNurgle",
        name: "Plague Drones of Nurgle",
        units: [{ count: 3, models: [data.models.plagueDrones] }],
        price: 45
    });
    data.boxes.push({
        id: "rotigus",
        name: "Rotigus",
        units: [{ count: 1, models: [data.models.rotigus] }],
        price: 110
    });
    data.boxes.push({
        id: "glottkin",
        name: "Glottkin",
        units: [{ count: 1, models: [data.models.theGlottkin] }],
        price: 86
    });
    data.boxes.push({
        id: "orghottsDaemonspew",
        name: "Orghotts Daemonspew",
        units: [{ count: 1, models: [data.models.orghottsDaemonspew] }],
        price: 60
    });
    data.boxes.push({
        id: "morbidexTwiceborn",
        name: "Morbidex Twiceborn",
        units: [{ count: 1, models: [data.models.morbidexTwiceborn] }],
        price: 60
    });
    data.boxes.push({
        id: "bloabRotspawned",
        name: "Bloab Rotspawned",
        units: [{ count: 1, models: [data.models.bloabRotspawned] }],
        price: 60
    });
    data.boxes.push({
        id: "lordOfAfflictions",
        name: "Lord of Afflictions",
        units: [
            {
                count: 1,
                models: [
                    data.models.lordOfAfflictions,
                    data.models.pusgoyleBlightlords
                ]
            }
        ],
        price: 55
    });
    data.boxes.push({
        id: "horticulousSlimux",
        name: "Horticulous Slimux",
        units: [{ count: 1, models: [data.models.horticulousSlimux] }],
        price: 43
    });
    data.boxes.push({
        id: "epidemius",
        name: "Epidemius",
        units: [{ count: 1, models: [data.models.epidemiusTallymanOfNurgle] }],
        price: 39
    });
    data.boxes.push({
        id: "harbingerOfDecay",
        name: "Harbinger of Decay",
        units: [{ count: 1, models: [data.models.harbingerOfDecay] }],
        price: 31
    });
    data.boxes.push({
        id: "gutrotSprume",
        name: "Gutrot Sprume",
        units: [{ count: 1, models: [data.models.gutrotSpume] }],
        price: 21
    });
    data.boxes.push({
        id: "festus",
        name: "Festus The Leechlord",
        units: [{ count: 1, models: [data.models.festusTheLeechlord] }],
        price: 16
    });
    data.boxes.push({
        id: "lordOfPlagues",
        name: "Lord of Plagues",
        units: [{ count: 1, models: [data.models.lordOfPlagues] }],
        price: 12
    });
    data.boxes.push({
        id: "sorcerer",
        name: "Rotbringers Sorcerer",
        units: [{ count: 1, models: [data.models.sorcerer] }],
        price: 12
    });
}

function fixBattalions(data: DataStoreImpl): void {}

function fixUnits(data: DataStoreImpl): void {
    addAbilityEffect(data.abilities.harbingerOfDecaySoulboundShield, {
        targetType: TargetType.Model,
        phase: Phase.Combat
    });
    addAbilityEffect(data.abilities.harbingerOfDecayRotsword, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero,
        subPhase: SubPhase.Before
    });
    addAbilityEffect(data.abilities.harbingerOfDecayMorbidVigour, {
        targetType: TargetType.Friend,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsDisgustinglyResilient, {
        targetType: TargetType.Model,
        phase: Phase.Any
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsRottenRegeneration, {
        targetType: TargetType.Model,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsPlagueVector, {
        targetType: TargetType.Friend,
        phase: Phase.Combat
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsIncubatch, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsVirulentDischarge, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.lordOfAfflictionsSpearheadOfContagion, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.lordOfBlightsMunificentBounty, {
        targetType: TargetType.Friend,
        phase: Phase.Shooting
    });
    addAbilityEffect(data.abilities.lordOfBlightsVermidShield, {
        targetType: TargetType.Model,
        phase: Phase.Combat
    });
    addAbilityEffect(data.abilities.lordOfBlightsPlagueOfFlies, {
        targetType: TargetType.Friend,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.pusgoyleBlightlordsDisgustinglyResilient, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    addAbilityEffect(data.abilities.pusgoyleBlightlordsVirulentDischarge, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.pusgoyleBlightlordsBlightedWeapons, {
        targetType: TargetType.Unit,
        phase: Phase.Combat
    });
    addAbilityEffect(data.abilities.putridBlightkingsVirulentDischarge, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.putridBlightkingsBlightedWeapons, {
        targetType: TargetType.Unit,
        phase: Phase.Combat
    });
    addAbilityEffect(data.abilities.putridBlightkingsIconBearers, {
        targetType: TargetType.Unit,
        phase: Phase.Battleshock
    });
    addAbilityEffect(data.abilities.putridBlightkingsSonorousTocsin, {
        targetType: TargetType.Unit,
        phase: Phase.Charge
    });
    addAbilityEffect(data.abilities.theGlottkinMountainOfLoathsomeFlesh, {
        targetType: TargetType.Enemy,
        phase: Phase.Charge
    });
    addAbilityEffect(data.abilities.theGlottkinBlessingsOfNurgle, {
        targetType: TargetType.Model,
        phase: Phase.Hero
    });
    addAbilityEffect(data.abilities.theGlottkinHorrificOpponent, {
        targetType: TargetType.Enemy,
        phase: Phase.Combat,
        subPhase: SubPhase.Before
    });
    addAbilityEffect(data.abilities.plaguebearersDisgustinglyResilient, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    addAbilityEffect(data.abilities.plaguebearersCloudOfFlies, {
        targetType: TargetType.Unit,
        phase: Phase.Any
    });
    addAbilityEffect(data.abilities.plaguebearersPipers, {
        targetType: TargetType.Enemy,
        phase: Phase.Battleshock
    });
    addAbilityEffect(data.abilities.plaguebearersIconBearer, {
        targetType: TargetType.Unit,
        phase: Phase.Battleshock
    });
    addAbilityEffect(data.abilities.sorcererBlessedWithVitality, {
        targetType: TargetType.Model,
        phase: Phase.Hero
    });
}

export function overrideNurgle(data: DataStoreImpl): void {
    addBoxes(data);
    fixUnits(data);
    fixBattalions(data);
    addArtefact(data);
    addCommandAbilities(data);
    addSpells(data);
    addEndlessSpells(data);
}
