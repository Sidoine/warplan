import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStores } from "../stores";
import { WarscrollStore, WarscrollUnit } from "../stores/warscroll";

export interface WarscrollViewProps {
    warscrollStore?: WarscrollStore;
}

function UnitView({
    unit,
    includeCount,
}: {
    unit: WarscrollUnit;
    includeCount: boolean;
}) {
    return (
        <li>
            {includeCount && <>{unit.modelCount} × </>}{" "}
            {unit.definition.model.name} ({unit.points})
            {unit.isGeneral && (
                <>
                    <br />- <em>General</em>
                </>
            )}
            {unit.extraAbilities.map((x) => (
                <React.Fragment key={x.id}>
                    <br />- <em>{x.ability.name}</em>
                </React.Fragment>
            ))}
        </li>
    );
}

function WarscrollView() {
    const { warscrollStore } = useStores();
    const warscroll = warscrollStore.warscroll;
    return (
        <div>
            <div>Allegiance: {warscroll.allegiance.name}</div>
            <h3>Leaders</h3>
            <ul>
                {warscroll.units
                    .filter((x) => x.isLeader)
                    .map((x) => (
                        <UnitView key={x.id} unit={x} includeCount={false} />
                    ))}
            </ul>
            <h3>Battleline</h3>
            <ul>
                {warscroll.units
                    .filter((x) => x.isBattleline)
                    .map((x) => (
                        <UnitView key={x.id} includeCount unit={x} />
                    ))}
            </ul>
            {warscroll.numberOfArtilleries > 0 && (
                <>
                    <h3>Artillery</h3>
                    <ul>
                        {warscroll.units
                            .filter((x) => x.isArtillery)
                            .map((x) => (
                                <UnitView key={x.id} includeCount unit={x} />
                            ))}
                    </ul>
                </>
            )}
            {warscroll.numberOfBehemots > 0 && (
                <>
                    <h3>Behemots</h3>
                    <ul>
                        {warscroll.units
                            .filter((x) => x.isBehemot)
                            .map((x) => (
                                <UnitView
                                    key={x.id}
                                    unit={x}
                                    includeCount={false}
                                />
                            ))}
                    </ul>
                </>
            )}
            <h3>Units</h3>
            <ul>
                {warscroll.units
                    .filter(
                        (x) =>
                            !x.isLeader &&
                            !x.isBattleline &&
                            !x.isBehemot &&
                            !x.isArtillery
                    )
                    .map((x) => (
                        <UnitView key={x.id} includeCount unit={x} />
                    ))}
            </ul>
            <div>
                <dl>
                    <dt>Total</dt>
                    <dd>
                        {warscroll.totalPoints} / {warscroll.maxPoints}
                    </dd>
                </dl>
                <dl>
                    <dt>Extra Command Points</dt>
                    <dd>{warscroll.commandPoints}</dd>
                </dl>
            </div>
        </div>
    );
}

export default observer(WarscrollView);
