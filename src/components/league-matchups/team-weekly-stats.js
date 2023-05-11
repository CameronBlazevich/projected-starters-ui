import { Table } from "reactstrap";



const TeamWeeklyStats = (props) => {
    const { team } = props;
    console.log(team)

    const getStatByDisplayName = (weeklyStats, displayName) => {
        const stat = weeklyStats.stats.find(s => s.display_name === displayName);
        return stat.value;
    }

    let totalW = 0;
    let totalS = 0;
    let totalK = 0;
    let totalERA = 0.00;
    let totalWhip = 0.00;
    let totalR = 0;
    let totalHR = 0;
    let totalRBI = 0;
    let totalSB = 0;
    let totalAVG = 0.00;
    const rows = team.stats_by_week.map((ws, index) => {
       const wins = getStatByDisplayName(ws, "W");
       const saves = getStatByDisplayName(ws, "SV");
       const ks = getStatByDisplayName(ws, "K");
       const era = getStatByDisplayName(ws, "ERA")
       const whip = getStatByDisplayName(ws, "WHIP");

       const rs = getStatByDisplayName(ws, "R")
       const hrs = getStatByDisplayName(ws, "HR")
       const rbis = getStatByDisplayName(ws, "RBI")
       const sbs = getStatByDisplayName(ws, "SB")
       const avg = getStatByDisplayName(ws, "AVG")

      
       totalW += parseInt(wins);
       totalS += parseInt(saves);
       totalK += parseInt(ks)
       totalERA += Number(era); // This won't be perfect b/c will be averaging
       totalWhip += Number(whip); // same

       totalR += parseInt(rs);
       totalHR+= parseInt(hrs);
       totalRBI += parseInt(rbis);
       totalSB += parseInt(sbs);
       totalAVG += Number(avg) //won't be perfect b/c avg'ing

        return (
            <tr key={index}>
                <td>{ws.week}</td>
                <td>{wins}</td>
                <td>{saves}</td>
                <td>{ks}</td>
                <td>{era}</td>
                <td>{whip}</td>
                <td></td>
                <td>{rs}</td>
                <td>{hrs}</td>
                <td>{rbis}</td>
                <td>{sbs}</td>
                <td>{avg}</td>
            </tr>
        )
    })

    const numberOfWeeksIncluded = 3;
    const totalsRow = (
        <tr>
            <td>Totals</td>
            <td>{totalW}</td>
            <td>{totalS}</td>
            <td>{totalK}</td>
            <td>{(totalERA / numberOfWeeksIncluded).toFixed(2)}*</td>
            <td>{(totalWhip / numberOfWeeksIncluded).toFixed(2)}*</td>
            <td></td>
            <td>{totalR}</td>
            <td>{totalHR}</td>
            <td>{totalRBI}</td>
            <td>{totalSB}</td>
            <td>{(totalAVG / numberOfWeeksIncluded).toFixed(3)}*</td>
        </tr>
    )

    const averageRow = (
        <tr>
            <td>Average</td>
            <td>{(totalW / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalS / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalK / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalERA / numberOfWeeksIncluded).toFixed(2)}*</td>
            <td>{(totalWhip / numberOfWeeksIncluded).toFixed(2)}*</td>
            <td></td>
            <td>{(totalR / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalHR / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalRBI / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalSB / numberOfWeeksIncluded).toFixed(2)}</td>
            <td>{(totalAVG / numberOfWeeksIncluded).toFixed(3)}*</td>
        </tr>
    )

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Week</th>
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
                    {totalsRow}
                    {averageRow}
                </tbody>
            </Table>
        </div>
    )
}


export default TeamWeeklyStats;