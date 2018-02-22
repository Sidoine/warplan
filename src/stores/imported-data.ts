import { Battalion, Box, DataStore, GrandAlliance } from "./units";

export class DataStoreImpl implements DataStore {
    serial: number = 0;

    models = {
        beastlordOnChariot: {
            id: this.serial++,
            name: "Beastlord on Chariot"
        },
        wargorStandardBearer: {
            id: this.serial++,
            name: "Wargor Standard Bearer"
        },
        centigorWarhoof: {
            id: this.serial++,
            name: "Centigor Warhoof"
        },
        beastlord: {
            id: this.serial++,
            name: "Beastlord"
        },
        greatBrayShaman: {
            id: this.serial++,
            name: "Great Bray Shaman"
        },
        gors: {
            id: this.serial++,
            name: "Gors"
        },
        bestigors: {
            id: this.serial++,
            name: "Bestigors"
        },
        tuskgorChariots: {
            id: this.serial++,
            name: "Tuskgor Chariots"
        },
        ungors: {
            id: this.serial++,
            name: "Ungors"
        },
        ungorRaiders: {
            id: this.serial++,
            name: "Ungor Raiders"
        },
        wildstalkerBrayherd: {
            id: this.serial++,
            name: "Wildstalker Brayherd"
        },
        chaosGargant: {
            id: this.serial++,
            name: "Chaos Gargant"
        },
        deathrunner: {
            id: this.serial++,
            name: "Deathrunner"
        },
        verminlordDeceiver: {
            id: this.serial++,
            name: "Verminlord Deceiver"
        },
        skavenAssassin: {
            id: this.serial++,
            name: "Skaven Assassin"
        },
        nightRunners: {
            id: this.serial++,
            name: "Night Runners"
        },
        gutterRunners: {
            id: this.serial++,
            name: "Gutter Runners"
        },
        packmaster: {
            id: this.serial++,
            name: "Packmaster"
        },
        wolfRats: {
            id: this.serial++,
            name: "Wolf Rats"
        },
        giantRats: {
            id: this.serial++,
            name: "Giant Rats"
        },
        ratSwarms: {
            id: this.serial++,
            name: "Rat Swarms"
        },
        ratOgors: {
            id: this.serial++,
            name: "Rat Ogors"
        },
        broodHorror: {
            id: this.serial++,
            name: "Brood Horror"
        },
        hellPitAbomination: {
            id: this.serial++,
            name: "Hell Pit Abomination"
        },
        plaguePriestWithPlagueCenser: {
            id: this.serial++,
            name: "Plague Priest with Plague Censer"
        },
        plaguePriestWithWarpstoneTippedStaff: {
            id: this.serial++,
            name: "Plague Priest with Warpstone-tipped Staff"
        },
        plagueFurnace: {
            id: this.serial++,
            name: "Plague Furnace"
        },
        verminlordCorruptor: {
            id: this.serial++,
            name: "Verminlord Corruptor"
        },
        plagueMonks: {
            id: this.serial++,
            name: "Plague Monks"
        },
        plagueCenserBearers: {
            id: this.serial++,
            name: "Plague Censer Bearers"
        },
        plagueclaw: {
            id: this.serial++,
            name: "Plagueclaw"
        },
        congregationOfFilth: {
            id: this.serial++,
            name: "Congregation of Filth"
        },
        foulrainCongregation: {
            id: this.serial++,
            name: "Foulrain Congregation"
        },
        plaguesmogCongregation: {
            id: this.serial++,
            name: "Plaguesmog Congregation"
        },
        virulentProcession: {
            id: this.serial++,
            name: "Virulent Procession"
        },
        warlockEngineer: {
            id: this.serial++,
            name: "Warlock Engineer"
        },
        archWarlock: {
            id: this.serial++,
            name: "Arch Warlock"
        },
        doomFlayerWeaponTeam: {
            id: this.serial++,
            name: "Doom Flayer Weapon Team"
        },
        ratlingGunWeaponTeam: {
            id: this.serial++,
            name: "Ratling Gun Weapon Team"
        },
        warpfireThrowerWeaponTeam: {
            id: this.serial++,
            name: "Warpfire Thrower Weapon Team"
        },
        warpGrinderWeaponTeam: {
            id: this.serial++,
            name: "Warp Grinder Weapon Team"
        },
        poisonedWindMortarWeaponTeam: {
            id: this.serial++,
            name: "Poisoned Wind Mortar Weapon Team"
        },
        skryreAcolytes: {
            id: this.serial++,
            name: "Skryre Acolytes"
        },
        warplockJezzails: {
            id: this.serial++,
            name: "Warplock Jezzails"
        },
        stormfiends: {
            id: this.serial++,
            name: "Stormfiends"
        },
        doomwheel: {
            id: this.serial++,
            name: "Doomwheel"
        },
        warpLightningCannon: {
            id: this.serial++,
            name: "Warp Lightning Cannon"
        },
        clanSkryre: {
            id: this.serial++,
            name: "Clan Skryre"
        },
        arkhsparkVoltik: {
            id: this.serial++,
            name: "Arkhspark Voltik"
        },
        gascloudChokelung: {
            id: this.serial++,
            name: "Gascloud Chokelung"
        },
        gautfyreSkorch: {
            id: this.serial++,
            name: "Gautfyre Skorch"
        },
        rattlegaugeWarplock: {
            id: this.serial++,
            name: "Rattlegauge Warplock"
        },
        whyrlbladeThreshik: {
            id: this.serial++,
            name: "Whyrlblade Threshik"
        },
        verminlordWarbringer: {
            id: this.serial++,
            name: "Verminlord Warbringer"
        },
        skavenWarlord: {
            id: this.serial++,
            name: "Skaven Warlord"
        },
        skavenWarlordOnBroodHorror: {
            id: this.serial++,
            name: "Skaven Warlord on Brood Horror"
        },
        skritchSpiteclaw: {
            id: this.serial++,
            name: "Skritch Spiteclaw"
        },
        clanrats: {
            id: this.serial++,
            name: "Clanrats"
        },
        stormvermin: {
            id: this.serial++,
            name: "Stormvermin"
        },
        spiteclawSSwarm: {
            id: this.serial++,
            name: "Spiteclaw's Swarm"
        },
        daemonPrince: {
            id: this.serial++,
            name: "Daemon Prince"
        },
        beLakorChaosDaemonPrince: {
            id: this.serial++,
            name: "Be'Lakor, Chaos Daemon Prince"
        },
        furies: {
            id: this.serial++,
            name: "Furies"
        },
        soulGrinder: {
            id: this.serial++,
            name: "Soul Grinder"
        },
        bloodthirsterOfInsensateRage: {
            id: this.serial++,
            name: "Bloodthirster Of Insensate Rage"
        },
        bloodthirsterOfUnfetteredFury: {
            id: this.serial++,
            name: "Bloodthirster Of Unfettered Fury"
        },
        wrathOfKhorneBloodthirster: {
            id: this.serial++,
            name: "Wrath Of Khorne Bloodthirster"
        },
        skarbrand: {
            id: this.serial++,
            name: "Skarbrand"
        },
        skulltaker: {
            id: this.serial++,
            name: "Skulltaker"
        },
        bloodmasterHeraldOfKhorne: {
            id: this.serial++,
            name: "Bloodmaster, Herald of Khorne"
        },
        skullmasterHeraldOfKhorne: {
            id: this.serial++,
            name: "Skullmaster, Herald of Khorne"
        },
        bloodThrone: {
            id: this.serial++,
            name: "Blood Throne"
        },
        karanak: {
            id: this.serial++,
            name: "Karanak"
        },
        daemonPrinceOfKhorne: {
            id: this.serial++,
            name: "Daemon Prince of Khorne"
        },
        exaltedGreaterDaemonOfKhorne: {
            id: this.serial++,
            name: "Exalted Greater Daemon of Khorne"
        },
        bloodletters: {
            id: this.serial++,
            name: "Bloodletters"
        },
        bloodcrushers: {
            id: this.serial++,
            name: "Bloodcrushers"
        },
        fleshHounds: {
            id: this.serial++,
            name: "Flesh Hounds"
        },
        skullCannons: {
            id: this.serial++,
            name: "Skull Cannons"
        },
        bloodHostOfKhorne: {
            id: this.serial++,
            name: "Blood Host of Khorne"
        },
        bloodHunt: {
            id: this.serial++,
            name: "Blood Hunt"
        },
        theBloodlords: {
            id: this.serial++,
            name: "The Bloodlords"
        },
        bloodthunderStampede: {
            id: this.serial++,
            name: "Bloodthunder Stampede"
        },
        charnelHost: {
            id: this.serial++,
            name: "Charnel Host"
        },
        councilOfBlood: {
            id: this.serial++,
            name: "Council of Blood"
        },
        daemonLegionOfKhorne: {
            id: this.serial++,
            name: "Daemon Legion of Khorne"
        },
        gorethunderCohort: {
            id: this.serial++,
            name: "Gorethunder Cohort"
        },
        murderhost: {
            id: this.serial++,
            name: "Murderhost"
        },
        theReapersOfVengeance: {
            id: this.serial++,
            name: "The Reapers of Vengeance"
        },
        skullseekerHost: {
            id: this.serial++,
            name: "Skullseeker Host"
        },
        greatUncleanOne: {
            id: this.serial++,
            name: "Great Unclean One"
        },
        rotigus: {
            id: this.serial++,
            name: "Rotigus"
        },
        epidemiusTallymanOfNurgle: {
            id: this.serial++,
            name: "Epidemius Tallyman of Nurgle"
        },
        poxbringerHeraldOfNurgle: {
            id: this.serial++,
            name: "Poxbringer Herald of Nurgle"
        },
        spoilpoxScrivenerHeraldOfNurgle: {
            id: this.serial++,
            name: "Spoilpox Scrivener Herald of Nurgle"
        },
        sloppityBilepiperHeraldOfNurgle: {
            id: this.serial++,
            name: "Sloppity Bilepiper Herald of Nurgle"
        },
        daemonPrinceOfNurgle: {
            id: this.serial++,
            name: "Daemon Prince of Nurgle"
        },
        exaltedGreaterDaemonOfNurgle: {
            id: this.serial++,
            name: "Exalted Greater Daemon of Nurgle"
        },
        horticulousSlimux: {
            id: this.serial++,
            name: "Horticulous Slimux"
        },
        plaguebearers: {
            id: this.serial++,
            name: "Plaguebearers"
        },
        plagueDrones: {
            id: this.serial++,
            name: "Plague Drones"
        },
        nurglings: {
            id: this.serial++,
            name: "Nurglings"
        },
        beastsOfNurgle: {
            id: this.serial++,
            name: "Beasts Of Nurgle"
        },
        tallybandOfNurgle: {
            id: this.serial++,
            name: "Tallyband of Nurgle"
        },
        fecundRituculturalists: {
            id: this.serial++,
            name: "Fecund Rituculturalists"
        },
        theMunificentWanderers: {
            id: this.serial++,
            name: "The Munificent Wanderers"
        },
        nurgleSMenagerie: {
            id: this.serial++,
            name: "Nurgle's Menagerie"
        },
        thricefoldBefoulment: {
            id: this.serial++,
            name: "Thricefold Befoulment"
        },
        kairosFateweaver: {
            id: this.serial++,
            name: "Kairos Fateweaver"
        },
        lordOfChange: {
            id: this.serial++,
            name: "Lord Of Change"
        },
        theChangeling: {
            id: this.serial++,
            name: "The Changeling"
        },
        heraldOfTzeentch: {
            id: this.serial++,
            name: "Herald Of Tzeentch"
        },
        heraldOfTzeentchOnDisc: {
            id: this.serial++,
            name: "Herald Of Tzeentch On Disc"
        },
        heraldOfTzeentchOnBurningChariot: {
            id: this.serial++,
            name: "Herald Of Tzeentch On Burning Chariot"
        },
        theBlueScribes: {
            id: this.serial++,
            name: "The Blue Scribes"
        },
        daemonPrinceOfTzeentch: {
            id: this.serial++,
            name: "Daemon Prince Of Tzeentch"
        },
        exaltedGreaterDaemonOfTzeentch: {
            id: this.serial++,
            name: "Exalted Greater Daemon of Tzeentch"
        },
        pinkHorrorsOfTzeentch: {
            id: this.serial++,
            name: "Pink Horrors Of Tzeentch"
        },
        blueHorrorsOfTzeentch: {
            id: this.serial++,
            name: "Blue Horrors Of Tzeentch"
        },
        brimstoneHorrorsOfTzeentch: {
            id: this.serial++,
            name: "Brimstone Horrors Of Tzeentch"
        },
        exaltedFlamersOfTzeentch: {
            id: this.serial++,
            name: "Exalted Flamers of Tzeentch"
        },
        flamersOfTzeentch: {
            id: this.serial++,
            name: "Flamers Of Tzeentch"
        },
        screamersOfTzeentch: {
            id: this.serial++,
            name: "Screamers Of Tzeentch"
        },
        burningChariotsOfTzeentch: {
            id: this.serial++,
            name: "Burning Chariots Of Tzeentch"
        },
        aetherEaterHost: {
            id: this.serial++,
            name: "Aether-eater Host"
        },
        changehost: {
            id: this.serial++,
            name: "Changehost"
        },
        multitudinousHost: {
            id: this.serial++,
            name: "Multitudinous Host"
        },
        omniscientOracles: {
            id: this.serial++,
            name: "Omniscient Oracles"
        },
        overseerSFateTwisters: {
            id: this.serial++,
            name: "Overseer's Fate-twisters"
        },
        theEternalConflagration: {
            id: this.serial++,
            name: "The Eternal Conflagration"
        },
        theHostsDuplicitous: {
            id: this.serial++,
            name: "The Hosts Duplicitous"
        },
        warpflameHost: {
            id: this.serial++,
            name: "Warpflame Host"
        },
        archaon: {
            id: this.serial++,
            name: "Archaon"
        },
        gauntSummonerOfTzeentch: {
            id: this.serial++,
            name: "Gaunt Summoner of Tzeentch"
        },
        gauntSummonerAndChaosFamiliars: {
            id: this.serial++,
            name: "Gaunt Summoner and Chaos Familiars"
        },
        varanguard: {
            id: this.serial++,
            name: "Varanguard"
        },
        overlordsOfChaos: {
            id: this.serial++,
            name: "Overlords of Chaos"
        },
        bloodmarkedWarband: {
            id: this.serial++,
            name: "Bloodmarked Warband"
        },
        plaguetouchedWarband: {
            id: this.serial++,
            name: "Plaguetouched Warband"
        },
        fateswornWarband: {
            id: this.serial++,
            name: "Fatesworn Warband"
        },
        pleasureboundWarband: {
            id: this.serial++,
            name: "Pleasurebound Warband"
        },
        archaonSGrandHost: {
            id: this.serial++,
            name: "Archaon's Grand Host"
        },
        keeperOfSecrets: {
            id: this.serial++,
            name: "Keeper Of Secrets"
        },
        theMasqueOfSlaanesh: {
            id: this.serial++,
            name: "The Masque Of Slaanesh"
        },
        heraldOfSlaanesh: {
            id: this.serial++,
            name: "Herald Of Slaanesh"
        },
        heraldOfSlaaneshOnSeekerChariot: {
            id: this.serial++,
            name: "Herald Of Slaanesh on Seeker Chariot"
        },
        heraldOfSlaaneshOnExaltedSeekerChariot: {
            id: this.serial++,
            name: "Herald Of Slaanesh on Exalted Seeker Chariot"
        },
        daemonPrinceOfSlaanesh: {
            id: this.serial++,
            name: "Daemon Prince Of Slaanesh"
        },
        chaosLordOfSlaanesh: {
            id: this.serial++,
            name: "Chaos Lord Of Slaanesh"
        },
        lordOfSlaaneshOnDaemonicMount: {
            id: this.serial++,
            name: "Lord Of Slaanesh On Daemonic Mount"
        },
        exaltedGreaterDaemonOfSlaanesh: {
            id: this.serial++,
            name: "Exalted Greater Daemon of Slaanesh"
        },
        daemonettesOfSlaanesh: {
            id: this.serial++,
            name: "Daemonettes Of Slaanesh"
        },
        seekersOfSlaanesh: {
            id: this.serial++,
            name: "Seekers Of Slaanesh"
        },
        fiendsOfSlaanesh: {
            id: this.serial++,
            name: "Fiends Of Slaanesh"
        },
        seekerChariotsOfSlaanesh: {
            id: this.serial++,
            name: "Seeker Chariots Of Slaanesh"
        },
        exaltedSeekerChariotsOfSlaanesh: {
            id: this.serial++,
            name: "Exalted Seeker Chariots Of Slaanesh"
        },
        hellflayersOfSlaanesh: {
            id: this.serial++,
            name: "Hellflayers Of Slaanesh"
        },
        hellstridersOfSlaanesh: {
            id: this.serial++,
            name: "Hellstriders Of Slaanesh"
        },
        mightyLordOfKhorne: {
            id: this.serial++,
            name: "Mighty Lord Of Khorne"
        },
        khorgosKhul: {
            id: this.serial++,
            name: "Khorgos Khul"
        },
        bloodsecrator: {
            id: this.serial++,
            name: "Bloodsecrator"
        },
        bloodstoker: {
            id: this.serial++,
            name: "Bloodstoker"
        },
        skullgrinder: {
            id: this.serial++,
            name: "Skullgrinder"
        },
        skarrBloodwrath: {
            id: this.serial++,
            name: "Skarr Bloodwrath"
        },
        valkiaTheBloody: {
            id: this.serial++,
            name: "Valkia The Bloody"
        },
        scylaAnfingrimm: {
            id: this.serial++,
            name: "Scyla Anfingrimm"
        },
        lordOfKhorneOnJuggernaut: {
            id: this.serial++,
            name: "Lord Of Khorne On Juggernaut"
        },
        slaughterpriest: {
            id: this.serial++,
            name: "Slaughterpriest"
        },
        slaughterpriestWithHackbladeAndWrathhammer: {
            id: this.serial++,
            name: "Slaughterpriest with Hackblade and Wrathhammer"
        },
        exaltedDeathbringer: {
            id: this.serial++,
            name: "Exalted Deathbringer"
        },
        exaltedDeathbringerWithImpalingSpear: {
            id: this.serial++,
            name: "Exalted Deathbringer with Impaling Spear"
        },
        aspiringDeathbringer: {
            id: this.serial++,
            name: "Aspiring Deathbringer"
        },
        aspiringDeathbringerWithGoreaxeAndSkullhammer: {
            id: this.serial++,
            name: "Aspiring Deathbringer with Goreaxe and Skullhammer"
        },
        skaaracTheBloodborn: {
            id: this.serial++,
            name: "Skaarac the Bloodborn"
        },
        bloodWarriors: {
            id: this.serial++,
            name: "Blood Warriors"
        },
        wrathmongers: {
            id: this.serial++,
            name: "Wrathmongers"
        },
        bloodreavers: {
            id: this.serial++,
            name: "Bloodreavers"
        },
        khorgoraths: {
            id: this.serial++,
            name: "Khorgoraths"
        },
        skullreapers: {
            id: this.serial++,
            name: "Skullreapers"
        },
        mightySkullcrushers: {
            id: this.serial++,
            name: "Mighty Skullcrushers"
        },
        garrekSReavers: {
            id: this.serial++,
            name: "Garrek's Reavers"
        },
        bloodboundWarhorde: {
            id: this.serial++,
            name: "Bloodbound Warhorde"
        },
        brassStampede: {
            id: this.serial++,
            name: "Brass Stampede"
        },
        darkFeast: {
            id: this.serial++,
            name: "Dark Feast"
        },
        redHeadsmen: {
            id: this.serial++,
            name: "Red Headsmen"
        },
        skulltake: {
            id: this.serial++,
            name: "Skulltake"
        },
        theGorechosen: {
            id: this.serial++,
            name: "The Gorechosen"
        },
        bloodboundWarband: {
            id: this.serial++,
            name: "Bloodbound Warband"
        },
        bloodforged: {
            id: this.serial++,
            name: "Bloodforged"
        },
        theGoretide: {
            id: this.serial++,
            name: "The Goretide"
        },
        theSkullfiendTribe: {
            id: this.serial++,
            name: "The Skullfiend Tribe"
        },
        slaughterborn: {
            id: this.serial++,
            name: "Slaughterborn"
        },
        gorePilgrims: {
            id: this.serial++,
            name: "Gore Pilgrims"
        },
        drazhoathTheAshen: {
            id: this.serial++,
            name: "Drazhoath The Ashen"
        },
        infernalGuardCastellan: {
            id: this.serial++,
            name: "Infernal Guard Castellan"
        },
        infernalGuardBattleStandardBearer: {
            id: this.serial++,
            name: "Infernal Guard Battle Standard Bearer"
        },
        daemonsmith: {
            id: this.serial++,
            name: "Daemonsmith"
        },
        bullCentaurTaurRuk: {
            id: this.serial++,
            name: "Bull Centaur Taur'ruk"
        },
        sharTorTheExecutioner: {
            id: this.serial++,
            name: "Shar'tor the Executioner"
        },
        infernalGuardIronsworn: {
            id: this.serial++,
            name: "Infernal Guard Ironsworn"
        },
        infernalGuardFireglaives: {
            id: this.serial++,
            name: "Infernal Guard Fireglaives"
        },
        kDaaiFireborn: {
            id: this.serial++,
            name: "K'Daai Fireborn"
        },
        bullCentaurRenders: {
            id: this.serial++,
            name: "Bull Centaur Renders"
        },
        chaosSiegeGargant: {
            id: this.serial++,
            name: "Chaos Siege Gargant"
        },
        ironDaemonWarEngine: {
            id: this.serial++,
            name: "Iron Daemon War Engine"
        },
        skullcrackerWarEngine: {
            id: this.serial++,
            name: "Skullcracker War Engine"
        },
        deathshriekerRocketLauncher: {
            id: this.serial++,
            name: "Deathshrieker Rocket Launcher"
        },
        dreadquakeMortar: {
            id: this.serial++,
            name: "Dreadquake Mortar"
        },
        magmaCannon: {
            id: this.serial++,
            name: "Magma Cannon"
        },
        blackshardWarhost: {
            id: this.serial++,
            name: "Blackshard Warhost"
        },
        hashutSWrathArtilleryTrain: {
            id: this.serial++,
            name: "Hashut's Wrath Artillery Train"
        },
        thanquolAndBoneripper: {
            id: this.serial++,
            name: "Thanquol and Boneripper"
        },
        greySeer: {
            id: this.serial++,
            name: "Grey Seer"
        },
        screamingBell: {
            id: this.serial++,
            name: "Screaming Bell"
        },
        lordSkreechVerminkin: {
            id: this.serial++,
            name: "Lord Skreech Verminkin"
        },
        verminlordWarpseer: {
            id: this.serial++,
            name: "Verminlord Warpseer"
        },
        warpgnawVerminlord: {
            id: this.serial++,
            name: "Warpgnaw Verminlord"
        },
        chaosWarhounds: {
            id: this.serial++,
            name: "Chaos Warhounds"
        },
        centigors: {
            id: this.serial++,
            name: "Centigors"
        },
        razorgors: {
            id: this.serial++,
            name: "Razorgors"
        },
        harpies: {
            id: this.serial++,
            name: "Harpies"
        },
        cursDEttin: {
            id: this.serial++,
            name: "Curs'd Ettin"
        },
        chimera: {
            id: this.serial++,
            name: "Chimera"
        },
        mutalithVortexBeast: {
            id: this.serial++,
            name: "Mutalith Vortex Beast"
        },
        slaughterbrute: {
            id: this.serial++,
            name: "Slaughterbrute"
        },
        cockatrice: {
            id: this.serial++,
            name: "Cockatrice"
        },
        greatTaurus: {
            id: this.serial++,
            name: "Great Taurus"
        },
        lammasu: {
            id: this.serial++,
            name: "Lammasu"
        },
        jabberslythe: {
            id: this.serial++,
            name: "Jabberslythe"
        },
        preyton: {
            id: this.serial++,
            name: "Preyton"
        },
        warpfireDragon: {
            id: this.serial++,
            name: "Warpfire Dragon"
        },
        theGlottkin: {
            id: this.serial++,
            name: "The Glottkin"
        },
        bloabRotspawned: {
            id: this.serial++,
            name: "Bloab Rotspawned"
        },
        morbidexTwiceborn: {
            id: this.serial++,
            name: "Morbidex Twiceborn"
        },
        orghottsDaemonspew: {
            id: this.serial++,
            name: "Orghotts Daemonspew"
        },
        gutrotSpume: {
            id: this.serial++,
            name: "Gutrot Spume"
        },
        festusTheLeechlord: {
            id: this.serial++,
            name: "Festus The Leechlord"
        },
        harbingerOfDecay: {
            id: this.serial++,
            name: "Harbinger of Decay"
        },
        sorcerer: {
            id: this.serial++,
            name: "Sorcerer"
        },
        lordOfPlagues: {
            id: this.serial++,
            name: "Lord of Plagues"
        },
        lordOfAfflictions: {
            id: this.serial++,
            name: "Lord of Afflictions"
        },
        lordOfBlights: {
            id: this.serial++,
            name: "Lord of Blights"
        },
        putridBlightkings: {
            id: this.serial++,
            name: "Putrid Blightkings"
        },
        pusgoyleBlightlords: {
            id: this.serial++,
            name: "Pusgoyle Blightlords"
        },
        blightGuard: {
            id: this.serial++,
            name: "Blight Guard"
        },
        afflictionCyst: {
            id: this.serial++,
            name: "Affliction Cyst"
        },
        theBlessedSons: {
            id: this.serial++,
            name: "The Blessed Sons"
        },
        blightCyst: {
            id: this.serial++,
            name: "Blight Cyst"
        },
        plagueCyst: {
            id: this.serial++,
            name: "Plague Cyst"
        },
        darkoathChieftain: {
            id: this.serial++,
            name: "Darkoath Chieftain"
        },
        lordOfChaos: {
            id: this.serial++,
            name: "Lord Of Chaos"
        },
        chaosLordOnDaemonicMount: {
            id: this.serial++,
            name: "Chaos Lord On Daemonic Mount"
        },
        chaosLordOnManticore: {
            id: this.serial++,
            name: "Chaos Lord On Manticore"
        },
        chaosSorcererLord: {
            id: this.serial++,
            name: "Chaos Sorcerer Lord"
        },
        chaosSorcererLordOnManticore: {
            id: this.serial++,
            name: "Chaos Sorcerer Lord On Manticore"
        },
        exaltedHeroOfChaos: {
            id: this.serial++,
            name: "Exalted Hero Of Chaos"
        },
        slambo: {
            id: this.serial++,
            name: "Slambo"
        },
        darkoathWarqueen: {
            id: this.serial++,
            name: "Darkoath Warqueen"
        },
        chaosWarriors: {
            id: this.serial++,
            name: "Chaos Warriors"
        },
        chaosMarauders: {
            id: this.serial++,
            name: "Chaos Marauders"
        },
        chaosChariots: {
            id: this.serial++,
            name: "Chaos Chariots"
        },
        chaosMarauderHorsemen: {
            id: this.serial++,
            name: "Chaos Marauder Horsemen"
        },
        chaosChosen: {
            id: this.serial++,
            name: "Chaos Chosen"
        },
        chaosKnights: {
            id: this.serial++,
            name: "Chaos Knights"
        },
        chaosGorebeastChariots: {
            id: this.serial++,
            name: "Chaos Gorebeast Chariots"
        },
        chaosWarshrine: {
            id: this.serial++,
            name: "Chaos Warshrine"
        },
        chaosSpawn: {
            id: this.serial++,
            name: "Chaos Spawn"
        },
        godswornChampionsOfRuin: {
            id: this.serial++,
            name: "Godsworn Champions of Ruin"
        },
        godswrathWarband: {
            id: this.serial++,
            name: "Godswrath Warband"
        },
        ruinbringerWarband: {
            id: this.serial++,
            name: "Ruinbringer Warband"
        },
        skavenChieftainWithBattleStandard: {
            id: this.serial++,
            name: "Skaven Chieftain With Battle Standard"
        },
        skavenslaves: {
            id: this.serial++,
            name: "Skavenslaves"
        },
        tamurkhanTheMaggotLord: {
            id: this.serial++,
            name: "Tamurkhan the Maggot Lord"
        },
        kayzkTheBefouled: {
            id: this.serial++,
            name: "Kayzk the Befouled"
        },
        saylTheFaithless: {
            id: this.serial++,
            name: "Sayl The Faithless"
        },
        plagueOgors: {
            id: this.serial++,
            name: "Plague Ogors"
        },
        bileTroggoths: {
            id: this.serial++,
            name: "Bile Troggoths"
        },
        daemonPlagueToadsOfNurgle: {
            id: this.serial++,
            name: "Daemon Plague Toads of Nurgle"
        },
        daemonPoxRidersOfNurgle: {
            id: this.serial++,
            name: "Daemon Pox Riders of Nurgle"
        },
        nightmaw: {
            id: this.serial++,
            name: "Nightmaw"
        },
        giganticChaosSpawn: {
            id: this.serial++,
            name: "Gigantic Chaos Spawn"
        },
        chaosWarMammoth: {
            id: this.serial++,
            name: "Chaos War Mammoth"
        },
        sonsOfTheMaggotLord: {
            id: this.serial++,
            name: "Sons of the Maggot Lord"
        },
        theLeapingPox: {
            id: this.serial++,
            name: "The Leaping Pox"
        },
        dragonOgorShaggoth: {
            id: this.serial++,
            name: "Dragon Ogor Shaggoth"
        },
        dragonOgors: {
            id: this.serial++,
            name: "Dragon Ogors"
        },
        curselingEyeOfTzeentch: {
            id: this.serial++,
            name: "Curseling, Eye of Tzeentch"
        },
        fatemaster: {
            id: this.serial++,
            name: "Fatemaster"
        },
        ogroidThaumaturge: {
            id: this.serial++,
            name: "Ogroid Thaumaturge"
        },
        gauntSummoner: {
            id: this.serial++,
            name: "Gaunt Summoner"
        },
        magister: {
            id: this.serial++,
            name: "Magister"
        },
        tzaangorShaman: {
            id: this.serial++,
            name: "Tzaangor Shaman"
        },
        kairicAcolytes: {
            id: this.serial++,
            name: "Kairic Acolytes"
        },
        tzaangors: {
            id: this.serial++,
            name: "Tzaangors"
        },
        tzaangorEnlightened: {
            id: this.serial++,
            name: "Tzaangor Enlightened"
        },
        tzaangorEnlightenedOnDisc: {
            id: this.serial++,
            name: "Tzaangor Enlightened on Disc"
        },
        tzaangorSkyfires: {
            id: this.serial++,
            name: "Tzaangor Skyfires"
        },
        arcaniteCabal: {
            id: this.serial++,
            name: "Arcanite Cabal"
        },
        arcaniteCult: {
            id: this.serial++,
            name: "Arcanite Cult"
        },
        alterKinCoven: {
            id: this.serial++,
            name: "Alter-kin Coven"
        },
        cultOfTheTransientForm: {
            id: this.serial++,
            name: "Cult of the Transient Form"
        },
        skyshoalCoven: {
            id: this.serial++,
            name: "Skyshoal Coven"
        },
        thePyrofaneCult: {
            id: this.serial++,
            name: "The Pyrofane Cult"
        },
        tzaangorCoven: {
            id: this.serial++,
            name: "Tzaangor Coven"
        },
        witchfyreCoven: {
            id: this.serial++,
            name: "Witchfyre Coven"
        },
        doombull: {
            id: this.serial++,
            name: "Doombull"
        },
        bullgors: {
            id: this.serial++,
            name: "Bullgors"
        },
        cygor: {
            id: this.serial++,
            name: "Cygor"
        },
        ghorgon: {
            id: this.serial++,
            name: "Ghorgon"
        },
        exaltedHeroWithBattleStandard: {
            id: this.serial++,
            name: "Exalted Hero With Battle Standard"
        },
        chaosDragon: {
            id: this.serial++,
            name: "Chaos Dragon"
        },
        troggothKing: {
            id: this.serial++,
            name: "Troggoth King"
        },
        forsaken: {
            id: this.serial++,
            name: "Forsaken"
        },
        skinWolves: {
            id: this.serial++,
            name: "Skin Wolves"
        },
        chaosOgors: {
            id: this.serial++,
            name: "Chaos Ogors"
        },
        chaosTroggoths: {
            id: this.serial++,
            name: "Chaos Troggoths"
        },
        chaosFamiliars: {
            id: this.serial++,
            name: "Chaos Familiars"
        },
        hellcannon: {
            id: this.serial++,
            name: "Hellcannon"
        },
        mistweaverSaih: {
            id: this.serial++,
            name: "Mistweaver Saih"
        },
        tenebraelShard: {
            id: this.serial++,
            name: "Tenebrael Shard"
        },
        kingOnHippogryph: {
            id: this.serial++,
            name: "King on Hippogryph"
        },
        enchantress: {
            id: this.serial++,
            name: "Enchantress"
        },
        sacredProtector: {
            id: this.serial++,
            name: "Sacred Protector"
        },
        bretonnianLord: {
            id: this.serial++,
            name: "Bretonnian Lord"
        },
        nobleChampion: {
            id: this.serial++,
            name: "Noble Champion"
        },
        nobleStandardBearer: {
            id: this.serial++,
            name: "Noble Standard Bearer"
        },
        damsel: {
            id: this.serial++,
            name: "Damsel"
        },
        knightsErrant: {
            id: this.serial++,
            name: "Knights Errant"
        },
        knightsOfTheRealm: {
            id: this.serial++,
            name: "Knights Of The Realm"
        },
        questingKnights: {
            id: this.serial++,
            name: "Questing Knights"
        },
        grailKnights: {
            id: this.serial++,
            name: "Grail Knights"
        },
        pegasusKnights: {
            id: this.serial++,
            name: "Pegasus Knights"
        },
        battlePilgrims: {
            id: this.serial++,
            name: "Battle Pilgrims"
        },
        menAtArms: {
            id: this.serial++,
            name: "Men At Arms"
        },
        peasantBowmen: {
            id: this.serial++,
            name: "Peasant Bowmen"
        },
        mountedYeomen: {
            id: this.serial++,
            name: "Mounted Yeomen"
        },
        fieldTrebuchet: {
            id: this.serial++,
            name: "Field Trebuchet"
        },
        battlemage: {
            id: this.serial++,
            name: "Battlemage"
        },
        battlemageOnGriffon: {
            id: this.serial++,
            name: "Battlemage On Griffon"
        },
        celestialHurricanumWithCelestialBattlemage: {
            id: this.serial++,
            name: "Celestial Hurricanum With Celestial Battlemage"
        },
        luminarkOfHyshWithWhiteBattlemage: {
            id: this.serial++,
            name: "Luminark Of Hysh With White Battlemage"
        },
        celestialHurricanum: {
            id: this.serial++,
            name: "Celestial Hurricanum"
        },
        luminarkOfHysh: {
            id: this.serial++,
            name: "Luminark Of Hysh"
        },
        warCouncil: {
            id: this.serial++,
            name: "War Council"
        },
        dreadlord: {
            id: this.serial++,
            name: "Dreadlord"
        },
        dreadlordOnDrakespawn: {
            id: this.serial++,
            name: "Dreadlord On Drakespawn"
        },
        sorceressOnDrakespawn: {
            id: this.serial++,
            name: "Sorceress On Drakespawn"
        },
        beastmasterOnManticore: {
            id: this.serial++,
            name: "Beastmaster On Manticore"
        },
        masterWithBattleStandard: {
            id: this.serial++,
            name: "Master With Battle Standard"
        },
        sorceressOnDarkPegasus: {
            id: this.serial++,
            name: "Sorceress on Dark Pegasus"
        },
        shades: {
            id: this.serial++,
            name: "Shades"
        },
        reaperBoltThrower: {
            id: this.serial++,
            name: "Reaper Bolt Thrower"
        },
        sorceress: {
            id: this.serial++,
            name: "Sorceress"
        },
        sorceressOnBlackDragon: {
            id: this.serial++,
            name: "Sorceress On Black Dragon"
        },
        dreadspears: {
            id: this.serial++,
            name: "Dreadspears"
        },
        bleakswords: {
            id: this.serial++,
            name: "Bleakswords"
        },
        darkshards: {
            id: this.serial++,
            name: "Darkshards"
        },
        blackGuard: {
            id: this.serial++,
            name: "Black Guard"
        },
        executioners: {
            id: this.serial++,
            name: "Executioners"
        },
        thrallWarhost: {
            id: this.serial++,
            name: "Thrall Warhost"
        },
        deathHag: {
            id: this.serial++,
            name: "Death Hag"
        },
        cauldronOfBlood: {
            id: this.serial++,
            name: "Cauldron Of Blood"
        },
        doomfireWarlocks: {
            id: this.serial++,
            name: "Doomfire Warlocks"
        },
        sistersOfSlaughter: {
            id: this.serial++,
            name: "Sisters Of Slaughter"
        },
        bloodwrackMedusae: {
            id: this.serial++,
            name: "Bloodwrack Medusae"
        },
        bloodwrackShrine: {
            id: this.serial++,
            name: "Bloodwrack Shrine"
        },
        witchAelves: {
            id: this.serial++,
            name: "Witch Aelves"
        },
        bloodwrackSisterhood: {
            id: this.serial++,
            name: "Bloodwrack Sisterhood"
        },
        warriorPriest: {
            id: this.serial++,
            name: "Warrior Priest"
        },
        excelsiorWarpriest: {
            id: this.serial++,
            name: "Excelsior Warpriest"
        },
        witchHunter: {
            id: this.serial++,
            name: "Witch Hunter"
        },
        warAltarOfSigmar: {
            id: this.serial++,
            name: "War Altar Of Sigmar"
        },
        flagellants: {
            id: this.serial++,
            name: "Flagellants"
        },
        pilgrimageOfWrath: {
            id: this.serial++,
            name: "Pilgrimage of Wrath"
        },
        runelord: {
            id: this.serial++,
            name: "Runelord"
        },
        unforged: {
            id: this.serial++,
            name: "Unforged"
        },
        wardenKing: {
            id: this.serial++,
            name: "Warden King"
        },
        hammerers: {
            id: this.serial++,
            name: "Hammerers"
        },
        ironbreakers: {
            id: this.serial++,
            name: "Ironbreakers"
        },
        irondrakes: {
            id: this.serial++,
            name: "Irondrakes"
        },
        longbeards: {
            id: this.serial++,
            name: "Longbeards"
        },
        warriors: {
            id: this.serial++,
            name: "Warriors"
        },
        quarrellers: {
            id: this.serial++,
            name: "Quarrellers"
        },
        thunderers: {
            id: this.serial++,
            name: "Thunderers"
        },
        grudgeboundWarThrong: {
            id: this.serial++,
            name: "Grudgebound War Throng"
        },
        wardenKingOnThroneOfPower: {
            id: this.serial++,
            name: "Warden King on Throne of Power"
        },
        runelordOnAnvilOfDoom: {
            id: this.serial++,
            name: "Runelord on Anvil of Doom"
        },
        apprenticeRunesmith: {
            id: this.serial++,
            name: "Apprentice Runesmith"
        },
        farRanger: {
            id: this.serial++,
            name: "Far-Ranger"
        },
        thaneWithBattleStandard: {
            id: this.serial++,
            name: "Thane with Battle Standard"
        },
        miners: {
            id: this.serial++,
            name: "Miners"
        },
        slayers: {
            id: this.serial++,
            name: "Slayers"
        },
        duardinBoltThrower: {
            id: this.serial++,
            name: "Duardin Bolt Thrower"
        },
        flameCannon: {
            id: this.serial++,
            name: "Flame Cannon"
        },
        grudgeThrower: {
            id: this.serial++,
            name: "Grudge Thrower"
        },
        archmageOnDragon: {
            id: this.serial++,
            name: "Archmage On Dragon"
        },
        archmage: {
            id: this.serial++,
            name: "Archmage"
        },
        loremaster: {
            id: this.serial++,
            name: "Loremaster"
        },
        drakeseer: {
            id: this.serial++,
            name: "Drakeseer"
        },
        swordmasters: {
            id: this.serial++,
            name: "Swordmasters"
        },
        freeguildGeneral: {
            id: this.serial++,
            name: "Freeguild General"
        },
        freeguildGeneralOnGriffon: {
            id: this.serial++,
            name: "Freeguild General On Griffon"
        },
        demigryphKnights: {
            id: this.serial++,
            name: "Demigryph Knights"
        },
        freeguildCrossbowmen: {
            id: this.serial++,
            name: "Freeguild Crossbowmen"
        },
        freeguildHandgunners: {
            id: this.serial++,
            name: "Freeguild Handgunners"
        },
        freeguildArchers: {
            id: this.serial++,
            name: "Freeguild Archers"
        },
        freeguildGreatswords: {
            id: this.serial++,
            name: "Freeguild Greatswords"
        },
        freeguildPistoliers: {
            id: this.serial++,
            name: "Freeguild Pistoliers"
        },
        freeguildOutriders: {
            id: this.serial++,
            name: "Freeguild Outriders"
        },
        freeguildGuard: {
            id: this.serial++,
            name: "Freeguild Guard"
        },
        freeguildRegiment: {
            id: this.serial++,
            name: "Freeguild Regiment"
        },
        auricRunemaster: {
            id: this.serial++,
            name: "Auric Runemaster"
        },
        battlesmith: {
            id: this.serial++,
            name: "Battlesmith"
        },
        grimwrathBerzerker: {
            id: this.serial++,
            name: "Grimwrath Berzerker"
        },
        auricRunesmiter: {
            id: this.serial++,
            name: "Auric Runesmiter"
        },
        auricRunesmiterOnMagmadroth: {
            id: this.serial++,
            name: "Auric Runesmiter on Magmadroth"
        },
        auricRuneson: {
            id: this.serial++,
            name: "Auric Runeson"
        },
        auricRunesonOnMagmadroth: {
            id: this.serial++,
            name: "Auric Runeson on Magmadroth"
        },
        auricRunefather: {
            id: this.serial++,
            name: "Auric Runefather"
        },
        auricRunefatherOnMagmadroth: {
            id: this.serial++,
            name: "Auric Runefather on Magmadroth"
        },
        doomseeker: {
            id: this.serial++,
            name: "Doomseeker"
        },
        fjulGrimnir: {
            id: this.serial++,
            name: "Fjul-Grimnir"
        },
        auricHearthguard: {
            id: this.serial++,
            name: "Auric Hearthguard"
        },
        hearthguardBerzerkers: {
            id: this.serial++,
            name: "Hearthguard Berzerkers"
        },
        vulkiteBerzerkers: {
            id: this.serial++,
            name: "Vulkite Berzerkers"
        },
        theChosenAxes: {
            id: this.serial++,
            name: "The Chosen Axes"
        },
        lordsOfTheLodge: {
            id: this.serial++,
            name: "Lords of the Lodge"
        },
        warriorKinband: {
            id: this.serial++,
            name: "Warrior Kinband"
        },
        forgeBrethren: {
            id: this.serial++,
            name: "Forge Brethren"
        },
        grandFyrd: {
            id: this.serial++,
            name: "Grand Fyrd"
        },
        vostargLodge: {
            id: this.serial++,
            name: "Vostarg Lodge"
        },
        greyfyrdLodge: {
            id: this.serial++,
            name: "Greyfyrd Lodge"
        },
        seawardenOnFoot: {
            id: this.serial++,
            name: "Seawarden on Foot"
        },
        highbornSpearmen: {
            id: this.serial++,
            name: "Highborn Spearmen"
        },
        highbornArchers: {
            id: this.serial++,
            name: "Highborn Archers"
        },
        highbornSilverHelms: {
            id: this.serial++,
            name: "Highborn Silver Helms"
        },
        greatEagles: {
            id: this.serial++,
            name: "Great Eagles"
        },
        highbornRepeaterBoltThrower: {
            id: this.serial++,
            name: "Highborn Repeater Bolt Thrower"
        },
        gunmaster: {
            id: this.serial++,
            name: "Gunmaster"
        },
        cogsmith: {
            id: this.serial++,
            name: "Cogsmith"
        },
        gyrocopters: {
            id: this.serial++,
            name: "Gyrocopters"
        },
        gyrobombers: {
            id: this.serial++,
            name: "Gyrobombers"
        },
        steamTank: {
            id: this.serial++,
            name: "Steam Tank"
        },
        cannon: {
            id: this.serial++,
            name: "Cannon"
        },
        organGun: {
            id: this.serial++,
            name: "Organ Gun"
        },
        helblasterVolleyGun: {
            id: this.serial++,
            name: "Helblaster Volley Gun"
        },
        helstormRocketBattery: {
            id: this.serial++,
            name: "Helstorm Rocket Battery"
        },
        artilleryDetachment: {
            id: this.serial++,
            name: "Artillery Detachment"
        },
        aetherKhemist: {
            id: this.serial++,
            name: "Aether-Khemist"
        },
        aethericNavigator: {
            id: this.serial++,
            name: "Aetheric Navigator"
        },
        arkanautAdmiral: {
            id: this.serial++,
            name: "Arkanaut Admiral"
        },
        brokkGrungsson: {
            id: this.serial++,
            name: "Brokk Grungsson"
        },
        endrinmaster: {
            id: this.serial++,
            name: "Endrinmaster"
        },
        arkanautCompany: {
            id: this.serial++,
            name: "Arkanaut Company"
        },
        grundstokThunderers: {
            id: this.serial++,
            name: "Grundstok Thunderers"
        },
        endrinriggers: {
            id: this.serial++,
            name: "Endrinriggers"
        },
        skywardens: {
            id: this.serial++,
            name: "Skywardens"
        },
        arkanautFrigate: {
            id: this.serial++,
            name: "Arkanaut Frigate"
        },
        arkanautIronclad: {
            id: this.serial++,
            name: "Arkanaut Ironclad"
        },
        grundstokGunhauler: {
            id: this.serial++,
            name: "Grundstok Gunhauler"
        },
        aetherstrikeForce: {
            id: this.serial++,
            name: "Aetherstrike Force"
        },
        ironSkySquadron: {
            id: this.serial++,
            name: "Iron Sky Squadron"
        },
        ironSkyCommand: {
            id: this.serial++,
            name: "Iron Sky Command"
        },
        grundstokEscortWing: {
            id: this.serial++,
            name: "Grundstok Escort Wing"
        },
        grandArmada: {
            id: this.serial++,
            name: "Grand Armada"
        },
        whiteLions: {
            id: this.serial++,
            name: "White Lions"
        },
        whiteLionChariots: {
            id: this.serial++,
            name: "White Lion Chariots"
        },
        skinkProphet: {
            id: this.serial++,
            name: "Skink Prophet"
        },
        chameleonSkinkStalker: {
            id: this.serial++,
            name: "Chameleon Skink Stalker"
        },
        skinkChief: {
            id: this.serial++,
            name: "Skink Chief"
        },
        celestialSwarms: {
            id: this.serial++,
            name: "Celestial Swarms"
        },
        carmineDragon: {
            id: this.serial++,
            name: "Carmine Dragon"
        },
        dragonNoble: {
            id: this.serial++,
            name: "Dragon Noble"
        },
        dragonlord: {
            id: this.serial++,
            name: "Dragonlord"
        },
        dragonBlades: {
            id: this.serial++,
            name: "Dragon Blades"
        },
        dragonlordHost: {
            id: this.serial++,
            name: "Dragonlord Host"
        },
        dreadlordOnBlackDragon: {
            id: this.serial++,
            name: "Dreadlord On Black Dragon"
        },
        drakespawnKnights: {
            id: this.serial++,
            name: "Drakespawn Knights"
        },
        drakespawnChariots: {
            id: this.serial++,
            name: "Drakespawn Chariots"
        },
        warHydra: {
            id: this.serial++,
            name: "War Hydra"
        },
        ebondrakeWarhost: {
            id: this.serial++,
            name: "Ebondrake Warhost"
        },
        anointedOfAsuryanOnFlamespyrePhoenix: {
            id: this.serial++,
            name: "Anointed Of Asuryan On Flamespyre Phoenix"
        },
        anointedOfAsuryanOnFrostheartPhoenix: {
            id: this.serial++,
            name: "Anointed Of Asuryan On Frostheart Phoenix"
        },
        anointed: {
            id: this.serial++,
            name: "Anointed"
        },
        phoenixGuard: {
            id: this.serial++,
            name: "Phoenix Guard"
        },
        flamespyrePhoenix: {
            id: this.serial++,
            name: "Flamespyre Phoenix"
        },
        frostheartPhoenix: {
            id: this.serial++,
            name: "Frostheart Phoenix"
        },
        spyreheartWarhost: {
            id: this.serial++,
            name: "Spyreheart Warhost"
        },
        blackArkFleetmaster: {
            id: this.serial++,
            name: "Black Ark Fleetmaster"
        },
        blackArkCorsairs: {
            id: this.serial++,
            name: "Black Ark Corsairs"
        },
        scourgerunnerChariots: {
            id: this.serial++,
            name: "Scourgerunner Chariots"
        },
        kharibdyss: {
            id: this.serial++,
            name: "Kharibdyss"
        },
        realmReavers: {
            id: this.serial++,
            name: "Realm Reavers"
        },
        lordKroak: {
            id: this.serial++,
            name: "Lord Kroak"
        },
        slannStarmaster: {
            id: this.serial++,
            name: "Slann Starmaster"
        },
        saurusOldbloodOnCarnosaur: {
            id: this.serial++,
            name: "Saurus Oldblood on Carnosaur"
        },
        saurusOldblood: {
            id: this.serial++,
            name: "Saurus Oldblood"
        },
        saurusScarVeteranOnColdOne: {
            id: this.serial++,
            name: "Saurus Scar-Veteran on Cold One"
        },
        saurusEternityWarden: {
            id: this.serial++,
            name: "Saurus Eternity Warden"
        },
        saurusSunblood: {
            id: this.serial++,
            name: "Saurus Sunblood"
        },
        scarVeteranWithBattleStandard: {
            id: this.serial++,
            name: "Scar-Veteran with Battle Standard"
        },
        saurusAstrolithBearer: {
            id: this.serial++,
            name: "Saurus Astrolith Bearer"
        },
        saurusScarVeteranOnCarnosaur: {
            id: this.serial++,
            name: "Saurus Scar-Veteran on Carnosaur"
        },
        skinkPriest: {
            id: this.serial++,
            name: "Skink Priest"
        },
        skinkStarseer: {
            id: this.serial++,
            name: "Skink Starseer"
        },
        skinkStarpriest: {
            id: this.serial++,
            name: "Skink Starpriest"
        },
        engineOfTheGods: {
            id: this.serial++,
            name: "Engine of the Gods"
        },
        saurusWarriors: {
            id: this.serial++,
            name: "Saurus Warriors"
        },
        saurusGuard: {
            id: this.serial++,
            name: "Saurus Guard"
        },
        saurusKnights: {
            id: this.serial++,
            name: "Saurus Knights"
        },
        skinks: {
            id: this.serial++,
            name: "Skinks"
        },
        chameleonSkinks: {
            id: this.serial++,
            name: "Chameleon Skinks"
        },
        terradonRiders: {
            id: this.serial++,
            name: "Terradon Riders"
        },
        ripperdactylRiders: {
            id: this.serial++,
            name: "Ripperdactyl Riders"
        },
        skinkHandlers: {
            id: this.serial++,
            name: "Skink Handlers"
        },
        salamanders: {
            id: this.serial++,
            name: "Salamanders"
        },
        razordons: {
            id: this.serial++,
            name: "Razordons"
        },
        kroxigor: {
            id: this.serial++,
            name: "Kroxigor"
        },
        stegadon: {
            id: this.serial++,
            name: "Stegadon"
        },
        bastiladon: {
            id: this.serial++,
            name: "Bastiladon"
        },
        troglodon: {
            id: this.serial++,
            name: "Troglodon"
        },
        dreadSaurian: {
            id: this.serial++,
            name: "Dread Saurian"
        },
        bloodclawStarhost: {
            id: this.serial++,
            name: "Bloodclaw Starhost"
        },
        eternalStarhost: {
            id: this.serial++,
            name: "Eternal Starhost"
        },
        firelanceStarhost: {
            id: this.serial++,
            name: "Firelance Starhost"
        },
        heavenswatchStarhost: {
            id: this.serial++,
            name: "Heavenswatch Starhost"
        },
        shadowstrikeStarhost: {
            id: this.serial++,
            name: "Shadowstrike Starhost"
        },
        starbeastConstellation: {
            id: this.serial++,
            name: "Starbeast Constellation"
        },
        sunclawStarhost: {
            id: this.serial++,
            name: "Sunclaw Starhost"
        },
        thunderquakeStarhost: {
            id: this.serial++,
            name: "Thunderquake Starhost"
        },
        fangsOfSotek: {
            id: this.serial++,
            name: "Fangs of Sotek"
        },
        dracothionSTail: {
            id: this.serial++,
            name: "Dracothion's Tail"
        },
        assassin: {
            id: this.serial++,
            name: "Assassin"
        },
        darkRiders: {
            id: this.serial++,
            name: "Dark Riders"
        },
        lordCelestant: {
            id: this.serial++,
            name: "Lord-Celestant"
        },
        lordRelictor: {
            id: this.serial++,
            name: "Lord-Relictor"
        },
        lordCastellant: {
            id: this.serial++,
            name: "Lord-Castellant"
        },
        celestantPrime: {
            id: this.serial++,
            name: "Celestant-Prime"
        },
        knightVexillor: {
            id: this.serial++,
            name: "Knight-Vexillor"
        },
        gavrielSureheart: {
            id: this.serial++,
            name: "Gavriel Sureheart"
        },
        knightHeraldor: {
            id: this.serial++,
            name: "Knight-Heraldor"
        },
        knightAzyros: {
            id: this.serial++,
            name: "Knight-Azyros"
        },
        knightVenator: {
            id: this.serial++,
            name: "Knight-Venator"
        },
        knightQuestor: {
            id: this.serial++,
            name: "Knight-Questor"
        },
        lordVeritant: {
            id: this.serial++,
            name: "Lord-Veritant"
        },
        lordCelestantOnDracoth: {
            id: this.serial++,
            name: "Lord-Celestant On Dracoth"
        },
        vandusHammerhand: {
            id: this.serial++,
            name: "Vandus Hammerhand"
        },
        lordCelestantOnStardrake: {
            id: this.serial++,
            name: "Lord-Celestant On Stardrake"
        },
        drakeswornTemplar: {
            id: this.serial++,
            name: "Drakesworn Templar"
        },
        lordAquilor: {
            id: this.serial++,
            name: "Lord-Aquilor"
        },
        neaveBlacktalon: {
            id: this.serial++,
            name: "Neave Blacktalon"
        },
        lordOrdinator: {
            id: this.serial++,
            name: "Lord-Ordinator"
        },
        gryphHound: {
            id: this.serial++,
            name: "Gryph-Hound"
        },
        prosecutorsWithStormcallJavelins: {
            id: this.serial++,
            name: "Prosecutors with Stormcall Javelins"
        },
        prosecutorsWithCelestialHammers: {
            id: this.serial++,
            name: "Prosecutors with Celestial Hammers"
        },
        paladinRetributors: {
            id: this.serial++,
            name: "Paladin Retributors"
        },
        liberators: {
            id: this.serial++,
            name: "Liberators"
        },
        steelheartSChampions: {
            id: this.serial++,
            name: "Steelheart's Champions"
        },
        judicators: {
            id: this.serial++,
            name: "Judicators"
        },
        paladinProtectors: {
            id: this.serial++,
            name: "Paladin Protectors"
        },
        paladinDecimators: {
            id: this.serial++,
            name: "Paladin Decimators"
        },
        concussors: {
            id: this.serial++,
            name: "Concussors"
        },
        desolators: {
            id: this.serial++,
            name: "Desolators"
        },
        tempestors: {
            id: this.serial++,
            name: "Tempestors"
        },
        fulminators: {
            id: this.serial++,
            name: "Fulminators"
        },
        aetherwings: {
            id: this.serial++,
            name: "Aetherwings"
        },
        vanguardHunters: {
            id: this.serial++,
            name: "Vanguard-Hunters"
        },
        vanguardPalladors: {
            id: this.serial++,
            name: "Vanguard-Palladors"
        },
        vanguardRaptorsWithHurricaneCrossbows: {
            id: this.serial++,
            name: "Vanguard-Raptors with Hurricane Crossbows"
        },
        vanguardRaptorsWithLongstrikeCrossbows: {
            id: this.serial++,
            name: "Vanguard-Raptors with Longstrike Crossbows"
        },
        exemplarChamber: {
            id: this.serial++,
            name: "Exemplar Chamber"
        },
        devastationBrotherhood: {
            id: this.serial++,
            name: "Devastation Brotherhood"
        },
        hammerstrikeForce: {
            id: this.serial++,
            name: "Hammerstrike Force"
        },
        lordsOfTheStorm: {
            id: this.serial++,
            name: "Lords of the Storm"
        },
        theSkyborneSlayers: {
            id: this.serial++,
            name: "The Skyborne Slayers"
        },
        thunderheadBrotherhood: {
            id: this.serial++,
            name: "Thunderhead Brotherhood"
        },
        vanguardWing: {
            id: this.serial++,
            name: "Vanguard Wing"
        },
        harbingerChamber: {
            id: this.serial++,
            name: "Harbinger Chamber"
        },
        warriorBrotherhood: {
            id: this.serial++,
            name: "Warrior Brotherhood"
        },
        warriorChamber: {
            id: this.serial++,
            name: "Warrior Chamber"
        },
        drakeswornTemple: {
            id: this.serial++,
            name: "Drakesworn Temple"
        },
        extremisChamber: {
            id: this.serial++,
            name: "Extremis Chamber"
        },
        lightningEchelon: {
            id: this.serial++,
            name: "Lightning Echelon"
        },
        thunderwaveEchelon: {
            id: this.serial++,
            name: "Thunderwave Echelon"
        },
        anvilsOfTheHeldenhammerWarriorChamber: {
            id: this.serial++,
            name: "Anvils of the Heldenhammer Warrior Chamber"
        },
        astralTemplarsExemplarChamber: {
            id: this.serial++,
            name: "Astral Templars Exemplar Chamber"
        },
        celestialHuntingPack: {
            id: this.serial++,
            name: "Celestial Hunting Pack"
        },
        celestialVindicatorsWarriorChamber: {
            id: this.serial++,
            name: "Celestial Vindicators Warrior Chamber"
        },
        celestialWarbringersHarbingerChamber: {
            id: this.serial++,
            name: "Celestial Warbringers Harbinger Chamber"
        },
        hallowedKnightsWarriorChamber: {
            id: this.serial++,
            name: "Hallowed Knights Warrior Chamber"
        },
        hammersOfSigmarWarriorChamber: {
            id: this.serial++,
            name: "Hammers of Sigmar Warrior Chamber"
        },
        knightsExcelsiorExemplarChamber: {
            id: this.serial++,
            name: "Knights Excelsior Exemplar Chamber"
        },
        stormHeralds: {
            id: this.serial++,
            name: "Storm Heralds"
        },
        stormVortexGarrison: {
            id: this.serial++,
            name: "Storm Vortex Garrison"
        },
        tempestLordsHarbingerChamber: {
            id: this.serial++,
            name: "Tempest Lords Harbinger Chamber"
        },
        vanguardAngelosConclave: {
            id: this.serial++,
            name: "Vanguard Angelos Conclave"
        },
        vanguardAuxiliaryChamber: {
            id: this.serial++,
            name: "Vanguard Auxiliary Chamber"
        },
        vanguardJusticarConclave: {
            id: this.serial++,
            name: "Vanguard Justicar Conclave"
        },
        blacktalonSShadowhammers: {
            id: this.serial++,
            name: "Blacktalon's Shadowhammers"
        },
        highWarden: {
            id: this.serial++,
            name: "High Warden"
        },
        skywarden: {
            id: this.serial++,
            name: "Skywarden"
        },
        reavers: {
            id: this.serial++,
            name: "Reavers"
        },
        spireguard: {
            id: this.serial++,
            name: "Spireguard"
        },
        skycutters: {
            id: this.serial++,
            name: "Skycutters"
        },
        shadowWarriors: {
            id: this.serial++,
            name: "Shadow Warriors"
        },
        chariots: {
            id: this.serial++,
            name: "Chariots"
        },
        branchwraith: {
            id: this.serial++,
            name: "Branchwraith"
        },
        branchwych: {
            id: this.serial++,
            name: "Branchwych"
        },
        spiritOfDurthu: {
            id: this.serial++,
            name: "Spirit of Durthu"
        },
        drychaHamadreth: {
            id: this.serial++,
            name: "Drycha Hamadreth"
        },
        alarielleTheEverqueen: {
            id: this.serial++,
            name: "Alarielle the Everqueen"
        },
        treelordAncient: {
            id: this.serial++,
            name: "Treelord Ancient"
        },
        dryads: {
            id: this.serial++,
            name: "Dryads"
        },
        kurnothHunters: {
            id: this.serial++,
            name: "Kurnoth Hunters"
        },
        spiteRevenants: {
            id: this.serial++,
            name: "Spite-Revenants"
        },
        treeRevenants: {
            id: this.serial++,
            name: "Tree-Revenants"
        },
        treelord: {
            id: this.serial++,
            name: "Treelord"
        },
        alarielleSHeartwoodGuard: {
            id: this.serial++,
            name: "Alarielle's Heartwood Guard"
        },
        sylvanethWargrove: {
            id: this.serial++,
            name: "Sylvaneth Wargrove"
        },
        winterleafWargrove: {
            id: this.serial++,
            name: "Winterleaf Wargrove"
        },
        ironbarkWargrove: {
            id: this.serial++,
            name: "Ironbark Wargrove"
        },
        dreadwoodWargrove: {
            id: this.serial++,
            name: "Dreadwood Wargrove"
        },
        heartwoodWargrove: {
            id: this.serial++,
            name: "Heartwood Wargrove"
        },
        gnarlrootWargrove: {
            id: this.serial++,
            name: "Gnarlroot Wargrove"
        },
        oakenbrowWargrove: {
            id: this.serial++,
            name: "Oakenbrow Wargrove"
        },
        harvestboonWargrove: {
            id: this.serial++,
            name: "Harvestboon Wargrove"
        },
        forestSpiritWargrove: {
            id: this.serial++,
            name: "Forest Spirit Wargrove"
        },
        outcasts: {
            id: this.serial++,
            name: "Outcasts"
        },
        freeSpirits: {
            id: this.serial++,
            name: "Free Spirits"
        },
        forestFolk: {
            id: this.serial++,
            name: "Forest Folk"
        },
        household: {
            id: this.serial++,
            name: "Household"
        },
        lordsOfTheClan: {
            id: this.serial++,
            name: "Lords of the Clan"
        },
        theGuardiansOfAlarielle: {
            id: this.serial++,
            name: "The Guardians of Alarielle"
        },
        huntmarshal: {
            id: this.serial++,
            name: "Huntmarshal"
        },
        engineerOnMechanicalSteed: {
            id: this.serial++,
            name: "Engineer On Mechanical Steed"
        },
        battlemageOnPegasus: {
            id: this.serial++,
            name: "Battlemage on Pegasus"
        },
        knightsOfOrder: {
            id: this.serial++,
            name: "Knights of Order"
        },
        greatcannon: {
            id: this.serial++,
            name: "Greatcannon"
        },
        fieldMortar: {
            id: this.serial++,
            name: "Field Mortar"
        },
        nomadPrince: {
            id: this.serial++,
            name: "Nomad Prince"
        },
        spellweaver: {
            id: this.serial++,
            name: "Spellweaver"
        },
        waywatcher: {
            id: this.serial++,
            name: "Waywatcher"
        },
        wayfinder: {
            id: this.serial++,
            name: "Wayfinder"
        },
        waystrider: {
            id: this.serial++,
            name: "Waystrider"
        },
        wildRiders: {
            id: this.serial++,
            name: "Wild Riders"
        },
        gladeGuard: {
            id: this.serial++,
            name: "Glade Guard"
        },
        sistersOfTheWatch: {
            id: this.serial++,
            name: "Sisters of the Watch"
        },
        eternalGuard: {
            id: this.serial++,
            name: "Eternal Guard"
        },
        wildwoodRangers: {
            id: this.serial++,
            name: "Wildwood Rangers"
        },
        sistersOfTheThorn: {
            id: this.serial++,
            name: "Sisters of the Thorn"
        },
        waystonePathfinders: {
            id: this.serial++,
            name: "Waystone Pathfinders"
        },
        gladeCaptainBattleStandardBearer: {
            id: this.serial++,
            name: "Glade Captain Battle Standard Bearer"
        },
        gladeLordOnGreatEagle: {
            id: this.serial++,
            name: "Glade Lord on Great Eagle"
        },
        gladeLordOnGreatStag: {
            id: this.serial++,
            name: "Glade Lord on Great Stag"
        },
        gladeLordOnForestDragon: {
            id: this.serial++,
            name: "Glade Lord on Forest Dragon"
        },
        gladeLordOnPurebredSteed: {
            id: this.serial++,
            name: "Glade Lord on Purebred Steed"
        },
        gladeLord: {
            id: this.serial++,
            name: "Glade Lord"
        },
        avatarOfTheHunt: {
            id: this.serial++,
            name: "Avatar of the Hunt"
        },
        twilightSistersOnForestDragon: {
            id: this.serial++,
            name: "Twilight Sisters on Forest Dragon"
        },
        shadowdancer: {
            id: this.serial++,
            name: "Shadowdancer"
        },
        huntingHounds: {
            id: this.serial++,
            name: "Hunting Hounds"
        },
        wardancers: {
            id: this.serial++,
            name: "Wardancers"
        },
        waywatchers: {
            id: this.serial++,
            name: "Waywatchers"
        },
        gladeRiders: {
            id: this.serial++,
            name: "Glade Riders"
        },
        warhawkRiders: {
            id: this.serial++,
            name: "Warhawk Riders"
        },
        treeKin: {
            id: this.serial++,
            name: "Tree Kin"
        },
        aleguzzlerGargant: {
            id: this.serial++,
            name: "Aleguzzler Gargant"
        },
        icebrowHunter: {
            id: this.serial++,
            name: "Icebrow Hunter"
        },
        frostlordOnStonehorn: {
            id: this.serial++,
            name: "Frostlord on Stonehorn"
        },
        frostlordOnThundertusk: {
            id: this.serial++,
            name: "Frostlord on Thundertusk"
        },
        huskardOnStonehorn: {
            id: this.serial++,
            name: "Huskard on Stonehorn"
        },
        huskardOnThundertusk: {
            id: this.serial++,
            name: "Huskard on Thundertusk"
        },
        frostSabres: {
            id: this.serial++,
            name: "Frost Sabres"
        },
        mournfangPack: {
            id: this.serial++,
            name: "Mournfang Pack"
        },
        icefallYhetees: {
            id: this.serial++,
            name: "Icefall Yhetees"
        },
        stonehornBeastriders: {
            id: this.serial++,
            name: "Stonehorn Beastriders"
        },
        thundertuskBeastriders: {
            id: this.serial++,
            name: "Thundertusk Beastriders"
        },
        braggothSBeastHammer: {
            id: this.serial++,
            name: "Braggoth's Beast Hammer"
        },
        olwyrAlfrostun: {
            id: this.serial++,
            name: "Olwyr Alfrostun"
        },
        svardAlfrostun: {
            id: this.serial++,
            name: "Svard Alfrostun"
        },
        eurlbad: {
            id: this.serial++,
            name: "Eurlbad"
        },
        torrbad: {
            id: this.serial++,
            name: "Torrbad"
        },
        skal: {
            id: this.serial++,
            name: "Skal"
        },
        alfrostun: {
            id: this.serial++,
            name: "Alfrostun"
        },
        jorlbad: {
            id: this.serial++,
            name: "Jorlbad"
        },
        savageBigBoss: {
            id: this.serial++,
            name: "Savage Big Boss"
        },
        maniakWeirdnob: {
            id: this.serial++,
            name: "Maniak Weirdnob"
        },
        wardokk: {
            id: this.serial++,
            name: "Wardokk"
        },
        wurrgogProphet: {
            id: this.serial++,
            name: "Wurrgog Prophet"
        },
        savageOrruks: {
            id: this.serial++,
            name: "Savage Orruks"
        },
        savageOrrukArrowboys: {
            id: this.serial++,
            name: "Savage Orruk Arrowboys"
        },
        savageOrrukMorboys: {
            id: this.serial++,
            name: "Savage Orruk Morboys"
        },
        savageBigStabbas: {
            id: this.serial++,
            name: "Savage Big Stabbas"
        },
        savageBoarboyz: {
            id: this.serial++,
            name: "Savage Boarboyz"
        },
        savageBoarboyManiaks: {
            id: this.serial++,
            name: "Savage Boarboy Maniaks"
        },
        kopRukk: {
            id: this.serial++,
            name: "Kop Rukk"
        },
        iceboneWarclan: {
            id: this.serial++,
            name: "Icebone Warclan"
        },
        savageWarclan: {
            id: this.serial++,
            name: "Savage Warclan"
        },
        kunninRukk: {
            id: this.serial++,
            name: "Kunnin' Rukk"
        },
        drakkfootWarclan: {
            id: this.serial++,
            name: "Drakkfoot Warclan"
        },
        snagaRukk: {
            id: this.serial++,
            name: "Snaga Rukk"
        },
        brutalRukk: {
            id: this.serial++,
            name: "Brutal Rukk"
        },
        teefRukk: {
            id: this.serial++,
            name: "Teef Rukk"
        },
        bonegrinzWarclan: {
            id: this.serial++,
            name: "Bonegrinz Warclan"
        },
        firebelly: {
            id: this.serial++,
            name: "Firebelly"
        },
        gitmobGrotShaman: {
            id: this.serial++,
            name: "Gitmob Grot Shaman"
        },
        gitmobGrots: {
            id: this.serial++,
            name: "Gitmob Grots"
        },
        grotWolfRiders: {
            id: this.serial++,
            name: "Grot Wolf Riders"
        },
        grotWolfChariots: {
            id: this.serial++,
            name: "Grot Wolf Chariots"
        },
        nastySkulkers: {
            id: this.serial++,
            name: "Nasty Skulkers"
        },
        snotlings: {
            id: this.serial++,
            name: "Snotlings"
        },
        snotlingPumpWagons: {
            id: this.serial++,
            name: "Snotling Pump Wagons"
        },
        grotSpearChukka: {
            id: this.serial++,
            name: "Grot Spear Chukka"
        },
        grotRockLobber: {
            id: this.serial++,
            name: "Grot Rock Lobber"
        },
        doomDiverCatapult: {
            id: this.serial++,
            name: "Doom Diver Catapult"
        },
        orrukWarboss: {
            id: this.serial++,
            name: "Orruk Warboss"
        },
        orrukWarbossOnWyvern: {
            id: this.serial++,
            name: "Orruk Warboss On Wyvern"
        },
        orrukGreatShaman: {
            id: this.serial++,
            name: "Orruk Great Shaman"
        },
        orruks: {
            id: this.serial++,
            name: "Orruks"
        },
        orrukBoarboys: {
            id: this.serial++,
            name: "Orruk Boarboys"
        },
        orrukBoarChariots: {
            id: this.serial++,
            name: "Orruk Boar Chariots"
        },
        tyrant: {
            id: this.serial++,
            name: "Tyrant"
        },
        butcher: {
            id: this.serial++,
            name: "Butcher"
        },
        ogors: {
            id: this.serial++,
            name: "Ogors"
        },
        ironguts: {
            id: this.serial++,
            name: "Ironguts"
        },
        leadbelchers: {
            id: this.serial++,
            name: "Leadbelchers"
        },
        gorgers: {
            id: this.serial++,
            name: "Gorgers"
        },
        ironblaster: {
            id: this.serial++,
            name: "Ironblaster"
        },
        grotScraplauncher: {
            id: this.serial++,
            name: "Grot Scraplauncher"
        },
        grots: {
            id: this.serial++,
            name: "Grots"
        },
        gordrakkTheFistOfGork: {
            id: this.serial++,
            name: "Gordrakk The Fist of Gork"
        },
        megabossOnMawKrusha: {
            id: this.serial++,
            name: "Megaboss on Maw-Krusha"
        },
        orrukMegaboss: {
            id: this.serial++,
            name: "Orruk Megaboss"
        },
        orrukWarchanter: {
            id: this.serial++,
            name: "Orruk Warchanter"
        },
        orrukWeirdnobShaman: {
            id: this.serial++,
            name: "Orruk Weirdnob Shaman"
        },
        orrukArdboys: {
            id: this.serial++,
            name: "Orruk Ardboys"
        },
        orrukBrutes: {
            id: this.serial++,
            name: "Orruk Brutes"
        },
        orrukGoreGruntas: {
            id: this.serial++,
            name: "Orruk Gore Gruntas"
        },
        ironskullSBoyz: {
            id: this.serial++,
            name: "Ironskull's Boyz"
        },
        ardfist: {
            id: this.serial++,
            name: "Ardfist"
        },
        brawl: {
            id: this.serial++,
            name: "Brawl"
        },
        bruteFist: {
            id: this.serial++,
            name: "Brute Fist"
        },
        gorefist: {
            id: this.serial++,
            name: "Gorefist"
        },
        ironfist: {
            id: this.serial++,
            name: "Ironfist"
        },
        weirdfist: {
            id: this.serial++,
            name: "Weirdfist"
        },
        bloodtoofs: {
            id: this.serial++,
            name: "Bloodtoofs"
        },
        ironsunz: {
            id: this.serial++,
            name: "Ironsunz"
        },
        maneaters: {
            id: this.serial++,
            name: "Maneaters"
        },
        fimirWarriors: {
            id: this.serial++,
            name: "Fimir Warriors"
        },
        basilisk: {
            id: this.serial++,
            name: "Basilisk"
        },
        bonegrinderGargant: {
            id: this.serial++,
            name: "Bonegrinder Gargant"
        },
        colossalSquig: {
            id: this.serial++,
            name: "Colossal Squig"
        },
        dreadMaw: {
            id: this.serial++,
            name: "Dread Maw"
        },
        incarnateElementalOfBeasts: {
            id: this.serial++,
            name: "Incarnate Elemental of Beasts"
        },
        incarnateElementalOfFire: {
            id: this.serial++,
            name: "Incarnate Elemental of Fire"
        },
        magmaDragon: {
            id: this.serial++,
            name: "Magma Dragon"
        },
        merwyrm: {
            id: this.serial++,
            name: "Merwyrm"
        },
        rogueIdol: {
            id: this.serial++,
            name: "Rogue Idol"
        },
        squigGobba: {
            id: this.serial++,
            name: "Squig Gobba"
        },
        grotWarboss: {
            id: this.serial++,
            name: "Grot Warboss"
        },
        grotWarbossOnGreatCaveSquig: {
            id: this.serial++,
            name: "Grot Warboss On Great Cave Squig"
        },
        moonclanGrotShaman: {
            id: this.serial++,
            name: "Moonclan Grot Shaman"
        },
        fungoidCaveShaman: {
            id: this.serial++,
            name: "Fungoid Cave-Shaman"
        },
        moonclanGrots: {
            id: this.serial++,
            name: "Moonclan Grots"
        },
        grotFanatics: {
            id: this.serial++,
            name: "Grot Fanatics"
        },
        grotSquigHoppers: {
            id: this.serial++,
            name: "Grot Squig Hoppers"
        },
        grotSquigHerders: {
            id: this.serial++,
            name: "Grot Squig Herders"
        },
        caveSquigs: {
            id: this.serial++,
            name: "Cave Squigs"
        },
        manglerSquigs: {
            id: this.serial++,
            name: "Mangler Squigs"
        },
        overtyrant: {
            id: this.serial++,
            name: "Overtyrant"
        },
        bruiserStandardBearer: {
            id: this.serial++,
            name: "Bruiser Standard Bearer"
        },
        gitbossOnWolfChariot: {
            id: this.serial++,
            name: "Gitboss on Wolf Chariot"
        },
        gitboss: {
            id: this.serial++,
            name: "Gitboss"
        },
        orrukBully: {
            id: this.serial++,
            name: "Orruk Bully"
        },
        mercenaryOrruks: {
            id: this.serial++,
            name: "Mercenary Orruks"
        },
        arachnarokSpiderWithGrotShaman: {
            id: this.serial++,
            name: "Arachnarok Spider With Grot Shaman"
        },
        grotBigBossOnGiganticSpider: {
            id: this.serial++,
            name: "Grot Big Boss On Gigantic Spider"
        },
        grotSpiderRiders: {
            id: this.serial++,
            name: "Grot Spider Riders"
        },
        arachnarokSpider: {
            id: this.serial++,
            name: "Arachnarok Spider"
        },
        troggothHag: {
            id: this.serial++,
            name: "Troggoth Hag"
        },
        fellwaterTroggoths: {
            id: this.serial++,
            name: "Fellwater Troggoths"
        },
        sourbreathTroggoths: {
            id: this.serial++,
            name: "Sourbreath Troggoths"
        },
        rockgutTroggoths: {
            id: this.serial++,
            name: "Rockgut Troggoths"
        },
        zombies: {
            id: this.serial++,
            name: "Zombies"
        },
        direWolves: {
            id: this.serial++,
            name: "Dire Wolves"
        },
        corpseCart: {
            id: this.serial++,
            name: "Corpse Cart"
        },
        nagashSupremeLordOfTheUndead: {
            id: this.serial++,
            name: "Nagash Supreme Lord Of The Undead"
        },
        arkhanTheBlackMortarchOfSacrament: {
            id: this.serial++,
            name: "Arkhan The Black Mortarch of Sacrament"
        },
        mannfredMortarchOfNight: {
            id: this.serial++,
            name: "Mannfred Mortarch Of Night"
        },
        neferataMortarchOfBlood: {
            id: this.serial++,
            name: "Neferata Mortarch Of Blood"
        },
        morghastHarbingers: {
            id: this.serial++,
            name: "Morghast Harbingers"
        },
        morghastArchai: {
            id: this.serial++,
            name: "Morghast Archai"
        },
        necromancer: {
            id: this.serial++,
            name: "Necromancer"
        },
        mortisEngine: {
            id: this.serial++,
            name: "Mortis Engine"
        },
        wightKingWithBalefulTombBlade: {
            id: this.serial++,
            name: "Wight King with Baleful Tomb Blade"
        },
        wightKingWithBlackAxe: {
            id: this.serial++,
            name: "Wight King with Black Axe"
        },
        skeletonWarriors: {
            id: this.serial++,
            name: "Skeleton Warriors"
        },
        graveGuard: {
            id: this.serial++,
            name: "Grave Guard"
        },
        blackKnights: {
            id: this.serial++,
            name: "Black Knights"
        },
        theSepulchralGuard: {
            id: this.serial++,
            name: "The Sepulchral Guard"
        },
        legionOfDeath: {
            id: this.serial++,
            name: "Legion of Death"
        },
        abhorrantGhoulKing: {
            id: this.serial++,
            name: "Abhorrant Ghoul King"
        },
        abhorrantGhoulKingOnTerrorgheist: {
            id: this.serial++,
            name: "Abhorrant Ghoul King on Terrorgheist"
        },
        abhorrantGhoulKingOnZombieDragon: {
            id: this.serial++,
            name: "Abhorrant Ghoul King on Zombie Dragon"
        },
        cryptGhastCourtier: {
            id: this.serial++,
            name: "Crypt Ghast Courtier"
        },
        cryptHaunterCourtier: {
            id: this.serial++,
            name: "Crypt Haunter Courtier"
        },
        cryptInfernalCourtier: {
            id: this.serial++,
            name: "Crypt Infernal Courtier"
        },
        varghulfCourtier: {
            id: this.serial++,
            name: "Varghulf Courtier"
        },
        cryptGhouls: {
            id: this.serial++,
            name: "Crypt Ghouls"
        },
        cryptHorrors: {
            id: this.serial++,
            name: "Crypt Horrors"
        },
        cryptFlayers: {
            id: this.serial++,
            name: "Crypt Flayers"
        },
        terrorgheist: {
            id: this.serial++,
            name: "Terrorgheist"
        },
        zombieDragon: {
            id: this.serial++,
            name: "Zombie Dragon"
        },
        abattoir: {
            id: this.serial++,
            name: "Abattoir"
        },
        attendantsAtCourt: {
            id: this.serial++,
            name: "Attendants at Court"
        },
        deadwatch: {
            id: this.serial++,
            name: "Deadwatch"
        },
        fleshEaterCourt: {
            id: this.serial++,
            name: "Flesh-eater Court"
        },
        ghoulPatrol: {
            id: this.serial++,
            name: "Ghoul Patrol"
        },
        kingSGhouls: {
            id: this.serial++,
            name: "King's Ghouls"
        },
        royalFamily: {
            id: this.serial++,
            name: "Royal Family"
        },
        royalMenagerie: {
            id: this.serial++,
            name: "Royal Menagerie"
        },
        royalMordants: {
            id: this.serial++,
            name: "Royal Mordants"
        },
        cairnWraith: {
            id: this.serial++,
            name: "Cairn Wraith"
        },
        tombBanshee: {
            id: this.serial++,
            name: "Tomb Banshee"
        },
        vampireLord: {
            id: this.serial++,
            name: "Vampire Lord"
        },
        vampireLordOnZombieDragon: {
            id: this.serial++,
            name: "Vampire Lord On Zombie Dragon"
        },
        princeVhordrai: {
            id: this.serial++,
            name: "Prince Vhordrai"
        },
        covenThrone: {
            id: this.serial++,
            name: "Coven Throne"
        },
        bloodseekerPalanquin: {
            id: this.serial++,
            name: "Bloodseeker Palanquin"
        },
        spiritHosts: {
            id: this.serial++,
            name: "Spirit Hosts"
        },
        hexwraiths: {
            id: this.serial++,
            name: "Hexwraiths"
        },
        vargheists: {
            id: this.serial++,
            name: "Vargheists"
        },
        bloodKnights: {
            id: this.serial++,
            name: "Blood Knights"
        },
        fellBats: {
            id: this.serial++,
            name: "Fell Bats"
        },
        batSwarms: {
            id: this.serial++,
            name: "Bat Swarms"
        },
        blackCoach: {
            id: this.serial++,
            name: "Black Coach"
        },
        castellansOfTheCrimsonKeep: {
            id: this.serial++,
            name: "Castellans of the Crimson Keep"
        },
        courtOfNulahmia: {
            id: this.serial++,
            name: "Court of Nulahmia"
        },
        deathmarch: {
            id: this.serial++,
            name: "Deathmarch"
        },
        lordsOfSacrament: {
            id: this.serial++,
            name: "Lords of Sacrament"
        },
        nightfallPack: {
            id: this.serial++,
            name: "Nightfall Pack"
        },
        theFirstCohort: {
            id: this.serial++,
            name: "The First Cohort"
        },
        knightOfShrouds: {
            id: this.serial++,
            name: "Knight of Shrouds"
        },
        mourngul: {
            id: this.serial++,
            name: "Mourngul"
        },
        tombKingInRoyalChariot: {
            id: this.serial++,
            name: "Tomb King in Royal Chariot"
        },
        tombQueen: {
            id: this.serial++,
            name: "Tomb Queen"
        },
        tombKing: {
            id: this.serial++,
            name: "Tomb King"
        },
        tombKingOnExaltedChariot: {
            id: this.serial++,
            name: "Tomb King on Exalted Chariot"
        },
        scarabPrince: {
            id: this.serial++,
            name: "Scarab Prince"
        },
        tombHerald: {
            id: this.serial++,
            name: "Tomb Herald"
        },
        lichePriest: {
            id: this.serial++,
            name: "Liche Priest"
        },
        casketOfSouls: {
            id: this.serial++,
            name: "Casket Of Souls"
        },
        necrotect: {
            id: this.serial++,
            name: "Necrotect"
        },
        royalWarsphinx: {
            id: this.serial++,
            name: "Royal Warsphinx"
        },
        skeletalLegionnaires: {
            id: this.serial++,
            name: "Skeletal Legionnaires"
        },
        skeletonArchers: {
            id: this.serial++,
            name: "Skeleton Archers"
        },
        skeletonHorsemen: {
            id: this.serial++,
            name: "Skeleton Horsemen"
        },
        skeletonHorseArchers: {
            id: this.serial++,
            name: "Skeleton Horse Archers"
        },
        skeletonChariots: {
            id: this.serial++,
            name: "Skeleton Chariots"
        },
        tombGuard: {
            id: this.serial++,
            name: "Tomb Guard"
        },
        tombScorpions: {
            id: this.serial++,
            name: "Tomb Scorpions"
        },
        necropolisKnights: {
            id: this.serial++,
            name: "Necropolis Knights"
        },
        ushabti: {
            id: this.serial++,
            name: "Ushabti"
        },
        sepulchralStalkers: {
            id: this.serial++,
            name: "Sepulchral Stalkers"
        },
        carrion: {
            id: this.serial++,
            name: "Carrion"
        },
        tombSwarm: {
            id: this.serial++,
            name: "Tomb Swarm"
        },
        boneGiant: {
            id: this.serial++,
            name: "Bone Giant"
        },
        warsphinx: {
            id: this.serial++,
            name: "Warsphinx"
        },
        necrosphinx: {
            id: this.serial++,
            name: "Necrosphinx"
        },
        screamingSkullCatapult: {
            id: this.serial++,
            name: "Screaming Skull Catapult"
        },
        vampireLordOnAbyssalTerror: {
            id: this.serial++,
            name: "Vampire Lord On Abyssal Terror"
        },
        necromancerOnNightmare: {
            id: this.serial++,
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
            name: "Daemons Of Chaos"
        },
        KHORNEDAEMONS: {
            id: "KHORNEDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons Of Khorne"
        },
        NURGLEDAEMONS: {
            id: "NURGLEDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons Of Nurgle"
        },
        TZEENTCHDAEMONS: {
            id: "TZEENTCHDAEMONS",
            grandAlliance: GrandAlliance.chaos,
            name: "Daemons Of Tzeentch"
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
            name: "Slaves To Darkness"
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
    
    units = {
        centigorWarhoof: {
            id: this.serial++,
            model: this.models.centigorWarhoof,
            factions: [this.factions.BEASTMEN],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        beastlordOnChariot: {
            id: this.serial++,
            model: this.models.beastlordOnChariot,
            factions: [this.factions.BEASTMEN],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        wargorStandardBearer: {
            id: this.serial++,
            model: this.models.wargorStandardBearer,
            factions: [this.factions.BEASTMEN],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        beastlord: {
            id: this.serial++,
            model: this.models.beastlord,
            factions: [this.factions.BRAYHERD],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-beastlord-en.pdf",
            type: "hero",
            subType: "Brayherd",
            isLeader: () => true,
        },
        bestigors: {
            id: this.serial++,
            model: this.models.bestigors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            maxSize: 30,
            points: 140,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bestigors-en.pdf",
            type: "unit",
            subType: "Brayherd - Brayherd Battleline",
            isBatteline: () => true,
        },
        greatBrayShaman: {
            id: this.serial++,
            model: this.models.greatBrayShaman,
            factions: [this.factions.BRAYHERD],
            size: 1,
            maxSize: undefined,
            points: 90,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-great-bray-shaman-en.pdf",
            type: "hero",
            subType: "Brayherd",
            isLeader: () => true,
        },
        tuskgorChariots: {
            id: this.serial++,
            model: this.models.tuskgorChariots,
            factions: [this.factions.BRAYHERD],
            size: 1,
            maxSize: 4,
            points: 60,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tuskgor-chariot-en.pdf",
            type: "unit",
            subType: "Brayherd",
        },
        gors: {
            id: this.serial++,
            model: this.models.gors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            maxSize: 30,
            points: 80,
            maxPoints: 210,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gors-en.pdf",
            type: "unit",
            subType: "Brayherd - Battleline",
            isBatteline: () => true,
        },
        ungors: {
            id: this.serial++,
            model: this.models.ungors,
            factions: [this.factions.BRAYHERD],
            size: 10,
            maxSize: 40,
            points: 60,
            maxPoints: 200,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ungors-en.pdf",
            type: "unit",
            subType: "Brayherd - Battleline",
            isBatteline: () => true,
        },
        ungorRaiders: {
            id: this.serial++,
            model: this.models.ungorRaiders,
            factions: [this.factions.BRAYHERD],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: undefined,
            type: "unit",
            subType: "Brayherd - Brayherd Battleline",
            isBatteline: () => true,
        },
        bloodThrone: {
            id: this.serial++,
            model: this.models.bloodThrone,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodthrone-en.pdf",
            type: "hero",
            subType: "Khorne Daemon",
            isLeader: () => true,
        },
        bloodmasterHeraldOfKhorne: {
            id: this.serial++,
            model: this.models.bloodmasterHeraldOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodmaster-en.pdf",
            type: "hero",
            subType: "Khorne Daemon",
            isLeader: () => true,
        },
        karanak: {
            id: this.serial++,
            model: this.models.karanak,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-karanak-en.pdf",
            type: "hero",
            subType: "Khorne Daemon",
            isLeader: () => true,
        },
        skullmasterHeraldOfKhorne: {
            id: this.serial++,
            model: this.models.skullmasterHeraldOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullmaster-en.pdf",
            type: "hero",
            subType: "Khorne Daemon",
            isLeader: () => true,
        },
        skulltaker: {
            id: this.serial++,
            model: this.models.skulltaker,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skulltaker-en.pdf",
            type: "hero",
            subType: "Khorne Daemon",
            isLeader: () => true,
        },
        skullCannons: {
            id: this.serial++,
            model: this.models.skullCannons,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-skullcannon-en.pdf",
            type: "unit",
            subType: "Khorne Daemon - Artillery",
            isArtillery: () => true,
        },
        bloodletters: {
            id: this.serial++,
            model: this.models.bloodletters,
            factions: [this.factions.KHORNEDAEMONS],
            size: 10,
            maxSize: 30,
            points: 110,
            maxPoints: 270,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodletters-en.pdf",
            type: "unit",
            subType: "Khorne Daemon - Battleline",
            isBatteline: () => true,
        },
        bloodthirsterOfInsensateRage: {
            id: this.serial++,
            model: this.models.bloodthirsterOfInsensateRage,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodthirsterOfUnfetteredFury: {
            id: this.serial++,
            model: this.models.bloodthirsterOfUnfetteredFury,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-khorne-bloodthirster-en.pdf",
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        skarbrand: {
            id: this.serial++,
            model: this.models.skarbrand,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 400,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scarbrand-en.pdf",
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        wrathOfKhorneBloodthirster: {
            id: this.serial++,
            model: this.models.wrathOfKhorneBloodthirster,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 330,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        fleshHounds: {
            id: this.serial++,
            model: this.models.fleshHounds,
            factions: [this.factions.KHORNEDAEMONS],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-flesh-hounds-en.pdf",
            type: "unit",
            subType: "Khorne Daemon - Khorne Daemon Battleline (Karanak General)",
            isBatteline: () => true,
        },
        bloodcrushers: {
            id: this.serial++,
            model: this.models.bloodcrushers,
            factions: [this.factions.KHORNEDAEMONS],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-khorne-bloodcrushers-en.pdf",
            type: "unit",
            subType: "Khorne Daemon - Khorne Daemon Battleline (Skullmaster Herald of Khorne General)",
            isBatteline: () => true,
        },
        screamersOfTzeentch: {
            id: this.serial++,
            model: this.models.screamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-screamers-of-tzeentch-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemon",
        },
        pinkHorrorsOfTzeentch: {
            id: this.serial++,
            model: this.models.pinkHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 300,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-pink-horrors-of-tzeentch-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemon - Battleline",
            isBatteline: () => true,
        },
        burningChariotsOfTzeentch: {
            id: this.serial++,
            model: this.models.burningChariotsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: 3,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-burning-chariot-of-tzeentch-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemon - Tzeentch Daemon Battleline (Herald on Chariot General)",
            isBatteline: () => true,
        },
        heraldOfTzeentch: {
            id: this.serial++,
            model: this.models.heraldOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            isLeader: () => true,
        },
        heraldOfTzeentchOnBurningChariot: {
            id: this.serial++,
            model: this.models.heraldOfTzeentchOnBurningChariot,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-tzeentch-burning-chariot-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            isLeader: () => true,
        },
        heraldOfTzeentchOnDisc: {
            id: this.serial++,
            model: this.models.heraldOfTzeentchOnDisc,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-tzeentch-disc-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard",
            isLeader: () => true,
        },
        theBlueScribes: {
            id: this.serial++,
            model: this.models.theBlueScribes,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-blue-scribes-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique ",
            isLeader: () => true,
        },
        theChangeling: {
            id: this.serial++,
            model: this.models.theChangeling,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-changeling-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique ",
            isLeader: () => true,
        },
        blueHorrorsOfTzeentch: {
            id: this.serial++,
            model: this.models.blueHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            maxSize: 30,
            points: 50,
            maxPoints: 120,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-blue-horrors-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemons",
        },
        brimstoneHorrorsOfTzeentch: {
            id: this.serial++,
            model: this.models.brimstoneHorrorsOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 10,
            maxSize: 30,
            points: 40,
            maxPoints: 100,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-brimstone-horrors-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemons",
        },
        skaaracTheBloodborn: {
            id: this.serial++,
            model: this.models.skaaracTheBloodborn,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 500,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        khorgoraths: {
            id: this.serial++,
            model: this.models.khorgoraths,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: 6,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Khorne Bloodbound",
        },
        aspiringDeathbringer: {
            id: this.serial++,
            model: this.models.aspiringDeathbringer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-aspiringdeathbringer-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        aspiringDeathbringerWithGoreaxeAndSkullhammer: {
            id: this.serial++,
            model: this.models.aspiringDeathbringerWithGoreaxeAndSkullhammer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-aspiringdeathbringer-goreaxe-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        bloodsecrator: {
            id: this.serial++,
            model: this.models.bloodsecrator,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads/Korghos_Bloodsecrator_CB_Web%20-%20cropped.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        bloodstoker: {
            id: this.serial++,
            model: this.models.bloodstoker,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        exaltedDeathbringer: {
            id: this.serial++,
            model: this.models.exaltedDeathbringer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalteddeathbringer-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        exaltedDeathbringerWithImpalingSpear: {
            id: this.serial++,
            model: this.models.exaltedDeathbringerWithImpalingSpear,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalteddeathbringer-impaling-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        lordOfKhorneOnJuggernaut: {
            id: this.serial++,
            model: this.models.lordOfKhorneOnJuggernaut,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lordjuggernaught-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        mightyLordOfKhorne: {
            id: this.serial++,
            model: this.models.mightyLordOfKhorne,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        skullgrinder: {
            id: this.serial++,
            model: this.models.skullgrinder,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullgrinder-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        slaughterpriest: {
            id: this.serial++,
            model: this.models.slaughterpriest,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterpriest-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        slaughterpriestWithHackbladeAndWrathhammer: {
            id: this.serial++,
            model: this.models.slaughterpriestWithHackbladeAndWrathhammer,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterpriest-hackblade-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal",
            isLeader: () => true,
        },
        bloodWarriors: {
            id: this.serial++,
            model: this.models.bloodWarriors,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 520,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodwarriors-en.pdf",
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Battleline",
            isBatteline: () => true,
        },
        bloodreavers: {
            id: this.serial++,
            model: this.models.bloodreavers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 10,
            maxSize: 40,
            points: 70,
            maxPoints: 240,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodreavers-en.pdf",
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Battleline",
            isBatteline: () => true,
        },
        mightySkullcrushers: {
            id: this.serial++,
            model: this.models.mightySkullcrushers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullcrushers-en.pdf",
            type: "unit",
            subType: "Khorne Bloodbound Mortal - Khorne Bloodbound Battleline (Lord of Khorne on Juggernaut General)",
            isBatteline: () => true,
        },
        scylaAnfingrimm: {
            id: this.serial++,
            model: this.models.scylaAnfingrimm,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scylaanfingrimm-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            isLeader: () => true,
        },
        skarrBloodwrath: {
            id: this.serial++,
            model: this.models.skarrBloodwrath,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skarrbloodwrath-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            isLeader: () => true,
        },
        valkiaTheBloody: {
            id: this.serial++,
            model: this.models.valkiaTheBloody,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-valkiathebloody-en.pdf",
            type: "hero",
            subType: "Khorne Bloodbound Mortal - Unique ",
            isLeader: () => true,
        },
        skullreapers: {
            id: this.serial++,
            model: this.models.skullreapers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            maxSize: 20,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skullreapers-en.pdf",
            type: "unit",
            subType: "Khorne Mortal Bloodbound",
        },
        wrathmongers: {
            id: this.serial++,
            model: this.models.wrathmongers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            maxSize: 20,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-wrathmongers-en.pdf",
            type: "unit",
            subType: "Khorne Mortal Bloodbound",
        },
        jabberslythe: {
            id: this.serial++,
            model: this.models.jabberslythe,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-jabberslythe-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        centigors: {
            id: this.serial++,
            model: this.models.centigors,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 5,
            maxSize: 20,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-centigors-en.pdf",
            type: "unit",
            subType: undefined,
        },
        chaosWarhounds: {
            id: this.serial++,
            model: this.models.chaosWarhounds,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 10,
            maxSize: 30,
            points: 80,
            maxPoints: 210,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-warhounds-en.pdf",
            type: "unit",
            subType: undefined,
        },
        harpies: {
            id: this.serial++,
            model: this.models.harpies,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 5,
            maxSize: 20,
            points: 70,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        razorgors: {
            id: this.serial++,
            model: this.models.razorgors,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: 6,
            points: 60,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-razorgor-en.pdf",
            type: "unit",
            subType: undefined,
        },
        tzaangorEnlightened: {
            id: this.serial++,
            model: this.models.tzaangorEnlightened,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            maxSize: 9,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Tzeentch Arcanites",
        },
        tzaangors: {
            id: this.serial++,
            model: this.models.tzaangors,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 450,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangors-en.pdf",
            type: "unit",
            subType: "Tzeentch Arcanites - Battleline",
            isBatteline: () => true,
        },
        tzaangorEnlightenedOnDisc: {
            id: this.serial++,
            model: this.models.tzaangorEnlightenedOnDisc,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-enlightened-en.pdf",
            type: "unit",
            subType: "Tzeentch Arcanites Daemon",
        },
        tzaangorSkyfires: {
            id: this.serial++,
            model: this.models.tzaangorSkyfires,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 3,
            maxSize: 9,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-skyfires-en.pdf",
            type: "unit",
            subType: "Tzeentch Arcanites Daemon",
        },
        tzaangorShaman: {
            id: this.serial++,
            model: this.models.tzaangorShaman,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tzaangor-shaman-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Daemon Wizard",
            isLeader: () => true,
        },
        kairicAcolytes: {
            id: this.serial++,
            model: this.models.kairicAcolytes,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kairic-acolytes-en.pdf",
            type: "unit",
            subType: "Tzeentch Arcanites Mortal - Battleline",
            isBatteline: () => true,
        },
        fatemaster: {
            id: this.serial++,
            model: this.models.fatemaster,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fatemaster-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Daemon",
            isLeader: () => true,
        },
        gauntSummoner: {
            id: this.serial++,
            model: this.models.gauntSummoner,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gaunt-summoner-2016-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Daemon Wizard",
            isLeader: () => true,
        },
        curselingEyeOfTzeentch: {
            id: this.serial++,
            model: this.models.curselingEyeOfTzeentch,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cursling-eye-of-tzeentch-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            isLeader: () => true,
        },
        magister: {
            id: this.serial++,
            model: this.models.magister,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-arcanites-magister-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            isLeader: () => true,
        },
        ogroidThaumaturge: {
            id: this.serial++,
            model: this.models.ogroidThaumaturge,
            factions: [this.factions.TZEENTCHARCHANITES],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogroid-thaumaturge-en.pdf",
            type: "hero",
            subType: "Tzeentch Arcanites Mortal Wizard",
            isLeader: () => true,
        },
        doombull: {
            id: this.serial++,
            model: this.models.doombull,
            factions: [this.factions.WARHERD],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-doombull-en.pdf",
            type: "hero",
            subType: "Warherd",
            isLeader: () => true,
        },
        cygor: {
            id: this.serial++,
            model: this.models.cygor,
            factions: [this.factions.WARHERD],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cygor-en.pdf",
            type: "monster",
            subType: "Warherd - Behemoth",
            isBehemot: () => true,
        },
        ghorgon: {
            id: this.serial++,
            model: this.models.ghorgon,
            factions: [this.factions.WARHERD],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ghorgon-en.pdf",
            type: "monster",
            subType: "Warherd - Behemoth",
            isBehemot: () => true,
        },
        bullgors: {
            id: this.serial++,
            model: this.models.bullgors,
            factions: [this.factions.WARHERD],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bullgors-en.pdf",
            type: "unit",
            subType: "Warherd - Warherd Battleline",
            isBatteline: () => true,
        },
        hellcannon: {
            id: this.serial++,
            model: this.models.hellcannon,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        daemonettesOfSlaanesh: {
            id: this.serial++,
            model: this.models.daemonettesOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: 270,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-daemonettes-of-slaanesh-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        mutalithVortexBeast: {
            id: this.serial++,
            model: this.models.mutalithVortexBeast,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-mutalith-vortex-beast-en.pdf",
            type: "monster",
            subType: "Tzeentch - Behemoth",
            isBehemot: () => true,
        },
        slaughterbrute: {
            id: this.serial++,
            model: this.models.slaughterbrute,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slaughterbrute-en.pdf",
            type: "monster",
            subType: "Khorne - Behemoth",
            isBehemot: () => true,
        },
        furies: {
            id: this.serial++,
            model: this.models.furies,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 5,
            maxSize: 30,
            points: 60,
            maxPoints: 320,
            warcroll: undefined,
            type: "unit",
            subType: "Chaos Daemon",
        },
        daemonPrince: {
            id: this.serial++,
            model: this.models.daemonPrince,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            type: "hero",
            subType: "Chaos Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        soulGrinder: {
            id: this.serial++,
            model: this.models.soulGrinder,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-soul-grinder-en.pdf",
            type: "monster",
            subType: "Chaos Daemon - Behemoth",
            isBehemot: () => true,
        },
        beLakorChaosDaemonPrince: {
            id: this.serial++,
            model: this.models.beLakorChaosDaemonPrince,
            factions: [this.factions.DAEMONSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-belakor-en.pdf",
            type: "hero",
            subType: "Chaos Daemon - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        fiendsOfSlaanesh: {
            id: this.serial++,
            model: this.models.fiendsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 3,
            maxSize: 9,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fiend-of-slaanesh-en.pdf",
            type: "unit",
            subType: "Slaanesh",
        },
        heraldOfSlaanesh: {
            id: this.serial++,
            model: this.models.heraldOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-herald-of-slaanesh-en.pdf",
            type: "hero",
            subType: "Slaanesh",
            isLeader: () => true,
        },
        heraldOfSlaaneshOnExaltedSeekerChariot: {
            id: this.serial++,
            model: this.models.heraldOfSlaaneshOnExaltedSeekerChariot,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Slaanesh",
            isLeader: () => true,
        },
        heraldOfSlaaneshOnSeekerChariot: {
            id: this.serial++,
            model: this.models.heraldOfSlaaneshOnSeekerChariot,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Slaanesh",
            isLeader: () => true,
        },
        seekerChariotsOfSlaanesh: {
            id: this.serial++,
            model: this.models.seekerChariotsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-seeker-chariot-of-slaanesh-en.pdf",
            type: "unit",
            subType: "Slaanesh - Slaanesh Battleline (Herald of Slaanesh on Exalted Seeker Chariot General)",
            isBatteline: () => true,
        },
        seekersOfSlaanesh: {
            id: this.serial++,
            model: this.models.seekersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 5,
            maxSize: 20,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-seekers-of-slaanesh-en.pdf",
            type: "unit",
            subType: "Slaanesh",
        },
        keeperOfSecrets: {
            id: this.serial++,
            model: this.models.keeperOfSecrets,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-keeper-of-secrets-en.pdf",
            type: "hero",
            subType: "Slaanesh - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        theMasqueOfSlaanesh: {
            id: this.serial++,
            model: this.models.theMasqueOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-the-masque-of-slaanesh-en.pdf",
            type: "hero",
            subType: "Slaanesh - Unique ",
            isLeader: () => true,
        },
        beastsOfNurgle: {
            id: this.serial++,
            model: this.models.beastsOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: 6,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Beasts-of-nurgle.pdf",
            type: "unit",
            subType: "Nurgle Daemon",
        },
        poxbringerHeraldOfNurgle: {
            id: this.serial++,
            model: this.models.poxbringerHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Daemon Wizard",
            isLeader: () => true,
        },
        spoilpoxScrivenerHeraldOfNurgle: {
            id: this.serial++,
            model: this.models.spoilpoxScrivenerHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Daemon",
            isLeader: () => true,
        },
        sloppityBilepiperHeraldOfNurgle: {
            id: this.serial++,
            model: this.models.sloppityBilepiperHeraldOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Sloppity-bilepiper-herald-of-nurgle.pdf",
            type: "hero",
            subType: "Nurgle Daemon",
            isLeader: () => true,
        },
        nurglings: {
            id: this.serial++,
            model: this.models.nurglings,
            factions: [this.factions.NURGLEDAEMONS],
            size: 3,
            maxSize: 12,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Nurgle Daemon",
        },
        plagueDrones: {
            id: this.serial++,
            model: this.models.plagueDrones,
            factions: [this.factions.NURGLEDAEMONS],
            size: 3,
            maxSize: 12,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Nurgle Daemon",
        },
        plaguebearers: {
            id: this.serial++,
            model: this.models.plaguebearers,
            factions: [this.factions.NURGLEDAEMONS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 320,
            warcroll: undefined,
            type: "unit",
            subType: "Nurgle Daemon - Battleline",
            isBatteline: () => true,
        },
        daemonPrinceOfNurgle: {
            id: this.serial++,
            model: this.models.daemonPrinceOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            type: "hero",
            subType: "Nurgle Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        greatUncleanOne: {
            id: this.serial++,
            model: this.models.greatUncleanOne,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Daemon Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        rotigus: {
            id: this.serial++,
            model: this.models.rotigus,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Rotigus.pdf",
            type: "hero",
            subType: "Nurgle Daemon Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        epidemiusTallymanOfNurgle: {
            id: this.serial++,
            model: this.models.epidemiusTallymanOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-epidemius-en.pdf",
            type: "hero",
            subType: "Nurgle Daemon - Unique ",
            isLeader: () => true,
        },
        daemonPrinceOfSlaanesh: {
            id: this.serial++,
            model: this.models.daemonPrinceOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            type: "hero",
            subType: "Slaanesh Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedFlamersOfTzeentch: {
            id: this.serial++,
            model: this.models.exaltedFlamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalted-flamer-of-tzeentch-en.pdf",
            type: "unit",
            subType: "Tzeentch Daemon",
        },
        flamersOfTzeentch: {
            id: this.serial++,
            model: this.models.flamersOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Tzeentch Daemon",
        },
        daemonPrinceOfTzeentch: {
            id: this.serial++,
            model: this.models.daemonPrinceOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        kairosFateweaver: {
            id: this.serial++,
            model: this.models.kairosFateweaver,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kairos-fateweaver-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        festusTheLeechlord: {
            id: this.serial++,
            model: this.models.festusTheLeechlord,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-festus-the-leechlord-en.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique ",
            isLeader: () => true,
        },
        gutrotSpume: {
            id: this.serial++,
            model: this.models.gutrotSpume,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-gutrot-spume-en.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique ",
            isLeader: () => true,
        },
        theGlottkin: {
            id: this.serial++,
            model: this.models.theGlottkin,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 420,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-theglottkin-en.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedSeekerChariotsOfSlaanesh: {
            id: this.serial++,
            model: this.models.exaltedSeekerChariotsOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: 3,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-exalted-seeker-chariot-en.pdf",
            type: "unit",
            subType: undefined,
        },
        lordOfPlagues: {
            id: this.serial++,
            model: this.models.lordOfPlagues,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-of-plagues-en.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal",
            isLeader: () => true,
        },
        lordOfBlights: {
            id: this.serial++,
            model: this.models.lordOfBlights,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Lord-of-blights.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal",
            isLeader: () => true,
        },
        lordOfChange: {
            id: this.serial++,
            model: this.models.lordOfChange,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-of-change-en.pdf",
            type: "hero",
            subType: "Tzeentch Daemon Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        reaperBoltThrower: {
            id: this.serial++,
            model: this.models.reaperBoltThrower,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        blackGuard: {
            id: this.serial++,
            model: this.models.blackGuard,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            maxSize: 30,
            points: 160,
            maxPoints: 430,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-guard-en.pdf",
            type: "unit",
            subType: "Darkling Covens - Darkling Covens Battleline",
            isBatteline: () => true,
        },
        executioners: {
            id: this.serial++,
            model: this.models.executioners,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 480,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-executioners-en.pdf",
            type: "unit",
            subType: "Darkling Covens - Darkling Covens Battleline",
            isBatteline: () => true,
        },
        sorceress: {
            id: this.serial++,
            model: this.models.sorceress,
            factions: [this.factions.DARKLINGCOVENS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sorceress-en.pdf",
            type: "hero",
            subType: "Darkling Covens",
            isLeader: () => true,
        },
        bleakswords: {
            id: this.serial++,
            model: this.models.bleakswords,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bleakswords-en.pdf",
            type: "unit",
            subType: "Darkling Covens - Battleline",
            isBatteline: () => true,
        },
        darkshards: {
            id: this.serial++,
            model: this.models.darkshards,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-darkshards-en.pdf",
            type: "unit",
            subType: "Darkling Covens - Battleline",
            isBatteline: () => true,
        },
        dreadspears: {
            id: this.serial++,
            model: this.models.dreadspears,
            factions: [this.factions.DARKLINGCOVENS],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dreadspears-en.pdf",
            type: "unit",
            subType: "Darkling Covens - Battleline",
            isBatteline: () => true,
        },
        sorceressOnBlackDragon: {
            id: this.serial++,
            model: this.models.sorceressOnBlackDragon,
            factions: [this.factions.DARKLINGCOVENS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sorceress-black-dragon-en.pdf",
            type: "hero",
            subType: "Darkling Covens - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodwrackMedusae: {
            id: this.serial++,
            model: this.models.bloodwrackMedusae,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Daughters of Khaine",
        },
        deathHag: {
            id: this.serial++,
            model: this.models.deathHag,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Daughters of Khaine",
            isLeader: () => true,
        },
        doomfireWarlocks: {
            id: this.serial++,
            model: this.models.doomfireWarlocks,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-doomfire-warlocks-en.pdf",
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            isBatteline: () => true,
        },
        sistersOfSlaughter: {
            id: this.serial++,
            model: this.models.sistersOfSlaughter,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            maxSize: 30,
            points: 140,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sisters-slaughter-en.pdf",
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            isBatteline: () => true,
        },
        bloodwrackShrine: {
            id: this.serial++,
            model: this.models.bloodwrackShrine,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodwrack-shrine-en.pdf",
            type: "unit",
            subType: "Daughters of Khaine - Behemoth",
            isBehemot: () => true,
        },
        cauldronOfBlood: {
            id: this.serial++,
            model: this.models.cauldronOfBlood,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-caludron-blood-en.pdf",
            type: "hero",
            subType: "Daughters of Khaine - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        witchAelves: {
            id: this.serial++,
            model: this.models.witchAelves,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: 270,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-witch-aelves-en.pdf",
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            isBatteline: () => true,
        },
        drakespawnChariots: {
            id: this.serial++,
            model: this.models.drakespawnChariots,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            maxSize: 3,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-drakespawn-chariots-en.pdf",
            type: "unit",
            subType: "Order Serpentis - Order Serpentis Battleline",
            isBatteline: () => true,
        },
        warHydra: {
            id: this.serial++,
            model: this.models.warHydra,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-war-hydra-en.pdf",
            type: "monster",
            subType: "Order Serpentis  - Behemoth",
            isBehemot: () => true,
        },
        dreadlordOnBlackDragon: {
            id: this.serial++,
            model: this.models.dreadlordOnBlackDragon,
            factions: [this.factions.ORDERSERPENTIS],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Order Serpentis - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        drakespawnKnights: {
            id: this.serial++,
            model: this.models.drakespawnKnights,
            factions: [this.factions.ORDERSERPENTIS],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-drakespawn-knights-en.pdf",
            type: "unit",
            subType: "Order Serpentis - Order Serpentis Battleline",
            isBatteline: () => true,
        },
        blackArkFleetmaster: {
            id: this.serial++,
            model: this.models.blackArkFleetmaster,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            maxSize: undefined,
            points: 40,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-ark-fleetmaster-en.pdf",
            type: "hero",
            subType: "Scourge Privateers",
            isLeader: () => true,
        },
        scourgerunnerChariots: {
            id: this.serial++,
            model: this.models.scourgerunnerChariots,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            maxSize: 3,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-scourgerunner-chariot-en.pdf",
            type: "unit",
            subType: "Scourge Privateers - Scourge Privateers Battleline",
            isBatteline: () => true,
        },
        kharibdyss: {
            id: this.serial++,
            model: this.models.kharibdyss,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 1,
            maxSize: NaN,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kharibdyss-en.pdf",
            type: "monster",
            subType: "Scourge Privateers - Behemoth",
            isBehemot: () => true,
        },
        blackArkCorsairs: {
            id: this.serial++,
            model: this.models.blackArkCorsairs,
            factions: [this.factions.SCOURGEPRIVATEERS],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: 260,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-ark-corsairs-en.pdf",
            type: "unit",
            subType: "Scourge Privateers - Scourge Privateers Battleline",
            isBatteline: () => true,
        },
        assassin: {
            id: this.serial++,
            model: this.models.assassin,
            factions: [this.factions.SHADOWBLADES],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-shadowblade-assassin-en.pdf",
            type: "hero",
            subType: "Shadowblades",
            isLeader: () => true,
        },
        darkRiders: {
            id: this.serial++,
            model: this.models.darkRiders,
            factions: [this.factions.SHADOWBLADES],
            size: 5,
            maxSize: 20,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dark-riders-en.pdf",
            type: "unit",
            subType: "Shadowblades - Shadowblades Battleline",
            isBatteline: () => true,
        },
        sorceressOnDarkPegasus: {
            id: this.serial++,
            model: this.models.sorceressOnDarkPegasus,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        beastmasterOnManticore: {
            id: this.serial++,
            model: this.models.beastmasterOnManticore,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        dreadlord: {
            id: this.serial++,
            model: this.models.dreadlord,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        dreadlordOnDrakespawn: {
            id: this.serial++,
            model: this.models.dreadlordOnDrakespawn,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        masterWithBattleStandard: {
            id: this.serial++,
            model: this.models.masterWithBattleStandard,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        mistweaverSaih: {
            id: this.serial++,
            model: this.models.mistweaverSaih,
            factions: [this.factions.AELVES],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-mistweaver-saih-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        shades: {
            id: this.serial++,
            model: this.models.shades,
            factions: [this.factions.EXILES],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        sorceressOnDrakespawn: {
            id: this.serial++,
            model: this.models.sorceressOnDrakespawn,
            factions: [this.factions.EXILES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        tenebraelShard: {
            id: this.serial++,
            model: this.models.tenebraelShard,
            factions: [this.factions.AELVES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-tenebrael-shard-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        corpseCart: {
            id: this.serial++,
            model: this.models.corpseCart,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-corpse-cart-en.pdf",
            type: "unit",
            subType: "Deadwalkers",
        },
        direWolves: {
            id: this.serial++,
            model: this.models.direWolves,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            maxSize: 30,
            points: 60,
            maxPoints: 320,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dire-wolves-en.pdf",
            type: "unit",
            subType: "Deadwalkers Summonable - Battleline",
            isBatteline: () => true,
        },
        zombies: {
            id: this.serial++,
            model: this.models.zombies,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 10,
            maxSize: 60,
            points: 60,
            maxPoints: 320,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Zombies.pdf",
            type: "unit",
            subType: "Deadwalkers Summonable - Battleline",
            isBatteline: () => true,
        },
        morghastArchai: {
            id: this.serial++,
            model: this.models.morghastArchai,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 2,
            maxSize: 6,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Morghast%20Archai.pdf",
            type: "unit",
            subType: "Deathlords - Grand Host of Nagash Battleline (Nagash General)",
            isBatteline: () => true,
        },
        morghastHarbingers: {
            id: this.serial++,
            model: this.models.morghastHarbingers,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 2,
            maxSize: 6,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Morghast%20Harbingers.pdf",
            type: "unit",
            subType: "Deathlords - Grand Host of Nagash Battleline (Nagash General)",
            isBatteline: () => true,
        },
        arkhanTheBlackMortarchOfSacrament: {
            id: this.serial++,
            model: this.models.arkhanTheBlackMortarchOfSacrament,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-arkhan-en.pdf",
            type: "hero",
            subType: "Deathlords Mortarch Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        mannfredMortarchOfNight: {
            id: this.serial++,
            model: this.models.mannfredMortarchOfNight,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 420,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-mannfred-en.pdf",
            type: "hero",
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        nagashSupremeLordOfTheUndead: {
            id: this.serial++,
            model: this.models.nagashSupremeLordOfTheUndead,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 800,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-nagash-en.pdf",
            type: "hero",
            subType: "Deathlords Wizard Priest - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        neferataMortarchOfBlood: {
            id: this.serial++,
            model: this.models.neferataMortarchOfBlood,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 400,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-deathlords-neferata-en.pdf",
            type: "hero",
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        necromancer: {
            id: this.serial++,
            model: this.models.necromancer,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 110,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-necromancer-en.pdf",
            type: "hero",
            subType: "Deathmages Wizard",
            isLeader: () => true,
        },
        mortisEngine: {
            id: this.serial++,
            model: this.models.mortisEngine,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-mortis-engine-en.pdf",
            type: "monster",
            subType: "Deathmages - Behemoth",
            isBehemot: () => true,
        },
        graveGuard: {
            id: this.serial++,
            model: this.models.graveGuard,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            maxSize: 30,
            points: 80,
            maxPoints: 420,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-grave-guard-en.pdf",
            type: "unit",
            subType: "Deathrattle Summonable - Grand Host of Nagash Battleline",
            isBatteline: () => true,
        },
        wightKingWithBalefulTombBlade: {
            id: this.serial++,
            model: this.models.wightKingWithBalefulTombBlade,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Wight%20King%20with%20Baleful%20Tomb%20Blade.pdf",
            type: "hero",
            subType: "Deathrattle",
            isLeader: () => true,
        },
        wightKingWithBlackAxe: {
            id: this.serial++,
            model: this.models.wightKingWithBlackAxe,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-wightking-blackaxe-en.pdf",
            type: "hero",
            subType: "Deathrattle",
            isLeader: () => true,
        },
        skeletonWarriors: {
            id: this.serial++,
            model: this.models.skeletonWarriors,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: 280,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skeleton-warriors-en.pdf",
            type: "unit",
            subType: "Deathrattle Summonable - Battleline",
            isBatteline: () => true,
        },
        blackKnights: {
            id: this.serial++,
            model: this.models.blackKnights,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 5,
            maxSize: 20,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-knights-en.pdf",
            type: "unit",
            subType: "Deathrattle Summonable",
        },
        cryptGhouls: {
            id: this.serial++,
            model: this.models.cryptGhouls,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-ghouls-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        abhorrantGhoulKingOnTerrorgheist: {
            id: this.serial++,
            model: this.models.abhorrantGhoulKingOnTerrorgheist,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 400,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-abhorrant-ghoul-king-terrorgheist-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        abhorrantGhoulKingOnZombieDragon: {
            id: this.serial++,
            model: this.models.abhorrantGhoulKingOnZombieDragon,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-abhorrant-ghoul-king-zombie-dragon-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        terrorgheist: {
            id: this.serial++,
            model: this.models.terrorgheist,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-terrorgheist-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        zombieDragon: {
            id: this.serial++,
            model: this.models.zombieDragon,
            factions: [this.factions.LEGIONSOFNAGASH],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-zombie-dragon-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        cryptHorrors: {
            id: this.serial++,
            model: this.models.cryptHorrors,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-horrors-en.pdf",
            type: "unit",
            subType: "Flesh Eater Courts Battleline (Crypt Haunter Courtier General)",
        },
        cryptFlayers: {
            id: this.serial++,
            model: this.models.cryptFlayers,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-flayers-en.pdf",
            type: "unit",
            subType: "Flesh Eater Courts Battleline (Crypt Infernal Courtier General)",
        },
        abhorrantGhoulKing: {
            id: this.serial++,
            model: this.models.abhorrantGhoulKing,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        cryptGhastCourtier: {
            id: this.serial++,
            model: this.models.cryptGhastCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-ghouls-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        cryptHaunterCourtier: {
            id: this.serial++,
            model: this.models.cryptHaunterCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-haunter-courtier-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        cryptInfernalCourtier: {
            id: this.serial++,
            model: this.models.cryptInfernalCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-crypt-infernal-courtier-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        varghulfCourtier: {
            id: this.serial++,
            model: this.models.varghulfCourtier,
            factions: [this.factions.FLESHEATERCOURTS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-varghulf-courtier-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        batSwarms: {
            id: this.serial++,
            model: this.models.batSwarms,
            factions: [this.factions.SOULBLIGHT],
            size: 2,
            maxSize: 8,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bat-swarm-en.pdf",
            type: "unit",
            subType: "Soulblight Summonable",
        },
        fellBats: {
            id: this.serial++,
            model: this.models.fellBats,
            factions: [this.factions.SOULBLIGHT],
            size: 3,
            maxSize: 12,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fell-bats-en.pdf",
            type: "unit",
            subType: "Soulblight Summonable",
        },
        vampireLord: {
            id: this.serial++,
            model: this.models.vampireLord,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vampire-lord-en.pdf",
            type: "hero",
            subType: "Soulblight Vampire Wizard",
            isLeader: () => true,
        },
        vargheists: {
            id: this.serial++,
            model: this.models.vargheists,
            factions: [this.factions.SOULBLIGHT],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vargheists-en.pdf",
            type: "unit",
            subType: "Soulblight",
        },
        covenThrone: {
            id: this.serial++,
            model: this.models.covenThrone,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-coven-throne-en.pdf",
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodseekerPalanquin: {
            id: this.serial++,
            model: this.models.bloodseekerPalanquin,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Bloodseeker%20Palanquin.pdf",
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        vampireLordOnZombieDragon: {
            id: this.serial++,
            model: this.models.vampireLordOnZombieDragon,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vampire-lord-zombiedragon-en.pdf",
            type: "hero",
            subType: "Soulblight Vampire Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        princeVhordrai: {
            id: this.serial++,
            model: this.models.princeVhordrai,
            factions: [this.factions.SOULBLIGHT],
            size: 1,
            maxSize: undefined,
            points: 480,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG%20Prince%20Vhordrai.pdf",
            type: "hero",
            subType: "Soulblight Vampire Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        bloodKnights: {
            id: this.serial++,
            model: this.models.bloodKnights,
            factions: [this.factions.SOULBLIGHT],
            size: 5,
            maxSize: 15,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-blood-knights-en.pdf",
            type: "unit",
            subType: "Soulblight - Soulblight Battleline",
            isBatteline: () => true,
        },
        blackCoach: {
            id: this.serial++,
            model: this.models.blackCoach,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-black-coach-en.pdf",
            type: "unit",
            subType: "Nighthaunt",
        },
        cairnWraith: {
            id: this.serial++,
            model: this.models.cairnWraith,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-cairn-wraith-en.pdf",
            type: "hero",
            subType: "Nighthaunt",
            isLeader: () => true,
        },
        hexwraiths: {
            id: this.serial++,
            model: this.models.hexwraiths,
            factions: [this.factions.NIGHTHAUNT],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hexwraiths-en.pdf",
            type: "unit",
            subType: "Nighthaunt Summonable - Nighthaunt Battleline",
            isBatteline: () => true,
        },
        tombBanshee: {
            id: this.serial++,
            model: this.models.tombBanshee,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-tomb-banshee-en.pdf",
            type: "hero",
            subType: "Nighthaunt",
            isLeader: () => true,
        },
        spiritHosts: {
            id: this.serial++,
            model: this.models.spiritHosts,
            factions: [this.factions.NIGHTHAUNT],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-nighthaunt-spirithosts-en.pdf",
            type: "unit",
            subType: "Nighthaunt Summonable - Nighthaunt Battleline",
            isBatteline: () => true,
        },
        cogsmith: {
            id: this.serial++,
            model: this.models.cogsmith,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-cogmsith-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        cannon: {
            id: this.serial++,
            model: this.models.cannon,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-cannon-en.pdf",
            type: "warmachine",
            subType: "Artillery",
        },
        duardinBoltThrower: {
            id: this.serial++,
            model: this.models.duardinBoltThrower,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        flameCannon: {
            id: this.serial++,
            model: this.models.flameCannon,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        grudgeThrower: {
            id: this.serial++,
            model: this.models.grudgeThrower,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        organGun: {
            id: this.serial++,
            model: this.models.organGun,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-organ-gun-en.pdf",
            type: "warmachine",
            subType: "Artillery",
        },
        longbeards: {
            id: this.serial++,
            model: this.models.longbeards,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 300,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-longbeards-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        vulkiteBerzerkers: {
            id: this.serial++,
            model: this.models.vulkiteBerzerkers,
            factions: [this.factions.FYRESLAYERS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 330,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-vulkite-berzerkers-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        auricRunefatherOnMagmadroth: {
            id: this.serial++,
            model: this.models.auricRunefatherOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runefather-magmadroth-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        auricRunesmiterOnMagmadroth: {
            id: this.serial++,
            model: this.models.auricRunesmiterOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runesmiter-magmadroth-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        auricRunesonOnMagmadroth: {
            id: this.serial++,
            model: this.models.auricRunesonOnMagmadroth,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runeson-magmadroth-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        hearthguardBerzerkers: {
            id: this.serial++,
            model: this.models.hearthguardBerzerkers,
            factions: [this.factions.FYRESLAYERS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 480,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hearthguard-berzerkers-en.pdf",
            type: "unit",
            subType: "Fyreslayer Battleline (Runefather General)",
        },
        auricHearthguard: {
            id: this.serial++,
            model: this.models.auricHearthguard,
            factions: [this.factions.FYRESLAYERS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 480,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-hearthguard-en.pdf",
            type: "unit",
            subType: "Fyreslayer Battleline (Runemaster General)",
        },
        wardenKingOnThroneOfPower: {
            id: this.serial++,
            model: this.models.wardenKingOnThroneOfPower,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        farRanger: {
            id: this.serial++,
            model: this.models.farRanger,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        apprenticeRunesmith: {
            id: this.serial++,
            model: this.models.apprenticeRunesmith,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 70,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        runelordOnAnvilOfDoom: {
            id: this.serial++,
            model: this.models.runelordOnAnvilOfDoom,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        auricRunefather: {
            id: this.serial++,
            model: this.models.auricRunefather,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        auricRunemaster: {
            id: this.serial++,
            model: this.models.auricRunemaster,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-auric-runemaster-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        auricRunesmiter: {
            id: this.serial++,
            model: this.models.auricRunesmiter,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        auricRuneson: {
            id: this.serial++,
            model: this.models.auricRuneson,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        battlesmith: {
            id: this.serial++,
            model: this.models.battlesmith,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fyreslayers-battlesmith-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        doomseeker: {
            id: this.serial++,
            model: this.models.doomseeker,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-doomseeker-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        grimwrathBerzerker: {
            id: this.serial++,
            model: this.models.grimwrathBerzerker,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-fyreslayers-grimwrath-berzerker-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        gyrobombers: {
            id: this.serial++,
            model: this.models.gyrobombers,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads/Gyrobombers.pdf",
            type: "warmachine",
            subType: undefined,
        },
        gyrocopters: {
            id: this.serial++,
            model: this.models.gyrocopters,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-gyropcopter-en.pdf",
            type: "warmachine",
            subType: undefined,
        },
        hammerers: {
            id: this.serial++,
            model: this.models.hammerers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 480,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-hammerers-en.pdf",
            type: "unit",
            subType: "Dispossessed Battleline",
        },
        ironbreakers: {
            id: this.serial++,
            model: this.models.ironbreakers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 160,
            maxPoints: 400,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads/ironbreakers-en.pdf",
            type: "unit",
            subType: undefined,
        },
        irondrakes: {
            id: this.serial++,
            model: this.models.irondrakes,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads/irondrakes-en.pdf",
            type: "unit",
            subType: undefined,
        },
        miners: {
            id: this.serial++,
            model: this.models.miners,
            factions: [this.factions.DWARFS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        quarrellers: {
            id: this.serial++,
            model: this.models.quarrellers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-quarrellers-en.pdf",
            type: "unit",
            subType: undefined,
        },
        runelord: {
            id: this.serial++,
            model: this.models.runelord,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-runelord-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        slayers: {
            id: this.serial++,
            model: this.models.slayers,
            factions: [this.factions.DWARFS],
            size: 5,
            maxSize: 30,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        thaneWithBattleStandard: {
            id: this.serial++,
            model: this.models.thaneWithBattleStandard,
            factions: [this.factions.DWARFS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        thunderers: {
            id: this.serial++,
            model: this.models.thunderers,
            factions: [this.factions.DISPOSSESSED],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-thunderers-en.pdf",
            type: "unit",
            subType: undefined,
        },
        unforged: {
            id: this.serial++,
            model: this.models.unforged,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-duardin-unforged-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        wardenKing: {
            id: this.serial++,
            model: this.models.wardenKing,
            factions: [this.factions.DISPOSSESSED],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-warden-king-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        greatcannon: {
            id: this.serial++,
            model: this.models.greatcannon,
            factions: [this.factions.EMPIRE],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        helblasterVolleyGun: {
            id: this.serial++,
            model: this.models.helblasterVolleyGun,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-helblaster-volley-gun-en.pdf",
            type: "warmachine",
            subType: "Artillery",
        },
        helstormRocketBattery: {
            id: this.serial++,
            model: this.models.helstormRocketBattery,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-helstorm-rocket-battery-en.pdf",
            type: "warmachine",
            subType: "Artillery",
        },
        fieldMortar: {
            id: this.serial++,
            model: this.models.fieldMortar,
            factions: [this.factions.EMPIRE],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        freeguildArchers: {
            id: this.serial++,
            model: this.models.freeguildArchers,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-archers-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        freeguildCrossbowmen: {
            id: this.serial++,
            model: this.models.freeguildCrossbowmen,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-crossbowmen-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        freeguildGuard: {
            id: this.serial++,
            model: this.models.freeguildGuard,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: 280,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-guard-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        freeguildHandgunners: {
            id: this.serial++,
            model: this.models.freeguildHandgunners,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-handgunners-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        battlemageOnGriffon: {
            id: this.serial++,
            model: this.models.battlemageOnGriffon,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-battlemage-griffon-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        celestialHurricanum: {
            id: this.serial++,
            model: this.models.celestialHurricanum,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestial-hurricanum-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        celestialHurricanumWithCelestialBattlemage: {
            id: this.serial++,
            model: this.models.celestialHurricanumWithCelestialBattlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestial-hurricanum-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        freeguildGeneralOnGriffon: {
            id: this.serial++,
            model: this.models.freeguildGeneralOnGriffon,
            factions: [this.factions.FREEPEOPLES],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-freeguild-general-griffon-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        luminarkOfHysh: {
            id: this.serial++,
            model: this.models.luminarkOfHysh,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-luminark-hysh-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        luminarkOfHyshWithWhiteBattlemage: {
            id: this.serial++,
            model: this.models.luminarkOfHyshWithWhiteBattlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-luminark-hysh-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        steamTank: {
            id: this.serial++,
            model: this.models.steamTank,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-steam-tank-en.pdf",
            type: "warmachine",
            subType: "Behemoth",
        },
        warAltarOfSigmar: {
            id: this.serial++,
            model: this.models.warAltarOfSigmar,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            maxSize: undefined,
            points: 250,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-war-altar-sigmar-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        flagellants: {
            id: this.serial++,
            model: this.models.flagellants,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: 260,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-flagellants-en.pdf",
            type: "unit",
            subType: "Devoted of Sigmar Battleline",
        },
        battlemageOnPegasus: {
            id: this.serial++,
            model: this.models.battlemageOnPegasus,
            factions: [this.factions.EMPIRE],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        battlemage: {
            id: this.serial++,
            model: this.models.battlemage,
            factions: [this.factions.COLLEGIATEARCANE],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-battlemage-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        demigryphKnights: {
            id: this.serial++,
            model: this.models.demigryphKnights,
            factions: [this.factions.FREEPEOPLES],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-demigryph-knights-en.pdf",
            type: "unit",
            subType: "Free Peoples Battleline",
        },
        knightsOfOrder: {
            id: this.serial++,
            model: this.models.knightsOfOrder,
            factions: [this.factions.EMPIRE],
            size: 5,
            maxSize: 30,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        excelsiorWarpriest: {
            id: this.serial++,
            model: this.models.excelsiorWarpriest,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        freeguildGeneral: {
            id: this.serial++,
            model: this.models.freeguildGeneral,
            factions: [this.factions.FREEPEOPLES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        freeguildGreatswords: {
            id: this.serial++,
            model: this.models.freeguildGreatswords,
            factions: [this.factions.FREEPEOPLES],
            size: 10,
            maxSize: 30,
            points: 150,
            maxPoints: 420,
            warcroll: undefined,
            type: "unit",
            subType: "Free Peoples Battleline",
        },
        freeguildOutriders: {
            id: this.serial++,
            model: this.models.freeguildOutriders,
            factions: [this.factions.FREEPEOPLES],
            size: 5,
            maxSize: 20,
            points: 130,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        freeguildPistoliers: {
            id: this.serial++,
            model: this.models.freeguildPistoliers,
            factions: [this.factions.FREEPEOPLES],
            size: 5,
            maxSize: 20,
            points: 130,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        gunmaster: {
            id: this.serial++,
            model: this.models.gunmaster,
            factions: [this.factions.IRONWELDARSONAL],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        huntmarshal: {
            id: this.serial++,
            model: this.models.huntmarshal,
            factions: [this.factions.EMPIRE],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        engineerOnMechanicalSteed: {
            id: this.serial++,
            model: this.models.engineerOnMechanicalSteed,
            factions: [this.factions.EMPIRE],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        warriorPriest: {
            id: this.serial++,
            model: this.models.warriorPriest,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        witchHunter: {
            id: this.serial++,
            model: this.models.witchHunter,
            factions: [this.factions.DEVOTEDOFSIGMAR],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        highbornRepeaterBoltThrower: {
            id: this.serial++,
            model: this.models.highbornRepeaterBoltThrower,
            factions: [this.factions.HIGHELVES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        highbornSpearmen: {
            id: this.serial++,
            model: this.models.highbornSpearmen,
            factions: [this.factions.HIGHELVES],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        highbornSilverHelms: {
            id: this.serial++,
            model: this.models.highbornSilverHelms,
            factions: [this.factions.HIGHELVES],
            size: 5,
            maxSize: 20,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        anointedOfAsuryanOnFlamespyrePhoenix: {
            id: this.serial++,
            model: this.models.anointedOfAsuryanOnFlamespyrePhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        dragonlord: {
            id: this.serial++,
            model: this.models.dragonlord,
            factions: [this.factions.ORDERDRACONIS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        drakeseer: {
            id: this.serial++,
            model: this.models.drakeseer,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        flamespyrePhoenix: {
            id: this.serial++,
            model: this.models.flamespyrePhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: undefined,
        },
        anointedOfAsuryanOnFrostheartPhoenix: {
            id: this.serial++,
            model: this.models.anointedOfAsuryanOnFrostheartPhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth ",
            isLeader: () => true,
        },
        frostheartPhoenix: {
            id: this.serial++,
            model: this.models.frostheartPhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: undefined,
        },
        archmage: {
            id: this.serial++,
            model: this.models.archmage,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eldritch Council",
            isLeader: () => true,
        },
        loremaster: {
            id: this.serial++,
            model: this.models.loremaster,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eldritch Council",
            isLeader: () => true,
        },
        archmageOnDragon: {
            id: this.serial++,
            model: this.models.archmageOnDragon,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eldritch Council - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        swordmasters: {
            id: this.serial++,
            model: this.models.swordmasters,
            factions: [this.factions.ELDRITCHCOUNCIL],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 480,
            warcroll: undefined,
            type: "unit",
            subType: "Eldritch Council Battleline",
        },
        dragonBlades: {
            id: this.serial++,
            model: this.models.dragonBlades,
            factions: [this.factions.ORDERDRACONIS],
            size: 5,
            maxSize: 20,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Order Draconis Battleline",
        },
        phoenixGuard: {
            id: this.serial++,
            model: this.models.phoenixGuard,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 10,
            maxSize: 30,
            points: 160,
            maxPoints: 420,
            warcroll: undefined,
            type: "unit",
            subType: "Phoenix Temple Battleline",
        },
        chariots: {
            id: this.serial++,
            model: this.models.chariots,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Swifthawk Agents",
        },
        skycutters: {
            id: this.serial++,
            model: this.models.skycutters,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            maxSize: 3,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Swifthawk Agents",
        },
        skywarden: {
            id: this.serial++,
            model: this.models.skywarden,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Swifthawk Agents",
            isLeader: () => true,
        },
        reavers: {
            id: this.serial++,
            model: this.models.reavers,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Swifthawk Agents - Battleline",
            isBatteline: () => true,
        },
        highWarden: {
            id: this.serial++,
            model: this.models.highWarden,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Swifthawk Agents - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        shadowWarriors: {
            id: this.serial++,
            model: this.models.shadowWarriors,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 10,
            maxSize: 30,
            points: 200,
            maxPoints: 500,
            warcroll: undefined,
            type: "unit",
            subType: "Swifthawk Agents Battleline",
        },
        spireguard: {
            id: this.serial++,
            model: this.models.spireguard,
            factions: [this.factions.SWIFTHAWKAGENTS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 300,
            warcroll: undefined,
            type: "unit",
            subType: "Swifthawk Agents Battleline",
        },
        anointed: {
            id: this.serial++,
            model: this.models.anointed,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        dragonNoble: {
            id: this.serial++,
            model: this.models.dragonNoble,
            factions: [this.factions.ORDERDRACONIS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        greatEagles: {
            id: this.serial++,
            model: this.models.greatEagles,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: 3,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        highbornArchers: {
            id: this.serial++,
            model: this.models.highbornArchers,
            factions: [this.factions.HIGHELVES],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        seawardenOnFoot: {
            id: this.serial++,
            model: this.models.seawardenOnFoot,
            factions: [this.factions.HIGHELVES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        whiteLionChariots: {
            id: this.serial++,
            model: this.models.whiteLionChariots,
            factions: [this.factions.LIONRANGERS],
            size: 1,
            maxSize: 3,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        whiteLions: {
            id: this.serial++,
            model: this.models.whiteLions,
            factions: [this.factions.LIONRANGERS],
            size: 10,
            maxSize: 30,
            points: 140,
            maxPoints: 360,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        deathshriekerRocketLauncher: {
            id: this.serial++,
            model: this.models.deathshriekerRocketLauncher,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        dreadquakeMortar: {
            id: this.serial++,
            model: this.models.dreadquakeMortar,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        magmaCannon: {
            id: this.serial++,
            model: this.models.magmaCannon,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        bullCentaurRenders: {
            id: this.serial++,
            model: this.models.bullCentaurRenders,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: 640,
            warcroll: undefined,
            type: "unit",
            subType: "Legion of Azgorh Battleline (Shar'tor General)",
        },
        infernalGuardFireglaives: {
            id: this.serial++,
            model: this.models.infernalGuardFireglaives,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Legion of Azgorh Battleline",
        },
        infernalGuardIronsworn: {
            id: this.serial++,
            model: this.models.infernalGuardIronsworn,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: 240,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        chaosSiegeGargant: {
            id: this.serial++,
            model: this.models.chaosSiegeGargant,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        ironDaemonWarEngine: {
            id: this.serial++,
            model: this.models.ironDaemonWarEngine,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Behemoth",
        },
        skullcrackerWarEngine: {
            id: this.serial++,
            model: this.models.skullcrackerWarEngine,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Behemoth",
        },
        sharTorTheExecutioner: {
            id: this.serial++,
            model: this.models.sharTorTheExecutioner,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique ",
            isLeader: () => true,
        },
        drazhoathTheAshen: {
            id: this.serial++,
            model: this.models.drazhoathTheAshen,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique Behemoth",
            isLeader: () => true,
        },
        bullCentaurTaurRuk: {
            id: this.serial++,
            model: this.models.bullCentaurTaurRuk,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        daemonsmith: {
            id: this.serial++,
            model: this.models.daemonsmith,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        infernalGuardBattleStandardBearer: {
            id: this.serial++,
            model: this.models.infernalGuardBattleStandardBearer,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        infernalGuardCastellan: {
            id: this.serial++,
            model: this.models.infernalGuardCastellan,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        kDaaiFireborn: {
            id: this.serial++,
            model: this.models.kDaaiFireborn,
            factions: [this.factions.LEGIONOFAZGORH],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: 560,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        razordons: {
            id: this.serial++,
            model: this.models.razordons,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 4,
            points: 40,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-razordon-en.pdf",
            type: "unit",
            subType: "Artillery",
        },
        salamanders: {
            id: this.serial++,
            model: this.models.salamanders,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 4,
            points: 40,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-salamander-en.pdf",
            type: "unit",
            subType: "Artillery",
        },
        saurusWarriors: {
            id: this.serial++,
            model: this.models.saurusWarriors,
            factions: [this.factions.SERAPHON],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sauruswarriors-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        skinks: {
            id: this.serial++,
            model: this.models.skinks,
            factions: [this.factions.SERAPHON],
            size: 10,
            maxSize: 40,
            points: 60,
            maxPoints: 200,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinks-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        bastiladon: {
            id: this.serial++,
            model: this.models.bastiladon,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bastiladon-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        saurusOldbloodOnCarnosaur: {
            id: this.serial++,
            model: this.models.saurusOldbloodOnCarnosaur,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-oldbloodcarnosaur-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        saurusScarVeteranOnCarnosaur: {
            id: this.serial++,
            model: this.models.saurusScarVeteranOnCarnosaur,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-veterancarnosaur-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        stegadon: {
            id: this.serial++,
            model: this.models.stegadon,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-stegadon-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        troglodon: {
            id: this.serial++,
            model: this.models.troglodon,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-troglodon-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        skinkPriest: {
            id: this.serial++,
            model: this.models.skinkPriest,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkpriest-en.pdf",
            type: "hero",
            subType: "Priest",
            isLeader: () => true,
        },
        skinkStarpriest: {
            id: this.serial++,
            model: this.models.skinkStarpriest,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkstarpriest-en.pdf",
            type: "hero",
            subType: "Priest",
            isLeader: () => true,
        },
        engineOfTheGods: {
            id: this.serial++,
            model: this.models.engineOfTheGods,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-engineofthegods-en.pdf",
            type: "hero",
            subType: "Priest - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        saurusGuard: {
            id: this.serial++,
            model: this.models.saurusGuard,
            factions: [this.factions.SERAPHON],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusguard-en.pdf",
            type: "unit",
            subType: "Seraphon Battleline",
        },
        saurusKnights: {
            id: this.serial++,
            model: this.models.saurusKnights,
            factions: [this.factions.SERAPHON],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusknights-en.pdf",
            type: "unit",
            subType: "Seraphon Battleline",
        },
        saurusAstrolithBearer: {
            id: this.serial++,
            model: this.models.saurusAstrolithBearer,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-astrolithbearer-en.pdf",
            type: "hero",
            subType: "Totem",
            isLeader: () => true,
        },
        lordKroak: {
            id: this.serial++,
            model: this.models.lordKroak,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 450,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lordkroak-en.pdf",
            type: "hero",
            subType: "Unique ",
            isLeader: () => true,
        },
        chameleonSkinkStalker: {
            id: this.serial++,
            model: this.models.chameleonSkinkStalker,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            maxSize: 1,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        skinkProphet: {
            id: this.serial++,
            model: this.models.skinkProphet,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            maxSize: 1,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        chameleonSkinks: {
            id: this.serial++,
            model: this.models.chameleonSkinks,
            factions: [this.factions.SERAPHON],
            size: 5,
            maxSize: 20,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chameleonskinks-en.pdf",
            type: "unit",
            subType: undefined,
        },
        celestialSwarms: {
            id: this.serial++,
            model: this.models.celestialSwarms,
            factions: [this.factions.LIZARDMEN],
            size: 2,
            maxSize: 8,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        kroxigor: {
            id: this.serial++,
            model: this.models.kroxigor,
            factions: [this.factions.SERAPHON],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-kroxigor-en.pdf",
            type: "unit",
            subType: undefined,
        },
        ripperdactylRiders: {
            id: this.serial++,
            model: this.models.ripperdactylRiders,
            factions: [this.factions.SERAPHON],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ripperdactylriders-en.pdf",
            type: "unit",
            subType: undefined,
        },
        saurusEternityWarden: {
            id: this.serial++,
            model: this.models.saurusEternityWarden,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-eternitywarden-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        saurusOldblood: {
            id: this.serial++,
            model: this.models.saurusOldblood,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurusoldblood-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        saurusScarVeteranOnColdOne: {
            id: this.serial++,
            model: this.models.saurusScarVeteranOnColdOne,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-veterancoldone-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        saurusSunblood: {
            id: this.serial++,
            model: this.models.saurusSunblood,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-saurussunblood-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        skinkChief: {
            id: this.serial++,
            model: this.models.skinkChief,
            factions: [this.factions.LIZARDMEN],
            size: 1,
            maxSize: 1,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        skinkHandlers: {
            id: this.serial++,
            model: this.models.skinkHandlers,
            factions: [this.factions.SERAPHON],
            size: 3,
            maxSize: 12,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        skinkStarseer: {
            id: this.serial++,
            model: this.models.skinkStarseer,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-skinkstarseer-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        slannStarmaster: {
            id: this.serial++,
            model: this.models.slannStarmaster,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: 1,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-slannstarmaster-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        terradonRiders: {
            id: this.serial++,
            model: this.models.terradonRiders,
            factions: [this.factions.SERAPHON],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-terradonriders-en.pdf",
            type: "unit",
            subType: undefined,
        },
        squigGobba: {
            id: this.serial++,
            model: this.models.squigGobba,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        fimirWarriors: {
            id: this.serial++,
            model: this.models.fimirWarriors,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline (Fimir Dirach Balefield General)",
        },
        basilisk: {
            id: this.serial++,
            model: this.models.basilisk,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        bonegrinderGargant: {
            id: this.serial++,
            model: this.models.bonegrinderGargant,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 420,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        broodHorror: {
            id: this.serial++,
            model: this.models.broodHorror,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        carmineDragon: {
            id: this.serial++,
            model: this.models.carmineDragon,
            factions: [this.factions.MONSTERSOFORDER],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        colossalSquig: {
            id: this.serial++,
            model: this.models.colossalSquig,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        cursDEttin: {
            id: this.serial++,
            model: this.models.cursDEttin,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        dreadSaurian: {
            id: this.serial++,
            model: this.models.dreadSaurian,
            factions: [this.factions.SERAPHON],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        incarnateElementalOfBeasts: {
            id: this.serial++,
            model: this.models.incarnateElementalOfBeasts,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        magmaDragon: {
            id: this.serial++,
            model: this.models.magmaDragon,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 520,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        merwyrm: {
            id: this.serial++,
            model: this.models.merwyrm,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        preyton: {
            id: this.serial++,
            model: this.models.preyton,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        rogueIdol: {
            id: this.serial++,
            model: this.models.rogueIdol,
            factions: [this.factions.MONSTROUSARCANUM],
            size: 1,
            maxSize: undefined,
            points: 400,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        skavenWarlordOnBroodHorror: {
            id: this.serial++,
            model: this.models.skavenWarlordOnBroodHorror,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        troggothHag: {
            id: this.serial++,
            model: this.models.troggothHag,
            factions: [this.factions.TROGGOTHS],
            size: 1,
            maxSize: undefined,
            points: 360,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        warpfireDragon: {
            id: this.serial++,
            model: this.models.warpfireDragon,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        mourngul: {
            id: this.serial++,
            model: this.models.mourngul,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            maxSize: undefined,
            points: 350,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Nighthaunt - Behemoth",
            isBehemot: () => true,
        },
        skinWolves: {
            id: this.serial++,
            model: this.models.skinWolves,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        wolfRats: {
            id: this.serial++,
            model: this.models.wolfRats,
            factions: [this.factions.SKAVENMOULDER],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        icebrowHunter: {
            id: this.serial++,
            model: this.models.icebrowHunter,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-icebrow-hunter-en.pdf",
            type: "hero",
            subType: "Beastclaw Raiders",
            isLeader: () => true,
        },
        frostlordOnStonehorn: {
            id: this.serial++,
            model: this.models.frostlordOnStonehorn,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: undefined,
            points: 460,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        frostlordOnThundertusk: {
            id: this.serial++,
            model: this.models.frostlordOnThundertusk,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: undefined,
            points: 460,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        huskardOnStonehorn: {
            id: this.serial++,
            model: this.models.huskardOnStonehorn,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-huskard-on-stonehorn-en.pdf",
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        huskardOnThundertusk: {
            id: this.serial++,
            model: this.models.huskardOnThundertusk,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Beastclaw Raiders - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        mournfangPack: {
            id: this.serial++,
            model: this.models.mournfangPack,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 2,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-mournfang-pack-en.pdf",
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline",
            isBatteline: () => true,
        },
        icefallYhetees: {
            id: this.serial++,
            model: this.models.icefallYhetees,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline (Frostlord on Thundertusk General)",
            isBatteline: () => true,
        },
        frostSabres: {
            id: this.serial++,
            model: this.models.frostSabres,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 2,
            maxSize: 12,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Beastclaw Raiders - Beastclaw Raiders Battleline (Icetooth Hunter General)",
            isBatteline: () => true,
        },
        stonehornBeastriders: {
            id: this.serial++,
            model: this.models.stonehornBeastriders,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: 1,
            points: 360,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-stonehorn-beastriders-en.pdf",
            type: "monster",
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline",
            isBehemot: () => true,
        },
        thundertuskBeastriders: {
            id: this.serial++,
            model: this.models.thundertuskBeastriders,
            factions: [this.factions.BEASTCLAWRAIDERS],
            size: 1,
            maxSize: 1,
            points: 360,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/Beastclaw_Raiders//aos-warscroll-thundertusk-beastriders-en.pdf",
            type: "monster",
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline",
            isBehemot: () => true,
        },
        firebelly: {
            id: this.serial++,
            model: this.models.firebelly,
            factions: [this.factions.FIREBELLIES],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Firebellies",
            isLeader: () => true,
        },
        butcher: {
            id: this.serial++,
            model: this.models.butcher,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Gutbusters",
            isLeader: () => true,
        },
        gorgers: {
            id: this.serial++,
            model: this.models.gorgers,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters",
        },
        grots: {
            id: this.serial++,
            model: this.models.grots,
            factions: [this.factions.GUTBUSTERS],
            size: 20,
            maxSize: 60,
            points: 100,
            maxPoints: 270,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters",
        },
        ironguts: {
            id: this.serial++,
            model: this.models.ironguts,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            maxSize: 12,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters - Gutbusters Battleline",
            isBatteline: () => true,
        },
        tyrant: {
            id: this.serial++,
            model: this.models.tyrant,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogor-tyrant-en.pdf",
            type: "hero",
            subType: "Gutbusters",
            isLeader: () => true,
        },
        grotScraplauncher: {
            id: this.serial++,
            model: this.models.grotScraplauncher,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            maxSize: undefined,
            points: 130,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters - Artillery",
            isArtillery: () => true,
        },
        ironblaster: {
            id: this.serial++,
            model: this.models.ironblaster,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters - Artillery",
            isArtillery: () => true,
        },
        ogors: {
            id: this.serial++,
            model: this.models.ogors,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: 400,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogors-en.pdf",
            type: "unit",
            subType: "Gutbusters - Battleline",
            isBatteline: () => true,
        },
        leadbelchers: {
            id: this.serial++,
            model: this.models.leadbelchers,
            factions: [this.factions.GUTBUSTERS],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gutbusters - Gutbusters Battleline",
            isBatteline: () => true,
        },
        maneaters: {
            id: this.serial++,
            model: this.models.maneaters,
            factions: [this.factions.MANEATERS],
            size: 3,
            maxSize: 12,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-ogor-maneaters-en.pdf",
            type: "unit",
            subType: "Maneaters",
        },
        bruiserStandardBearer: {
            id: this.serial++,
            model: this.models.bruiserStandardBearer,
            factions: [this.factions.OGREKINGDOMS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Ogre Kingdoms",
            isLeader: () => true,
        },
        overtyrant: {
            id: this.serial++,
            model: this.models.overtyrant,
            factions: [this.factions.OGREKINGDOMS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Ogre Kingdoms",
            isLeader: () => true,
        },
        aleguzzlerGargant: {
            id: this.serial++,
            model: this.models.aleguzzlerGargant,
            factions: [this.factions.ALEGUZZLERGARGANTS],
            size: 1,
            maxSize: undefined,
            points: 170,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Aleguzzler Gargants - Behemoth",
            isBehemot: () => true,
        },
        maniakWeirdnob: {
            id: this.serial++,
            model: this.models.maniakWeirdnob,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Bonesplitterz",
            isLeader: () => true,
        },
        savageBigBoss: {
            id: this.serial++,
            model: this.models.savageBigBoss,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Bonesplitterz",
            isLeader: () => true,
        },
        savageBigStabbas: {
            id: this.serial++,
            model: this.models.savageBigStabbas,
            factions: [this.factions.BONESPLITTERZ],
            size: 2,
            maxSize: 8,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-savage-orruks-en-2016.pdf",
            type: "unit",
            subType: "Bonesplitterz",
        },
        savageOrrukArrowboys: {
            id: this.serial++,
            model: this.models.savageOrrukArrowboys,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            isBatteline: () => true,
        },
        savageOrrukMorboys: {
            id: this.serial++,
            model: this.models.savageOrrukMorboys,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 300,
            warcroll: undefined,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            isBatteline: () => true,
        },
        wardokk: {
            id: this.serial++,
            model: this.models.wardokk,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-wardokk-en.pdf",
            type: "hero",
            subType: "Bonesplitterz Wizard",
            isLeader: () => true,
        },
        wurrgogProphet: {
            id: this.serial++,
            model: this.models.wurrgogProphet,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-wurrgog-prophet-en.pdf",
            type: "hero",
            subType: "Bonesplitterz Wizard",
            isLeader: () => true,
        },
        savageOrruks: {
            id: this.serial++,
            model: this.models.savageOrruks,
            factions: [this.factions.BONESPLITTERZ],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: 300,
            warcroll: undefined,
            type: "unit",
            subType: "Bonesplitterz - Battleline",
            isBatteline: () => true,
        },
        savageBoarboyManiaks: {
            id: this.serial++,
            model: this.models.savageBoarboyManiaks,
            factions: [this.factions.BONESPLITTERZ],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            isBatteline: () => true,
        },
        savageBoarboyz: {
            id: this.serial++,
            model: this.models.savageBoarboyz,
            factions: [this.factions.BONESPLITTERZ],
            size: 5,
            maxSize: 20,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Bonesplitterz - Bonesplitterz Battleline",
            isBatteline: () => true,
        },
        gitmobGrotShaman: {
            id: this.serial++,
            model: this.models.gitmobGrotShaman,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Gitmob Grots",
            isLeader: () => true,
        },
        grotWolfChariots: {
            id: this.serial++,
            model: this.models.grotWolfChariots,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: 6,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots - Gitmob Grots Battleline",
            isBatteline: () => true,
        },
        nastySkulkers: {
            id: this.serial++,
            model: this.models.nastySkulkers,
            factions: [this.factions.GROTS],
            size: 3,
            maxSize: 9,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots",
        },
        snotlingPumpWagons: {
            id: this.serial++,
            model: this.models.snotlingPumpWagons,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: 3,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots",
        },
        snotlings: {
            id: this.serial++,
            model: this.models.snotlings,
            factions: [this.factions.GROTS],
            size: 2,
            maxSize: 10,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots",
        },
        doomDiverCatapult: {
            id: this.serial++,
            model: this.models.doomDiverCatapult,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            isArtillery: () => true,
        },
        grotRockLobber: {
            id: this.serial++,
            model: this.models.grotRockLobber,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            isArtillery: () => true,
        },
        grotSpearChukka: {
            id: this.serial++,
            model: this.models.grotSpearChukka,
            factions: [this.factions.GROTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Gitmob Grots - Artillery",
            isArtillery: () => true,
        },
        gitmobGrots: {
            id: this.serial++,
            model: this.models.gitmobGrots,
            factions: [this.factions.GROTS],
            size: 20,
            maxSize: 60,
            points: 100,
            maxPoints: 270,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots - Battleline",
            isBatteline: () => true,
        },
        grotWolfRiders: {
            id: this.serial++,
            model: this.models.grotWolfRiders,
            factions: [this.factions.GROTS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 500,
            warcroll: undefined,
            type: "unit",
            subType: "Gitmob Grots - Gitmob Grots Battleline",
            isBatteline: () => true,
        },
        orrukBoarChariots: {
            id: this.serial++,
            model: this.models.orrukBoarChariots,
            factions: [this.factions.ORRUKS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Greenskinz - Greenskinz Battleline",
            isBatteline: () => true,
        },
        orrukGreatShaman: {
            id: this.serial++,
            model: this.models.orrukGreatShaman,
            factions: [this.factions.ORRUKS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Greenskinz",
            isLeader: () => true,
        },
        orrukWarboss: {
            id: this.serial++,
            model: this.models.orrukWarboss,
            factions: [this.factions.ORRUKS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Greenskinz",
            isLeader: () => true,
        },
        orruks: {
            id: this.serial++,
            model: this.models.orruks,
            factions: [this.factions.ORRUKS],
            size: 10,
            maxSize: 40,
            points: 90,
            maxPoints: 320,
            warcroll: undefined,
            type: "unit",
            subType: "Greenskinz - Battleline",
            isBatteline: () => true,
        },
        orrukBoarboys: {
            id: this.serial++,
            model: this.models.orrukBoarboys,
            factions: [this.factions.ORRUKS],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: 360,
            warcroll: undefined,
            type: "unit",
            subType: "Greenskinz - Greenskinz Battleline",
            isBatteline: () => true,
        },
        orrukWarbossOnWyvern: {
            id: this.serial++,
            model: this.models.orrukWarbossOnWyvern,
            factions: [this.factions.ORRUKS],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Greenskinz Behemoth",
            isLeader: () => true,
        },
        orrukMegaboss: {
            id: this.serial++,
            model: this.models.orrukMegaboss,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-megaboss-en.pdf",
            type: "hero",
            subType: "Ironjawz",
            isLeader: () => true,
        },
        orrukWarchanter: {
            id: this.serial++,
            model: this.models.orrukWarchanter,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-warchanter-en.pdf",
            type: "hero",
            subType: "Ironjawz",
            isLeader: () => true,
        },
        orrukWeirdnobShaman: {
            id: this.serial++,
            model: this.models.orrukWeirdnobShaman,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-weirdnob-shaman-en.pdf",
            type: "hero",
            subType: "Ironjawz",
            isLeader: () => true,
        },
        orrukArdboys: {
            id: this.serial++,
            model: this.models.orrukArdboys,
            factions: [this.factions.IRONJAWZ],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 450,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-ardboyz-en.pdf",
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            isBatteline: () => true,
        },
        orrukBrutes: {
            id: this.serial++,
            model: this.models.orrukBrutes,
            factions: [this.factions.IRONJAWZ],
            size: 5,
            maxSize: 20,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-brutes-en.pdf",
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            isBatteline: () => true,
        },
        orrukGoreGruntas: {
            id: this.serial++,
            model: this.models.orrukGoreGruntas,
            factions: [this.factions.IRONJAWZ],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-goregruntas-en.pdf",
            type: "unit",
            subType: "Ironjawz - Ironjawz Battleline",
            isBatteline: () => true,
        },
        gordrakkTheFistOfGork: {
            id: this.serial++,
            model: this.models.gordrakkTheFistOfGork,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            maxSize: undefined,
            points: 620,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-gordrak-bigteef-en.pdf",
            type: "hero",
            subType: "Ironjawz - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        megabossOnMawKrusha: {
            id: this.serial++,
            model: this.models.megabossOnMawKrusha,
            factions: [this.factions.IRONJAWZ],
            size: 1,
            maxSize: undefined,
            points: 460,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-orruk-mawkrusha-en.pdf",
            type: "hero",
            subType: "Ironjawz Behemoth",
            isLeader: () => true,
        },
        caveSquigs: {
            id: this.serial++,
            model: this.models.caveSquigs,
            factions: [this.factions.MOONCLANGROTS],
            size: 5,
            maxSize: 20,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moonclan Grots - Moonclan Battleline",
            isBatteline: () => true,
        },
        grotFanatics: {
            id: this.serial++,
            model: this.models.grotFanatics,
            factions: [this.factions.MOONCLANGROTS],
            size: 3,
            maxSize: 6,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moonclan Grots",
        },
        grotSquigHerders: {
            id: this.serial++,
            model: this.models.grotSquigHerders,
            factions: [this.factions.MOONCLANGROTS],
            size: 2,
            maxSize: 10,
            points: 20,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moonclan Grots",
        },
        grotSquigHoppers: {
            id: this.serial++,
            model: this.models.grotSquigHoppers,
            factions: [this.factions.MOONCLANGROTS],
            size: 5,
            maxSize: 20,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moonclan Grots - Moonclan Battleline",
            isBatteline: () => true,
        },
        grotWarboss: {
            id: this.serial++,
            model: this.models.grotWarboss,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Moonclan Grots",
            isLeader: () => true,
        },
        grotWarbossOnGreatCaveSquig: {
            id: this.serial++,
            model: this.models.grotWarbossOnGreatCaveSquig,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Moonclan Grots",
            isLeader: () => true,
        },
        moonclanGrotShaman: {
            id: this.serial++,
            model: this.models.moonclanGrotShaman,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Moonclan Grots",
            isLeader: () => true,
        },
        moonclanGrots: {
            id: this.serial++,
            model: this.models.moonclanGrots,
            factions: [this.factions.MOONCLANGROTS],
            size: 20,
            maxSize: 60,
            points: 130,
            maxPoints: 360,
            warcroll: undefined,
            type: "unit",
            subType: "Moonclan Grots - Battleline",
            isBatteline: () => true,
        },
        manglerSquigs: {
            id: this.serial++,
            model: this.models.manglerSquigs,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Moonclan Grots - Behemoth",
            isBehemot: () => true,
        },
        gitboss: {
            id: this.serial++,
            model: this.models.gitboss,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Orcs & Goblins",
            isLeader: () => true,
        },
        orrukBully: {
            id: this.serial++,
            model: this.models.orrukBully,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            maxSize: undefined,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Orcs & Goblins",
            isLeader: () => true,
        },
        mercenaryOrruks: {
            id: this.serial++,
            model: this.models.mercenaryOrruks,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 5,
            maxSize: 30,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Orcs & Goblins ",
        },
        gitbossOnWolfChariot: {
            id: this.serial++,
            model: this.models.gitbossOnWolfChariot,
            factions: [this.factions.ORCSANDGOBLINS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Orcs & Goblins",
            isLeader: () => true,
        },
        grotBigBossOnGiganticSpider: {
            id: this.serial++,
            model: this.models.grotBigBossOnGiganticSpider,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Spiderfang Grots",
            isLeader: () => true,
        },
        arachnarokSpider: {
            id: this.serial++,
            model: this.models.arachnarokSpider,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Spiderfang Grots",
        },
        arachnarokSpiderWithGrotShaman: {
            id: this.serial++,
            model: this.models.arachnarokSpiderWithGrotShaman,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Spiderfang Grots - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        grotSpiderRiders: {
            id: this.serial++,
            model: this.models.grotSpiderRiders,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 540,
            warcroll: undefined,
            type: "unit",
            subType: "Spiderfang Grots - Spiderfang Battleline",
            isBatteline: () => true,
        },
        fellwaterTroggoths: {
            id: this.serial++,
            model: this.models.fellwaterTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Troggoths",
        },
        rockgutTroggoths: {
            id: this.serial++,
            model: this.models.rockgutTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Troggoths",
        },
        sourbreathTroggoths: {
            id: this.serial++,
            model: this.models.sourbreathTroggoths,
            factions: [this.factions.TROGGOTHS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Troggoths",
        },
        enchantress: {
            id: this.serial++,
            model: this.models.enchantress,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        sacredProtector: {
            id: this.serial++,
            model: this.models.sacredProtector,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        mountedYeomen: {
            id: this.serial++,
            model: this.models.mountedYeomen,
            factions: [this.factions.BRETONNIA],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        peasantBowmen: {
            id: this.serial++,
            model: this.models.peasantBowmen,
            factions: [this.factions.BRETONNIA],
            size: 16,
            maxSize: 48,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        pegasusKnights: {
            id: this.serial++,
            model: this.models.pegasusKnights,
            factions: [this.factions.BRETONNIA],
            size: 3,
            maxSize: 12,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        questingKnights: {
            id: this.serial++,
            model: this.models.questingKnights,
            factions: [this.factions.BRETONNIA],
            size: 5,
            maxSize: 20,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        fieldTrebuchet: {
            id: this.serial++,
            model: this.models.fieldTrebuchet,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        knightsErrant: {
            id: this.serial++,
            model: this.models.knightsErrant,
            factions: [this.factions.BRETONNIA],
            size: 8,
            maxSize: 24,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        knightsOfTheRealm: {
            id: this.serial++,
            model: this.models.knightsOfTheRealm,
            factions: [this.factions.BRETONNIA],
            size: 8,
            maxSize: 24,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        menAtArms: {
            id: this.serial++,
            model: this.models.menAtArms,
            factions: [this.factions.BRETONNIA],
            size: 16,
            maxSize: 48,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        battlePilgrims: {
            id: this.serial++,
            model: this.models.battlePilgrims,
            factions: [this.factions.BRETONNIA],
            size: 6,
            maxSize: 30,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        bretonnianLord: {
            id: this.serial++,
            model: this.models.bretonnianLord,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        damsel: {
            id: this.serial++,
            model: this.models.damsel,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        grailKnights: {
            id: this.serial++,
            model: this.models.grailKnights,
            factions: [this.factions.BRETONNIA],
            size: 5,
            maxSize: 20,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        nobleChampion: {
            id: this.serial++,
            model: this.models.nobleChampion,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        nobleStandardBearer: {
            id: this.serial++,
            model: this.models.nobleStandardBearer,
            factions: [this.factions.BRETONNIA],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        gladeGuard: {
            id: this.serial++,
            model: this.models.gladeGuard,
            factions: [this.factions.WANDERERS],
            size: 10,
            maxSize: 30,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        wildwoodRangers: {
            id: this.serial++,
            model: this.models.wildwoodRangers,
            factions: [this.factions.WANDERERS],
            size: 10,
            maxSize: 30,
            points: 180,
            maxPoints: 480,
            warcroll: undefined,
            type: "unit",
            subType: "Wanderers Battleline (Wayfinder General)",
        },
        sistersOfTheWatch: {
            id: this.serial++,
            model: this.models.sistersOfTheWatch,
            factions: [this.factions.WANDERERS],
            size: 10,
            maxSize: 20,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Wanderers Battleline (Waywatcher General)",
        },
        eternalGuard: {
            id: this.serial++,
            model: this.models.eternalGuard,
            factions: [this.factions.WANDERERS],
            size: 10,
            maxSize: 30,
            points: 80,
            maxPoints: 210,
            warcroll: undefined,
            type: "unit",
            subType: "Wanderers Battleline",
        },
        nomadPrince: {
            id: this.serial++,
            model: this.models.nomadPrince,
            factions: [this.factions.WANDERERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        sistersOfTheThorn: {
            id: this.serial++,
            model: this.models.sistersOfTheThorn,
            factions: [this.factions.WANDERERS],
            size: 5,
            maxSize: 20,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        spellweaver: {
            id: this.serial++,
            model: this.models.spellweaver,
            factions: [this.factions.WANDERERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        wayfinder: {
            id: this.serial++,
            model: this.models.wayfinder,
            factions: [this.factions.WANDERERS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        waystrider: {
            id: this.serial++,
            model: this.models.waystrider,
            factions: [this.factions.WANDERERS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        wildRiders: {
            id: this.serial++,
            model: this.models.wildRiders,
            factions: [this.factions.WANDERERS],
            size: 5,
            maxSize: 20,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        gladeRiders: {
            id: this.serial++,
            model: this.models.gladeRiders,
            factions: [this.factions.WOODELVES],
            size: 8,
            maxSize: 24,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        waywatchers: {
            id: this.serial++,
            model: this.models.waywatchers,
            factions: [this.factions.WOODELVES],
            size: 5,
            maxSize: 15,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        gladeLordOnForestDragon: {
            id: this.serial++,
            model: this.models.gladeLordOnForestDragon,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        avatarOfTheHunt: {
            id: this.serial++,
            model: this.models.avatarOfTheHunt,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 380,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        twilightSistersOnForestDragon: {
            id: this.serial++,
            model: this.models.twilightSistersOnForestDragon,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 420,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        gladeCaptainBattleStandardBearer: {
            id: this.serial++,
            model: this.models.gladeCaptainBattleStandardBearer,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        gladeLord: {
            id: this.serial++,
            model: this.models.gladeLord,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        gladeLordOnGreatEagle: {
            id: this.serial++,
            model: this.models.gladeLordOnGreatEagle,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        gladeLordOnGreatStag: {
            id: this.serial++,
            model: this.models.gladeLordOnGreatStag,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        huntingHounds: {
            id: this.serial++,
            model: this.models.huntingHounds,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: 5,
            points: 20,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        gladeLordOnPurebredSteed: {
            id: this.serial++,
            model: this.models.gladeLordOnPurebredSteed,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        shadowdancer: {
            id: this.serial++,
            model: this.models.shadowdancer,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        treeKin: {
            id: this.serial++,
            model: this.models.treeKin,
            factions: [this.factions.WOODELVES],
            size: 3,
            maxSize: 12,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        wardancers: {
            id: this.serial++,
            model: this.models.wardancers,
            factions: [this.factions.WOODELVES],
            size: 5,
            maxSize: 30,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        warhawkRiders: {
            id: this.serial++,
            model: this.models.warhawkRiders,
            factions: [this.factions.WOODELVES],
            size: 1,
            maxSize: 6,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        gutterRunners: {
            id: this.serial++,
            model: this.models.gutterRunners,
            factions: [this.factions.SKAVENESHIN],
            size: 5,
            maxSize: 20,
            points: 60,
            maxPoints: 200,
            warcroll: undefined,
            type: "unit",
            subType: "Eshin - Eshin Battleline",
            isBatteline: () => true,
        },
        skavenAssassin: {
            id: this.serial++,
            model: this.models.skavenAssassin,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eshin",
            isLeader: () => true,
        },
        nightRunners: {
            id: this.serial++,
            model: this.models.nightRunners,
            factions: [this.factions.SKAVENESHIN],
            size: 10,
            maxSize: 40,
            points: 100,
            maxPoints: 360,
            warcroll: undefined,
            type: "unit",
            subType: "Eshin - Eshin Battleline",
            isBatteline: () => true,
        },
        verminlordDeceiver: {
            id: this.serial++,
            model: this.models.verminlordDeceiver,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eshin Behemoth",
            isLeader: () => true,
        },
        greySeer: {
            id: this.serial++,
            model: this.models.greySeer,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Masterclan",
            isLeader: () => true,
        },
        screamingBell: {
            id: this.serial++,
            model: this.models.screamingBell,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Masterclan - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        verminlordWarpseer: {
            id: this.serial++,
            model: this.models.verminlordWarpseer,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Masterclan - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        lordSkreechVerminkin: {
            id: this.serial++,
            model: this.models.lordSkreechVerminkin,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Masterclan - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        thanquolAndBoneripper: {
            id: this.serial++,
            model: this.models.thanquolAndBoneripper,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 450,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Masterclan - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        giantRats: {
            id: this.serial++,
            model: this.models.giantRats,
            factions: [this.factions.SKAVENMOULDER],
            size: 10,
            maxSize: 40,
            points: 60,
            maxPoints: 200,
            warcroll: undefined,
            type: "unit",
            subType: "Moulder - Moulder Battleline",
            isBatteline: () => true,
        },
        packmaster: {
            id: this.serial++,
            model: this.models.packmaster,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Moulder",
            isLeader: () => true,
        },
        ratOgors: {
            id: this.serial++,
            model: this.models.ratOgors,
            factions: [this.factions.SKAVENMOULDER],
            size: 2,
            maxSize: 8,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moulder - Moulder Battleline",
            isBatteline: () => true,
        },
        ratSwarms: {
            id: this.serial++,
            model: this.models.ratSwarms,
            factions: [this.factions.SKAVENMOULDER],
            size: 2,
            maxSize: 8,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Moulder",
        },
        hellPitAbomination: {
            id: this.serial++,
            model: this.models.hellPitAbomination,
            factions: [this.factions.SKAVENMOULDER],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Moulder - Behemoth",
            isBehemot: () => true,
        },
        plaguePriestWithPlagueCenser: {
            id: this.serial++,
            model: this.models.plaguePriestWithPlagueCenser,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Pestilens ",
            isLeader: () => true,
        },
        plaguePriestWithWarpstoneTippedStaff: {
            id: this.serial++,
            model: this.models.plaguePriestWithWarpstoneTippedStaff,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Pestilens",
            isLeader: () => true,
        },
        plagueclaw: {
            id: this.serial++,
            model: this.models.plagueclaw,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Nurgle Pestilens  - Artillery",
            isArtillery: () => true,
        },
        plagueCenserBearers: {
            id: this.serial++,
            model: this.models.plagueCenserBearers,
            factions: [this.factions.SKAVENPESTILENS],
            size: 5,
            maxSize: 20,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Nurgle Pestilens  - Pestilens Battleline",
            isBatteline: () => true,
        },
        plagueMonks: {
            id: this.serial++,
            model: this.models.plagueMonks,
            factions: [this.factions.SKAVENPESTILENS],
            size: 10,
            maxSize: 40,
            points: 70,
            maxPoints: 240,
            warcroll: undefined,
            type: "unit",
            subType: "Nurgle Pestilens  - Pestilens Battleline",
            isBatteline: () => true,
        },
        plagueFurnace: {
            id: this.serial++,
            model: this.models.plagueFurnace,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Pestilens - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        verminlordCorruptor: {
            id: this.serial++,
            model: this.models.verminlordCorruptor,
            factions: [this.factions.SKAVENPESTILENS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Pestilens Daemon Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        archWarlock: {
            id: this.serial++,
            model: this.models.archWarlock,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Skryre",
            isLeader: () => true,
        },
        poisonedWindMortarWeaponTeam: {
            id: this.serial++,
            model: this.models.poisonedWindMortarWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre",
        },
        ratlingGunWeaponTeam: {
            id: this.serial++,
            model: this.models.ratlingGunWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre",
        },
        warlockEngineer: {
            id: this.serial++,
            model: this.models.warlockEngineer,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Skryre",
            isLeader: () => true,
        },
        warpGrinderWeaponTeam: {
            id: this.serial++,
            model: this.models.warpGrinderWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre",
        },
        warpfireThrowerWeaponTeam: {
            id: this.serial++,
            model: this.models.warpfireThrowerWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 70,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre",
        },
        warpLightningCannon: {
            id: this.serial++,
            model: this.models.warpLightningCannon,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Skryre - Artillery",
            isArtillery: () => true,
        },
        warplockJezzails: {
            id: this.serial++,
            model: this.models.warplockJezzails,
            factions: [this.factions.SKAVENSKRYRE],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre - Artillery",
            isArtillery: () => true,
        },
        doomwheel: {
            id: this.serial++,
            model: this.models.doomwheel,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            maxSize: undefined,
            points: 130,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Skryre - Behemoth",
            isBehemot: () => true,
        },
        skryreAcolytes: {
            id: this.serial++,
            model: this.models.skryreAcolytes,
            factions: [this.factions.SKAVENSKRYRE],
            size: 5,
            maxSize: 30,
            points: 60,
            maxPoints: 320,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre - Skryre Battleline",
            isBatteline: () => true,
        },
        stormfiends: {
            id: this.serial++,
            model: this.models.stormfiends,
            factions: [this.factions.SKAVENSKRYRE],
            size: 3,
            maxSize: 9,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Skryre - Skryre Battleline",
            isBatteline: () => true,
        },
        skavenChieftainWithBattleStandard: {
            id: this.serial++,
            model: this.models.skavenChieftainWithBattleStandard,
            factions: [this.factions.SKAVEN],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Verminus",
            isLeader: () => true,
        },
        skavenWarlord: {
            id: this.serial++,
            model: this.models.skavenWarlord,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Verminus",
            isLeader: () => true,
        },
        stormvermin: {
            id: this.serial++,
            model: this.models.stormvermin,
            factions: [this.factions.SKAVENVERMINUS],
            size: 10,
            maxSize: 40,
            points: 140,
            maxPoints: 500,
            warcroll: undefined,
            type: "unit",
            subType: "Verminus - Verminus Battleline",
            isBatteline: () => true,
        },
        clanrats: {
            id: this.serial++,
            model: this.models.clanrats,
            factions: [this.factions.SKAVENVERMINUS],
            size: 20,
            maxSize: 40,
            points: 120,
            maxPoints: 200,
            warcroll: undefined,
            type: "unit",
            subType: "Verminus - Battleline",
            isBatteline: () => true,
        },
        verminlordWarbringer: {
            id: this.serial++,
            model: this.models.verminlordWarbringer,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Verminus - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        skavenslaves: {
            id: this.serial++,
            model: this.models.skavenslaves,
            factions: [this.factions.SKAVEN],
            size: 20,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        deathrunner: {
            id: this.serial++,
            model: this.models.deathrunner,
            factions: [this.factions.SKAVENESHIN],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Eshin",
            isLeader: () => true,
        },
        liberators: {
            id: this.serial++,
            model: this.models.liberators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: 520,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-liberators-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        drakeswornTemplar: {
            id: this.serial++,
            model: this.models.drakeswornTemplar,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 500,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        lordCelestantOnStardrake: {
            id: this.serial++,
            model: this.models.lordCelestantOnStardrake,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 560,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-stormcast-stardrake-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        judicators: {
            id: this.serial++,
            model: this.models.judicators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-judicators-en.pdf",
            type: "unit",
            subType: "Stormcast Eternals Battleline",
        },
        vanguardHunters: {
            id: this.serial++,
            model: this.models.vanguardHunters,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 15,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Stormcast Eternals Battleline (Lord Aquilor General)",
        },
        knightVexillor: {
            id: this.serial++,
            model: this.models.knightVexillor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightvexillor-en.pdf",
            type: "hero",
            subType: "Totem",
            isLeader: () => true,
        },
        celestantPrime: {
            id: this.serial++,
            model: this.models.celestantPrime,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-celestantprime-en.pdf",
            type: "hero",
            subType: "Unique ",
            isLeader: () => true,
        },
        aetherwings: {
            id: this.serial++,
            model: this.models.aetherwings,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        concussors: {
            id: this.serial++,
            model: this.models.concussors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            maxSize: 12,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
            type: "unit",
            subType: undefined,
        },
        desolators: {
            id: this.serial++,
            model: this.models.desolators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            maxSize: 12,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
            type: "unit",
            subType: undefined,
        },
        fulminators: {
            id: this.serial++,
            model: this.models.fulminators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            maxSize: 12,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
            type: "unit",
            subType: undefined,
        },
        gryphHound: {
            id: this.serial++,
            model: this.models.gryphHound,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: 12,
            points: 40,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcastellant-en.pdf",
            type: "unit",
            subType: undefined,
        },
        knightQuestor: {
            id: this.serial++,
            model: this.models.knightQuestor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-knight-questor-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        knightAzyros: {
            id: this.serial++,
            model: this.models.knightAzyros,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightazyros-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        knightHeraldor: {
            id: this.serial++,
            model: this.models.knightHeraldor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightheraldor-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        knightVenator: {
            id: this.serial++,
            model: this.models.knightVenator,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-knightvenator-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordVeritant: {
            id: this.serial++,
            model: this.models.lordVeritant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-Lord-Veritant-ENG.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordAquilor: {
            id: this.serial++,
            model: this.models.lordAquilor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        vandusHammerhand: {
            id: this.serial++,
            model: this.models.vandusHammerhand,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique",
            isLeader: () => true,
        },
        lordCastellant: {
            id: this.serial++,
            model: this.models.lordCastellant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcastellant-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordCelestant: {
            id: this.serial++,
            model: this.models.lordCelestant,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/warhammer-aos-lordcelestant-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordCelestantOnDracoth: {
            id: this.serial++,
            model: this.models.lordCelestantOnDracoth,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-lord-celestant-dracoth-en.pdf",
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordRelictor: {
            id: this.serial++,
            model: this.models.lordRelictor,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        paladinDecimators: {
            id: this.serial++,
            model: this.models.paladinDecimators,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 20,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-decimators-en.pdf",
            type: "unit",
            subType: undefined,
        },
        paladinProtectors: {
            id: this.serial++,
            model: this.models.paladinProtectors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 20,
            points: 200,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-protectors-en.pdf",
            type: "unit",
            subType: undefined,
        },
        paladinRetributors: {
            id: this.serial++,
            model: this.models.paladinRetributors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 5,
            maxSize: 20,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-retributors-en.pdf",
            type: "unit",
            subType: undefined,
        },
        prosecutorsWithCelestialHammers: {
            id: this.serial++,
            model: this.models.prosecutorsWithCelestialHammers,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-prostecutorhammers-en.pdf",
            type: "unit",
            subType: undefined,
        },
        prosecutorsWithStormcallJavelins: {
            id: this.serial++,
            model: this.models.prosecutorsWithStormcallJavelins,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 100,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-prostecutorjavelins-en.pdf",
            type: "unit",
            subType: undefined,
        },
        tempestors: {
            id: this.serial++,
            model: this.models.tempestors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 2,
            maxSize: 12,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dracothian-guard-en.pdf",
            type: "unit",
            subType: undefined,
        },
        vanguardPalladors: {
            id: this.serial++,
            model: this.models.vanguardPalladors,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        vanguardRaptorsWithHurricaneCrossbows: {
            id: this.serial++,
            model: this.models.vanguardRaptorsWithHurricaneCrossbows,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        vanguardRaptorsWithLongstrikeCrossbows: {
            id: this.serial++,
            model: this.models.vanguardRaptorsWithLongstrikeCrossbows,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        dryads: {
            id: this.serial++,
            model: this.models.dryads,
            factions: [this.factions.SYLVANETH],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: 270,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-dryads-en.pdf",
            type: "unit",
            subType: "Battleline",
        },
        spiritOfDurthu: {
            id: this.serial++,
            model: this.models.spiritOfDurthu,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 400,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-spirit-of-durthu-en.pdf",
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        treelord: {
            id: this.serial++,
            model: this.models.treelord,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 240,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-treelord-en.pdf",
            type: "monster",
            subType: "Behemoth",
        },
        treeRevenants: {
            id: this.serial++,
            model: this.models.treeRevenants,
            factions: [this.factions.SYLVANETH],
            size: 5,
            maxSize: 30,
            points: 80,
            maxPoints: 420,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-tree-revenants-en.pdf",
            type: "unit",
            subType: "Sylvaneth Battleline",
        },
        branchwraith: {
            id: this.serial++,
            model: this.models.branchwraith,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-branchwraith-en.pdf",
            type: "hero",
            subType: "Wizard",
            isLeader: () => true,
        },
        branchwych: {
            id: this.serial++,
            model: this.models.branchwych,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-branchwych-en.pdf",
            type: "hero",
            subType: "Wizard",
            isLeader: () => true,
        },
        treelordAncient: {
            id: this.serial++,
            model: this.models.treelordAncient,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-treelordancient-en.pdf",
            type: "hero",
            subType: "Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        alarielleTheEverqueen: {
            id: this.serial++,
            model: this.models.alarielleTheEverqueen,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 600,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-alarielle-everqueen-en.pdf",
            type: "hero",
            subType: "Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        drychaHamadreth: {
            id: this.serial++,
            model: this.models.drychaHamadreth,
            factions: [this.factions.SYLVANETH],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-drycha-hamadreth-en.pdf",
            type: "hero",
            subType: "Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        kurnothHunters: {
            id: this.serial++,
            model: this.models.kurnothHunters,
            factions: [this.factions.SYLVANETH],
            size: 3,
            maxSize: 12,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-kurnoth-hunters-en.pdf",
            type: "unit",
            subType: undefined,
        },
        spiteRevenants: {
            id: this.serial++,
            model: this.models.spiteRevenants,
            factions: [this.factions.SYLVANETH],
            size: 5,
            maxSize: 30,
            points: 80,
            maxPoints: 420,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls//aos-warscroll-spite-revenants-en.pdf",
            type: "unit",
            subType: "Sylvaneth Battleline",
        },
        chaosWarMammoth: {
            id: this.serial++,
            model: this.models.chaosWarMammoth,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 320,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        giganticChaosSpawn: {
            id: this.serial++,
            model: this.models.giganticChaosSpawn,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        nightmaw: {
            id: this.serial++,
            model: this.models.nightmaw,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Unique",
        },
        daemonPlagueToadsOfNurgle: {
            id: this.serial++,
            model: this.models.daemonPlagueToadsOfNurgle,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: 400,
            warcroll: undefined,
            type: "unit",
            subType: "Tamurkhan's Horde Battleline",
        },
        plagueOgors: {
            id: this.serial++,
            model: this.models.plagueOgors,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: 560,
            warcroll: undefined,
            type: "unit",
            subType: "Tamurkhan's Horde Battleline",
        },
        kayzkTheBefouled: {
            id: this.serial++,
            model: this.models.kayzkTheBefouled,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique ",
            isLeader: () => true,
        },
        saylTheFaithless: {
            id: this.serial++,
            model: this.models.saylTheFaithless,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique ",
            isLeader: () => true,
        },
        tamurkhanTheMaggotLord: {
            id: this.serial++,
            model: this.models.tamurkhanTheMaggotLord,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            maxSize: undefined,
            points: 500,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique Behemoth",
            isLeader: () => true,
        },
        bileTroggoths: {
            id: this.serial++,
            model: this.models.bileTroggoths,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: 640,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        daemonPoxRidersOfNurgle: {
            id: this.serial++,
            model: this.models.daemonPoxRidersOfNurgle,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: 640,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        screamingSkullCatapult: {
            id: this.serial++,
            model: this.models.screamingSkullCatapult,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        skeletonChariots: {
            id: this.serial++,
            model: this.models.skeletonChariots,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        skeletonHorsemen: {
            id: this.serial++,
            model: this.models.skeletonHorsemen,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        skeletalLegionnaires: {
            id: this.serial++,
            model: this.models.skeletalLegionnaires,
            factions: [this.factions.TOMBKINGS],
            size: 10,
            maxSize: 40,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        boneGiant: {
            id: this.serial++,
            model: this.models.boneGiant,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        casketOfSouls: {
            id: this.serial++,
            model: this.models.casketOfSouls,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        warsphinx: {
            id: this.serial++,
            model: this.models.warsphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        necrosphinx: {
            id: this.serial++,
            model: this.models.necrosphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        royalWarsphinx: {
            id: this.serial++,
            model: this.models.royalWarsphinx,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        skeletonArchers: {
            id: this.serial++,
            model: this.models.skeletonArchers,
            factions: [this.factions.TOMBKINGS],
            size: 10,
            maxSize: 30,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Tomb Kings Battleline (Tomb Queen General)",
        },
        tombQueen: {
            id: this.serial++,
            model: this.models.tombQueen,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        scarabPrince: {
            id: this.serial++,
            model: this.models.scarabPrince,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        tombKingOnExaltedChariot: {
            id: this.serial++,
            model: this.models.tombKingOnExaltedChariot,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 460,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        carrion: {
            id: this.serial++,
            model: this.models.carrion,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            maxSize: 12,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        lichePriest: {
            id: this.serial++,
            model: this.models.lichePriest,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        necropolisKnights: {
            id: this.serial++,
            model: this.models.necropolisKnights,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            maxSize: 12,
            points: 240,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        necrotect: {
            id: this.serial++,
            model: this.models.necrotect,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        sepulchralStalkers: {
            id: this.serial++,
            model: this.models.sepulchralStalkers,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            maxSize: 12,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        skeletonHorseArchers: {
            id: this.serial++,
            model: this.models.skeletonHorseArchers,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            maxSize: 20,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        tombGuard: {
            id: this.serial++,
            model: this.models.tombGuard,
            factions: [this.factions.TOMBKINGS],
            size: 5,
            maxSize: 30,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        tombHerald: {
            id: this.serial++,
            model: this.models.tombHerald,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        tombKing: {
            id: this.serial++,
            model: this.models.tombKing,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        tombKingInRoyalChariot: {
            id: this.serial++,
            model: this.models.tombKingInRoyalChariot,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        tombScorpions: {
            id: this.serial++,
            model: this.models.tombScorpions,
            factions: [this.factions.TOMBKINGS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        tombSwarm: {
            id: this.serial++,
            model: this.models.tombSwarm,
            factions: [this.factions.TOMBKINGS],
            size: 2,
            maxSize: 8,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        ushabti: {
            id: this.serial++,
            model: this.models.ushabti,
            factions: [this.factions.TOMBKINGS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        necromancerOnNightmare: {
            id: this.serial++,
            model: this.models.necromancerOnNightmare,
            factions: [this.factions.VAMPIRECOUNTS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        vampireLordOnAbyssalTerror: {
            id: this.serial++,
            model: this.models.vampireLordOnAbyssalTerror,
            factions: [this.factions.VAMPIRECOUNTS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        chaosChariots: {
            id: this.serial++,
            model: this.models.chaosChariots,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            isBatteline: () => true,
        },
        chaosChosen: {
            id: this.serial++,
            model: this.models.chaosChosen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            maxSize: 20,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal",
        },
        chaosGorebeastChariots: {
            id: this.serial++,
            model: this.models.chaosGorebeastChariots,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal",
        },
        darkoathChieftain: {
            id: this.serial++,
            model: this.models.darkoathChieftain,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal",
            isLeader: () => true,
        },
        exaltedHeroOfChaos: {
            id: this.serial++,
            model: this.models.exaltedHeroOfChaos,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal",
            isLeader: () => true,
        },
        exaltedHeroWithBattleStandard: {
            id: this.serial++,
            model: this.models.exaltedHeroWithBattleStandard,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal",
            isLeader: () => true,
        },
        forsaken: {
            id: this.serial++,
            model: this.models.forsaken,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 10,
            maxSize: 30,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal",
        },
        lordOfChaos: {
            id: this.serial++,
            model: this.models.lordOfChaos,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal",
            isLeader: () => true,
        },
        chaosMarauders: {
            id: this.serial++,
            model: this.models.chaosMarauders,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 10,
            maxSize: 40,
            points: 60,
            maxPoints: 200,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal - Battleline",
            isBatteline: () => true,
        },
        chaosWarriors: {
            id: this.serial++,
            model: this.models.chaosWarriors,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            maxSize: 30,
            points: 90,
            maxPoints: 480,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal - Battleline",
            isBatteline: () => true,
        },
        chaosKnights: {
            id: this.serial++,
            model: this.models.chaosKnights,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-knights-en.pdf",
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            isBatteline: () => true,
        },
        chaosMarauderHorsemen: {
            id: this.serial++,
            model: this.models.chaosMarauderHorsemen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 5,
            maxSize: 30,
            points: 90,
            maxPoints: 480,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal - Slaves to Darkness Battleline",
            isBatteline: () => true,
        },
        chaosLordOnManticore: {
            id: this.serial++,
            model: this.models.chaosLordOnManticore,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 250,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal Behemoth",
            isLeader: () => true,
        },
        chaosWarshrine: {
            id: this.serial++,
            model: this.models.chaosWarshrine,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: 1,
            points: 180,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-warshrine-en.pdf",
            type: "unit",
            subType: "Mortal Behemoth",
        },
        chaosLordOnDaemonicMount: {
            id: this.serial++,
            model: this.models.chaosLordOnDaemonicMount,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal Daemon",
            isLeader: () => true,
        },
        chaosSpawn: {
            id: this.serial++,
            model: this.models.chaosSpawn,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: 6,
            points: 50,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Mortal Tzeentch",
        },
        chaosSorcererLord: {
            id: this.serial++,
            model: this.models.chaosSorcererLord,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal Wizard",
            isLeader: () => true,
        },
        chaosSorcererLordOnManticore: {
            id: this.serial++,
            model: this.models.chaosSorcererLordOnManticore,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal Wizard - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        chimera: {
            id: this.serial++,
            model: this.models.chimera,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        cockatrice: {
            id: this.serial++,
            model: this.models.cockatrice,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        greatTaurus: {
            id: this.serial++,
            model: this.models.greatTaurus,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        lammasu: {
            id: this.serial++,
            model: this.models.lammasu,
            factions: [this.factions.MONSTERSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Behemoth",
        },
        chaosGargant: {
            id: this.serial++,
            model: this.models.chaosGargant,
            factions: [this.factions.CHAOSGARGANTS],
            size: 1,
            maxSize: undefined,
            points: 170,
            maxPoints: undefined,
            warcroll: undefined,
            type: "monster",
            subType: "Chaos Gargants - Behemoth",
            isBehemot: () => true,
        },
        archaon: {
            id: this.serial++,
            model: this.models.archaon,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            maxSize: undefined,
            points: 700,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Daemon Mortal Khorne Nurgle Slaanesh Tzeentch Everchosen Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        dragonOgors: {
            id: this.serial++,
            model: this.models.dragonOgors,
            factions: [this.factions.THUNDERSCORN],
            size: 3,
            maxSize: 12,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Thunderscorn Battleline",
        },
        varanguard: {
            id: this.serial++,
            model: this.models.varanguard,
            factions: [this.factions.EVERCHOSEN],
            size: 3,
            maxSize: 12,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Everchosen - Everchosen Battleline",
            isBatteline: () => true,
        },
        chaosLordOfSlaanesh: {
            id: this.serial++,
            model: this.models.chaosLordOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Slaanesh",
            isLeader: () => true,
        },
        hellflayersOfSlaanesh: {
            id: this.serial++,
            model: this.models.hellflayersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: 3,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Slaanesh",
        },
        hellstridersOfSlaanesh: {
            id: this.serial++,
            model: this.models.hellstridersOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 5,
            maxSize: 20,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Slaanesh - Slaanesh Battleline",
            isBatteline: () => true,
        },
        putridBlightkings: {
            id: this.serial++,
            model: this.models.putridBlightkings,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 5,
            maxSize: 20,
            points: 160,
            maxPoints: 580,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-putridblightkings-en.pdf",
            type: "unit",
            subType: "Nurgle Battleline",
        },
        pusgoyleBlightlords: {
            id: this.serial++,
            model: this.models.pusgoyleBlightlords,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 2,
            maxSize: 12,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Pusgoyle-blightlords.pdf",
            type: "unit",
            subType: "Nurgle Battleline (Lord of Afflictions General)",
        },
        gauntSummonerAndChaosFamiliars: {
            id: this.serial++,
            model: this.models.gauntSummonerAndChaosFamiliars,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Tzeentch Everchosen Arcanites Mortal Daemon Wizard",
            isLeader: () => true,
        },
        gauntSummonerOfTzeentch: {
            id: this.serial++,
            model: this.models.gauntSummonerOfTzeentch,
            factions: [this.factions.EVERCHOSEN],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Tzeentch Everchosen Mortal Daemon Wizard",
            isLeader: () => true,
        },
        slambo: {
            id: this.serial++,
            model: this.models.slambo,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/AoS_Slambo_Warscroll_EN.pdf",
            type: "hero",
            subType: "Unique",
            isLeader: () => true,
        },
        troggothKing: {
            id: this.serial++,
            model: this.models.troggothKing,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        bloabRotspawned: {
            id: this.serial++,
            model: this.models.bloabRotspawned,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Blob-rotspawned.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        chaosDragon: {
            id: this.serial++,
            model: this.models.chaosDragon,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        morbidexTwiceborn: {
            id: this.serial++,
            model: this.models.morbidexTwiceborn,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-morbidextwiceborn-en.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        orghottsDaemonspew: {
            id: this.serial++,
            model: this.models.orghottsDaemonspew,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 260,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Orghotts_daemonspew.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        chaosFamiliars: {
            id: this.serial++,
            model: this.models.chaosFamiliars,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 2,
            maxSize: 8,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        chaosOgors: {
            id: this.serial++,
            model: this.models.chaosOgors,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            maxSize: 12,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        chaosTroggoths: {
            id: this.serial++,
            model: this.models.chaosTroggoths,
            factions: [this.factions.WARRIORSOFCHAOS],
            size: 3,
            maxSize: 12,
            points: 180,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        dragonOgorShaggoth: {
            id: this.serial++,
            model: this.models.dragonOgorShaggoth,
            factions: [this.factions.THUNDERSCORN],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        lordOfSlaaneshOnDaemonicMount: {
            id: this.serial++,
            model: this.models.lordOfSlaaneshOnDaemonicMount,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        sorcerer: {
            id: this.serial++,
            model: this.models.sorcerer,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Sorcerer.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Wizard",
            isLeader: () => true,
        },
        harbingerOfDecay: {
            id: this.serial++,
            model: this.models.harbingerOfDecay,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Harbinger-of-decay.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Daemon",
            isLeader: () => true,
        },
        lordOfAfflictions: {
            id: this.serial++,
            model: this.models.lordOfAfflictions,
            factions: [this.factions.NURGLEROTBRINGERS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/Downloads//ENG-Lord-of-afflictions.pdf",
            type: "hero",
            subType: "Nurgle Rotbringer Mortal Daemon",
            isLeader: () => true,
        },
        daemonPrinceOfKhorne: {
            id: this.serial++,
            model: this.models.daemonPrinceOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 160,
            maxPoints: undefined,
            warcroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-chaos-daemonprince-en.pdf",
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        aetherKhemist: {
            id: this.serial++,
            model: this.models.aetherKhemist,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        aethericNavigator: {
            id: this.serial++,
            model: this.models.aethericNavigator,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        arkanautAdmiral: {
            id: this.serial++,
            model: this.models.arkanautAdmiral,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        arkanautCompany: {
            id: this.serial++,
            model: this.models.arkanautCompany,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 10,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "Battleline",
        },
        arkanautFrigate: {
            id: this.serial++,
            model: this.models.arkanautFrigate,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 280,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Behemoth",
        },
        arkanautIronclad: {
            id: this.serial++,
            model: this.models.arkanautIronclad,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 440,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Behemoth",
        },
        brokkGrungsson: {
            id: this.serial++,
            model: this.models.brokkGrungsson,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 300,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique",
            isLeader: () => true,
        },
        endrinmaster: {
            id: this.serial++,
            model: this.models.endrinmaster,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 140,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        endrinriggers: {
            id: this.serial++,
            model: this.models.endrinriggers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        grundstokGunhauler: {
            id: this.serial++,
            model: this.models.grundstokGunhauler,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "warmachine",
            subType: "Artillery",
        },
        grundstokThunderers: {
            id: this.serial++,
            model: this.models.grundstokThunderers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 5,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        skywardens: {
            id: this.serial++,
            model: this.models.skywardens,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: undefined,
        },
        khorgosKhul: {
            id: this.serial++,
            model: this.models.khorgosKhul,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 1,
            maxSize: undefined,
            points: 200,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique",
            isLeader: () => true,
        },
        exaltedGreaterDaemonOfKhorne: {
            id: this.serial++,
            model: this.models.exaltedGreaterDaemonOfKhorne,
            factions: [this.factions.KHORNEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 640,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Khorne Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfNurgle: {
            id: this.serial++,
            model: this.models.exaltedGreaterDaemonOfNurgle,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 500,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfSlaanesh: {
            id: this.serial++,
            model: this.models.exaltedGreaterDaemonOfSlaanesh,
            factions: [this.factions.SLAANESHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 500,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Slaanesh Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        exaltedGreaterDaemonOfTzeentch: {
            id: this.serial++,
            model: this.models.exaltedGreaterDaemonOfTzeentch,
            factions: [this.factions.TZEENTCHDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 580,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Tzeentch Daemon - Behemoth",
            isLeader: () => true,
            isBehemot: () => true,
        },
        warpgnawVerminlord: {
            id: this.serial++,
            model: this.models.warpgnawVerminlord,
            factions: [this.factions.MASTERCLAN],
            size: 1,
            maxSize: undefined,
            points: 340,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Behemoth",
            isLeader: () => true,
        },
        neaveBlacktalon: {
            id: this.serial++,
            model: this.models.neaveBlacktalon,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Unique",
            isLeader: () => true,
        },
        horticulousSlimux: {
            id: this.serial++,
            model: this.models.horticulousSlimux,
            factions: [this.factions.NURGLEDAEMONS],
            size: 1,
            maxSize: undefined,
            points: 220,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nurgle Daemon - Unique",
            isLeader: () => true,
        },
        steelheartSChampions: {
            id: this.serial++,
            model: this.models.steelheartSChampions,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "One per army",
        },
        garrekSReavers: {
            id: this.serial++,
            model: this.models.garrekSReavers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            maxSize: undefined,
            points: 60,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "One per army",
        },
        lordOrdinator: {
            id: this.serial++,
            model: this.models.lordOrdinator,
            factions: [this.factions.STORMCASTETERNALS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: undefined,
            isLeader: () => true,
        },
        darkoathWarqueen: {
            id: this.serial++,
            model: this.models.darkoathWarqueen,
            factions: [this.factions.SLAVESTODARKNESS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Mortal",
            isLeader: () => true,
        },
        fungoidCaveShaman: {
            id: this.serial++,
            model: this.models.fungoidCaveShaman,
            factions: [this.factions.MOONCLANGROTS],
            size: 1,
            maxSize: undefined,
            points: 80,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Moonclan Wizard",
            isLeader: () => true,
        },
        knightOfShrouds: {
            id: this.serial++,
            model: this.models.knightOfShrouds,
            factions: [this.factions.NIGHTHAUNT],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "Nighthaunt",
            isLeader: () => true,
        },
        skritchSpiteclaw: {
            id: this.serial++,
            model: this.models.skritchSpiteclaw,
            factions: [this.factions.SKAVENVERMINUS],
            size: 1,
            maxSize: undefined,
            points: 120,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "One per army - Must include Spiteclaw's Swarm",
            isLeader: () => true,
        },
        spiteclawSSwarm: {
            id: this.serial++,
            model: this.models.spiteclawSSwarm,
            factions: [this.factions.SKAVENVERMINUS],
            size: 4,
            maxSize: undefined,
            points: 30,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "One per army - Must include Skritch Spiteclaw",
        },
        fjulGrimnir: {
            id: this.serial++,
            model: this.models.fjulGrimnir,
            factions: [this.factions.FYRESLAYERS],
            size: 1,
            maxSize: undefined,
            points: 100,
            maxPoints: undefined,
            warcroll: undefined,
            type: "hero",
            subType: "One per army - Must include The Chosen Axes",
            isLeader: () => true,
        },
        theChosenAxes: {
            id: this.serial++,
            model: this.models.theChosenAxes,
            factions: [this.factions.FYRESLAYERS],
            size: 3,
            maxSize: undefined,
            points: 40,
            maxPoints: undefined,
            warcroll: undefined,
            type: "unit",
            subType: "One per army - Must include Fjul Grimnir",
        },
    };
    
    boxes: Box[] = [];

    battalions: Battalion[] = [
        {
            id: this.serial++,
            name: "Blood Host of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Blood Hunt",
            factions: [this.factions.KHORNEDAEMONS],
            points: 130,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Bloodlords",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodthunder Stampede",
            factions: [this.factions.KHORNEDAEMONS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Charnel Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Council of Blood",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Daemon Legion of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gorethunder Cohort",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Murderhost",
            factions: [this.factions.KHORNEDAEMONS],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Reapers of Vengeance",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Skullseeker Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Aether-eater Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Changehost",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Multitudinous Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Omniscient Oracles",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Overseer's Fate-twisters",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Eternal Conflagration",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Hosts Duplicitous",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 150,
            units: []             
        },
        {
            id: this.serial++,
            name: "Warpflame Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 80,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodbound Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodbound Warhorde",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodforged",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Brass Stampede",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Dark Feast",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gore Pilgrims",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Red Headsmen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Skulltake",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Slaughterborn",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Gorechosen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 150,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Goretide",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Skullfiend Tribe",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "Alter-kin Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 70,
            units: []             
        },
        {
            id: this.serial++,
            name: "Arcanite Cabal",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Arcanite Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Cult of the Transient Form",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Skyshoal Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 130,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Pyrofane Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Tzaangor Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Witchfyre Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Wildstalker Brayherd",
            factions: [this.factions.BRAYHERD],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Tallyband of Nurgle",
            factions: [this.factions.NURGLEDAEMONS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Munificent Wanderers",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Nurgle's Menagerie",
            factions: [this.factions.NURGLEDAEMONS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Thricefold Befoulment",
            factions: [this.factions.NURGLEDAEMONS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Affliction Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Blessed Sons",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Blight Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Plague Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Thrall Warhost",
            factions: [this.factions.DARKLINGCOVENS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodwrack Sisterhood",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ebondrake Warhost",
            factions: [this.factions.ORDERSERPENTIS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Realm Reavers",
            factions: [this.factions.SCOURGEPRIVATEERS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Legion of Death",
            factions: [this.factions.DEATHRATTLE],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Castellans of the Crimson Keep",
            factions: [this.factions.SOULBLIGHT],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Court of Nulahmia",
            factions: [this.factions.SOULBLIGHT],
            points: 70,
            units: []             
        },
        {
            id: this.serial++,
            name: "Deathmarch",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Lords of Sacrament",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 70,
            units: []             
        },
        {
            id: this.serial++,
            name: "Nightfall Pack",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "The First Cohort",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Abattoir",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Attendants at Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        {
            id: this.serial++,
            name: "Deadwatch",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 210,
            units: []             
        },
        {
            id: this.serial++,
            name: "Flesh-eater Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ghoul Patrol",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        {
            id: this.serial++,
            name: "King's Ghouls",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Royal Family",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Royal Menagerie",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Royal Mordants",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 70,
            units: []             
        },
        {
            id: this.serial++,
            name: "Artillery Detachment",
            factions: [this.factions.IRONWELDARSONAL],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Forge Brethren",
            factions: [this.factions.FYRESLAYERS],
            points: 130,
            units: []             
        },
        {
            id: this.serial++,
            name: "Grand Fyrd",
            factions: [this.factions.FYRESLAYERS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Greyfyrd Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Vostarg Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "Grudgebound War Throng",
            factions: [this.factions.DISPOSSESSED],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Lords of the Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Warrior Kinband",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Freeguild Regiment",
            factions: [this.factions.FREEPEOPLES],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Pilgrimage of Wrath",
            factions: [this.factions.DEVOTEDOFSIGMAR],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "War Council",
            factions: [this.factions.COLLEGIATEARCANE],
            points: 250,
            units: []             
        },
        {
            id: this.serial++,
            name: "Dragonlord Host",
            factions: [this.factions.ORDERDRACONIS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Spyreheart Warhost",
            factions: [this.factions.PHOENIXTEMPLE],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Blackshard Warhost",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Hashut's Wrath Artillery Train",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Eternal Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        {
            id: this.serial++,
            name: "Dracothion's Tail",
            factions: [this.factions.SERAPHON],
            points: 60,
            units: []             
        },
        {
            id: this.serial++,
            name: "Fangs of Sotek",
            factions: [this.factions.SERAPHON],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Firelance Starhost",
            factions: [this.factions.SERAPHON],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Heavenswatch Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Shadowstrike Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        {
            id: this.serial++,
            name: "Starbeast Constellation",
            factions: [this.factions.SERAPHON],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Sunclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        {
            id: this.serial++,
            name: "Thunderquake Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        {
            id: this.serial++,
            name: "Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Braggoth's Beast Hammer",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 260,
            units: []             
        },
        {
            id: this.serial++,
            name: "Eurlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Jorlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "Olwyr Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Skal",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Svard Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Torrbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bonegrinz Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Brutal Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Drakkfoot Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Icebone Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Kop Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Kunnin' Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Savage Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 60,
            units: []             
        },
        {
            id: this.serial++,
            name: "Snaga Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Teef Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ardfist",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodtoofs",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Brawl",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gorefist",
            factions: [this.factions.IRONJAWZ],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ironfist",
            factions: [this.factions.IRONJAWZ],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ironsunz",
            factions: [this.factions.IRONJAWZ],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "Weirdfist",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Waystone Pathfinders",
            factions: [this.factions.WANDERERS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Clan Skryre",
            factions: [this.factions.SKAVENSKRYRE],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Congregation of Filth",
            factions: [this.factions.SKAVENPESTILENS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Foulrain Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Plaguesmog Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Virulent Procession",
            factions: [this.factions.SKAVENPESTILENS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Aetherstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Anvils of the Heldenhammer Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Astral Templars Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Celestial Hunting Pack",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Celestial Vindicators Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Celestial Warbringers Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Devastation Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Drakesworn Temple",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Extremis Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        {
            id: this.serial++,
            name: "Hallowed Knights Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Hammers of Sigmar Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Hammerstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Knights Excelsior Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Lightning Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Lords of the Storm",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Storm Heralds",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        {
            id: this.serial++,
            name: "Storm Vortex Garrison",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Tempest Lords Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Skyborne Slayers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Thunderhead Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Thunderwave Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Vanguard Angelos Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Vanguard Auxiliary Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Vanguard Justicar Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Vanguard Wing",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Warrior Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        {
            id: this.serial++,
            name: "Dreadwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Forest Folk",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Forest Spirit Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Free Spirits",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gnarlroot Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Harvestboon Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Heartwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Household",
            factions: [this.factions.SYLVANETH],
            points: 70,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ironbark Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Lords of the Clan",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        {
            id: this.serial++,
            name: "Oakenbrow Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Outcasts",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        {
            id: this.serial++,
            name: "Sylvaneth Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Guardians of Alarielle",
            factions: [this.factions.SYLVANETH],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Winterleaf Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Sons of the Maggot Lord",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 120,
            units: []             
        },
        {
            id: this.serial++,
            name: "The Leaping Pox",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 80,
            units: []             
        },
        {
            id: this.serial++,
            name: "Archaon's Grand Host",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Bloodmarked Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Fatesworn Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Godsworn Champions of Ruin",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Godswrath Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Overlords of Chaos",
            factions: [this.factions.EVERCHOSEN],
            points: 220,
            units: []             
        },
        {
            id: this.serial++,
            name: "Plaguetouched Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Pleasurebound Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        {
            id: this.serial++,
            name: "Ruinbringer Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Iron Sky Squadron",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 180,
            units: []             
        },
        {
            id: this.serial++,
            name: "Iron Sky Command",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 140,
            units: []             
        },
        {
            id: this.serial++,
            name: "Grundstok Escort Wing",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 200,
            units: []             
        },
        {
            id: this.serial++,
            name: "Grand Armada",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Arkhspark Voltik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gascloud Chokelung",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        {
            id: this.serial++,
            name: "Gautfyre Skorch",
            factions: [this.factions.SKAVENSKRYRE],
            points: 150,
            units: []             
        },
        {
            id: this.serial++,
            name: "Rattlegauge Warplock",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        {
            id: this.serial++,
            name: "Whyrlblade Threshik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        {
            id: this.serial++,
            name: "Blacktalon's Shadowhammers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        {
            id: this.serial++,
            name: "Fecund Rituculturalists",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
    ]
}
