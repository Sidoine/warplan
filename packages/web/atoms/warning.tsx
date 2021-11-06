import React from "react";
import { Tooltip } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

export function Warning({ label }: { label: string }) {
    return (
        <Tooltip title={label}>
            <WarningIcon color="secondary" fontSize="small" />
        </Tooltip>
    );
}
