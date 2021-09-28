import {
    Button,
    Card,
    CardActions,
    CardContent,
    List,
    ListItem,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useStores } from "../stores";

const WarscrollLine = observer(({ x }: { x: string }) => {
    const { armyListStore: warscrollStore } = useStores();
    const handleLoad = useCallback(() => {
        warscrollStore.saveWarscroll(warscrollStore.warscroll.name);
        warscrollStore.loadWarscroll(x);
    }, [warscrollStore, x]);
    return (
        <ListItem
            selected={x === warscrollStore.warscroll.name}
            button
            key={x}
            onClick={handleLoad}
        >
            {x}
        </ListItem>
    );
});

function WarscrollsList() {
    const { armyListStore: warscrollStore, uiStore } = useStores();
    return (
        <Card>
            <CardContent>
                <List>
                    {warscrollStore.warscrolls.map((x) => (
                        <WarscrollLine key={x} x={x} />
                    ))}
                </List>
            </CardContent>
            <CardActions>
                <Button onClick={uiStore.showWarscrollPopin}>
                    Manage lists
                </Button>
                <Button onClick={warscrollStore.create}>New</Button>
            </CardActions>
        </Card>
    );
}

export default observer(WarscrollsList);
