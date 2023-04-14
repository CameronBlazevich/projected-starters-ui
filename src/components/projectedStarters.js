import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useSearchParams } from "react-router-dom";
import getData from "../api/get-free-agent-starters"
import Login from './auth/login'
import useToken from './auth/useToken';
import useEmail from './auth/useEmail';
import { setCode, getYahooInfo, setYahooLeagueId } from '../api/yahoo-integration-info';
import AppHeader from './app-header';
import LoadingIndicator from './loading-indicator';
import YahooConnectionModal from './yahoo/connection-modal';
import { getUserLeagues } from '../api/user-leagues';




function ProjectedStarters() {




  const [data, setData] = useState([]);
  const { token, setToken } = useToken();
  const [registerFlag, setRegisterFlag] = useState([]);
  const { email, setEmail } = useEmail();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [userLeagues, setUserLeagues] = useState([]);
  const [yahooInfo, setYahooInfo] = useState();
  const [leagueId, setLeagueId] = useState();
  const toggleModal = () => setModal(!modal);



  useEffect(() => {
    if (token) {
      const hasCodeInUrl = searchParams.has("code");
      async function handleUrlCode(hasCodeInUrl) {
        if (hasCodeInUrl) {
          console.log('There is a code in the URL, lets save it...')
          const code = searchParams.get('code');
          const resp = await setCode(token, code)
          setSearchParams(new URLSearchParams())
        }
      }

      handleUrlCode(hasCodeInUrl);
      if (hasCodeInUrl) {
        return;
      }

      if (!email) {
        setEmail(getUserEmail());
      }


      async function getLeagues(authToken) {
        const userLeaguesResponse = await getUserLeagues(authToken);
        if (userLeaguesResponse.success) {
          await setUserLeagues(userLeaguesResponse.data)
        } else {
          console.log(`Something went wrong getting user leagues`)
        }
      }

      getLeagues(token);

      // see if the user has all of the required info for yahoo connection
      async function getYahooIntegrationInfo(authToken) {
        console.log(`Making API call to getYahooInfo...`)
        const info = await getYahooInfo(authToken);
        setYahooInfo(info);
        if (info?.league_id?.length > 0) {
          setLeagueId(info.league_id);
        }

      }

      if (!yahooInfo) {
        getYahooIntegrationInfo(token)
      }

      if (yahooInfo?.league_id && false) {
        if (!isLoading) {
          setLoading(true);
          console.log(`Making API call to getData()...`)
          getData(token, leagueId).then(resp => {
            setData(resp)
            setLoading(false);
          }).catch(err => {
            setLoading(false)
            console.err(err)
          })
        }
      }
    }
  }, [token, email, searchParams, yahooInfo]);

  const handleNewToken = (token) => {
    setToken(token);
  }


  const toggleRegisterFlag = (isRegistering) => {
    setRegisterFlag(isRegistering);
  }

  const saveLeagueId = async () => {
    console.log('Saving LeagueId...')
    const resp = await setYahooLeagueId(token, leagueId);
    setYahooInfo({ league_id: resp.data.league_id })
    console.log(resp.data.leagueId)

  }

  if (!token) {
    return <div className="container"><Login setToken={handleNewToken} registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></Login></div>
  }

  const getUserEmail = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.email
  }
  const logout = () => {
    setToken(null)
  }


  const canUseLeagueData = yahooInfo?.leagueId?.length > 0;
  const rows = data.map((gameDay, index) => {
    return (
      <GameRow key={index} gameDate={gameDay.gameDate} games={gameDay.games}></GameRow>
    );
  });

  const renderLoadingIndicator = () => {
    return <LoadingIndicator></LoadingIndicator>
  }

  const renderProjectedStarters = () => {
    return <div className="projected-starters">{rows}</div>
  }

  const renderConnectLeagueInstructions = () => {

    return <div className="mock-data-container"><h4>Connect a League</h4><p>Your Yahoo account needs to be connected in order to show real data. Please click the "Add League" button in the upper right corner and log in.</p></div>
  }

  
  return (
    <div>
      <AppHeader logout={logout} email={email} toggleModal={toggleModal}></AppHeader>
      <YahooConnectionModal submitLeagueId={saveLeagueId} setLeagueId={setLeagueId} yahooInfo={yahooInfo} modal={modal} toggle={toggleModal}></YahooConnectionModal>
      <div className="container">
        <h2>Free Agent Probable Pitchers</h2>
        {canUseLeagueData || isLoading ? null : renderConnectLeagueInstructions()}
        {isLoading ? renderLoadingIndicator() : renderProjectedStarters()}

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
