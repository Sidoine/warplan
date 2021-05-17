import { DataStoreImpl } from "../imported-data";
import {
    Ability,
    AbilityCategory,
    Allegiance,
    TargetType,
    Phase,
    SubPhase,
    targetConditionValue,
    orValue,
    conditionValue,
} from "../unit";
import {
    override,
    overrideAbility,
    setAttackAsUpgrade,
    addAbilityEffect,
} from "./tools";

function addBattleTraits(data: DataStoreImpl) {
    const auraOfDread: Ability = {
        id: "nighthaunt_auraofdead",
        flavor:
            "The very existence of the Nighthaunts is a stark reminder of the terrible fate that awaits those that have displeased Nagash upon death. To face them in battle is to witness these darkest fears made manifest, and can chill the soul of even the most stoic warrior.",
        description:
            'Subtract 1 from the Bravery characteristic of enemy units while they are within 6" of any friendly NIGHTHAUNT units.',
        name: "Aura of Dread",
        category: AbilityCategory.BattleTrait,
        effects: [
            {
                targetType: TargetType.Enemy,
                battleShockAura: { bonusBravery: -1 },
            },
        ],
    };
    const deathlessSprits: Ability = {
        id: "nighthaunt_deathlessspritis",
        name: "Deathless Spirits",
        flavor:
            "The spirit forms of Nighthaunt warriors are made more formidable by the presence of their lords and masters.",
        description:
            'Roll a dice each time you allocate a wound or mortal wound to a friendly NIGHTHAUNT model from a unit wholly within 12" of your general or a friendly NIGHTHAUNT HERO. On a 6+, that wound or mortal wound is negated.',
        category: AbilityCategory.BattleTrait,
        effects: [
            {
                targetType: TargetType.Friend,
                defenseAura: { negateWoundsOrMortalWoundsOn6: true },
            },
        ],
    };
    const fromTheUnderworldsTheyCome: Ability = {
        id: "nighthaunt_fromtheunderworldstheycome",
        name: "From the underworlds they come",
        flavor:
            "None is safe from Nagash’s vengeance, for the Nighthaunts can be summoned forth from the underworlds by their spectral overseers, appearing as if from nowhere to assail their prey.",
        description:
            'Instead of setting up a NIGHTHAUNT unit on the battlefield, you can place it to one side and say that it is set up in the underworlds as a reserve unit. You can set up one unit in the underworlds for each unit you set up on the battlefield. At the end of your movement phase you can set up any of these units more than 9" from any enemy models. This counts as their move for that turn. Any units which are not set up on the battlefield before the start of the fourth battle round are slain.',
        category: AbilityCategory.BattleTrait,
        effects: [
            {
                targetType: TargetType.Friend,
                phase: Phase.Movement,
                subPhase: SubPhase.After,
            },
        ],
    };
    const feedOnTerror: Ability = {
        id: "nighthaunt_feedonterror",
        name: "Feed on terror",
        flavor:
            "The lords of the Nighthaunts are strengthened by the fear they sow, and can drink deep of this uncontrolled emotion and siphon fresh strength.",
        description:
            'Each time an enemy unit fails a battleshock test, pick one friendly NIGHTHAUNT HERO within 6" of that enemy unit. Heal 1 wound that has been allocated to that HERO.',
        category: AbilityCategory.BattleTrait,
        effects: [
            {
                targetType: TargetType.Friend,
                phase: Phase.Battleshock,
            },
        ],
    };
    const waveOfTerror: Ability = {
        id: "nighthaunt_waveofterror",
        name: "Wave of terror",
        flavor:
            "On many occasions, entire battlelines have been overrun by a swarming Nighthaunt host without even raising a blade in their own defence.",
        description:
            "If you make an unmodified charge roll of 10+ for a friendly NIGHTHAUNT unit, it can fight immediately after you complete the charge move. This does not stop the unit from being picked to fight in the combat phase of the same turn.",
        category: AbilityCategory.BattleTrait,
        effects: [
            {
                targetType: TargetType.Friend,
                phase: Phase.Charge,
            },
        ],
    };

    const spectralSummons: Ability = {
        id: "nighthaunt_spectralsummons",
        name: "Spectral Summons",
        flavor:
            "Nighthaunt commander can call his ghostly minions to his side in an instant, wherever they may be.",
        description:
            'You can use this command ability at the start of your movement phase. If you do so, pick a friendly NIGHTHAUNT unit that is on the battlefield. Remove that unit from the battlefield, and then set it up wholly within 12" of your general and more than 9" from any enemy models. This counts as their move for that movement phase.',
        category: AbilityCategory.Command,
        effects: [
            {
                targetType: TargetType.Friend,
                phase: Phase.Movement,
            },
        ],
    };

    override<Allegiance>(
        data.allegiances.nighthaunt,
        (x) =>
            (x.battleTraits = [
                auraOfDread,
                deathlessSprits,
                fromTheUnderworldsTheyCome,
                feedOnTerror,
                waveOfTerror,
                spectralSummons,
            ])
    );
}

function overrideAbilities(data: DataStoreImpl) {
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathHatredOfTheLiving.ability,
        (x) => {
            x.flavor =
                "It is easy to stoke the deep loathing the spirits of the Nighthaunts feel for those who still live.";
            x.description =
                "You can re-roll failed hit rolls for attacks made with this general’s melee weapons unless the target has the DEATH keyword.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathTerrifyingEntity.ability,
        (x) => {
            x.flavor =
                "Some powerful spirits take a gruesome appearance or an overwhelming aura of horror to entire new heights.";
            x.description =
                'At the start of the enemy movement phase, roll a dice for each enemy unit within 3" of this model. If the roll is equal to or greater than that enemy unit’s Bravery characteristic, that unit must make a retreat move in that movement phase.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathLingeringSpirit.ability,
        (x) => {
            x.flavor =
                "So much amethyst magic exists within this spirit that its ethereal form is more resilient than most.";
            x.description = "Add 1 to this general’s Wounds characteristic.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathSpitefulSpirit.ability,
        (x) => {
            x.flavor =
                "This gheist’s bitter resentment of its cruel existence is palpable, and can bt channelled into a vengeful curse to punish thost who would do it harm.";
            x.description =
                "Roll a dice each time you allocate a wound to this general that was inflicted by a melee weapon. On a 5+, the attacking unit suffers 1 mortal wound after all of its attacks have been made.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathCloakedInShadow.ability,
        (x) => {
            x.flavor =
                "Eerily intangible, this spirit’s ethereal form fades in and out of existence like some wispy cloud of supernatural mist.";
            x.description =
                "Subtract 1 from hit rolls for attacks made with missile weapons that target this general.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntShadesOfDeathRulerOfTheSpiritHosts
            .ability,
        (x) => {
            x.flavor =
                "The dark will and deathly power of this spirit are like a siren call, an unseen signal that beckons to others from beyond the grave.";
            x.description =
                'At the start of your hero phase, you can pick a friendly SUMMONABLE NIGHTHAUNT unit within 9" of this general and return D3 slain models to that unit. The returning models must be set up within 9" of this general.';
            x.effects = [
                {
                    phase: Phase.Hero,
                    subPhase: SubPhase.Before,
                    targetType: TargetType.Friend,
                    targetCondition: {
                        allKeywords: ["NIGHTHAUNT", "SUMMONABLE"],
                    },
                    targetRange: 9,
                },
            ];
        }
    );

    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsSoulCage.ability,
        (x) => {
            x.flavor =
                "This supernatural cage of phantasmal energies pins opponents in place so that the reaping might begin.";
            x.description =
                'Soul Cage has a casting value of 6. If successfully cast, pick an enemy unit within 12" of the caster that is visible to them. Until the start of your next hero phase, that unit cannot retreat. In addition, until your next hero phase, that unit fights at the end of the combat phase.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsSpiritDrain.ability,
        (x) => {
            x.flavor =
                "With but a series of fell words of power the caster can whittle away a mortal’s lifeforce, causing their very spirit to seep out of their physical form.";
            x.description =
                'Spirit Drain has a casting value of 4. If successfully cast, pick an enemy model within 18" of the caster that is visible to them. Roll a number of dice equal to that model’s Wounds characteristic. For each 6+, that model’s unit suffers 1 mortal wound.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsLifestealer.ability,
        (x) => {
            x.flavor =
                "Life hangs upon but a slender thread; this incantation can sever that cord, causing healthy foes to drop like puppets shorn of their strings. Each such death increases the caster’s own vitality.";
            x.description =
                'Lifestealer has a casting value of 7. If successfully cast, pick an enemy unit within 12" of the caster that is visible to them. That unit suffers D3 mortal wounds. For each mortal wound suffered by the enemy unit, you can heal 1 wound allocated to the caster.';
            x.effects = [
                {
                    spellCastingValue: 7,
                    targetType: TargetType.Enemy,
                    mortalWounds: "D3",
                },
            ];
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsReapingScythe.ability,
        (x) => {
            x.flavor =
                "The caster’s weapon extends into a phantasmal scythe, gleaming with fell purpose and honed to razor sharpness.";
            x.description =
                "Reaping Scythe has a casting value of 4. If successfully cast, pick one of the caster’s weapons. Until the start of your next hero phase, you can re-roll failed hit and wound rolls for attacks made with that weapon.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsShademist.ability,
        (x) => {
            x.flavor =
                "A supernatural mist envelops the targeted unit, causing them to glimmer as they fade in and out of reality, becoming more baleful and intangible.";
            x.description =
                'Shademist has a casting value of 6. If successfully cast, pick a friendly NIGHTHAUNT unit wholly within 12" of the caster that is visible to them. Subtract 1 from wound rolls for attacks that target that unit until the start of your next hero phase.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntLoreOfTheUnderworldsSpectralTether
            .ability,
        (x) => {
            x.flavor =
                "The correct sorcerous incantations can create a temporary link between a powerful Nighthaunt and the underworlds, where it can be restored by drawing upon the amethyst energies of Shyish.";
            x.description =
                'Spectral Tether has a casting value of 6. If successfully cast, pick a friendly NIGHTHAUNT HERO within 12" of the caster. Heal D3 wounds that have been allocated to that unit.';
            x.effects = [
                {
                    spellCastingValue: 6,
                    targetType: TargetType.Friend,
                    targetCondition: { allKeywords: ["NIGHTHAUNT", "HERO"] },
                    targetRange: 12,
                    heal: "D3",
                },
            ];
        }
    );

    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedShadowSEdge.ability,
        (x) => {
            x.flavor =
                "It is impossible to tell if this ebon blade is corporeal or mere shadow, yet its touch tears through flesh and bone with ease.";
            x.description =
                "Pick one of the bearer’s melee weapons. If the unmodified hit roll for an attack made with that weapon is 6, that attack inflicts D3 mortal wounds and the attack sequence ends (do not make a wound or save roll).";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedReaperOfSorrows.ability,
        (x) => {
            x.flavor =
                "This phantasmal blade harvests emotions, hewing life-force but leaving its victims unmarked save for a horrified rictus.";
            x.description =
                "Pick one of the bearer’s melee weapons. Before attacking with that weapon, roll 2D6. If the roll is higher than the target unit’s Bravery, that weapon’s Rend characteristic is -3 for attacks made against that unit.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedBalefireBlade.ability,
        (x) => {
            x.flavor =
                "This blade is alight with the burning souls of sacrificed prophets and seers who dared to challenge the wielder’s authority.";
            x.description =
                "Pick one of the bearer’s melee weapons. Add 1 to that weapon’s Damage characteristic.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedSlitter.ability,
        (x) => {
            x.flavor =
                "Forged from the shivs and cut-throat razors of a thousand serial killers, this dagger is murder made manifest.";
            x.description =
                'After picking the bearer to fight, before they pile in you can pick one enemy model within 1" of the bearer and roll a dice; if the roll is greater than that model’s Wounds characteristic, it is slain.';
            x.effects = [
                {
                    targetType: TargetType.Enemy,
                    targetRange: 1,
                    phase: Phase.Combat,
                },
            ];
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedHeadsmanSJudgement
            .ability,
        (x) => {
            x.flavor =
                "This weapon has gained in power for the innumerable condemned souls it has sent screaming into the afterlife.";
            x.description =
                "Pick one of the bearer’s melee weapons. Add 1 to hit and wound rolls for attacks made with that weapon.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntWeaponsOfTheDamnedShriekingBlade.ability,
        (x) => {
            x.flavor =
                "This blade emits an unnerving, mournful howl that only exacerbates the horrifying nature of its wielder.";
            x.description =
                "Subtract 1 from hit rolls for attacks made with melee weapons that target the bearer.";
        }
    );

    override<Ability>(
        data.extraAbilities.nighthauntRelicsOfTheUnderworldsCloakOfTheWaxingMoon
            .ability,
        (x) => {
            x.flavor =
                "Each blade that passes through the wispy folds of this dark garment begins to lose its substance as it too becomes ethereal.";
            x.description =
                "The Deathless Spirits battle trait negates wounds inflicted by melee weapons that are allocated to the bearer on a 5+ instead of 6+.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntRelicsOfTheUnderworldsPendantOfTheFellWind
            .ability,
        (x) => {
            x.flavor =
                "A chill gale blows ever behind the wearer of this dark trinket, carrying them into battle on gusts of suffocating air.";
            x.description =
                'You can add 3" to normal moves made by friendly NIGHTHAUNT units that are wholly within 12" of the bearer at the start of that normal move.';
            x.effects = [
                {
                    targetType: TargetType.Friend,
                    movementAura: {
                        bonusMove: 3,
                    },
                    targetRadius: 12,
                    whollyWithin: true,
                },
            ];
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntRelicsOfTheUnderworldsDreadboltRing
            .ability,
        (x) => {
            x.flavor =
                "Gouts of lashing green flames leap forth from this ring as it devours the souls of those slain by the wearer.";
            x.description =
                'When the bearer fights, if they inflict one or more wounds with their melee weapons, you can inflict D3 mortal wounds on one enemy unit within 3" of the bearer after all of the bearer’s attacks have been made.';
        }
    );
    override<Ability>(
        data.extraAbilities
            .nighthauntRelicsOfTheUnderworldsMirrorOfScreamingSouls.ability,
        (x) => {
            x.flavor =
                "A mirror of polished shadeglass, this looking-glass houses the wailing souls of those that stared too long at their own reflection.";
            x.description =
                'At the start of your shooting phase, roll 2D6 for each enemy unit within 8" of the bearer. If the roll is higher than that unit’s Bravery characteristic, it suffers 1 mortal wound.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntRelicsOfTheUnderworldsMidnightTome
            .ability,
        (x) => {
            x.flavor =
                "Only the lifeless can read the spells and incantations inscribed upon the pitchblack pages of this cursed grimoire.";
            x.description =
                "The bearer becomes a WIZARD and knows the Arcane Bolt and Mystic Shield spells, as well as one spell from the Lore of the Underworlds (pg 55). They can attempt to cast one spell in each of your hero phases, and attempt to unbind one spell in each enemy hero phase. If the bearer was already a WIZARD, they can attempt to cast 1 additional spell in each of your hero phases instead.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntRelicsOfTheUnderworldsCovetousFamiliar
            .ability,
        (x) => {
            x.flavor =
                "This spiteful poltergeist swirls around its master’s essence, lashing out at any other soul that draws too close.";
            x.description =
                'At the start of the combat phase, roll a dice for each enemy unit within 3" of the bearer. On a 2+, that unit suffers 1 mortal wound.';
        }
    );

    override<Ability>(
        data.extraAbilities.nighthauntInfernalLanternsLightshardOfTheHarvestMoon
            .ability,
        (x) => {
            x.flavor =
                "Once released, the baleful light of this lantern fills the battlefield with an eerie glow, readying the enemy for the reaping.";
            x.description =
                'Once per battle, at the start of the combat phase, the bearer can use this artefact. If they do so, you can re-roll failed hit rolls for attacks made by friendly NIGHTHAUNT units that are wholly within 12" of the bearer when they attack in that combat phase.';
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntInfernalLanternsWychlightLantern.ability,
        (x) => {
            x.flavor =
                "The otherworldly incense that billows from this lantern merges with the bearer’s spectral form, lending them great power.";
            x.description = "Add 1 to casting rolls for the bearer.";
        }
    );
    override<Ability>(
        data.extraAbilities.nighthauntInfernalLanternsBeaconOfNagashizzar
            .ability,
        (x) => {
            x.flavor =
                "The malignant light of Nagashizzar burns within this fell lantern with even greater intensity.";
            x.description =
                "If the bearer successfully casts the Spectral Lure spell and it is not unbound, instead of the normal effects of the spell, you can either heal D6+3 wounds that have been allocated to the target unit or, if no wounds have been allocated to that unit, you can return a number of slain models to it that have a combined Wounds characteristic equal to or less than D6+3.";
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Hero,
                },
            ];
        }
    );
}

function overrideUnits(data: DataStoreImpl) {
    overrideKnightOfShroudsOnEtherealSteed(data);
    overrideKnightOfShrouds(data);
    overrideChainrasps(data);
    overrideSpiritTorment(data);
    overrideGuardianOfSoulsWithNightmareLantern(data);
    overrideBladegheist(data);
    overrideGrimghastReapers(data);
    overrideGlaivewraithStalkers(data);
    overrideMyrmournBanshees(data);
}

function overrideMyrmournBanshees(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.myrmournBansheesEthereal, {
        targetType: TargetType.Unit,
        defenseAura: { ignoreRend: true },
    });
    addAbilityEffect(data.abilities.myrmournBansheesSpellEaters, {
        targetType: TargetType.Unit,
        phase: Phase.Hero,
        spellAura: {},
    });
    addAbilityEffect(data.abilities.myrmournBansheesFly, {
        targetType: TargetType.Unit,
        movementAura: { fly: true },
    });
}

function overrideGlaivewraithStalkers(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.glaivewraithStalkersEthereal, {
        targetType: TargetType.Unit,
        defenseAura: { ignoreRend: true },
    });
    addAbilityEffect(data.abilities.glaivewraithStalkersFly, {
        targetType: TargetType.Unit,
        movementAura: { fly: true },
    });
    addAbilityEffect(data.abilities.glaivewraithStalkersThePointOfDeath, {
        targetType: TargetType.Unit,
        attackAura: {
            rerollFailedHits: orValue(
                targetConditionValue({ hasCharged: true }, 1),
                conditionValue({ hasCharged: true }, 1)
            ),
        },
    });
}

function overrideKnightOfShroudsOnEtherealSteed(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.knightOfShroudsOnEtherealSteedEthereal, {
        targetType: TargetType.Unit,
        defenseAura: { ignoreRend: true },
    });
    addAbilityEffect(data.abilities.knightOfShroudsOnEtherealSteedStolenHours, {
        targetType: TargetType.Model,
        attackAura: {},
    });
    addAbilityEffect(data.abilities.knightOfShroudsOnEtherealSteedMount, {
        targetType: TargetType.Model,
        phase: Phase.Setup,
    });
    addAbilityEffect(data.abilities.knightOfShroudsOnEtherealSteedFly, {
        targetType: TargetType.Model,
        movementAura: { fly: true },
    });
    addAbilityEffect(
        data.abilities.knightOfShroudsOnEtherealSteedLordOfGheists,
        {
            targetType: TargetType.Unit,
            targetRange: 18,
            whollyWithin: true,
            phase: Phase.Combat,
            attackAura: {
                bonusAttacks: 1,
                phase: Phase.Combat,
            },
        }
    );
}

function overrideGrimghastReapers(data: DataStoreImpl) {
    setAttackAsUpgrade(
        data.units.grimghastReapers,
        data.attacks.grimghastReapersDeathKnell,
        data.attacks.grimghastReapersSlasherScythe,
        undefined,
        [data.abilities.grimghastReapersForWhomTheBellTolls]
    );
    addAbilityEffect(data.abilities.grimghastReapersEthereal, {
        defenseAura: { ignoreRend: true },
        targetType: TargetType.Unit,
    });
    addAbilityEffect(data.abilities.grimghastReapersReapedLikeCorn, {
        targetType: TargetType.Unit,
        attackAura: {
            rerollFailedHits: targetConditionValue({ minModels: 5 }, 1),
        },
    });
    addAbilityEffect(data.abilities.grimghastReapersExtollerOfShyish, {
        targetType: TargetType.Unit,
        phase: Phase.Setup,
    });
    addAbilityEffect(data.abilities.grimghastReapersFly, {
        targetType: TargetType.Unit,
        movementAura: { fly: true },
    });
    addAbilityEffect(data.abilities.grimghastReapersForWhomTheBellTolls, {
        targetType: TargetType.Weapon,
        phase: Phase.Combat,
    });
}

function overrideBladegheist(data: DataStoreImpl) {
    overrideAbility(
        data.abilities.bladegheistRevenantsEthereal,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { ignoreRend: true },
                },
            ])
    );
    overrideAbility(
        data.abilities.bladegheistRevenantsFly,
        (x) =>
            (x.effects = [
                { targetType: TargetType.Model, movementAura: { fly: true } },
            ])
    );
    overrideAbility(
        data.abilities.bladegheistRevenantsFearfulFrenzy,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Unit,
                    condition: {
                        inRangeOf: {
                            friendly: true,
                            range: 12,
                            keyword: ["CHAINGHAST", "SPIRIT TORMENT"],
                        },
                    },
                    attackAura: { rerollFailedHits: 1 },
                },
            ])
    );
    overrideAbility(
        data.abilities.bladegheistRevenantsWhirlingDeath,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Unit,
                    movementAura: { allowChargeAfterRunOrRetreat: true },
                },
                {
                    targetType: TargetType.Unit,
                    attackAura: { bonusAttacks: 1 },
                    condition: { hasCharged: true },
                },
            ])
    );
}

function overrideGuardianOfSoulsWithNightmareLantern(data: DataStoreImpl) {
    overrideAbility(
        data.abilities.guardianOfSoulsWithNightmareLanternEthereal,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { ignoreRend: true },
                },
            ])
    );
    overrideAbility(
        data.abilities.guardianOfSoulsWithNightmareLanternFly,
        (x) =>
            (x.effects = [
                { targetType: TargetType.Model, movementAura: { fly: true } },
            ])
    );
    overrideAbility(
        data.abilities.guardianOfSoulsWithNightmareLanternNightmareLantern,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Friend,
                    attackAura: { bonusWoundRoll: 1 },
                },
            ])
    );
    overrideAbility(
        data.abilities.guardianOfSoulsWithNightmareLanternSpectralLure,
        (x) => {
            x.category = AbilityCategory.Spell;
            x.spellCastingValue = 6;
            x.effects = [{ targetType: TargetType.Friend, phase: Phase.Hero }];
        }
    );
}

function overrideSpiritTorment(data: DataStoreImpl) {
    overrideAbility(
        data.abilities.spiritTormentEthereal,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { ignoreRend: true },
                },
            ])
    );
    overrideAbility(
        data.abilities.spiritTormentFly,
        (x) =>
            (x.effects = [
                { targetType: TargetType.Model, movementAura: { fly: true } },
            ])
    );
    overrideAbility(
        data.abilities.spiritTormentNagashSBidding,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Friend,
                    attackAura: { rerollHitsOn1: 1 },
                },
            ])
    );
    overrideAbility(
        data.abilities.spiritTormentCapturedSoulEnergy,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Friend,
                    phase: Phase.Battleshock,
                    subPhase: SubPhase.Before,
                },
            ])
    );
}

function overrideChainrasps(data: DataStoreImpl) {
    overrideAbility(
        data.abilities.chainraspHordeEthereal,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    defenseAura: { ignoreRend: true },
                },
            ])
    );
    overrideAbility(
        data.abilities.chainraspHordeChillingHorde,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    attackAura: { rerollWoundsOn1: 1 },
                },
            ])
    );
    overrideAbility(
        data.abilities.chainraspHordeDreadwarden,
        (x) =>
            (x.effects = [
                {
                    targetType: TargetType.Model,
                    attackAura: { bonusAttacks: 1 },
                    battleShockAura: { bonusBravery: 4 },
                },
            ])
    );
    overrideAbility(
        data.abilities.chainraspHordeFly,
        (x) =>
            (x.effects = [
                { targetType: TargetType.Model, movementAura: { fly: true } },
            ])
    );
}

function overrideKnightOfShrouds(data: DataStoreImpl) {
    override<Ability>(
        data.abilities.knightOfShroudsEthereal,
        (x) => (x.effects = [{ defenseAura: {}, targetType: TargetType.Model }])
    );
    override<Ability>(
        data.abilities.knightOfShroudsStolenHours,
        (x) => (x.effects = [{ attackAura: {}, targetType: TargetType.Model }])
    );
    addAbilityEffect(data.abilities.knightOfShroudsFly, {
        targetType: TargetType.Unit,
        movementAura: { fly: true },
    });
    addAbilityEffect(data.abilities.knightOfShroudsSpectralOverseer, {
        castMode: "command",
        targetType: TargetType.Friend,
        targetRadius: 12,
        whollyWithin: true,
        attackAura: {
            bonusHitRoll: 1,
        },
    });
}

function overrideBatallion(data: DataStoreImpl) {
    addAbilityEffect(data.abilities.shroudguardFrenziedFervour, {
        targetType: TargetType.Friend,
        targetRadius: 12,
        whollyWithin: true,
        defenseAura: {
            negateWoundsOrMortalWoundsOn5: true,
        },
    });

    addAbilityEffect(data.abilities.chainguardHeartOfTheHorde, {
        targetType: TargetType.Friend,
        phase: Phase.Hero,
    });
}

export function overrideNighthaunt(data: DataStoreImpl): void {
    addBattleTraits(data);
    overrideAbilities(data);
    overrideUnits(data);
    overrideBatallion(data);
}
