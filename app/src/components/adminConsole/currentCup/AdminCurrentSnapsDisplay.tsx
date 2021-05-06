import React from "react";
import { CupNameDisplay } from "../AdminConsoleStyles";
import SnappableManager from "../manageTeam/SnappableManager";
import CurrentCupOptionsBar from "./CurrentCupOptionsBar";
import { Cup, Entity } from "../../../types";
import SnapList from "../../submissionPage/SnapList";
import { useSnappablePeople } from "../../../firebase/hooks/UseSnappablePeopleHook";
import { useSnapsInCup } from "../../../firebase/hooks/UseSnapsInCupHook";

const AdminCurrentSnapsDisplay: React.FunctionComponent = (props: {
    cup: Entity<Cup>;
    updateCups: () => void;
}) => {
    const [snaps] = useSnapsInCup(props.cup.id);
    const [snappables] = useSnappablePeople(props.cup.id);

    return (
        <div>
            <div className="d-flex">
                <CupNameDisplay>{props.cup.name}</CupNameDisplay>
                <div className="flex-grow-1" />
                <CurrentCupOptionsBar
                    cup={props.cup}
                    updateCups={props.updateCups}
                />
            </div>
            <SnappableManager
                currentSnaps={snaps}
                snappablePeople={snappables}
                cupId={props.cup.id}
            />
            <hr />
            {snaps.length > 0 && <SnapList snaps={snaps} cup={props.cup} />}
        </div>
    );
};

export default AdminCurrentSnapsDisplay;
