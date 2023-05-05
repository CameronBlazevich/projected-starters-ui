import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getPitcherHitterMatchupHistory } from "../../api/pitcher-hitter-matchup-history";
import { getTeamName } from "../../data/park-factors";
import LoadingIndicator from "../loading-indicator";
import { useAuthContext } from "../../context/auth-context";
import { handleUnauthorized } from "../errors/handle-unauthorized";

const BattingLineup = (props) => {
    const [matchupStats, setMatchupStats] = useState();
    const [isLoading, setIsLoading] = useState();
    const {user, logout} = useAuthContext();
    
    useEffect(() => {
        const getHistoryVsPitcher = async (request) => {
            setIsLoading(true);
            const resp = await getPitcherHitterMatchupHistory(user.token, request)
            if (resp.success) {
                setMatchupStats(resp.data)
            } else {
                handleUnauthorized(resp.error, logout)
                //ToDo: handle error
                console.log(resp.error)
            }
            setIsLoading(false)
        }

        const lineup = props.lineup.map(batter => {
            return { fullName: batter.Name, lastName: batter.Player.LastName, firstName: batter.Player.FirstName, playerId: batter.Player.PlayerID }
        })

        const request = {
            pitcherName: props.pitcher.name.full,
            pitcherTeamAbbr: props.pitcher.team,
            hittingLineup: lineup,
            hittingTeamAbbr: props.lineup[0].Team
        }

        getHistoryVsPitcher(request);

    }, [props.pitcher])

    const renderLoadingIndicator = () => {
        return <LoadingIndicator></LoadingIndicator>
      }

    const rows = props.lineup.map((batter, index) => {
        if (!matchupStats) {
            return [];
        }

        const batterMatchupStats = matchupStats.find(ms => ms.originalName === batter.Name);
        return (
            <tr key={index}>
                <td>{batter.BattingOrder}</td>
                <td>{batter.Name}</td>
                <td>{batter.Position}</td>
                <td>{batter.Player.BatHand}</td>
                <td>{batterMatchupStats?.AB}</td>
                <td>{batterMatchupStats?.SLG}</td>
                <td>{batterMatchupStats?.PA ? (batterMatchupStats?.H / batterMatchupStats?.PA).toFixed(3) : 0}</td>
                <td>{batterMatchupStats?.H}</td>
                <td>{batterMatchupStats?.["2B"]}</td>
                <td>{batterMatchupStats?.["3B"]}</td>
                <td>{batterMatchupStats?.HR}</td>
                <td>{batterMatchupStats?.SO}</td>
                <td>{batterMatchupStats?.["K%"]}</td>
                <td>{batterMatchupStats?.["Whiff%"]}</td>
                <td>{batterMatchupStats?.wOBA}</td>
                <td className="statcast">{batterMatchupStats?.xBA}</td>
                <td className="statcast">{batterMatchupStats?.xSLG}</td>
                <td className="statcast">{batterMatchupStats?.xwOBA}</td>
                <td className="statcast">{batterMatchupStats?.EV}</td>
                <td className="statcast">{batterMatchupStats?.LA}</td>
            </tr>
        )
    })

    const calculateStatsTotal = (players) => {
        if (!players?.length > 0) {
            return {}
        }
        const totals = calculateTotals(players);
        const AVG = totals["Total H"] / totals["Total AB"];
        const SLG = (totals["Total H"] + totals["Total Doubles"] + 2*totals["Total Triples"] + 3*totals["Total HR"]) / totals["Total AB"];
        const AB = totals["Total AB"];
        const H = totals["Total H"];
        const Doubles = totals["Total Doubles"];
        const Triples = totals["Total Triples"]
        const HR = totals["Total HR"];
        const K = totals["Total SO"];

        return {AVG, SLG, AB, H, Doubles, Triples, HR, K};
    }

    const calculateTotals = (players) => {
        let totalH = 0;
        let totalAB = 0;
        let totalDoubles = 0;
        let totalTriples = 0;
        let totalHR = 0;
        let totalBB = 0;
        let totalSO = 0;

        let totalSH = 0;
        let totalSF = 0;
      
        for (let i = 0; i < players.length; i++) {
          const player = players[i];
          if (!player.Player) {
            continue;
          }
          totalH += parseInt(player.H);
          totalAB += parseInt(player.AB);
          totalDoubles += parseInt(player["2B"]);
          totalTriples += parseInt(player["3B"]);
          totalHR += parseInt(player.HR);
          totalBB += parseInt(player.BB);
          totalSO += parseInt(player.SO);

          totalSH += parseInt(player.SH);
          totalSF += parseInt(player.SF);
        }
      
        return {
          "Total H": totalH,
          "Total AB": totalAB,
          "Total Doubles": totalDoubles,
          "Total Triples": totalTriples,
          "Total HR": totalHR,
          "Total BB": totalBB,
          "Total SO": totalSO,

          "Total SH": totalSH,
          "Total SF": totalSF,
        };
    }

    
    const renderLineupTable = () => {
        const totalStats = calculateStatsTotal(matchupStats)
        return (<Table size="sm">
                <thead>
                    <tr>
                        <th>Spot</th>
                        <th>Name</th>
                        <th>Pos.</th>
                        <th>BatHand</th>
                        <th>AB</th>
                        <th>SLG</th>
                        <th>AVG</th>
                        <th>H</th>
                        <th>2B</th>
                        <th>3B</th>
                        <th>HR</th>
                        <th>K</th>
                        <th>K%</th>
                        <th>Whiff%</th>
                        <th>wOBA</th>
                        <th className="statcast">xBA</th>
                        <th className="statcast">xSLG</th>
                        <th className="statcast">xwOBA</th>
                        <th className="statcast">EV</th>
                        <th className="statcast">LA</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    <tr className="bold">
                    <td>Totals</td>
                    <td></td> 
                    <td></td>
                    <td></td>
                    <td>{totalStats.AB}</td>
                    <td>{totalStats.SLG?.toFixed(3)}</td>
                    <td>{totalStats.AVG?.toFixed(3)}</td>
                    <td>{totalStats.H}</td>
                    <td>{totalStats.Doubles}</td>
                    <td>{totalStats.Triples}</td>
                    <td>{totalStats.HR}</td>
                    <td>{totalStats.K}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }


    return (
        <div className="pitcher-hitter-matchup-container">
            <div className="text-align-center"><h2>{getTeamName(props.lineup[0].Team)} Lineup vs {props.pitcher.name.full}</h2></div>
            {isLoading ? renderLoadingIndicator() : renderLineupTable()}
        </div>
    )
}


export default BattingLineup;