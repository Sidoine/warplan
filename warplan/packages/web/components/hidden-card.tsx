import * as React from "react";
import makeStyles from '@mui/styles/makeStyles';

export interface HiddenCardProps {
    name: string;
    onClick: (name: string) => void;
}

const useStyles = makeStyles({
    card: {},
    "@media print": {
        card: {
            display: "none !important"
        }
    }
});
export function HiddenCard({ name, onClick }: HiddenCardProps) {
    const classes = useStyles();
    return (
        <div className={classes.card} onClick={() => onClick(name)}>
            {name}
        </div>
    );
}
