import { useEffect, useState } from "react";
import { getLeagueMatchupInfo } from "../../api/league-matchups";
import { useAuthContext } from '../../context/auth-context'
import { Row, Col } from "reactstrap";
import LeagueStatTotals from "./league-stat-totals";
import LeagueStatAverages from "./league-stat-averages";
import TeamWeeklyStats from "./team-weekly-stats";



const LeagueMatchupsContainer = (props) => {

    const [leagueMatchups, setLeagueMatchups] = useState([]);
    const { logout, user } = useAuthContext();

    useEffect(() => {
        const getLeagueMatchupsAsync = async (token, leagueId) => {
            const matchupResponse = await getLeagueMatchupInfo(token, leagueId);
            if (matchupResponse.success) {
                setLeagueMatchups(matchupResponse.data);
            } else {
                //ToDo: handle error
            }
        }

        const leagueId = 92842;
        getLeagueMatchupsAsync(user.token, leagueId);
    }, [])


    if (!leagueMatchups?.standings?.teams?.team.length > 0) {
        return <div>None</div>
    }

    const teamsWithWeeklyStats = leagueMatchups.standings.teams.team.filter(t => t.stats_by_week?.length > 0)
    return (
        <div>
            League Stats
            <Row>
                <Col>
                    Totals
                    <LeagueStatTotals teams={leagueMatchups.standings.teams.team}></LeagueStatTotals>
                </Col>
                <Col>
                    Weekly Averages
                    <LeagueStatAverages teams={leagueMatchups.standings.teams.team} currentWeek={leagueMatchups.current_week}></LeagueStatAverages>
                </Col>
            </Row>
            <Row>
            <Col sm="1"></Col>
                <Col sm="4">
                <div>{teamsWithWeeklyStats[0].name}</div>
                <TeamWeeklyStats team={teamsWithWeeklyStats[0]}></TeamWeeklyStats>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="4">
                <div>{teamsWithWeeklyStats[1].name}</div>
                <TeamWeeklyStats team={teamsWithWeeklyStats[1]}></TeamWeeklyStats>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}

export default LeagueMatchupsContainer;
