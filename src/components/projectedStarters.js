import { useState, useEffect } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { useSearchParams } from "react-router-dom";
import getData from "../api/get-free-agent-starters"
import Login from './auth/login'
import useToken from './auth/useToken';
import useEmail from './auth/useEmail';
import { setCode } from '../api/yahoo-integration-info';
import AppHeader from './app-header';
import LoadingIndicator from './loading-indicator';
import YahooConnectionModal from './yahoo/connection-modal';
import ConnectedLeagues from './connected-leagues'
import ConnectedLeaguesDrawer from './connected-leagues-drawer';
import { getUserLeagues, createUserLeague, deleteUserLeague } from '../api/user-leagues';
import { LeagueTypes } from '../enums';
import AddLeagueButton from './add-league-button';
import { getLogoId } from '../mlb-team-logos/logo-mapper';



function ProjectedStarters() {

  const [data, setData] = useState([]);
  const { token, setToken } = useToken();
  const [registerFlag, setRegisterFlag] = useState(false);
  const { email, setEmail } = useEmail();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [userLeagues, setUserLeagues] = useState([]);
  const [activeLeagueId, setActiveLeagueId] = useState()
  const [showDrawer, setShowDrawer] = useState(false);
  const [leagueId, setLeagueId] = useState();
  const toggleModal = () => setModal(!modal);



  useEffect(() => {
    console.log(`Called useEffect()...`)
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
          setUserLeagues(userLeaguesResponse.data)
        } else {
          handleUnautorized(userLeaguesResponse.error)
          console.log(`Something went wrong getting user leagues`)
        }
      }

      getLeagues(token);

    }
  }, [token, email, searchParams]);

  const handleNewToken = (token) => {
    setToken(token);
  }

  const handleUnautorized = (error) => {
    if (error && error.response?.status === 401) {
    logout()
    }
  }


  const toggleRegisterFlag = (isRegistering) => {
    setRegisterFlag(isRegistering);
  }

  const createLeague = async () => {
    console.log('Creating League...')
    const resp = await createUserLeague(token, leagueId, LeagueTypes.YAHOO);
    if (resp.success) {
      setUserLeagues(resp.data);
    } else {
      // ToDo: handle error
      console.log(`Something went wrong creating League`)
    }
    
    toggleModal();

  }

  const deleteLeague = async (leagueId) => {
    console.log(`Deleting league with id: ${leagueId}`);
    const response = await deleteUserLeague(token, leagueId);
    if (response.success) {
      // console.log(response)
      setUserLeagues(response.data);
    } else {
      handleUnautorized(response.error);
      // ToDo: handle error
      console.error(response.error)
    }

  }

  if (!token) {
    return <div className="container"><Login setToken={handleNewToken} registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></Login></div>
  }

  const showFreeAgents = async (leagueId) => {
    setLoading(true);
    setActiveLeagueId(leagueId);
    const response = await getData(token, leagueId);
    if (response.success) {
    setData(response.data)
    } else {
      // ToDo: handle error
      console.log(response.error)
    }
    setLoading(false)
  }

  const getUserEmail = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.email
  }
  const logout = () => {
    setToken(null)
  }


  const canUseLeagueData = userLeagues && userLeagues[0]?.league_id;
  // console.log(JSON.stringify(data))
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
    return <div className="mock-data-container"><h4>Connect a League</h4><AddLeagueButton onClick={createLeague}></AddLeagueButton></div>
  }

  return (
    <div>
      <ConnectedLeaguesDrawer deleteLeague={deleteLeague} showFreeAgents={showFreeAgents} openCreateLeague={toggleModal} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ConnectedLeaguesDrawer>
      
      <AppHeader logout={logout} email={email} toggleModal={toggleModal}></AppHeader>
      <Button onClick={() => setShowDrawer(!showDrawer)}>Show</Button>
      <YahooConnectionModal submitLeagueId={createLeague} setLeagueId={setLeagueId} leagueIds={userLeagues} modal={modal} toggle={toggleModal}></YahooConnectionModal>
      <div className="container">
        <h2>Free Agent Probable Pitchers {activeLeagueId ? `(League ${activeLeagueId})`: ""}</h2>
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
  // console.log(JSON.stringify(props.gameInfo.awayPitcher))
  return (
    <Col className="game-tile">
      <Row className="team-info">
        <Col className="team-abbr">{props.gameInfo.awayTeam.teamAbbr}</Col><Col></Col><Col className="team-abbr">{props.gameInfo.homeTeam.teamAbbr}</Col>
      </Row>
      <Row className="team-info logo-row">
        <Col><img className="hitting-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.gameInfo.awayTeam.teamAbbr)}.svg`}></img></Col>
        <Col>@</Col>
        <Col><img className="hitting-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.gameInfo.homeTeam.teamAbbr)}.svg`}></img></Col>
      </Row>
      <Row className="team-info logo-row">
        <Col className="team-record">{`(${props.gameInfo.awayTeam.wins} - ${props.gameInfo.awayTeam.losses})`}</Col>
        <Col></Col>
        <Col className="team-record">{`(${props.gameInfo.homeTeam.wins} - ${props.gameInfo.homeTeam.losses})`}</Col>
      </Row>
      <Row className="team-info">
        <Col>          
          <TeamStat
              statLabel="R's"
              statName="runsRank"
              team="awayTeam"
              gameInfo={props.gameInfo}>
          </TeamStat>
        </Col>
        <Col></Col>
        <Col>
          <TeamStat
              statLabel="R's"
              statName="runsRank"
              team="homeTeam"
              gameInfo={props.gameInfo}
            ></TeamStat>
        </Col>
      </Row>
      <Row className="team-info">
        <Col><TeamStat
            statLabel="K's"
            statName="strikeoutsRank"
            team="awayTeam"
            gameInfo={props.gameInfo}
          ></TeamStat></Col>
        <Col></Col>
        <Col> <TeamStat
            statLabel="K's"
            statName="strikeoutsRank"
            team="homeTeam"
            gameInfo={props.gameInfo}
          ></TeamStat></Col>
      </Row>

      <hr></hr>
      <Row>
        <Col>{props.gameInfo.awayPitcher?.imageUrl ? renderPlayerImage(props.gameInfo.awayPitcher.imageUrl) : null}</Col>
        <Col>{props.gameInfo.homePitcher?.imageUrl ? renderPlayerImage(props.gameInfo.homePitcher.imageUrl) : null}</Col>
      </Row>
      <Row>
        <Col><a className="player-name-link" href={props.gameInfo.awayPitcher?.playerUrl} target="_">
            {props.gameInfo.awayPitcher?.name?.full}
          </a></Col>
        <Col><a className="player-name-link" href={props.gameInfo.homePitcher?.playerUrl} target="_">
            {props.gameInfo.homePitcher?.name?.full}
          </a></Col>
      </Row>
      <Row>
        <Col><PitcherStats pitcher={props.gameInfo.awayPitcher}></PitcherStats></Col>
        <Col><PitcherStats pitcher={props.gameInfo.homePitcher}></PitcherStats></Col>
      </Row>
      
    </Col>
  );
}

const renderPlayerImage = (playerUrl) => {
  return <img src={playerUrl}></img>
}

function TeamStat(props) {
  return (
    <Row className="team-stat">
      {`${props.statLabel}: ${props.gameInfo[props.team][props.statName]}${getEnding(props.gameInfo[props.team][props.statName])}`}
    </Row>
  );
}

const getEnding = (rank) => {
  if (rank === 1) {
    return "st";
  } else if (rank === 2) {
    return "nd"
  } else if (rank === 3) {
    return "rd"
  } else {
    return "th"
  }
}

function PitcherStats(props) {
  const {pitcher} = props;
  if (!pitcher) {
    return null;
  }
  return (
    <p className="pitcher-stats"><span className='bold'>{pitcher.stats.innings_pitched}</span> IP, <span className='bold'>{pitcher.stats.era}</span> ERA, <span className='bold'>{pitcher.stats.strikeouts}</span> SO</p>
  )
}
