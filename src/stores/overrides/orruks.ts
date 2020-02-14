import { DataStoreImpl } from "../imported-data";
import {
    ExtraAbility,
    AbilityCategory,
    Battalion,
    TargetType,
    Phase,
    SubPhase
} from "../units";
import { canUseAbility } from "../conditions";
import { override, overrideAbility, addAbilityEffect } from "./tools";

function addWarbeats(data: DataStoreImpl) {
    const getEmBeat: ExtraAbility = {
        id: "orruksWarchanterWarbeatsGetEmBeat",
        ability: {
            id: "orruksWarchanterWarbeatsGetEmBeat",
            name: "Get 'Em Beat",
            flavor: `Nearby orruks
            are eager to get to the foe.`,
            description: `At the start of your charge
            phase, 1 model that
            knows this warbeat can
            use it. If they do so, roll
            a dice. On a 4+, pick 1
            friendly IRONJAWZ unit
            wholly within 12" of this
            WARCHANTER. In that
            phase, you can attempt to
            charge with that unit if it
            is within 18" of the enemy
            instead of 12". Roll 3D6
            instead of 2D6 when making
            the charge roll for that unit.`,
            category: AbilityCategory.Mount
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
        isAvailable: canUseAbility(
            "Get 'Em Beat",
            AbilityCategory.Mount,
            "IRONJAWZ",
            [["WARCHANTER"]]
        )
    };
    (<any>data.extraAbilities)[getEmBeat.id] = getEmBeat;
    const fixinBeat: ExtraAbility = {
        id: "orruksWarchanterWarbeatsfixinBeat",
        ability: {
            id: "orruksWarchanterWarbeatsfixinBeat",
            name: "Fixin' Beat",
            flavor: `Even the most
            grievous wounds can be fixed
            by this magical beat.`,
            description: `In your hero phase, 1 model
            that knows this warbeat can
            use it. If they do so, pick 1
            friendly model within 12" of
            this WARCHANTER and roll
            a dice. On a 4+, you can heal
            up to D3 wounds allocated
            to that model.`,
            category: AbilityCategory.Mount
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
        isAvailable: canUseAbility(
            "Fixin' Beat",
            AbilityCategory.Mount,
            "IRONJAWZ",
            [["WARCHANTER"]]
        )
    };
    (<any>data.extraAbilities)[fixinBeat.id] = fixinBeat;
    const killaBeat: ExtraAbility = {
        id: "orruksWarchanterWarbeatskillaBeat",
        ability: {
            id: "orruksWarchanterWarbeatskillaBeat",
            name: "Killa Beat",
            flavor: `This mesmerising
            beat reduces a foe to a
            near-catatonic state.`,
            description: `At the start of the combat
            phase, 1 model that knows
            this warbeat can use it. If
            they do so, pick 1 enemy
            unit within 12" of this
            WARCHANTER and roll a
            dice. On a 4+, add 1 to hit
            rolls for attacks made with
            melee weapons that target
            that unit in that phase.`,
            category: AbilityCategory.Mount,
            effects: [
                {
                    targetType: TargetType.Enemy,
                    phase: Phase.Combat,
                    subPhase: SubPhase.Before
                }
            ]
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
        isAvailable: canUseAbility(
            "Killa Beat",
            AbilityCategory.Mount,
            "IRONJAWZ",
            [["WARCHANTER"]]
        )
    };
    (<any>data.extraAbilities)[killaBeat.id] = killaBeat;
}

function fixBattalion(data: DataStoreImpl) {
    override<Battalion>(data.battalions.ironjawzArdfist, x => {
        x.abilities = [
            {
                id: "drawnToTheWaagh",
                name: "Drawn to the Waaagh!",
                flavor: `The powerful beat drummed out
            by a Warchanter draws ever more Ardboys to the fight.`,
                description: `You can use this command ability if the ORRUK
            WARCHANTER from this battalion is on the battlefield
            when a unit from this battalion is destroyed. If you do so,
            roll a dice. On a 4+, a new ORRUK ARDBOYS unit with
            10 models is added to this battalion. Set up the new unit
            wholly within 6" of the edge of the battlefield and more
            than 9" from any enemy units.`,
                category: AbilityCategory.Command,
                effects: [{ targetType: TargetType.Friend, defenseAura: {} }]
            }
        ];
    });
}

function overrideUnits(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.orrukMegabossRipToofFist, {
        targetType: TargetType.Model,
        defenseAura: { phase: Phase.Combat }
    });
    addAbilityEffect(data.abilities.orrukMegabossStrengthFromVictory, {
        targetType: TargetType.Model,
        phase: Phase.Combat,
        subPhase: SubPhase.After,
        attackAura: {}
    });
    addAbilityEffect(data.abilities.orrukMegabossGoOnLadzGetStuckIn, {
        targetType: TargetType.Friend,
        phase: Phase.Combat,
        subPhase: SubPhase.Before,
        attackAura: { bonusHitRoll: 1 }
    });

    addAbilityEffect(data.abilities.orrukArdboysOrrukForgedShields, {
        targetType: TargetType.Unit,
        defenseAura: {}
    });

    addAbilityEffect(data.abilities.ironskullSBoyzDeadArd, {
        targetType: TargetType.Unit,
        defenseAura: {}
    });
    addAbilityEffect(data.abilities.ironskullSBoyzPairedChoppas, {
        targetType: TargetType.Unit,
        attackAura: { bonusHitRoll: 1 }
    });
    addAbilityEffect(data.abilities.ironskullSBoyzGurzagIronskull, {
        targetType: TargetType.Model,
        attackAura: { bonusAttacks: 1 }
    });

    addAbilityEffect(data.abilities.orrukBrutesDuffUpDaBigThing, {
        targetType: TargetType.Model,
        attackAura: {}
    });

    addAbilityEffect(data.abilities.orrukGoreGruntasGoreGruntaCharge, {
        targetType: TargetType.Model,
        phase: Phase.Charge
    });
    addAbilityEffect(data.abilities.orrukGoreGruntasMount, {
        targetType: TargetType.Mount
    });

    addAbilityEffect(data.abilities.orrukWarchanterRhythmOfDestruction, {
        targetType: TargetType.Model,
        attackAura: {}
    });
    addAbilityEffect(data.abilities.orrukWarchanterViolentFury, {
        targetType: TargetType.Friend,
        phase: Phase.Hero,
        attackAura: {}
    });

    addAbilityEffect(data.abilities.orrukWeirdnobShamanBrutalPower, {
        targetType: TargetType.Model,
        phase: Phase.Hero,
        spellAura: {}
    });
    addAbilityEffect(data.abilities.orrukWeirdnobShamanGreenPuke, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero,
        spellCastingValue: 6
    });
}

function overrideExtraAbilities(data: DataStoreImpl) {
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsHulkingMuscleBoundBrute
            .ability,
        x => {
            x.flavor = `Even by orruk
        standards, this boss is huge, and he is ever eager
        to throw his immense weight around in battle.`;
            x.description = `After this general makes a charge move, you can
        pick 1 enemy unit within 1" of this general and
        roll a dice. On a 2+, that enemy unit suffers D3
        mortal wounds.`;
            x.effects = [
                { targetType: TargetType.Friend, phase: Phase.Charge }
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzDaBossSHoardArmourOfGork.ability,
        x => {
            x.flavor = `This bashed-together armour
            is thick and heavy, and when it was blessed by
            Gork, it gained its own fierce fighting spirit.`;
            x.description = `If the unmodified save roll for an attack made
            with a melee weapon that targets the bearer is 6,
            the attacking unit suffers 1 mortal wound after
            all of its attacks have been resolved.`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { phase: Phase.Combat }
                }
            ];
        }
    );

    overrideAbility(
        data.extraAbilities.ironjawzLoreOfTheWeirdBashEmLadz.ability,
        x => {
            x.flavor = `The shaman leaks fighty energy
            that boosts the prowess of nearby Ironjawz mobs.`;
            x.description = `Bash ’Em, Ladz! has a casting value of 8. If
            successfully cast, until your next hero phase,
            you can add 1 to wound rolls for attacks made
            by friendly IRONJAWZ units while they are
            wholly within 16" of the caster`;
            x.effects = [
                {
                    targetType: TargetType.Friend,
                    phase: Phase.Hero,
                    spellCastingValue: 8
                }
            ];
        }
    );
}

export function overrideOrruks(data: DataStoreImpl) {
    addWarbeats(data);
    fixBattalion(data);
    overrideUnits(data);
    overrideExtraAbilities(data);
}
