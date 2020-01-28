import React from "react";
import { Tooltip } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';

export function Warning({ label }: { label: string}) {
    return <Tooltip title={label}><WarningIcon color="secondary" fontSize="small"/></Tooltip>;
}