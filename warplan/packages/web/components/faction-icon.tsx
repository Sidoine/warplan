import { Box } from "@mui/system";
import React from "react";
import beasts_of_chaos from "../assets/factions/beasts_of_chaos.svg";
import bonesplitterz from "../assets/factions/bonesplitterz.svg";
import cities_of_sigmar from "../assets/factions/cities_of_sigmar.svg";
import daughters_of_khaine from "../assets/factions/daughters_of_khaine.svg";
import flesh_eater_courts from "../assets/factions/flesh_eater_courts.svg";
import fyreslayers from "../assets/factions/fyreslayers.svg";
import gloomspite_gitz from "../assets/factions/gloomspite_gitz.svg";
import hedonites_of_slaanesh from "../assets/factions/hedonites_of_slaanesh.svg";
import idoneth_deepkin from "../assets/factions/idoneth_deepkin.svg";
import ironjawz from "../assets/factions/ironjawz.svg";
import kharadron_overlords from "../assets/factions/kharadron_overlords.svg";
import khorne_bloodbound from "../assets/factions/khorne_bloodbound.svg";
import lumineth_realmlords from "../assets/factions/lumineth_realmlords.svg";
import maggotkin_of_nurgle from "../assets/factions/maggotkin_of_nurgle.svg";
import nighthaunt from "../assets/factions/nighthaunt.svg";
import ogor_mawtribes from "../assets/factions/ogor_mawtribes.svg";
import ossiarch_bonereapers from "../assets/factions/ossiarch_bonereapers.svg";
import seraphon from "../assets/factions/seraphon.svg";
import skaven from "../assets/factions/skaven.svg";
import slaves_to_darkness from "../assets/factions/slaves_to_darkness.svg";
import stormcast_eternals_warrior from "../assets/factions/stormcast_eternals_warrior.svg";
import sylvaneth from "../assets/factions/sylvaneth.svg";
import tzeentch_arcanites from "../assets/factions/tzeentch_arcanites.svg";
import { FactionId } from "../stores/imported-data";

function factionIconUrl(faction: FactionId) {
    switch (faction) {
        case "beastsOfChaos":
            return beasts_of_chaos;
        case "bonesplitterz":
            return bonesplitterz;
        case "citiesOfSigmar":
            return cities_of_sigmar;
        case "daughtersOfKhaine":
            return daughters_of_khaine;
        case "fleshEaterCourts":
            return flesh_eater_courts;
        case "fyreslayers":
            return fyreslayers;
        case "gloomspiteGitz":
            return gloomspite_gitz;
        case "hedonitesOfSlaanesh":
            return hedonites_of_slaanesh;
        case "idonethDeepkin":
            return idoneth_deepkin;
        case "ironjawz":
            return ironjawz;
        case "kharadronOverlords":
            return kharadron_overlords;
        case "khorne":
            return khorne_bloodbound;
        case "luminethRealmLords":
            return lumineth_realmlords;
        case "maggotkinOfNurgle":
            return maggotkin_of_nurgle;
        case "nighthaunt":
            return nighthaunt;
        case "ogorMawtribes":
            return ogor_mawtribes;
        case "ossiarchBonereapers":
            return ossiarch_bonereapers;
        case "seraphon":
            return seraphon;
        case "skaven":
            return skaven;
        case "slavesToDarkness":
            return slaves_to_darkness;
        case "stormcastEternals":
            return stormcast_eternals_warrior;
        case "sylvaneth":
            return sylvaneth;
        case "tzeentch":
            return tzeentch_arcanites;
    }
    return "";
}

export function FactionIcon({ factionId }: { factionId: FactionId }) {
    const url = factionIconUrl(factionId);
    if (!url) return <></>;
    return (
        <Box bgcolor="black" p={1}>
            <img style={{ height: "40px" }} src={url} alt={factionId} />
        </Box>
    );
}
