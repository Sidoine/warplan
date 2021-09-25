import React, { useCallback } from "react";
import { IconButton, TextField, InputAdornment } from "@material-ui/core";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { observer } from "mobx-react-lite";

export interface NumberControlProps {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    min?: number;
    max?: number;
}

function NumberControl({
    value,
    onChange,
    label,
    min,
    max,
}: NumberControlProps) {
    const onCountChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = parseInt(event.target.value);
            if (min === undefined || value >= min) onChange(value);
        },
        [min, onChange]
    );

    const plus = useCallback(() => {
        if (max === undefined || value < max) onChange(value + 1);
    }, [max, onChange, value]);
    const minus = useCallback(() => {
        if (min === undefined || value > min) onChange(value - 1);
    }, [min, onChange, value]);
    return (
        <TextField
            type="text"
            label={label}
            onChange={onCountChange}
            value={value}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton color="primary" size="small" onClick={plus}>
                            <ArrowDropUp />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            size="small"
                            onClick={minus}
                        >
                            <ArrowDropDown />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default observer(NumberControl);
