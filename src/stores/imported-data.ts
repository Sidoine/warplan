import { Box, DataStore, GrandAlliance } from "./units";

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
            points: 100,
            type: "hero",
            subType: undefined,
            wounds: 5,
            isLeader: () => true,
        },
        beastlordOnChariot: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
        bloodwrackMedusae: {
            id: this.serial++,
            model: this.models.bloodwrackMedusae,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 120,
            type: "unit",
            subType: "Daughters of Khaine",
            wounds: 5,
        },
        deathHag: {
            id: this.serial++,
            model: this.models.deathHag,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 60,
            type: "hero",
            subType: "Daughters of Khaine",
            wounds: 5,
            weaponOptions: [{ options: [{ name: "Deathsword", id: "deathsword" },{ name: "Witch Brew", id: "witchBrew" }] }],
            isLeader: () => true,
        },
        doomfireWarlocks: {
            id: this.serial++,
            model: this.models.doomfireWarlocks,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 5,
            points: 160,
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            wounds: 2,
            maxSize: 20,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-doomfire-warlocks-en.pdf",
            isBattleline: () => true,
        },
        sistersOfSlaughter: {
            id: this.serial++,
            model: this.models.sistersOfSlaughter,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            points: 140,
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 360,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-sisters-slaughter-en.pdf",
            isBattleline: () => true,
        },
        bloodwrackShrine: {
            id: this.serial++,
            model: this.models.bloodwrackShrine,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 140,
            type: "unit",
            subType: "Daughters of Khaine - Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-bloodwrack-shrine-en.pdf",
            isBehemot: () => true,
        },
        cauldronOfBlood: {
            id: this.serial++,
            model: this.models.cauldronOfBlood,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 1,
            points: 200,
            type: "hero",
            subType: "Daughters of Khaine - Behemoth",
            wounds: 13,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-caludron-blood-en.pdf",
            weaponOptions: [{ options: [{ name: "Deathsword", id: "deathsword" },{ name: "Witch Brew", id: "witchBrew" }] }],
            isLeader: () => true,
            isBehemot: () => true,
        },
        witchAelves: {
            id: this.serial++,
            model: this.models.witchAelves,
            factions: [this.factions.DAUGHTERSOFKHAINE],
            size: 10,
            points: 100,
            type: "unit",
            subType: "Daughters of Khaine - Daughters of Khaine Battleline",
            wounds: 1,
            maxSize: 30,
            maxPoints: 270,
            warscroll: "https://www.games-workshop.com/resources/PDF/AoS_Warscrolls/aos-warscroll-witch-aelves-en.pdf",
            isBattleline: () => true,
        },
        drakespawnChariots: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
        auricRunefatherOnMagmadroth: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.flamespyrePhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "monster",
            subType: undefined,
            wounds: 12,
        },
        anointedOfAsuryanOnFrostheartPhoenix: {
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.frostheartPhoenix,
            factions: [this.factions.PHOENIXTEMPLE],
            size: 1,
            points: 240,
            type: "monster",
            subType: undefined,
            wounds: 12,
        },
        archmage: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.gorgers,
            factions: [this.factions.GUTBUSTERS],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Gutbusters",
            wounds: 5,
        },
        grots: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.maniakWeirdnob,
            factions: [this.factions.BONESPLITTERZ],
            size: 1,
            points: 120,
            type: "hero",
            subType: "Bonesplitterz",
            wounds: 6,
            isLeader: () => true,
        },
        savageBigBoss: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.arachnarokSpider,
            factions: [this.factions.SPIDERFANGGROTS],
            size: 1,
            points: 280,
            type: "monster",
            subType: "Spiderfang Grots",
            wounds: 14,
        },
        arachnarokSpiderWithGrotShaman: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.poisonedWindMortarWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 60,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        ratlingGunWeaponTeam: {
            id: this.serial++,
            model: this.models.ratlingGunWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warlockEngineer: {
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.warpGrinderWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 100,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warpfireThrowerWeaponTeam: {
            id: this.serial++,
            model: this.models.warpfireThrowerWeaponTeam,
            factions: [this.factions.SKAVENSKRYRE],
            size: 1,
            points: 70,
            type: "unit",
            subType: "Skryre",
            wounds: 3,
        },
        warpLightningCannon: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.nightmaw,
            factions: [this.factions.TAMURKHANSHORDE],
            size: 1,
            points: 80,
            type: "unit",
            subType: "Unique",
            wounds: 6,
        },
        daemonPlagueToadsOfNurgle: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.endrinriggers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            points: 120,
            type: "unit",
            subType: undefined,
            wounds: 2,
        },
        grundstokGunhauler: {
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.grundstokThunderers,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 5,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 1,
        },
        skywardens: {
            id: this.serial++,
            model: this.models.skywardens,
            factions: [this.factions.KHARADRONOVERLORDS],
            size: 3,
            points: 100,
            type: "unit",
            subType: undefined,
            wounds: 2,
        },
        khorgosKhul: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.steelheartSChampions,
            factions: [this.factions.STORMCASTETERNALS],
            size: 3,
            points: 100,
            type: "unit",
            subType: "One per army",
            wounds: 2,
        },
        garrekSReavers: {
            id: this.serial++,
            model: this.models.garrekSReavers,
            factions: [this.factions.KHORNEBLOODBOUND],
            size: 5,
            points: 60,
            type: "unit",
            subType: "One per army",
            wounds: 1,
        },
        lordOrdinator: {
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.spiteclawSSwarm,
            factions: [this.factions.SKAVENVERMINUS],
            size: 4,
            points: 30,
            type: "unit",
            subType: "One per army - Must include Skritch Spiteclaw",
            wounds: 1,
        },
        fjulGrimnir: {
            id: this.serial++,
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
            id: this.serial++,
            model: this.models.theChosenAxes,
            factions: [this.factions.FYRESLAYERS],
            size: 3,
            points: 40,
            type: "unit",
            subType: "One per army - Must include Fjul Grimnir",
            wounds: 1,
        },
    };
    
    boxes: Box[] = [];

    battalions = {
        bloodHostOfKhorne: {
            id: this.serial++,
            name: "Blood Host of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 220,
            units: []             
        },
        bloodHunt: {
            id: this.serial++,
            name: "Blood Hunt",
            factions: [this.factions.KHORNEDAEMONS],
            points: 130,
            units: []             
        },
        theBloodlords: {
            id: this.serial++,
            name: "The Bloodlords",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        bloodthunderStampede: {
            id: this.serial++,
            name: "Bloodthunder Stampede",
            factions: [this.factions.KHORNEDAEMONS],
            points: 180,
            units: []             
        },
        charnelHost: {
            id: this.serial++,
            name: "Charnel Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        councilOfBlood: {
            id: this.serial++,
            name: "Council of Blood",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        daemonLegionOfKhorne: {
            id: this.serial++,
            name: "Daemon Legion of Khorne",
            factions: [this.factions.KHORNEDAEMONS],
            points: 160,
            units: []             
        },
        gorethunderCohort: {
            id: this.serial++,
            name: "Gorethunder Cohort",
            factions: [this.factions.KHORNEDAEMONS],
            points: 110,
            units: []             
        },
        murderhost: {
            id: this.serial++,
            name: "Murderhost",
            factions: [this.factions.KHORNEDAEMONS],
            points: 120,
            units: []             
        },
        theReapersOfVengeance: {
            id: this.serial++,
            name: "The Reapers of Vengeance",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        skullseekerHost: {
            id: this.serial++,
            name: "Skullseeker Host",
            factions: [this.factions.KHORNEDAEMONS],
            points: 140,
            units: []             
        },
        aetherEaterHost: {
            id: this.serial++,
            name: "Aether-eater Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        changehost: {
            id: this.serial++,
            name: "Changehost",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 160,
            units: []             
        },
        multitudinousHost: {
            id: this.serial++,
            name: "Multitudinous Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 200,
            units: []             
        },
        omniscientOracles: {
            id: this.serial++,
            name: "Omniscient Oracles",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        overseerSFateTwisters: {
            id: this.serial++,
            name: "Overseer's Fate-twisters",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 110,
            units: []             
        },
        theEternalConflagration: {
            id: this.serial++,
            name: "The Eternal Conflagration",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 140,
            units: []             
        },
        theHostsDuplicitous: {
            id: this.serial++,
            name: "The Hosts Duplicitous",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 150,
            units: []             
        },
        warpflameHost: {
            id: this.serial++,
            name: "Warpflame Host",
            factions: [this.factions.TZEENTCHDAEMONS],
            points: 80,
            units: []             
        },
        bloodboundWarband: {
            id: this.serial++,
            name: "Bloodbound Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        bloodboundWarhorde: {
            id: this.serial++,
            name: "Bloodbound Warhorde",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 220,
            units: []             
        },
        bloodforged: {
            id: this.serial++,
            name: "Bloodforged",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        brassStampede: {
            id: this.serial++,
            name: "Brass Stampede",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        darkFeast: {
            id: this.serial++,
            name: "Dark Feast",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        gorePilgrims: {
            id: this.serial++,
            name: "Gore Pilgrims",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        redHeadsmen: {
            id: this.serial++,
            name: "Red Headsmen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 160,
            units: []             
        },
        skulltake: {
            id: this.serial++,
            name: "Skulltake",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 200,
            units: []             
        },
        slaughterborn: {
            id: this.serial++,
            name: "Slaughterborn",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 180,
            units: []             
        },
        theGorechosen: {
            id: this.serial++,
            name: "The Gorechosen",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 150,
            units: []             
        },
        theGoretide: {
            id: this.serial++,
            name: "The Goretide",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 140,
            units: []             
        },
        theSkullfiendTribe: {
            id: this.serial++,
            name: "The Skullfiend Tribe",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 120,
            units: []             
        },
        alterKinCoven: {
            id: this.serial++,
            name: "Alter-kin Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 70,
            units: []             
        },
        arcaniteCabal: {
            id: this.serial++,
            name: "Arcanite Cabal",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 100,
            units: []             
        },
        arcaniteCult: {
            id: this.serial++,
            name: "Arcanite Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        cultOfTheTransientForm: {
            id: this.serial++,
            name: "Cult of the Transient Form",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 160,
            units: []             
        },
        skyshoalCoven: {
            id: this.serial++,
            name: "Skyshoal Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 130,
            units: []             
        },
        thePyrofaneCult: {
            id: this.serial++,
            name: "The Pyrofane Cult",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 180,
            units: []             
        },
        tzaangorCoven: {
            id: this.serial++,
            name: "Tzaangor Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 90,
            units: []             
        },
        witchfyreCoven: {
            id: this.serial++,
            name: "Witchfyre Coven",
            factions: [this.factions.TZEENTCHARCHANITES],
            points: 110,
            units: []             
        },
        wildstalkerBrayherd: {
            id: this.serial++,
            name: "Wildstalker Brayherd",
            factions: [this.factions.BRAYHERD],
            points: 240,
            units: []             
        },
        tallybandOfNurgle: {
            id: this.serial++,
            name: "Tallyband of Nurgle",
            factions: [this.factions.NURGLEDAEMONS],
            points: 220,
            units: []             
        },
        theMunificentWanderers: {
            id: this.serial++,
            name: "The Munificent Wanderers",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
        nurgleSMenagerie: {
            id: this.serial++,
            name: "Nurgle's Menagerie",
            factions: [this.factions.NURGLEDAEMONS],
            points: 240,
            units: []             
        },
        thricefoldBefoulment: {
            id: this.serial++,
            name: "Thricefold Befoulment",
            factions: [this.factions.NURGLEDAEMONS],
            points: 160,
            units: []             
        },
        afflictionCyst: {
            id: this.serial++,
            name: "Affliction Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        theBlessedSons: {
            id: this.serial++,
            name: "The Blessed Sons",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 200,
            units: []             
        },
        blightCyst: {
            id: this.serial++,
            name: "Blight Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        plagueCyst: {
            id: this.serial++,
            name: "Plague Cyst",
            factions: [this.factions.NURGLEROTBRINGERS],
            points: 220,
            units: []             
        },
        thrallWarhost: {
            id: this.serial++,
            name: "Thrall Warhost",
            factions: [this.factions.DARKLINGCOVENS],
            points: 180,
            units: []             
        },
        bloodwrackSisterhood: {
            id: this.serial++,
            name: "Bloodwrack Sisterhood",
            factions: [this.factions.DAUGHTERSOFKHAINE],
            points: 140,
            units: []             
        },
        ebondrakeWarhost: {
            id: this.serial++,
            name: "Ebondrake Warhost",
            factions: [this.factions.ORDERSERPENTIS],
            points: 160,
            units: []             
        },
        realmReavers: {
            id: this.serial++,
            name: "Realm Reavers",
            factions: [this.factions.SCOURGEPRIVATEERS],
            points: 180,
            units: []             
        },
        legionOfDeath: {
            id: this.serial++,
            name: "Legion of Death",
            factions: [this.factions.DEATHRATTLE],
            points: 110,
            units: []             
        },
        castellansOfTheCrimsonKeep: {
            id: this.serial++,
            name: "Castellans of the Crimson Keep",
            factions: [this.factions.SOULBLIGHT],
            points: 90,
            units: []             
        },
        courtOfNulahmia: {
            id: this.serial++,
            name: "Court of Nulahmia",
            factions: [this.factions.SOULBLIGHT],
            points: 70,
            units: []             
        },
        deathmarch: {
            id: this.serial++,
            name: "Deathmarch",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 110,
            units: []             
        },
        lordsOfSacrament: {
            id: this.serial++,
            name: "Lords of Sacrament",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 70,
            units: []             
        },
        nightfallPack: {
            id: this.serial++,
            name: "Nightfall Pack",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 140,
            units: []             
        },
        theFirstCohort: {
            id: this.serial++,
            name: "The First Cohort",
            factions: [this.factions.LEGIONSOFNAGASH],
            points: 160,
            units: []             
        },
        abattoir: {
            id: this.serial++,
            name: "Abattoir",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        attendantsAtCourt: {
            id: this.serial++,
            name: "Attendants at Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        deadwatch: {
            id: this.serial++,
            name: "Deadwatch",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 210,
            units: []             
        },
        fleshEaterCourt: {
            id: this.serial++,
            name: "Flesh-eater Court",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 120,
            units: []             
        },
        ghoulPatrol: {
            id: this.serial++,
            name: "Ghoul Patrol",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 150,
            units: []             
        },
        kingSGhouls: {
            id: this.serial++,
            name: "King's Ghouls",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 90,
            units: []             
        },
        royalFamily: {
            id: this.serial++,
            name: "Royal Family",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        royalMenagerie: {
            id: this.serial++,
            name: "Royal Menagerie",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 110,
            units: []             
        },
        royalMordants: {
            id: this.serial++,
            name: "Royal Mordants",
            factions: [this.factions.FLESHEATERCOURTS],
            points: 70,
            units: []             
        },
        artilleryDetachment: {
            id: this.serial++,
            name: "Artillery Detachment",
            factions: [this.factions.IRONWELDARSONAL],
            points: 140,
            units: []             
        },
        forgeBrethren: {
            id: this.serial++,
            name: "Forge Brethren",
            factions: [this.factions.FYRESLAYERS],
            points: 130,
            units: []             
        },
        grandFyrd: {
            id: this.serial++,
            name: "Grand Fyrd",
            factions: [this.factions.FYRESLAYERS],
            points: 180,
            units: []             
        },
        greyfyrdLodge: {
            id: this.serial++,
            name: "Greyfyrd Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 100,
            units: []             
        },
        vostargLodge: {
            id: this.serial++,
            name: "Vostarg Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 120,
            units: []             
        },
        grudgeboundWarThrong: {
            id: this.serial++,
            name: "Grudgebound War Throng",
            factions: [this.factions.DISPOSSESSED],
            points: 160,
            units: []             
        },
        lordsOfTheLodge: {
            id: this.serial++,
            name: "Lords of the Lodge",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        warriorKinband: {
            id: this.serial++,
            name: "Warrior Kinband",
            factions: [this.factions.FYRESLAYERS],
            points: 90,
            units: []             
        },
        freeguildRegiment: {
            id: this.serial++,
            name: "Freeguild Regiment",
            factions: [this.factions.FREEPEOPLES],
            points: 200,
            units: []             
        },
        pilgrimageOfWrath: {
            id: this.serial++,
            name: "Pilgrimage of Wrath",
            factions: [this.factions.DEVOTEDOFSIGMAR],
            points: 160,
            units: []             
        },
        warCouncil: {
            id: this.serial++,
            name: "War Council",
            factions: [this.factions.COLLEGIATEARCANE],
            points: 250,
            units: []             
        },
        dragonlordHost: {
            id: this.serial++,
            name: "Dragonlord Host",
            factions: [this.factions.ORDERDRACONIS],
            points: 180,
            units: []             
        },
        spyreheartWarhost: {
            id: this.serial++,
            name: "Spyreheart Warhost",
            factions: [this.factions.PHOENIXTEMPLE],
            points: 200,
            units: []             
        },
        blackshardWarhost: {
            id: this.serial++,
            name: "Blackshard Warhost",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 180,
            units: []             
        },
        hashutSWrathArtilleryTrain: {
            id: this.serial++,
            name: "Hashut's Wrath Artillery Train",
            factions: [this.factions.LEGIONOFAZGORH],
            points: 200,
            units: []             
        },
        bloodclawStarhost: {
            id: this.serial++,
            name: "Bloodclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        eternalStarhost: {
            id: this.serial++,
            name: "Eternal Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        dracothionSTail: {
            id: this.serial++,
            name: "Dracothion's Tail",
            factions: [this.factions.SERAPHON],
            points: 60,
            units: []             
        },
        fangsOfSotek: {
            id: this.serial++,
            name: "Fangs of Sotek",
            factions: [this.factions.SERAPHON],
            points: 100,
            units: []             
        },
        firelanceStarhost: {
            id: this.serial++,
            name: "Firelance Starhost",
            factions: [this.factions.SERAPHON],
            points: 110,
            units: []             
        },
        heavenswatchStarhost: {
            id: this.serial++,
            name: "Heavenswatch Starhost",
            factions: [this.factions.SERAPHON],
            points: 200,
            units: []             
        },
        shadowstrikeStarhost: {
            id: this.serial++,
            name: "Shadowstrike Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        starbeastConstellation: {
            id: this.serial++,
            name: "Starbeast Constellation",
            factions: [this.factions.SERAPHON],
            points: 220,
            units: []             
        },
        sunclawStarhost: {
            id: this.serial++,
            name: "Sunclaw Starhost",
            factions: [this.factions.SERAPHON],
            points: 130,
            units: []             
        },
        thunderquakeStarhost: {
            id: this.serial++,
            name: "Thunderquake Starhost",
            factions: [this.factions.SERAPHON],
            points: 170,
            units: []             
        },
        alfrostun: {
            id: this.serial++,
            name: "Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 140,
            units: []             
        },
        braggothSBeastHammer: {
            id: this.serial++,
            name: "Braggoth's Beast Hammer",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 260,
            units: []             
        },
        eurlbad: {
            id: this.serial++,
            name: "Eurlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        jorlbad: {
            id: this.serial++,
            name: "Jorlbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 120,
            units: []             
        },
        olwyrAlfrostun: {
            id: this.serial++,
            name: "Olwyr Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 220,
            units: []             
        },
        skal: {
            id: this.serial++,
            name: "Skal",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 110,
            units: []             
        },
        svardAlfrostun: {
            id: this.serial++,
            name: "Svard Alfrostun",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 180,
            units: []             
        },
        torrbad: {
            id: this.serial++,
            name: "Torrbad",
            factions: [this.factions.BEASTCLAWRAIDERS],
            points: 160,
            units: []             
        },
        bonegrinzWarclan: {
            id: this.serial++,
            name: "Bonegrinz Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        brutalRukk: {
            id: this.serial++,
            name: "Brutal Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        drakkfootWarclan: {
            id: this.serial++,
            name: "Drakkfoot Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        iceboneWarclan: {
            id: this.serial++,
            name: "Icebone Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        kopRukk: {
            id: this.serial++,
            name: "Kop Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 200,
            units: []             
        },
        kunninRukk: {
            id: this.serial++,
            name: "Kunnin' Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 160,
            units: []             
        },
        savageWarclan: {
            id: this.serial++,
            name: "Savage Warclan",
            factions: [this.factions.BONESPLITTERZ],
            points: 60,
            units: []             
        },
        snagaRukk: {
            id: this.serial++,
            name: "Snaga Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 140,
            units: []             
        },
        teefRukk: {
            id: this.serial++,
            name: "Teef Rukk",
            factions: [this.factions.BONESPLITTERZ],
            points: 90,
            units: []             
        },
        ardfist: {
            id: this.serial++,
            name: "Ardfist",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        bloodtoofs: {
            id: this.serial++,
            name: "Bloodtoofs",
            factions: [this.factions.IRONJAWZ],
            points: 140,
            units: []             
        },
        brawl: {
            id: this.serial++,
            name: "Brawl",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        gorefist: {
            id: this.serial++,
            name: "Gorefist",
            factions: [this.factions.IRONJAWZ],
            points: 220,
            units: []             
        },
        ironfist: {
            id: this.serial++,
            name: "Ironfist",
            factions: [this.factions.IRONJAWZ],
            points: 160,
            units: []             
        },
        ironsunz: {
            id: this.serial++,
            name: "Ironsunz",
            factions: [this.factions.IRONJAWZ],
            points: 120,
            units: []             
        },
        weirdfist: {
            id: this.serial++,
            name: "Weirdfist",
            factions: [this.factions.IRONJAWZ],
            points: 200,
            units: []             
        },
        waystonePathfinders: {
            id: this.serial++,
            name: "Waystone Pathfinders",
            factions: [this.factions.WANDERERS],
            points: 240,
            units: []             
        },
        clanSkryre: {
            id: this.serial++,
            name: "Clan Skryre",
            factions: [this.factions.SKAVENSKRYRE],
            points: 100,
            units: []             
        },
        congregationOfFilth: {
            id: this.serial++,
            name: "Congregation of Filth",
            factions: [this.factions.SKAVENPESTILENS],
            points: 140,
            units: []             
        },
        foulrainCongregation: {
            id: this.serial++,
            name: "Foulrain Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 200,
            units: []             
        },
        plaguesmogCongregation: {
            id: this.serial++,
            name: "Plaguesmog Congregation",
            factions: [this.factions.SKAVENPESTILENS],
            points: 160,
            units: []             
        },
        virulentProcession: {
            id: this.serial++,
            name: "Virulent Procession",
            factions: [this.factions.SKAVENPESTILENS],
            points: 180,
            units: []             
        },
        aetherstrikeForce: {
            id: this.serial++,
            name: "Aetherstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        anvilsOfTheHeldenhammerWarriorChamber: {
            id: this.serial++,
            name: "Anvils of the Heldenhammer Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        astralTemplarsExemplarChamber: {
            id: this.serial++,
            name: "Astral Templars Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialHuntingPack: {
            id: this.serial++,
            name: "Celestial Hunting Pack",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialVindicatorsWarriorChamber: {
            id: this.serial++,
            name: "Celestial Vindicators Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        celestialWarbringersHarbingerChamber: {
            id: this.serial++,
            name: "Celestial Warbringers Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        devastationBrotherhood: {
            id: this.serial++,
            name: "Devastation Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        drakeswornTemple: {
            id: this.serial++,
            name: "Drakesworn Temple",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        exemplarChamber: {
            id: this.serial++,
            name: "Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        extremisChamber: {
            id: this.serial++,
            name: "Extremis Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        hallowedKnightsWarriorChamber: {
            id: this.serial++,
            name: "Hallowed Knights Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        hammersOfSigmarWarriorChamber: {
            id: this.serial++,
            name: "Hammers of Sigmar Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        hammerstrikeForce: {
            id: this.serial++,
            name: "Hammerstrike Force",
            factions: [this.factions.STORMCASTETERNALS],
            points: 220,
            units: []             
        },
        harbingerChamber: {
            id: this.serial++,
            name: "Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        knightsExcelsiorExemplarChamber: {
            id: this.serial++,
            name: "Knights Excelsior Exemplar Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        lightningEchelon: {
            id: this.serial++,
            name: "Lightning Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        lordsOfTheStorm: {
            id: this.serial++,
            name: "Lords of the Storm",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        stormHeralds: {
            id: this.serial++,
            name: "Storm Heralds",
            factions: [this.factions.STORMCASTETERNALS],
            points: 260,
            units: []             
        },
        stormVortexGarrison: {
            id: this.serial++,
            name: "Storm Vortex Garrison",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        tempestLordsHarbingerChamber: {
            id: this.serial++,
            name: "Tempest Lords Harbinger Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        theSkyborneSlayers: {
            id: this.serial++,
            name: "The Skyborne Slayers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        thunderheadBrotherhood: {
            id: this.serial++,
            name: "Thunderhead Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 180,
            units: []             
        },
        thunderwaveEchelon: {
            id: this.serial++,
            name: "Thunderwave Echelon",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        vanguardAngelosConclave: {
            id: this.serial++,
            name: "Vanguard Angelos Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        vanguardAuxiliaryChamber: {
            id: this.serial++,
            name: "Vanguard Auxiliary Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        vanguardJusticarConclave: {
            id: this.serial++,
            name: "Vanguard Justicar Conclave",
            factions: [this.factions.STORMCASTETERNALS],
            points: 110,
            units: []             
        },
        vanguardWing: {
            id: this.serial++,
            name: "Vanguard Wing",
            factions: [this.factions.STORMCASTETERNALS],
            points: 200,
            units: []             
        },
        warriorBrotherhood: {
            id: this.serial++,
            name: "Warrior Brotherhood",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        warriorChamber: {
            id: this.serial++,
            name: "Warrior Chamber",
            factions: [this.factions.STORMCASTETERNALS],
            points: 240,
            units: []             
        },
        dreadwoodWargrove: {
            id: this.serial++,
            name: "Dreadwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        forestFolk: {
            id: this.serial++,
            name: "Forest Folk",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        forestSpiritWargrove: {
            id: this.serial++,
            name: "Forest Spirit Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        freeSpirits: {
            id: this.serial++,
            name: "Free Spirits",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        gnarlrootWargrove: {
            id: this.serial++,
            name: "Gnarlroot Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        harvestboonWargrove: {
            id: this.serial++,
            name: "Harvestboon Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        heartwoodWargrove: {
            id: this.serial++,
            name: "Heartwood Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        household: {
            id: this.serial++,
            name: "Household",
            factions: [this.factions.SYLVANETH],
            points: 70,
            units: []             
        },
        ironbarkWargrove: {
            id: this.serial++,
            name: "Ironbark Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 160,
            units: []             
        },
        lordsOfTheClan: {
            id: this.serial++,
            name: "Lords of the Clan",
            factions: [this.factions.SYLVANETH],
            points: 110,
            units: []             
        },
        oakenbrowWargrove: {
            id: this.serial++,
            name: "Oakenbrow Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 180,
            units: []             
        },
        outcasts: {
            id: this.serial++,
            name: "Outcasts",
            factions: [this.factions.SYLVANETH],
            points: 90,
            units: []             
        },
        sylvanethWargrove: {
            id: this.serial++,
            name: "Sylvaneth Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        theGuardiansOfAlarielle: {
            id: this.serial++,
            name: "The Guardians of Alarielle",
            factions: [this.factions.SYLVANETH],
            points: 220,
            units: []             
        },
        winterleafWargrove: {
            id: this.serial++,
            name: "Winterleaf Wargrove",
            factions: [this.factions.SYLVANETH],
            points: 200,
            units: []             
        },
        sonsOfTheMaggotLord: {
            id: this.serial++,
            name: "Sons of the Maggot Lord",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 120,
            units: []             
        },
        theLeapingPox: {
            id: this.serial++,
            name: "The Leaping Pox",
            factions: [this.factions.TAMURKHANSHORDE],
            points: 80,
            units: []             
        },
        archaonSGrandHost: {
            id: this.serial++,
            name: "Archaon's Grand Host",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        bloodmarkedWarband: {
            id: this.serial++,
            name: "Bloodmarked Warband",
            factions: [this.factions.KHORNEBLOODBOUND],
            points: 100,
            units: []             
        },
        fateswornWarband: {
            id: this.serial++,
            name: "Fatesworn Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        godswornChampionsOfRuin: {
            id: this.serial++,
            name: "Godsworn Champions of Ruin",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 160,
            units: []             
        },
        godswrathWarband: {
            id: this.serial++,
            name: "Godswrath Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 140,
            units: []             
        },
        overlordsOfChaos: {
            id: this.serial++,
            name: "Overlords of Chaos",
            factions: [this.factions.EVERCHOSEN],
            points: 220,
            units: []             
        },
        plaguetouchedWarband: {
            id: this.serial++,
            name: "Plaguetouched Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        pleasureboundWarband: {
            id: this.serial++,
            name: "Pleasurebound Warband",
            factions: [this.factions.EVERCHOSEN],
            points: 100,
            units: []             
        },
        ruinbringerWarband: {
            id: this.serial++,
            name: "Ruinbringer Warband",
            factions: [this.factions.SLAVESTODARKNESS],
            points: 180,
            units: []             
        },
        ironSkySquadron: {
            id: this.serial++,
            name: "Iron Sky Squadron",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 180,
            units: []             
        },
        ironSkyCommand: {
            id: this.serial++,
            name: "Iron Sky Command",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 140,
            units: []             
        },
        grundstokEscortWing: {
            id: this.serial++,
            name: "Grundstok Escort Wing",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 200,
            units: []             
        },
        grandArmada: {
            id: this.serial++,
            name: "Grand Armada",
            factions: [this.factions.KHARADRONOVERLORDS],
            points: 160,
            units: []             
        },
        arkhsparkVoltik: {
            id: this.serial++,
            name: "Arkhspark Voltik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        gascloudChokelung: {
            id: this.serial++,
            name: "Gascloud Chokelung",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        gautfyreSkorch: {
            id: this.serial++,
            name: "Gautfyre Skorch",
            factions: [this.factions.SKAVENSKRYRE],
            points: 150,
            units: []             
        },
        rattlegaugeWarplock: {
            id: this.serial++,
            name: "Rattlegauge Warplock",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        whyrlbladeThreshik: {
            id: this.serial++,
            name: "Whyrlblade Threshik",
            factions: [this.factions.SKAVENSKRYRE],
            points: 50,
            units: []             
        },
        blacktalonSShadowhammers: {
            id: this.serial++,
            name: "Blacktalon's Shadowhammers",
            factions: [this.factions.STORMCASTETERNALS],
            points: 160,
            units: []             
        },
        fecundRituculturalists: {
            id: this.serial++,
            name: "Fecund Rituculturalists",
            factions: [this.factions.NURGLEDAEMONS],
            points: 180,
            units: []             
        },
    }
}
