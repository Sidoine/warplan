import {
    Button,
    Card,
    CardActions,
    CardContent,
    List,
    ListItemButton,
} from "@mui/material";
import { useAuthorize } from "folke-service-helpers";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";
import { ArmyList } from "../services/views";
import { useArmyListStore } from "../stores/army-list";
import { useArmyListsStore } from "../stores/army-lists";
import { useUiStore } from "../stores/ui";

const ArmyList = observer(({ x }: { x: ArmyList }) => {
    const warscrollStore = useArmyListsStore();
    const currentArmyList = useArmyListStore();
    const handleLoad = useCallback(() => {
        warscrollStore.saveCurrentArmyList();
        warscrollStore.loadWarscroll(x);
    }, [warscrollStore, x]);
    return (
        <ListItemButton
            selected={x.id.toString() === currentArmyList.id}
            onClick={handleLoad}
        >
            {x.name}
        </ListItemButton>
    );
});

function ArmyLists() {
    const uiStore = useUiStore();
    const armyListsStore = useArmyListsStore();
    const authorizeStore = useAuthorize();
    if (!authorizeStore.authenticated) return <></>;
    return (
        <Card>
            <CardContent>
                <List>
                    {armyListsStore.armyLists.map((x) => (
                        <ArmyList key={x.id} x={x} />
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
