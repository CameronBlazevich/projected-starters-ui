import { useEffect, useState } from "react";
import { getPitcherSplits } from "../../api/pitcher-stats";
import { Table } from "reactstrap";
import { useAuthContext } from "../../context/auth-context";
import { handleUnauthorized } from "../errors/handle-unauthorized";



const PitcherSplits = (props) => {
    const [splits, setSplits] = useState();
    const {user, logout} = useAuthContext()

    useEffect(() => {
        const getSplits = async (token, yahooPlayerId) => {
            const resp = await getPitcherSplits(token, yahooPlayerId);
            if (resp.success) {
                setSplits(resp.data);
            } else {
                handleUnauthorized(resp.error, logout)
                console.error(resp.error)
            }
        }

        getSplits(user.token, props.playerId)
    }, [props.playerId])


    if (!(splits?.length > 0)) {
        return <div>Splits</div>
    }
    const splitsToShowOnLoad = ["vs L", "vs R", "Home", "Away", "Mar/Apr", "May", "Jun", "Jul", "Aug", "Sept/Oct"];
    const splitsToShow = splits.filter(s => splitsToShowOnLoad.includes(s.Split));

    const splitRows = splitsToShow.map((split, index) => {
        const borderToRemove = ["vs R", "Away"]
        const className = borderToRemove.includes(split.Split) ? "border-none" : ""
        return (
            <tr key={index} className={className}>
                <td><span className="bold">{split.Split}</span></td>
                <td>{split.IP}</td>
                <td>{split.AVG?.toFixed(3)}</td>
                <td>{split.ER}</td>
                <td>{split.ERA?.toFixed(2)}</td>
                <td>{split.SO}</td>
                <td>{split.BABIP?.toFixed(3)}</td>
                <td>{split.FIP?.toFixed(2)}</td>
            </tr>
        )
    })

    return (
        <div>
            {/* <div>Splits Selector</div> */}
            <Table size="sm">
                <thead>
                    <tr className="border-none">
                        <th></th>
                        <th>IP</th>
                        <th>AVG</th>
                        <th>ER</th>
                        <th>ERA</th>
                        <th>SO</th>
                        <th>BABIP</th>
                        <th>FIP</th>
                    </tr>
                </thead>
                <tbody>
                    {splitRows}
                </tbody>
            </Table>
        </div>
    )
}

export default PitcherSplits;