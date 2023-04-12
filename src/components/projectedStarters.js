import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useSearchParams } from "react-router-dom";
import getData from "../api/get-free-agent-starters"
import Login from './auth/login'
import useToken from './auth/useToken';
import useEmail from './auth/useEmail';
import setCode from '../api/set-yahoo-auth-code';
import AppHeader from './app-header';



function ProjectedStarters() {
  const mockData = [{ "gameDate": "April 11", "games": [{ "awayTeam": { "teamAbbr": "SEA", "runsScored": 43, "strikeouts": 91, "onBasePercent": ".299", "runsRank": 17, "strikeoutsRank": 6 }, "homeTeam": { "teamAbbr": "CHC", "runsScored": 42, "strikeouts": 65, "onBasePercent": ".340", "runsRank": 18, "strikeoutsRank": 28 }, "awayPitcher": { "name": { "full": "Chris Flexen", "first": "Chris", "last": "Flexen", "ascii_first": "Chris", "ascii_last": "Flexen" }, "team": "SEA", "playerUrl": "https://sports.yahoo.com/mlb/players/10769", "playerId": "10769", "eligiblePositions": { "position": ["SP", "RP", "P"] } }, "homePitcher": null }, { "awayTeam": { "teamAbbr": "STL", "runsScored": 36, "strikeouts": 66, "onBasePercent": ".365", "runsRank": 24, "strikeoutsRank": 27 }, "homeTeam": { "teamAbbr": "COL", "runsScored": 41, "strikeouts": 87, "onBasePercent": ".312", "runsRank": 20, "strikeoutsRank": 12 }, "awayPitcher": { "name": { "full": "Miles Mikolas", "first": "Miles", "last": "Mikolas", "ascii_first": "Miles", "ascii_last": "Mikolas" }, "team": "STL", "playerUrl": "https://sports.yahoo.com/mlb/players/9173", "playerId": "9173", "eligiblePositions": { "position": ["SP", "P"] } }, "homePitcher": null }, { "awayTeam": { "teamAbbr": "LAD", "runsScored": 60, "strikeouts": 90, "onBasePercent": ".363", "runsRank": 2, "strikeoutsRank": 7 }, "homeTeam": { "teamAbbr": "SF", "runsScored": 47, "strikeouts": 102, "onBasePercent": ".342", "runsRank": 12, "strikeoutsRank": 1 }, "awayPitcher": null, "homePitcher": { "name": { "full": "Alex Wood", "first": "Alex", "last": "Wood", "ascii_first": "Alex", "ascii_last": "Wood" }, "team": "SF", "playerUrl": "https://sports.yahoo.com/mlb/players/9415", "playerId": "9415", "eligiblePositions": { "position": ["SP", "P"] } } }] }, { "gameDate": "April 12", "games": [{ "awayTeam": { "teamAbbr": "NYY", "runsScored": 44, "strikeouts": 81, "onBasePercent": ".327", "runsRank": 16, "strikeoutsRank": 17 }, "homeTeam": { "teamAbbr": "CLE", "runsScored": 50, "strikeouts": 86, "onBasePercent": ".331", "runsRank": 8, "strikeoutsRank": 14 }, "awayPitcher": { "name": { "full": "Clarke Schmidt", "first": "Clarke", "last": "Schmidt", "ascii_first": "Clarke", "ascii_last": "Schmidt" }, "team": "NYY", "playerUrl": "https://sports.yahoo.com/mlb/players/10926", "playerId": "10926", "eligiblePositions": { "position": ["SP", "RP", "P"] } }, "homePitcher": null }, { "awayTeam": { "teamAbbr": "DET", "runsScored": 27, "strikeouts": 90, "onBasePercent": ".261", "runsRank": 27, "strikeoutsRank": 9 }, "homeTeam": { "teamAbbr": "TOR", "runsScored": 54, "strikeouts": 85, "onBasePercent": ".352", "runsRank": 6, "strikeoutsRank": 15 }, "awayPitcher": { "name": { "full": "Eduardo Rodriguez", "first": "Eduardo", "last": "Rodriguez", "ascii_first": "Eduardo", "ascii_last": "Rodriguez" }, "team": "DET", "playerUrl": "https://sports.yahoo.com/mlb/players/9546", "playerId": "9546", "eligiblePositions": { "position": ["SP", "P"] } }, "homePitcher": null }] }, { "gameDate": "April 13", "games": [{ "awayTeam": { "teamAbbr": "MIL", "runsScored": 48, "strikeouts": 81, "onBasePercent": ".365", "runsRank": 10, "strikeoutsRank": 16 }, "homeTeam": { "teamAbbr": "SD", "runsScored": 50, "strikeouts": 78, "onBasePercent": ".327", "runsRank": 9, "strikeoutsRank": 20 }, "awayPitcher": null, "homePitcher": { "name": { "full": "Nick Martinez", "first": "Nick", "last": "Martinez", "ascii_first": "Nick", "ascii_last": "Martinez" }, "team": "SD", "playerUrl": "https://sports.yahoo.com/mlb/players/9651", "playerId": "9651", "eligiblePositions": { "position": ["SP", "RP", "P"] } } }] }, { "gameDate": "April 14", "games": [{ "awayTeam": { "teamAbbr": "PHI", "runsScored": 30, "strikeouts": 92, "onBasePercent": ".311", "runsRank": 26, "strikeoutsRank": 4 }, "homeTeam": { "teamAbbr": "CIN", "runsScored": 35, "strikeouts": 72, "onBasePercent": ".329", "runsRank": 25, "strikeoutsRank": 24 }, "awayPitcher": null, "homePitcher": { "name": { "full": "Connor Overton", "first": "Connor", "last": "Overton", "ascii_first": "Connor", "ascii_last": "Overton" }, "team": "CIN", "playerUrl": "https://sports.yahoo.com/mlb/players/12249", "playerId": "12249", "eligiblePositions": { "position": ["SP", "P"] } } }, { "awayTeam": { "teamAbbr": "SF", "runsScored": 47, "strikeouts": 102, "onBasePercent": ".342", "runsRank": 12, "strikeoutsRank": 1 }, "homeTeam": { "teamAbbr": "DET", "runsScored": 27, "strikeouts": 90, "onBasePercent": ".261", "runsRank": 27, "strikeoutsRank": 9 }, "awayPitcher": null, "homePitcher": { "name": { "full": "Joey Wentz", "first": "Joey", "last": "Wentz", "ascii_first": "Joey", "ascii_last": "Wentz" }, "team": "DET", "playerUrl": "https://sports.yahoo.com/mlb/players/10426", "playerId": "10426", "eligiblePositions": { "position": ["SP", "P"] } } }, { "awayTeam": { "teamAbbr": "CLE", "runsScored": 50, "strikeouts": 86, "onBasePercent": ".331", "runsRank": 8, "strikeoutsRank": 14 }, "homeTeam": { "teamAbbr": "WSH", "runsScored": 40, "strikeouts": 69, "onBasePercent": ".336", "runsRank": 22, "strikeoutsRank": 26 }, "awayPitcher": { "name": { "full": "Cal Quantrill", "first": "Cal", "last": "Quantrill", "ascii_first": "Cal", "ascii_last": "Quantrill" }, "team": "CLE", "playerUrl": "https://sports.yahoo.com/mlb/players/10573", "playerId": "10573", "eligiblePositions": { "position": ["SP", "P"] } }, "homePitcher": { "name": { "full": "Trevor Williams", "first": "Trevor", "last": "Williams", "ascii_first": "Trevor", "ascii_last": "Williams" }, "team": "WSH", "playerUrl": "https://sports.yahoo.com/mlb/players/10144", "playerId": "10144", "eligiblePositions": { "position": ["SP", "RP", "P"] } } }, { "awayTeam": { "teamAbbr": "TB", "runsScored": 75, "strikeouts": 58, "onBasePercent": ".379", "runsRank": 1, "strikeoutsRank": 30 }, "homeTeam": { "teamAbbr": "TOR", "runsScored": 54, "strikeouts": 85, "onBasePercent": ".352", "runsRank": 6, "strikeoutsRank": 15 }, "awayPitcher": null, "homePitcher": { "name": { "full": "José Berríos", "first": "José", "last": "Berríos", "ascii_first": "José", "ascii_last": "Berríos" }, "team": "TOR", "playerUrl": "https://sports.yahoo.com/mlb/players/9872", "playerId": "9872", "eligiblePositions": { "position": ["SP", "P"] } } }, { "awayTeam": { "teamAbbr": "LAA", "runsScored": 56, "strikeouts": 79, "onBasePercent": ".333", "runsRank": 5, "strikeoutsRank": 19 }, "homeTeam": { "teamAbbr": "BOS", "runsScored": 59, "strikeouts": 62, "onBasePercent": ".341", "runsRank": 3, "strikeoutsRank": 29 }, "awayPitcher": null, "homePitcher": { "name": { "full": "Tanner Houck", "first": "Tanner", "last": "Houck", "ascii_first": "Tanner", "ascii_last": "Houck" }, "team": "BOS", "playerUrl": "https://sports.yahoo.com/mlb/players/10852", "playerId": "10852", "eligiblePositions": { "position": ["SP", "RP", "P"] } } }] }];



  const [data, setData] = useState([]);
  const { token, setToken } = useToken();
  const [registerFlag, setRegisterFlag] = useState([]);
  const { email, setEmail } = useEmail();
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
    if (token) {
      
      async function handleUrlCode() {
        const hasCodeInUrl = searchParams.has("code");
        if (hasCodeInUrl) {
          console.log('There is a code in the URL, lets save it...')
          const code = searchParams.get('code');
          const resp = await setCode(token, code)
          setSearchParams(new URLSearchParams())
        }
      }

      handleUrlCode();
      
      if (!email) {
        setEmail(getUserEmail());
      }

      getData(token).then(resp => {
        setData(resp)
      })

    }
  }, [token, email]);



  const toggleRegisterFlag = (isRegistering) => {
    setRegisterFlag(isRegistering);
  }

  if (!token) {
    return <Login setToken={setToken} registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></Login>
  }

  const getUserEmail = () => {
    console.log('sanity check')
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.Email
  }
  const logout = () => {
    // sessionStorage.removeItem("token");
    setToken(null)
  }

  const canUseRealData = data?.data?.length > 0;
  console.log(`Using real data: ${canUseRealData}`)
  const dataToUse = canUseRealData ? data.data : mockData
  const rows = dataToUse.map((gameDay, index) => {
    return (
      <GameRow key={index} gameDate={gameDay.gameDate} games={gameDay.games}></GameRow>
    );
  });

  return (
  <div>
    <AppHeader logout={logout} email={email}></AppHeader>
    <div className="container">
    <h2>Free Agent Probable Pitchers</h2>
    <div className="projected-starters">{rows}</div>
    </div>
  </div>)
}

export default ProjectedStarters;

function GameRow(props) {
  const games = props.games.map((game, index) => {
    return <Game key={index} gameInfo={game}></Game>;
  });
  return (
    <Row className="game-row">
      <Row className="game-date">{props.gameDate}</Row>
      <Row>{games}</Row>
    </Row>
  );
}

function Game(props) {
  return (
    <Col className="game-tile">
      <Row className="team-info">
        <Col>
          <Row className="team-abbr">{props.gameInfo.awayTeam.teamAbbr}</Row>
          <hr></hr>
          <TeamStat
            statLabel="R's Rank"
            statName="runsRank"
            team="awayTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
          <TeamStat
            statLabel="K's Rank"
            statName="strikeoutsRank"
            team="awayTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
        </Col>
        <Col>@</Col>
        <Col>
          <Row className="team-abbr">{props.gameInfo.homeTeam.teamAbbr}</Row>{' '}
          <hr></hr>
          <TeamStat
            statLabel="R's Rank"
            statName="runsRank"
            team="homeTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
          <TeamStat
            statLabel="K's Rank"
            statName="strikeoutsRank"
            team="homeTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="player-name-link">
          <a href={props.gameInfo.awayPitcher?.playerUrl} target="_">
            {props.gameInfo.awayPitcher?.name?.full}
          </a>
        </Col>
        <Col className="player-name-link">
          <a href={props.gameInfo.homePitcher?.playerUrl} target="_">
            {props.gameInfo.homePitcher?.name?.full}
          </a>
        </Col>
      </Row>
    </Col>
  );
}

function TeamStat(props) {
  return (
    <Row className="team-stat">
      {props.statLabel}: {props.gameInfo[props.team][props.statName]}
    </Row>
  );
}
