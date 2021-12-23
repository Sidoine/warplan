import {
    Button,
    Card,
    CardActions,
    CardContent,
    List,
    ListItem,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { useArmyListStore } from "../stores/army-list";
import { useUiStore } from "../stores/ui";

const ArmyList = observer(({ x }: { x: string }) => {
    const warscrollStore = useArmyListStore();
    const handleLoad = useCallback(() => {
        warscrollStore.saveWarscroll(warscrollStore.armyList.name);
        warscrollStore.loadWarscroll(x);
    }, [warscrollStore, x]);
    return (
        <ListItem
            selected={x === warscrollStore.armyList.name}
            button
            key={x}
            onClick={handleLoad}
        >
            {x}
        </ListItem>
    );
});

function ArmyLists() {
    const uiStore = useUiStore();
    const armyListStore = useArmyListStore();
    return (
        <Card>
            <CardContent>
                <List>
                    {armyListStore.armyLists.map((x) => (
                        <ArmyList key={x} x={x} />
                    ))}
                </List>
            </CardContent>
            <CardActions>
                <Button onClick={uiStore.showArmyListManager}>
                    Manage lists
                </Button>
                <Button onClick={armyListStore.create}>New</Button>
            </CardActions>
        </Card>
    );
}

export default observer(ArmyLists);
