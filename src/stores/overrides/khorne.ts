import { DataStoreImpl } from "../imported-data";
import { Ability, ArmyOption, Phase, TargetType } from "../unit";
import { override, ratioModelOption, setAttackAsOption, setAbilityAsOption, oneModelOption } from "./tools";

function fixUnits(data: DataStoreImpl): void {
    
    override<Ability>(
        data.abilities.bloodsecratorLoathsomeSorcery,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Hero,
                    defenseAura: {phase: Phase.Hero}
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodsecratorRageOfKhorne,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Combat
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodWarriorsNoRespite,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    defenseAura: {phase: Phase.Combat}
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodWarriorsGoreaxes,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Combat
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodWarriorsGorefists,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    defenseAura: {phase: Phase.Combat}
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodreaversFrenziedDevotion,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Combat
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.bloodreaversReaverBlades,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Combat
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.mightySkullcrushersMurderousCharge,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Charge
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.gorePilgrimsWideningTheRift,
        (x) => {
            x.effects = [
                {
                    targetType: TargetType.Unit,
                    phase: Phase.Combat
                },
            ];
        }
    );

    override<Ability>(
        data.abilities.slaughterpriestBloodfuelledPrayers,
        x => {
            x.description = 'Blood Boil: If this prayer is answered, pick 1 enemy unit within 16" of the model chanting this prayer. That unit suffers D6 mortal wounds. Blood Bind: If this prayer is answered, pick 1 enemy unit within 16" of the model chanting this prayer and not within 3" of any friendly units. Your opponent must move that unit a number of inches equal to the prayer roll.'
        }
    );

    override<Ability>(
        data.abilities.wrathAxeHatredSEdge,
        x => {
            x.effects = [{phase: Phase.Hero, targetType: TargetType.Unit}]
        }
    )

    override<Ability>(
        data.abilities.bleedingIconCrushingRetribution,
        x => {
            x.effects = [{phase: Phase.Hero, targetType: TargetType.Unit}]
        }
    )
    override<Ability>(
        data.abilities.bleedingIconSigilOfDoom,
        x => {
            x.effects = [{phase: Phase.Battleshock, targetType: TargetType.Unit}]
        }
    )

    override<Ability>(
        data.abilities.bloodstokerWhippedToFury,
        x => {
            x.effects = [{phase: Phase.Movement, targetType: TargetType.Unit}, {phase: Phase.Charge, targetType: TargetType.Unit}, {phase: Phase.Combat, targetType: TargetType.Unit}]
        }
    )

    setAttackAsOption(
        data.units.bloodWarriors,
        data.attacks.bloodWarriorsGoreglaive,
        ratioModelOption(1, 10),
        []
    );

    setAbilityAsOption(
        data.units.bloodWarriors,
        data.abilities.bloodWarriorsGoreaxes,
        undefined, 
        "main"
    );
    setAbilityAsOption(
        data.units.bloodWarriors,
        data.abilities.bloodWarriorsGorefists,
        undefined, 
        "main"
    );

    setAttackAsOption(
        data.units.bloodreavers,
        data.attacks.bloodreaversMeatripperAxe,
        undefined,
        [],
        "main"
    );

    setAttackAsOption(
        data.units.bloodreavers,
        data.attacks.bloodreaversReaverBladesMelee,
        undefined,
        [data.abilities.bloodreaversReaverBlades],
        "main"
    );

    setAttackAsOption(
        data.units.mightySkullcrushers,
        data.attacks.mightySkullcrushersBloodglaive,
        undefined,
        [],
        "main"
    );

    setAttackAsOption(
        data.units.mightySkullcrushers,
        data.attacks.mightySkullcrushersEnsorcelledAxe,
        undefined,
        [],
        "main"
    );

    setAttackAsOption(
        data.units.skullreapers,
        data.attacks.skullreapersDaemonblades,
        undefined,
        [],
        "main"
    );
    setAttackAsOption(
        data.units.skullreapers,
        data.attacks.skullreapersGoreSlickBlades,
        undefined,
        [],
        "main"
    );
    setAttackAsOption(
        data.units.skullreapers,
        data.attacks.skullreapersSoultearer,
        undefined,
        [],
        "main"
    );
    setAttackAsOption(
        data.units.skullreapers,
        data.attacks.skullreapersSpinecleaver,
        undefined,
        [],
        "main"
    );

    setAttackAsOption(data.units.skullreapers,
        data.attacks.skullreapersViciousMutation,
        oneModelOption);

    const bloodWarriorsIconBearer: Ability = {
        id: "khorne_bloodwarriors_iconBearer",
        name: "Icon Bearer",
        description:
            ' 1 in every 10 models in this unit can be an Icon Bearer. Add 1 to the Bravery characteristic of this unit while it includes any Icon Bearers',
        effects: [{phase: Phase.Battleshock, targetType: TargetType.Unit}]
    };

    const bloodWarriorsChaosChampion: Ability = {
        id: "khorne_bloodwarriors_champion",
        name: "Chaos Champion",
        description:
            ' 1 in every 10 models in this unit can be a Chaos Champion. Add 1 to the Attacks characteristic of that model’s Goreaxe(s).',
        effects: [{phase: Phase.Combat, targetType: TargetType.Unit}]
    };

    const bloodReaversIconBearer: Ability = {
        id: "khorne_bloodreavers_iconBearer",
        name: "Icon Bearer",
        description:
            ' 1 in every 10 models in this unit can be an Icon Bearer. Add 1 to the Bravery characteristic of this unit while it includes any Icon Bearers',
        effects: [{phase: Phase.Battleshock, targetType: TargetType.Unit}]
    };

    const bloodReaversHornBlower: Ability = {
        id: "khorne_bloodreavers_hornBlower",
        name: "Horn Blower",
        description:
            '1 in every 10 models in this unit can be a Hornblower. Add 1 to run and charge rolls for this unit while it includes any Hornblowers.',
        effects: [{phase: Phase.Charge, targetType: TargetType.Unit}]
    };

    const bloodReaversChieftain: Ability = {
        id: "khorne_bloodreavers_chieftain",
        name: "Chieftain",
        description:
            '1 model in this unit can be a Chieftain. Add 1 to the Attacks characteristic of that model’s melee weapons.',
        effects: [{phase: Phase.Combat, targetType: TargetType.Unit}]
    };

    const mightySkullcrushersSkullHunter: Ability = {
        id: "khorne_mightyskullcrushers_skullhunter",
        name: "Skull Hunter",
        description:
            '1 model in this unit can be a Skullhunter. Add 1 to the Attacks characteristic of that model’s melee weapons.',
        effects: [{phase: Phase.Combat, targetType: TargetType.Unit}]
    };

    const mightySkullcrushersStandardBearer: Ability = {
        id: "khorne_mightyskullcrushers_standardBearer",
        name: "Standard Bearer",
        description:
            '1 in every 3 models in this unit can be a Standard Bearer. Add 2 to the Bravery characteristic of this unit while it includes any Standard Bearers',
        effects: [{phase: Phase.Battleshock, targetType: TargetType.Unit}]
    };

    const mightySkullcrushersHornBlower: Ability = {
        id: "khorne_mightyskullcrushers_hornBlower",
        name: "Horn Blower",
        description:
            '1 in every 3 models in this unit can be a Hornblower. Add 1 to run and charge rolls made for this unit while it includes any Hornblowers.',
        effects: [{phase: Phase.Charge, targetType: TargetType.Unit}, {phase: Phase.Movement, targetType: TargetType.Unit}]
    };

    const skullreapersIconBearer: Ability = {
        id: "khorne_skullreapers_iconbearer",
        name: "Icon Bearer",
        description:
            '1 in every 5 models in this unit can be an Icon Bearer. Add 1 to charge rolls for this unit while it includes any Icon Bearers.',
        effects: [{phase: Phase.Charge, targetType: TargetType.Unit}]
    };

    override<ArmyOption>(data.options.skullreapersIconBearer, 
        x => {
            x.abilities = [skullreapersIconBearer]
    });

    override<ArmyOption>(data.options.bloodWarriorsIconBearer, 
        x => {
            x.abilities = [bloodWarriorsIconBearer]
    });
    override<ArmyOption>(data.options.bloodreaversIconBearer, 
        x => {
            x.abilities = [bloodReaversIconBearer]
    });
    override<ArmyOption>(data.options.bloodreaversHornblower, 
        x => {
            x.abilities = [bloodReaversHornBlower]
    });
    override<ArmyOption>(data.options.bloodWarriorsChaosChampion, 
        x => {
            x.abilities = [bloodWarriorsChaosChampion]
    });
    override<ArmyOption>(data.options.bloodreaversChieftain, 
        x => {
            x.abilities = [bloodReaversChieftain]
    });
    override<ArmyOption>(data.options.mightySkullcrushersSkullhunter, 
        x => {
            x.abilities = [mightySkullcrushersSkullHunter]
    });
    override<ArmyOption>(data.options.mightySkullcrushersStandardBearer, 
        x => {
            x.abilities = [mightySkullcrushersStandardBearer]
    });
    override<ArmyOption>(data.options.mightySkullcrushersHornblower, 
        x => {
            x.abilities = [mightySkullcrushersHornBlower]
    });

    override<Ability>(data.abilities.skullreapersDaemonforgedWeapons,
        x => {
            x.effects = [{phase: Phase.Combat, targetType: TargetType.Unit}]
    });
    override<Ability>(data.abilities.skullreapersTrialOfSkulls,
        x => {
            x.effects = [{phase: Phase.Combat, targetType: TargetType.Unit}]
    });
    override<Ability>(data.abilities.skullreapersMurderousToTheLast,
        x => {
            x.effects = [{defenseAura: {phase: Phase.Combat}, targetType: TargetType.Unit}, {phase: Phase.Battleshock, targetType: TargetType.Unit}]
    });
}

export function overrideKhorne(data: DataStoreImpl): void {
    fixUnits(data);
}
