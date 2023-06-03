import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "reactstrap";
import { getUserRoster } from '../../api/roster'
import { handleUnauthorized } from "../errors/handle-unauthorized";
import { useAuthContext } from "../../context/auth-context";



const Roster = (props) => {
    const [roster, setRoster] = useState();
    const location = useLocation();
    let leagueId = location.state?.leagueId;
    let teamId = location.state?.teamId;
    const {user, logout} = useAuthContext();  

    useEffect(() => {
        leagueId = 92842; teamId = 6;
        //ToDo: hardcoded data
        const getTeam = async (token, leagueId, teamId) => {
            const resp = await getUserRoster(token, leagueId, teamId);
            if (resp.success) {
                setRoster(resp.data);
            } else {
                handleUnauthorized(resp.error, logout)
                console.error(resp.error)
            }
        }

        const props = {}
        if (user.token) {
            getTeam(user.token, leagueId, teamId);
        }

    }, [])

    console.log((roster))
if (!roster) {
    return <div>Nothing</div>
}
    const rosterRows = roster.map(player => {
        return (
            <tr onClick={() => props.onClick(player)}>
               
                <td>{player.name.full}</td>
                <td>{player.status ? player.status : '-'}</td>
                <td>{player.eligible_positions.position.join(', ')}</td>
                {/* <td>{'?'}</td>
                <td>{'?'}</td>
                <td>{'games'}</td>
                <td>{player.player_stats.stats.stat.find(s => s.display_name === 'IP')?.value}</td>
                <td>{player.player_stats.stats.stat.find(s => s.name === 'Wins')?.value}</td>
                <td>{'?'}</td>
                <td>{player.player_stats.stats.stat.find(s => s.name === 'Saves')?.value}</td>
                <td>{player.player_stats.stats.stat.find(s => s.name === 'Strikeouts')?.value}</td> */}
            </tr>
        )
    })

    return (
        <div className="">
            <h3>Current Roster</h3>
            <Table size="sm" hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Positions</th>
                    {/* <th>GP</th>
                    <th>PA</th>
                    <th>GS</th>
                    <th>IP</th>
                    <th>W</th>
                    <th>L</th>
                    <th>S</th>
                    <th>K</th> */}
                </tr>
                </thead>
                <tbody>
                    {rosterRows}
                </tbody>
            </Table>
        </div>
    )
}

export default Roster;