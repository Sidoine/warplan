import { Box, DataStore, GrandAlliance, ExtraAbilityTest } from "./units";

const commandTraitAvailable: ExtraAbilityTest = (unit, ws) => unit.isGeneral && ws.extraAbilities.every(x => x.category !== "command");
    
export class DataStoreImpl implements DataStore {
    serial: number = 0;

    models = {
        beastlordOnChariot: {
            id: "beastlordOnChariot",
            name: "Beastlord on Chariot"
        },
        wargorStandardBearer: {
            id: "wargorStandardBearer",
            name: "Wargor Standard Bearer"
        },
        centigorWarhoof: {
            id: "centigorWarhoof",
            name: "Centigor Warhoof"
        },
        beastlord: {
            id: "beastlord",
            name: "Beastlord"
        },
        greatBrayShaman: {
            id: "greatBrayShaman",
            name: "Great Bray Shaman"
        },
        gors: {
            id: "gors",
            name: "Gors"
        },
        bestigors: {
            id: "bestigors",
            name: "Bestigors"
        },
        tuskgorChariots: {
            id: "tuskgorChariots",
            name: "Tuskgor Chariots"
        },
        ungors: {
            id: "ungors",
            name: "Ungors"
        },
        ungorRaiders: {
            id: "ungorRaiders",
            name: "Ungor Raiders"
        },
        wildstalkerBrayherd: {
            id: "wildstalkerBrayherd",
            name: "Wildstalker Brayherd"
        },
        chaosGargant: {
            id: "chaosGargant",
            name: "Chaos Gargant"
        },
        deathrunner: {
            id: "deathrunner",
            name: "Deathrunner"
        },
        verminlordDeceiver: {
            id: "verminlordDeceiver",
            name: "Verminlord Deceiver"
        },
        skavenAssassin: {
            id: "skavenAssassin",
            name: "Skaven Assassin"
        },
        nightRunners: {
            id: "nightRunners",
            name: "Night Runners"
        },
        gutterRunners: {
            id: "gutterRunners",
            name: "Gutter Runners"
        },
        packmaster: {
            id: "packmaster",
            name: "Packmaster"
        },
        wolfRats: {
            id: "wolfRats",
            name: "Wolf Rats"
        },
        giantRats: {
            id: "giantRats",
            name: "Giant Rats"
        },
        ratSwarms: {
            id: "ratSwarms",
            name: "Rat Swarms"
        },
        ratOgors: {
            id: "ratOgors",
            name: "Rat Ogors"
        },
        broodHorror: {
            id: "broodHorror",
            name: "Brood Horror"
        },
        hellPitAbomination: {
            id: "hellPitAbomination",
            name: "Hell Pit Abomination"
        },
        plaguePriestWithPlagueCenser: {
            id: "plaguePriestWithPlagueCenser",
            name: "Plague Priest with Plague Censer"
        },
        plaguePriestWithWarpstoneTippedStaff: {
            id: "plaguePriestWithWarpstoneTippedStaff",
            name: "Plague Priest with Warpstone-tipped Staff"
        },
        plagueFurnace: {
            id: "plagueFurnace",
            name: "Plague Furnace"
        },
        verminlordCorruptor: {
            id: "verminlordCorruptor",
            name: "Verminlord Corruptor"
        },
        plagueMonks: {
            id: "plagueMonks",
            name: "Plague Monks"
        },
        plagueCenserBearers: {
            id: "plagueCenserBearers",
            name: "Plague Censer Bearers"
        },
        plagueclaw: {
            id: "plagueclaw",
            name: "Plagueclaw"
        },
        congregationOfFilth: {
            id: "congregationOfFilth",
            name: "Congregation of Filth"
        },
        foulrainCongregation: {
            id: "foulrainCongregation",
            name: "Foulrain Congregation"
        },
        plaguesmogCongregation: {
            id: "plaguesmogCongregation",
            name: "Plaguesmog Congregation"
        },
        virulentProcession: {
            id: "virulentProcession",
            name: "Virulent Procession"
        },
        warlockEngineer: {
            id: "warlockEngineer",
            name: "Warlock Engineer"
        },
        archWarlock: {
            id: "archWarlock",
            name: "Arch Warlock"
        },
        doomFlayerWeaponTeam: {
            id: "doomFlayerWeaponTeam",
            name: "Doom Flayer Weapon Team"
        },
        ratlingGunWeaponTeam: {
            id: "ratlingGunWeaponTeam",
            name: "Ratling Gun Weapon Team"
        },
        warpfireThrowerWeaponTeam: {
            id: "warpfireThrowerWeaponTeam",
            name: "Warpfire Thrower Weapon Team"
        },
        warpGrinderWeaponTeam: {
            id: "warpGrinderWeaponTeam",
            name: "Warp Grinder Weapon Team"
        },
        poisonedWindMortarWeaponTeam: {
            id: "poisonedWindMortarWeaponTeam",
            name: "Poisoned Wind Mortar Weapon Team"
        },
        skryreAcolytes: {
            id: "skryreAcolytes",
            name: "Skryre Acolytes"
        },
        warplockJezzails: {
            id: "warplockJezzails",
            name: "Warplock Jezzails"
        },
        stormfiends: {
            id: "stormfiends",
            name: "Stormfiends"
        },
        doomwheel: {
            id: "doomwheel",
            name: "Doomwheel"
        },
        warpLightningCannon: {
            id: "warpLightningCannon",
            name: "Warp Lightning Cannon"
        },
        clanSkryre: {
            id: "clanSkryre",
            name: "Clan Skryre"
        },
        arkhsparkVoltik: {
            id: "arkhsparkVoltik",
            name: "Arkhspark Voltik"
        },
        gascloudChokelung: {
            id: "gascloudChokelung",
            name: "Gascloud Chokelung"
        },
        gautfyreSkorch: {
            id: "gautfyreSkorch",
            name: "Gautfyre Skorch"
        },
        rattlegaugeWarplock: {
            id: "rattlegaugeWarplock",
            name: "Rattlegauge Warplock"
        },
        whyrlbladeThreshik: {
            id: "whyrlbladeThreshik",
            name: "Whyrlblade Threshik"
        },
        verminlordWarbringer: {
            id: "verminlordWarbringer",
            name: "Verminlord Warbringer"
        },
        skavenWarlord: {
            id: "skavenWarlord",
            name: "Skaven Warlord"
        },
        skavenWarlordOnBroodHorror: {
            id: "skavenWarlordOnBroodHorror",
            name: "Skaven Warlord on Brood Horror"
        },
        skritchSpiteclaw: {
            id: "skritchSpiteclaw",
            name: "Skritch Spiteclaw"
        },
        clanrats: {
            id: "clanrats",
            name: "Clanrats"
        },
        stormvermin: {
            id: "stormvermin",
            name: "Stormvermin"
        },
        spiteclawSSwarm: {
            id: "spiteclawSSwarm",
            name: "Spiteclaw's Swarm"
        },
        daemonPrince: {
            id: "daemonPrince",
            name: "Daemon Prince"
        },
        beLakorChaosDaemonPrince: {
            id: "beLakorChaosDaemonPrince",
            name: "Be'Lakor, Chaos Daemon Prince"
        },
        furies: {
            id: "furies",
            name: "Furies"
        },
        soulGrinder: {
            id: "soulGrinder",
            name: "Soul Grinder"
        },
        bloodthirsterOfInsensateRage: {
            id: "bloodthirsterOfInsensateRage",
            name: "Bloodthirster Of Insensate Rage"
        },
        bloodthirsterOfUnfetteredFury: {
            id: "bloodthirsterOfUnfetteredFury",
            name: "Bloodthirster Of Unfettered Fury"
        },
        wrathOfKhorneBloodthirster: {
            id: "wrathOfKhorneBloodthirster",
            name: "Wrath Of Khorne Bloodthirster"
        },
        skarbrand: {
            id: "skarbrand",
            name: "Skarbrand"
        },
        skulltaker: {
            id: "skulltaker",
            name: "Skulltaker"
        },
        bloodmasterHeraldOfKhorne: {
            id: "bloodmasterHeraldOfKhorne",
            name: "Bloodmaster, Herald of Khorne"
        },
        skullmasterHeraldOfKhorne: {
            id: "skullmasterHeraldOfKhorne",
            name: "Skullmaster, Herald of Khorne"
        },
        bloodThrone: {
            id: "bloodThrone",
            name: "Blood Throne"
        },
        karanak: {
            id: "karanak",
            name: "Karanak"
        },
        daemonPrinceOfKhorne: {
            id: "daemonPrinceOfKhorne",
            name: "Daemon Prince of Khorne"
        },
        exaltedGreaterDaemonOfKhorne: {
            id: "exaltedGreaterDaemonOfKhorne",
            name: "Exalted Greater Daemon of Khorne"
        },
        bloodletters: {
            id: "bloodletters",
            name: "Bloodletters"
        },
        bloodcrushers: {
            id: "bloodcrushers",
            name: "Bloodcrushers"
        },
        fleshHounds: {
            id: "fleshHounds",
            name: "Flesh Hounds"
        },
        skullCannons: {
            id: "skullCannons",
            name: "Skull Cannons"
        },
        bloodHostOfKhorne: {
            id: "bloodHostOfKhorne",
            name: "Blood Host of Khorne"
        },
        bloodHunt: {
            id: "bloodHunt",
            name: "Blood Hunt"
        },
        theBloodlords: {
            id: "theBloodlords",
            name: "The Bloodlords"
        },
        bloodthunderStampede: {
            id: "bloodthunderStampede",
            name: "Bloodthunder Stampede"
        },
        charnelHost: {
            id: "charnelHost",
            name: "Charnel Host"
        },
        councilOfBlood: {
            id: "councilOfBlood",
            name: "Council of Blood"
        },
        daemonLegionOfKhorne: {
            id: "daemonLegionOfKhorne",
            name: "Daemon Legion of Khorne"
        },
        gorethunderCohort: {
            id: "gorethunderCohort",
            name: "Gorethunder Cohort"
        },
        murderhost: {
            id: "murderhost",
            name: "Murderhost"
        },
        theReapersOfVengeance: {
            id: "theReapersOfVengeance",
            name: "The Reapers of Vengeance"
        },
        skullseekerHost: {
            id: "skullseekerHost",
            name: "Skullseeker Host"
        },
        greatUncleanOne: {
            id: "greatUncleanOne",
            name: "Great Unclean One"
        },
        rotigus: {
            id: "rotigus",
            name: "Rotigus"
        },
        epidemiusTallymanOfNurgle: {
            id: "epidemiusTallymanOfNurgle",
            name: "Epidemius Tallyman of Nurgle"
        },
        poxbringerHeraldOfNurgle: {
            id: "poxbringerHeraldOfNurgle",
            name: "Poxbringer Herald of Nurgle"
        },
        spoilpoxScrivenerHeraldOfNurgle: {
            id: "spoilpoxScrivenerHeraldOfNurgle",
            name: "Spoilpox Scrivener Herald of Nurgle"
        },
        sloppityBilepiperHeraldOfNurgle: {
            id: "sloppityBilepiperHeraldOfNurgle",
            name: "Sloppity Bilepiper Herald of Nurgle"
        },
        daemonPrinceOfNurgle: {
            id: "daemonPrinceOfNurgle",
            name: "Daemon Prince of Nurgle"
        },
        exaltedGreaterDaemonOfNurgle: {
            id: "exaltedGreaterDaemonOfNurgle",
            name: "Exalted Greater Daemon of Nurgle"
        },
        horticulousSlimux: {
            id: "horticulousSlimux",
            name: "Horticulous Slimux"
        },
        plaguebearers: {
            id: "plaguebearers",
            name: "Plaguebearers"
        },
        plagueDrones: {
            id: "plagueDrones",
            name: "Plague Drones"
        },
        nurglings: {
            id: "nurglings",
            name: "Nurglings"
        },
        beastsOfNurgle: {
            id: "beastsOfNurgle",
            name: "Beasts Of Nurgle"
        },
        tallybandOfNurgle: {
            id: "tallybandOfNurgle",
            name: "Tallyband of Nurgle"
        },
        fecundRituculturalists: {
            id: "fecundRituculturalists",
            name: "Fecund Rituculturalists"
        },
        theMunificentWanderers: {
            id: "theMunificentWanderers",
            name: "The Munificent Wanderers"
        },
        nurgleSMenagerie: {
            id: "nurgleSMenagerie",
            name: "Nurgle's Menagerie"
        },
        thricefoldBefoulment: {
            id: "thricefoldBefoulment",
            name: "Thricefold Befoulment"
        },
        kairosFateweaver: {
            id: "kairosFateweaver",
            name: "Kairos Fateweaver"
        },
        lordOfChange: {
            id: "lordOfChange",
            name: "Lord Of Change"
        },
        theChangeling: {
            id: "theChangeling",
            name: "The Changeling"
        },
        heraldOfTzeentch: {
            id: "heraldOfTzeentch",
            name: "Herald Of Tzeentch"
        },
        heraldOfTzeentchOnDisc: {
            id: "heraldOfTzeentchOnDisc",
            name: "Herald Of Tzeentch On Disc"
        },
        heraldOfTzeentchOnBurningChariot: {
            id: "heraldOfTzeentchOnBurningChariot",
            name: "Herald Of Tzeentch On Burning Chariot"
        },
        theBlueScribes: {
            id: "theBlueScribes",
            name: "The Blue Scribes"
        },
        daemonPrinceOfTzeentch: {
            id: "daemonPrinceOfTzeentch",
            name: "Daemon Prince Of Tzeentch"
        },
        exaltedGreaterDaemonOfTzeentch: {
            id: "exaltedGreaterDaemonOfTzeentch",
            name: "Exalted Greater Daemon of Tzeentch"
        },
        pinkHorrorsOfTzeentch: {
            id: "pinkHorrorsOfTzeentch",
            name: "Pink Horrors Of Tzeentch"
        },
        blueHorrorsOfTzeentch: {
            id: "blueHorrorsOfTzeentch",
            name: "Blue Horrors Of Tzeentch"
        },
        brimstoneHorrorsOfTzeentch: {
            id: "brimstoneHorrorsOfTzeentch",
            name: "Brimstone Horrors Of Tzeentch"
        },
        exaltedFlamersOfTzeentch: {
            id: "exaltedFlamersOfTzeentch",
            name: "Exalted Flamers of Tzeentch"
        },
        flamersOfTzeentch: {
            id: "flamersOfTzeentch",
            name: "Flamers Of Tzeentch"
        },
        screamersOfTzeentch: {
            id: "screamersOfTzeentch",
            name: "Screamers Of Tzeentch"
        },
        burningChariotsOfTzeentch: {
            id: "burningChariotsOfTzeentch",
            name: "Burning Chariots Of Tzeentch"
        },
        aetherEaterHost: {
            id: "aetherEaterHost",
            name: "Aether-eater Host"
        },
        changehost: {
            id: "changehost",
            name: "Changehost"
        },
        multitudinousHost: {
            id: "multitudinousHost",
            name: "Multitudinous Host"
        },
        omniscientOracles: {
            id: "omniscientOracles",
            name: "Omniscient Oracles"
        },
        overseerSFateTwisters: {
            id: "overseerSFateTwisters",
            name: "Overseer's Fate-twisters"
        },
        theEternalConflagration: {
            id: "theEternalConflagration",
            name: "The Eternal Conflagration"
        },
        theHostsDuplicitous: {
            id: "theHostsDuplicitous",
            name: "The Hosts Duplicitous"
        },
        warpflameHost: {
            id: "warpflameHost",
            name: "Warpflame Host"
        },
        archaon: {
            id: "archaon",
            name: "Archaon"
        },
        gauntSummonerOfTzeentch: {
            id: "gauntSummonerOfTzeentch",
            name: "Gaunt Summoner of Tzeentch"
        },
        gauntSummonerAndChaosFamiliars: {
            id: "gauntSummonerAndChaosFamiliars",
            name: "Gaunt Summoner and Chaos Familiars"
        },
        varanguard: {
            id: "varanguard",
            name: "Varanguard"
        },
        overlordsOfChaos: {
            id: "overlordsOfChaos",
            name: "Overlords of Chaos"
        },
        bloodmarkedWarband: {
            id: "bloodmarkedWarband",
            name: "Bloodmarked Warband"
        },
        plaguetouchedWarband: {
            id: "plaguetouchedWarband",
            name: "Plaguetouched Warband"
        },
        fateswornWarband: {
            id: "fateswornWarband",
            name: "Fatesworn Warband"
        },
        pleasureboundWarband: {
            id: "pleasureboundWarband",
            name: "Pleasurebound Warband"
        },
        archaonSGrandHost: {
            id: "archaonSGrandHost",
            name: "Archaon's Grand Host"
        },
        keeperOfSecrets: {
            id: "keeperOfSecrets",
            name: "Keeper Of Secrets"
        },
        theMasqueOfSlaanesh: {
            id: "theMasqueOfSlaanesh",
            name: "The Masque Of Slaanesh"
        },
        heraldOfSlaanesh: {
            id: "heraldOfSlaanesh",
            name: "Herald Of Slaanesh"
        },
        heraldOfSlaaneshOnSeekerChariot: {
            id: "heraldOfSlaaneshOnSeekerChariot",
            name: "Herald Of Slaanesh on Seeker Chariot"
        },
        heraldOfSlaaneshOnExaltedSeekerChariot: {
            id: "heraldOfSlaaneshOnExaltedSeekerChariot",
            name: "Herald Of Slaanesh on Exalted Seeker Chariot"
        },
        daemonPrinceOfSlaanesh: {
            id: "daemonPrinceOfSlaanesh",
            name: "Daemon Prince Of Slaanesh"
        },
        chaosLordOfSlaanesh: {
            id: "chaosLordOfSlaanesh",
            name: "Chaos Lord Of Slaanesh"
        },
        lordOfSlaaneshOnDaemonicMount: {
            id: "lordOfSlaaneshOnDaemonicMount",
            name: "Lord Of Slaanesh On Daemonic Mount"
        },
        exaltedGreaterDaemonOfSlaanesh: {
            id: "exaltedGreaterDaemonOfSlaanesh",
            name: "Exalted Greater Daemon of Slaanesh"
        },
        daemonettesOfSlaanesh: {
            id: "daemonettesOfSlaanesh",
            name: "Daemonettes Of Slaanesh"
        },
        seekersOfSlaanesh: {
            id: "seekersOfSlaanesh",
            name: "Seekers Of Slaanesh"
        },
        fiendsOfSlaanesh: {
            id: "fiendsOfSlaanesh",
            name: "Fiends Of Slaanesh"
        },
        seekerChariotsOfSlaanesh: {
            id: "seekerChariotsOfSlaanesh",
            name: "Seeker Chariots Of Slaanesh"
        },
        exaltedSeekerChariotsOfSlaanesh: {
            id: "exaltedSeekerChariotsOfSlaanesh",
            name: "Exalted Seeker Chariots Of Slaanesh"
        },
        hellflayersOfSlaanesh: {
            id: "hellflayersOfSlaanesh",
            name: "Hellflayers Of Slaanesh"
        },
        hellstridersOfSlaanesh: {
            id: "hellstridersOfSlaanesh",
            name: "Hellstriders Of Slaanesh"
        },
        mightyLordOfKhorne: {
            id: "mightyLordOfKhorne",
            name: "Mighty Lord Of Khorne"
        },
        khorgosKhul: {
            id: "khorgosKhul",
            name: "Khorgos Khul"
        },
        bloodsecrator: {
            id: "bloodsecrator",
            name: "Bloodsecrator"
        },
        bloodstoker: {
            id: "bloodstoker",
            name: "Bloodstoker"
        },
        skullgrinder: {
            id: "skullgrinder",
            name: "Skullgrinder"
        },
        skarrBloodwrath: {
            id: "skarrBloodwrath",
            name: "Skarr Bloodwrath"
        },
        valkiaTheBloody: {
            id: "valkiaTheBloody",
            name: "Valkia The Bloody"
        },
        scylaAnfingrimm: {
            id: "scylaAnfingrimm",
            name: "Scyla Anfingrimm"
        },
        lordOfKhorneOnJuggernaut: {
            id: "lordOfKhorneOnJuggernaut",
            name: "Lord Of Khorne On Juggernaut"
        },
        slaughterpriest: {
            id: "slaughterpriest",
            name: "Slaughterpriest"
        },
        slaughterpriestWithHackbladeAndWrathhammer: {
            id: "slaughterpriestWithHackbladeAndWrathhammer",
            name: "Slaughterpriest with Hackblade and Wrathhammer"
        },
        exaltedDeathbringer: {
            id: "exaltedDeathbringer",
            name: "Exalted Deathbringer"
        },
        exaltedDeathbringerWithImpalingSpear: {
            id: "exaltedDeathbringerWithImpalingSpear",
            name: "Exalted Deathbringer with Impaling Spear"
        },
        aspiringDeathbringer: {
            id: "aspiringDeathbringer",
            name: "Aspiring Deathbringer"
        },
        aspiringDeathbringerWithGoreaxeAndSkullhammer: {
            id: "aspiringDeathbringerWithGoreaxeAndSkullhammer",
            name: "Aspiring Deathbringer with Goreaxe and Skullhammer"
        },
        skaaracTheBloodborn: {
            id: "skaaracTheBloodborn",
            name: "Skaarac the Bloodborn"
        },
        bloodWarriors: {
            id: "bloodWarriors",
            name: "Blood Warriors"
        },
        wrathmongers: {
            id: "wrathmongers",
            name: "Wrathmongers"
        },
        bloodreavers: {
            id: "bloodreavers",
            name: "Bloodreavers"
        },
        khorgoraths: {
            id: "khorgoraths",
            name: "Khorgoraths"
        },
        skullreapers: {
            id: "skullreapers",
            name: "Skullreapers"
        },
        mightySkullcrushers: {
            id: "mightySkullcrushers",
            name: "Mighty Skullcrushers"
        },
        garrekSReavers: {
            id: "garrekSReavers",
            name: "Garrek's Reavers"
        },
        bloodboundWarhorde: {
            id: "bloodboundWarhorde",
            name: "Bloodbound Warhorde"
        },
        brassStampede: {
            id: "brassStampede",
            name: "Brass Stampede"
        },
        darkFeast: {
            id: "darkFeast",
            name: "Dark Feast"
        },
        redHeadsmen: {
            id: "redHeadsmen",
            name: "Red Headsmen"
        },
        skulltake: {
            id: "skulltake",
            name: "Skulltake"
        },
        theGorechosen: {
            id: "theGorechosen",
            name: "The Gorechosen"
        },
        bloodboundWarband: {
            id: "bloodboundWarband",
            name: "Bloodbound Warband"
        },
        bloodforged: {
            id: "bloodforged",
            name: "Bloodforged"
        },
        theGoretide: {
            id: "theGoretide",
            name: "The Goretide"
        },
        theSkullfiendTribe: {
            id: "theSkullfiendTribe",
            name: "The Skullfiend Tribe"
        },
        slaughterborn: {
            id: "slaughterborn",
            name: "Slaughterborn"
        },
        gorePilgrims: {
            id: "gorePilgrims",
            name: "Gore Pilgrims"
        },
        drazhoathTheAshen: {
            id: "drazhoathTheAshen",
            name: "Drazhoath The Ashen"
        },
        infernalGuardCastellan: {
            id: "infernalGuardCastellan",
            name: "Infernal Guard Castellan"
        },
        infernalGuardBattleStandardBearer: {
            id: "infernalGuardBattleStandardBearer",
            name: "Infernal Guard Battle Standard Bearer"
        },
        daemonsmith: {
            id: "daemonsmith",
            name: "Daemonsmith"
        },
        bullCentaurTaurRuk: {
            id: "bullCentaurTaurRuk",
            name: "Bull Centaur Taur'ruk"
        },
        sharTorTheExecutioner: {
            id: "sharTorTheExecutioner",
            name: "Shar'tor the Executioner"
        },
        infernalGuardIronsworn: {
            id: "infernalGuardIronsworn",
            name: "Infernal Guard Ironsworn"
        },
        infernalGuardFireglaives: {
            id: "infernalGuardFireglaives",
            name: "Infernal Guard Fireglaives"
        },
        kDaaiFireborn: {
            id: "kDaaiFireborn",
            name: "K'Daai Fireborn"
        },
        bullCentaurRenders: {
            id: "bullCentaurRenders",
            name: "Bull Centaur Renders"
        },
        chaosSiegeGargant: {
            id: "chaosSiegeGargant",
            name: "Chaos Siege Gargant"
        },
        ironDaemonWarEngine: {
            id: "ironDaemonWarEngine",
            name: "Iron Daemon War Engine"
        },
        skullcrackerWarEngine: {
            id: "skullcrackerWarEngine",
            name: "Skullcracker War Engine"
        },
        deathshriekerRocketLauncher: {
            id: "deathshriekerRocketLauncher",
            name: "Deathshrieker Rocket Launcher"
        },
        dreadquakeMortar: {
            id: "dreadquakeMortar",
            name: "Dreadquake Mortar"
        },
        magmaCannon: {
            id: "magmaCannon",
            name: "Magma Cannon"
        },
        blackshardWarhost: {
            id: "blackshardWarhost",
            name: "Blackshard Warhost"
        },
        hashutSWrathArtilleryTrain: {
            id: "hashutSWrathArtilleryTrain",
            name: "Hashut's Wrath Artillery Train"
        },
        thanquolAndBoneripper: {
            id: "thanquolAndBoneripper",
            name: "Thanquol and Boneripper"
        },
        greySeer: {
            id: "greySeer",
            name: "Grey Seer"
        },
        screamingBell: {
            id: "screamingBell",
            name: "Screaming Bell"
        },
        lordSkreechVerminkin: {
            id: "lordSkreechVerminkin",
            name: "Lord Skreech Verminkin"
        },
        verminlordWarpseer: {
            id: "verminlordWarpseer",
            name: "Verminlord Warpseer"
        },
        warpgnawVerminlord: {
            id: "warpgnawVerminlord",
            name: "Warpgnaw Verminlord"
        },
        chaosWarhounds: {
            id: "chaosWarhounds",
            name: "Chaos Warhounds"
        },
        centigors: {
            id: "centigors",
            name: "Centigors"
        },
        razorgors: {
            id: "razorgors",
            name: "Razorgors"
        },
        harpies: {
            id: "harpies",
            name: "Harpies"
        },
        cursDEttin: {
            id: "cursDEttin",
            name: "Curs'd Ettin"
        },
        chimera: {
            id: "chimera",
            name: "Chimera"
        },
        mutalithVortexBeast: {
            id: "mutalithVortexBeast",
            name: "Mutalith Vortex Beast"
        },
        slaughterbrute: {
            id: "slaughterbrute",
            name: "Slaughterbrute"
        },
        cockatrice: {
            id: "cockatrice",
            name: "Cockatrice"
        },
        greatTaurus: {
            id: "greatTaurus",
            name: "Great Taurus"
        },
        lammasu: {
            id: "lammasu",
            name: "Lammasu"
        },
        jabberslythe: {
            id: "jabberslythe",
            name: "Jabberslythe"
        },
        preyton: {
            id: "preyton",
            name: "Preyton"
        },
        warpfireDragon: {
            id: "warpfireDragon",
            name: "Warpfire Dragon"
        },
        theGlottkin: {
            id: "theGlottkin",
            name: "The Glottkin"
        },
        bloabRotspawned: {
            id: "bloabRotspawned",
            name: "Bloab Rotspawned"
        },
        morbidexTwiceborn: {
            id: "morbidexTwiceborn",
            name: "Morbidex Twiceborn"
        },
        orghottsDaemonspew: {
            id: "orghottsDaemonspew",
            name: "Orghotts Daemonspew"
        },
        gutrotSpume: {
            id: "gutrotSpume",
            name: "Gutrot Spume"
        },
        festusTheLeechlord: {
            id: "festusTheLeechlord",
            name: "Festus The Leechlord"
        },
        harbingerOfDecay: {
            id: "harbingerOfDecay",
            name: "Harbinger of Decay"
        },
        sorcerer: {
            id: "sorcerer",
            name: "Sorcerer"
        },
        lordOfPlagues: {
            id: "lordOfPlagues",
            name: "Lord of Plagues"
        },
        lordOfAfflictions: {
            id: "lordOfAfflictions",
            name: "Lord of Afflictions"
        },
        lordOfBlights: {
            id: "lordOfBlights",
            name: "Lord of Blights"
        },
        putridBlightkings: {
            id: "putridBlightkings",
            name: "Putrid Blightkings"
        },
        pusgoyleBlightlords: {
            id: "pusgoyleBlightlords",
            name: "Pusgoyle Blightlords"
        },
        blightGuard: {
            id: "blightGuard",
            name: "Blight Guard"
        },
        afflictionCyst: {
            id: "afflictionCyst",
            name: "Affliction Cyst"
        },
        theBlessedSons: {
            id: "theBlessedSons",
            name: "The Blessed Sons"
        },
        blightCyst: {
            id: "blightCyst",
            name: "Blight Cyst"
        },
        plagueCyst: {
            id: "plagueCyst",
            name: "Plague Cyst"
        },
        darkoathChieftain: {
            id: "darkoathChieftain",
            name: "Darkoath Chieftain"
        },
        lordOfChaos: {
            id: "lordOfChaos",
            name: "Lord Of Chaos"
        },
        chaosLordOnDaemonicMount: {
            id: "chaosLordOnDaemonicMount",
            name: "Chaos Lord On Daemonic Mount"
        },
        chaosLordOnManticore: {
            id: "chaosLordOnManticore",
            name: "Chaos Lord On Manticore"
        },
        chaosSorcererLord: {
            id: "chaosSorcererLord",
            name: "Chaos Sorcerer Lord"
        },
        chaosSorcererLordOnManticore: {
            id: "chaosSorcererLordOnManticore",
            name: "Chaos Sorcerer Lord On Manticore"
        },
        exaltedHeroOfChaos: {
            id: "exaltedHeroOfChaos",
            name: "Exalted Hero Of Chaos"
        },
        slambo: {
            id: "slambo",
            name: "Slambo"
        },
        darkoathWarqueen: {
            id: "darkoathWarqueen",
            name: "Darkoath Warqueen"
        },
        chaosWarriors: {
            id: "chaosWarriors",
            name: "Chaos Warriors"
        },
        chaosMarauders: {
            id: "chaosMarauders",
            name: "Chaos Marauders"
        },
        chaosChariots: {
            id: "chaosChariots",
            name: "Chaos Chariots"
        },
        chaosMarauderHorsemen: {
            id: "chaosMarauderHorsemen",
            name: "Chaos Marauder Horsemen"
        },
        chaosChosen: {
            id: "chaosChosen",
            name: "Chaos Chosen"
        },
        chaosKnights: {
            id: "chaosKnights",
            name: "Chaos Knights"
        },
        chaosGorebeastChariots: {
            id: "chaosGorebeastChariots",
            name: "Chaos Gorebeast Chariots"
        },
        chaosWarshrine: {
            id: "chaosWarshrine",
            name: "Chaos Warshrine"
        },
        chaosSpawn: {
            id: "chaosSpawn",
            name: "Chaos Spawn"
        },
        godswornChampionsOfRuin: {
            id: "godswornChampionsOfRuin",
            name: "Godsworn Champions of Ruin"
        },
        godswrathWarband: {
            id: "godswrathWarband",
            name: "Godswrath Warband"
        },
        ruinbringerWarband: {
            id: "ruinbringerWarband",
            name: "Ruinbringer Warband"
        },
        skavenChieftainWithBattleStandard: {
            id: "skavenChieftainWithBattleStandard",
            name: "Skaven Chieftain With Battle Standard"
        },
        skavenslaves: {
            id: "skavenslaves",
            name: "Skavenslaves"
        },
        tamurkhanTheMaggotLord: {
            id: "tamurkhanTheMaggotLord",
            name: "Tamurkhan the Maggot Lord"
        },
        kayzkTheBefouled: {
            id: "kayzkTheBefouled",
            name: "Kayzk the Befouled"
        },
        saylTheFaithless: {
            id: "saylTheFaithless",
            name: "Sayl The Faithless"
        },
        plagueOgors: {
            id: "plagueOgors",
            name: "Plague Ogors"
        },
        bileTroggoths: {
            id: "bileTroggoths",
            name: "Bile Troggoths"
        },
        daemonPlagueToadsOfNurgle: {
            id: "daemonPlagueToadsOfNurgle",
            name: "Daemon Plague Toads of Nurgle"
        },
        daemonPoxRidersOfNurgle: {
            id: "daemonPoxRidersOfNurgle",
            name: "Daemon Pox Riders of Nurgle"
        },
        nightmaw: {
            id: "nightmaw",
            name: "Nightmaw"
        },
        giganticChaosSpawn: {
            id: "giganticChaosSpawn",
            name: "Gigantic Chaos Spawn"
        },
        chaosWarMammoth: {
            id: "chaosWarMammoth",
            name: "Chaos War Mammoth"
        },
        sonsOfTheMaggotLord: {
            id: "sonsOfTheMaggotLord",
            name: "Sons of the Maggot Lord"
        },
        theLeapingPox: {
            id: "theLeapingPox",
            name: "The Leaping Pox"
        },
        dragonOgorShaggoth: {
            id: "dragonOgorShaggoth",
            name: "Dragon Ogor Shaggoth"
        },
        dragonOgors: {
            id: "dragonOgors",
            name: "Dragon Ogors"
        },
        curselingEyeOfTzeentch: {
            id: "curselingEyeOfTzeentch",
            name: "Curseling, Eye of Tzeentch"
        },
        fatemaster: {
            id: "fatemaster",
            name: "Fatemaster"
        },
        ogroidThaumaturge: {
            id: "ogroidThaumaturge",
            name: "Ogroid Thaumaturge"
        },
        gauntSummoner: {
            id: "gauntSummoner",
            name: "Gaunt Summoner"
        },
        magister: {
            id: "magister",
            name: "Magister"
        },
        tzaangorShaman: {
            id: "tzaangorShaman",
            name: "Tzaangor Shaman"
        },
        kairicAcolytes: {
            id: "kairicAcolytes",
            name: "Kairic Acolytes"
        },
        tzaangors: {
            id: "tzaangors",
            name: "Tzaangors"
        },
        tzaangorEnlightened: {
            id: "tzaangorEnlightened",
            name: "Tzaangor Enlightened"
        },
        tzaangorEnlightenedOnDisc: {
            id: "tzaangorEnlightenedOnDisc",
            name: "Tzaangor Enlightened on Disc"
        },
        tzaangorSkyfires: {
            id: "tzaangorSkyfires",
            name: "Tzaangor Skyfires"
        },
        arcaniteCabal: {
            id: "arcaniteCabal",
            name: "Arcanite Cabal"
        },
        arcaniteCult: {
            id: "arcaniteCult",
            name: "Arcanite Cult"
        },
        alterKinCoven: {
            id: "alterKinCoven",
            name: "Alter-kin Coven"
        },
        cultOfTheTransientForm: {
            id: "cultOfTheTransientForm",
            name: "Cult of the Transient Form"
        },
        skyshoalCoven: {
            id: "skyshoalCoven",
            name: "Skyshoal Coven"
        },
        thePyrofaneCult: {
            id: "thePyrofaneCult",
            name: "The Pyrofane Cult"
        },
        tzaangorCoven: {
            id: "tzaangorCoven",
            name: "Tzaangor Coven"
        },
        witchfyreCoven: {
            id: "witchfyreCoven",
            name: "Witchfyre Coven"
        },
        doombull: {
            id: "doombull",
            name: "Doombull"
        },
        bullgors: {
            id: "bullgors",
            name: "Bullgors"
        },
        cygor: {
            id: "cygor",
            name: "Cygor"
        },
        ghorgon: {
            id: "ghorgon",
            name: "Ghorgon"
        },
        exaltedHeroWithBattleStandard: {
            id: "exaltedHeroWithBattleStandard",
            name: "Exalted Hero With Battle Standard"
        },
        chaosDragon: {
            id: "chaosDragon",
            name: "Chaos Dragon"
        },
        troggothKing: {
            id: "troggothKing",
            name: "Troggoth King"
        },
        forsaken: {
            id: "forsaken",
            name: "Forsaken"
        },
        skinWolves: {
            id: "skinWolves",
            name: "Skin Wolves"
        },
        chaosOgors: {
            id: "chaosOgors",
            name: "Chaos Ogors"
        },
        chaosTroggoths: {
            id: "chaosTroggoths",
            name: "Chaos Troggoths"
        },
        chaosFamiliars: {
            id: "chaosFamiliars",
            name: "Chaos Familiars"
        },
        hellcannon: {
            id: "hellcannon",
            name: "Hellcannon"
        },
        mistweaverSaih: {
            id: "mistweaverSaih",
            name: "Mistweaver Saih"
        },
        tenebraelShard: {
            id: "tenebraelShard",
            name: "Tenebrael Shard"
        },
        kingOnHippogryph: {
            id: "kingOnHippogryph",
            name: "King on Hippogryph"
        },
        enchantress: {
            id: "enchantress",
            name: "Enchantress"
        },
        sacredProtector: {
            id: "sacredProtector",
            name: "Sacred Protector"
        },
        bretonnianLord: {
            id: "bretonnianLord",
            name: "Bretonnian Lord"
        },
        nobleChampion: {
            id: "nobleChampion",
            name: "Noble Champion"
        },
        nobleStandardBearer: {
            id: "nobleStandardBearer",
            name: "Noble Standard Bearer"
        },
        damsel: {
            id: "damsel",
            name: "Damsel"
        },
        knightsErrant: {
            id: "knightsErrant",
            name: "Knights Errant"
        },
        knightsOfTheRealm: {
            id: "knightsOfTheRealm",
            name: "Knights Of The Realm"
        },
        questingKnights: {
            id: "questingKnights",
            name: "Questing Knights"
        },
        grailKnights: {
            id: "grailKnights",
            name: "Grail Knights"
        },
        pegasusKnights: {
            id: "pegasusKnights",
            name: "Pegasus Knights"
        },
        battlePilgrims: {
            id: "battlePilgrims",
            name: "Battle Pilgrims"
        },
        menAtArms: {
            id: "menAtArms",
            name: "Men At Arms"
        },
        peasantBowmen: {
            id: "peasantBowmen",
            name: "Peasant Bowmen"
        },
        mountedYeomen: {
            id: "mountedYeomen",
            name: "Mounted Yeomen"
        },
        fieldTrebuchet: {
            id: "fieldTrebuchet",
            name: "Field Trebuchet"
        },
        battlemage: {
            id: "battlemage",
            name: "Battlemage"
        },
        battlemageOnGriffon: {
            id: "battlemageOnGriffon",
            name: "Battlemage On Griffon"
        },
        celestialHurricanumWithCelestialBattlemage: {
            id: "celestialHurricanumWithCelestialBattlemage",
            name: "Celestial Hurricanum With Celestial Battlemage"
        },
        luminarkOfHyshWithWhiteBattlemage: {
            id: "luminarkOfHyshWithWhiteBattlemage",
            name: "Luminark Of Hysh With White Battlemage"
        },
        celestialHurricanum: {
            id: "celestialHurricanum",
            name: "Celestial Hurricanum"
        },
        luminarkOfHysh: {
            id: "luminarkOfHysh",
            name: "Luminark Of Hysh"
        },
        warCouncil: {
            id: "warCouncil",
            name: "War Council"
        },
        dreadlord: {
            id: "dreadlord",
            name: "Dreadlord"
        },
        dreadlordOnDrakespawn: {
            id: "dreadlordOnDrakespawn",
            name: "Dreadlord On Drakespawn"
        },
        sorceressOnDrakespawn: {
            id: "sorceressOnDrakespawn",
            name: "Sorceress On Drakespawn"
        },
        beastmasterOnManticore: {
            id: "beastmasterOnManticore",
            name: "Beastmaster On Manticore"
        },
        masterWithBattleStandard: {
            id: "masterWithBattleStandard",
            name: "Master With Battle Standard"
        },
        sorceressOnDarkPegasus: {
            id: "sorceressOnDarkPegasus",
            name: "Sorceress on Dark Pegasus"
        },
        shades: {
            id: "shades",
            name: "Shades"
        },
        reaperBoltThrower: {
            id: "reaperBoltThrower",
            name: "Reaper Bolt Thrower"
        },
        sorceress: {
            id: "sorceress",
            name: "Sorceress"
        },
        sorceressOnBlackDragon: {
            id: "sorceressOnBlackDragon",
            name: "Sorceress On Black Dragon"
        },
        dreadspears: {
            id: "dreadspears",
            name: "Dreadspears"
        },
        bleakswords: {
            id: "bleakswords",
            name: "Bleakswords"
        },
        darkshards: {
            id: "darkshards",
            name: "Darkshards"
        },
        blackGuard: {
            id: "blackGuard",
            name: "Black Guard"
        },
        executioners: {
            id: "executioners",
            name: "Executioners"
        },
        thrallWarhost: {
            id: "thrallWarhost",
            name: "Thrall Warhost"
        },
        hagQueen: {
            id: "hagQueen",
            name: "Hag Queen"
        },
        hagQueenOnCauldronOfBlood: {
            id: "hagQueenOnCauldronOfBlood",
            name: "Hag Queen on Cauldron Of Blood"
        },
        slaughterQueenOnCauldronOfBlood: {
            id: "slaughterQueenOnCauldronOfBlood",
            name: "Slaughter Queen on Cauldron Of Blood"
        },
        bloodwrackMedusa: {
            id: "bloodwrackMedusa",
            name: "Bloodwrack Medusa"
        },
        slaughterQueen: {
            id: "slaughterQueen",
            name: "Slaughter Queen"
        },
        bloodwrackShrine: {
            id: "bloodwrackShrine",
            name: "Bloodwrack Shrine"
        },
        morathiHighOracleOfKhaine: {
            id: "morathiHighOracleOfKhaine",
            name: "Morathi High Oracle of Khaine"
        },
        doomfireWarlocks: {
            id: "doomfireWarlocks",
            name: "Doomfire Warlocks"
        },
        sistersOfSlaughter: {
            id: "sistersOfSlaughter",
            name: "Sisters Of Slaughter"
        },
        witchAelves: {
            id: "witchAelves",
            name: "Witch Aelves"
        },
        bloodSisters: {
            id: "bloodSisters",
            name: "Blood Sisters"
        },
        bloodStalkers: {
            id: "bloodStalkers",
            name: "Blood Stalkers"
        },
        khineraiHeartrenders: {
            id: "khineraiHeartrenders",
            name: "Khinerai Heartrenders"
        },
        khineraiLifetakers: {
            id: "khineraiLifetakers",
            name: "Khinerai Lifetakers"
        },
        avatarOfKhaine: {
            id: "avatarOfKhaine",
            name: "Avatar of Khaine"
        },
        bloodwrackSisterhood: {
            id: "bloodwrackSisterhood",
            name: "Bloodwrack Sisterhood"
        },
        cauldronGuard: {
            id: "cauldronGuard",
            name: "Cauldron Guard"
        },
        templeNest: {
            id: "templeNest",
            name: "Temple Nest"
        },
        shadowPatrol: {
            id: "shadowPatrol",
            name: "Shadow Patrol"
        },
        shadowhammerCompact: {
            id: "shadowhammerCompact",
            name: "Shadowhammer Compact"
        },
        slaughterTroupe: {
            id: "slaughterTroupe",
            name: "Slaughter Troupe"
        },
        warCovenOfMorathi: {
            id: "warCovenOfMorathi",
            name: "War Coven of Morathi"
        },
        warriorPriest: {
            id: "warriorPriest",
            name: "Warrior Priest"
        },
        excelsiorWarpriest: {
            id: "excelsiorWarpriest",
            name: "Excelsior Warpriest"
        },
        witchHunter: {
            id: "witchHunter",
            name: "Witch Hunter"
        },
        warAltarOfSigmar: {
            id: "warAltarOfSigmar",
            name: "War Altar Of Sigmar"
        },
        flagellants: {
            id: "flagellants",
            name: "Flagellants"
        },
        pilgrimageOfWrath: {
            id: "pilgrimageOfWrath",
            name: "Pilgrimage of Wrath"
        },
        runelord: {
            id: "runelord",
            name: "Runelord"
        },
        unforged: {
            id: "unforged",
            name: "Unforged"
        },
        wardenKing: {
            id: "wardenKing",
            name: "Warden King"
        },
        hammerers: {
            id: "hammerers",
            name: "Hammerers"
        },
        ironbreakers: {
            id: "ironbreakers",
            name: "Ironbreakers"
        },
        irondrakes: {
            id: "irondrakes",
            name: "Irondrakes"
        },
        longbeards: {
            id: "longbeards",
            name: "Longbeards"
        },
        warriors: {
            id: "warriors",
            name: "Warriors"
        },
        quarrellers: {
            id: "quarrellers",
            name: "Quarrellers"
        },
        thunderers: {
            id: "thunderers",
            name: "Thunderers"
        },
        grudgeboundWarThrong: {
            id: "grudgeboundWarThrong",
            name: "Grudgebound War Throng"
        },
        wardenKingOnThroneOfPower: {
            id: "wardenKingOnThroneOfPower",
            name: "Warden King on Throne of Power"
        },
        runelordOnAnvilOfDoom: {
            id: "runelordOnAnvilOfDoom",
            name: "Runelord on Anvil of Doom"
        },
        apprenticeRunesmith: {
            id: "apprenticeRunesmith",
            name: "Apprentice Runesmith"
        },
        farRanger: {
            id: "farRanger",
            name: "Far-Ranger"
        },
        thaneWithBattleStandard: {
            id: "thaneWithBattleStandard",
            name: "Thane with Battle Standard"
        },
        miners: {
            id: "miners",
            name: "Miners"
        },
        slayers: {
            id: "slayers",
            name: "Slayers"
        },
        duardinBoltThrower: {
            id: "duardinBoltThrower",
            name: "Duardin Bolt Thrower"
        },
        flameCannon: {
            id: "flameCannon",
            name: "Flame Cannon"
        },
        grudgeThrower: {
            id: "grudgeThrower",
            name: "Grudge Thrower"
        },
        archmageOnDragon: {
            id: "archmageOnDragon",
            name: "Archmage On Dragon"
        },
        archmage: {
            id: "archmage",
            name: "Archmage"
        },
        loremaster: {
            id: "loremaster",
            name: "Loremaster"
        },
        drakeseer: {
            id: "drakeseer",
            name: "Drakeseer"
        },
        swordmasters: {
            id: "swordmasters",
            name: "Swordmasters"
        },
        freeguildGeneral: {
            id: "freeguildGeneral",
            name: "Freeguild General"
        },
        freeguildGeneralOnGriffon: {
            id: "freeguildGeneralOnGriffon",
            name: "Freeguild General On Griffon"
        },
        demigryphKnights: {
            id: "demigryphKnights",
            name: "Demigryph Knights"
        },
        freeguildCrossbowmen: {
            id: "freeguildCrossbowmen",
            name: "Freeguild Crossbowmen"
        },
        freeguildHandgunners: {
            id: "freeguildHandgunners",
            name: "Freeguild Handgunners"
        },
        freeguildArchers: {
            id: "freeguildArchers",
            name: "Freeguild Archers"
        },
        freeguildGreatswords: {
            id: "freeguildGreatswords",
            name: "Freeguild Greatswords"
        },
        freeguildPistoliers: {
            id: "freeguildPistoliers",
            name: "Freeguild Pistoliers"
        },
        freeguildOutriders: {
            id: "freeguildOutriders",
            name: "Freeguild Outriders"
        },
        freeguildGuard: {
            id: "freeguildGuard",
            name: "Freeguild Guard"
        },
        freeguildRegiment: {
            id: "freeguildRegiment",
            name: "Freeguild Regiment"
        },
        auricRunemaster: {
            id: "auricRunemaster",
            name: "Auric Runemaster"
        },
        battlesmith: {
            id: "battlesmith",
            name: "Battlesmith"
        },
        grimwrathBerzerker: {
            id: "grimwrathBerzerker",
            name: "Grimwrath Berzerker"
        },
        auricRunesmiter: {
            id: "auricRunesmiter",
            name: "Auric Runesmiter"
        },
        auricRunesmiterOnMagmadroth: {
            id: "auricRunesmiterOnMagmadroth",
            name: "Auric Runesmiter on Magmadroth"
        },
        auricRuneson: {
            id: "auricRuneson",
            name: "Auric Runeson"
        },
        auricRunesonOnMagmadroth: {
            id: "auricRunesonOnMagmadroth",
            name: "Auric Runeson on Magmadroth"
        },
        auricRunefather: {
            id: "auricRunefather",
            name: "Auric Runefather"
        },
        auricRunefatherOnMagmadroth: {
            id: "auricRunefatherOnMagmadroth",
            name: "Auric Runefather on Magmadroth"
        },
        doomseeker: {
            id: "doomseeker",
            name: "Doomseeker"
        },
        fjulGrimnir: {
            id: "fjulGrimnir",
            name: "Fjul-Grimnir"
        },
        auricHearthguard: {
            id: "auricHearthguard",
            name: "Auric Hearthguard"
        },
        hearthguardBerzerkers: {
            id: "hearthguardBerzerkers",
            name: "Hearthguard Berzerkers"
        },
        vulkiteBerzerkers: {
            id: "vulkiteBerzerkers",
            name: "Vulkite Berzerkers"
        },
        theChosenAxes: {
            id: "theChosenAxes",
            name: "The Chosen Axes"
        },
        lordsOfTheLodge: {
            id: "lordsOfTheLodge",
            name: "Lords of the Lodge"
        },
        warriorKinband: {
            id: "warriorKinband",
            name: "Warrior Kinband"
        },
        forgeBrethren: {
            id: "forgeBrethren",
            name: "Forge Brethren"
        },
        grandFyrd: {
            id: "grandFyrd",
            name: "Grand Fyrd"
        },
        vostargLodge: {
            id: "vostargLodge",
            name: "Vostarg Lodge"
        },
        greyfyrdLodge: {
            id: "greyfyrdLodge",
            name: "Greyfyrd Lodge"
        },
        seawardenOnFoot: {
            id: "seawardenOnFoot",
            name: "Seawarden on Foot"
        },
        highbornSpearmen: {
            id: "highbornSpearmen",
            name: "Highborn Spearmen"
        },
        highbornArchers: {
            id: "highbornArchers",
            name: "Highborn Archers"
        },
        highbornSilverHelms: {
            id: "highbornSilverHelms",
            name: "Highborn Silver Helms"
        },
        greatEagles: {
            id: "greatEagles",
            name: "Great Eagles"
        },
        highbornRepeaterBoltThrower: {
            id: "highbornRepeaterBoltThrower",
            name: "Highborn Repeater Bolt Thrower"
        },
        gunmaster: {
            id: "gunmaster",
            name: "Gunmaster"
        },
        cogsmith: {
            id: "cogsmith",
            name: "Cogsmith"
        },
        gyrocopters: {
            id: "gyrocopters",
            name: "Gyrocopters"
        },
        gyrobombers: {
            id: "gyrobombers",
            name: "Gyrobombers"
        },
        steamTank: {
            id: "steamTank",
            name: "Steam Tank"
        },
        cannon: {
            id: "cannon",
            name: "Cannon"
        },
        organGun: {
            id: "organGun",
            name: "Organ Gun"
        },
        helblasterVolleyGun: {
            id: "helblasterVolleyGun",
            name: "Helblaster Volley Gun"
        },
        helstormRocketBattery: {
            id: "helstormRocketBattery",
            name: "Helstorm Rocket Battery"
        },
        artilleryDetachment: {
            id: "artilleryDetachment",
            name: "Artillery Detachment"
        },
        aetherKhemist: {
            id: "aetherKhemist",
            name: "Aether-Khemist"
        },
        aethericNavigator: {
            id: "aethericNavigator",
            name: "Aetheric Navigator"
        },
        arkanautAdmiral: {
            id: "arkanautAdmiral",
            name: "Arkanaut Admiral"
        },
        brokkGrungsson: {
            id: "brokkGrungsson",
            name: "Brokk Grungsson"
        },
        endrinmaster: {
            id: "endrinmaster",
            name: "Endrinmaster"
        },
        arkanautCompany: {
            id: "arkanautCompany",
            name: "Arkanaut Company"
        },
        grundstokThunderers: {
            id: "grundstokThunderers",
            name: "Grundstok Thunderers"
        },
        endrinriggers: {
            id: "endrinriggers",
            name: "Endrinriggers"
        },
        skywardens: {
            id: "skywardens",
            name: "Skywardens"
        },
        arkanautFrigate: {
            id: "arkanautFrigate",
            name: "Arkanaut Frigate"
        },
        arkanautIronclad: {
            id: "arkanautIronclad",
            name: "Arkanaut Ironclad"
        },
        grundstokGunhauler: {
            id: "grundstokGunhauler",
            name: "Grundstok Gunhauler"
        },
        aetherstrikeForce: {
            id: "aetherstrikeForce",
            name: "Aetherstrike Force"
        },
        ironSkySquadron: {
            id: "ironSkySquadron",
            name: "Iron Sky Squadron"
        },
        ironSkyCommand: {
            id: "ironSkyCommand",
            name: "Iron Sky Command"
        },
        grundstokEscortWing: {
            id: "grundstokEscortWing",
            name: "Grundstok Escort Wing"
        },
        grandArmada: {
            id: "grandArmada",
            name: "Grand Armada"
        },
        whiteLions: {
            id: "whiteLions",
            name: "White Lions"
        },
        whiteLionChariots: {
            id: "whiteLionChariots",
            name: "White Lion Chariots"
        },
        skinkProphet: {
            id: "skinkProphet",
            name: "Skink Prophet"
        },
        chameleonSkinkStalker: {
            id: "chameleonSkinkStalker",
            name: "Chameleon Skink Stalker"
        },
        skinkChief: {
            id: "skinkChief",
            name: "Skink Chief"
        },
        celestialSwarms: {
            id: "celestialSwarms",
            name: "Celestial Swarms"
        },
        carmineDragon: {
            id: "carmineDragon",
            name: "Carmine Dragon"
        },
        dragonNoble: {
            id: "dragonNoble",
            name: "Dragon Noble"
        },
        dragonlord: {
            id: "dragonlord",
            name: "Dragonlord"
        },
        dragonBlades: {
            id: "dragonBlades",
            name: "Dragon Blades"
        },
        dragonlordHost: {
            id: "dragonlordHost",
            name: "Dragonlord Host"
        },
        dreadlordOnBlackDragon: {
            id: "dreadlordOnBlackDragon",
            name: "Dreadlord On Black Dragon"
        },
        drakespawnKnights: {
            id: "drakespawnKnights",
            name: "Drakespawn Knights"
        },
        drakespawnChariots: {
            id: "drakespawnChariots",
            name: "Drakespawn Chariots"
        },
        warHydra: {
            id: "warHydra",
            name: "War Hydra"
        },
        ebondrakeWarhost: {
            id: "ebondrakeWarhost",
            name: "Ebondrake Warhost"
        },
        anointedOfAsuryanOnFlamespyrePhoenix: {
            id: "anointedOfAsuryanOnFlamespyrePhoenix",
            name: "Anointed Of Asuryan On Flamespyre Phoenix"
        },
        anointedOfAsuryanOnFrostheartPhoenix: {
            id: "anointedOfAsuryanOnFrostheartPhoenix",
            name: "Anointed Of Asuryan On Frostheart Phoenix"
        },
        anointed: {
            id: "anointed",
            name: "Anointed"
        },
        phoenixGuard: {
            id: "phoenixGuard",
            name: "Phoenix Guard"
        },
        flamespyrePhoenix: {
            id: "flamespyrePhoenix",
            name: "Flamespyre Phoenix"
        },
        frostheartPhoenix: {
            id: "frostheartPhoenix",
            name: "Frostheart Phoenix"
        },
        spyreheartWarhost: {
            id: "spyreheartWarhost",
            name: "Spyreheart Warhost"
        },
        blackArkFleetmaster: {
            id: "blackArkFleetmaster",
            name: "Black Ark Fleetmaster"
        },
        blackArkCorsairs: {
            id: "blackArkCorsairs",
            name: "Black Ark Corsairs"
        },
        scourgerunnerChariots: {
            id: "scourgerunnerChariots",
            name: "Scourgerunner Chariots"
        },
        kharibdyss: {
            id: "kharibdyss",
            name: "Kharibdyss"
        },
        realmReavers: {
            id: "realmReavers",
            name: "Realm Reavers"
        },
        lordKroak: {
            id: "lordKroak",
            name: "Lord Kroak"
        },
        slannStarmaster: {
            id: "slannStarmaster",
            name: "Slann Starmaster"
        },
        saurusOldbloodOnCarnosaur: {
            id: "saurusOldbloodOnCarnosaur",
            name: "Saurus Oldblood on Carnosaur"
        },
        saurusOldblood: {
            id: "saurusOldblood",
            name: "Saurus Oldblood"
        },
        saurusScarVeteranOnColdOne: {
            id: "saurusScarVeteranOnColdOne",
            name: "Saurus Scar-Veteran on Cold One"
        },
        saurusEternityWarden: {
            id: "saurusEternityWarden",
            name: "Saurus Eternity Warden"
        },
        saurusSunblood: {
            id: "saurusSunblood",
            name: "Saurus Sunblood"
        },
        scarVeteranWithBattleStandard: {
            id: "scarVeteranWithBattleStandard",
            name: "Scar-Veteran with Battle Standard"
        },
        saurusAstrolithBearer: {
            id: "saurusAstrolithBearer",
            name: "Saurus Astrolith Bearer"
        },
        saurusScarVeteranOnCarnosaur: {
            id: "saurusScarVeteranOnCarnosaur",
            name: "Saurus Scar-Veteran on Carnosaur"
        },
        skinkPriest: {
            id: "skinkPriest",
            name: "Skink Priest"
        },
        skinkStarseer: {
            id: "skinkStarseer",
            name: "Skink Starseer"
        },
        skinkStarpriest: {
            id: "skinkStarpriest",
            name: "Skink Starpriest"
        },
        engineOfTheGods: {
            id: "engineOfTheGods",
            name: "Engine of the Gods"
        },
        saurusWarriors: {
            id: "saurusWarriors",
            name: "Saurus Warriors"
        },
        saurusGuard: {
            id: "saurusGuard",
            name: "Saurus Guard"
        },
        saurusKnights: {
            id: "saurusKnights",
            name: "Saurus Knights"
        },
        skinks: {
            id: "skinks",
            name: "Skinks"
        },
        chameleonSkinks: {
            id: "chameleonSkinks",
            name: "Chameleon Skinks"
        },
        terradonRiders: {
            id: "terradonRiders",
            name: "Terradon Riders"
        },
        ripperdactylRiders: {
            id: "ripperdactylRiders",
            name: "Ripperdactyl Riders"
        },
        skinkHandlers: {
            id: "skinkHandlers",
            name: "Skink Handlers"
        },
        salamanders: {
            id: "salamanders",
            name: "Salamanders"
        },
        razordons: {
            id: "razordons",
            name: "Razordons"
        },
        kroxigor: {
            id: "kroxigor",
            name: "Kroxigor"
        },
        stegadon: {
            id: "stegadon",
            name: "Stegadon"
        },
        bastiladon: {
            id: "bastiladon",
            name: "Bastiladon"
        },
        troglodon: {
            id: "troglodon",
            name: "Troglodon"
        },
        dreadSaurian: {
            id: "dreadSaurian",
            name: "Dread Saurian"
        },
        bloodclawStarhost: {
            id: "bloodclawStarhost",
            name: "Bloodclaw Starhost"
        },
        eternalStarhost: {
            id: "eternalStarhost",
            name: "Eternal Starhost"
        },
        firelanceStarhost: {
            id: "firelanceStarhost",
            name: "Firelance Starhost"
        },
        heavenswatchStarhost: {
            id: "heavenswatchStarhost",
            name: "Heavenswatch Starhost"
        },
        shadowstrikeStarhost: {
            id: "shadowstrikeStarhost",
            name: "Shadowstrike Starhost"
        },
        starbeastConstellation: {
            id: "starbeastConstellation",
            name: "Starbeast Constellation"
        },
        sunclawStarhost: {
            id: "sunclawStarhost",
            name: "Sunclaw Starhost"
        },
        thunderquakeStarhost: {
            id: "thunderquakeStarhost",
            name: "Thunderquake Starhost"
        },
        fangsOfSotek: {
            id: "fangsOfSotek",
            name: "Fangs of Sotek"
        },
        dracothionSTail: {
            id: "dracothionSTail",
            name: "Dracothion's Tail"
        },
        assassin: {
            id: "assassin",
            name: "Assassin"
        },
        darkRiders: {
            id: "darkRiders",
            name: "Dark Riders"
        },
        lordCelestant: {
            id: "lordCelestant",
            name: "Lord-Celestant"
        },
        lordRelictor: {
            id: "lordRelictor",
            name: "Lord-Relictor"
        },
        lordCastellant: {
            id: "lordCastellant",
            name: "Lord-Castellant"
        },
        celestantPrime: {
            id: "celestantPrime",
            name: "Celestant-Prime"
        },
        knightVexillor: {
            id: "knightVexillor",
            name: "Knight-Vexillor"
        },
        gavrielSureheart: {
            id: "gavrielSureheart",
            name: "Gavriel Sureheart"
        },
        knightHeraldor: {
            id: "knightHeraldor",
            name: "Knight-Heraldor"
        },
        knightAzyros: {
            id: "knightAzyros",
            name: "Knight-Azyros"
        },
        knightVenator: {
            id: "knightVenator",
            name: "Knight-Venator"
        },
        knightQuestor: {
            id: "knightQuestor",
            name: "Knight-Questor"
        },
        lordVeritant: {
            id: "lordVeritant",
            name: "Lord-Veritant"
        },
        lordCelestantOnDracoth: {
            id: "lordCelestantOnDracoth",
            name: "Lord-Celestant On Dracoth"
        },
        vandusHammerhand: {
            id: "vandusHammerhand",
            name: "Vandus Hammerhand"
        },
        lordCelestantOnStardrake: {
            id: "lordCelestantOnStardrake",
            name: "Lord-Celestant On Stardrake"
        },
        drakeswornTemplar: {
            id: "drakeswornTemplar",
            name: "Drakesworn Templar"
        },
        lordAquilor: {
            id: "lordAquilor",
            name: "Lord-Aquilor"
        },
        neaveBlacktalon: {
            id: "neaveBlacktalon",
            name: "Neave Blacktalon"
        },
        lordOrdinator: {
            id: "lordOrdinator",
            name: "Lord-Ordinator"
        },
        gryphHound: {
            id: "gryphHound",
            name: "Gryph-Hound"
        },
        prosecutorsWithStormcallJavelins: {
            id: "prosecutorsWithStormcallJavelins",
            name: "Prosecutors with Stormcall Javelins"
        },
        prosecutorsWithCelestialHammers: {
            id: "prosecutorsWithCelestialHammers",
            name: "Prosecutors with Celestial Hammers"
        },
        paladinRetributors: {
            id: "paladinRetributors",
            name: "Paladin Retributors"
        },
        liberators: {
            id: "liberators",
            name: "Liberators"
        },
        steelheartSChampions: {
            id: "steelheartSChampions",
            name: "Steelheart's Champions"
        },
        judicators: {
            id: "judicators",
            name: "Judicators"
        },
        paladinProtectors: {
            id: "paladinProtectors",
            name: "Paladin Protectors"
        },
        paladinDecimators: {
            id: "paladinDecimators",
            name: "Paladin Decimators"
        },
        concussors: {
            id: "concussors",
            name: "Concussors"
        },
        desolators: {
            id: "desolators",
            name: "Desolators"
        },
        tempestors: {
            id: "tempestors",
            name: "Tempestors"
        },
        fulminators: {
            id: "fulminators",
            name: "Fulminators"
        },
        aetherwings: {
            id: "aetherwings",
            name: "Aetherwings"
        },
        vanguardHunters: {
            id: "vanguardHunters",
            name: "Vanguard-Hunters"
        },
        vanguardPalladors: {
            id: "vanguardPalladors",
            name: "Vanguard-Palladors"
        },
        vanguardRaptorsWithHurricaneCrossbows: {
            id: "vanguardRaptorsWithHurricaneCrossbows",
            name: "Vanguard-Raptors with Hurricane Crossbows"
        },
        vanguardRaptorsWithLongstrikeCrossbows: {
            id: "vanguardRaptorsWithLongstrikeCrossbows",
            name: "Vanguard-Raptors with Longstrike Crossbows"
        },
        exemplarChamber: {
            id: "exemplarChamber",
            name: "Exemplar Chamber"
        },
        devastationBrotherhood: {
            id: "devastationBrotherhood",
            name: "Devastation Brotherhood"
        },
        hammerstrikeForce: {
            id: "hammerstrikeForce",
            name: "Hammerstrike Force"
        },
        lordsOfTheStorm: {
            id: "lordsOfTheStorm",
            name: "Lords of the Storm"
        },
        theSkyborneSlayers: {
            id: "theSkyborneSlayers",
            name: "The Skyborne Slayers"
        },
        thunderheadBrotherhood: {
            id: "thunderheadBrotherhood",
            name: "Thunderhead Brotherhood"
        },
        vanguardWing: {
            id: "vanguardWing",
            name: "Vanguard Wing"
        },
        harbingerChamber: {
            id: "harbingerChamber",
            name: "Harbinger Chamber"
        },
        warriorBrotherhood: {
            id: "warriorBrotherhood",
            name: "Warrior Brotherhood"
        },
        warriorChamber: {
            id: "warriorChamber",
            name: "Warrior Chamber"
        },
        drakeswornTemple: {
            id: "drakeswornTemple",
            name: "Drakesworn Temple"
        },
        extremisChamber: {
            id: "extremisChamber",
            name: "Extremis Chamber"
        },
        lightningEchelon: {
            id: "lightningEchelon",
            name: "Lightning Echelon"
        },
        thunderwaveEchelon: {
            id: "thunderwaveEchelon",
            name: "Thunderwave Echelon"
        },
        anvilsOfTheHeldenhammerWarriorChamber: {
            id: "anvilsOfTheHeldenhammerWarriorChamber",
            name: "Anvils of the Heldenhammer Warrior Chamber"
        },
        astralTemplarsExemplarChamber: {
            id: "astralTemplarsExemplarChamber",
            name: "Astral Templars Exemplar Chamber"
        },
        celestialHuntingPack: {
            id: "celestialHuntingPack",
            name: "Celestial Hunting Pack"
        },
        celestialVindicatorsWarriorChamber: {
            id: "celestialVindicatorsWarriorChamber",
            name: "Celestial Vindicators Warrior Chamber"
        },
        celestialWarbringersHarbingerChamber: {
            id: "celestialWarbringersHarbingerChamber",
            name: "Celestial Warbringers Harbinger Chamber"
        },
        hallowedKnightsWarriorChamber: {
            id: "hallowedKnightsWarriorChamber",
            name: "Hallowed Knights Warrior Chamber"
        },
        hammersOfSigmarWarriorChamber: {
            id: "hammersOfSigmarWarriorChamber",
            name: "Hammers of Sigmar Warrior Chamber"
        },
        knightsExcelsiorExemplarChamber: {
            id: "knightsExcelsiorExemplarChamber",
            name: "Knights Excelsior Exemplar Chamber"
        },
        stormHeralds: {
            id: "stormHeralds",
            name: "Storm Heralds"
        },
        stormVortexGarrison: {
            id: "stormVortexGarrison",
            name: "Storm Vortex Garrison"
        },
        tempestLordsHarbingerChamber: {
            id: "tempestLordsHarbingerChamber",
            name: "Tempest Lords Harbinger Chamber"
        },
        vanguardAngelosConclave: {
            id: "vanguardAngelosConclave",
            name: "Vanguard Angelos Conclave"
        },
        vanguardAuxiliaryChamber: {
            id: "vanguardAuxiliaryChamber",
            name: "Vanguard Auxiliary Chamber"
        },
        vanguardJusticarConclave: {
            id: "vanguardJusticarConclave",
            name: "Vanguard Justicar Conclave"
        },
        blacktalonSShadowhammers: {
            id: "blacktalonSShadowhammers",
            name: "Blacktalon's Shadowhammers"
        },
        highWarden: {
            id: "highWarden",
            name: "High Warden"
        },
        skywarden: {
            id: "skywarden",
            name: "Skywarden"
        },
        reavers: {
            id: "reavers",
            name: "Reavers"
        },
        spireguard: {
            id: "spireguard",
            name: "Spireguard"
        },
        skycutters: {
            id: "skycutters",
            name: "Skycutters"
        },
        shadowWarriors: {
            id: "shadowWarriors",
            name: "Shadow Warriors"
        },
        chariots: {
            id: "chariots",
            name: "Chariots"
        },
        branchwraith: {
            id: "branchwraith",
            name: "Branchwraith"
        },
        branchwych: {
            id: "branchwych",
            name: "Branchwych"
        },
        spiritOfDurthu: {
            id: "spiritOfDurthu",
            name: "Spirit of Durthu"
        },
        drychaHamadreth: {
            id: "drychaHamadreth",
            name: "Drycha Hamadreth"
        },
        alarielleTheEverqueen: {
            id: "alarielleTheEverqueen",
            name: "Alarielle the Everqueen"
        },
        treelordAncient: {
            id: "treelordAncient",
            name: "Treelord Ancient"
        },
        dryads: {
            id: "dryads",
            name: "Dryads"
        },
        kurnothHunters: {
            id: "kurnothHunters",
            name: "Kurnoth Hunters"
        },
        spiteRevenants: {
            id: "spiteRevenants",
            name: "Spite-Revenants"
        },
        treeRevenants: {
            id: "treeRevenants",
            name: "Tree-Revenants"
        },
        treelord: {
            id: "treelord",
            name: "Treelord"
        },
        alarielleSHeartwoodGuard: {
            id: "alarielleSHeartwoodGuard",
            name: "Alarielle's Heartwood Guard"
        },
        sylvanethWargrove: {
            id: "sylvanethWargrove",
            name: "Sylvaneth Wargrove"
        },
        winterleafWargrove: {
            id: "winterleafWargrove",
            name: "Winterleaf Wargrove"
        },
        ironbarkWargrove: {
            id: "ironbarkWargrove",
            name: "Ironbark Wargrove"
        },
        dreadwoodWargrove: {
            id: "dreadwoodWargrove",
            name: "Dreadwood Wargrove"
        },
        heartwoodWargrove: {
            id: "heartwoodWargrove",
            name: "Heartwood Wargrove"
        },
        gnarlrootWargrove: {
            id: "gnarlrootWargrove",
            name: "Gnarlroot Wargrove"
        },
        oakenbrowWargrove: {
            id: "oakenbrowWargrove",
            name: "Oakenbrow Wargrove"
        },
        harvestboonWargrove: {
            id: "harvestboonWargrove",
            name: "Harvestboon Wargrove"
        },
        forestSpiritWargrove: {
            id: "forestSpiritWargrove",
            name: "Forest Spirit Wargrove"
        },
        outcasts: {
            id: "outcasts",
            name: "Outcasts"
        },
        freeSpirits: {
            id: "freeSpirits",
            name: "Free Spirits"
        },
        forestFolk: {
            id: "forestFolk",
            name: "Forest Folk"
        },
        household: {
            id: "household",
            name: "Household"
        },
        lordsOfTheClan: {
            id: "lordsOfTheClan",
            name: "Lords of the Clan"
        },
        theGuardiansOfAlarielle: {
            id: "theGuardiansOfAlarielle",
            name: "The Guardians of Alarielle"
        },
        huntmarshal: {
            id: "huntmarshal",
            name: "Huntmarshal"
        },
        engineerOnMechanicalSteed: {
            id: "engineerOnMechanicalSteed",
            name: "Engineer On Mechanical Steed"
        },
        battlemageOnPegasus: {
            id: "battlemageOnPegasus",
            name: "Battlemage on Pegasus"
        },
        knightsOfOrder: {
            id: "knightsOfOrder",
            name: "Knights of Order"
        },
        greatcannon: {
            id: "greatcannon",
            name: "Greatcannon"
        },
        fieldMortar: {
            id: "fieldMortar",
            name: "Field Mortar"
        },
        nomadPrince: {
            id: "nomadPrince",
            name: "Nomad Prince"
        },
        spellweaver: {
            id: "spellweaver",
            name: "Spellweaver"
        },
        waywatcher: {
            id: "waywatcher",
            name: "Waywatcher"
        },
        wayfinder: {
            id: "wayfinder",
            name: "Wayfinder"
        },
        waystrider: {
            id: "waystrider",
            name: "Waystrider"
        },
        wildRiders: {
            id: "wildRiders",
            name: "Wild Riders"
        },
        gladeGuard: {
            id: "gladeGuard",
            name: "Glade Guard"
        },
        sistersOfTheWatch: {
            id: "sistersOfTheWatch",
            name: "Sisters of the Watch"
        },
        eternalGuard: {
            id: "eternalGuard",
            name: "Eternal Guard"
        },
        wildwoodRangers: {
            id: "wildwoodRangers",
            name: "Wildwood Rangers"
        },
        sistersOfTheThorn: {
            id: "sistersOfTheThorn",
            name: "Sisters of the Thorn"
        },
        waystonePathfinders: {
            id: "waystonePathfinders",
            name: "Waystone Pathfinders"
        },
        gladeCaptainBattleStandardBearer: {
            id: "gladeCaptainBattleStandardBearer",
            name: "Glade Captain Battle Standard Bearer"
        },
        gladeLordOnGreatEagle: {
            id: "gladeLordOnGreatEagle",
            name: "Glade Lord on Great Eagle"
        },
        gladeLordOnGreatStag: {
            id: "gladeLordOnGreatStag",
            name: "Glade Lord on Great Stag"
        },
        gladeLordOnForestDragon: {
            id: "gladeLordOnForestDragon",
            name: "Glade Lord on Forest Dragon"
        },
        gladeLordOnPurebredSteed: {
            id: "gladeLordOnPurebredSteed",
            name: "Glade Lord on Purebred Steed"
        },
        gladeLord: {
            id: "gladeLord",
            name: "Glade Lord"
        },
        avatarOfTheHunt: {
            id: "avatarOfTheHunt",
            name: "Avatar of the Hunt"
        },
        twilightSistersOnForestDragon: {
            id: "twilightSistersOnForestDragon",
            name: "Twilight Sisters on Forest Dragon"
        },
        shadowdancer: {
            id: "shadowdancer",
            name: "Shadowdancer"
        },
        huntingHounds: {
            id: "huntingHounds",
            name: "Hunting Hounds"
        },
        wardancers: {
            id: "wardancers",
            name: "Wardancers"
        },
        waywatchers: {
            id: "waywatchers",
            name: "Waywatchers"
        },
        gladeRiders: {
            id: "gladeRiders",
            name: "Glade Riders"
        },
        warhawkRiders: {
            id: "warhawkRiders",
            name: "Warhawk Riders"
        },
        treeKin: {
            id: "treeKin",
            name: "Tree Kin"
        },
        aleguzzlerGargant: {
            id: "aleguzzlerGargant",
            name: "Aleguzzler Gargant"
        },
        icebrowHunter: {
            id: "icebrowHunter",
            name: "Icebrow Hunter"
        },
        frostlordOnStonehorn: {
            id: "frostlordOnStonehorn",
            name: "Frostlord on Stonehorn"
        },
        frostlordOnThundertusk: {
            id: "frostlordOnThundertusk",
            name: "Frostlord on Thundertusk"
        },
        huskardOnStonehorn: {
            id: "huskardOnStonehorn",
            name: "Huskard on Stonehorn"
        },
        huskardOnThundertusk: {
            id: "huskardOnThundertusk",
            name: "Huskard on Thundertusk"
        },
        frostSabres: {
            id: "frostSabres",
            name: "Frost Sabres"
        },
        mournfangPack: {
            id: "mournfangPack",
            name: "Mournfang Pack"
        },
        icefallYhetees: {
            id: "icefallYhetees",
            name: "Icefall Yhetees"
        },
        stonehornBeastriders: {
            id: "stonehornBeastriders",
            name: "Stonehorn Beastriders"
        },
        thundertuskBeastriders: {
            id: "thundertuskBeastriders",
            name: "Thundertusk Beastriders"
        },
        braggothSBeastHammer: {
            id: "braggothSBeastHammer",
            name: "Braggoth's Beast Hammer"
        },
        olwyrAlfrostun: {
            id: "olwyrAlfrostun",
            name: "Olwyr Alfrostun"
        },
        svardAlfrostun: {
            id: "svardAlfrostun",
            name: "Svard Alfrostun"
        },
        eurlbad: {
            id: "eurlbad",
            name: "Eurlbad"
        },
        torrbad: {
            id: "torrbad",
            name: "Torrbad"
        },
        skal: {
            id: "skal",
            name: "Skal"
        },
        alfrostun: {
            id: "alfrostun",
            name: "Alfrostun"
        },
        jorlbad: {
            id: "jorlbad",
            name: "Jorlbad"
        },
        savageBigBoss: {
            id: "savageBigBoss",
            name: "Savage Big Boss"
        },
        maniakWeirdnob: {
            id: "maniakWeirdnob",
            name: "Maniak Weirdnob"
        },
        wardokk: {
            id: "wardokk",
            name: "Wardokk"
        },
        wurrgogProphet: {
            id: "wurrgogProphet",
            name: "Wurrgog Prophet"
        },
        savageOrruks: {
            id: "savageOrruks",
            name: "Savage Orruks"
        },
        savageOrrukArrowboys: {
            id: "savageOrrukArrowboys",
            name: "Savage Orruk Arrowboys"
        },
        savageOrrukMorboys: {
            id: "savageOrrukMorboys",
            name: "Savage Orruk Morboys"
        },
        savageBigStabbas: {
            id: "savageBigStabbas",
            name: "Savage Big Stabbas"
        },
        savageBoarboyz: {
            id: "savageBoarboyz",
            name: "Savage Boarboyz"
        },
        savageBoarboyManiaks: {
            id: "savageBoarboyManiaks",
            name: "Savage Boarboy Maniaks"
        },
        kopRukk: {
            id: "kopRukk",
            name: "Kop Rukk"
        },
        iceboneWarclan: {
            id: "iceboneWarclan",
            name: "Icebone Warclan"
        },
        savageWarclan: {
            id: "savageWarclan",
            name: "Savage Warclan"
        },
        kunninRukk: {
            id: "kunninRukk",
            name: "Kunnin' Rukk"
        },
        drakkfootWarclan: {
            id: "drakkfootWarclan",
            name: "Drakkfoot Warclan"
        },
        snagaRukk: {
            id: "snagaRukk",
            name: "Snaga Rukk"
        },
        brutalRukk: {
            id: "brutalRukk",
            name: "Brutal Rukk"
        },
        teefRukk: {
            id: "teefRukk",
            name: "Teef Rukk"
        },
        bonegrinzWarclan: {
            id: "bonegrinzWarclan",
            name: "Bonegrinz Warclan"
        },
        firebelly: {
            id: "firebelly",
            name: "Firebelly"
        },
        gitmobGrotShaman: {
            id: "gitmobGrotShaman",
            name: "Gitmob Grot Shaman"
        },
        gitmobGrots: {
            id: "gitmobGrots",
            name: "Gitmob Grots"
        },
        grotWolfRiders: {
            id: "grotWolfRiders",
            name: "Grot Wolf Riders"
        },
        grotWolfChariots: {
            id: "grotWolfChariots",
            name: "Grot Wolf Chariots"
        },
        nastySkulkers: {
            id: "nastySkulkers",
            name: "Nasty Skulkers"
        },
        snotlings: {
            id: "snotlings",
            name: "Snotlings"
        },
        snotlingPumpWagons: {
            id: "snotlingPumpWagons",
            name: "Snotling Pump Wagons"
        },
        grotSpearChukka: {
            id: "grotSpearChukka",
            name: "Grot Spear Chukka"
        },
        grotRockLobber: {
            id: "grotRockLobber",
            name: "Grot Rock Lobber"
        },
        doomDiverCatapult: {
            id: "doomDiverCatapult",
            name: "Doom Diver Catapult"
        },
        orrukWarboss: {
            id: "orrukWarboss",
            name: "Orruk Warboss"
        },
        orrukWarbossOnWyvern: {
            id: "orrukWarbossOnWyvern",
            name: "Orruk Warboss On Wyvern"
        },
        orrukGreatShaman: {
            id: "orrukGreatShaman",
            name: "Orruk Great Shaman"
        },
        orruks: {
            id: "orruks",
            name: "Orruks"
        },
        orrukBoarboys: {
            id: "orrukBoarboys",
            name: "Orruk Boarboys"
        },
        orrukBoarChariots: {
            id: "orrukBoarChariots",
            name: "Orruk Boar Chariots"
        },
        tyrant: {
            id: "tyrant",
            name: "Tyrant"
        },
        butcher: {
            id: "butcher",
            name: "Butcher"
        },
        ogors: {
            id: "ogors",
            name: "Ogors"
        },
        ironguts: {
            id: "ironguts",
            name: "Ironguts"
        },
        leadbelchers: {
            id: "leadbelchers",
            name: "Leadbelchers"
        },
        gorgers: {
            id: "gorgers",
            name: "Gorgers"
        },
        ironblaster: {
            id: "ironblaster",
            name: "Ironblaster"
        },
        grotScraplauncher: {
            id: "grotScraplauncher",
            name: "Grot Scraplauncher"
        },
        grots: {
            id: "grots",
            name: "Grots"
        },
        gordrakkTheFistOfGork: {
            id: "gordrakkTheFistOfGork",
            name: "Gordrakk The Fist of Gork"
        },
        megabossOnMawKrusha: {
            id: "megabossOnMawKrusha",
            name: "Megaboss on Maw-Krusha"
        },
        orrukMegaboss: {
            id: "orrukMegaboss",
            name: "Orruk Megaboss"
        },
        orrukWarchanter: {
            id: "orrukWarchanter",
            name: "Orruk Warchanter"
        },
        orrukWeirdnobShaman: {
            id: "orrukWeirdnobShaman",
            name: "Orruk Weirdnob Shaman"
        },
        orrukArdboys: {
            id: "orrukArdboys",
            name: "Orruk Ardboys"
        },
        orrukBrutes: {
            id: "orrukBrutes",
            name: "Orruk Brutes"
        },
        orrukGoreGruntas: {
            id: "orrukGoreGruntas",
            name: "Orruk Gore Gruntas"
        },
        ironskullSBoyz: {
            id: "ironskullSBoyz",
            name: "Ironskull's Boyz"
        },
        ardfist: {
            id: "ardfist",
            name: "Ardfist"
        },
        brawl: {
            id: "brawl",
            name: "Brawl"
        },
        bruteFist: {
            id: "bruteFist",
            name: "Brute Fist"
        },
        gorefist: {
            id: "gorefist",
            name: "Gorefist"
        },
        ironfist: {
            id: "ironfist",
            name: "Ironfist"
        },
        weirdfist: {
            id: "weirdfist",
            name: "Weirdfist"
        },
        bloodtoofs: {
            id: "bloodtoofs",
            name: "Bloodtoofs"
        },
        ironsunz: {
            id: "ironsunz",
            name: "Ironsunz"
        },
        maneaters: {
            id: "maneaters",
            name: "Maneaters"
        },
        fimirWarriors: {
            id: "fimirWarriors",
            name: "Fimir Warriors"
        },
        basilisk: {
            id: "basilisk",
            name: "Basilisk"
        },
        bonegrinderGargant: {
            id: "bonegrinderGargant",
            name: "Bonegrinder Gargant"
        },
        colossalSquig: {
            id: "colossalSquig",
            name: "Colossal Squig"
        },
        dreadMaw: {
            id: "dreadMaw",
            name: "Dread Maw"
        },
        incarnateElementalOfBeasts: {
            id: "incarnateElementalOfBeasts",
            name: "Incarnate Elemental of Beasts"
        },
        incarnateElementalOfFire: {
            id: "incarnateElementalOfFire",
            name: "Incarnate Elemental of Fire"
        },
        magmaDragon: {
            id: "magmaDragon",
            name: "Magma Dragon"
        },
        merwyrm: {
            id: "merwyrm",
            name: "Merwyrm"
        },
        rogueIdol: {
            id: "rogueIdol",
            name: "Rogue Idol"
        },
        squigGobba: {
            id: "squigGobba",
            name: "Squig Gobba"
        },
        grotWarboss: {
            id: "grotWarboss",
            name: "Grot Warboss"
        },
        grotWarbossOnGreatCaveSquig: {
            id: "grotWarbossOnGreatCaveSquig",
            name: "Grot Warboss On Great Cave Squig"
        },
        moonclanGrotShaman: {
            id: "moonclanGrotShaman",
            name: "Moonclan Grot Shaman"
        },
        fungoidCaveShaman: {
            id: "fungoidCaveShaman",
            name: "Fungoid Cave-Shaman"
        },
        moonclanGrots: {
            id: "moonclanGrots",
            name: "Moonclan Grots"
        },
        grotFanatics: {
            id: "grotFanatics",
            name: "Grot Fanatics"
        },
        grotSquigHoppers: {
            id: "grotSquigHoppers",
            name: "Grot Squig Hoppers"
        },
        grotSquigHerders: {
            id: "grotSquigHerders",
            name: "Grot Squig Herders"
        },
        caveSquigs: {
            id: "caveSquigs",
            name: "Cave Squigs"
        },
        manglerSquigs: {
            id: "manglerSquigs",
            name: "Mangler Squigs"
        },
        overtyrant: {
            id: "overtyrant",
            name: "Overtyrant"
        },
        bruiserStandardBearer: {
            id: "bruiserStandardBearer",
            name: "Bruiser Standard Bearer"
        },
        gitbossOnWolfChariot: {
            id: "gitbossOnWolfChariot",
            name: "Gitboss on Wolf Chariot"
        },
        gitboss: {
            id: "gitboss",
            name: "Gitboss"
        },
        orrukBully: {
            id: "orrukBully",
            name: "Orruk Bully"
        },
        mercenaryOrruks: {
            id: "mercenaryOrruks",
            name: "Mercenary Orruks"
        },
        arachnarokSpiderWithGrotShaman: {
            id: "arachnarokSpiderWithGrotShaman",
            name: "Arachnarok Spider With Grot Shaman"
        },
        grotBigBossOnGiganticSpider: {
            id: "grotBigBossOnGiganticSpider",
            name: "Grot Big Boss On Gigantic Spider"
        },
        grotSpiderRiders: {
            id: "grotSpiderRiders",
            name: "Grot Spider Riders"
        },
        arachnarokSpider: {
            id: "arachnarokSpider",
            name: "Arachnarok Spider"
        },
        troggothHag: {
            id: "troggothHag",
            name: "Troggoth Hag"
        },
        fellwaterTroggoths: {
            id: "fellwaterTroggoths",
            name: "Fellwater Troggoths"
        },
        sourbreathTroggoths: {
            id: "sourbreathTroggoths",
            name: "Sourbreath Troggoths"
        },
        rockgutTroggoths: {
            id: "rockgutTroggoths",
            name: "Rockgut Troggoths"
        },
        zombies: {
            id: "zombies",
            name: "Zombies"
        },
        direWolves: {
            id: "direWolves",
            name: "Dire Wolves"
        },
        corpseCart: {
            id: "corpseCart",
            name: "Corpse Cart"
        },
        nagashSupremeLordOfTheUndead: {
            id: "nagashSupremeLordOfTheUndead",
            name: "Nagash Supreme Lord Of The Undead"
        },
        arkhanTheBlackMortarchOfSacrament: {
            id: "arkhanTheBlackMortarchOfSacrament",
            name: "Arkhan The Black Mortarch of Sacrament"
        },
        mannfredMortarchOfNight: {
            id: "mannfredMortarchOfNight",
            name: "Mannfred Mortarch Of Night"
        },
        neferataMortarchOfBlood: {
            id: "neferataMortarchOfBlood",
            name: "Neferata Mortarch Of Blood"
        },
        morghastHarbingers: {
            id: "morghastHarbingers",
            name: "Morghast Harbingers"
        },
        morghastArchai: {
            id: "morghastArchai",
            name: "Morghast Archai"
        },
        necromancer: {
            id: "necromancer",
            name: "Necromancer"
        },
        mortisEngine: {
            id: "mortisEngine",
            name: "Mortis Engine"
        },
        wightKingWithBalefulTombBlade: {
            id: "wightKingWithBalefulTombBlade",
            name: "Wight King with Baleful Tomb Blade"
        },
        wightKingWithBlackAxe: {
            id: "wightKingWithBlackAxe",
            name: "Wight King with Black Axe"
        },
        skeletonWarriors: {
            id: "skeletonWarriors",
            name: "Skeleton Warriors"
        },
        graveGuard: {
            id: "graveGuard",
            name: "Grave Guard"
        },
        blackKnights: {
            id: "blackKnights",
            name: "Black Knights"
        },
        theSepulchralGuard: {
            id: "theSepulchralGuard",
            name: "The Sepulchral Guard"
        },
        legionOfDeath: {
            id: "legionOfDeath",
            name: "Legion of Death"
        },
        abhorrantGhoulKing: {
            id: "abhorrantGhoulKing",
            name: "Abhorrant Ghoul King"
        },
        abhorrantGhoulKingOnTerrorgheist: {
            id: "abhorrantGhoulKingOnTerrorgheist",
            name: "Abhorrant Ghoul King on Terrorgheist"
        },
        abhorrantGhoulKingOnZombieDragon: {
            id: "abhorrantGhoulKingOnZombieDragon",
            name: "Abhorrant Ghoul King on Zombie Dragon"
        },
        cryptGhastCourtier: {
            id: "cryptGhastCourtier",
            name: "Crypt Ghast Courtier"
        },
        cryptHaunterCourtier: {
            id: "cryptHaunterCourtier",
            name: "Crypt Haunter Courtier"
        },
        cryptInfernalCourtier: {
            id: "cryptInfernalCourtier",
            name: "Crypt Infernal Courtier"
        },
        varghulfCourtier: {
            id: "varghulfCourtier",
            name: "Varghulf Courtier"
        },
        cryptGhouls: {
            id: "cryptGhouls",
            name: "Crypt Ghouls"
        },
        cryptHorrors: {
            id: "cryptHorrors",
            name: "Crypt Horrors"
        },
        cryptFlayers: {
            id: "cryptFlayers",
            name: "Crypt Flayers"
        },
        terrorgheist: {
            id: "terrorgheist",
            name: "Terrorgheist"
        },
        zombieDragon: {
            id: "zombieDragon",
            name: "Zombie Dragon"
        },
        abattoir: {
            id: "abattoir",
            name: "Abattoir"
        },
        attendantsAtCourt: {
            id: "attendantsAtCourt",
            name: "Attendants at Court"
        },
        deadwatch: {
            id: "deadwatch",
            name: "Deadwatch"
        },
        fleshEaterCourt: {
            id: "fleshEaterCourt",
            name: "Flesh-eater Court"
        },
        ghoulPatrol: {
            id: "ghoulPatrol",
            name: "Ghoul Patrol"
        },
        kingSGhouls: {
            id: "kingSGhouls",
            name: "King's Ghouls"
        },
        royalFamily: {
            id: "royalFamily",
            name: "Royal Family"
        },
        royalMenagerie: {
            id: "royalMenagerie",
            name: "Royal Menagerie"
        },
        royalMordants: {
            id: "royalMordants",
            name: "Royal Mordants"
        },
        cairnWraith: {
            id: "cairnWraith",
            name: "Cairn Wraith"
        },
        tombBanshee: {
            id: "tombBanshee",
            name: "Tomb Banshee"
        },
        vampireLord: {
            id: "vampireLord",
            name: "Vampire Lord"
        },
        vampireLordOnZombieDragon: {
            id: "vampireLordOnZombieDragon",
            name: "Vampire Lord On Zombie Dragon"
        },
        princeVhordrai: {
            id: "princeVhordrai",
            name: "Prince Vhordrai"
        },
        covenThrone: {
            id: "covenThrone",
            name: "Coven Throne"
        },
        bloodseekerPalanquin: {
            id: "bloodseekerPalanquin",
            name: "Bloodseeker Palanquin"
        },
        spiritHosts: {
            id: "spiritHosts",
            name: "Spirit Hosts"
        },
        hexwraiths: {
            id: "hexwraiths",
            name: "Hexwraiths"
        },
        vargheists: {
            id: "vargheists",
            name: "Vargheists"
        },
        bloodKnights: {
            id: "bloodKnights",
            name: "Blood Knights"
        },
        fellBats: {
            id: "fellBats",
            name: "Fell Bats"
        },
        batSwarms: {
            id: "batSwarms",
            name: "Bat Swarms"
        },
        blackCoach: {
            id: "blackCoach",
            name: "Black Coach"
        },
        castellansOfTheCrimsonKeep: {
            id: "castellansOfTheCrimsonKeep",
            name: "Castellans of the Crimson Keep"
        },
        courtOfNulahmia: {
            id: "courtOfNulahmia",
            name: "Court of Nulahmia"
        },
        deathmarch: {
            id: "deathmarch",
            name: "Deathmarch"
        },
        lordsOfSacrament: {
            id: "lordsOfSacrament",
            name: "Lords of Sacrament"
        },
        nightfallPack: {
            id: "nightfallPack",
            name: "Nightfall Pack"
        },
        theFirstCohort: {
            id: "theFirstCohort",
            name: "The First Cohort"
        },
        knightOfShrouds: {
            id: "knightOfShrouds",
            name: "Knight of Shrouds"
        },
        mourngul: {
            id: "mourngul",
            name: "Mourngul"
        },
        tombKingInRoyalChariot: {
            id: "tombKingInRoyalChariot",
            name: "Tomb King in Royal Chariot"
        },
        tombQueen: {
            id: "tombQueen",
            name: "Tomb Queen"
        },
        tombKing: {
            id: "tombKing",
            name: "Tomb King"
        },
        tombKingOnExaltedChariot: {
            id: "tombKingOnExaltedChariot",
            name: "Tomb King on Exalted Chariot"
        },
        scarabPrince: {
            id: "scarabPrince",
            name: "Scarab Prince"
        },
        tombHerald: {
            id: "tombHerald",
            name: "Tomb Herald"
        },
        lichePriest: {
            id: "lichePriest",
            name: "Liche Priest"
        },
        casketOfSouls: {
            id: "casketOfSouls",
            name: "Casket Of Souls"
        },
        necrotect: {
            id: "necrotect",
            name: "Necrotect"
        },
        royalWarsphinx: {
            id: "royalWarsphinx",
            name: "Royal Warsphinx"
        },
        skeletalLegionnaires: {
            id: "skeletalLegionnaires",
            name: "Skeletal Legionnaires"
        },
        skeletonArchers: {
            id: "skeletonArchers",
            name: "Skeleton Archers"
        },
        skeletonHorsemen: {
            id: "skeletonHorsemen",
            name: "Skeleton Horsemen"
        },
        skeletonHorseArchers: {
            id: "skeletonHorseArchers",
            name: "Skeleton Horse Archers"
        },
        skeletonChariots: {
            id: "skeletonChariots",
            name: "Skeleton Chariots"
        },
        tombGuard: {
            id: "tombGuard",
            name: "Tomb Guard"
        },
        tombScorpions: {
            id: "tombScorpions",
            name: "Tomb Scorpions"
        },
        necropolisKnights: {
            id: "necropolisKnights",
            name: "Necropolis Knights"
        },
        ushabti: {
            id: "ushabti",
            name: "Ushabti"
        },
        sepulchralStalkers: {
            id: "sepulchralStalkers",
            name: "Sepulchral Stalkers"
        },
        carrion: {
            id: "carrion",
            name: "Carrion"
        },
        tombSwarm: {
            id: "tombSwarm",
            name: "Tomb Swarm"
        },
        boneGiant: {
            id: "boneGiant",
            name: "Bone Giant"
        },
        warsphinx: {
            id: "warsphinx",
            name: "Warsphinx"
        },
        necrosphinx: {
            id: "necrosphinx",
            name: "Necrosphinx"
        },
        screamingSkullCatapult: {
            id: "screamingSkullCatapult",
            name: "Screaming Skull Catapult"
        },
        vampireLordOnAbyssalTerror: {
            id: "vampireLordOnAbyssalTerror",
            name: "Vampire Lord On Abyssal Terror"
        },
        necromancerOnNightmare: {
            id: "necromancerOnNightmare",
            name: "Necromancer on Nightmare"
        },
    };
    
    factions = {
        BEASTMEN: {
            id: "BEASTMEN",
            grandAlliance: GrandAlliance.chaos,
            name: "Beastmen"
        },
        BRAYHERD: {
            id: "BRAYHERD",
            grandAlliance: GrandAlliance.chaos,
            name: "Brayherd"
        },
        CHAOSGARGANTS: {
            id: "CHAOSGARGANTS",
            grandAlliance: GrandAlliance.chaos,
            name: "Chaos Gargants"
        },
        SKAVENESHIN: {
            id: "SKAVENESHIN",
            grandAlliance: GrandAlliance.chaos,
            name: "Clan Eshin"
        },
        SKAVENMOULDER: {
            id: "SKAVENMOULDER",
            grandAlliance: GrandAlliance.chaos,
            name: "Clan Moulder"
        },
        SKAVENPESTILENS: {
            id: "SKAVENPESTILENS",
            grandAlliance: GrandAlliance.chaos,
            name: "Clan Pestilens"
        },
        SKAVENSKRYRE: {
            id: "SKAVENSKRYRE",
            grandAlliance: GrandAlliance.chaos,
            name: "Clan Skryre"
        },
        SKAVENVERMINUS: {
            id: "SKAVENVERMINUS",
            grandAlliance: GrandAlliance.chaos,
            name: "Clan Verminus"
        },
        DAEMONSOFCHAOS: {
            id: "DAEMONSOFCHAOS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons of Chaos"
        },
        KHORNEDAEMONS: {
            id: "KHORNEDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons of Khorne"
        },
        NURGLEDAEMONS: {
            id: "NURGLEDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons of Nurgle"
        },
        TZEENTCHDAEMONS: {
            id: "TZEENTCHDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons of Tzeentch"
        },
        EVERCHOSEN: {
            id: "EVERCHOSEN",
            grandAlliance: GrandAlliance.chaos,
            name: "Everchosen"
        },
        SLAANESHDAEMONS: {
            id: "SLAANESHDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Hosts Of Slaanesh"
        },
        KHORNEBLOODBOUND: {
            id: "KHORNEBLOODBOUND",
            grandAlliance: GrandAlliance.chaos,
            name: "Khorne Bloodbound"
        },
        LEGIONOFAZGORH: {
            id: "LEGIONOFAZGORH",
            grandAlliance: GrandAlliance.chaos,
            name: "Legion Of Azgorh"
        },
        MASTERCLAN: {
            id: "MASTERCLAN",
            grandAlliance: GrandAlliance.chaos,
            name: "Masterclan"
        },
        MONSTERSOFCHAOS: {
            id: "MONSTERSOFCHAOS",
            grandAlliance: GrandAlliance.chaos,
            name: "Monsters Of Chaos"
        },
        NURGLEROTBRINGERS: {
            id: "NURGLEROTBRINGERS",
            grandAlliance: GrandAlliance.chaos,
            name: "Nurgle Rotbringers"
        },
        SLAVESTODARKNESS: {
            id: "SLAVESTODARKNESS",
            grandAlliance: GrandAlliance.chaos,
            name: "Slaves to Darkness"
        },
        SKAVEN: {
            id: "SKAVEN",
            grandAlliance: GrandAlliance.chaos,
            name: "Skaven"
        },
        TAMURKHANSHORDE: {
            id: "TAMURKHANSHORDE",
            grandAlliance: GrandAlliance.chaos,
            name: "Tamurkhan's Horde"
        },
        THUNDERSCORN: {
            id: "THUNDERSCORN",
            grandAlliance: GrandAlliance.chaos,
            name: "Thunderscorn"
        },
        TZEENTCHARCHANITES: {
            id: "TZEENTCHARCHANITES",
            grandAlliance: GrandAlliance.chaos,
            name: "Tzeentch Arcanites"
        },
        WARHERD: {
            id: "WARHERD",
            grandAlliance: GrandAlliance.chaos,
            name: "Warherd"
        },
        WARRIORSOFCHAOS: {
            id: "WARRIORSOFCHAOS",
            grandAlliance: GrandAlliance.chaos,
            name: "Warriors of Chaos"
        },
        AELVES: {
            id: "AELVES",
            grandAlliance: GrandAlliance.order,
            name: "Aelves"
        },
        BRETONNIA: {
            id: "BRETONNIA",
            grandAlliance: GrandAlliance.order,
            name: "Bretonnians"
        },
        COLLEGIATEARCANE: {
            id: "COLLEGIATEARCANE",
            grandAlliance: GrandAlliance.order,
            name: "Collegiate Arcane"
        },
        EXILES: {
            id: "EXILES",
            grandAlliance: GrandAlliance.order,
            name: "Dark Elves"
        },
        DARKLINGCOVENS: {
            id: "DARKLINGCOVENS",
            grandAlliance: GrandAlliance.order,
            name: "Darkling Covens"
        },
        DAUGHTERSOFKHAINE: {
            id: "DAUGHTERSOFKHAINE",
            grandAlliance: GrandAlliance.order,
            name: "Daughters Of Khaine"
        },
        DEVOTEDOFSIGMAR: {
            id: "DEVOTEDOFSIGMAR",
            grandAlliance: GrandAlliance.order,
            name: "Devoted Of Sigmar"
        },
        DISPOSSESSED: {
            id: "DISPOSSESSED",
            grandAlliance: GrandAlliance.order,
            name: "Dispossessed"
        },
        DWARFS: {
            id: "DWARFS",
            grandAlliance: GrandAlliance.order,
            name: "Dwarfs"
        },
        ELDRITCHCOUNCIL: {
            id: "ELDRITCHCOUNCIL",
            grandAlliance: GrandAlliance.order,
            name: "Eldritch Council"
        },
        FREEPEOPLES: {
            id: "FREEPEOPLES",
            grandAlliance: GrandAlliance.order,
            name: "Free Peoples"
        },
        FYRESLAYERS: {
            id: "FYRESLAYERS",
            grandAlliance: GrandAlliance.order,
            name: "Fyreslayers"
        },
        HIGHELVES: {
            id: "HIGHELVES",
            grandAlliance: GrandAlliance.order,
            name: "High Elves"
        },
        IRONWELDARSONAL: {
            id: "IRONWELDARSONAL",
            grandAlliance: GrandAlliance.order,
            name: "Ironweld Arsenal"
        },
        KHARADRONOVERLORDS: {
            id: "KHARADRONOVERLORDS",
            grandAlliance: GrandAlliance.order,
            name: "Kharadron Overlords"
        },
        LIONRANGERS: {
            id: "LIONRANGERS",
            grandAlliance: GrandAlliance.order,
            name: "Lion Rangers"
        },
        LIZARDMEN: {
            id: "LIZARDMEN",
            grandAlliance: GrandAlliance.order,
            name: "Lizardmen"
        },
        MONSTERSOFORDER: {
            id: "MONSTERSOFORDER",
            grandAlliance: GrandAlliance.order,
            name: "Monsters Of Order"
        },
        ORDERDRACONIS: {
            id: "ORDERDRACONIS",
            grandAlliance: GrandAlliance.order,
            name: "Order Draconis"
        },
        ORDERSERPENTIS: {
            id: "ORDERSERPENTIS",
            grandAlliance: GrandAlliance.order,
            name: "Order Serpentis"
        },
        PHOENIXTEMPLE: {
            id: "PHOENIXTEMPLE",
            grandAlliance: GrandAlliance.order,
            name: "Phoenix Temple"
        },
        SCOURGEPRIVATEERS: {
            id: "SCOURGEPRIVATEERS",
            grandAlliance: GrandAlliance.order,
            name: "Scourge Privateers"
        },
        SERAPHON: {
            id: "SERAPHON",
            grandAlliance: GrandAlliance.order,
            name: "Seraphon"
        },
        SHADOWBLADES: {
            id: "SHADOWBLADES",
            grandAlliance: GrandAlliance.order,
            name: "Shadowblades"
        },
        STORMCASTETERNALS: {
            id: "STORMCASTETERNALS",
            grandAlliance: GrandAlliance.order,
            name: "Stormcast Eternals"
        },
        SWIFTHAWKAGENTS: {
            id: "SWIFTHAWKAGENTS",
            grandAlliance: GrandAlliance.order,
            name: "Swifthawk Agents"
        },
        SYLVANETH: {
            id: "SYLVANETH",
            grandAlliance: GrandAlliance.order,
            name: "Sylvaneth"
        },
        EMPIRE: {
            id: "EMPIRE",
            grandAlliance: GrandAlliance.order,
            name: "The Empire"
        },
        WANDERERS: {
            id: "WANDERERS",
            grandAlliance: GrandAlliance.order,
            name: "Wanderers"
        },
        WOODELVES: {
            id: "WOODELVES",
            grandAlliance: GrandAlliance.order,
            name: "Wood Elves"
        },
        ALEGUZZLERGARGANTS: {
            id: "ALEGUZZLERGARGANTS",
            grandAlliance: GrandAlliance.destruction,
            name: "Aleguzzler Gargants"
        },
        BEASTCLAWRAIDERS: {
            id: "BEASTCLAWRAIDERS",
            grandAlliance: GrandAlliance.destruction,
            name: "Beastclaw Raiders"
        },
        BONESPLITTERZ: {
            id: "BONESPLITTERZ",
            grandAlliance: GrandAlliance.destruction,
            name: "Bonesplitterz"
        },
        FIREBELLIES: {
            id: "FIREBELLIES",
            grandAlliance: GrandAlliance.destruction,
            name: "Firebellies"
        },
        GROTS: {
            id: "GROTS",
            grandAlliance: GrandAlliance.destruction,
            name: "Gitmob Grots"
        },
        ORRUKS: {
            id: "ORRUKS",
            grandAlliance: GrandAlliance.destruction,
            name: "Greenskinz"
        },
        GUTBUSTERS: {
            id: "GUTBUSTERS",
            grandAlliance: GrandAlliance.destruction,
            name: "Gutbusters"
        },
        IRONJAWZ: {
            id: "IRONJAWZ",
            grandAlliance: GrandAlliance.destruction,
            name: "Ironjawz"
        },
        MANEATERS: {
            id: "MANEATERS",
            grandAlliance: GrandAlliance.destruction,
            name: "Maneaters"
        },
        MONSTROUSARCANUM: {
            id: "MONSTROUSARCANUM",
            grandAlliance: GrandAlliance.destruction,
            name: "Monsters Of Destruction"
        },
        MOONCLANGROTS: {
            id: "MOONCLANGROTS",
            grandAlliance: GrandAlliance.destruction,
            name: "Moonclan Grots"
        },
        OGREKINGDOMS: {
            id: "OGREKINGDOMS",
            grandAlliance: GrandAlliance.destruction,
            name: "Ogre Kingdoms"
        },
        ORCSANDGOBLINS: {
            id: "ORCSANDGOBLINS",
            grandAlliance: GrandAlliance.destruction,
            name: "Orcs & Goblins"
        },
        SPIDERFANGGROTS: {
            id: "SPIDERFANGGROTS",
            grandAlliance: GrandAlliance.destruction,
            name: "Spiderfang Grots"
        },
        TROGGOTHS: {
            id: "TROGGOTHS",
            grandAlliance: GrandAlliance.destruction,
            name: "Troggoths"
        },
        DEADWALKERS: {
            id: "DEADWALKERS",
            grandAlliance: GrandAlliance.death,
            name: "Deadwalkers"
        },
        DEATHLORDS: {
            id: "DEATHLORDS",
            grandAlliance: GrandAlliance.death,
            name: "Deathlords"
        },
        DEATHMAGES: {
            id: "DEATHMAGES",
            grandAlliance: GrandAlliance.death,
            name: "Deathmages"
        },
        DEATHRATTLE: {
            id: "DEATHRATTLE",
            grandAlliance: GrandAlliance.death,
            name: "Deathrattle"
        },
        FLESHEATERCOURTS: {
            id: "FLESHEATERCOURTS",
            grandAlliance: GrandAlliance.death,
            name: "Flesh Eater Courts"
        },
        LEGIONSOFNAGASH: {
            id: "LEGIONSOFNAGASH",
            grandAlliance: GrandAlliance.death,
            name: "Legions of Nagash"
        },
        NIGHTHAUNT: {
            id: "NIGHTHAUNT",
            grandAlliance: GrandAlliance.death,
            name: "Nighthaunt"
        },
        SOULBLIGHT: {
            id: "SOULBLIGHT",
            grandAlliance: GrandAlliance.death,
            name: "Soulblight"
        },
        TOMBKINGS: {
            id: "TOMBKINGS",
            grandAlliance: GrandAlliance.death,
            name: "Tomb Kings"
        },
        VAMPIRECOUNTS: {
            id: "VAMPIRECOUNTS",
            grandAlliance: GrandAlliance.death,
            name: "Vampire Counts"
        },
    };
    
    allegiances = {
        chaos: {
            id: "chaos",
            grandAlliance: GrandAlliance.chaos,
            name: "Chaos"
        },
        brayherd: {
            id: "brayherd",
            grandAlliance: GrandAlliance.chaos,
            name: "Brayherd"
        },
        khorne: {
            id: "khorne",
            grandAlliance: GrandAlliance.chaos,
            name: "Khorne"
        },
        nurgle: {
            id: "nurgle",
            grandAlliance: GrandAlliance.chaos,
            name: "Nurgle"
        },
        skavenPestilens: {
            id: "skavenPestilens",
            grandAlliance: GrandAlliance.chaos,
            name: "Skaven Pestilens"
        },
        skavenSkryre: {
            id: "skavenSkryre",
            grandAlliance: GrandAlliance.chaos,
            name: "Skaven Skryre"
        },
        slaanesh: {
            id: "slaanesh",
            grandAlliance: GrandAlliance.chaos,
            name: "Slaanesh"
        },
        slavesToDarkness: {
            id: "slavesToDarkness",
            grandAlliance: GrandAlliance.chaos,
            name: "Slaves to Darkness"
        },
        tzeentch: {
            id: "tzeentch",
            grandAlliance: GrandAlliance.chaos,
            name: "Tzeentch"
        },
        fistOfTheEverchosen: {
            id: "fistOfTheEverchosen",
            grandAlliance: GrandAlliance.chaos,
            name: "Fist of the Everchosen"
        },
        order: {
            id: "order",
            grandAlliance: GrandAlliance.order,
            name: "Order"
        },
        darklingCovens: {
            id: "darklingCovens",
            grandAlliance: GrandAlliance.order,
            name: "Darkling Covens"
        },
        dispossessed: {
            id: "dispossessed",
            grandAlliance: GrandAlliance.order,
            name: "Dispossessed"
        },
        freePeoples: {
            id: "freePeoples",
            grandAlliance: GrandAlliance.order,
            name: "Free Peoples"
        },
        fyreslayers: {
            id: "fyreslayers",
            grandAlliance: GrandAlliance.order,
            name: "Fyreslayers"
        },
        kharadronOverlords: {
            id: "kharadronOverlords",
            grandAlliance: GrandAlliance.order,
            name: "Kharadron Overlords"
        },
        seraphon: {
            id: "seraphon",
            grandAlliance: GrandAlliance.order,
            name: "Seraphon"
        },
        stormcastEternals: {
            id: "stormcastEternals",
            grandAlliance: GrandAlliance.order,
            name: "Stormcast Eternals"
        },
        sylvaneth: {
            id: "sylvaneth",
            grandAlliance: GrandAlliance.order,
            name: "Sylvaneth"
        },
        wanderers: {
            id: "wanderers",
            grandAlliance: GrandAlliance.order,
            name: "Wanderers"
        },
        hammerhal: {
            id: "hammerhal",
            grandAlliance: GrandAlliance.order,
            name: "Hammerhal"
        },
        anvilgard: {
            id: "anvilgard",
            grandAlliance: GrandAlliance.order,
            name: "Anvilgard"
        },
        tempestSEye: {
            id: "tempestSEye",
            grandAlliance: GrandAlliance.order,
            name: "Tempest's Eye"
        },
        hallowheart: {
            id: "hallowheart",
            grandAlliance: GrandAlliance.order,
            name: "Hallowheart"
        },
        theLivingCity: {
            id: "theLivingCity",
            grandAlliance: GrandAlliance.order,
            name: "The Living City"
        },
        greywaterFastness: {
            id: "greywaterFastness",
            grandAlliance: GrandAlliance.order,
            name: "Greywater Fastness"
        },
        daughtersOfKhaine: {
            id: "daughtersOfKhaine",
            grandAlliance: GrandAlliance.order,
            name: "Daughters Of Khaine"
        },
        destruction: {
            id: "destruction",
            grandAlliance: GrandAlliance.destruction,
            name: "Destruction"
        },
        bonesplitterz: {
            id: "bonesplitterz",
            grandAlliance: GrandAlliance.destruction,
            name: "Bonesplitterz"
        },
        beastclawRaiders: {
            id: "beastclawRaiders",
            grandAlliance: GrandAlliance.destruction,
            name: "Beastclaw Raiders"
        },
        ironjawz: {
            id: "ironjawz",
            grandAlliance: GrandAlliance.destruction,
            name: "Ironjawz"
        },
        stoneklawSGutstompas: {
            id: "stoneklawSGutstompas",
            grandAlliance: GrandAlliance.destruction,
            name: "Stoneklaw's Gutstompas"
        },
        death: {
            id: "death",
            grandAlliance: GrandAlliance.death,
            name: "Death"
        },
        fleshEaterCourts: {
            id: "fleshEaterCourts",
            grandAlliance: GrandAlliance.death,
            name: "Flesh Eater Courts"
        },
        nighthaunt: {
            id: "nighthaunt",
            grandAlliance: GrandAlliance.death,
            name: "Nighthaunt"
        },
        soulblight: {
            id: "soulblight",
            grandAlliance: GrandAlliance.death,
            name: "Soulblight"
        },
        grandHostOfNagash: {
            id: "grandHostOfNagash",
            grandAlliance: GrandAlliance.death,
            name: "Grand Host of Nagash"
        },
        legionOfSacrament: {
            id: "legionOfSacrament",
            grandAlliance: GrandAlliance.death,
            name: "Legion of Sacrament"
        },
        legionOfBlood: {
            id: "legionOfBlood",
            grandAlliance: GrandAlliance.death,
            name: "Legion of Blood"
        },
        legionOfNight: {
            id: "legionOfNight",
            grandAlliance: GrandAlliance.death,
            name: "Legion of Night"
        },
        theWraithFleet: {
            id: "theWraithFleet",
            grandAlliance: GrandAlliance.death,
            name: "The Wraith Fleet"
        },
        legionsOfNagash: {
            id: "legionsOfNagash",
            grandAlliance: GrandAlliance.death,
            name: "Legions of Nagash"
        },
    };
    
    units = {
        centigorWarhoof: {
            id: "centigorWarhoof",
            model: this.models.centigorWarhoof,
            factions: [this.factions.BEASTMEN],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        beastlordOnChariot: {
            id: "beastlordOnChariot",
            model: this.models.beastlordOnChariot,
            factions: [this.factions.BEASTMEN],
            size: 1,
            points: 180,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        wargorStandardBearer: {
            id: "wargorStandardBearer",
            model: this.models.wargorStandardBearer,
            factions: [this.factions.BEASTMEN],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        beastlord: {
            id: "beastlord",
            model: this.models.beastlord,
            factions: [this.factions.BRAYHERD],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Brayherd",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-beastlord-en.pdf",
            weaponOptions: [{ options: [{ name: "Man-ripper Axe & Brayshield", id: "manRipperAxeBrayshield" },{ name: "Pair of Man-ripper Axes", id: "pairOfManRipperAxes" },{ name: "Man-render Great Axe", id: "manRenderGreatAxe" }] }],
            isLeader: () => true,
        },
        bestigors: {
            id: "bestigors",
            model: this.models.bestigors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            points: 140,
            type: "unit",
            subType: "Brayherd - Brayherd Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bestigors-en.pdf",
            isBattleline: () => true,
        },
        greatBrayShaman: {
            id: "greatBrayShaman",
            model: this.models.greatBrayShaman,
            factions: [this.factions.BRAYHERD],
            size: 1,
            points: 90,
            type: "hero",
            subType: "Brayherd",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-great-bray-shaman-en.pdf",
            isLeader: () => true,
        },
        tuskgorChariots: {
            id: "tuskgorChariots",
            model: this.models.tuskgorChariots,
            factions: [this.factions.BRAYHERD],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Brayherd",
            wounds: 6,
            maxSize: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tuskgor-chariot-en.pdf",
        },
        gors: {
            id: "gors",
            model: this.models.gors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Brayherd - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 210,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gors-en.pdf",
            weaponOptions: [{ options: [{ name: "Gor-Blades & Beastshields", id: "gorBladesBeastshields" },{ name: "Two Gor-Blades", id: "twoGorBlades" }] }],
            isBattleline: () => true,
        },
        ungors: {
            id: "ungors",
            model: this.models.ungors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            points: 60,
            type: "unit",
            subType: "Brayherd - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 200,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ungors-en.pdf",
            weaponOptions: [{ options: [{ name: "Mauls & Half-Shields", id: "maulsHalfShields" },{ name: "Shortspears & Half-Shields", id: "shortspearsHalfShields" }] }],
            isBattleline: () => true,
        },
        ungorRaiders: {
            id: "ungorRaiders",
            model: this.models.ungorRaiders,
            factions: [this.factions.BRAYHERD],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Brayherd - Brayherd Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            isBattleline: () => true,
        },
        bloodThrone: {
            id: "bloodThrone",
            model: this.models.bloodThrone,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Khorne Daemon",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodthrone-en.pdf",
            isLeader: () => true,
        },
        bloodmasterHeraldOfKhorne: {
            id: "bloodmasterHeraldOfKhorne",
            model: this.models.bloodmasterHeraldOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Daemon",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodmaster-en.pdf",
            isLeader: () => true,
        },
        karanak: {
            id: "karanak",
            model: this.models.karanak,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Daemon",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-karanak-en.pdf",
            isLeader: () => true,
        },
        skullmasterHeraldOfKhorne: {
            id: "skullmasterHeraldOfKhorne",
            model: this.models.skullmasterHeraldOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Daemon",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullmaster-en.pdf",
            isLeader: () => true,
        },
        skulltaker: {
            id: "skulltaker",
            model: this.models.skulltaker,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Daemon",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skulltaker-en.pdf",
            isLeader: () => true,
        },
        skullCannons: {
            id: "skullCannons",
            model: this.models.skullCannons,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 160,
            type: "unit",
            subType: "Khorne Daemon - Artillery",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-skullcannon-en.pdf",
            isArtillery: () => true,
        },
        bloodletters: {
            id: "bloodletters",
            model: this.models.bloodletters,
            factions: [this.factions.KHORNEDAEMONS],
            size: 10,
            points: 110,
            type: "unit",
            subType: "Khorne Daemon - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 270,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodletters-en.pdf",
            isBattleline: () => true,
        },
        bloodthirsterOfInsensateRage: {
            id: "bloodthirsterOfInsensateRage",
            model: this.models.bloodthirsterOfInsensateRage,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 14,
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodthirsterOfUnfetteredFury: {
            id: "bloodthirsterOfUnfetteredFury",
            model: this.models.bloodthirsterOfUnfetteredFury,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-khorne-bloodthirster-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        skarbrand: {
            id: "skarbrand",
            model: this.models.skarbrand,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 400,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scarbrand-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        wrathOfKhorneBloodthirster: {
            id: "wrathOfKhorneBloodthirster",
            model: this.models.wrathOfKhorneBloodthirster,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 330,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 14,
            isLeader: () => true,
            isBehemot: () => true,
        },
        fleshHounds: {
            id: "fleshHounds",
            model: this.models.fleshHounds,
            factions: [this.factions.KHORNEDAEMONS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Khorne Daemon - Khorne Daemon Battleline (Karanak General)",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-flesh-hounds-en.pdf",
            isBattleline: () => true,
        },
        bloodcrushers: {
            id: "bloodcrushers",
            model: this.models.bloodcrushers,
            factions: [this.factions.KHORNEDAEMONS],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Khorne Daemon - Khorne Daemon Battleline (Skullmaster Herald of Khorne General)",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodcrushers-en.pdf",
            isBattleline: () => true,
        },
        screamersOfTzeentch: {
            id: "screamersOfTzeentch",
            model: this.models.screamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Tzeentch Daemon",
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-screamers-of-tzeentch-en.pdf",
        },
        pinkHorrorsOfTzeentch: {
            id: "pinkHorrorsOfTzeentch",
            model: this.models.pinkHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Tzeentch Daemon - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 300,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-pink-horrors-of-tzeentch-en.pdf",
            isBattleline: () => true,
        },
        burningChariotsOfTzeentch: {
            id: "burningChariotsOfTzeentch",
            model: this.models.burningChariotsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 160,
            type: "unit",
            subType: "Tzeentch Daemon - Tzeentch Daemon Battleline (Herald on Chariot General)",
            wounds: 6,
            maxSize: 3,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-burning-chariot-of-tzeentch-en.pdf",
            isBattleline: () => true,
        },
        heraldOfTzeentch: {
            id: "heraldOfTzeentch",
            model: this.models.heraldOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Staff of Change", id: "staffOfChange" },{ name: "Ritual Dagger", id: "ritualDagger" }] }],
            isLeader: () => true,
        },
        heraldOfTzeentchOnBurningChariot: {
            id: "heraldOfTzeentchOnBurningChariot",
            model: this.models.heraldOfTzeentchOnBurningChariot,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-tzeentch-burning-chariot-en.pdf",
            weaponOptions: [{ options: [{ name: "Staff of Change", id: "staffOfChange" },{ name: "Ritual Dagger", id: "ritualDagger" }] }],
            isLeader: () => true,
        },
        heraldOfTzeentchOnDisc: {
            id: "heraldOfTzeentchOnDisc",
            model: this.models.heraldOfTzeentchOnDisc,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-tzeentch-disc-en.pdf",
            weaponOptions: [{ options: [{ name: "Staff of Change", id: "staffOfChange" },{ name: "Ritual Dagger", id: "ritualDagger" }] }],
            isLeader: () => true,
        },
        theBlueScribes: {
            id: "theBlueScribes",
            model: this.models.theBlueScribes,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique ",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-blue-scribes-en.pdf",
            isLeader: () => true,
        },
        theChangeling: {
            id: "theChangeling",
            model: this.models.theChangeling,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique ",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-changeling-en.pdf",
            isLeader: () => true,
        },
        blueHorrorsOfTzeentch: {
            id: "blueHorrorsOfTzeentch",
            model: this.models.blueHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            points: 50,
            type: "unit",
            subType: "Tzeentch Daemons",
            wounds: 1,
            maxSize: 30,
            maxPoints: 120,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-blue-horrors-en.pdf",
        },
        brimstoneHorrorsOfTzeentch: {
            id: "brimstoneHorrorsOfTzeentch",
            model: this.models.brimstoneHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            points: 40,
            type: "unit",
            subType: "Tzeentch Daemons",
            wounds: 1,
            maxSize: 30,
            maxPoints: 100,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-brimstone-horrors-en.pdf",
        },
        skaaracTheBloodborn: {
            id: "skaaracTheBloodborn",
            model: this.models.skaaracTheBloodborn,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 500,
            type: "hero",
            subType: "Khorne - Unique Behemoth",
            wounds: 16,
            isLeader: () => true,
            isBehemot: () => true,
        },
        khorgoraths: {
            id: "khorgoraths",
            model: this.models.khorgoraths,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Khorne Bloodbound",
            wounds: 8,
            maxSize: 6,
        },
        aspiringDeathbringer: {
            id: "aspiringDeathbringer",
            model: this.models.aspiringDeathbringer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-aspiringdeathbringer-en.pdf",
            weaponOptions: [{ options: [{ name: "Bloodaxe and Wrath Hammer", id: "bloodaxeAndWrathHammer" },{ name: "Goreaxe and Skullhammer", id: "goreaxeAndSkullhammer" }] }],
            isLeader: () => true,
        },
        aspiringDeathbringerWithGoreaxeAndSkullhammer: {
            id: "aspiringDeathbringerWithGoreaxeAndSkullhammer",
            model: this.models.aspiringDeathbringerWithGoreaxeAndSkullhammer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-aspiringdeathbringer-goreaxe-en.pdf",
            isLeader: () => true,
        },
        bloodsecrator: {
            id: "bloodsecrator",
            model: this.models.bloodsecrator,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads/Korghos_Bloodsecrator_CB_Web%20-%20cropped.pdf",
            isLeader: () => true,
        },
        bloodstoker: {
            id: "bloodstoker",
            model: this.models.bloodstoker,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            isLeader: () => true,
        },
        exaltedDeathbringer: {
            id: "exaltedDeathbringer",
            model: this.models.exaltedDeathbringer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalteddeathbringer-en.pdf",
            weaponOptions: [{ options: [{ name: "Ruinous Axe & Skullgouger", id: "ruinousAxeSkullgouger" },{ name: "Bloodbite Axe & Shield", id: "bloodbiteAxeShield" }] }],
            isLeader: () => true,
        },
        exaltedDeathbringerWithImpalingSpear: {
            id: "exaltedDeathbringerWithImpalingSpear",
            model: this.models.exaltedDeathbringerWithImpalingSpear,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalteddeathbringer-impaling-en.pdf",
            isLeader: () => true,
        },
        lordOfKhorneOnJuggernaut: {
            id: "lordOfKhorneOnJuggernaut",
            model: this.models.lordOfKhorneOnJuggernaut,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lordjuggernaught-en.pdf",
            isLeader: () => true,
        },
        mightyLordOfKhorne: {
            id: "mightyLordOfKhorne",
            model: this.models.mightyLordOfKhorne,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 6,
            isLeader: () => true,
        },
        skullgrinder: {
            id: "skullgrinder",
            model: this.models.skullgrinder,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullgrinder-en.pdf",
            isLeader: () => true,
        },
        slaughterpriest: {
            id: "slaughterpriest",
            model: this.models.slaughterpriest,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterpriest-en.pdf",
            isLeader: () => true,
        },
        slaughterpriestWithHackbladeAndWrathhammer: {
            id: "slaughterpriestWithHackbladeAndWrathhammer",
            model: this.models.slaughterpriestWithHackbladeAndWrathhammer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterpriest-hackblade-en.pdf",
            isLeader: () => true,
        },
        bloodWarriors: {
            id: "bloodWarriors",
            model: this.models.bloodWarriors,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 520,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodwarriors-en.pdf",
            weaponOptions: [{ options: [{ name: "Goreaxes", id: "goreaxes" },{ name: "Goreaxe & Gorefist", id: "goreaxeGorefist" }] }],
            isBattleline: () => true,
        },
        bloodreavers: {
            id: "bloodreavers",
            model: this.models.bloodreavers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 10,
            points: 70,
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 240,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodreavers-en.pdf",
            weaponOptions: [{ options: [{ name: "Reaver Blades", id: "reaverBlades" },{ name: "Meatripper Axes", id: "meatripperAxes" }] }],
            isBattleline: () => true,
        },
        mightySkullcrushers: {
            id: "mightySkullcrushers",
            model: this.models.mightySkullcrushers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Khorne Bloodbound Battleline (Lord of Khorne on Juggernaut General)",
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullcrushers-en.pdf",
            weaponOptions: [{ options: [{ name: "Ensorcelled Axes", id: "ensorcelledAxes" },{ name: "Bloodglaives", id: "bloodglaives" },{ name: "Axes", id: "axes" },{ name: "Glaives", id: "glaives" }] }],
            isBattleline: () => true,
        },
        scylaAnfingrimm: {
            id: "scylaAnfingrimm",
            model: this.models.scylaAnfingrimm,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scylaanfingrimm-en.pdf",
            isLeader: () => true,
        },
        skarrBloodwrath: {
            id: "skarrBloodwrath",
            model: this.models.skarrBloodwrath,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skarrbloodwrath-en.pdf",
            isLeader: () => true,
        },
        valkiaTheBloody: {
            id: "valkiaTheBloody",
            model: this.models.valkiaTheBloody,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-valkiathebloody-en.pdf",
            isLeader: () => true,
        },
        skullreapers: {
            id: "skullreapers",
            model: this.models.skullreapers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            points: 180,
            type: "unit",
            subType: "Khorne Mortal Bloodbound",
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullreapers-en.pdf",
            weaponOptions: [{ options: [{ name: "Goreslick Blades", id: "goreslickBlades" },{ name: "Daemonblades", id: "daemonblades" }] }],
        },
        wrathmongers: {
            id: "wrathmongers",
            model: this.models.wrathmongers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            points: 180,
            type: "unit",
            subType: "Khorne Mortal Bloodbound",
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-wrathmongers-en.pdf",
        },
        jabberslythe: {
            id: "jabberslythe",
            model: this.models.jabberslythe,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 120,
            type: "monster",
            subType: "Behemoth",
            wounds: 10,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-jabberslythe-en.pdf",
            isBehemot: () => true,
        },
        centigors: {
            id: "centigors",
            model: this.models.centigors,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 5,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-centigors-en.pdf",
        },
        chaosWarhounds: {
            id: "chaosWarhounds",
            model: this.models.chaosWarhounds,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 10,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            maxPoints: 210,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-warhounds-en.pdf",
        },
        harpies: {
            id: "harpies",
            model: this.models.harpies,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 5,
            points: 70,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 20,
        },
        razorgors: {
            id: "razorgors",
            model: this.models.razorgors,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 60,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-razorgor-en.pdf",
        },
        tzaangorEnlightened: {
            id: "tzaangorEnlightened",
            model: this.models.tzaangorEnlightened,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Tzeentch Arcanites",
            wounds: 3,
            maxSize: 9,
        },
        tzaangors: {
            id: "tzaangors",
            model: this.models.tzaangors,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Tzeentch Arcanites - Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 450,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangors-en.pdf",
            isBattleline: () => true,
        },
        tzaangorEnlightenedOnDisc: {
            id: "tzaangorEnlightenedOnDisc",
            model: this.models.tzaangorEnlightenedOnDisc,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Tzeentch Arcanites Daemon",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-enlightened-en.pdf",
        },
        tzaangorSkyfires: {
            id: "tzaangorSkyfires",
            model: this.models.tzaangorSkyfires,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            points: 200,
            type: "unit",
            subType: "Tzeentch Arcanites Daemon",
            wounds: 4,
            maxSize: 9,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-skyfires-en.pdf",
        },
        tzaangorShaman: {
            id: "tzaangorShaman",
            model: this.models.tzaangorShaman,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Tzeentch Arcanites Daemon Wizard",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-shaman-en.pdf",
            isLeader: () => true,
        },
        kairicAcolytes: {
            id: "kairicAcolytes",
            model: this.models.kairicAcolytes,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Tzeentch Arcanites Mortal - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kairic-acolytes-en.pdf",
            isBattleline: () => true,
        },
        fatemaster: {
            id: "fatemaster",
            model: this.models.fatemaster,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Daemon",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fatemaster-en.pdf",
            isLeader: () => true,
        },
        gauntSummoner: {
            id: "gauntSummoner",
            model: this.models.gauntSummoner,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Daemon Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gaunt-summoner-2016-en.pdf",
            isLeader: () => true,
        },
        curselingEyeOfTzeentch: {
            id: "curselingEyeOfTzeentch",
            model: this.models.curselingEyeOfTzeentch,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cursling-eye-of-tzeentch-en.pdf",
            isLeader: () => true,
        },
        magister: {
            id: "magister",
            model: this.models.magister,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-arcanites-magister-en.pdf",
            isLeader: () => true,
        },
        ogroidThaumaturge: {
            id: "ogroidThaumaturge",
            model: this.models.ogroidThaumaturge,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogroid-thaumaturge-en.pdf",
            isLeader: () => true,
        },
        doombull: {
            id: "doombull",
            model: this.models.doombull,
            factions: [this.factions.WARHERD],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Warherd",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-doombull-en.pdf",
            weaponOptions: [{ options: [{ name: "Pair of Axes", id: "pairOfAxes" },{ name: "Axe & Shield", id: "axeShield" },{ name: "Great Axe", id: "greatAxe" }] }],
            isLeader: () => true,
        },
        cygor: {
            id: "cygor",
            model: this.models.cygor,
            factions: [this.factions.WARHERD],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Warherd - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cygor-en.pdf",
            isBehemot: () => true,
        },
        ghorgon: {
            id: "ghorgon",
            model: this.models.ghorgon,
            factions: [this.factions.WARHERD],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Warherd - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ghorgon-en.pdf",
            isBehemot: () => true,
        },
        bullgors: {
            id: "bullgors",
            model: this.models.bullgors,
            factions: [this.factions.WARHERD],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Warherd - Warherd Battleline",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bullgors-en.pdf",
            weaponOptions: [{ options: [{ name: "Pairs of Axes", id: "pairsOfAxes" },{ name: "Axes & Bullshields", id: "axesBullshields" },{ name: "Great Axes", id: "greatAxes" }] }],
            isBattleline: () => true,
        },
        hellcannon: {
            id: "hellcannon",
            model: this.models.hellcannon,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            points: 300,
            type: "warmachine",
            subType: "Artillery",
            wounds: 10,
            isArtillery: () => true,
        },
        daemonettesOfSlaanesh: {
            id: "daemonettesOfSlaanesh",
            model: this.models.daemonettesOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 270,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-daemonettes-of-slaanesh-en.pdf",
            isBattleline: () => true,
        },
        mutalithVortexBeast: {
            id: "mutalithVortexBeast",
            model: this.models.mutalithVortexBeast,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Tzeentch - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-mutalith-vortex-beast-en.pdf",
            isBehemot: () => true,
        },
        slaughterbrute: {
            id: "slaughterbrute",
            model: this.models.slaughterbrute,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Khorne - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterbrute-en.pdf",
            isBehemot: () => true,
        },
        furies: {
            id: "furies",
            model: this.models.furies,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Chaos Daemon",
            wounds: 1,
            maxSize: 30,
            maxPoints: 320,
        },
        daemonPrince: {
            id: "daemonPrince",
            model: this.models.daemonPrince,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Chaos Daemon - Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            weaponOptions: [{ options: [{ name: "Axe", id: "axe" },{ name: "Sword", id: "sword" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        soulGrinder: {
            id: "soulGrinder",
            model: this.models.soulGrinder,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Chaos Daemon - Behemoth",
            wounds: 16,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-soul-grinder-en.pdf",
            isBehemot: () => true,
        },
        beLakorChaosDaemonPrince: {
            id: "beLakorChaosDaemonPrince",
            model: this.models.beLakorChaosDaemonPrince,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Chaos Daemon - Unique Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-belakor-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        fiendsOfSlaanesh: {
            id: "fiendsOfSlaanesh",
            model: this.models.fiendsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Slaanesh",
            wounds: 4,
            maxSize: 9,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fiend-of-slaanesh-en.pdf",
        },
        heraldOfSlaanesh: {
            id: "heraldOfSlaanesh",
            model: this.models.heraldOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 60,
            type: "hero",
            subType: "Slaanesh",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-of-slaanesh-en.pdf",
            isLeader: () => true,
        },
        heraldOfSlaaneshOnExaltedSeekerChariot: {
            id: "heraldOfSlaaneshOnExaltedSeekerChariot",
            model: this.models.heraldOfSlaaneshOnExaltedSeekerChariot,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Slaanesh",
            wounds: 9,
            isLeader: () => true,
        },
        heraldOfSlaaneshOnSeekerChariot: {
            id: "heraldOfSlaaneshOnSeekerChariot",
            model: this.models.heraldOfSlaaneshOnSeekerChariot,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Slaanesh",
            wounds: 5,
            isLeader: () => true,
        },
        seekerChariotsOfSlaanesh: {
            id: "seekerChariotsOfSlaanesh",
            model: this.models.seekerChariotsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Slaanesh - Slaanesh Battleline (Herald of Slaanesh on Exalted Seeker Chariot General)",
            wounds: 6,
            maxSize: 3,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-seeker-chariot-of-slaanesh-en.pdf",
            isBattleline: () => true,
        },
        seekersOfSlaanesh: {
            id: "seekersOfSlaanesh",
            model: this.models.seekersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 5,
            points: 120,
            type: "unit",
            subType: "Slaanesh",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-seekers-of-slaanesh-en.pdf",
        },
        keeperOfSecrets: {
            id: "keeperOfSecrets",
            model: this.models.keeperOfSecrets,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Slaanesh - Behemoth",
            wounds: 10,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-keeper-of-secrets-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        theMasqueOfSlaanesh: {
            id: "theMasqueOfSlaanesh",
            model: this.models.theMasqueOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Slaanesh - Unique ",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-masque-of-slaanesh-en.pdf",
            isLeader: () => true,
        },
        beastsOfNurgle: {
            id: "beastsOfNurgle",
            model: this.models.beastsOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Nurgle Daemon",
            wounds: 7,
            maxSize: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Beasts-of-nurgle.pdf",
        },
        poxbringerHeraldOfNurgle: {
            id: "poxbringerHeraldOfNurgle",
            model: this.models.poxbringerHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Nurgle Daemon Wizard",
            wounds: 5,
            isLeader: () => true,
        },
        spoilpoxScrivenerHeraldOfNurgle: {
            id: "spoilpoxScrivenerHeraldOfNurgle",
            model: this.models.spoilpoxScrivenerHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Nurgle Daemon",
            wounds: 5,
            isLeader: () => true,
        },
        sloppityBilepiperHeraldOfNurgle: {
            id: "sloppityBilepiperHeraldOfNurgle",
            model: this.models.sloppityBilepiperHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Nurgle Daemon",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Sloppity-bilepiper-herald-of-nurgle.pdf",
            isLeader: () => true,
        },
        nurglings: {
            id: "nurglings",
            model: this.models.nurglings,
            factions: [this.factions.NURGLEDAEMONS],
            size: 3,
            points: 100,
            type: "unit",
            subType: "Nurgle Daemon",
            wounds: 4,
            maxSize: 12,
        },
        plagueDrones: {
            id: "plagueDrones",
            model: this.models.plagueDrones,
            factions: [this.factions.NURGLEDAEMONS],
            size: 3,
            points: 200,
            type: "unit",
            subType: "Nurgle Daemon",
            wounds: 5,
            maxSize: 12,
        },
        plaguebearers: {
            id: "plaguebearers",
            model: this.models.plaguebearers,
            factions: [this.factions.NURGLEDAEMONS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Nurgle Daemon - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 320,
            isBattleline: () => true,
        },
        daemonPrinceOfNurgle: {
            id: "daemonPrinceOfNurgle",
            model: this.models.daemonPrinceOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Nurgle Daemon - Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        greatUncleanOne: {
            id: "greatUncleanOne",
            model: this.models.greatUncleanOne,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Nurgle Daemon Wizard - Behemoth",
            wounds: 16,
            isLeader: () => true,
            isBehemot: () => true,
        },
        rotigus: {
            id: "rotigus",
            model: this.models.rotigus,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Nurgle Daemon Wizard - Unique Behemoth",
            wounds: 16,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Rotigus.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        epidemiusTallymanOfNurgle: {
            id: "epidemiusTallymanOfNurgle",
            model: this.models.epidemiusTallymanOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Nurgle Daemon - Unique ",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-epidemius-en.pdf",
            isLeader: () => true,
        },
        daemonPrinceOfSlaanesh: {
            id: "daemonPrinceOfSlaanesh",
            model: this.models.daemonPrinceOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Slaanesh Daemon - Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedFlamersOfTzeentch: {
            id: "exaltedFlamersOfTzeentch",
            model: this.models.exaltedFlamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 120,
            type: "unit",
            subType: "Tzeentch Daemon",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalted-flamer-of-tzeentch-en.pdf",
        },
        flamersOfTzeentch: {
            id: "flamersOfTzeentch",
            model: this.models.flamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Tzeentch Daemon",
            wounds: 2,
            maxSize: 12,
        },
        daemonPrinceOfTzeentch: {
            id: "daemonPrinceOfTzeentch",
            model: this.models.daemonPrinceOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        kairosFateweaver: {
            id: "kairosFateweaver",
            model: this.models.kairosFateweaver,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kairos-fateweaver-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        festusTheLeechlord: {
            id: "festusTheLeechlord",
            model: this.models.festusTheLeechlord,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique ",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-festus-the-leechlord-en.pdf",
            isLeader: () => true,
        },
        gutrotSpume: {
            id: "gutrotSpume",
            model: this.models.gutrotSpume,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique ",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gutrot-spume-en.pdf",
            isLeader: () => true,
        },
        theGlottkin: {
            id: "theGlottkin",
            model: this.models.theGlottkin,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 420,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth",
            wounds: 18,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-theglottkin-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedSeekerChariotsOfSlaanesh: {
            id: "exaltedSeekerChariotsOfSlaanesh",
            model: this.models.exaltedSeekerChariotsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 9,
            maxSize: 3,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalted-seeker-chariot-en.pdf",
        },
        lordOfPlagues: {
            id: "lordOfPlagues",
            model: this.models.lordOfPlagues,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-of-plagues-en.pdf",
            isLeader: () => true,
        },
        lordOfBlights: {
            id: "lordOfBlights",
            model: this.models.lordOfBlights,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Lord-of-blights.pdf",
            isLeader: () => true,
        },
        lordOfChange: {
            id: "lordOfChange",
            model: this.models.lordOfChange,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-of-change-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        reaperBoltThrower: {
            id: "reaperBoltThrower",
            model: this.models.reaperBoltThrower,
            factions: [this.factions.EXILES],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        blackGuard: {
            id: "blackGuard",
            model: this.models.blackGuard,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            points: 160,
            type: "unit",
            subType: "Darkling Covens - Darkling Covens Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 430,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-guard-en.pdf",
            isBattleline: () => true,
        },
        executioners: {
            id: "executioners",
            model: this.models.executioners,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Darkling Covens - Darkling Covens Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-executioners-en.pdf",
            isBattleline: () => true,
        },
        sorceress: {
            id: "sorceress",
            model: this.models.sorceress,
            factions: [this.factions.DARKLINGCOVENS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Darkling Covens",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sorceress-en.pdf",
            isLeader: () => true,
        },
        bleakswords: {
            id: "bleakswords",
            model: this.models.bleakswords,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Darkling Covens - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bleakswords-en.pdf",
            isBattleline: () => true,
        },
        darkshards: {
            id: "darkshards",
            model: this.models.darkshards,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Darkling Covens - Battleline",
            wounds: 1,
            maxSize: 40,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-darkshards-en.pdf",
            isBattleline: () => true,
        },
        dreadspears: {
            id: "dreadspears",
            model: this.models.dreadspears,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Darkling Covens - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dreadspears-en.pdf",
            isBattleline: () => true,
        },
        sorceressOnBlackDragon: {
            id: "sorceressOnBlackDragon",
            model: this.models.sorceressOnBlackDragon,
            factions: [this.factions.DARKLINGCOVENS],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Darkling Covens - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sorceress-black-dragon-en.pdf",
            weaponOptions: [{ options: [{ name: "Witch Rod", id: "witchRod" },{ name: "Sword of Ghrond", id: "swordOfGhrond" },{ name: "Witch Rod", id: "witchRod" },{ name: "Darkling Sword", id: "darklingSword" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodwrackMedusa: {
            id: "bloodwrackMedusa",
            model: this.models.bloodwrackMedusa,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Daughters of Khaine Wizard",
            wounds: 6,
            isLeader: () => true,
        },
        hagQueen: {
            id: "hagQueen",
            model: this.models.hagQueen,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 60,
            type: "hero",
            subType: "Daughters of Khaine Priest",
            wounds: 5,
            isLeader: () => true,
        },
        slaughterQueen: {
            id: "slaughterQueen",
            model: this.models.slaughterQueen,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Daughters of Khaine Priest",
            wounds: 5,
            isLeader: () => true,
        },
        doomfireWarlocks: {
            id: "doomfireWarlocks",
            model: this.models.doomfireWarlocks,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Daughters of Khaine Wizard",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-doomfire-warlocks-en.pdf",
        },
        sistersOfSlaughter: {
            id: "sistersOfSlaughter",
            model: this.models.sistersOfSlaughter,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Daughters of Khaine - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 300,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sisters-slaughter-en.pdf",
            weaponOptions: [{ options: [{ name: "Pairs of Sacrificial Knives", id: "pairsOfSacrificialKnives" },{ name: "Sacrificial Knives and Blade Bucklers", id: "sacrificialKnivesAndBladeBucklers" }] }],
            isBattleline: () => true,
        },
        bloodwrackShrine: {
            id: "bloodwrackShrine",
            model: this.models.bloodwrackShrine,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Daughters of Khaine Wizard - Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodwrack-shrine-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        hagQueenOnCauldronOfBlood: {
            id: "hagQueenOnCauldronOfBlood",
            model: this.models.hagQueenOnCauldronOfBlood,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Daughters of Khaine Priest Totem - Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-caludron-blood-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        slaughterQueenOnCauldronOfBlood: {
            id: "slaughterQueenOnCauldronOfBlood",
            model: this.models.slaughterQueenOnCauldronOfBlood,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 330,
            type: "hero",
            subType: "Daughters of Khaine Priest Totem - Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-caludron-blood-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        witchAelves: {
            id: "witchAelves",
            model: this.models.witchAelves,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Daughters of Khaine - Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 270,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-witch-aelves-en.pdf",
            weaponOptions: [{ options: [{ name: "Pairs of Sacrificial Knives", id: "pairsOfSacrificialKnives" },{ name: "Sacrificial Knives and Blade Bucklers", id: "sacrificialKnivesAndBladeBucklers" }] }],
            isBattleline: () => true,
        },
        bloodStalkers: {
            id: "bloodStalkers",
            model: this.models.bloodStalkers,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Daughters of Khaine",
            wounds: 2,
            maxSize: 20,
        },
        bloodSisters: {
            id: "bloodSisters",
            model: this.models.bloodSisters,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline (Bloodwrack Medusa General)",
            wounds: 2,
            maxSize: 20,
            maxPoints: 480,
            isBattleline: () => true,
        },
        khineraiHeartrenders: {
            id: "khineraiHeartrenders",
            model: this.models.khineraiHeartrenders,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Daughters of Khaine",
            wounds: 1,
            maxSize: 20,
        },
        khineraiLifetakers: {
            id: "khineraiLifetakers",
            model: this.models.khineraiLifetakers,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Daughters of Khaine",
            wounds: 1,
            maxSize: 20,
            maxPoints: 280,
        },
        avatarOfKhaine: {
            id: "avatarOfKhaine",
            model: this.models.avatarOfKhaine,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Daughters of Khaine Totem - Behemoth",
            wounds: 9,
            isBehemot: () => true,
        },
        morathiHighOracleOfKhaine: {
            id: "morathiHighOracleOfKhaine",
            model: this.models.morathiHighOracleOfKhaine,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 480,
            type: "hero",
            subType: "Daughters of Khaine Wizard - Unique",
            wounds: 6,
            isLeader: () => true,
        },
        drakespawnChariots: {
            id: "drakespawnChariots",
            model: this.models.drakespawnChariots,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Order Serpentis - Order Serpentis Battleline",
            wounds: 6,
            maxSize: 3,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-drakespawn-chariots-en.pdf",
            isBattleline: () => true,
        },
        warHydra: {
            id: "warHydra",
            model: this.models.warHydra,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Order Serpentis  - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-war-hydra-en.pdf",
            isBehemot: () => true,
        },
        dreadlordOnBlackDragon: {
            id: "dreadlordOnBlackDragon",
            model: this.models.dreadlordOnBlackDragon,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Order Serpentis - Behemoth",
            wounds: 14,
            weaponOptions: [{ options: [{ name: "Exile Blade & Shield", id: "exileBladeShield" },{ name: "Exile Blade & Repeater Crossbow", id: "exileBladeRepeaterCrossbow" },{ name: "Lance of Spite & Shield", id: "lanceOfSpiteShield" },{ name: "Lance of Spite & Repeater Crossbow", id: "lanceOfSpiteRepeaterCrossbow" },{ name: "Exile Blades", id: "exileBlades" },{ name: "Exile Blade & Tyrant Shield", id: "exileBladeTyrantShield" },{ name: "Exile Blade & Repeater Crossbow", id: "exileBladeRepeaterCrossbow" },{ name: "Lance of Spite & Tyrant Shield", id: "lanceOfSpiteTyrantShield" },{ name: "Lance of Spite & Repeater Crossbow", id: "lanceOfSpiteRepeaterCrossbow" },{ name: "Exile Blades", id: "exileBlades" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        drakespawnKnights: {
            id: "drakespawnKnights",
            model: this.models.drakespawnKnights,
            factions: [this.factions.ORDERSERPENTIS],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Order Serpentis - Order Serpentis Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-drakespawn-knights-en.pdf",
            isBattleline: () => true,
        },
        blackArkFleetmaster: {
            id: "blackArkFleetmaster",
            model: this.models.blackArkFleetmaster,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            points: 40,
            type: "hero",
            subType: "Scourge Privateers",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-ark-fleetmaster-en.pdf",
            isLeader: () => true,
        },
        scourgerunnerChariots: {
            id: "scourgerunnerChariots",
            model: this.models.scourgerunnerChariots,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Scourge Privateers - Scourge Privateers Battleline",
            wounds: 6,
            maxSize: 3,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scourgerunner-chariot-en.pdf",
            isBattleline: () => true,
        },
        kharibdyss: {
            id: "kharibdyss",
            model: this.models.kharibdyss,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Scourge Privateers - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kharibdyss-en.pdf",
            isBehemot: () => true,
        },
        blackArkCorsairs: {
            id: "blackArkCorsairs",
            model: this.models.blackArkCorsairs,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Scourge Privateers - Scourge Privateers Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 260,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-ark-corsairs-en.pdf",
            weaponOptions: [{ options: [{ name: "Vicious Blade & Repeater Handbow", id: "viciousBladeRepeaterHandbow" },{ name: "Vicious Blade & Wicked Cutlass", id: "viciousBladeWickedCutlass" },{ name: "Vicious Blades & Repeater Handbows", id: "viciousBladesRepeaterHandbows" },{ name: "Vicious Blades & Wicked Cutlasses", id: "viciousBladesWickedCutlasses" }] }],
            isBattleline: () => true,
        },
        assassin: {
            id: "assassin",
            model: this.models.assassin,
            factions: [this.factions.SHADOWBLADES],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Shadowblades",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-shadowblade-assassin-en.pdf",
            isLeader: () => true,
        },
        darkRiders: {
            id: "darkRiders",
            model: this.models.darkRiders,
            factions: [this.factions.SHADOWBLADES],
            size: 5,
            points: 120,
            type: "unit",
            subType: "Shadowblades - Shadowblades Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dark-riders-en.pdf",
            isBattleline: () => true,
        },
        sorceressOnDarkPegasus: {
            id: "sorceressOnDarkPegasus",
            model: this.models.sorceressOnDarkPegasus,
            factions: [this.factions.EXILES],
            size: 1,
            points: 220,
            type: "hero",
            subType: undefined,
            wounds: 6,
            isLeader: () => true,
        },
        beastmasterOnManticore: {
            id: "beastmasterOnManticore",
            model: this.models.beastmasterOnManticore,
            factions: [this.factions.EXILES],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 10,
            isLeader: () => true,
        },
        dreadlord: {
            id: "dreadlord",
            model: this.models.dreadlord,
            factions: [this.factions.EXILES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Exile Blades", id: "exileBlades" },{ name: "Exile Blade & Tyrant Shield", id: "exileBladeTyrantShield" },{ name: "Chillblade", id: "chillblade" },{ name: "Exile Blades", id: "exileBlades" },{ name: "Exile Blade & Tyrant Shield", id: "exileBladeTyrantShield" },{ name: "Chillblade", id: "chillblade" }] }],
            isLeader: () => true,
        },
        dreadlordOnDrakespawn: {
            id: "dreadlordOnDrakespawn",
            model: this.models.dreadlordOnDrakespawn,
            factions: [this.factions.EXILES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 6,
            isLeader: () => true,
        },
        masterWithBattleStandard: {
            id: "masterWithBattleStandard",
            model: this.models.masterWithBattleStandard,
            factions: [this.factions.EXILES],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        mistweaverSaih: {
            id: "mistweaverSaih",
            model: this.models.mistweaverSaih,
            factions: [this.factions.AELVES],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-mistweaver-saih-en.pdf",
            isLeader: () => true,
        },
        shades: {
            id: "shades",
            model: this.models.shades,
            factions: [this.factions.EXILES],
            size: 5,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 20,
        },
        sorceressOnDrakespawn: {
            id: "sorceressOnDrakespawn",
            model: this.models.sorceressOnDrakespawn,
            factions: [this.factions.EXILES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 6,
            isLeader: () => true,
        },
        tenebraelShard: {
            id: "tenebraelShard",
            model: this.models.tenebraelShard,
            factions: [this.factions.AELVES],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-tenebrael-shard-en.pdf",
            isLeader: () => true,
        },
        corpseCart: {
            id: "corpseCart",
            model: this.models.corpseCart,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Deadwalkers",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-corpse-cart-en.pdf",
        },
        direWolves: {
            id: "direWolves",
            model: this.models.direWolves,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Deadwalkers Summonable - Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 320,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dire-wolves-en.pdf",
            isBattleline: () => true,
        },
        zombies: {
            id: "zombies",
            model: this.models.zombies,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 10,
            points: 60,
            type: "unit",
            subType: "Deadwalkers Summonable - Battleline",
            wounds: 1,
            maxSize: 60,
            maxPoints: 320,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Zombies.pdf",
            isBattleline: () => true,
        },
        morghastArchai: {
            id: "morghastArchai",
            model: this.models.morghastArchai,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 2,
            points: 220,
            type: "unit",
            subType: "Deathlords - Grand Host of Nagash Battleline (Nagash General)",
            wounds: 6,
            maxSize: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Morghast%20Archai.pdf",
            weaponOptions: [{ options: [{ name: "Spirit Swords", id: "spiritSwords" },{ name: "Spirit Halberds", id: "spiritHalberds" }] }],
            isBattleline: () => true,
        },
        morghastHarbingers: {
            id: "morghastHarbingers",
            model: this.models.morghastHarbingers,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 2,
            points: 220,
            type: "unit",
            subType: "Deathlords - Grand Host of Nagash Battleline (Nagash General)",
            wounds: 6,
            maxSize: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Morghast%20Harbingers.pdf",
            weaponOptions: [{ options: [{ name: "Spirit Swords", id: "spiritSwords" },{ name: "Spirit Halberds", id: "spiritHalberds" }] }],
            isBattleline: () => true,
        },
        arkhanTheBlackMortarchOfSacrament: {
            id: "arkhanTheBlackMortarchOfSacrament",
            model: this.models.arkhanTheBlackMortarchOfSacrament,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Deathlords Mortarch Wizard - Unique Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-arkhan-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        mannfredMortarchOfNight: {
            id: "mannfredMortarchOfNight",
            model: this.models.mannfredMortarchOfNight,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 420,
            type: "hero",
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-mannfred-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        nagashSupremeLordOfTheUndead: {
            id: "nagashSupremeLordOfTheUndead",
            model: this.models.nagashSupremeLordOfTheUndead,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 800,
            type: "hero",
            subType: "Deathlords Wizard Priest - Unique Behemoth",
            wounds: 16,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-nagash-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        neferataMortarchOfBlood: {
            id: "neferataMortarchOfBlood",
            model: this.models.neferataMortarchOfBlood,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 400,
            type: "hero",
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-neferata-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        necromancer: {
            id: "necromancer",
            model: this.models.necromancer,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 110,
            type: "hero",
            subType: "Deathmages Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-necromancer-en.pdf",
            isLeader: () => true,
        },
        mortisEngine: {
            id: "mortisEngine",
            model: this.models.mortisEngine,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Deathmages - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-mortis-engine-en.pdf",
            isBehemot: () => true,
        },
        graveGuard: {
            id: "graveGuard",
            model: this.models.graveGuard,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Deathrattle Summonable - Grand Host of Nagash Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 420,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-grave-guard-en.pdf",
            weaponOptions: [{ options: [{ name: "Wight Blades & Crypt Shields", id: "wightBladesCryptShields" },{ name: "Great Wight Blades", id: "greatWightBlades" }] }],
            isBattleline: () => true,
        },
        wightKingWithBalefulTombBlade: {
            id: "wightKingWithBalefulTombBlade",
            model: this.models.wightKingWithBalefulTombBlade,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Deathrattle",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Wight%20King%20with%20Baleful%20Tomb%20Blade.pdf",
            isLeader: () => true,
        },
        wightKingWithBlackAxe: {
            id: "wightKingWithBlackAxe",
            model: this.models.wightKingWithBlackAxe,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Deathrattle",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-wightking-blackaxe-en.pdf",
            isLeader: () => true,
        },
        skeletonWarriors: {
            id: "skeletonWarriors",
            model: this.models.skeletonWarriors,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Deathrattle Summonable - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 280,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skeleton-warriors-en.pdf",
            weaponOptions: [{ options: [{ name: "Ancient Blades", id: "ancientBlades" },{ name: "Ancient Spears", id: "ancientSpears" }] }],
            isBattleline: () => true,
        },
        blackKnights: {
            id: "blackKnights",
            model: this.models.blackKnights,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            points: 120,
            type: "unit",
            subType: "Deathrattle Summonable",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-knights-en.pdf",
        },
        cryptGhouls: {
            id: "cryptGhouls",
            model: this.models.cryptGhouls,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-ghouls-en.pdf",
            isBattleline: () => true,
        },
        abhorrantGhoulKingOnTerrorgheist: {
            id: "abhorrantGhoulKingOnTerrorgheist",
            model: this.models.abhorrantGhoulKingOnTerrorgheist,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 400,
            type: "hero",
            subType: "Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-abhorrant-ghoul-king-terrorgheist-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        abhorrantGhoulKingOnZombieDragon: {
            id: "abhorrantGhoulKingOnZombieDragon",
            model: this.models.abhorrantGhoulKingOnZombieDragon,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 440,
            type: "hero",
            subType: "Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-abhorrant-ghoul-king-zombie-dragon-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        terrorgheist: {
            id: "terrorgheist",
            model: this.models.terrorgheist,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 300,
            type: "monster",
            subType: "Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-terrorgheist-en.pdf",
            isBehemot: () => true,
        },
        zombieDragon: {
            id: "zombieDragon",
            model: this.models.zombieDragon,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            points: 300,
            type: "monster",
            subType: "Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-zombie-dragon-en.pdf",
            isBehemot: () => true,
        },
        cryptHorrors: {
            id: "cryptHorrors",
            model: this.models.cryptHorrors,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Flesh Eater Courts Battleline (Crypt Haunter Courtier General)",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-horrors-en.pdf",
            isBattleline: () => true,
        },
        cryptFlayers: {
            id: "cryptFlayers",
            model: this.models.cryptFlayers,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Flesh Eater Courts Battleline (Crypt Infernal Courtier General)",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-flayers-en.pdf",
            isBattleline: () => true,
        },
        abhorrantGhoulKing: {
            id: "abhorrantGhoulKing",
            model: this.models.abhorrantGhoulKing,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 6,
            isLeader: () => true,
        },
        cryptGhastCourtier: {
            id: "cryptGhastCourtier",
            model: this.models.cryptGhastCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-ghouls-en.pdf",
            isLeader: () => true,
        },
        cryptHaunterCourtier: {
            id: "cryptHaunterCourtier",
            model: this.models.cryptHaunterCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-haunter-courtier-en.pdf",
            isLeader: () => true,
        },
        cryptInfernalCourtier: {
            id: "cryptInfernalCourtier",
            model: this.models.cryptInfernalCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-infernal-courtier-en.pdf",
            isLeader: () => true,
        },
        varghulfCourtier: {
            id: "varghulfCourtier",
            model: this.models.varghulfCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-varghulf-courtier-en.pdf",
            isLeader: () => true,
        },
        batSwarms: {
            id: "batSwarms",
            model: this.models.batSwarms,
            factions: [this.factions.SOULBLIGHT],
            size: 2,
            points: 80,
            type: "unit",
            subType: "Soulblight Summonable",
            wounds: 5,
            maxSize: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bat-swarm-en.pdf",
        },
        fellBats: {
            id: "fellBats",
            model: this.models.fellBats,
            factions: [this.factions.SOULBLIGHT],
            size: 3,
            points: 80,
            type: "unit",
            subType: "Soulblight Summonable",
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fell-bats-en.pdf",
        },
        vampireLord: {
            id: "vampireLord",
            model: this.models.vampireLord,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Soulblight Vampire Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vampire-lord-en.pdf",
            isLeader: () => true,
        },
        vargheists: {
            id: "vargheists",
            model: this.models.vargheists,
            factions: [this.factions.SOULBLIGHT],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Soulblight",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vargheists-en.pdf",
        },
        covenThrone: {
            id: "covenThrone",
            model: this.models.covenThrone,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-coven-throne-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodseekerPalanquin: {
            id: "bloodseekerPalanquin",
            model: this.models.bloodseekerPalanquin,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Bloodseeker%20Palanquin.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        vampireLordOnZombieDragon: {
            id: "vampireLordOnZombieDragon",
            model: this.models.vampireLordOnZombieDragon,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 440,
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vampire-lord-zombiedragon-en.pdf",
            weaponOptions: [{ options: [{ name: "Deathlance", id: "deathlance" },{ name: "Deathlance & Chalice", id: "deathlanceChalice" },{ name: "Deathlance & Shield", id: "deathlanceShield" },{ name: "Deathlance & Shield & Chalice", id: "deathlanceShieldChalice" },{ name: "Vampiric Sword", id: "vampiricSword" },{ name: "Vampiric Sword & Chalice", id: "vampiricSwordChalice" },{ name: "Vampiric Sword & Shield", id: "vampiricSwordShield" },{ name: "Vampiric Sword & Shield & Chalice", id: "vampiricSwordShieldChalice" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        princeVhordrai: {
            id: "princeVhordrai",
            model: this.models.princeVhordrai,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            points: 480,
            type: "hero",
            subType: "Soulblight Vampire Wizard - Unique Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Prince%20Vhordrai.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodKnights: {
            id: "bloodKnights",
            model: this.models.bloodKnights,
            factions: [this.factions.SOULBLIGHT],
            size: 5,
            points: 260,
            type: "unit",
            subType: "Soulblight - Soulblight Battleline",
            wounds: 3,
            maxSize: 15,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-blood-knights-en.pdf",
            isBattleline: () => true,
        },
        blackCoach: {
            id: "blackCoach",
            model: this.models.blackCoach,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            points: 120,
            type: "unit",
            subType: "Nighthaunt",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-coach-en.pdf",
        },
        cairnWraith: {
            id: "cairnWraith",
            model: this.models.cairnWraith,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            points: 60,
            type: "hero",
            subType: "Nighthaunt",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cairn-wraith-en.pdf",
            isLeader: () => true,
        },
        hexwraiths: {
            id: "hexwraiths",
            model: this.models.hexwraiths,
            factions: [this.factions.NIGHTHAUNT],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Nighthaunt Summonable - Nighthaunt Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hexwraiths-en.pdf",
            isBattleline: () => true,
        },
        tombBanshee: {
            id: "tombBanshee",
            model: this.models.tombBanshee,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Nighthaunt",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tomb-banshee-en.pdf",
            isLeader: () => true,
        },
        spiritHosts: {
            id: "spiritHosts",
            model: this.models.spiritHosts,
            factions: [this.factions.NIGHTHAUNT],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Nighthaunt Summonable - Nighthaunt Battleline",
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-nighthaunt-spirithosts-en.pdf",
            isBattleline: () => true,
        },
        cogsmith: {
            id: "cogsmith",
            model: this.models.cogsmith,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-cogmsith-en.pdf",
            isLeader: () => true,
        },
        cannon: {
            id: "cannon",
            model: this.models.cannon,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-cannon-en.pdf",
            isArtillery: () => true,
        },
        duardinBoltThrower: {
            id: "duardinBoltThrower",
            model: this.models.duardinBoltThrower,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 7,
            isArtillery: () => true,
        },
        flameCannon: {
            id: "flameCannon",
            model: this.models.flameCannon,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 200,
            type: "warmachine",
            subType: "Artillery",
            wounds: 7,
            isArtillery: () => true,
        },
        grudgeThrower: {
            id: "grudgeThrower",
            model: this.models.grudgeThrower,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Artillery",
            wounds: 7,
            isArtillery: () => true,
        },
        organGun: {
            id: "organGun",
            model: this.models.organGun,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-organ-gun-en.pdf",
            isArtillery: () => true,
        },
        longbeards: {
            id: "longbeards",
            model: this.models.longbeards,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 300,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-longbeards-en.pdf",
            weaponOptions: [{ options: [{ name: "Axes or Hammers", id: "axesOrHammers" },{ name: "Axes or Hammers & Shields", id: "axesOrHammersShields" },{ name: "Great Axes", id: "greatAxes" },{ name: "Great Axes & Shields", id: "greatAxesShields" }] }],
            isBattleline: () => true,
        },
        vulkiteBerzerkers: {
            id: "vulkiteBerzerkers",
            model: this.models.vulkiteBerzerkers,
            factions: [this.factions.FYRESLAYERS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 330,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vulkite-berzerkers-en.pdf",
            weaponOptions: [{ options: [{ name: "Handaxes & Slingshields", id: "handaxesSlingshields" },{ name: "War-Picks & Slingshields", id: "warPicksSlingshields" },{ name: "Pairs of Handaxes", id: "pairsOfHandaxes" }] }],
            isBattleline: () => true,
        },
        warriors: {
            id: "warriors",
            model: this.models.warriors,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 280,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-warriors-en.pdf",
            weaponOptions: [{ options: [{ name: "Axes or Hammers", id: "axesOrHammers" },{ name: "Axes or Hammers & Shields", id: "axesOrHammersShields" },{ name: "Double-handed Duardin Axes", id: "doubleHandedDuardinAxes" },{ name: "Double-handed Duardin Axes & Shields", id: "doubleHandedDuardinAxesShields" }] }],
            isBattleline: () => true,
        },
        auricRunefatherOnMagmadroth: {
            id: "auricRunefatherOnMagmadroth",
            model: this.models.auricRunefatherOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runefather-magmadroth-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        auricRunesmiterOnMagmadroth: {
            id: "auricRunesmiterOnMagmadroth",
            model: this.models.auricRunesmiterOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runesmiter-magmadroth-en.pdf",
            weaponOptions: [{ options: [{ name: "Runic Iron", id: "runicIron" },{ name: "Forge Key", id: "forgeKey" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        auricRunesonOnMagmadroth: {
            id: "auricRunesonOnMagmadroth",
            model: this.models.auricRunesonOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runeson-magmadroth-en.pdf",
            weaponOptions: [{ options: [{ name: "Ancestral War-axe", id: "ancestralWarAxe" },{ name: "Wyrmslayer Javelins", id: "wyrmslayerJavelins" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        hearthguardBerzerkers: {
            id: "hearthguardBerzerkers",
            model: this.models.hearthguardBerzerkers,
            factions: [this.factions.FYRESLAYERS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Fyreslayer Battleline (Runefather General)",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hearthguard-berzerkers-en.pdf",
            weaponOptions: [{ options: [{ name: "Broadaxes", id: "broadaxes" },{ name: "Poleaxes", id: "poleaxes" }] }],
            isBattleline: () => true,
        },
        auricHearthguard: {
            id: "auricHearthguard",
            model: this.models.auricHearthguard,
            factions: [this.factions.FYRESLAYERS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Fyreslayer Battleline (Runemaster General)",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-hearthguard-en.pdf",
            isBattleline: () => true,
        },
        wardenKingOnThroneOfPower: {
            id: "wardenKingOnThroneOfPower",
            model: this.models.wardenKingOnThroneOfPower,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 220,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        farRanger: {
            id: "farRanger",
            model: this.models.farRanger,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        apprenticeRunesmith: {
            id: "apprenticeRunesmith",
            model: this.models.apprenticeRunesmith,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 70,
            type: "hero",
            subType: undefined,
            wounds: 3,
            isLeader: () => true,
        },
        runelordOnAnvilOfDoom: {
            id: "runelordOnAnvilOfDoom",
            model: this.models.runelordOnAnvilOfDoom,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        auricRunefather: {
            id: "auricRunefather",
            model: this.models.auricRunefather,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 6,
            isLeader: () => true,
        },
        auricRunemaster: {
            id: "auricRunemaster",
            model: this.models.auricRunemaster,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runemaster-en.pdf",
            isLeader: () => true,
        },
        auricRunesmiter: {
            id: "auricRunesmiter",
            model: this.models.auricRunesmiter,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Runic Iron", id: "runicIron" },{ name: "Forge Key", id: "forgeKey" }] }],
            isLeader: () => true,
        },
        auricRuneson: {
            id: "auricRuneson",
            model: this.models.auricRuneson,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Ancestral War-axe", id: "ancestralWarAxe" },{ name: "Wyrmslayer Javelins", id: "wyrmslayerJavelins" }] }],
            isLeader: () => true,
        },
        battlesmith: {
            id: "battlesmith",
            model: this.models.battlesmith,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fyreslayers-battlesmith-en.pdf",
            isLeader: () => true,
        },
        doomseeker: {
            id: "doomseeker",
            model: this.models.doomseeker,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-doomseeker-en.pdf",
            isLeader: () => true,
        },
        grimwrathBerzerker: {
            id: "grimwrathBerzerker",
            model: this.models.grimwrathBerzerker,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fyreslayers-grimwrath-berzerker-en.pdf",
            isLeader: () => true,
        },
        gyrobombers: {
            id: "gyrobombers",
            model: this.models.gyrobombers,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 80,
            type: "warmachine",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads/Gyrobombers.pdf",
        },
        gyrocopters: {
            id: "gyrocopters",
            model: this.models.gyrocopters,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 80,
            type: "warmachine",
            subType: undefined,
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-gyropcopter-en.pdf",
        },
        hammerers: {
            id: "hammerers",
            model: this.models.hammerers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Dispossessed Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hammerers-en.pdf",
            isBattleline: () => true,
        },
        ironbreakers: {
            id: "ironbreakers",
            model: this.models.ironbreakers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 160,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            maxPoints: 400,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads/ironbreakers-en.pdf",
        },
        irondrakes: {
            id: "irondrakes",
            model: this.models.irondrakes,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 200,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads/irondrakes-en.pdf",
        },
        miners: {
            id: "miners",
            model: this.models.miners,
            factions: [this.factions.DWARFS],
            size: 10,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
        },
        quarrellers: {
            id: "quarrellers",
            model: this.models.quarrellers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-quarrellers-en.pdf",
        },
        runelord: {
            id: "runelord",
            model: this.models.runelord,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-runelord-en.pdf",
            isLeader: () => true,
        },
        slayers: {
            id: "slayers",
            model: this.models.slayers,
            factions: [this.factions.DWARFS],
            size: 5,
            points: 60,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
        },
        thaneWithBattleStandard: {
            id: "thaneWithBattleStandard",
            model: this.models.thaneWithBattleStandard,
            factions: [this.factions.DWARFS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        thunderers: {
            id: "thunderers",
            model: this.models.thunderers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-thunderers-en.pdf",
        },
        unforged: {
            id: "unforged",
            model: this.models.unforged,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-unforged-en.pdf",
            isLeader: () => true,
        },
        wardenKing: {
            id: "wardenKing",
            model: this.models.wardenKing,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-warden-king-en.pdf",
            isLeader: () => true,
        },
        greatcannon: {
            id: "greatcannon",
            model: this.models.greatcannon,
            factions: [this.factions.EMPIRE],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            isArtillery: () => true,
        },
        helblasterVolleyGun: {
            id: "helblasterVolleyGun",
            model: this.models.helblasterVolleyGun,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-helblaster-volley-gun-en.pdf",
            isArtillery: () => true,
        },
        helstormRocketBattery: {
            id: "helstormRocketBattery",
            model: this.models.helstormRocketBattery,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-helstorm-rocket-battery-en.pdf",
            isArtillery: () => true,
        },
        fieldMortar: {
            id: "fieldMortar",
            model: this.models.fieldMortar,
            factions: [this.factions.EMPIRE],
            size: 1,
            points: 140,
            type: "warmachine",
            subType: "Artillery",
            wounds: 4,
            isArtillery: () => true,
        },
        freeguildArchers: {
            id: "freeguildArchers",
            model: this.models.freeguildArchers,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-archers-en.pdf",
            isBattleline: () => true,
        },
        freeguildCrossbowmen: {
            id: "freeguildCrossbowmen",
            model: this.models.freeguildCrossbowmen,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-crossbowmen-en.pdf",
            isBattleline: () => true,
        },
        freeguildGuard: {
            id: "freeguildGuard",
            model: this.models.freeguildGuard,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 280,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-guard-en.pdf",
            isBattleline: () => true,
        },
        freeguildHandgunners: {
            id: "freeguildHandgunners",
            model: this.models.freeguildHandgunners,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-handgunners-en.pdf",
            isBattleline: () => true,
        },
        battlemageOnGriffon: {
            id: "battlemageOnGriffon",
            model: this.models.battlemageOnGriffon,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-battlemage-griffon-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        celestialHurricanum: {
            id: "celestialHurricanum",
            model: this.models.celestialHurricanum,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 380,
            type: "monster",
            subType: "Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestial-hurricanum-en.pdf",
            isBehemot: () => true,
        },
        celestialHurricanumWithCelestialBattlemage: {
            id: "celestialHurricanumWithCelestialBattlemage",
            model: this.models.celestialHurricanumWithCelestialBattlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 380,
            type: "hero",
            subType: "Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestial-hurricanum-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        freeguildGeneralOnGriffon: {
            id: "freeguildGeneralOnGriffon",
            model: this.models.freeguildGeneralOnGriffon,
            factions: [this.factions.FREEPEOPLES],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-general-griffon-en.pdf",
            weaponOptions: [{ options: [{ name: "Lance", id: "lance" },{ name: "Runesword", id: "runesword" },{ name: "Greathammer", id: "greathammer" },{ name: "Shield & Lance", id: "shieldLance" },{ name: "Shield & Runesword", id: "shieldRunesword" },{ name: "Shield & Greathammer", id: "shieldGreathammer" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        luminarkOfHysh: {
            id: "luminarkOfHysh",
            model: this.models.luminarkOfHysh,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 240,
            type: "monster",
            subType: "Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-luminark-hysh-en.pdf",
            isBehemot: () => true,
        },
        luminarkOfHyshWithWhiteBattlemage: {
            id: "luminarkOfHyshWithWhiteBattlemage",
            model: this.models.luminarkOfHyshWithWhiteBattlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-luminark-hysh-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        steamTank: {
            id: "steamTank",
            model: this.models.steamTank,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 280,
            type: "warmachine",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-steam-tank-en.pdf",
            isBehemot: () => true,
        },
        warAltarOfSigmar: {
            id: "warAltarOfSigmar",
            model: this.models.warAltarOfSigmar,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            points: 250,
            type: "hero",
            subType: "Behemoth",
            wounds: 11,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-war-altar-sigmar-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        flagellants: {
            id: "flagellants",
            model: this.models.flagellants,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Devoted of Sigmar Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 260,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-flagellants-en.pdf",
            isBattleline: () => true,
        },
        battlemageOnPegasus: {
            id: "battlemageOnPegasus",
            model: this.models.battlemageOnPegasus,
            factions: [this.factions.EMPIRE],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        battlemage: {
            id: "battlemage",
            model: this.models.battlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-battlemage-en.pdf",
            isLeader: () => true,
        },
        demigryphKnights: {
            id: "demigryphKnights",
            model: this.models.demigryphKnights,
            factions: [this.factions.FREEPEOPLES],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Free Peoples Battleline",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-demigryph-knights-en.pdf",
            weaponOptions: [{ options: [{ name: "Lance and Sword", id: "lanceAndSword" },{ name: "Cavalry Halberd", id: "cavalryHalberd" }] }],
            isBattleline: () => true,
        },
        knightsOfOrder: {
            id: "knightsOfOrder",
            model: this.models.knightsOfOrder,
            factions: [this.factions.EMPIRE],
            size: 5,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 30,
        },
        excelsiorWarpriest: {
            id: "excelsiorWarpriest",
            model: this.models.excelsiorWarpriest,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        freeguildGeneral: {
            id: "freeguildGeneral",
            model: this.models.freeguildGeneral,
            factions: [this.factions.FREEPEOPLES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Stately War Banner", id: "statelyWarBanner" },{ name: "Great Weapon", id: "greatWeapon" },{ name: "Pistol & Sigmarite Weapon", id: "pistolSigmariteWeapon" },{ name: "Shield & Sigmarite Weapon", id: "shieldSigmariteWeapon" },{ name: "Shield & Lance", id: "shieldLance" }] }],
            isLeader: () => true,
        },
        freeguildGreatswords: {
            id: "freeguildGreatswords",
            model: this.models.freeguildGreatswords,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            points: 150,
            type: "unit",
            subType: "Free Peoples Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 420,
            isBattleline: () => true,
        },
        freeguildOutriders: {
            id: "freeguildOutriders",
            model: this.models.freeguildOutriders,
            factions: [this.factions.FREEPEOPLES],
            size: 5,
            points: 130,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        freeguildPistoliers: {
            id: "freeguildPistoliers",
            model: this.models.freeguildPistoliers,
            factions: [this.factions.FREEPEOPLES],
            size: 5,
            points: 130,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        gunmaster: {
            id: "gunmaster",
            model: this.models.gunmaster,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        huntmarshal: {
            id: "huntmarshal",
            model: this.models.huntmarshal,
            factions: [this.factions.EMPIRE],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        engineerOnMechanicalSteed: {
            id: "engineerOnMechanicalSteed",
            model: this.models.engineerOnMechanicalSteed,
            factions: [this.factions.EMPIRE],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Handgun", id: "handgun" },{ name: "Grenade Launching Blunderbuss", id: "grenadeLaunchingBlunderbuss" },{ name: "Repeater Handgun", id: "repeaterHandgun" },{ name: "Long Rifle", id: "longRifle" }] }],
            isLeader: () => true,
        },
        warriorPriest: {
            id: "warriorPriest",
            model: this.models.warriorPriest,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Sigmarite Warhammers", id: "sigmariteWarhammers" },{ name: "Sigmarite Warhammer & Shield", id: "sigmariteWarhammerShield" },{ name: "Sigmarite Greathammer", id: "sigmariteGreathammer" }] }],
            isLeader: () => true,
        },
        witchHunter: {
            id: "witchHunter",
            model: this.models.witchHunter,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            points: 60,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Pistols & Blessed Rapier", id: "pistolsBlessedRapier" },{ name: "Pistol & Silver Greatsword", id: "pistolSilverGreatsword" }] }],
            isLeader: () => true,
        },
        highbornRepeaterBoltThrower: {
            id: "highbornRepeaterBoltThrower",
            model: this.models.highbornRepeaterBoltThrower,
            factions: [this.factions.HIGHELVES],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        highbornSpearmen: {
            id: "highbornSpearmen",
            model: this.models.highbornSpearmen,
            factions: [this.factions.HIGHELVES],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            isBattleline: () => true,
        },
        highbornSilverHelms: {
            id: "highbornSilverHelms",
            model: this.models.highbornSilverHelms,
            factions: [this.factions.HIGHELVES],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 20,
            isBattleline: () => true,
        },
        anointedOfAsuryanOnFlamespyrePhoenix: {
            id: "anointedOfAsuryanOnFlamespyrePhoenix",
            model: this.models.anointedOfAsuryanOnFlamespyrePhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        dragonlord: {
            id: "dragonlord",
            model: this.models.dragonlord,
            factions: [this.factions.ORDERDRACONIS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Behemoth",
            wounds: 14,
            weaponOptions: [{ options: [{ name: "Shield & Dragon Blade", id: "shieldDragonBlade" },{ name: "Shield & Dragon Lance", id: "shieldDragonLance" },{ name: "Reaver Bow & Dragon Blade", id: "reaverBowDragonBlade" },{ name: "Reaver Bow & Dragon Lance", id: "reaverBowDragonLance" },{ name: "War Horn & Dragon Blade", id: "warHornDragonBlade" },{ name: "War Horn & Dragon Lance", id: "warHornDragonLance" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        drakeseer: {
            id: "drakeseer",
            model: this.models.drakeseer,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Behemoth",
            wounds: 14,
            isLeader: () => true,
            isBehemot: () => true,
        },
        flamespyrePhoenix: {
            id: "flamespyrePhoenix",
            model: this.models.flamespyrePhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "monster",
            subType: undefined,
            wounds: 12,
        },
        anointedOfAsuryanOnFrostheartPhoenix: {
            id: "anointedOfAsuryanOnFrostheartPhoenix",
            model: this.models.anointedOfAsuryanOnFrostheartPhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Behemoth ",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        frostheartPhoenix: {
            id: "frostheartPhoenix",
            model: this.models.frostheartPhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "monster",
            subType: undefined,
            wounds: 12,
        },
        archmage: {
            id: "archmage",
            model: this.models.archmage,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Eldritch Council",
            wounds: 5,
            isLeader: () => true,
        },
        loremaster: {
            id: "loremaster",
            model: this.models.loremaster,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Eldritch Council",
            wounds: 5,
            isLeader: () => true,
        },
        archmageOnDragon: {
            id: "archmageOnDragon",
            model: this.models.archmageOnDragon,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Eldritch Council - Behemoth",
            wounds: 14,
            weaponOptions: [{ options: [{ name: "Magestaff", id: "magestaff" },{ name: "Magestaff & Book of Hoeth", id: "magestaffBookOfHoeth" },{ name: "Magestaff & Sword of Saphery", id: "magestaffSwordOfSaphery" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        swordmasters: {
            id: "swordmasters",
            model: this.models.swordmasters,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Eldritch Council Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            isBattleline: () => true,
        },
        dragonBlades: {
            id: "dragonBlades",
            model: this.models.dragonBlades,
            factions: [this.factions.ORDERDRACONIS],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Order Draconis Battleline",
            wounds: 2,
            maxSize: 20,
            isBattleline: () => true,
        },
        phoenixGuard: {
            id: "phoenixGuard",
            model: this.models.phoenixGuard,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 10,
            points: 160,
            type: "unit",
            subType: "Phoenix Temple Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 420,
            isBattleline: () => true,
        },
        chariots: {
            id: "chariots",
            model: this.models.chariots,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Swifthawk Agents",
            wounds: 5,
            maxSize: 3,
        },
        skycutters: {
            id: "skycutters",
            model: this.models.skycutters,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            points: 120,
            type: "unit",
            subType: "Swifthawk Agents",
            wounds: 8,
            maxSize: 3,
            weaponOptions: [{ options: [{ name: "Swifthawk Bows", id: "swifthawkBows" },{ name: "Eagle Eye Bolt Thrower", id: "eagleEyeBoltThrower" }] }],
        },
        skywarden: {
            id: "skywarden",
            model: this.models.skywarden,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Swifthawk Agents",
            wounds: 8,
            weaponOptions: [{ options: [{ name: "Zephyr Trident", id: "zephyrTrident" },{ name: "Swifthawk Pennant", id: "swifthawkPennant" }] }],
            isLeader: () => true,
        },
        reavers: {
            id: "reavers",
            model: this.models.reavers,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Swifthawk Agents - Battleline",
            wounds: 2,
            maxSize: 20,
            isBattleline: () => true,
        },
        highWarden: {
            id: "highWarden",
            model: this.models.highWarden,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Swifthawk Agents - Behemoth",
            wounds: 10,
            isLeader: () => true,
            isBehemot: () => true,
        },
        shadowWarriors: {
            id: "shadowWarriors",
            model: this.models.shadowWarriors,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 10,
            points: 200,
            type: "unit",
            subType: "Swifthawk Agents Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 500,
            isBattleline: () => true,
        },
        spireguard: {
            id: "spireguard",
            model: this.models.spireguard,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Swifthawk Agents Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 300,
            isBattleline: () => true,
        },
        anointed: {
            id: "anointed",
            model: this.models.anointed,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        dragonNoble: {
            id: "dragonNoble",
            model: this.models.dragonNoble,
            factions: [this.factions.ORDERDRACONIS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Phoenix Banner", id: "phoenixBanner" },{ name: "Starblade", id: "starblade" },{ name: "Enchanted Polearm", id: "enchantedPolearm" },{ name: "Shield & Starblade", id: "shieldStarblade" },{ name: "Shield & Enchanted Polearm", id: "shieldEnchantedPolearm" },{ name: "Reaver Bow & Starblade", id: "reaverBowStarblade" },{ name: "Reaver Bow & Enchanted Polearm", id: "reaverBowEnchantedPolearm" }] }],
            isLeader: () => true,
        },
        greatEagles: {
            id: "greatEagles",
            model: this.models.greatEagles,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 60,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 3,
        },
        highbornArchers: {
            id: "highbornArchers",
            model: this.models.highbornArchers,
            factions: [this.factions.HIGHELVES],
            size: 10,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
        },
        seawardenOnFoot: {
            id: "seawardenOnFoot",
            model: this.models.seawardenOnFoot,
            factions: [this.factions.HIGHELVES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        whiteLionChariots: {
            id: "whiteLionChariots",
            model: this.models.whiteLionChariots,
            factions: [this.factions.LIONRANGERS],
            size: 1,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 6,
            maxSize: 3,
        },
        whiteLions: {
            id: "whiteLions",
            model: this.models.whiteLions,
            factions: [this.factions.LIONRANGERS],
            size: 10,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            maxPoints: 360,
        },
        deathshriekerRocketLauncher: {
            id: "deathshriekerRocketLauncher",
            model: this.models.deathshriekerRocketLauncher,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        dreadquakeMortar: {
            id: "dreadquakeMortar",
            model: this.models.dreadquakeMortar,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 160,
            type: "warmachine",
            subType: "Artillery",
            wounds: 10,
            isArtillery: () => true,
        },
        magmaCannon: {
            id: "magmaCannon",
            model: this.models.magmaCannon,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 140,
            type: "warmachine",
            subType: "Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        bullCentaurRenders: {
            id: "bullCentaurRenders",
            model: this.models.bullCentaurRenders,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Legion of Azgorh Battleline (Shar'tor General)",
            wounds: 5,
            maxSize: 12,
            maxPoints: 640,
            weaponOptions: [{ options: [{ name: "Scalding Hand Weapons", id: "scaldingHandWeapons" },{ name: "Scalding Hand Weapon & Spiteshield", id: "scaldingHandWeaponSpiteshield" },{ name: "Scalding Great Weapon", id: "scaldingGreatWeapon" }] }],
            isBattleline: () => true,
        },
        infernalGuardFireglaives: {
            id: "infernalGuardFireglaives",
            model: this.models.infernalGuardFireglaives,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Legion of Azgorh Battleline",
            wounds: 1,
            maxSize: 30,
            isBattleline: () => true,
        },
        infernalGuardIronsworn: {
            id: "infernalGuardIronsworn",
            model: this.models.infernalGuardIronsworn,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 240,
            isBattleline: () => true,
        },
        chaosSiegeGargant: {
            id: "chaosSiegeGargant",
            model: this.models.chaosSiegeGargant,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        ironDaemonWarEngine: {
            id: "ironDaemonWarEngine",
            model: this.models.ironDaemonWarEngine,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Behemoth",
            wounds: 11,
            isBehemot: () => true,
        },
        skullcrackerWarEngine: {
            id: "skullcrackerWarEngine",
            model: this.models.skullcrackerWarEngine,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 200,
            type: "warmachine",
            subType: "Behemoth",
            wounds: 11,
            isBehemot: () => true,
        },
        sharTorTheExecutioner: {
            id: "sharTorTheExecutioner",
            model: this.models.sharTorTheExecutioner,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Unique ",
            wounds: 8,
            isLeader: () => true,
        },
        drazhoathTheAshen: {
            id: "drazhoathTheAshen",
            model: this.models.drazhoathTheAshen,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Unique Behemoth",
            wounds: 13,
            isLeader: () => true,
            isBehemot: () => true,
        },
        bullCentaurTaurRuk: {
            id: "bullCentaurTaurRuk",
            model: this.models.bullCentaurTaurRuk,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 7,
            isLeader: () => true,
        },
        daemonsmith: {
            id: "daemonsmith",
            model: this.models.daemonsmith,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Darkforged Weapon", id: "darkforgedWeapon" },{ name: "Pyre Rune Staff", id: "pyreRuneStaff" }] }],
            isLeader: () => true,
        },
        infernalGuardBattleStandardBearer: {
            id: "infernalGuardBattleStandardBearer",
            model: this.models.infernalGuardBattleStandardBearer,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 4,
            isLeader: () => true,
        },
        infernalGuardCastellan: {
            id: "infernalGuardCastellan",
            model: this.models.infernalGuardCastellan,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Darkforged Weapon & Spiteshield", id: "darkforgedWeaponSpiteshield" },{ name: "Darkforged Weapon & Pyrelock Pistol", id: "darkforgedWeaponPyrelockPistol" },{ name: "Darkforged Great Weapon", id: "darkforgedGreatWeapon" }] }],
            isLeader: () => true,
        },
        kDaaiFireborn: {
            id: "kDaaiFireborn",
            model: this.models.kDaaiFireborn,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 3,
            points: 160,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 12,
            maxPoints: 560,
        },
        razordons: {
            id: "razordons",
            model: this.models.razordons,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 40,
            type: "unit",
            subType: "Artillery",
            wounds: 3,
            maxSize: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-razordon-en.pdf",
            isArtillery: () => true,
        },
        salamanders: {
            id: "salamanders",
            model: this.models.salamanders,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 40,
            type: "unit",
            subType: "Artillery",
            wounds: 3,
            maxSize: 4,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-salamander-en.pdf",
            isArtillery: () => true,
        },
        saurusWarriors: {
            id: "saurusWarriors",
            model: this.models.saurusWarriors,
            factions: [this.factions.SERAPHON],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sauruswarriors-en.pdf",
            weaponOptions: [{ options: [{ name: "Clubs", id: "clubs" },{ name: "Spears", id: "spears" }] }],
            isBattleline: () => true,
        },
        skinks: {
            id: "skinks",
            model: this.models.skinks,
            factions: [this.factions.SERAPHON],
            size: 10,
            points: 60,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 200,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinks-en.pdf",
            weaponOptions: [{ options: [{ name: "Meteoric Javelins & Star Bucklers", id: "meteoricJavelinsStarBucklers" },{ name: "Boltspitters & Star Bucklers", id: "boltspittersStarBucklers" },{ name: "Boltspitters & Moonstone Clubs", id: "boltspittersMoonstoneClubs" },{ name: "Moonstone Clubs & Star bucklers", id: "moonstoneClubsStarBucklers" }] }],
            isBattleline: () => true,
        },
        bastiladon: {
            id: "bastiladon",
            model: this.models.bastiladon,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bastiladon-en.pdf",
            isBehemot: () => true,
        },
        saurusOldbloodOnCarnosaur: {
            id: "saurusOldbloodOnCarnosaur",
            model: this.models.saurusOldbloodOnCarnosaur,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-oldbloodcarnosaur-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        saurusScarVeteranOnCarnosaur: {
            id: "saurusScarVeteranOnCarnosaur",
            model: this.models.saurusScarVeteranOnCarnosaur,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-veterancarnosaur-en.pdf",
            weaponOptions: [{ options: [{ name: "Warblade", id: "warblade" },{ name: "War Spear", id: "warSpear" },{ name: "Greatblade", id: "greatblade" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        stegadon: {
            id: "stegadon",
            model: this.models.stegadon,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 240,
            type: "monster",
            subType: "Behemoth",
            wounds: 10,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-stegadon-en.pdf",
            isBehemot: () => true,
        },
        troglodon: {
            id: "troglodon",
            model: this.models.troglodon,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-troglodon-en.pdf",
            isBehemot: () => true,
        },
        skinkPriest: {
            id: "skinkPriest",
            model: this.models.skinkPriest,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Priest",
            wounds: 4,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkpriest-en.pdf",
            weaponOptions: [{ options: [{ name: "Priestly Trappings", id: "priestlyTrappings" },{ name: "Cloak of Feathers", id: "cloakOfFeathers" }] }],
            isLeader: () => true,
        },
        skinkStarpriest: {
            id: "skinkStarpriest",
            model: this.models.skinkStarpriest,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Priest",
            wounds: 4,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkstarpriest-en.pdf",
            isLeader: () => true,
        },
        engineOfTheGods: {
            id: "engineOfTheGods",
            model: this.models.engineOfTheGods,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Priest - Behemoth",
            wounds: 10,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-engineofthegods-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        saurusGuard: {
            id: "saurusGuard",
            model: this.models.saurusGuard,
            factions: [this.factions.SERAPHON],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Seraphon Battleline",
            wounds: 1,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusguard-en.pdf",
            isBattleline: () => true,
        },
        saurusKnights: {
            id: "saurusKnights",
            model: this.models.saurusKnights,
            factions: [this.factions.SERAPHON],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Seraphon Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusknights-en.pdf",
            weaponOptions: [{ options: [{ name: "Blades", id: "blades" },{ name: "Lances", id: "lances" }] }],
            isBattleline: () => true,
        },
        saurusAstrolithBearer: {
            id: "saurusAstrolithBearer",
            model: this.models.saurusAstrolithBearer,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Totem",
            wounds: 6,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-astrolithbearer-en.pdf",
            isLeader: () => true,
        },
        lordKroak: {
            id: "lordKroak",
            model: this.models.lordKroak,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 450,
            type: "hero",
            subType: "Unique ",
            wounds: 10,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lordkroak-en.pdf",
            isLeader: () => true,
        },
        chameleonSkinkStalker: {
            id: "chameleonSkinkStalker",
            model: this.models.chameleonSkinkStalker,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 4,
            maxSize: 1,
            isLeader: () => true,
        },
        skinkProphet: {
            id: "skinkProphet",
            model: this.models.skinkProphet,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            maxSize: 1,
            isLeader: () => true,
        },
        chameleonSkinks: {
            id: "chameleonSkinks",
            model: this.models.chameleonSkinks,
            factions: [this.factions.SERAPHON],
            size: 5,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chameleonskinks-en.pdf",
        },
        celestialSwarms: {
            id: "celestialSwarms",
            model: this.models.celestialSwarms,
            factions: [this.factions.LIZARDMEN],
            size: 2,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 8,
        },
        kroxigor: {
            id: "kroxigor",
            model: this.models.kroxigor,
            factions: [this.factions.SERAPHON],
            size: 3,
            points: 160,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kroxigor-en.pdf",
        },
        ripperdactylRiders: {
            id: "ripperdactylRiders",
            model: this.models.ripperdactylRiders,
            factions: [this.factions.SERAPHON],
            size: 3,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ripperdactylriders-en.pdf",
        },
        saurusEternityWarden: {
            id: "saurusEternityWarden",
            model: this.models.saurusEternityWarden,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 7,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-eternitywarden-en.pdf",
            isLeader: () => true,
        },
        saurusOldblood: {
            id: "saurusOldblood",
            model: this.models.saurusOldblood,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 7,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusoldblood-en.pdf",
            weaponOptions: [{ options: [{ name: "Suntooth Maul", id: "suntoothMaul" },{ name: "Warblade", id: "warblade" },{ name: "War Spear", id: "warSpear" },{ name: "Greatblade", id: "greatblade" }] }],
            isLeader: () => true,
        },
        saurusScarVeteranOnColdOne: {
            id: "saurusScarVeteranOnColdOne",
            model: this.models.saurusScarVeteranOnColdOne,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 7,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-veterancoldone-en.pdf",
            isLeader: () => true,
        },
        saurusSunblood: {
            id: "saurusSunblood",
            model: this.models.saurusSunblood,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 7,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurussunblood-en.pdf",
            isLeader: () => true,
        },
        skinkChief: {
            id: "skinkChief",
            model: this.models.skinkChief,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            points: 60,
            type: "hero",
            subType: undefined,
            wounds: 4,
            maxSize: 1,
            weaponOptions: [{ options: [{ name: "Golden Sickle", id: "goldenSickle" },{ name: "Ornate Club", id: "ornateClub" },{ name: "Golden Sickle & Blowpipe", id: "goldenSickleBlowpipe" },{ name: "Ornate Club & Blowpipe", id: "ornateClubBlowpipe" }] }],
            isLeader: () => true,
        },
        skinkHandlers: {
            id: "skinkHandlers",
            model: this.models.skinkHandlers,
            factions: [this.factions.SERAPHON],
            size: 3,
            points: 40,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 12,
        },
        skinkStarseer: {
            id: "skinkStarseer",
            model: this.models.skinkStarseer,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 200,
            type: "hero",
            subType: undefined,
            wounds: 5,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkstarseer-en.pdf",
            isLeader: () => true,
        },
        slannStarmaster: {
            id: "slannStarmaster",
            model: this.models.slannStarmaster,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 260,
            type: "hero",
            subType: undefined,
            wounds: 7,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slannstarmaster-en.pdf",
            isLeader: () => true,
        },
        terradonRiders: {
            id: "terradonRiders",
            model: this.models.terradonRiders,
            factions: [this.factions.SERAPHON],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-terradonriders-en.pdf",
            weaponOptions: [{ options: [{ name: "Starstrike Javelins", id: "starstrikeJavelins" },{ name: "Sunleech Bolas", id: "sunleechBolas" }] }],
        },
        squigGobba: {
            id: "squigGobba",
            model: this.models.squigGobba,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 140,
            type: "warmachine",
            subType: "Artillery",
            wounds: 5,
            isArtillery: () => true,
        },
        fimirWarriors: {
            id: "fimirWarriors",
            model: this.models.fimirWarriors,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Battleline (Fimir Dirach Balefield General)",
            wounds: 4,
            maxSize: 12,
            isBattleline: () => true,
        },
        basilisk: {
            id: "basilisk",
            model: this.models.basilisk,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Behemoth",
            wounds: 10,
            isBehemot: () => true,
        },
        bonegrinderGargant: {
            id: "bonegrinderGargant",
            model: this.models.bonegrinderGargant,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 420,
            type: "monster",
            subType: "Behemoth",
            wounds: 16,
            isBehemot: () => true,
        },
        broodHorror: {
            id: "broodHorror",
            model: this.models.broodHorror,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            points: 140,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        carmineDragon: {
            id: "carmineDragon",
            model: this.models.carmineDragon,
            factions: [this.factions.MONSTERSOFORDER],
            size: 1,
            points: 440,
            type: "monster",
            subType: "Behemoth",
            wounds: 14,
            isBehemot: () => true,
        },
        colossalSquig: {
            id: "colossalSquig",
            model: this.models.colossalSquig,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 300,
            type: "monster",
            subType: "Behemoth",
            wounds: 16,
            isBehemot: () => true,
        },
        cursDEttin: {
            id: "cursDEttin",
            model: this.models.cursDEttin,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Behemoth",
            wounds: 10,
            isBehemot: () => true,
        },
        dreadSaurian: {
            id: "dreadSaurian",
            model: this.models.dreadSaurian,
            factions: [this.factions.SERAPHON],
            size: 1,
            points: 380,
            type: "monster",
            subType: "Behemoth",
            wounds: 16,
            isBehemot: () => true,
        },
        incarnateElementalOfBeasts: {
            id: "incarnateElementalOfBeasts",
            model: this.models.incarnateElementalOfBeasts,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 300,
            type: "monster",
            subType: "Behemoth",
            wounds: 14,
            isBehemot: () => true,
        },
        magmaDragon: {
            id: "magmaDragon",
            model: this.models.magmaDragon,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 520,
            type: "monster",
            subType: "Behemoth",
            wounds: 20,
            isBehemot: () => true,
        },
        merwyrm: {
            id: "merwyrm",
            model: this.models.merwyrm,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 300,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        preyton: {
            id: "preyton",
            model: this.models.preyton,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 160,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        rogueIdol: {
            id: "rogueIdol",
            model: this.models.rogueIdol,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            points: 400,
            type: "monster",
            subType: "Behemoth",
            wounds: 16,
            isBehemot: () => true,
        },
        skavenWarlordOnBroodHorror: {
            id: "skavenWarlordOnBroodHorror",
            model: this.models.skavenWarlordOnBroodHorror,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Behemoth",
            wounds: 8,
            isLeader: () => true,
            isBehemot: () => true,
        },
        troggothHag: {
            id: "troggothHag",
            model: this.models.troggothHag,
            factions: [this.factions.TROGGOTHS],
            size: 1,
            points: 360,
            type: "hero",
            subType: "Behemoth",
            wounds: 16,
            isLeader: () => true,
            isBehemot: () => true,
        },
        warpfireDragon: {
            id: "warpfireDragon",
            model: this.models.warpfireDragon,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        mourngul: {
            id: "mourngul",
            model: this.models.mourngul,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            points: 350,
            type: "monster",
            subType: "Nighthaunt - Behemoth",
            wounds: 10,
            isBehemot: () => true,
        },
        skinWolves: {
            id: "skinWolves",
            model: this.models.skinWolves,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
        },
        wolfRats: {
            id: "wolfRats",
            model: this.models.wolfRats,
            factions: [this.factions.SKAVENMOULDER],
            size: 5,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        icebrowHunter: {
            id: "icebrowHunter",
            model: this.models.icebrowHunter,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Beastclaw Raiders",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-icebrow-hunter-en.pdf",
            isLeader: () => true,
        },
        frostlordOnStonehorn: {
            id: "frostlordOnStonehorn",
            model: this.models.frostlordOnStonehorn,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 460,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            wounds: 13,
            isLeader: () => true,
            isBehemot: () => true,
        },
        frostlordOnThundertusk: {
            id: "frostlordOnThundertusk",
            model: this.models.frostlordOnThundertusk,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 460,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            wounds: 13,
            isLeader: () => true,
            isBehemot: () => true,
        },
        huskardOnStonehorn: {
            id: "huskardOnStonehorn",
            model: this.models.huskardOnStonehorn,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 380,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-huskard-on-stonehorn-en.pdf",
            weaponOptions: [{ options: [{ name: "Chaintrap", id: "chaintrap" },{ name: "Harpoon Launcher", id: "harpoonLauncher" },{ name: "Blood Vulture", id: "bloodVulture" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        huskardOnThundertusk: {
            id: "huskardOnThundertusk",
            model: this.models.huskardOnThundertusk,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 380,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            wounds: 12,
            weaponOptions: [{ options: [{ name: "Chaintrap", id: "chaintrap" },{ name: "Harpoon Launcher", id: "harpoonLauncher" },{ name: "Blood Vulture", id: "bloodVulture" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        mournfangPack: {
            id: "mournfangPack",
            model: this.models.mournfangPack,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 2,
            points: 160,
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline",
            wounds: 6,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-mournfang-pack-en.pdf",
            weaponOptions: [{ options: [{ name: "Gargant Hackers", id: "gargantHackers" },{ name: "Culling Clubs or Prey Hackers with Iron Fists", id: "cullingClubsOrPreyHackersWithIronFists" }] }],
            isBattleline: () => true,
        },
        icefallYhetees: {
            id: "icefallYhetees",
            model: this.models.icefallYhetees,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline (Frostlord on Thundertusk General)",
            wounds: 4,
            maxSize: 12,
            isBattleline: () => true,
        },
        frostSabres: {
            id: "frostSabres",
            model: this.models.frostSabres,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 2,
            points: 40,
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline (Icetooth Hunter General)",
            wounds: 2,
            maxSize: 12,
            isBattleline: () => true,
        },
        stonehornBeastriders: {
            id: "stonehornBeastriders",
            model: this.models.stonehornBeastriders,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 360,
            type: "monster",
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-stonehorn-beastriders-en.pdf",
            weaponOptions: [{ options: [{ name: "Chaintrap", id: "chaintrap" },{ name: "Blood Vulture", id: "bloodVulture" }] }],
            isBehemot: () => true,
            isBattleline: () => true,
        },
        thundertuskBeastriders: {
            id: "thundertuskBeastriders",
            model: this.models.thundertuskBeastriders,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            points: 360,
            type: "monster",
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-thundertusk-beastriders-en.pdf",
            weaponOptions: [{ options: [{ name: "Chaintrap", id: "chaintrap" },{ name: "Blood Vulture", id: "bloodVulture" }] }],
            isBehemot: () => true,
            isBattleline: () => true,
        },
        firebelly: {
            id: "firebelly",
            model: this.models.firebelly,
            factions: [this.factions.FIREBELLIES],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Firebellies",
            wounds: 7,
            isLeader: () => true,
        },
        butcher: {
            id: "butcher",
            model: this.models.butcher,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Gutbusters",
            wounds: 7,
            isLeader: () => true,
        },
        gorgers: {
            id: "gorgers",
            model: this.models.gorgers,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Gutbusters",
            wounds: 5,
        },
        grots: {
            id: "grots",
            model: this.models.grots,
            factions: [this.factions.GUTBUSTERS],
            size: 20,
            points: 100,
            type: "unit",
            subType: "Gutbusters",
            wounds: 1,
            maxSize: 60,
            maxPoints: 270,
        },
        ironguts: {
            id: "ironguts",
            model: this.models.ironguts,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            points: 200,
            type: "unit",
            subType: "Gutbusters - Gutbusters Battleline",
            wounds: 4,
            maxSize: 12,
            isBattleline: () => true,
        },
        tyrant: {
            id: "tyrant",
            model: this.models.tyrant,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Gutbusters",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogor-tyrant-en.pdf",
            weaponOptions: [{ options: [{ name: "Massive Ogor Club", id: "massiveOgorClub" },{ name: "Great Gutgouger", id: "greatGutgouger" },{ name: "Pair of Clubs; Bashers or Slicers", id: "pairOfClubsBashersOrSlicers" }] }],
            isLeader: () => true,
        },
        grotScraplauncher: {
            id: "grotScraplauncher",
            model: this.models.grotScraplauncher,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 130,
            type: "unit",
            subType: "Gutbusters - Artillery",
            wounds: 9,
            isArtillery: () => true,
        },
        ironblaster: {
            id: "ironblaster",
            model: this.models.ironblaster,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 140,
            type: "unit",
            subType: "Gutbusters - Artillery",
            wounds: 9,
            isArtillery: () => true,
        },
        ogors: {
            id: "ogors",
            model: this.models.ogors,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Gutbusters - Battleline",
            wounds: 4,
            maxSize: 12,
            maxPoints: 400,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogors-en.pdf",
            weaponOptions: [{ options: [{ name: "Ogor Clubs or Blades with Iron Fists", id: "ogorClubsOrBladesWithIronFists" },{ name: "Pairs of Ogor Clubs or Blades", id: "pairsOfOgorClubsOrBlades" }] }],
            isBattleline: () => true,
        },
        leadbelchers: {
            id: "leadbelchers",
            model: this.models.leadbelchers,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Gutbusters - Gutbusters Battleline",
            wounds: 4,
            maxSize: 12,
            isBattleline: () => true,
        },
        maneaters: {
            id: "maneaters",
            model: this.models.maneaters,
            factions: [this.factions.MANEATERS],
            size: 3,
            points: 220,
            type: "unit",
            subType: "Maneaters",
            wounds: 4,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogor-maneaters-en.pdf",
        },
        bruiserStandardBearer: {
            id: "bruiserStandardBearer",
            model: this.models.bruiserStandardBearer,
            factions: [this.factions.OGREKINGDOMS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Ogre Kingdoms",
            wounds: 7,
            isLeader: () => true,
        },
        overtyrant: {
            id: "overtyrant",
            model: this.models.overtyrant,
            factions: [this.factions.OGREKINGDOMS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Ogre Kingdoms",
            wounds: 9,
            isLeader: () => true,
        },
        aleguzzlerGargant: {
            id: "aleguzzlerGargant",
            model: this.models.aleguzzlerGargant,
            factions: [this.factions.ALEGUZZLERGARGANTS],
            size: 1,
            points: 170,
            type: "monster",
            subType: "Aleguzzler Gargants - Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        maniakWeirdnob: {
            id: "maniakWeirdnob",
            model: this.models.maniakWeirdnob,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Bonesplitterz Wizard",
            wounds: 6,
            isLeader: () => true,
        },
        savageBigBoss: {
            id: "savageBigBoss",
            model: this.models.savageBigBoss,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Bonesplitterz",
            wounds: 6,
            weaponOptions: [{ options: [{ name: "Granite Choppas", id: "graniteChoppas" },{ name: "Granite Choppa & Shield", id: "graniteChoppaShield" },{ name: "Stonecleava", id: "stonecleava" }] }],
            isLeader: () => true,
        },
        savageBigStabbas: {
            id: "savageBigStabbas",
            model: this.models.savageBigStabbas,
            factions: [this.factions.BONESPLITTERZ],
            size: 2,
            points: 100,
            type: "unit",
            subType: "Bonesplitterz",
            wounds: 4,
            maxSize: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-savage-orruks-en-2016.pdf",
        },
        savageOrrukArrowboys: {
            id: "savageOrrukArrowboys",
            model: this.models.savageOrrukArrowboys,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            wounds: 2,
            maxSize: 30,
            isBattleline: () => true,
        },
        savageOrrukMorboys: {
            id: "savageOrrukMorboys",
            model: this.models.savageOrrukMorboys,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 300,
            isBattleline: () => true,
        },
        wardokk: {
            id: "wardokk",
            model: this.models.wardokk,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Bonesplitterz Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-wardokk-en.pdf",
            isLeader: () => true,
        },
        wurrgogProphet: {
            id: "wurrgogProphet",
            model: this.models.wurrgogProphet,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Bonesplitterz Wizard",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-wurrgog-prophet-en.pdf",
            isLeader: () => true,
        },
        savageOrruks: {
            id: "savageOrruks",
            model: this.models.savageOrruks,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Bonesplitterz - Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 300,
            isBattleline: () => true,
        },
        savageBoarboyManiaks: {
            id: "savageBoarboyManiaks",
            model: this.models.savageBoarboyManiaks,
            factions: [this.factions.BONESPLITTERZ],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            wounds: 3,
            maxSize: 20,
            isBattleline: () => true,
        },
        savageBoarboyz: {
            id: "savageBoarboyz",
            model: this.models.savageBoarboyz,
            factions: [this.factions.BONESPLITTERZ],
            size: 5,
            points: 120,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            wounds: 3,
            maxSize: 20,
            isBattleline: () => true,
        },
        gitmobGrotShaman: {
            id: "gitmobGrotShaman",
            model: this.models.gitmobGrotShaman,
            factions: [this.factions.GROTS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Gitmob Grots",
            wounds: 4,
            isLeader: () => true,
        },
        grotWolfChariots: {
            id: "grotWolfChariots",
            model: this.models.grotWolfChariots,
            factions: [this.factions.GROTS],
            size: 1,
            points: 40,
            type: "unit",
            subType: "Gitmob Grots - Gitmob Grots Battleline",
            wounds: 4,
            maxSize: 6,
            isBattleline: () => true,
        },
        nastySkulkers: {
            id: "nastySkulkers",
            model: this.models.nastySkulkers,
            factions: [this.factions.GROTS],
            size: 3,
            points: 40,
            type: "unit",
            subType: "Gitmob Grots",
            wounds: 1,
            maxSize: 9,
        },
        snotlingPumpWagons: {
            id: "snotlingPumpWagons",
            model: this.models.snotlingPumpWagons,
            factions: [this.factions.GROTS],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Gitmob Grots",
            wounds: 4,
            maxSize: 3,
        },
        snotlings: {
            id: "snotlings",
            model: this.models.snotlings,
            factions: [this.factions.GROTS],
            size: 2,
            points: 40,
            type: "unit",
            subType: "Gitmob Grots",
            wounds: 4,
            maxSize: 10,
        },
        doomDiverCatapult: {
            id: "doomDiverCatapult",
            model: this.models.doomDiverCatapult,
            factions: [this.factions.GROTS],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            wounds: 9,
            isArtillery: () => true,
        },
        grotRockLobber: {
            id: "grotRockLobber",
            model: this.models.grotRockLobber,
            factions: [this.factions.GROTS],
            size: 1,
            points: 100,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            wounds: 9,
            isArtillery: () => true,
        },
        grotSpearChukka: {
            id: "grotSpearChukka",
            model: this.models.grotSpearChukka,
            factions: [this.factions.GROTS],
            size: 1,
            points: 120,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            wounds: 7,
            isArtillery: () => true,
        },
        gitmobGrots: {
            id: "gitmobGrots",
            model: this.models.gitmobGrots,
            factions: [this.factions.GROTS],
            size: 20,
            points: 100,
            type: "unit",
            subType: "Gitmob Grots - Battleline",
            wounds: 1,
            maxSize: 60,
            maxPoints: 270,
            weaponOptions: [{ options: [{ name: "Spears & Shields", id: "spearsShields" },{ name: "Bows & Slashas", id: "bowsSlashas" }] }],
            isBattleline: () => true,
        },
        grotWolfRiders: {
            id: "grotWolfRiders",
            model: this.models.grotWolfRiders,
            factions: [this.factions.GROTS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Gitmob Grots - Gitmob Grots Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 500,
            weaponOptions: [{ options: [{ name: "Slittas & Wolf Bows", id: "slittasWolfBows" },{ name: "Shields & Slittas & Wolf Bows", id: "shieldsSlittasWolfBows" },{ name: "Pokin Spears", id: "pokinSpears" },{ name: "Shields & Pokin Spears", id: "shieldsPokinSpears" }] }],
            isBattleline: () => true,
        },
        orrukBoarChariots: {
            id: "orrukBoarChariots",
            model: this.models.orrukBoarChariots,
            factions: [this.factions.ORRUKS],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Greenskinz - Greenskinz Battleline",
            wounds: 6,
            maxSize: 3,
            isBattleline: () => true,
        },
        orrukGreatShaman: {
            id: "orrukGreatShaman",
            model: this.models.orrukGreatShaman,
            factions: [this.factions.ORRUKS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Greenskinz",
            wounds: 5,
            isLeader: () => true,
        },
        orrukWarboss: {
            id: "orrukWarboss",
            model: this.models.orrukWarboss,
            factions: [this.factions.ORRUKS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Greenskinz",
            wounds: 6,
            weaponOptions: [{ options: [{ name: "Boss Choppas", id: "bossChoppas" },{ name: "Boss Choppa & Shield", id: "bossChoppaShield" },{ name: "Massive Choppa", id: "massiveChoppa" },{ name: "Great Waaagh Banner", id: "greatWaaaghBanner" }] }],
            isLeader: () => true,
        },
        orruks: {
            id: "orruks",
            model: this.models.orruks,
            factions: [this.factions.ORRUKS],
            size: 10,
            points: 90,
            type: "unit",
            subType: "Greenskinz - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 320,
            weaponOptions: [{ options: [{ name: "Pair of Choppas", id: "pairOfChoppas" },{ name: "Choppas & Shields", id: "choppasShields" },{ name: "Pigstikka Spears & Shields", id: "pigstikkaSpearsShields" },{ name: "Bows & Cuttas", id: "bowsCuttas" }] }],
            isBattleline: () => true,
        },
        orrukBoarboys: {
            id: "orrukBoarboys",
            model: this.models.orrukBoarboys,
            factions: [this.factions.ORRUKS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Greenskinz - Greenskinz Battleline",
            wounds: 2,
            maxSize: 20,
            maxPoints: 360,
            isBattleline: () => true,
        },
        orrukWarbossOnWyvern: {
            id: "orrukWarbossOnWyvern",
            model: this.models.orrukWarbossOnWyvern,
            factions: [this.factions.ORRUKS],
            size: 1,
            points: 240,
            type: "hero",
            subType: "Greenskinz Behemoth",
            wounds: 10,
            isLeader: () => true,
            isBehemot: () => true,
        },
        orrukMegaboss: {
            id: "orrukMegaboss",
            model: this.models.orrukMegaboss,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Ironjawz",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-megaboss-en.pdf",
            isLeader: () => true,
        },
        orrukWarchanter: {
            id: "orrukWarchanter",
            model: this.models.orrukWarchanter,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Ironjawz",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-warchanter-en.pdf",
            isLeader: () => true,
        },
        orrukWeirdnobShaman: {
            id: "orrukWeirdnobShaman",
            model: this.models.orrukWeirdnobShaman,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Ironjawz",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-weirdnob-shaman-en.pdf",
            isLeader: () => true,
        },
        orrukArdboys: {
            id: "orrukArdboys",
            model: this.models.orrukArdboys,
            factions: [this.factions.IRONJAWZ],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 450,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-ardboyz-en.pdf",
            isBattleline: () => true,
        },
        orrukBrutes: {
            id: "orrukBrutes",
            model: this.models.orrukBrutes,
            factions: [this.factions.IRONJAWZ],
            size: 5,
            points: 180,
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-brutes-en.pdf",
            isBattleline: () => true,
        },
        orrukGoreGruntas: {
            id: "orrukGoreGruntas",
            model: this.models.orrukGoreGruntas,
            factions: [this.factions.IRONJAWZ],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-goregruntas-en.pdf",
            isBattleline: () => true,
        },
        gordrakkTheFistOfGork: {
            id: "gordrakkTheFistOfGork",
            model: this.models.gordrakkTheFistOfGork,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            points: 620,
            type: "hero",
            subType: "Ironjawz - Unique Behemoth",
            wounds: 15,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-gordrak-bigteef-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        megabossOnMawKrusha: {
            id: "megabossOnMawKrusha",
            model: this.models.megabossOnMawKrusha,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            points: 460,
            type: "hero",
            subType: "Ironjawz Behemoth",
            wounds: 14,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-mawkrusha-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        caveSquigs: {
            id: "caveSquigs",
            model: this.models.caveSquigs,
            factions: [this.factions.MOONCLANGROTS],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Moonclan Grots - Moonclan Battleline",
            wounds: 2,
            maxSize: 20,
            isBattleline: () => true,
        },
        grotFanatics: {
            id: "grotFanatics",
            model: this.models.grotFanatics,
            factions: [this.factions.MOONCLANGROTS],
            size: 3,
            points: 100,
            type: "unit",
            subType: "Moonclan Grots",
            wounds: 1,
            maxSize: 6,
        },
        grotSquigHerders: {
            id: "grotSquigHerders",
            model: this.models.grotSquigHerders,
            factions: [this.factions.MOONCLANGROTS],
            size: 2,
            points: 20,
            type: "unit",
            subType: "Moonclan Grots",
            wounds: 1,
            maxSize: 10,
        },
        grotSquigHoppers: {
            id: "grotSquigHoppers",
            model: this.models.grotSquigHoppers,
            factions: [this.factions.MOONCLANGROTS],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Moonclan Grots - Moonclan Battleline",
            wounds: 2,
            maxSize: 20,
            isBattleline: () => true,
        },
        grotWarboss: {
            id: "grotWarboss",
            model: this.models.grotWarboss,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Moonclan Grots",
            wounds: 4,
            weaponOptions: [{ options: [{ name: "Git Cuttas", id: "gitCuttas" },{ name: "Git Cutta & Git Shield", id: "gitCuttaGitShield" },{ name: "Git Slicer", id: "gitSlicer" },{ name: "Pair of Moon Cuttas", id: "pairOfMoonCuttas" },{ name: "Moon Cutta & Git Shield", id: "moonCuttaGitShield" },{ name: "Moon Slicer", id: "moonSlicer" },{ name: "Moon Prodder & Giant Cave Squig", id: "moonProdderGiantCaveSquig" }] }],
            isLeader: () => true,
        },
        grotWarbossOnGreatCaveSquig: {
            id: "grotWarbossOnGreatCaveSquig",
            model: this.models.grotWarbossOnGreatCaveSquig,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Moonclan Grots",
            wounds: 6,
            weaponOptions: [{ options: [{ name: "Moon Cutta & Git Shield", id: "moonCuttaGitShield" },{ name: "Night Stabba & Git Shield", id: "nightStabbaGitShield" }] }],
            isLeader: () => true,
        },
        moonclanGrotShaman: {
            id: "moonclanGrotShaman",
            model: this.models.moonclanGrotShaman,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Moonclan Grots",
            wounds: 4,
            isLeader: () => true,
        },
        moonclanGrots: {
            id: "moonclanGrots",
            model: this.models.moonclanGrots,
            factions: [this.factions.MOONCLANGROTS],
            size: 20,
            points: 130,
            type: "unit",
            subType: "Moonclan Grots - Battleline",
            wounds: 1,
            maxSize: 60,
            maxPoints: 360,
            weaponOptions: [{ options: [{ name: "Pokin Spears & Moon Shields", id: "pokinSpearsMoonShields" },{ name: "Stabbas & Moon Shields", id: "stabbasMoonShields" },{ name: "Bows & Slittas", id: "bowsSlittas" }] }],
            isBattleline: () => true,
        },
        manglerSquigs: {
            id: "manglerSquigs",
            model: this.models.manglerSquigs,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            points: 240,
            type: "monster",
            subType: "Moonclan Grots - Behemoth",
            wounds: 10,
            isBehemot: () => true,
        },
        gitboss: {
            id: "gitboss",
            model: this.models.gitboss,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            points: 60,
            type: "hero",
            subType: "Orcs & Goblins",
            wounds: 4,
            isLeader: () => true,
        },
        orrukBully: {
            id: "orrukBully",
            model: this.models.orrukBully,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            points: 40,
            type: "hero",
            subType: "Orcs & Goblins",
            wounds: 4,
            isLeader: () => true,
        },
        mercenaryOrruks: {
            id: "mercenaryOrruks",
            model: this.models.mercenaryOrruks,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Orcs & Goblins ",
            wounds: 1,
            maxSize: 30,
        },
        gitbossOnWolfChariot: {
            id: "gitbossOnWolfChariot",
            model: this.models.gitbossOnWolfChariot,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Orcs & Goblins",
            wounds: 6,
            isLeader: () => true,
        },
        grotBigBossOnGiganticSpider: {
            id: "grotBigBossOnGiganticSpider",
            model: this.models.grotBigBossOnGiganticSpider,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Spiderfang Grots",
            wounds: 6,
            isLeader: () => true,
        },
        arachnarokSpider: {
            id: "arachnarokSpider",
            model: this.models.arachnarokSpider,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Spiderfang Grots",
            wounds: 14,
        },
        arachnarokSpiderWithGrotShaman: {
            id: "arachnarokSpiderWithGrotShaman",
            model: this.models.arachnarokSpiderWithGrotShaman,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Spiderfang Grots - Behemoth",
            wounds: 14,
            isLeader: () => true,
            isBehemot: () => true,
        },
        grotSpiderRiders: {
            id: "grotSpiderRiders",
            model: this.models.grotSpiderRiders,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Spiderfang Grots - Spiderfang Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 540,
            isBattleline: () => true,
        },
        fellwaterTroggoths: {
            id: "fellwaterTroggoths",
            model: this.models.fellwaterTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Troggoths",
            wounds: 4,
            maxSize: 12,
        },
        rockgutTroggoths: {
            id: "rockgutTroggoths",
            model: this.models.rockgutTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Troggoths",
            wounds: 4,
            maxSize: 12,
        },
        sourbreathTroggoths: {
            id: "sourbreathTroggoths",
            model: this.models.sourbreathTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            points: 180,
            type: "unit",
            subType: "Troggoths",
            wounds: 4,
            maxSize: 12,
        },
        enchantress: {
            id: "enchantress",
            model: this.models.enchantress,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        sacredProtector: {
            id: "sacredProtector",
            model: this.models.sacredProtector,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 200,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        mountedYeomen: {
            id: "mountedYeomen",
            model: this.models.mountedYeomen,
            factions: [this.factions.BRETONNIA],
            size: 5,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        peasantBowmen: {
            id: "peasantBowmen",
            model: this.models.peasantBowmen,
            factions: [this.factions.BRETONNIA],
            size: 16,
            points: 200,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 48,
        },
        pegasusKnights: {
            id: "pegasusKnights",
            model: this.models.pegasusKnights,
            factions: [this.factions.BRETONNIA],
            size: 3,
            points: 200,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
        },
        questingKnights: {
            id: "questingKnights",
            model: this.models.questingKnights,
            factions: [this.factions.BRETONNIA],
            size: 5,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        fieldTrebuchet: {
            id: "fieldTrebuchet",
            model: this.models.fieldTrebuchet,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 220,
            type: "warmachine",
            subType: "Artillery",
            wounds: 10,
            isArtillery: () => true,
        },
        knightsErrant: {
            id: "knightsErrant",
            model: this.models.knightsErrant,
            factions: [this.factions.BRETONNIA],
            size: 8,
            points: 200,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 24,
            isBattleline: () => true,
        },
        knightsOfTheRealm: {
            id: "knightsOfTheRealm",
            model: this.models.knightsOfTheRealm,
            factions: [this.factions.BRETONNIA],
            size: 8,
            points: 220,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 24,
            isBattleline: () => true,
        },
        menAtArms: {
            id: "menAtArms",
            model: this.models.menAtArms,
            factions: [this.factions.BRETONNIA],
            size: 16,
            points: 120,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 48,
            isBattleline: () => true,
        },
        battlePilgrims: {
            id: "battlePilgrims",
            model: this.models.battlePilgrims,
            factions: [this.factions.BRETONNIA],
            size: 6,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
        },
        bretonnianLord: {
            id: "bretonnianLord",
            model: this.models.bretonnianLord,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        damsel: {
            id: "damsel",
            model: this.models.damsel,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        grailKnights: {
            id: "grailKnights",
            model: this.models.grailKnights,
            factions: [this.factions.BRETONNIA],
            size: 5,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        nobleChampion: {
            id: "nobleChampion",
            model: this.models.nobleChampion,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        nobleStandardBearer: {
            id: "nobleStandardBearer",
            model: this.models.nobleStandardBearer,
            factions: [this.factions.BRETONNIA],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        gladeGuard: {
            id: "gladeGuard",
            model: this.models.gladeGuard,
            factions: [this.factions.WANDERERS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            isBattleline: () => true,
        },
        wildwoodRangers: {
            id: "wildwoodRangers",
            model: this.models.wildwoodRangers,
            factions: [this.factions.WANDERERS],
            size: 10,
            points: 180,
            type: "unit",
            subType: "Wanderers Battleline (Wayfinder General)",
            wounds: 1,
            maxSize: 30,
            maxPoints: 480,
            isBattleline: () => true,
        },
        sistersOfTheWatch: {
            id: "sistersOfTheWatch",
            model: this.models.sistersOfTheWatch,
            factions: [this.factions.WANDERERS],
            size: 10,
            points: 220,
            type: "unit",
            subType: "Wanderers Battleline (Waywatcher General)",
            wounds: 1,
            maxSize: 20,
            isBattleline: () => true,
        },
        eternalGuard: {
            id: "eternalGuard",
            model: this.models.eternalGuard,
            factions: [this.factions.WANDERERS],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Wanderers Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 210,
            isBattleline: () => true,
        },
        nomadPrince: {
            id: "nomadPrince",
            model: this.models.nomadPrince,
            factions: [this.factions.WANDERERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        sistersOfTheThorn: {
            id: "sistersOfTheThorn",
            model: this.models.sistersOfTheThorn,
            factions: [this.factions.WANDERERS],
            size: 5,
            points: 220,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        spellweaver: {
            id: "spellweaver",
            model: this.models.spellweaver,
            factions: [this.factions.WANDERERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Heartwood Staff", id: "heartwoodStaff" },{ name: "Blows of Mystic Power", id: "blowsOfMysticPower" }] }],
            isLeader: () => true,
        },
        wayfinder: {
            id: "wayfinder",
            model: this.models.wayfinder,
            factions: [this.factions.WANDERERS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        waystrider: {
            id: "waystrider",
            model: this.models.waystrider,
            factions: [this.factions.WANDERERS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        wildRiders: {
            id: "wildRiders",
            model: this.models.wildRiders,
            factions: [this.factions.WANDERERS],
            size: 5,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        gladeRiders: {
            id: "gladeRiders",
            model: this.models.gladeRiders,
            factions: [this.factions.WOODELVES],
            size: 8,
            points: 200,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 24,
            isBattleline: () => true,
        },
        waywatchers: {
            id: "waywatchers",
            model: this.models.waywatchers,
            factions: [this.factions.WOODELVES],
            size: 5,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 15,
        },
        gladeLordOnForestDragon: {
            id: "gladeLordOnForestDragon",
            model: this.models.gladeLordOnForestDragon,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        avatarOfTheHunt: {
            id: "avatarOfTheHunt",
            model: this.models.avatarOfTheHunt,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 380,
            type: "hero",
            subType: "Behemoth",
            wounds: 8,
            isLeader: () => true,
            isBehemot: () => true,
        },
        twilightSistersOnForestDragon: {
            id: "twilightSistersOnForestDragon",
            model: this.models.twilightSistersOnForestDragon,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 420,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        gladeCaptainBattleStandardBearer: {
            id: "gladeCaptainBattleStandardBearer",
            model: this.models.gladeCaptainBattleStandardBearer,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        gladeLord: {
            id: "gladeLord",
            model: this.models.gladeLord,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Kindred Blade & Starlight Spear", id: "kindredBladeStarlightSpear" },{ name: "Bow of Loren & Starlight Greatblade", id: "bowOfLorenStarlightGreatblade" },{ name: "Bow of Loren & Hunting Falcon", id: "bowOfLorenHuntingFalcon" }] }],
            isLeader: () => true,
        },
        gladeLordOnGreatEagle: {
            id: "gladeLordOnGreatEagle",
            model: this.models.gladeLordOnGreatEagle,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 7,
            weaponOptions: [{ options: [{ name: "Bow of Loren", id: "bowOfLoren" },{ name: "Spirit Blade", id: "spiritBlade" }] }],
            isLeader: () => true,
        },
        gladeLordOnGreatStag: {
            id: "gladeLordOnGreatStag",
            model: this.models.gladeLordOnGreatStag,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 7,
            weaponOptions: [{ options: [{ name: "Normal", id: "normal" },{ name: "Bow of Loren", id: "bowOfLoren" }] }],
            isLeader: () => true,
        },
        huntingHounds: {
            id: "huntingHounds",
            model: this.models.huntingHounds,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 20,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 5,
        },
        gladeLordOnPurebredSteed: {
            id: "gladeLordOnPurebredSteed",
            model: this.models.gladeLordOnPurebredSteed,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        shadowdancer: {
            id: "shadowdancer",
            model: this.models.shadowdancer,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        treeKin: {
            id: "treeKin",
            model: this.models.treeKin,
            factions: [this.factions.WOODELVES],
            size: 3,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
        },
        wardancers: {
            id: "wardancers",
            model: this.models.wardancers,
            factions: [this.factions.WOODELVES],
            size: 5,
            points: 60,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
        },
        warhawkRiders: {
            id: "warhawkRiders",
            model: this.models.warhawkRiders,
            factions: [this.factions.WOODELVES],
            size: 1,
            points: 40,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 6,
        },
        gutterRunners: {
            id: "gutterRunners",
            model: this.models.gutterRunners,
            factions: [this.factions.SKAVENESHIN],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Eshin - Eshin Battleline",
            wounds: 1,
            maxSize: 20,
            maxPoints: 200,
            isBattleline: () => true,
        },
        skavenAssassin: {
            id: "skavenAssassin",
            model: this.models.skavenAssassin,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Eshin",
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Weeping Blades", id: "weepingBlades" },{ name: "Fighting Claws", id: "fightingClaws" }] }],
            isLeader: () => true,
        },
        nightRunners: {
            id: "nightRunners",
            model: this.models.nightRunners,
            factions: [this.factions.SKAVENESHIN],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Eshin - Eshin Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 360,
            isBattleline: () => true,
        },
        verminlordDeceiver: {
            id: "verminlordDeceiver",
            model: this.models.verminlordDeceiver,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Eshin Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        greySeer: {
            id: "greySeer",
            model: this.models.greySeer,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Masterclan",
            wounds: 5,
            isLeader: () => true,
        },
        screamingBell: {
            id: "screamingBell",
            model: this.models.screamingBell,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Masterclan - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        verminlordWarpseer: {
            id: "verminlordWarpseer",
            model: this.models.verminlordWarpseer,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Masterclan - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        lordSkreechVerminkin: {
            id: "lordSkreechVerminkin",
            model: this.models.lordSkreechVerminkin,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 320,
            type: "hero",
            subType: "Masterclan - Unique Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        thanquolAndBoneripper: {
            id: "thanquolAndBoneripper",
            model: this.models.thanquolAndBoneripper,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 450,
            type: "hero",
            subType: "Masterclan - Unique Behemoth",
            wounds: 13,
            weaponOptions: [{ options: [{ name: "Warpfire Projectors", id: "warpfireProjectors" },{ name: "Warpfire Braziers", id: "warpfireBraziers" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        giantRats: {
            id: "giantRats",
            model: this.models.giantRats,
            factions: [this.factions.SKAVENMOULDER],
            size: 10,
            points: 60,
            type: "unit",
            subType: "Moulder - Moulder Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 200,
            isBattleline: () => true,
        },
        packmaster: {
            id: "packmaster",
            model: this.models.packmaster,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Moulder",
            wounds: 3,
            weaponOptions: [{ options: [{ name: "Herding Whip & Blade", id: "herdingWhipBlade" },{ name: "Herding Whip & Thing Catcher", id: "herdingWhipThingCatcher" },{ name: "Shock-Prod", id: "shockProd" }] }],
            isLeader: () => true,
        },
        ratOgors: {
            id: "ratOgors",
            model: this.models.ratOgors,
            factions: [this.factions.SKAVENMOULDER],
            size: 2,
            points: 120,
            type: "unit",
            subType: "Moulder - Moulder Battleline",
            wounds: 4,
            maxSize: 8,
            isBattleline: () => true,
        },
        ratSwarms: {
            id: "ratSwarms",
            model: this.models.ratSwarms,
            factions: [this.factions.SKAVENMOULDER],
            size: 2,
            points: 60,
            type: "unit",
            subType: "Moulder",
            wounds: 4,
            maxSize: 8,
        },
        hellPitAbomination: {
            id: "hellPitAbomination",
            model: this.models.hellPitAbomination,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            points: 240,
            type: "monster",
            subType: "Moulder - Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        plaguePriestWithPlagueCenser: {
            id: "plaguePriestWithPlagueCenser",
            model: this.models.plaguePriestWithPlagueCenser,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Nurgle Pestilens ",
            wounds: 5,
            isLeader: () => true,
        },
        plaguePriestWithWarpstoneTippedStaff: {
            id: "plaguePriestWithWarpstoneTippedStaff",
            model: this.models.plaguePriestWithWarpstoneTippedStaff,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Nurgle Pestilens",
            wounds: 5,
            isLeader: () => true,
        },
        plagueclaw: {
            id: "plagueclaw",
            model: this.models.plagueclaw,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Nurgle Pestilens  - Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        plagueCenserBearers: {
            id: "plagueCenserBearers",
            model: this.models.plagueCenserBearers,
            factions: [this.factions.SKAVENPESTILENS],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Nurgle Pestilens  - Pestilens Battleline",
            wounds: 1,
            maxSize: 20,
            isBattleline: () => true,
        },
        plagueMonks: {
            id: "plagueMonks",
            model: this.models.plagueMonks,
            factions: [this.factions.SKAVENPESTILENS],
            size: 10,
            points: 70,
            type: "unit",
            subType: "Nurgle Pestilens  - Pestilens Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 240,
            weaponOptions: [{ options: [{ name: "Foetid Blades", id: "foetidBlades" },{ name: "Woe-stave", id: "woeStave" }] }],
            isBattleline: () => true,
        },
        plagueFurnace: {
            id: "plagueFurnace",
            model: this.models.plagueFurnace,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Nurgle Pestilens - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        verminlordCorruptor: {
            id: "verminlordCorruptor",
            model: this.models.verminlordCorruptor,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Nurgle Pestilens Daemon Wizard - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        archWarlock: {
            id: "archWarlock",
            model: this.models.archWarlock,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Skryre",
            wounds: 6,
            isLeader: () => true,
        },
        poisonedWindMortarWeaponTeam: {
            id: "poisonedWindMortarWeaponTeam",
            model: this.models.poisonedWindMortarWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        ratlingGunWeaponTeam: {
            id: "ratlingGunWeaponTeam",
            model: this.models.ratlingGunWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warlockEngineer: {
            id: "warlockEngineer",
            model: this.models.warlockEngineer,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Skryre",
            wounds: 5,
            isLeader: () => true,
        },
        warpGrinderWeaponTeam: {
            id: "warpGrinderWeaponTeam",
            model: this.models.warpGrinderWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warpfireThrowerWeaponTeam: {
            id: "warpfireThrowerWeaponTeam",
            model: this.models.warpfireThrowerWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 70,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warpLightningCannon: {
            id: "warpLightningCannon",
            model: this.models.warpLightningCannon,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 180,
            type: "warmachine",
            subType: "Skryre - Artillery",
            wounds: 6,
            isArtillery: () => true,
        },
        warplockJezzails: {
            id: "warplockJezzails",
            model: this.models.warplockJezzails,
            factions: [this.factions.SKAVENSKRYRE],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Skryre - Artillery",
            wounds: 2,
            maxSize: 12,
            isArtillery: () => true,
        },
        doomwheel: {
            id: "doomwheel",
            model: this.models.doomwheel,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 130,
            type: "warmachine",
            subType: "Skryre - Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        skryreAcolytes: {
            id: "skryreAcolytes",
            model: this.models.skryreAcolytes,
            factions: [this.factions.SKAVENSKRYRE],
            size: 5,
            points: 60,
            type: "unit",
            subType: "Skryre - Skryre Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 320,
            isBattleline: () => true,
        },
        stormfiends: {
            id: "stormfiends",
            model: this.models.stormfiends,
            factions: [this.factions.SKAVENSKRYRE],
            size: 3,
            points: 300,
            type: "unit",
            subType: "Skryre - Skryre Battleline",
            wounds: 6,
            maxSize: 9,
            isBattleline: () => true,
        },
        skavenChieftainWithBattleStandard: {
            id: "skavenChieftainWithBattleStandard",
            model: this.models.skavenChieftainWithBattleStandard,
            factions: [this.factions.SKAVEN],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Verminus",
            wounds: 5,
            isLeader: () => true,
        },
        skavenWarlord: {
            id: "skavenWarlord",
            model: this.models.skavenWarlord,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Verminus",
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Warpforged Blade", id: "warpforgedBlade" },{ name: "War Halberd", id: "warHalberd" },{ name: "Pair of Barbed Blades", id: "pairOfBarbedBlades" },{ name: "Barbed Blade", id: "barbedBlade" },{ name: "Shield & Warpforged Blade", id: "shieldWarpforgedBlade" },{ name: "Shield & War Halberd", id: "shieldWarHalberd" },{ name: "Shield & Pair of Barbed Blades", id: "shieldPairOfBarbedBlades" },{ name: "Shield & Barbed Blade", id: "shieldBarbedBlade" }] }],
            isLeader: () => true,
        },
        stormvermin: {
            id: "stormvermin",
            model: this.models.stormvermin,
            factions: [this.factions.SKAVENVERMINUS],
            size: 10,
            points: 140,
            type: "unit",
            subType: "Verminus - Verminus Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 500,
            weaponOptions: [{ options: [{ name: "Halberd", id: "halberd" },{ name: "Halberd & Shield", id: "halberdShield" }] }],
            isBattleline: () => true,
        },
        clanrats: {
            id: "clanrats",
            model: this.models.clanrats,
            factions: [this.factions.SKAVENVERMINUS],
            size: 20,
            points: 120,
            type: "unit",
            subType: "Verminus - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 200,
            weaponOptions: [{ options: [{ name: "Rusty Spear", id: "rustySpear" },{ name: "Rusty Blade", id: "rustyBlade" }] }],
            isBattleline: () => true,
        },
        verminlordWarbringer: {
            id: "verminlordWarbringer",
            model: this.models.verminlordWarbringer,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Verminus - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        skavenslaves: {
            id: "skavenslaves",
            model: this.models.skavenslaves,
            factions: [this.factions.SKAVEN],
            size: 20,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 1,
            weaponOptions: [{ options: [{ name: "Sling", id: "sling" },{ name: "Rusty Spear", id: "rustySpear" },{ name: "Rusty Blade", id: "rustyBlade" },{ name: "Shield & Rusty Spear", id: "shieldRustySpear" },{ name: "Shield & Rusty Blade", id: "shieldRustyBlade" }] }],
        },
        deathrunner: {
            id: "deathrunner",
            model: this.models.deathrunner,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Eshin",
            wounds: 5,
            isLeader: () => true,
        },
        liberators: {
            id: "liberators",
            model: this.models.liberators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 520,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-liberators-en.pdf",
            weaponOptions: [{ options: [{ name: "Warhammers", id: "warhammers" },{ name: "Warblades", id: "warblades" },{ name: "Warhammer & Shield", id: "warhammerShield" },{ name: "Warblade & Shield", id: "warbladeShield" }] }],
            isBattleline: () => true,
        },
        drakeswornTemplar: {
            id: "drakeswornTemplar",
            model: this.models.drakeswornTemplar,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 500,
            type: "hero",
            subType: "Behemoth",
            wounds: 16,
            weaponOptions: [{ options: [{ name: "Tempest Axe", id: "tempestAxe" },{ name: "Arc Hammer", id: "arcHammer" },{ name: "Storm Lance", id: "stormLance" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        lordCelestantOnStardrake: {
            id: "lordCelestantOnStardrake",
            model: this.models.lordCelestantOnStardrake,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 560,
            type: "hero",
            subType: "Behemoth",
            wounds: 16,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-stormcast-stardrake-en.pdf",
            weaponOptions: [{ options: [{ name: "Celestine Hammer", id: "celestineHammer" },{ name: "Stormbound Blade", id: "stormboundBlade" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        judicators: {
            id: "judicators",
            model: this.models.judicators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Stormcast Eternals Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-judicators-en.pdf",
            weaponOptions: [{ options: [{ name: "Skybolt Bows", id: "skyboltBows" },{ name: "Boltstorm Crossbows", id: "boltstormCrossbows" }] }],
            isBattleline: () => true,
        },
        vanguardHunters: {
            id: "vanguardHunters",
            model: this.models.vanguardHunters,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Stormcast Eternals Battleline (Lord Aquilor General)",
            wounds: 2,
            maxSize: 15,
            isBattleline: () => true,
        },
        knightVexillor: {
            id: "knightVexillor",
            model: this.models.knightVexillor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Totem",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightvexillor-en.pdf",
            weaponOptions: [{ options: [{ name: "Meteoric Standard", id: "meteoricStandard" },{ name: "Pennant of the Stormbringer", id: "pennantOfTheStormbringer" }] }],
            isLeader: () => true,
        },
        celestantPrime: {
            id: "celestantPrime",
            model: this.models.celestantPrime,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Unique ",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestantprime-en.pdf",
            isLeader: () => true,
        },
        aetherwings: {
            id: "aetherwings",
            model: this.models.aetherwings,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 60,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 12,
        },
        concussors: {
            id: "concussors",
            model: this.models.concussors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            points: 280,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
        },
        desolators: {
            id: "desolators",
            model: this.models.desolators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            points: 240,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
        },
        fulminators: {
            id: "fulminators",
            model: this.models.fulminators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            points: 240,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
        },
        gryphHound: {
            id: "gryphHound",
            model: this.models.gryphHound,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 40,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcastellant-en.pdf",
        },
        knightQuestor: {
            id: "knightQuestor",
            model: this.models.knightQuestor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-knight-questor-en.pdf",
            isLeader: () => true,
        },
        knightAzyros: {
            id: "knightAzyros",
            model: this.models.knightAzyros,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightazyros-en.pdf",
            isLeader: () => true,
        },
        knightHeraldor: {
            id: "knightHeraldor",
            model: this.models.knightHeraldor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightheraldor-en.pdf",
            isLeader: () => true,
        },
        knightVenator: {
            id: "knightVenator",
            model: this.models.knightVenator,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightvenator-en.pdf",
            isLeader: () => true,
        },
        lordVeritant: {
            id: "lordVeritant",
            model: this.models.lordVeritant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Lord-Veritant-ENG.pdf",
            isLeader: () => true,
        },
        lordAquilor: {
            id: "lordAquilor",
            model: this.models.lordAquilor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 200,
            type: "hero",
            subType: undefined,
            wounds: 7,
            isLeader: () => true,
        },
        vandusHammerhand: {
            id: "vandusHammerhand",
            model: this.models.vandusHammerhand,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Unique",
            wounds: 7,
            isLeader: () => true,
        },
        lordCastellant: {
            id: "lordCastellant",
            model: this.models.lordCastellant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcastellant-en.pdf",
            isLeader: () => true,
        },
        lordCelestant: {
            id: "lordCelestant",
            model: this.models.lordCelestant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcelestant-en.pdf",
            isLeader: () => true,
        },
        lordCelestantOnDracoth: {
            id: "lordCelestantOnDracoth",
            model: this.models.lordCelestantOnDracoth,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 220,
            type: "hero",
            subType: undefined,
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-celestant-dracoth-en.pdf",
            weaponOptions: [{ options: [{ name: "Tempestos Hammer & Thundershield", id: "tempestosHammerThundershield" },{ name: "Lightning Hammer", id: "lightningHammer" },{ name: "Lightning Hammer & Thundershield", id: "lightningHammerThundershield" },{ name: "Stormstrike Glaive", id: "stormstrikeGlaive" },{ name: "Stormstrike Glaive & Thundershield", id: "stormstrikeGlaiveThundershield" },{ name: "Thunderaxe", id: "thunderaxe" },{ name: "Thunderaxe & Thundershield", id: "thunderaxeThundershield" }] }],
            isLeader: () => true,
        },
        lordRelictor: {
            id: "lordRelictor",
            model: this.models.lordRelictor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        paladinDecimators: {
            id: "paladinDecimators",
            model: this.models.paladinDecimators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 200,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-decimators-en.pdf",
        },
        paladinProtectors: {
            id: "paladinProtectors",
            model: this.models.paladinProtectors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 200,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-protectors-en.pdf",
        },
        paladinRetributors: {
            id: "paladinRetributors",
            model: this.models.paladinRetributors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            points: 220,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-retributors-en.pdf",
        },
        prosecutorsWithCelestialHammers: {
            id: "prosecutorsWithCelestialHammers",
            model: this.models.prosecutorsWithCelestialHammers,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-prostecutorhammers-en.pdf",
        },
        prosecutorsWithStormcallJavelins: {
            id: "prosecutorsWithStormcallJavelins",
            model: this.models.prosecutorsWithStormcallJavelins,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-prostecutorjavelins-en.pdf",
        },
        tempestors: {
            id: "tempestors",
            model: this.models.tempestors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            points: 220,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
        },
        vanguardPalladors: {
            id: "vanguardPalladors",
            model: this.models.vanguardPalladors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 220,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
        },
        vanguardRaptorsWithHurricaneCrossbows: {
            id: "vanguardRaptorsWithHurricaneCrossbows",
            model: this.models.vanguardRaptorsWithHurricaneCrossbows,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 160,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 12,
        },
        vanguardRaptorsWithLongstrikeCrossbows: {
            id: "vanguardRaptorsWithLongstrikeCrossbows",
            model: this.models.vanguardRaptorsWithLongstrikeCrossbows,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 12,
        },
        dryads: {
            id: "dryads",
            model: this.models.dryads,
            factions: [this.factions.SYLVANETH],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 270,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dryads-en.pdf",
            isBattleline: () => true,
        },
        spiritOfDurthu: {
            id: "spiritOfDurthu",
            model: this.models.spiritOfDurthu,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 400,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-spirit-of-durthu-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        treelord: {
            id: "treelord",
            model: this.models.treelord,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 240,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-treelord-en.pdf",
            isBehemot: () => true,
        },
        treeRevenants: {
            id: "treeRevenants",
            model: this.models.treeRevenants,
            factions: [this.factions.SYLVANETH],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Sylvaneth Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 420,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-tree-revenants-en.pdf",
            isBattleline: () => true,
        },
        branchwraith: {
            id: "branchwraith",
            model: this.models.branchwraith,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-branchwraith-en.pdf",
            isLeader: () => true,
        },
        branchwych: {
            id: "branchwych",
            model: this.models.branchwych,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Wizard",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-branchwych-en.pdf",
            isLeader: () => true,
        },
        treelordAncient: {
            id: "treelordAncient",
            model: this.models.treelordAncient,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Wizard - Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-treelordancient-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        alarielleTheEverqueen: {
            id: "alarielleTheEverqueen",
            model: this.models.alarielleTheEverqueen,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 600,
            type: "hero",
            subType: "Wizard - Unique Behemoth",
            wounds: 16,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-alarielle-everqueen-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        drychaHamadreth: {
            id: "drychaHamadreth",
            model: this.models.drychaHamadreth,
            factions: [this.factions.SYLVANETH],
            size: 1,
            points: 280,
            type: "hero",
            subType: "Wizard - Unique Behemoth",
            wounds: 10,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-drycha-hamadreth-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        kurnothHunters: {
            id: "kurnothHunters",
            model: this.models.kurnothHunters,
            factions: [this.factions.SYLVANETH],
            size: 3,
            points: 220,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-kurnoth-hunters-en.pdf",
            weaponOptions: [{ options: [{ name: "Scythes", id: "scythes" },{ name: "Greatswords", id: "greatswords" },{ name: "Greatbows", id: "greatbows" }] }],
        },
        spiteRevenants: {
            id: "spiteRevenants",
            model: this.models.spiteRevenants,
            factions: [this.factions.SYLVANETH],
            size: 5,
            points: 80,
            type: "unit",
            subType: "Sylvaneth Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 420,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-spite-revenants-en.pdf",
            isBattleline: () => true,
        },
        chaosWarMammoth: {
            id: "chaosWarMammoth",
            model: this.models.chaosWarMammoth,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 320,
            type: "monster",
            subType: "Behemoth",
            wounds: 22,
            isBehemot: () => true,
        },
        giganticChaosSpawn: {
            id: "giganticChaosSpawn",
            model: this.models.giganticChaosSpawn,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 180,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        nightmaw: {
            id: "nightmaw",
            model: this.models.nightmaw,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Unique",
            wounds: 6,
        },
        daemonPlagueToadsOfNurgle: {
            id: "daemonPlagueToadsOfNurgle",
            model: this.models.daemonPlagueToadsOfNurgle,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            points: 120,
            type: "unit",
            subType: "Tamurkhan's Horde Battleline",
            wounds: 4,
            maxSize: 12,
            maxPoints: 400,
            isBattleline: () => true,
        },
        plagueOgors: {
            id: "plagueOgors",
            model: this.models.plagueOgors,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Tamurkhan's Horde Battleline",
            wounds: 5,
            maxSize: 12,
            maxPoints: 560,
            isBattleline: () => true,
        },
        kayzkTheBefouled: {
            id: "kayzkTheBefouled",
            model: this.models.kayzkTheBefouled,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Unique ",
            wounds: 7,
            isLeader: () => true,
        },
        saylTheFaithless: {
            id: "saylTheFaithless",
            model: this.models.saylTheFaithless,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Unique ",
            wounds: 6,
            isLeader: () => true,
        },
        tamurkhanTheMaggotLord: {
            id: "tamurkhanTheMaggotLord",
            model: this.models.tamurkhanTheMaggotLord,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 500,
            type: "hero",
            subType: "Unique Behemoth",
            wounds: 18,
            isLeader: () => true,
            isBehemot: () => true,
        },
        bileTroggoths: {
            id: "bileTroggoths",
            model: this.models.bileTroggoths,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            maxPoints: 640,
        },
        daemonPoxRidersOfNurgle: {
            id: "daemonPoxRidersOfNurgle",
            model: this.models.daemonPoxRidersOfNurgle,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
            maxPoints: 640,
        },
        screamingSkullCatapult: {
            id: "screamingSkullCatapult",
            model: this.models.screamingSkullCatapult,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 160,
            type: "warmachine",
            subType: "Artillery",
            wounds: 8,
            isArtillery: () => true,
        },
        skeletonChariots: {
            id: "skeletonChariots",
            model: this.models.skeletonChariots,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            points: 140,
            type: "unit",
            subType: "Battleline",
            wounds: 5,
            maxSize: 12,
            isBattleline: () => true,
        },
        skeletonHorsemen: {
            id: "skeletonHorsemen",
            model: this.models.skeletonHorsemen,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Battleline",
            wounds: 2,
            maxSize: 30,
            isBattleline: () => true,
        },
        skeletalLegionnaires: {
            id: "skeletalLegionnaires",
            model: this.models.skeletalLegionnaires,
            factions: [this.factions.TOMBKINGS],
            size: 10,
            points: 80,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            maxSize: 40,
            isBattleline: () => true,
        },
        boneGiant: {
            id: "boneGiant",
            model: this.models.boneGiant,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 200,
            type: "monster",
            subType: "Behemoth",
            wounds: 9,
            isBehemot: () => true,
        },
        casketOfSouls: {
            id: "casketOfSouls",
            model: this.models.casketOfSouls,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Behemoth",
            wounds: 8,
            isLeader: () => true,
            isBehemot: () => true,
        },
        warsphinx: {
            id: "warsphinx",
            model: this.models.warsphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        necrosphinx: {
            id: "necrosphinx",
            model: this.models.necrosphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 440,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        royalWarsphinx: {
            id: "royalWarsphinx",
            model: this.models.royalWarsphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 440,
            type: "hero",
            subType: "Behemoth",
            wounds: 12,
            weaponOptions: [{ options: [{ name: "Venom Spike Tail", id: "venomSpikeTail" },{ name: "Bladed Tail", id: "bladedTail" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        skeletonArchers: {
            id: "skeletonArchers",
            model: this.models.skeletonArchers,
            factions: [this.factions.TOMBKINGS],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Tomb Kings Battleline (Tomb Queen General)",
            wounds: 1,
            maxSize: 30,
            isBattleline: () => true,
        },
        tombQueen: {
            id: "tombQueen",
            model: this.models.tombQueen,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        scarabPrince: {
            id: "scarabPrince",
            model: this.models.scarabPrince,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 80,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        tombKingOnExaltedChariot: {
            id: "tombKingOnExaltedChariot",
            model: this.models.tombKingOnExaltedChariot,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 460,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        carrion: {
            id: "carrion",
            model: this.models.carrion,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 12,
        },
        lichePriest: {
            id: "lichePriest",
            model: this.models.lichePriest,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 120,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        necropolisKnights: {
            id: "necropolisKnights",
            model: this.models.necropolisKnights,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            points: 240,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
        },
        necrotect: {
            id: "necrotect",
            model: this.models.necrotect,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        sepulchralStalkers: {
            id: "sepulchralStalkers",
            model: this.models.sepulchralStalkers,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 12,
        },
        skeletonHorseArchers: {
            id: "skeletonHorseArchers",
            model: this.models.skeletonHorseArchers,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            points: 140,
            type: "unit",
            subType: undefined,
            wounds: 2,
            maxSize: 20,
        },
        tombGuard: {
            id: "tombGuard",
            model: this.models.tombGuard,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 30,
            weaponOptions: [{ options: [{ name: "Tomb Blade", id: "tombBlade" },{ name: "Bronze Halberd", id: "bronzeHalberd" }] }],
        },
        tombHerald: {
            id: "tombHerald",
            model: this.models.tombHerald,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        tombKing: {
            id: "tombKing",
            model: this.models.tombKing,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 6,
            weaponOptions: [{ options: [{ name: "Dynastic Blade & Shield", id: "dynasticBladeShield" },{ name: "Monarch's Great Blade", id: "monarchSGreatBlade" }] }],
            isLeader: () => true,
        },
        tombKingInRoyalChariot: {
            id: "tombKingInRoyalChariot",
            model: this.models.tombKingInRoyalChariot,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        tombScorpions: {
            id: "tombScorpions",
            model: this.models.tombScorpions,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 5,
            maxSize: 3,
        },
        tombSwarm: {
            id: "tombSwarm",
            model: this.models.tombSwarm,
            factions: [this.factions.TOMBKINGS],
            size: 2,
            points: 80,
            type: "unit",
            subType: undefined,
            wounds: 3,
            maxSize: 8,
        },
        ushabti: {
            id: "ushabti",
            model: this.models.ushabti,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
            weaponOptions: [{ options: [{ name: "Ritual Blade Stave", id: "ritualBladeStave" },{ name: "Great Bow", id: "greatBow" }] }],
        },
        necromancerOnNightmare: {
            id: "necromancerOnNightmare",
            model: this.models.necromancerOnNightmare,
            factions: [this.factions.VAMPIRECOUNTS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        vampireLordOnAbyssalTerror: {
            id: "vampireLordOnAbyssalTerror",
            model: this.models.vampireLordOnAbyssalTerror,
            factions: [this.factions.VAMPIRECOUNTS],
            size: 1,
            points: 300,
            type: "hero",
            subType: undefined,
            wounds: 8,
            weaponOptions: [{ options: [{ name: "Deathlance", id: "deathlance" },{ name: "Vampiric Sword", id: "vampiricSword" },{ name: "Deathlance & Shield", id: "deathlanceShield" },{ name: "Vampiric Sword & Shield", id: "vampiricSwordShield" }] }],
            isLeader: () => true,
        },
        chaosChariots: {
            id: "chaosChariots",
            model: this.models.chaosChariots,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            wounds: 7,
            maxSize: 3,
            weaponOptions: [{ options: [{ name: "Greatblades", id: "greatblades" },{ name: "War flails", id: "warFlails" }] }],
            isBattleline: () => true,
        },
        chaosChosen: {
            id: "chaosChosen",
            model: this.models.chaosChosen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            points: 140,
            type: "unit",
            subType: "Mortal",
            wounds: 2,
            maxSize: 20,
        },
        chaosGorebeastChariots: {
            id: "chaosGorebeastChariots",
            model: this.models.chaosGorebeastChariots,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Mortal",
            wounds: 8,
            weaponOptions: [{ options: [{ name: "War Flail", id: "warFlail" },{ name: "Greatblade", id: "greatblade" }] }],
        },
        darkoathChieftain: {
            id: "darkoathChieftain",
            model: this.models.darkoathChieftain,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Mortal",
            wounds: 5,
            isLeader: () => true,
        },
        exaltedHeroOfChaos: {
            id: "exaltedHeroOfChaos",
            model: this.models.exaltedHeroOfChaos,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Mortal",
            wounds: 5,
            isLeader: () => true,
        },
        exaltedHeroWithBattleStandard: {
            id: "exaltedHeroWithBattleStandard",
            model: this.models.exaltedHeroWithBattleStandard,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Mortal",
            wounds: 5,
            isLeader: () => true,
        },
        forsaken: {
            id: "forsaken",
            model: this.models.forsaken,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 10,
            points: 200,
            type: "unit",
            subType: "Mortal",
            wounds: 2,
            maxSize: 30,
        },
        lordOfChaos: {
            id: "lordOfChaos",
            model: this.models.lordOfChaos,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Mortal",
            wounds: 6,
            isLeader: () => true,
        },
        chaosMarauders: {
            id: "chaosMarauders",
            model: this.models.chaosMarauders,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 10,
            points: 60,
            type: "unit",
            subType: "Mortal - Battleline",
            wounds: 1,
            maxSize: 40,
            maxPoints: 200,
            weaponOptions: [{ options: [{ name: "Axes", id: "axes" },{ name: "Flails", id: "flails" },{ name: "Axes & Shields", id: "axesShields" },{ name: "Flails & Shields", id: "flailsShields" }] }],
            isBattleline: () => true,
        },
        chaosWarriors: {
            id: "chaosWarriors",
            model: this.models.chaosWarriors,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            points: 90,
            type: "unit",
            subType: "Mortal - Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 480,
            weaponOptions: [{ options: [{ name: "Hand Weapon & Shield", id: "handWeaponShield" },{ name: "Halberd & Shield", id: "halberdShield" },{ name: "Hand Weapons", id: "handWeapons" },{ name: "Greatblade", id: "greatblade" }] }],
            isBattleline: () => true,
        },
        chaosKnights: {
            id: "chaosKnights",
            model: this.models.chaosKnights,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            wounds: 3,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-knights-en.pdf",
            weaponOptions: [{ options: [{ name: "Ensorcelled Weapons", id: "ensorcelledWeapons" },{ name: "Chaos Glaives", id: "chaosGlaives" }] }],
            isBattleline: () => true,
        },
        chaosMarauderHorsemen: {
            id: "chaosMarauderHorsemen",
            model: this.models.chaosMarauderHorsemen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            points: 90,
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            wounds: 2,
            maxSize: 30,
            maxPoints: 480,
            weaponOptions: [{ options: [{ name: "Axes & Shield", id: "axesShield" },{ name: "Flails & Shield", id: "flailsShield" },{ name: "Javelin & Shield", id: "javelinShield" }] }],
            isBattleline: () => true,
        },
        chaosLordOnManticore: {
            id: "chaosLordOnManticore",
            model: this.models.chaosLordOnManticore,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 250,
            type: "hero",
            subType: "Mortal Behemoth",
            wounds: 12,
            weaponOptions: [{ options: [{ name: "Blade & Lance", id: "bladeLance" },{ name: "Flail & Lance", id: "flailLance" },{ name: "Blade & Runeshield", id: "bladeRuneshield" },{ name: "Flail & Runeshield", id: "flailRuneshield" },{ name: "Blade & Daggerfist", id: "bladeDaggerfist" },{ name: "Flail & Daggerfist", id: "flailDaggerfist" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        chaosWarshrine: {
            id: "chaosWarshrine",
            model: this.models.chaosWarshrine,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 180,
            type: "unit",
            subType: "Mortal Behemoth",
            wounds: 12,
            maxSize: 1,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-warshrine-en.pdf",
            isBehemot: () => true,
        },
        chaosLordOnDaemonicMount: {
            id: "chaosLordOnDaemonicMount",
            model: this.models.chaosLordOnDaemonicMount,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 140,
            type: "hero",
            subType: "Mortal Daemon",
            wounds: 7,
            isLeader: () => true,
        },
        chaosSpawn: {
            id: "chaosSpawn",
            model: this.models.chaosSpawn,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 50,
            type: "unit",
            subType: "Mortal Tzeentch",
            wounds: 5,
            maxSize: 6,
        },
        chaosSorcererLord: {
            id: "chaosSorcererLord",
            model: this.models.chaosSorcererLord,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Mortal Wizard",
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Runestaff", id: "runestaff" },{ name: "Runesword", id: "runesword" }] }],
            isLeader: () => true,
        },
        chaosSorcererLordOnManticore: {
            id: "chaosSorcererLordOnManticore",
            model: this.models.chaosSorcererLordOnManticore,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Mortal Wizard - Behemoth",
            wounds: 12,
            isLeader: () => true,
            isBehemot: () => true,
        },
        chimera: {
            id: "chimera",
            model: this.models.chimera,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 220,
            type: "monster",
            subType: "Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        cockatrice: {
            id: "cockatrice",
            model: this.models.cockatrice,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 100,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        greatTaurus: {
            id: "greatTaurus",
            model: this.models.greatTaurus,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 140,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        lammasu: {
            id: "lammasu",
            model: this.models.lammasu,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            points: 140,
            type: "monster",
            subType: "Behemoth",
            wounds: 8,
            isBehemot: () => true,
        },
        chaosGargant: {
            id: "chaosGargant",
            model: this.models.chaosGargant,
            factions: [this.factions.CHAOSGARGANTS],
            size: 1,
            points: 170,
            type: "monster",
            subType: "Chaos Gargants - Behemoth",
            wounds: 12,
            isBehemot: () => true,
        },
        archaon: {
            id: "archaon",
            model: this.models.archaon,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            points: 700,
            type: "hero",
            subType: "Daemon Mortal Khorne Nurgle Slaanesh Tzeentch Everchosen Wizard - Unique Behemoth",
            wounds: 20,
            isLeader: () => true,
            isBehemot: () => true,
        },
        dragonOgors: {
            id: "dragonOgors",
            model: this.models.dragonOgors,
            factions: [this.factions.THUNDERSCORN],
            size: 3,
            points: 160,
            type: "unit",
            subType: "Thunderscorn Battleline",
            wounds: 5,
            maxSize: 12,
            weaponOptions: [{ options: [{ name: "Ancient Weapons", id: "ancientWeapons" },{ name: "Draconic War-glaives", id: "draconicWarGlaives" },{ name: "Draconic Crushers", id: "draconicCrushers" }] }],
            isBattleline: () => true,
        },
        varanguard: {
            id: "varanguard",
            model: this.models.varanguard,
            factions: [this.factions.EVERCHOSEN],
            size: 3,
            points: 300,
            type: "unit",
            subType: "Everchosen - Everchosen Battleline",
            wounds: 5,
            maxSize: 12,
            weaponOptions: [{ options: [{ name: "Ensorcelled Weapon", id: "ensorcelledWeapon" },{ name: "Fellspear", id: "fellspear" },{ name: "Daemonforged Blade", id: "daemonforgedBlade" }] }],
            isBattleline: () => true,
        },
        chaosLordOfSlaanesh: {
            id: "chaosLordOfSlaanesh",
            model: this.models.chaosLordOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Slaanesh",
            wounds: 5,
            isLeader: () => true,
        },
        hellflayersOfSlaanesh: {
            id: "hellflayersOfSlaanesh",
            model: this.models.hellflayersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Slaanesh",
            wounds: 6,
            maxSize: 3,
        },
        hellstridersOfSlaanesh: {
            id: "hellstridersOfSlaanesh",
            model: this.models.hellstridersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 5,
            points: 100,
            type: "unit",
            subType: "Slaanesh - Slaanesh Battleline",
            wounds: 2,
            maxSize: 20,
            weaponOptions: [{ options: [{ name: "Claw spear", id: "clawSpear" },{ name: "Hellscourge", id: "hellscourge" },{ name: "Claw spear & Shield", id: "clawSpearShield" },{ name: "Hellscourge & Shield", id: "hellscourgeShield" }] }],
            isBattleline: () => true,
        },
        putridBlightkings: {
            id: "putridBlightkings",
            model: this.models.putridBlightkings,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Nurgle Battleline",
            wounds: 4,
            maxSize: 20,
            maxPoints: 580,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-putridblightkings-en.pdf",
            isBattleline: () => true,
        },
        pusgoyleBlightlords: {
            id: "pusgoyleBlightlords",
            model: this.models.pusgoyleBlightlords,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 2,
            points: 220,
            type: "unit",
            subType: "Nurgle Battleline (Lord of Afflictions General)",
            wounds: 7,
            maxSize: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Pusgoyle-blightlords.pdf",
            isBattleline: () => true,
        },
        gauntSummonerAndChaosFamiliars: {
            id: "gauntSummonerAndChaosFamiliars",
            model: this.models.gauntSummonerAndChaosFamiliars,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Everchosen Arcanites Mortal Daemon Wizard",
            wounds: 5,
            isLeader: () => true,
        },
        gauntSummonerOfTzeentch: {
            id: "gauntSummonerOfTzeentch",
            model: this.models.gauntSummonerOfTzeentch,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Tzeentch Everchosen Mortal Daemon Wizard",
            wounds: 5,
            isLeader: () => true,
        },
        slambo: {
            id: "slambo",
            model: this.models.slambo,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Unique",
            wounds: 5,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/AoS_Slambo_Warscroll_EN.pdf",
            isLeader: () => true,
        },
        troggothKing: {
            id: "troggothKing",
            model: this.models.troggothKing,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 8,
            isLeader: () => true,
        },
        bloabRotspawned: {
            id: "bloabRotspawned",
            model: this.models.bloabRotspawned,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Blob-rotspawned.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        chaosDragon: {
            id: "chaosDragon",
            model: this.models.chaosDragon,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Behemoth",
            wounds: 10,
            isLeader: () => true,
            isBehemot: () => true,
        },
        morbidexTwiceborn: {
            id: "morbidexTwiceborn",
            model: this.models.morbidexTwiceborn,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-morbidextwiceborn-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        orghottsDaemonspew: {
            id: "orghottsDaemonspew",
            model: this.models.orghottsDaemonspew,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 260,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth",
            wounds: 12,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Orghotts_daemonspew.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        chaosFamiliars: {
            id: "chaosFamiliars",
            model: this.models.chaosFamiliars,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 2,
            points: 40,
            type: "unit",
            subType: undefined,
            wounds: 1,
            maxSize: 8,
        },
        chaosOgors: {
            id: "chaosOgors",
            model: this.models.chaosOgors,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
        },
        chaosTroggoths: {
            id: "chaosTroggoths",
            model: this.models.chaosTroggoths,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            points: 180,
            type: "unit",
            subType: undefined,
            wounds: 4,
            maxSize: 12,
        },
        dragonOgorShaggoth: {
            id: "dragonOgorShaggoth",
            model: this.models.dragonOgorShaggoth,
            factions: [this.factions.THUNDERSCORN],
            size: 1,
            points: 160,
            type: "hero",
            subType: undefined,
            wounds: 10,
            isLeader: () => true,
        },
        lordOfSlaaneshOnDaemonicMount: {
            id: "lordOfSlaaneshOnDaemonicMount",
            model: this.models.lordOfSlaaneshOnDaemonicMount,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 7,
            isLeader: () => true,
        },
        sorcerer: {
            id: "sorcerer",
            model: this.models.sorcerer,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard",
            wounds: 6,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Sorcerer.pdf",
            isLeader: () => true,
        },
        harbingerOfDecay: {
            id: "harbingerOfDecay",
            model: this.models.harbingerOfDecay,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Daemon",
            wounds: 7,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Harbinger-of-decay.pdf",
            isLeader: () => true,
        },
        lordOfAfflictions: {
            id: "lordOfAfflictions",
            model: this.models.lordOfAfflictions,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Daemon",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Lord-of-afflictions.pdf",
            isLeader: () => true,
        },
        daemonPrinceOfKhorne: {
            id: "daemonPrinceOfKhorne",
            model: this.models.daemonPrinceOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 160,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 8,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            isLeader: () => true,
            isBehemot: () => true,
        },
        aetherKhemist: {
            id: "aetherKhemist",
            model: this.models.aetherKhemist,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 5,
            bravery: 7,
            move: 4,
            save: "4+",
            isLeader: () => true,
        },
        aethericNavigator: {
            id: "aethericNavigator",
            model: this.models.aethericNavigator,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            bravery: 7,
            move: 4,
            save: "3+",
            isLeader: () => true,
        },
        arkanautAdmiral: {
            id: "arkanautAdmiral",
            model: this.models.arkanautAdmiral,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 6,
            bravery: 8,
            move: 4,
            save: "3+",
            isLeader: () => true,
        },
        arkanautCompany: {
            id: "arkanautCompany",
            model: this.models.arkanautCompany,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 10,
            points: 120,
            type: "unit",
            subType: "Battleline",
            wounds: 1,
            isBattleline: () => true,
        },
        arkanautFrigate: {
            id: "arkanautFrigate",
            model: this.models.arkanautFrigate,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 280,
            type: "warmachine",
            subType: "Behemoth",
            wounds: 14,
            isBehemot: () => true,
        },
        arkanautIronclad: {
            id: "arkanautIronclad",
            model: this.models.arkanautIronclad,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 440,
            type: "warmachine",
            subType: "Behemoth",
            wounds: 18,
            isBehemot: () => true,
        },
        brokkGrungsson: {
            id: "brokkGrungsson",
            model: this.models.brokkGrungsson,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 300,
            type: "hero",
            subType: "Unique",
            wounds: 8,
            bravery: 8,
            move: 12,
            save: "3+",
            isLeader: () => true,
        },
        endrinmaster: {
            id: "endrinmaster",
            model: this.models.endrinmaster,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 140,
            type: "hero",
            subType: undefined,
            wounds: 6,
            bravery: 7,
            move: 4,
            save: "4+",
            isLeader: () => true,
        },
        endrinriggers: {
            id: "endrinriggers",
            model: this.models.endrinriggers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 2,
        },
        grundstokGunhauler: {
            id: "grundstokGunhauler",
            model: this.models.grundstokGunhauler,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            points: 220,
            type: "warmachine",
            subType: "Artillery",
            wounds: 10,
            isArtillery: () => true,
        },
        grundstokThunderers: {
            id: "grundstokThunderers",
            model: this.models.grundstokThunderers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 5,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 1,
        },
        skywardens: {
            id: "skywardens",
            model: this.models.skywardens,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
        },
        khorgosKhul: {
            id: "khorgosKhul",
            model: this.models.khorgosKhul,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Unique",
            wounds: 6,
            isLeader: () => true,
        },
        exaltedGreaterDaemonOfKhorne: {
            id: "exaltedGreaterDaemonOfKhorne",
            model: this.models.exaltedGreaterDaemonOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            points: 640,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            wounds: 20,
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfNurgle: {
            id: "exaltedGreaterDaemonOfNurgle",
            model: this.models.exaltedGreaterDaemonOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 500,
            type: "hero",
            subType: "Nurgle Daemon - Behemoth",
            wounds: 16,
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfSlaanesh: {
            id: "exaltedGreaterDaemonOfSlaanesh",
            model: this.models.exaltedGreaterDaemonOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            points: 500,
            type: "hero",
            subType: "Slaanesh Daemon - Behemoth",
            wounds: 15,
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfTzeentch: {
            id: "exaltedGreaterDaemonOfTzeentch",
            model: this.models.exaltedGreaterDaemonOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            points: 580,
            type: "hero",
            subType: "Tzeentch Daemon - Behemoth",
            wounds: 20,
            isLeader: () => true,
            isBehemot: () => true,
        },
        warpgnawVerminlord: {
            id: "warpgnawVerminlord",
            model: this.models.warpgnawVerminlord,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            points: 340,
            type: "hero",
            subType: "Behemoth",
            wounds: 10,
            isLeader: () => true,
            isBehemot: () => true,
        },
        neaveBlacktalon: {
            id: "neaveBlacktalon",
            model: this.models.neaveBlacktalon,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Unique",
            wounds: 6,
            isLeader: () => true,
        },
        horticulousSlimux: {
            id: "horticulousSlimux",
            model: this.models.horticulousSlimux,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            points: 220,
            type: "hero",
            subType: "Nurgle Daemon - Unique",
            wounds: 8,
            isLeader: () => true,
        },
        steelheartSChampions: {
            id: "steelheartSChampions",
            model: this.models.steelheartSChampions,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 100,
            type: "unit",
            subType: "One per army",
            wounds: 2,
        },
        garrekSReavers: {
            id: "garrekSReavers",
            model: this.models.garrekSReavers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            points: 60,
            type: "unit",
            subType: "One per army",
            wounds: 1,
        },
        lordOrdinator: {
            id: "lordOrdinator",
            model: this.models.lordOrdinator,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        darkoathWarqueen: {
            id: "darkoathWarqueen",
            model: this.models.darkoathWarqueen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Mortal",
            wounds: 5,
            isLeader: () => true,
        },
        fungoidCaveShaman: {
            id: "fungoidCaveShaman",
            model: this.models.fungoidCaveShaman,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            points: 80,
            type: "hero",
            subType: "Moonclan Wizard",
            wounds: 4,
            isLeader: () => true,
        },
        knightOfShrouds: {
            id: "knightOfShrouds",
            model: this.models.knightOfShrouds,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Nighthaunt",
            wounds: 5,
            isLeader: () => true,
        },
        skritchSpiteclaw: {
            id: "skritchSpiteclaw",
            model: this.models.skritchSpiteclaw,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            points: 120,
            type: "hero",
            subType: "One per army - Must include Spiteclaw's Swarm",
            wounds: 5,
            isLeader: () => true,
        },
        spiteclawSSwarm: {
            id: "spiteclawSSwarm",
            model: this.models.spiteclawSSwarm,
            factions: [this.factions.SKAVENVERMINUS],
            size: 4,
            points: 30,
            type: "unit",
            subType: "One per army - Must include Skritch Spiteclaw",
            wounds: 1,
        },
        fjulGrimnir: {
            id: "fjulGrimnir",
            model: this.models.fjulGrimnir,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "One per army - Must include The Chosen Axes",
            wounds: 6,
            isLeader: () => true,
        },
        theChosenAxes: {
            id: "theChosenAxes",
            model: this.models.theChosenAxes,
            factions: [this.factions.FYRESLAYERS],
            size: 3,
            points: 40,
            type: "unit",
            subType: "One per army - Must include Fjul Grimnir",
            wounds: 1,
        },
        gavrielSureheart: {
            id: "gavrielSureheart",
            model: this.models.gavrielSureheart,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            points: 100,
            type: "hero",
            subType: "Unique",
            wounds: 5,
            isLeader: () => true,
        },
    };
    
    extraAbilities = {
        bonesplitterzSquirmyWarpaint: {
            id: "bonesplitterzSquirmyWarpaint",
            ability: { name: "Squirmy Warpaint", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        bonesplitterzProphetOfDaWaaagh: {
            id: "bonesplitterzProphetOfDaWaaagh",
            ability: { name: "Prophet of da Waaagh!", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        bonesplitterzGreatHunter: {
            id: "bonesplitterzGreatHunter",
            ability: { name: "Great Hunter", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        bonesplitterzKillaInstincts: {
            id: "bonesplitterzKillaInstincts",
            ability: { name: "Killa Instincts", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        bonesplitterzWaaaghMonger: {
            id: "bonesplitterzWaaaghMonger",
            ability: { name: "Waaagh Monger", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        bonesplitterzMonsterKilla: {
            id: "bonesplitterzMonsterKilla",
            ability: { name: "Monster Killa", description: "" },
            allegiance: this.allegiances.bonesplitterz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethRealmWalker: {
            id: "sylvanethRealmWalker",
            ability: { name: "Realm Walker", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethGnarledWarrior: {
            id: "sylvanethGnarledWarrior",
            ability: { name: "Gnarled Warrior", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethGiftOfGhyran: {
            id: "sylvanethGiftOfGhyran",
            ability: { name: "Gift of Ghyran", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethLordOfSpites: {
            id: "sylvanethLordOfSpites",
            ability: { name: "Lord of Spites", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethWarsinger: {
            id: "sylvanethWarsinger",
            ability: { name: "Warsinger", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethWisdomOfTheAncients: {
            id: "sylvanethWisdomOfTheAncients",
            ability: { name: "Wisdom of the Ancients", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        sylvanethAncientNobility: {
            id: "sylvanethAncientNobility",
            ability: { name: "Ancient Nobility", description: "" },
            allegiance: this.allegiances.sylvaneth,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersMassiveBulk: {
            id: "beastclawRaidersMassiveBulk",
            ability: { name: "Massive Bulk", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersEverwinterSMaster: {
            id: "beastclawRaidersEverwinterSMaster",
            ability: { name: "Everwinter's Master", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersAvalancheVoice: {
            id: "beastclawRaidersAvalancheVoice",
            ability: { name: "Avalanche Voice", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersFamedHunter: {
            id: "beastclawRaidersFamedHunter",
            ability: { name: "Famed Hunter", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersBeastEater: {
            id: "beastclawRaidersBeastEater",
            ability: { name: "Beast Eater", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        beastclawRaidersFearsomeLeader: {
            id: "beastclawRaidersFearsomeLeader",
            ability: { name: "Fearsome Leader", description: "" },
            allegiance: this.allegiances.beastclawRaiders,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchArchSorcerer: {
            id: "tzeentchArchSorcerer",
            ability: { name: "Arch Sorcerer", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchNexusOfFate: {
            id: "tzeentchNexusOfFate",
            ability: { name: "Nexus of Fate", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchMagicalSupremacy: {
            id: "tzeentchMagicalSupremacy",
            ability: { name: "Magical Supremacy", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchDaemonspark: {
            id: "tzeentchDaemonspark",
            ability: { name: "Daemonspark", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchIncorporealForm: {
            id: "tzeentchIncorporealForm",
            ability: { name: "Incorporeal Form", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchAetherTether: {
            id: "tzeentchAetherTether",
            ability: { name: "Aether Tether", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchBoundlessMutation: {
            id: "tzeentchBoundlessMutation",
            ability: { name: "Boundless Mutation", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchCultDemagogue: {
            id: "tzeentchCultDemagogue",
            ability: { name: "Cult Demagogue", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchArcaneSacrifice: {
            id: "tzeentchArcaneSacrifice",
            ability: { name: "Arcane Sacrifice", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchBlessingOfTzeentch: {
            id: "tzeentchBlessingOfTzeentch",
            ability: { name: "Blessing of Tzeentch", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchSoulBurn: {
            id: "tzeentchSoulBurn",
            ability: { name: "Soul Burn", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        tzeentchIllusionist: {
            id: "tzeentchIllusionist",
            ability: { name: "Illusionist", description: "" },
            allegiance: this.allegiances.tzeentch,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessArchSorcerer: {
            id: "slavesToDarknessArchSorcerer",
            ability: { name: "Arch Sorcerer", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessNexusOfFate: {
            id: "slavesToDarknessNexusOfFate",
            ability: { name: "Nexus of Fate", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessMagicalSupremacy: {
            id: "slavesToDarknessMagicalSupremacy",
            ability: { name: "Magical Supremacy", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessDaemonspark: {
            id: "slavesToDarknessDaemonspark",
            ability: { name: "Daemonspark", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessIncorporealForm: {
            id: "slavesToDarknessIncorporealForm",
            ability: { name: "Incorporeal Form", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessAetherTether: {
            id: "slavesToDarknessAetherTether",
            ability: { name: "Aether Tether", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessBlessingOfTzeentch: {
            id: "slavesToDarknessBlessingOfTzeentch",
            ability: { name: "Blessing of Tzeentch", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessSoulBurn: {
            id: "slavesToDarknessSoulBurn",
            ability: { name: "Soul Burn", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessIllusionist: {
            id: "slavesToDarknessIllusionist",
            ability: { name: "Illusionist", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsShieldedByFaith: {
            id: "stormcastEternalsShieldedByFaith",
            ability: { name: "Shielded by Faith", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsConsummateCommander: {
            id: "stormcastEternalsConsummateCommander",
            ability: { name: "Consummate Commander", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsCunningStrategist: {
            id: "stormcastEternalsCunningStrategist",
            ability: { name: "Cunning Strategist", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsZealousCrusader: {
            id: "stormcastEternalsZealousCrusader",
            ability: { name: "Zealous Crusader", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsStaunchDefender: {
            id: "stormcastEternalsStaunchDefender",
            ability: { name: "Staunch Defender", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsChampionOfTheRealms: {
            id: "stormcastEternalsChampionOfTheRealms",
            ability: { name: "Champion of the Realms", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsWeCannotFail: {
            id: "stormcastEternalsWeCannotFail",
            ability: { name: "We Cannot Fail", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsTheStrikeInspired: {
            id: "stormcastEternalsTheStrikeInspired",
            ability: { name: "The Strike Inspired", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        stormcastEternalsVeteranOnTheGnarlwood: {
            id: "stormcastEternalsVeteranOnTheGnarlwood",
            ability: { name: "Veteran on the Gnarlwood", description: "" },
            allegiance: this.allegiances.stormcastEternals,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenArchSorcerer: {
            id: "fistOfTheEverchosenArchSorcerer",
            ability: { name: "Arch Sorcerer", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenNexusOfFate: {
            id: "fistOfTheEverchosenNexusOfFate",
            ability: { name: "Nexus of Fate", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenMagicalSupremacy: {
            id: "fistOfTheEverchosenMagicalSupremacy",
            ability: { name: "Magical Supremacy", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenDaemonspark: {
            id: "fistOfTheEverchosenDaemonspark",
            ability: { name: "Daemonspark", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenIncorporealForm: {
            id: "fistOfTheEverchosenIncorporealForm",
            ability: { name: "Incorporeal Form", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenAetherTether: {
            id: "fistOfTheEverchosenAetherTether",
            ability: { name: "Aether Tether", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenBoundlessMutation: {
            id: "fistOfTheEverchosenBoundlessMutation",
            ability: { name: "Boundless Mutation", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenCultDemagogue: {
            id: "fistOfTheEverchosenCultDemagogue",
            ability: { name: "Cult Demagogue", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenArcaneSacrifice: {
            id: "fistOfTheEverchosenArcaneSacrifice",
            ability: { name: "Arcane Sacrifice", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenBlessingOfTzeentch: {
            id: "fistOfTheEverchosenBlessingOfTzeentch",
            ability: { name: "Blessing of Tzeentch", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenSoulBurn: {
            id: "fistOfTheEverchosenSoulBurn",
            ability: { name: "Soul Burn", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fistOfTheEverchosenIllusionist: {
            id: "fistOfTheEverchosenIllusionist",
            ability: { name: "Illusionist", description: "" },
            allegiance: this.allegiances.fistOfTheEverchosen,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneArchSlaughterer: {
            id: "khorneArchSlaughterer",
            ability: { name: "Arch-slaughterer", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneUnrivalledBattelust: {
            id: "khorneUnrivalledBattelust",
            ability: { name: "Unrivalled Battelust", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneSlaughterborn: {
            id: "khorneSlaughterborn",
            ability: { name: "Slaughterborn", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneMarkOfTheCannibal: {
            id: "khorneMarkOfTheCannibal",
            ability: { name: "Mark of the Cannibal", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneBloodsworn: {
            id: "khorneBloodsworn",
            ability: { name: "Bloodsworn", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneDiscipleOfKhorne: {
            id: "khorneDiscipleOfKhorne",
            ability: { name: "Disciple of Khorne", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneHungryForGlory: {
            id: "khorneHungryForGlory",
            ability: { name: "Hungry for Glory", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneBerzerkerLord: {
            id: "khorneBerzerkerLord",
            ability: { name: "Berzerker Lord", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneViolentUrgency: {
            id: "khorneViolentUrgency",
            ability: { name: "Violent Urgency", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneImmensePower: {
            id: "khorneImmensePower",
            ability: { name: "Immense Power", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneAspectOfDeath: {
            id: "khorneAspectOfDeath",
            ability: { name: "Aspect of Death", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        khorneDevastatingBlow: {
            id: "khorneDevastatingBlow",
            ability: { name: "Devastating Blow", description: "" },
            allegiance: this.allegiances.khorne,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessArchSlaughterer: {
            id: "slavesToDarknessArchSlaughterer",
            ability: { name: "Arch-slaughterer", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessUnrivalledBattelust: {
            id: "slavesToDarknessUnrivalledBattelust",
            ability: { name: "Unrivalled Battelust", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessSlaughterborn: {
            id: "slavesToDarknessSlaughterborn",
            ability: { name: "Slaughterborn", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessHungryForGlory: {
            id: "slavesToDarknessHungryForGlory",
            ability: { name: "Hungry for Glory", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessBerzerkerLord: {
            id: "slavesToDarknessBerzerkerLord",
            ability: { name: "Berzerker Lord", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessViolentUrgency: {
            id: "slavesToDarknessViolentUrgency",
            ability: { name: "Violent Urgency", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsDoughtyChampion: {
            id: "kharadronOverlordsDoughtyChampion",
            ability: { name: "Doughty Champion", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsFleetmaster: {
            id: "kharadronOverlordsFleetmaster",
            ability: { name: "Fleetmaster", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsGrudgebearer: {
            id: "kharadronOverlordsGrudgebearer",
            ability: { name: "Grudgebearer", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCode: {
            id: "kharadronOverlordsSticklerForTheCode",
            ability: { name: "Stickler for the Code", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeSurrenderIsRarelyProfitable: {
            id: "kharadronOverlordsSticklerForTheCodeSurrenderIsRarelyProfitable",
            ability: { name: "Stickler for the Code:Surrender Is Rarely Profitable", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeThereSNoRewardWithoutRisk: {
            id: "kharadronOverlordsSticklerForTheCodeThereSNoRewardWithoutRisk",
            ability: { name: "Stickler for the Code:There's No Reward Without Risk", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeThereSNoTradingWithSomePeople: {
            id: "kharadronOverlordsSticklerForTheCodeThereSNoTradingWithSomePeople",
            ability: { name: "Stickler for the Code:There's No Trading With Some People", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeTodaySFoesAreTomorrowSCustomers: {
            id: "kharadronOverlordsSticklerForTheCodeTodaySFoesAreTomorrowSCustomers",
            ability: { name: "Stickler for the Code:Today's Foes Are Tomorrow's Customers", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeWithoutOurShipsWeAreNaught: {
            id: "kharadronOverlordsSticklerForTheCodeWithoutOurShipsWeAreNaught",
            ability: { name: "Stickler for the Code:Without Our Ships We Are Naught", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsSticklerForTheCodeTheseAreJustGuidelines: {
            id: "kharadronOverlordsSticklerForTheCodeTheseAreJustGuidelines",
            ability: { name: "Stickler for the Code:These are Just Guidelines", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsProspector: {
            id: "kharadronOverlordsProspector",
            ability: { name: "Prospector", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsRisingStar: {
            id: "kharadronOverlordsRisingStar",
            ability: { name: "Rising Star", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsChampionOfProgress: {
            id: "kharadronOverlordsChampionOfProgress",
            ability: { name: "Champion of Progress", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        kharadronOverlordsOpportunisticPrivateers: {
            id: "kharadronOverlordsOpportunisticPrivateers",
            ability: { name: "Opportunistic Privateers", description: "" },
            allegiance: this.allegiances.kharadronOverlords,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensMerciless: {
            id: "darklingCovensMerciless",
            ability: { name: "Merciless", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensArrogantProwess: {
            id: "darklingCovensArrogantProwess",
            ability: { name: "Arrogant Prowess", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensSustainedByMisery: {
            id: "darklingCovensSustainedByMisery",
            ability: { name: "Sustained by Misery", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensMasterOfTheSorcerousArts: {
            id: "darklingCovensMasterOfTheSorcerousArts",
            ability: { name: "Master of the Sorcerous Arts", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensEffortlessGrace: {
            id: "darklingCovensEffortlessGrace",
            ability: { name: "Effortless Grace", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        darklingCovensImpossiblySwift: {
            id: "darklingCovensImpossiblySwift",
            ability: { name: "Impossibly Swift", description: "" },
            allegiance: this.allegiances.darklingCovens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedResolute: {
            id: "dispossessedResolute",
            ability: { name: "Resolute", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedResilient: {
            id: "dispossessedResilient",
            ability: { name: "Resilient", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedUnforgiving: {
            id: "dispossessedUnforgiving",
            ability: { name: "Unforgiving", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedSiegemaster: {
            id: "dispossessedSiegemaster",
            ability: { name: "Siegemaster", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedBattleFury: {
            id: "dispossessedBattleFury",
            ability: { name: "Battle Fury", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        dispossessedGrudgebearer: {
            id: "dispossessedGrudgebearer",
            ability: { name: "Grudgebearer", description: "" },
            allegiance: this.allegiances.dispossessed,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesInspiring: {
            id: "freePeoplesInspiring",
            ability: { name: "Inspiring", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesBattleTestedVeteran: {
            id: "freePeoplesBattleTestedVeteran",
            ability: { name: "Battle-tested Veteran", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesShrewdCommander: {
            id: "freePeoplesShrewdCommander",
            ability: { name: "Shrewd Commander", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesIndomitable: {
            id: "freePeoplesIndomitable",
            ability: { name: "Indomitable", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesRighteousFury: {
            id: "freePeoplesRighteousFury",
            ability: { name: "Righteous Fury", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        freePeoplesGrimResolve: {
            id: "freePeoplesGrimResolve",
            ability: { name: "Grim Resolve", description: "" },
            allegiance: this.allegiances.freePeoples,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersFuryOfTheFyreslayers: {
            id: "fyreslayersFuryOfTheFyreslayers",
            ability: { name: "Fury of the Fyreslayers", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersExemplarOfTheAncestor: {
            id: "fyreslayersExemplarOfTheAncestor",
            ability: { name: "Exemplar of the Ancestor", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersBloodOfTheBerserker: {
            id: "fyreslayersBloodOfTheBerserker",
            ability: { name: "Blood of the Berserker", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersIronOfTheGuardian: {
            id: "fyreslayersIronOfTheGuardian",
            ability: { name: "Iron of the Guardian", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersDestroyerOfFoes: {
            id: "fyreslayersDestroyerOfFoes",
            ability: { name: "Destroyer of Foes", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fyreslayersSpiritOfGrimnir: {
            id: "fyreslayersSpiritOfGrimnir",
            ability: { name: "Spirit of Grimnir", description: "" },
            allegiance: this.allegiances.fyreslayers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonArcaneMight: {
            id: "seraphonArcaneMight",
            ability: { name: "Arcane Might", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonVastIntellect: {
            id: "seraphonVastIntellect",
            ability: { name: "Vast Intellect", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonGreatRememberer: {
            id: "seraphonGreatRememberer",
            ability: { name: "Great Rememberer", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonDisciplinedFury: {
            id: "seraphonDisciplinedFury",
            ability: { name: "Disciplined Fury", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonThicklyScaledHide: {
            id: "seraphonThicklyScaledHide",
            ability: { name: "Thickly Scaled Hide", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonMightyWarLeader: {
            id: "seraphonMightyWarLeader",
            ability: { name: "Mighty War Leader", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonMasterOfStarRituals: {
            id: "seraphonMasterOfStarRituals",
            ability: { name: "Master of Star Rituals", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonNimble: {
            id: "seraphonNimble",
            ability: { name: "Nimble", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        seraphonCunning: {
            id: "seraphonCunning",
            ability: { name: "Cunning", description: "" },
            allegiance: this.allegiances.seraphon,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersStalkerOfTheHiddenPaths: {
            id: "wanderersStalkerOfTheHiddenPaths",
            ability: { name: "Stalker of the Hidden Paths", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersMystWalker: {
            id: "wanderersMystWalker",
            ability: { name: "Myst Walker", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersMasterfulHunter: {
            id: "wanderersMasterfulHunter",
            ability: { name: "Masterful Hunter", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersEagleEyed: {
            id: "wanderersEagleEyed",
            ability: { name: "Eagle-eyed", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersLordOfBlades: {
            id: "wanderersLordOfBlades",
            ability: { name: "Lord of Blades", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        wanderersSingerOfSpells: {
            id: "wanderersSingerOfSpells",
            ability: { name: "Singer of Spells", description: "" },
            allegiance: this.allegiances.wanderers,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdUnreasoningAndDeadly: {
            id: "brayherdUnreasoningAndDeadly",
            ability: { name: "Unreasoning and Deadly", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdCrownOfHorns: {
            id: "brayherdCrownOfHorns",
            ability: { name: "Crown of Horns", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdMalevolentDespoiler: {
            id: "brayherdMalevolentDespoiler",
            ability: { name: "Malevolent Despoiler", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdMassiveBeastlord: {
            id: "brayherdMassiveBeastlord",
            ability: { name: "Massive Beastlord", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdScionOfTheDarkGods: {
            id: "brayherdScionOfTheDarkGods",
            ability: { name: "Scion of the Dark Gods", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        brayherdBestialCunning: {
            id: "brayherdBestialCunning",
            ability: { name: "Bestial Cunning", description: "" },
            allegiance: this.allegiances.brayherd,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshLordsOfExcess: {
            id: "slaaneshLordsOfExcess",
            ability: { name: "Lords of Excess", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshDevoteeOfTorment: {
            id: "slaaneshDevoteeOfTorment",
            ability: { name: "Devotee of Torment", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshInvigoratedByPain: {
            id: "slaaneshInvigoratedByPain",
            ability: { name: "Invigorated by Pain", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshSupremelyVain: {
            id: "slaaneshSupremelyVain",
            ability: { name: "Supremely Vain", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshAllureOfSlaanesh: {
            id: "slaaneshAllureOfSlaanesh",
            ability: { name: "Allure of Slaanesh", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slaaneshCruelAndSadistic: {
            id: "slaaneshCruelAndSadistic",
            ability: { name: "Cruel and Sadistic", description: "" },
            allegiance: this.allegiances.slaanesh,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessLordsOfExcess: {
            id: "slavesToDarknessLordsOfExcess",
            ability: { name: "Lords of Excess", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessDevoteeOfTorment: {
            id: "slavesToDarknessDevoteeOfTorment",
            ability: { name: "Devotee of Torment", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessInvigoratedByPain: {
            id: "slavesToDarknessInvigoratedByPain",
            ability: { name: "Invigorated by Pain", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessSupremelyVain: {
            id: "slavesToDarknessSupremelyVain",
            ability: { name: "Supremely Vain", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessAllureOfSlaanesh: {
            id: "slavesToDarknessAllureOfSlaanesh",
            ability: { name: "Allure of Slaanesh", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessCruelAndSadistic: {
            id: "slavesToDarknessCruelAndSadistic",
            ability: { name: "Cruel and Sadistic", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessEternalVendetta: {
            id: "slavesToDarknessEternalVendetta",
            ability: { name: "Eternal Vendetta", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessFlamesOfSpite: {
            id: "slavesToDarknessFlamesOfSpite",
            ability: { name: "Flames of Spite", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessMasterOfDeception: {
            id: "slavesToDarknessMasterOfDeception",
            ability: { name: "Master of Deception", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessHatredIncarnate: {
            id: "slavesToDarknessHatredIncarnate",
            ability: { name: "Hatred Incarnate", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessLordOfTerror: {
            id: "slavesToDarknessLordOfTerror",
            ability: { name: "Lord of Terror", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessExaltedChampion: {
            id: "slavesToDarknessExaltedChampion",
            ability: { name: "Exalted Champion", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensMalevolent: {
            id: "skavenPestilensMalevolent",
            ability: { name: "Malevolent", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensDiseased: {
            id: "skavenPestilensDiseased",
            ability: { name: "Diseased", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensMasterOfRotAndRuin: {
            id: "skavenPestilensMasterOfRotAndRuin",
            ability: { name: "Master of Rot and Ruin", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensFanaticalLeader: {
            id: "skavenPestilensFanaticalLeader",
            ability: { name: "Fanatical Leader", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensVerminousValour: {
            id: "skavenPestilensVerminousValour",
            ability: { name: "Verminous Valour", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensArchitectOfDeath: {
            id: "skavenPestilensArchitectOfDeath",
            ability: { name: "Architect of Death", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreMalevolent: {
            id: "skavenSkryreMalevolent",
            ability: { name: "Malevolent", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreCunningCreature: {
            id: "skavenSkryreCunningCreature",
            ability: { name: "Cunning Creature", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreDerangedInventor: {
            id: "skavenSkryreDerangedInventor",
            ability: { name: "Deranged Inventor", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreMasterfulScavenger: {
            id: "skavenSkryreMasterfulScavenger",
            ability: { name: "Masterful Scavenger", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreVerminousValour: {
            id: "skavenSkryreVerminousValour",
            ability: { name: "Verminous Valour", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenSkryreOverseerOfDestruction: {
            id: "skavenSkryreOverseerOfDestruction",
            ability: { name: "Overseer of Destruction", description: "" },
            allegiance: this.allegiances.skavenSkryre,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsBringerOfDeath: {
            id: "fleshEaterCourtsBringerOfDeath",
            ability: { name: "Bringer of Death", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsFrenziedFleshEater: {
            id: "fleshEaterCourtsFrenziedFleshEater",
            ability: { name: "Frenzied Flesh-eater", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsMagesticHorror: {
            id: "fleshEaterCourtsMagesticHorror",
            ability: { name: "Magestic Horror", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsSavageBeyondReason: {
            id: "fleshEaterCourtsSavageBeyondReason",
            ability: { name: "Savage Beyond Reason", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsDarkWizardry: {
            id: "fleshEaterCourtsDarkWizardry",
            ability: { name: "Dark Wizardry", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        fleshEaterCourtsCompletelyDelusional: {
            id: "fleshEaterCourtsCompletelyDelusional",
            ability: { name: "Completely Delusional", description: "" },
            allegiance: this.allegiances.fleshEaterCourts,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntHatredOfTheLiving: {
            id: "nighthauntHatredOfTheLiving",
            ability: { name: "Hatred of the Living", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntTerrifyingEntity: {
            id: "nighthauntTerrifyingEntity",
            ability: { name: "Terrifying Entity", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntLingeringSpirit: {
            id: "nighthauntLingeringSpirit",
            ability: { name: "Lingering Spirit", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntPitilessExecutioner: {
            id: "nighthauntPitilessExecutioner",
            ability: { name: "Pitiless Executioner", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntCloakedInShadow: {
            id: "nighthauntCloakedInShadow",
            ability: { name: "Cloaked in Shadow", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nighthauntRulerOfTheSpiritHosts: {
            id: "nighthauntRulerOfTheSpiritHosts",
            ability: { name: "Ruler of the Spirit Hosts", description: "" },
            allegiance: this.allegiances.nighthaunt,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightCurseOfTheRevenant: {
            id: "soulblightCurseOfTheRevenant",
            ability: { name: "Curse of the Revenant", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightDreadKnight: {
            id: "soulblightDreadKnight",
            ability: { name: "Dread Knight", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightTransfix: {
            id: "soulblightTransfix",
            ability: { name: "Transfix", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightMistForm: {
            id: "soulblightMistForm",
            ability: { name: "Mist Form", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightKillingBlow: {
            id: "soulblightKillingBlow",
            ability: { name: "Killing Blow", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        soulblightBloodFury: {
            id: "soulblightBloodFury",
            ability: { name: "Blood Fury", description: "" },
            allegiance: this.allegiances.soulblight,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzHulkingMuscleBoundBrute: {
            id: "ironjawzHulkingMuscleBoundBrute",
            ability: { name: "Hulking Muscle-bound Brute", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzLiveToFight: {
            id: "ironjawzLiveToFight",
            ability: { name: "Live to Fight", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzBrutishCunning: {
            id: "ironjawzBrutishCunning",
            ability: { name: "Brutish Cunning", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzBestialCharisma: {
            id: "ironjawzBestialCharisma",
            ability: { name: "Bestial Charisma", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzProphetOfTheWaaagh: {
            id: "ironjawzProphetOfTheWaaagh",
            ability: { name: "Prophet of the Waaagh!", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        ironjawzIronclad: {
            id: "ironjawzIronclad",
            ability: { name: "Ironclad", description: "" },
            allegiance: this.allegiances.ironjawz,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleGrandfatherSBlessing: {
            id: "nurgleGrandfatherSBlessing",
            ability: { name: "Grandfather's Blessing", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleLivingPlague: {
            id: "nurgleLivingPlague",
            ability: { name: "Living Plague", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleHulkingPhysique: {
            id: "nurgleHulkingPhysique",
            ability: { name: "Hulking Physique", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleBloatedWithCorruption: {
            id: "nurgleBloatedWithCorruption",
            ability: { name: "Bloated with Corruption", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleAvalancheOfRottenFlesh: {
            id: "nurgleAvalancheOfRottenFlesh",
            ability: { name: "Avalanche of Rotten Flesh", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleResilient: {
            id: "nurgleResilient",
            ability: { name: "Resilient", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleHideousVisage: {
            id: "nurgleHideousVisage",
            ability: { name: "Hideous Visage", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleOverpoweringStench: {
            id: "nurgleOverpoweringStench",
            ability: { name: "Overpowering Stench", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleVirulentContagion: {
            id: "nurgleVirulentContagion",
            ability: { name: "Virulent Contagion", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleTaintedCorruptor: {
            id: "nurgleTaintedCorruptor",
            ability: { name: "Tainted Corruptor", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurgleNurglingInfestation: {
            id: "nurgleNurglingInfestation",
            ability: { name: "Nurgling Infestation", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        nurglePestilentBreath: {
            id: "nurglePestilentBreath",
            ability: { name: "Pestilent Breath", description: "" },
            allegiance: this.allegiances.nurgle,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessGrandfatherSBlessing: {
            id: "slavesToDarknessGrandfatherSBlessing",
            ability: { name: "Grandfather's Blessing", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessLivingPlague: {
            id: "slavesToDarknessLivingPlague",
            ability: { name: "Living Plague", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessHulkingPhysique: {
            id: "slavesToDarknessHulkingPhysique",
            ability: { name: "Hulking Physique", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessHideousVisage: {
            id: "slavesToDarknessHideousVisage",
            ability: { name: "Hideous Visage", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessOverpoweringStench: {
            id: "slavesToDarknessOverpoweringStench",
            ability: { name: "Overpowering Stench", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessVirulentContagion: {
            id: "slavesToDarknessVirulentContagion",
            ability: { name: "Virulent Contagion", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessTaintedCorruptor: {
            id: "slavesToDarknessTaintedCorruptor",
            ability: { name: "Tainted Corruptor", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessNurglingInfestation: {
            id: "slavesToDarknessNurglingInfestation",
            ability: { name: "Nurgling Infestation", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        slavesToDarknessPestilentBreath: {
            id: "slavesToDarknessPestilentBreath",
            ability: { name: "Pestilent Breath", description: "" },
            allegiance: this.allegiances.slavesToDarkness,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensGrandfatherSBlessing: {
            id: "skavenPestilensGrandfatherSBlessing",
            ability: { name: "Grandfather's Blessing", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensLivingPlague: {
            id: "skavenPestilensLivingPlague",
            ability: { name: "Living Plague", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensHulkingPhysique: {
            id: "skavenPestilensHulkingPhysique",
            ability: { name: "Hulking Physique", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensTaintedCorruptor: {
            id: "skavenPestilensTaintedCorruptor",
            ability: { name: "Tainted Corruptor", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensNurglingInfestation: {
            id: "skavenPestilensNurglingInfestation",
            ability: { name: "Nurgling Infestation", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        skavenPestilensPestilentBreath: {
            id: "skavenPestilensPestilentBreath",
            ability: { name: "Pestilent Breath", description: "" },
            allegiance: this.allegiances.skavenPestilens,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashMasterOfDeath: {
            id: "legionsOfNagashMasterOfDeath",
            ability: { name: "Master of Death", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashChosenChampion: {
            id: "legionsOfNagashChosenChampion",
            ability: { name: "Chosen Champion", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashBaneOfTheLiving: {
            id: "legionsOfNagashBaneOfTheLiving",
            ability: { name: "Bane of the Living", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashAuraOfAges: {
            id: "legionsOfNagashAuraOfAges",
            ability: { name: "Aura of Ages", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashAncientStrategist: {
            id: "legionsOfNagashAncientStrategist",
            ability: { name: "Ancient Strategist", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashLordOfNagashizzar: {
            id: "legionsOfNagashLordOfNagashizzar",
            ability: { name: "Lord of Nagashizzar", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashEmissaryOfTheMaster: {
            id: "legionsOfNagashEmissaryOfTheMaster",
            ability: { name: "Emissary of the Master", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashMarkOfTheFavoured: {
            id: "legionsOfNagashMarkOfTheFavoured",
            ability: { name: "Mark of the Favoured", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashDarkAcolyte: {
            id: "legionsOfNagashDarkAcolyte",
            ability: { name: "Dark Acolyte", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashMasteryOfDeath: {
            id: "legionsOfNagashMasteryOfDeath",
            ability: { name: "Mastery of Death", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashPeerlessCommander: {
            id: "legionsOfNagashPeerlessCommander",
            ability: { name: "Peerless Commander", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashBoundToTheMaster: {
            id: "legionsOfNagashBoundToTheMaster",
            ability: { name: "Bound to the Master", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashSwiftStrikes: {
            id: "legionsOfNagashSwiftStrikes",
            ability: { name: "Swift Strikes", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashSoulCrushingContempt: {
            id: "legionsOfNagashSoulCrushingContempt",
            ability: { name: "Soul-Crushing Contempt", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashAristocracyOfBlood: {
            id: "legionsOfNagashAristocracyOfBlood",
            ability: { name: "Aristocracy of Blood", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashAuraOfDarkMajesty: {
            id: "legionsOfNagashAuraOfDarkMajesty",
            ability: { name: "Aura of Dark Majesty", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashWalkingDeath: {
            id: "legionsOfNagashWalkingDeath",
            ability: { name: "Walking Death", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashSanguineBlur: {
            id: "legionsOfNagashSanguineBlur",
            ability: { name: "Sanguine Blur", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashAboveSuspicion: {
            id: "legionsOfNagashAboveSuspicion",
            ability: { name: "Above Suspicion", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashSwiftForm: {
            id: "legionsOfNagashSwiftForm",
            ability: { name: "Swift Form", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashUnbendingWill: {
            id: "legionsOfNagashUnbendingWill",
            ability: { name: "Unbending Will", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashMercilessHunter: {
            id: "legionsOfNagashMercilessHunter",
            ability: { name: "Merciless Hunter", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashUnholyImpetus: {
            id: "legionsOfNagashUnholyImpetus",
            ability: { name: "Unholy Impetus", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        legionsOfNagashTerrifyingVisage: {
            id: "legionsOfNagashTerrifyingVisage",
            ability: { name: "Terrifying Visage", description: "" },
            allegiance: this.allegiances.legionsOfNagash,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineBathedInBlood: {
            id: "daughtersOfKhaineBathedInBlood",
            ability: { name: "Bathed in Blood", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineZealousOrator: {
            id: "daughtersOfKhaineZealousOrator",
            ability: { name: "Zealous Orator", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineBloodySacrificer: {
            id: "daughtersOfKhaineBloodySacrificer",
            ability: { name: "Bloody Sacrificer", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineTerrifyingBeauty: {
            id: "daughtersOfKhaineTerrifyingBeauty",
            ability: { name: "Terrifying Beauty", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineMistressOfPoisons: {
            id: "daughtersOfKhaineMistressOfPoisons",
            ability: { name: "Mistress of Poisons", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineTrueBeliever: {
            id: "daughtersOfKhaineTrueBeliever",
            ability: { name: "True Believer", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineDevotedDesciples: {
            id: "daughtersOfKhaineDevotedDesciples",
            ability: { name: "Devoted Desciples", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
        daughtersOfKhaineMistressOfIllusion: {
            id: "daughtersOfKhaineMistressOfIllusion",
            ability: { name: "Mistress of Illusion", description: "" },
            allegiance: this.allegiances.daughtersOfKhaine,
            category: "command",
            isAvailable: commandTraitAvailable
        },
    };
    
    boxes: Box[] = [];
    
    battalions = {
        bloodHostOfKhorne: {
            id: "bloodHostOfKhorne",
            name: "Blood Host of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 220,
            units: []             
        },
        bloodHunt: {
            id: "bloodHunt",
            name: "Blood Hunt",
            factions: [this.factions.KHORNEDAEMONS],
            points: 130,
            units: []             
        },
        theBloodlords: {
            id: "theBloodlords",
            name: "The Bloodlords",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        bloodthunderStampede: {
            id: "bloodthunderStampede",
            name: "Bloodthunder Stampede",
            factions: [this.factions.KHORNEDAEMONS],
            points: 180,
            units: []             
        },
        charnelHost: {
            id: "charnelHost",
            name: "Charnel Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        councilOfBlood: {
            id: "councilOfBlood",
            name: "Council of Blood",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        daemonLegionOfKhorne: {
            id: "daemonLegionOfKhorne",
            name: "Daemon Legion of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 160,
            units: []             
        },
        gorethunderCohort: {
            id: "gorethunderCohort",
            name: "Gorethunder Cohort",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        murderhost: {
            id: "murderhost",
            name: "Murderhost",
            factions: [this.factions.KHORNEDAEMONS],
            points: 120,
            units: []             
        },
        theReapersOfVengeance: {
            id: "theReapersOfVengeance",
            name: "The Reapers of Vengeance",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        skullseekerHost: {
            id: "skullseekerHost",
            name: "Skullseeker Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        aetherEaterHost: {
            id: "aetherEaterHost",
            name: "Aether-eater Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        changehost: {
            id: "changehost",
            name: "Changehost",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 160,
            units: []             
        },
        multitudinousHost: {
            id: "multitudinousHost",
            name: "Multitudinous Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 200,
            units: []             
        },
        omniscientOracles: {
            id: "omniscientOracles",
            name: "Omniscient Oracles",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        overseerSFateTwisters: {
            id: "overseerSFateTwisters",
            name: "Overseer's Fate-twisters",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        theEternalConflagration: {
            id: "theEternalConflagration",
            name: "The Eternal Conflagration",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        theHostsDuplicitous: {
            id: "theHostsDuplicitous",
            name: "The Hosts Duplicitous",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 150,
            units: []             
        },
        warpflameHost: {
            id: "warpflameHost",
            name: "Warpflame Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 80,
            units: []             
        },
        bloodboundWarband: {
            id: "bloodboundWarband",
            name: "Bloodbound Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        bloodboundWarhorde: {
            id: "bloodboundWarhorde",
            name: "Bloodbound Warhorde",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        bloodforged: {
            id: "bloodforged",
            name: "Bloodforged",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        brassStampede: {
            id: "brassStampede",
            name: "Brass Stampede",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        darkFeast: {
            id: "darkFeast",
            name: "Dark Feast",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        gorePilgrims: {
            id: "gorePilgrims",
            name: "Gore Pilgrims",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        redHeadsmen: {
            id: "redHeadsmen",
            name: "Red Headsmen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 160,
            units: []             
        },
        skulltake: {
            id: "skulltake",
            name: "Skulltake",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        slaughterborn: {
            id: "slaughterborn",
            name: "Slaughterborn",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        theGorechosen: {
            id: "theGorechosen",
            name: "The Gorechosen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 150,
            units: []             
        },
        theGoretide: {
            id: "theGoretide",
            name: "The Goretide",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        theSkullfiendTribe: {
            id: "theSkullfiendTribe",
            name: "The Skullfiend Tribe",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 120,
            units: []             
        },
        alterKinCoven: {
            id: "alterKinCoven",
            name: "Alter-kin Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 70,
            units: []             
        },
        arcaniteCabal: {
            id: "arcaniteCabal",
            name: "Arcanite Cabal",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 100,
            units: []             
        },
        arcaniteCult: {
            id: "arcaniteCult",
            name: "Arcanite Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        cultOfTheTransientForm: {
            id: "cultOfTheTransientForm",
            name: "Cult of the Transient Form",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        skyshoalCoven: {
            id: "skyshoalCoven",
            name: "Skyshoal Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 130,
            units: []             
        },
        thePyrofaneCult: {
            id: "thePyrofaneCult",
            name: "The Pyrofane Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 180,
            units: []             
        },
        tzaangorCoven: {
            id: "tzaangorCoven",
            name: "Tzaangor Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 90,
            units: []             
        },
        witchfyreCoven: {
            id: "witchfyreCoven",
            name: "Witchfyre Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 110,
            units: []             
        },
        wildstalkerBrayherd: {
            id: "wildstalkerBrayherd",
            name: "Wildstalker Brayherd",
            factions: [this.factions.BRAYHERD],
            points: 240,
            units: []             
        },
        tallybandOfNurgle: {
            id: "tallybandOfNurgle",
            name: "Tallyband of Nurgle",
            factions: [this.factions.NURGLEDAEMONS],
            points: 220,
            units: []             
        },
        theMunificentWanderers: {
            id: "theMunificentWanderers",
            name: "The Munificent Wanderers",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
        nurgleSMenagerie: {
            id: "nurgleSMenagerie",
            name: "Nurgle's Menagerie",
            factions: [this.factions.NURGLEDAEMONS],
            points: 240,
            units: []             
        },
        thricefoldBefoulment: {
            id: "thricefoldBefoulment",
            name: "Thricefold Befoulment",
            factions: [this.factions.NURGLEDAEMONS],
            points: 160,
            units: []             
        },
        afflictionCyst: {
            id: "afflictionCyst",
            name: "Affliction Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        theBlessedSons: {
            id: "theBlessedSons",
            name: "The Blessed Sons",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 200,
            units: []             
        },
        blightCyst: {
            id: "blightCyst",
            name: "Blight Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        plagueCyst: {
            id: "plagueCyst",
            name: "Plague Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        thrallWarhost: {
            id: "thrallWarhost",
            name: "Thrall Warhost",
            factions: [this.factions.DARKLINGCOVENS],
            points: 180,
            units: []             
        },
        bloodwrackSisterhood: {
            id: "bloodwrackSisterhood",
            name: "Bloodwrack Sisterhood",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 140,
            units: []             
        },
        cauldronGuard: {
            id: "cauldronGuard",
            name: "Cauldron Guard",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 100,
            units: []             
        },
        templeNest: {
            id: "templeNest",
            name: "Temple Nest",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 80,
            units: []             
        },
        shadowPatrol: {
            id: "shadowPatrol",
            name: "Shadow Patrol",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 120,
            units: []             
        },
        shadowhammerCompact: {
            id: "shadowhammerCompact",
            name: "Shadowhammer Compact",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 80,
            units: []             
        },
        slaughterTroupe: {
            id: "slaughterTroupe",
            name: "Slaughter Troupe",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 80,
            units: []             
        },
        warCovenOfMorathi: {
            id: "warCovenOfMorathi",
            name: "War Coven of Morathi",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 100,
            units: []             
        },
        ebondrakeWarhost: {
            id: "ebondrakeWarhost",
            name: "Ebondrake Warhost",
            factions: [this.factions.ORDERSERPENTIS],
            points: 160,
            units: []             
        },
        realmReavers: {
            id: "realmReavers",
            name: "Realm Reavers",
            factions: [this.factions.SCOURGEPRIVATEERS],
            points: 180,
            units: []             
        },
        legionOfDeath: {
            id: "legionOfDeath",
            name: "Legion of Death",
            factions: [this.factions.DEATHRATTLE],
            points: 110,
            units: []             
        },
        castellansOfTheCrimsonKeep: {
            id: "castellansOfTheCrimsonKeep",
            name: "Castellans of the Crimson Keep",
            factions: [this.factions.SOULBLIGHT],
            points: 90,
            units: []             
        },
        courtOfNulahmia: {
            id: "courtOfNulahmia",
            name: "Court of Nulahmia",
            factions: [this.factions.SOULBLIGHT],
            points: 70,
            units: []             
        },
        deathmarch: {
            id: "deathmarch",
            name: "Deathmarch",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 110,
            units: []             
        },
        lordsOfSacrament: {
            id: "lordsOfSacrament",
            name: "Lords of Sacrament",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 70,
            units: []             
        },
        nightfallPack: {
            id: "nightfallPack",
            name: "Nightfall Pack",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 140,
            units: []             
        },
        theFirstCohort: {
            id: "theFirstCohort",
            name: "The First Cohort",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 160,
            units: []             
        },
        abattoir: {
            id: "abattoir",
            name: "Abattoir",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        attendantsAtCourt: {
            id: "attendantsAtCourt",
            name: "Attendants at Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        deadwatch: {
            id: "deadwatch",
            name: "Deadwatch",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 210,
            units: []             
        },
        fleshEaterCourt: {
            id: "fleshEaterCourt",
            name: "Flesh-eater Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 120,
            units: []             
        },
        ghoulPatrol: {
            id: "ghoulPatrol",
            name: "Ghoul Patrol",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        kingSGhouls: {
            id: "kingSGhouls",
            name: "King's Ghouls",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 90,
            units: []             
        },
        royalFamily: {
            id: "royalFamily",
            name: "Royal Family",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        royalMenagerie: {
            id: "royalMenagerie",
            name: "Royal Menagerie",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        royalMordants: {
            id: "royalMordants",
            name: "Royal Mordants",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 70,
            units: []             
        },
        artilleryDetachment: {
            id: "artilleryDetachment",
            name: "Artillery Detachment",
            factions: [this.factions.IRONWELDARSONAL],
            points: 140,
            units: []             
        },
        forgeBrethren: {
            id: "forgeBrethren",
            name: "Forge Brethren",
            factions: [this.factions.FYRESLAYERS],
            points: 130,
            units: []             
        },
        grandFyrd: {
            id: "grandFyrd",
            name: "Grand Fyrd",
            factions: [this.factions.FYRESLAYERS],
            points: 180,
            units: []             
        },
        greyfyrdLodge: {
            id: "greyfyrdLodge",
            name: "Greyfyrd Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 100,
            units: []             
        },
        vostargLodge: {
            id: "vostargLodge",
            name: "Vostarg Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 120,
            units: []             
        },
        grudgeboundWarThrong: {
            id: "grudgeboundWarThrong",
            name: "Grudgebound War Throng",
            factions: [this.factions.DISPOSSESSED],
            points: 160,
            units: []             
        },
        lordsOfTheLodge: {
            id: "lordsOfTheLodge",
            name: "Lords of the Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        warriorKinband: {
            id: "warriorKinband",
            name: "Warrior Kinband",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        freeguildRegiment: {
            id: "freeguildRegiment",
            name: "Freeguild Regiment",
            factions: [this.factions.FREEPEOPLES],
            points: 200,
            units: []             
        },
        pilgrimageOfWrath: {
            id: "pilgrimageOfWrath",
            name: "Pilgrimage of Wrath",
            factions: [this.factions.DEVOTEDOFSIGMAR],
            points: 160,
            units: []             
        },
        warCouncil: {
            id: "warCouncil",
            name: "War Council",
            factions: [this.factions.COLLEGIATEARCANE],
            points: 250,
            units: []             
        },
        dragonlordHost: {
            id: "dragonlordHost",
            name: "Dragonlord Host",
            factions: [this.factions.ORDERDRACONIS],
            points: 180,
            units: []             
        },
        spyreheartWarhost: {
            id: "spyreheartWarhost",
            name: "Spyreheart Warhost",
            factions: [this.factions.PHOENIXTEMPLE],
            points: 200,
            units: []             
        },
        blackshardWarhost: {
            id: "blackshardWarhost",
            name: "Blackshard Warhost",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 180,
            units: []             
        },
        hashutSWrathArtilleryTrain: {
            id: "hashutSWrathArtilleryTrain",
            name: "Hashut's Wrath Artillery Train",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 200,
            units: []             
        },
        bloodclawStarhost: {
            id: "bloodclawStarhost",
            name: "Bloodclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        eternalStarhost: {
            id: "eternalStarhost",
            name: "Eternal Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        dracothionSTail: {
            id: "dracothionSTail",
            name: "Dracothion's Tail",
            factions: [this.factions.SERAPHON],
            points: 60,
            units: []             
        },
        fangsOfSotek: {
            id: "fangsOfSotek",
            name: "Fangs of Sotek",
            factions: [this.factions.SERAPHON],
            points: 100,
            units: []             
        },
        firelanceStarhost: {
            id: "firelanceStarhost",
            name: "Firelance Starhost",
            factions: [this.factions.SERAPHON],
            points: 110,
            units: []             
        },
        heavenswatchStarhost: {
            id: "heavenswatchStarhost",
            name: "Heavenswatch Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        shadowstrikeStarhost: {
            id: "shadowstrikeStarhost",
            name: "Shadowstrike Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        starbeastConstellation: {
            id: "starbeastConstellation",
            name: "Starbeast Constellation",
            factions: [this.factions.SERAPHON],
            points: 220,
            units: []             
        },
        sunclawStarhost: {
            id: "sunclawStarhost",
            name: "Sunclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        thunderquakeStarhost: {
            id: "thunderquakeStarhost",
            name: "Thunderquake Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        alfrostun: {
            id: "alfrostun",
            name: "Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 140,
            units: []             
        },
        braggothSBeastHammer: {
            id: "braggothSBeastHammer",
            name: "Braggoth's Beast Hammer",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 260,
            units: []             
        },
        eurlbad: {
            id: "eurlbad",
            name: "Eurlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        jorlbad: {
            id: "jorlbad",
            name: "Jorlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 120,
            units: []             
        },
        olwyrAlfrostun: {
            id: "olwyrAlfrostun",
            name: "Olwyr Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 220,
            units: []             
        },
        skal: {
            id: "skal",
            name: "Skal",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 110,
            units: []             
        },
        svardAlfrostun: {
            id: "svardAlfrostun",
            name: "Svard Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 180,
            units: []             
        },
        torrbad: {
            id: "torrbad",
            name: "Torrbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        bonegrinzWarclan: {
            id: "bonegrinzWarclan",
            name: "Bonegrinz Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        brutalRukk: {
            id: "brutalRukk",
            name: "Brutal Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        drakkfootWarclan: {
            id: "drakkfootWarclan",
            name: "Drakkfoot Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        iceboneWarclan: {
            id: "iceboneWarclan",
            name: "Icebone Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        kopRukk: {
            id: "kopRukk",
            name: "Kop Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        kunninRukk: {
            id: "kunninRukk",
            name: "Kunnin' Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        savageWarclan: {
            id: "savageWarclan",
            name: "Savage Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 60,
            units: []             
        },
        snagaRukk: {
            id: "snagaRukk",
            name: "Snaga Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        teefRukk: {
            id: "teefRukk",
            name: "Teef Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 90,
            units: []             
        },
        ardfist: {
            id: "ardfist",
            name: "Ardfist",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        bloodtoofs: {
            id: "bloodtoofs",
            name: "Bloodtoofs",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        brawl: {
            id: "brawl",
            name: "Brawl",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        gorefist: {
            id: "gorefist",
            name: "Gorefist",
            factions: [this.factions.IRONJAWZ],
            points: 220,
            units: []             
        },
        ironfist: {
            id: "ironfist",
            name: "Ironfist",
            factions: [this.factions.IRONJAWZ],
            points: 160,
            units: []             
        },
        ironsunz: {
            id: "ironsunz",
            name: "Ironsunz",
            factions: [this.factions.IRONJAWZ],
            points: 120,
            units: []             
        },
        weirdfist: {
            id: "weirdfist",
            name: "Weirdfist",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        waystonePathfinders: {
            id: "waystonePathfinders",
            name: "Waystone Pathfinders",
            factions: [this.factions.WANDERERS],
            points: 240,
            units: []             
        },
        clanSkryre: {
            id: "clanSkryre",
            name: "Clan Skryre",
            factions: [this.factions.SKAVENSKRYRE],
            points: 100,
            units: []             
        },
        congregationOfFilth: {
            id: "congregationOfFilth",
            name: "Congregation of Filth",
            factions: [this.factions.SKAVENPESTILENS],
            points: 140,
            units: []             
        },
        foulrainCongregation: {
            id: "foulrainCongregation",
            name: "Foulrain Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 200,
            units: []             
        },
        plaguesmogCongregation: {
            id: "plaguesmogCongregation",
            name: "Plaguesmog Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 160,
            units: []             
        },
        virulentProcession: {
            id: "virulentProcession",
            name: "Virulent Procession",
            factions: [this.factions.SKAVENPESTILENS],
            points: 180,
            units: []             
        },
        aetherstrikeForce: {
            id: "aetherstrikeForce",
            name: "Aetherstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        anvilsOfTheHeldenhammerWarriorChamber: {
            id: "anvilsOfTheHeldenhammerWarriorChamber",
            name: "Anvils of the Heldenhammer Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        astralTemplarsExemplarChamber: {
            id: "astralTemplarsExemplarChamber",
            name: "Astral Templars Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialHuntingPack: {
            id: "celestialHuntingPack",
            name: "Celestial Hunting Pack",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialVindicatorsWarriorChamber: {
            id: "celestialVindicatorsWarriorChamber",
            name: "Celestial Vindicators Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialWarbringersHarbingerChamber: {
            id: "celestialWarbringersHarbingerChamber",
            name: "Celestial Warbringers Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        devastationBrotherhood: {
            id: "devastationBrotherhood",
            name: "Devastation Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        drakeswornTemple: {
            id: "drakeswornTemple",
            name: "Drakesworn Temple",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        exemplarChamber: {
            id: "exemplarChamber",
            name: "Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        extremisChamber: {
            id: "extremisChamber",
            name: "Extremis Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        hallowedKnightsWarriorChamber: {
            id: "hallowedKnightsWarriorChamber",
            name: "Hallowed Knights Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        hammersOfSigmarWarriorChamber: {
            id: "hammersOfSigmarWarriorChamber",
            name: "Hammers of Sigmar Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        hammerstrikeForce: {
            id: "hammerstrikeForce",
            name: "Hammerstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        harbingerChamber: {
            id: "harbingerChamber",
            name: "Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        knightsExcelsiorExemplarChamber: {
            id: "knightsExcelsiorExemplarChamber",
            name: "Knights Excelsior Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        lightningEchelon: {
            id: "lightningEchelon",
            name: "Lightning Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        lordsOfTheStorm: {
            id: "lordsOfTheStorm",
            name: "Lords of the Storm",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        stormHeralds: {
            id: "stormHeralds",
            name: "Storm Heralds",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        stormVortexGarrison: {
            id: "stormVortexGarrison",
            name: "Storm Vortex Garrison",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        tempestLordsHarbingerChamber: {
            id: "tempestLordsHarbingerChamber",
            name: "Tempest Lords Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        theSkyborneSlayers: {
            id: "theSkyborneSlayers",
            name: "The Skyborne Slayers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        thunderheadBrotherhood: {
            id: "thunderheadBrotherhood",
            name: "Thunderhead Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        thunderwaveEchelon: {
            id: "thunderwaveEchelon",
            name: "Thunderwave Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        vanguardAngelosConclave: {
            id: "vanguardAngelosConclave",
            name: "Vanguard Angelos Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        vanguardAuxiliaryChamber: {
            id: "vanguardAuxiliaryChamber",
            name: "Vanguard Auxiliary Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        vanguardJusticarConclave: {
            id: "vanguardJusticarConclave",
            name: "Vanguard Justicar Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 110,
            units: []             
        },
        vanguardWing: {
            id: "vanguardWing",
            name: "Vanguard Wing",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        warriorBrotherhood: {
            id: "warriorBrotherhood",
            name: "Warrior Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        warriorChamber: {
            id: "warriorChamber",
            name: "Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        dreadwoodWargrove: {
            id: "dreadwoodWargrove",
            name: "Dreadwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        forestFolk: {
            id: "forestFolk",
            name: "Forest Folk",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        forestSpiritWargrove: {
            id: "forestSpiritWargrove",
            name: "Forest Spirit Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        freeSpirits: {
            id: "freeSpirits",
            name: "Free Spirits",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        gnarlrootWargrove: {
            id: "gnarlrootWargrove",
            name: "Gnarlroot Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        harvestboonWargrove: {
            id: "harvestboonWargrove",
            name: "Harvestboon Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        heartwoodWargrove: {
            id: "heartwoodWargrove",
            name: "Heartwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        household: {
            id: "household",
            name: "Household",
            factions: [this.factions.SYLVANETH],
            points: 70,
            units: []             
        },
        ironbarkWargrove: {
            id: "ironbarkWargrove",
            name: "Ironbark Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        lordsOfTheClan: {
            id: "lordsOfTheClan",
            name: "Lords of the Clan",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        oakenbrowWargrove: {
            id: "oakenbrowWargrove",
            name: "Oakenbrow Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        outcasts: {
            id: "outcasts",
            name: "Outcasts",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        sylvanethWargrove: {
            id: "sylvanethWargrove",
            name: "Sylvaneth Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        theGuardiansOfAlarielle: {
            id: "theGuardiansOfAlarielle",
            name: "The Guardians of Alarielle",
            factions: [this.factions.SYLVANETH],
            points: 220,
            units: []             
        },
        winterleafWargrove: {
            id: "winterleafWargrove",
            name: "Winterleaf Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        sonsOfTheMaggotLord: {
            id: "sonsOfTheMaggotLord",
            name: "Sons of the Maggot Lord",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 120,
            units: []             
        },
        theLeapingPox: {
            id: "theLeapingPox",
            name: "The Leaping Pox",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 80,
            units: []             
        },
        archaonSGrandHost: {
            id: "archaonSGrandHost",
            name: "Archaon's Grand Host",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        bloodmarkedWarband: {
            id: "bloodmarkedWarband",
            name: "Bloodmarked Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 100,
            units: []             
        },
        fateswornWarband: {
            id: "fateswornWarband",
            name: "Fatesworn Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        godswornChampionsOfRuin: {
            id: "godswornChampionsOfRuin",
            name: "Godsworn Champions of Ruin",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 160,
            units: []             
        },
        godswrathWarband: {
            id: "godswrathWarband",
            name: "Godswrath Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 140,
            units: []             
        },
        overlordsOfChaos: {
            id: "overlordsOfChaos",
            name: "Overlords of Chaos",
            factions: [this.factions.EVERCHOSEN],
            points: 220,
            units: []             
        },
        plaguetouchedWarband: {
            id: "plaguetouchedWarband",
            name: "Plaguetouched Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        pleasureboundWarband: {
            id: "pleasureboundWarband",
            name: "Pleasurebound Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        ruinbringerWarband: {
            id: "ruinbringerWarband",
            name: "Ruinbringer Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 180,
            units: []             
        },
        ironSkySquadron: {
            id: "ironSkySquadron",
            name: "Iron Sky Squadron",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 180,
            units: []             
        },
        ironSkyCommand: {
            id: "ironSkyCommand",
            name: "Iron Sky Command",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 140,
            units: []             
        },
        grundstokEscortWing: {
            id: "grundstokEscortWing",
            name: "Grundstok Escort Wing",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 200,
            units: []             
        },
        grandArmada: {
            id: "grandArmada",
            name: "Grand Armada",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 160,
            units: []             
        },
        arkhsparkVoltik: {
            id: "arkhsparkVoltik",
            name: "Arkhspark Voltik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        gascloudChokelung: {
            id: "gascloudChokelung",
            name: "Gascloud Chokelung",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        gautfyreSkorch: {
            id: "gautfyreSkorch",
            name: "Gautfyre Skorch",
            factions: [this.factions.SKAVENSKRYRE],
            points: 150,
            units: []             
        },
        rattlegaugeWarplock: {
            id: "rattlegaugeWarplock",
            name: "Rattlegauge Warplock",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        whyrlbladeThreshik: {
            id: "whyrlbladeThreshik",
            name: "Whyrlblade Threshik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        blacktalonSShadowhammers: {
            id: "blacktalonSShadowhammers",
            name: "Blacktalon's Shadowhammers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        fecundRituculturalists: {
            id: "fecundRituculturalists",
            name: "Fecund Rituculturalists",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
    }
}
