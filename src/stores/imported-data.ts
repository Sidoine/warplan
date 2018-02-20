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
        packmaster: {
            id: this.serial++,
            name: "Packmaster"
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
        daemonPrince: {
            id: this.serial++,
            name: "Daemon Prince"
        },
        beLakorChaosDaemonPrince: {
            id: this.serial++,
            name: "Be'Lakor, Chaos Daemon Prince"
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
        freeguildGeneral: {
            id: this.serial++,
            name: "Freeguild General"
        },
        freeguildGeneralOnGriffon: {
            id: this.serial++,
            name: "Freeguild General On Griffon"
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
        dragonlordHost: {
            id: this.serial++,
            name: "Dragonlord Host"
        },
        dreadlordOnBlackDragon: {
            id: this.serial++,
            name: "Dreadlord On Black Dragon"
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
        tyrant: {
            id: this.serial++,
            name: "Tyrant"
        },
        butcher: {
            id: this.serial++,
            name: "Butcher"
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
        arachnarokSpiderWithGrotShaman: {
            id: this.serial++,
            name: "Arachnarok Spider With Grot Shaman"
        },
        grotBigBossOnGiganticSpider: {
            id: this.serial++,
            name: "Grot Big Boss On Gigantic Spider"
        },
        arachnarokSpider: {
            id: this.serial++,
            name: "Arachnarok Spider"
        },
        troggothHag: {
            id: this.serial++,
            name: "Troggoth Hag"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Brayherd"
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
            subType: "Brayherd"
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
            subType: "Khorne Daemon"
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
            subType: "Khorne Daemon"
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
            subType: "Khorne Daemon"
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
            subType: "Khorne Daemon"
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
            subType: "Khorne Daemon"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: "Tzeentch Daemon Wizard"
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
            subType: "Tzeentch Daemon Wizard"
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
            subType: "Tzeentch Daemon Wizard"
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
            subType: "Tzeentch Daemon Wizard - Unique "
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
            subType: "Tzeentch Daemon Wizard - Unique "
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
            subType: "Khorne - Unique Behemoth"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal"
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
            subType: "Khorne Bloodbound Mortal - Unique "
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
            subType: "Khorne Bloodbound Mortal - Unique "
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
            subType: "Khorne Bloodbound Mortal - Unique "
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
            subType: "Behemoth"
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
            subType: "Tzeentch Arcanites Daemon Wizard"
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
            subType: "Tzeentch Arcanites Mortal Daemon"
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
            subType: "Tzeentch Arcanites Mortal Daemon Wizard"
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
            subType: "Tzeentch Arcanites Mortal Wizard"
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
            subType: "Tzeentch Arcanites Mortal Wizard"
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
            subType: "Tzeentch Arcanites Mortal Wizard"
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
            subType: "Warherd"
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
            subType: "Warherd - Behemoth"
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
            subType: "Warherd - Behemoth"
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
            subType: "Artillery"
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
            subType: "Tzeentch - Behemoth"
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
            subType: "Khorne - Behemoth"
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
            subType: "Chaos Daemon - Behemoth"
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
            subType: "Chaos Daemon - Behemoth"
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
            subType: "Chaos Daemon - Unique Behemoth"
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
            subType: "Slaanesh"
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
            subType: "Slaanesh"
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
            subType: "Slaanesh"
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
            subType: "Slaanesh - Behemoth"
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
            subType: "Slaanesh - Unique "
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
            subType: "Nurgle Daemon Wizard"
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
            subType: "Nurgle Daemon"
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
            subType: "Nurgle Daemon"
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
            subType: "Nurgle Daemon - Behemoth"
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
            subType: "Nurgle Daemon Wizard - Behemoth"
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
            subType: "Nurgle Daemon Wizard - Unique Behemoth"
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
            subType: "Nurgle Daemon - Unique "
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
            subType: "Slaanesh Daemon - Behemoth"
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
            subType: "Tzeentch Daemon Wizard - Behemoth"
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
            subType: "Tzeentch Daemon Wizard - Unique Behemoth"
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
            subType: "Nurgle Rotbringer Mortal Wizard - Unique "
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
            subType: "Nurgle Rotbringer Mortal - Unique "
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
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth"
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
            subType: "Nurgle Rotbringer Mortal"
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
            subType: "Nurgle Rotbringer Mortal"
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
            subType: "Tzeentch Daemon Wizard - Behemoth"
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
            subType: "Artillery"
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
            subType: "Darkling Covens"
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
            subType: "Darkling Covens - Behemoth"
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
            subType: "Daughters of Khaine"
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
            subType: "Daughters of Khaine - Behemoth"
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
            subType: "Order Serpentis  - Behemoth"
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
            subType: "Order Serpentis - Behemoth"
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
            subType: "Scourge Privateers"
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
            subType: "Scourge Privateers - Behemoth"
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
            subType: "Shadowblades"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Deathlords Mortarch Wizard - Unique Behemoth"
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
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth"
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
            subType: "Deathlords Wizard Priest - Unique Behemoth"
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
            subType: "Deathlords Soulblight Vampire Mortarch Wizard - Unique Behemoth"
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
            subType: "Deathmages Wizard"
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
            subType: "Deathmages - Behemoth"
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
            subType: "Deathrattle"
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
            subType: "Deathrattle"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Soulblight Vampire Wizard"
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
            subType: "Soulblight Vampire Wizard - Behemoth"
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
            subType: "Soulblight Vampire Wizard - Behemoth"
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
            subType: "Soulblight Vampire Wizard - Behemoth"
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
            subType: "Soulblight Vampire Wizard - Unique Behemoth"
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
            subType: "Nighthaunt"
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
            subType: "Nighthaunt"
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: "Behemoth "
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
            subType: undefined
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
            subType: "Eldritch Council"
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
            subType: "Eldritch Council"
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
            subType: "Eldritch Council - Behemoth"
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
            subType: "Swifthawk Agents"
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
            subType: "Swifthawk Agents - Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Unique "
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
            subType: "Unique Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Priest"
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
            subType: "Priest"
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
            subType: "Priest - Behemoth"
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
            subType: "Totem"
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
            subType: "Unique "
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Nighthaunt - Behemoth"
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
            subType: "Beastclaw Raiders"
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
            subType: "Beastclaw Raiders - Behemoth"
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
            subType: "Beastclaw Raiders - Behemoth"
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
            subType: "Beastclaw Raiders - Behemoth"
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
            subType: "Beastclaw Raiders - Behemoth"
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
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline"
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
            subType: "Beastclaw Raiders - Behemoth - Beastclaw Raiders Battleline"
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
            subType: "Firebellies"
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
            subType: "Gutbusters"
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
            subType: "Gutbusters"
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
            subType: "Ogre Kingdoms"
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
            subType: "Ogre Kingdoms"
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
            subType: "Aleguzzler Gargants - Behemoth"
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
            subType: "Bonesplitterz"
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
            subType: "Bonesplitterz"
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
            subType: "Bonesplitterz Wizard"
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
            subType: "Bonesplitterz Wizard"
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
            subType: "Gitmob Grots"
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
            subType: "Gitmob Grots - Artillery"
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
            subType: "Gitmob Grots - Artillery"
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
            subType: "Gitmob Grots - Artillery"
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
            subType: "Greenskinz"
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
            subType: "Greenskinz"
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
            subType: "Greenskinz Behemoth"
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
            subType: "Ironjawz"
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
            subType: "Ironjawz"
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
            subType: "Ironjawz"
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
            subType: "Ironjawz - Unique Behemoth"
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
            subType: "Ironjawz Behemoth"
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
            subType: "Moonclan Grots"
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
            subType: "Moonclan Grots"
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
            subType: "Moonclan Grots"
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
            subType: "Moonclan Grots - Behemoth"
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
            subType: "Orcs & Goblins"
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
            subType: "Orcs & Goblins"
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
            subType: "Orcs & Goblins"
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
            subType: "Spiderfang Grots"
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
            subType: "Spiderfang Grots"
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
            subType: "Spiderfang Grots - Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Eshin"
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
            subType: "Eshin Behemoth"
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
            subType: "Masterclan"
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
            subType: "Masterclan - Behemoth"
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
            subType: "Masterclan - Behemoth"
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
            subType: "Masterclan - Unique Behemoth"
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
            subType: "Masterclan - Unique Behemoth"
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
            subType: "Moulder"
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
            subType: "Moulder - Behemoth"
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
            subType: "Nurgle Pestilens "
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
            subType: "Nurgle Pestilens"
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
            subType: "Nurgle Pestilens  - Artillery"
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
            subType: "Nurgle Pestilens - Behemoth"
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
            subType: "Nurgle Pestilens Daemon Wizard - Behemoth"
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
            subType: "Skryre"
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
            subType: "Skryre"
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
            subType: "Skryre - Artillery"
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
            subType: "Skryre - Behemoth"
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
            subType: "Verminus"
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
            subType: "Verminus"
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
            subType: "Verminus - Behemoth"
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
            subType: "Eshin"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Totem"
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
            subType: "Unique "
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Unique"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Wizard"
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
            subType: "Wizard"
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
            subType: "Wizard - Behemoth"
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
            subType: "Wizard - Unique Behemoth"
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
            subType: "Wizard - Unique Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Unique "
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
            subType: "Unique "
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
            subType: "Unique Behemoth"
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
            subType: "Artillery"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Mortal"
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
            subType: "Mortal"
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
            subType: "Mortal"
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
            subType: "Mortal"
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
            subType: "Mortal Behemoth"
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
            subType: "Mortal Daemon"
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
            subType: "Mortal Wizard"
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
            subType: "Mortal Wizard - Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Chaos Gargants - Behemoth"
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
            subType: "Daemon Mortal Khorne Nurgle Slaanesh Tzeentch Everchosen Wizard - Unique Behemoth"
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
            subType: "Slaanesh"
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
            subType: "Tzeentch Everchosen Arcanites Mortal Daemon Wizard"
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
            subType: "Tzeentch Everchosen Mortal Daemon Wizard"
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
            subType: "Unique"
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
            subType: undefined
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
            subType: "Nurgle Rotbringer Mortal Wizard - Unique Behemoth"
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
            subType: "Behemoth"
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
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth"
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
            subType: "Nurgle Rotbringer Mortal - Unique Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: "Nurgle Rotbringer Mortal Wizard"
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
            subType: "Nurgle Rotbringer Mortal Daemon"
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
            subType: "Nurgle Rotbringer Mortal Daemon"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: undefined
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
            subType: undefined
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
            subType: undefined
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
            subType: "Behemoth"
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
            subType: "Behemoth"
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
            subType: "Unique"
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
            subType: undefined
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
            subType: "Artillery"
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
            subType: "Unique"
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
            subType: "Khorne Daemon - Behemoth"
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
            subType: "Nurgle Daemon - Behemoth"
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
            subType: "Slaanesh Daemon - Behemoth"
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
            subType: "Tzeentch Daemon - Behemoth"
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
            subType: "Behemoth"
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
            subType: "Unique"
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
            subType: "Nurgle Daemon - Unique"
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
            subType: undefined
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
            subType: "Mortal"
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
            subType: "Moonclan Wizard"
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
            subType: "Nighthaunt"
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
            subType: "One per army - Must include Spiteclaw's Swarm"
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
            subType: "One per army - Must include The Chosen Axes"
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
