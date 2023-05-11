import { Table } from "reactstrap";



const LeagueStatTotals = (props) => {
    const { teams } = props;

    const getStatByDisplayName = (team, displayName) => {
        const teamStats = team.team_stats.stats.stat;
        const stat = teamStats.find(s => s.display_name === displayName);
        return stat.value;
    }

    const rows = teams.map((t, index) => {
        return (
            <tr key={index}>
                <td>{t.name}</td>
                <td>{getStatByDisplayName(t, "W")}</td>
                <td>{getStatByDisplayName(t, "SV")}</td>
                <td>{getStatByDisplayName(t, "K")}</td>
                <td>{getStatByDisplayName(t, "ERA")}</td>
                <td>{getStatByDisplayName(t, "WHIP")}</td>
                <td></td>
                <td>{getStatByDisplayName(t, "R")}</td>
                <td>{getStatByDisplayName(t, "HR")}</td>
                <td>{getStatByDisplayName(t, "RBI")}</td>
                <td>{getStatByDisplayName(t, "SB")}</td>
                <td>{getStatByDisplayName(t, "AVG")}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>SV</th>
                        <th>K</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th></th>
                        <th>R</th>
                        <th>HR</th>
                        <th>RBI</th>
                        <th>SB</th>
                        <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    )
}


export default LeagueStatTotals;