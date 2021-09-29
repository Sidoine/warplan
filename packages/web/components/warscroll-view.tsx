import { observer } from "mobx-react-lite";
import * as React from "react";
import { useStores } from "../stores";
import { ArmyListStore } from "../stores/army-list";
import { UnitWarscroll } from "../stores/warscroll";

export interface WarscrollViewProps {
    warscrollStore?: ArmyListStore;
}

function UnitView({
    unit,
    includeCount
}: {
    unit: UnitWarscroll;
    includeCount: boolean;
}) {
    return (
        <li>
            {includeCount && <>{unit.modelCount} × </>} {unit.definition.name} (
            {unit.points})
            {unit.isGeneral && (
                <>
                    <br />- <em>General</em>
                </>
            )}
            {unit.extraAbilities.map(x => (
                <React.Fragment key={x.id}>
                    <br />- <em>{x.name}</em>
                </React.Fragment>
            ))}
        </li>
    );
}

function WarscrollView() {
    const { armyListStore: warscrollStore } = useStores();
    const warscroll = warscrollStore.warscroll;
    return (
        <div>
            <div>Allegiance: {warscroll.allegiance?.name}</div>
            <h3>Leaders</h3>
            <ul>
                {warscroll.units
                    .filter(x => x.isLeader)
                    .map(x => (
                        <UnitView key={x.id} unit={x} includeCount={false} />
                    ))}
            </ul>
            <h3>Battleline</h3>
            <ul>
                {warscroll.units
                    .filter(x => x.isBattleline)
                    .map(x => (
                        <UnitView key={x.id} includeCount unit={x} />
                    ))}
            </ul>
            {warscroll.numberOfArtilleries > 0 && (
                <>
                    <h3>Artillery</h3>
                    <ul>
                        {warscroll.units
                            .filter(x => x.isArtillery)
                            .map(x => (
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
                            .filter(x => x.isBehemot)
                            .map(x => (
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
                        x =>
                            !x.isLeader &&
                            !x.isBattleline &&
                            !x.isBehemot &&
                            !x.isArtillery
                    )
                    .map(x => (
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
            </div>
        </div>
    );
}

export default observer(WarscrollView);
