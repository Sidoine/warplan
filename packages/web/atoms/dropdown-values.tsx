import { MenuItem, Select } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";

export type Value = number | string;

export interface DropdownValuesProps<T extends Value> {
    value: T | null;
    options: T[];
    onChange: (value: T) => void;
    getText: (value: T) => string;
}

function DropdownValues<T extends Value>({
    options,
    onChange,
    value,
    getText
}: DropdownValuesProps<T>) {
    const handleChange = useCallback(
        (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
            const item = options.find(x => x === event.target.value);
            if (item !== undefined) {
                onChange(item);
            }
        },
        [onChange, options]
    );

    return (
        <Select value={value ?? ""} onChange={handleChange}>
            {options.map(x => (
                <MenuItem key={x} value={x}>
                    {getText(x)}
                </MenuItem>
            ))}
        </Select>
    );
}

export default observer(DropdownValues);
