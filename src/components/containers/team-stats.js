import { useState, useEffect } from "react";
import AppHeader from "../app-header";
import { getTeamStats } from "../../api/team-stats";
import {Table} from 'reactstrap'


const TeamStats = (props) => {
    const [teamStats, setTeamStats] = useState()

    useEffect(() => {
        const getStats = async () => {
            const resp = await getTeamStats();
            if (resp.success) {
                setTeamStats(resp.data);
            } else {
                console.error(resp.error);
                //ToDo: handle error
            }
        }
        getStats();
    }, [])

    console.log(JSON.stringify(teamStats))

    const tableRows = teamStats.map(team => {
        return (
            <tr>
                <td>{team.teamAbbr}</td>
                <td>{team.runsScored}</td>
                <td>{team.runsRank}</td>
                <td>{team.strikeouts}</td>
                <td>{team.strikeoutsRank}</td>
                <td>{team.wins}</td>
                <td>{team.losses}</td>
                <td>{team.onBasePercent}</td>
            </tr>
        )
    })


    return (
        <div>
            <Table>
                <tr>
                    <th>Team</th>
                    <th>Runs</th>
                    <th>R Rank</th>
                    <th>Strikeouts</th>
                    <th>K Rank</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>OBP</th>
                </tr>
                {tableRows}
            </Table>
        </div>
    )
}

export default TeamStats;