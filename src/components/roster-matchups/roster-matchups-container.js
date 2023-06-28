import { useEffect, useState } from "react";
import { getProjectedLineups } from "../../api/projected-lineups";
import { useAuthContext } from "../../context/auth-context";
import { Col, Row, Table } from "reactstrap";



const RosterMatchups = (props) => {
    const { user, logout } = useAuthContext();
    const [projectedLineups, setProjectedLineups] = useState();

    useEffect(() => {
        if (user) {
            const getLineups = async (leagueId, teamId, token) => {
                const result = await getProjectedLineups(leagueId, teamId, token);
                if (result.success) {
                    setProjectedLineups(result.data)
                } else {
                    console.error(result.error)
                }
            }

            // ToDo: hardcoded values
            const leagueId = 92842;
            const teamId = 6;
            getLineups(leagueId, teamId, user.token)
        }
    }, [])

    if (!(projectedLineups?.length > 0)) {
        return <div>"nothing"</div>
    }

    const matchupDays = projectedLineups.map((lineup, index) => {
        return (
            <DayOfMatchups key={index} date={lineup.date} matchups={lineup.matchups}></DayOfMatchups>
        )
    })

    console.log(projectedLineups)
    return (
        <div>
            <div>Roster Matchups</div>
            {matchupDays}
        </div>
    )
}


export default RosterMatchups;


const DayOfMatchups = (props) => {

    return (
        <div>
            <Row>
                <Col sm="1"></Col>
                <Col>
                    {props.date}
                    <Matchups matchups={props.matchups}></Matchups>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

const Matchups = (props) => {

    if (!(props.matchups?.length > 0)) {
        return (<div>No Matchups</div>);
    }
    const rows = props.matchups.map(m => {
        return (
            <tr>
                <td>{m.hitter?.BattingOrder}</td>
                <td>{m.hitter?.Name}</td>
                <td>{m.pitcher?.Name}</td>
                <td>{m.pitcher?.stats?.innings_pitched}</td>
                <td>{m.pitcher?.stats?.era}</td>
                <td>{m.pitcher?.stats?.strikeouts}</td>
            </tr>
        )
    })

    return (
        <Table size="sm" bordered striped>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Hitter</th>
                    <th>Pitcher</th>
                    <th>IP</th>
                    <th>ERA</th>
                    <th>Strikeouts</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    )
}