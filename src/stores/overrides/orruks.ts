import { DataStoreImpl } from "../imported-data";
import {
    ExtraAbility,
    AbilityCategory,
    Battalion,
    TargetType,
    Phase,
    SubPhase,
} from "../unit";
import { override, overrideAbility, addAbilityEffect } from "./tools";

type ExtraAbilities = { [key: string]: ExtraAbility };

function addWarbeats(data: DataStoreImpl) {
    const extraAbilities: ExtraAbilities = data.extraAbilities;
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
            category: AbilityCategory.Mount,
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
    };
    extraAbilities[getEmBeat.id] = getEmBeat;
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
            category: AbilityCategory.Mount,
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
    };
    extraAbilities[fixinBeat.id] = fixinBeat;
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
                    subPhase: SubPhase.Before,
                },
            ],
        },
        keywords: [["WARCHANTER"]],
        category: "Warchanter Warbeats",
        allegianceKeyword: "IRONJAWZ",
    };
    extraAbilities[killaBeat.id] = killaBeat;
}

function fixBattalion(data: DataStoreImpl) {
    override<Battalion>(data.battalions.ironjawzBrawl, (x) => {
        x.abilities = [
            {
                id: "bossWaagh",
                name: "Boss Waaagh!",
                flavor: `The Megaboss that leads a brawl is able to channel and direct the Waaagh! energygenerated
                by the orruks under his command through his subordinate war leaders.`,
                description: `Once per battle, if your general is from this battalion and is on the battlefield,
                another ORRUK HERO from this battalion can use the Ironjawz Waaagh! command ability.
                This does not stop the general from using the Ironjawz Waaagh! command ability, but 
                you cannot use the command ability more than once in the same combat phase.`,
                category: AbilityCategory.Command,
                effects: [{ targetType: TargetType.Friend, phase: Phase.Hero }],
            },
        ];
    });
    override<Battalion>(data.battalions.ironjawzArdfist, (x) => {
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
                effects: [{ targetType: TargetType.Friend, defenseAura: {} }],
            },
        ];
    });
    override<Battalion>(data.battalions.ironjawzBrutefist, (x) => {
        x.abilities = [
            {
                id: "greenSkinnedBatteringRam",
                name: "Green-skinned Battering Ram",
                flavor: `A Brutefist is a tide of destruction that can pulverise even the toughest of foes.`,
                description: `After a model from a unit in this battalion makes a charge move, you can pick 1 
                enemy unit within 1" of that model and roll a dice. On a 4+, that enemy unit suffers 1 mortal wound.
                If that model’s unit has more than 1 model, roll to determine if a mortal wound is inflicted
                each time a model from that unit completes its charge move, but do not allocate the mortal wounds
                until all of the models in that unit have moved.`,
                category: AbilityCategory.BattleTrait,
                effects: [{ targetType: TargetType.Unit, phase: Phase.Charge }],
            },
        ];
    });
    override<Battalion>(data.battalions.ironjawzGorefist, (x) => {
        x.abilities = [
            {
                id: "daBosssBigIdea",
                name: "Da Boss's Big Idea",
                flavor: `Gore-grunta Big Bosses often come
                up with all manner of ‘kunnin’ taktikz’ to ensure their
                lads can get into the scrap. Once the battle gets properly
                underway, however, such formations invariably break
                apart in all the excitement.`,
                description: `In your first hero phase, each unit from this battalion
                that is wholly within 18" of the Big Boss from the same
                battalion at the start of that hero phase can make a
                normal move, but cannot run.`,
                category: AbilityCategory.BattleTrait,
                effects: [{ targetType: TargetType.Friend, phase: Phase.Hero }],
            },
        ];
    });
    override<Battalion>(data.battalions.ironjawzIronfist, (x) => {
        x.abilities = [
            {
                id: "upAndAtEm",
                name: "Up and At ’Em",
                flavor: `Urged on by their Big Boss, the mobs of
                an Ironfist are forever rushing forwards to get stuck into
                the fight.`,
                description: `Once in each of your hero phases, the Big Boss from
                this battalion can use the Mighty Destroyers command
                ability as if they were a MEGABOSS and without
                spending 1 command point.`,
                category: AbilityCategory.Command,
                effects: [{ targetType: TargetType.Friend, phase: Phase.Hero }],
            },
        ];
    });
    override<Battalion>(data.battalions.ironjawzWeirdfist, (x) => {
        x.abilities = [
            {
                id: "weirdEnergy",
                name: "Weird Energy",
                flavor: `The focused Waaagh! energy absorbed by
                a Weirdfist’s shaman has a tendency to overcharge their
                spells and incantations.`,
                description: `If the WEIRDNOB SHAMAN from this battalion is wholly
                within 18" of 2 or more units from the same battalion that
                each have 10 or more models, it can use its Brutal Power
                ability to attempt to cast Green Puke twice, in addition to
                any other spells it can cast, instead of only once.`,
                category: AbilityCategory.Spell,
                effects: [{ targetType: TargetType.Friend, phase: Phase.Hero }],
            },
        ];
    });
}

function overrideUnits(data: DataStoreImpl) {
    // Gordrakk
    addAbilityEffect(
        data.abilities.gordrakkTheFistOfGorkMassivelyDestructiveBulk,
        {
            targetType: TargetType.Enemy,
            phase: Phase.Charge,
        }
    );

    addAbilityEffect(data.abilities.gordrakkTheFistOfGorkKunnin, {
        targetType: TargetType.Enemy,
        attackAura: { phase: Phase.Combat },
    });

    addAbilityEffect(data.abilities.gordrakkTheFistOfGorkSmasha, {
        targetType: TargetType.Enemy,
        attackAura: { phase: Phase.Combat },
    });

    addAbilityEffect(data.abilities.gordrakkTheFistOfGorkStrengthFromVictory, {
        targetType: TargetType.Model,
        phase: Phase.Combat,
    });

    addAbilityEffect(data.abilities.gordrakkTheFistOfGorkVoiceOfGork, {
        targetType: TargetType.Friend,
        phase: Phase.Combat,
        attackAura: { bonusHitRoll: 1 },
    });

    // Megaboss on Maw-Krusha
    addAbilityEffect(data.abilities.megabossOnMawKrushaDestructiveBulk, {
        targetType: TargetType.Enemy,
        phase: Phase.Charge,
    });

    addAbilityEffect(data.abilities.megabossOnMawKrushaRipToofFist, {
        targetType: TargetType.Model,
        defenseAura: { phase: Phase.Combat },
    });

    addAbilityEffect(data.abilities.megabossOnMawKrushaStrengthFromVictory, {
        targetType: TargetType.Model,
        phase: Phase.Combat,
    });

    addAbilityEffect(data.abilities.megabossOnMawKrushaGoOnLadzGetStuckIn, {
        targetType: TargetType.Friend,
        phase: Phase.Combat,
        subPhase: SubPhase.Before,
        attackAura: { bonusHitRoll: 1 },
    });

    // Megaboss
    addAbilityEffect(data.abilities.orrukMegabossRipToofFist, {
        targetType: TargetType.Model,
        defenseAura: { phase: Phase.Combat },
    });
    addAbilityEffect(data.abilities.orrukMegabossStrengthFromVictory, {
        targetType: TargetType.Model,
        phase: Phase.Combat,
        subPhase: SubPhase.After,
        attackAura: {},
    });
    addAbilityEffect(data.abilities.orrukMegabossGoOnLadzGetStuckIn, {
        targetType: TargetType.Friend,
        phase: Phase.Combat,
        subPhase: SubPhase.Before,
        attackAura: { bonusHitRoll: 1 },
    });

    // Ardboyz
    addAbilityEffect(data.abilities.orrukArdboysOrrukForgedShields, {
        targetType: TargetType.Unit,
        defenseAura: {},
    });

    // Ironskull's Boyz
    addAbilityEffect(data.abilities.ironskullSBoyzDeadArd, {
        targetType: TargetType.Unit,
        defenseAura: {},
    });
    addAbilityEffect(data.abilities.ironskullSBoyzPairedChoppas, {
        targetType: TargetType.Unit,
        attackAura: { bonusHitRoll: 1 },
    });
    addAbilityEffect(data.abilities.ironskullSBoyzGurzagIronskull, {
        targetType: TargetType.Model,
        attackAura: { bonusAttacks: 1 },
    });

    // Brutes
    addAbilityEffect(data.abilities.orrukBrutesDuffUpDaBigThing, {
        targetType: TargetType.Model,
        attackAura: {},
    });

    // Gore-gruntas
    addAbilityEffect(data.abilities.orrukGoreGruntasGoreGruntaCharge, {
        targetType: TargetType.Model,
        phase: Phase.Charge,
    });
    addAbilityEffect(data.abilities.orrukGoreGruntasMount, {
        targetType: TargetType.Mount,
    });

    // Warchanter
    addAbilityEffect(data.abilities.orrukWarchanterRhythmOfDestruction, {
        targetType: TargetType.Model,
        attackAura: {},
    });
    addAbilityEffect(data.abilities.orrukWarchanterViolentFury, {
        targetType: TargetType.Friend,
        phase: Phase.Hero,
        attackAura: {},
    });

    // Weirdnob Shaman
    addAbilityEffect(data.abilities.orrukWeirdnobShamanBrutalPower, {
        targetType: TargetType.Model,
        phase: Phase.Hero,
        spellAura: {},
    });
    addAbilityEffect(data.abilities.orrukWeirdnobShamanGreenPuke, {
        targetType: TargetType.Enemy,
        phase: Phase.Hero,
        spellCastingValue: 6,
    });
}

function overrideExtraAbilities(data: DataStoreImpl) {
    // Megaboss
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsHulkingMuscleBoundBrute
            .ability,
        (x) => {
            x.flavor = `Even by orruk
        standards, this boss is huge, and he is ever eager
        to throw his immense weight around in battle.`;
            x.description = `After this general makes a charge move, you can
        pick 1 enemy unit within 1" of this general and
        roll a dice. On a 2+, that enemy unit suffers D3
        mortal wounds.`;
            x.effects = [
                { targetType: TargetType.Friend, phase: Phase.Charge },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzDaBossSHoardArmourOfGork.ability,
        (x) => {
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
                    defenseAura: { phase: Phase.Combat },
                },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsLiveToFight.ability,
        (x) => {
            x.flavor = `The only time this warrior is not
            in combat is when they are charging headlong
            into a fresh set of enemies.`;
            x.description = `You can re-roll wound rolls for attacks made
            by this general and their mount if they made a
            charge move in the same turn.`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                    phase: Phase.Hero,
                },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsBrutishCunning.ability,
        (x) => {
            x.flavor = `After countless battles, this
            general has learnt how to get his boys stuck into
            the enemy as quickly as possible`;
            x.description = `Once per battle round, this general can use the
            Mighty Destroyers command ability without
            spending 1 command point.`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                    attackAura: { phase: Phase.Combat },
                },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsIronclad.ability,
        (x) => {
            x.flavor = `Incoming blows bounce harmlessly off
            this general’s impressively robust armour.`;
            x.description = `Add 1 to save rolls for attacks that target
            this general.`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: {
                        bonusSave: 1,
                    },
                },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsBestialCharisma.ability,
        (x) => {
            x.flavor = `With a deafening bellow, this
            greenskin lets every orruk around know that no
            one leaves the fight until it’s over`;
            x.description = `Once per battle round, this general can use the
            Inspiring Presence command ability without
            spending 1 command point`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                },
            ];
        }
    );
    overrideAbility(
        data.extraAbilities.ironjawzIroncladWarlordsMightyWaaagh.ability,
        (x) => {
            x.flavor = `Waves of greenskins flock to
            the call of this bellicose orruk, knowing that they
            will be led to a mighty fight.`;
            x.description = `If this general has the Ironjawz Waaagh!
            command ability, count the number of eligible
            units within 24" of this general instead of 18". In
            addition, if successful, the ability affects eligible
            units within 24" of this general instead of 18".`;
            x.effects = [
                {
                    targetType: TargetType.Model,
                },
            ];
        }
    );

    overrideAbility(
        data.extraAbilities.ironjawzLoreOfTheWeirdBashEmLadz.ability,
        (x) => {
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
                    spellCastingValue: 8,
                },
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
