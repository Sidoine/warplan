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
import { useArmyListsStore } from "../stores/army-lists";
import { useUiStore } from "../stores/ui";

const ArmyList = observer(({ x }: { x: string }) => {
    const warscrollStore = useArmyListsStore();
    const currentArmyList = useArmyListStore();
    const handleLoad = useCallback(() => {
        warscrollStore.saveCurrentArmyList();
        warscrollStore.loadWarscroll(x);
    }, [warscrollStore, x]);
    return (
        <ListItem
            selected={x === currentArmyList.name}
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
    const armyListsStore = useArmyListsStore();
    return (
        <Card>
            <CardContent>
                <List>
                    {armyListsStore.armyLists.map((x) => (
                        <ArmyList key={x} x={x} />
                    ))}
                </List>
            </CardContent>
            <CardActions>
                <Button onClick={uiStore.showArmyListManager}>
                    Manage lists
                </Button>
                <Button onClick={armyListsStore.create}>New</Button>
            </CardActions>
        </Card>
    );
}

export default observer(ArmyLists);
