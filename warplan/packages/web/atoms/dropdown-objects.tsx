import {
    MenuItem,
    Select,
    SelectChangeEvent,
    Tooltip,
    Typography,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { ReactNode, useCallback } from "react";
import { HasId } from "./add-button";

export interface DropdownObjectsProps<T extends HasId> {
    value: T | null;
    options: T[];
    onChange: (value: T | null) => void;
    getText: (value: T) => ReactNode;
    getTooltip?: (value: T) => string | undefined;
    placeholder?: string;
    clearable?: boolean;
}

function DropdownObjects<T extends HasId>({
    clearable,
    options,
    value,
    onChange,
    getText,
    getTooltip,
}: DropdownObjectsProps<T>) {
    const handleChange = useCallback(
        (event: SelectChangeEvent) => {
            if (event.target.value) {
                const item = options.find((x) => x.id === event.target.value);
                if (item) onChange(item);
                else onChange(null);
            } else {
                onChange(null);
            }
        },
        [onChange, options]
    );

    return (
        <Select
            variant="standard"
            value={(value && value.id) || ""}
            onChange={handleChange}
        >
            {clearable && <MenuItem value="">None</MenuItem>}
            {options.map((x) => (
                <MenuItem value={x.id} key={x.id}>
                    {getTooltip && (
                        <Tooltip title={getTooltip(x) || ""}>
                            <Typography>{getText(x)}</Typography>
                        </Tooltip>
                    )}
                    {!getTooltip && getText(x)}
                </MenuItem>
            ))}
        </Select>
    );
}

export default observer(DropdownObjects);
