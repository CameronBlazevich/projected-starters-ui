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
import ConnectedLeaguesDrawer from './connected-leagues-drawer';
import { getUserLeagues, createUserLeague, deleteUserLeague } from '../api/user-leagues';
import { LeagueTypes } from '../enums';
import AddLeagueButton from './add-league-button';
import { getLogoId } from '../mlb-team-logos/logo-mapper';
import RegisterContainer from './auth/register-container';



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
  const [error, setError] = useState({});
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

  const clearErrors = () => {
    setError({})
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
      setData([])
    } else {
      handleUnautorized(response.error);
      // ToDo: handle error
      console.error(response.error)
    }

  }

  if (!token) {
    return <RegisterContainer setToken={handleNewToken} registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></RegisterContainer>

    return <div className="container"><Login setToken={handleNewToken} registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></Login></div>
  }

  const showFreeAgents = async (leagueId) => {
    setLoading(true);
    setActiveLeagueId(leagueId);
    const response = await getData(token, leagueId);
    if (response.success) {
    setData(response.data)
    } else {
      console.log(response.error)
      handleUnautorized(response.error);
      
      setError("yahoo-authentication")
    }
    setLoading(false)
  }

  const getUserEmail = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.email
  }
  const logout = () => {
    setToken(null);
    setData([]);
    setUserLeagues([]);
    setActiveLeagueId(null);
    setError({});
    setEmail(null);

  }

  // console.log(JSON.stringify(data))
  const rows = data.map((gameDay, index) => {
    return (
      <GameRow key={index} gameDate={gameDay.gameDate} games={gameDay.games}></GameRow>
    );
  });

  const renderLoadingIndicator = () => {
    return <LoadingIndicator></LoadingIndicator>
  }

  const renderShowFreeAgentInstructions = () => {
    return <div><p>Click "Show" next to one of your Leagues to see some free agents.</p></div>
  }

  const renderYahooAuthenticationFailure = () => {
    return (
    <Row className="yahoo-authentication-failure">
      <Col>
      <p>There was an issue with your Yahoo account.</p>
      <p>Click the "Yahoo" button in the upper-right to authenticate.</p>
      </Col>
    </Row>
    )

  }

  const renderProjectedStarters = () => {
    if (error === "yahoo-authentication") {
      return renderYahooAuthenticationFailure()
    }
    if (userLeagues?.length === 0) {
      return null;
    }

    if (rows?.length === 0 && userLeagues?.length > 0) {
      return renderShowFreeAgentInstructions()  
    } 

    return <div className="projected-starters">{rows}</div>
  }

  const renderConnectLeagueInstructions = () => {
    if (Object.keys(error)?.length > 0 ) {
    clearErrors()
    }
    return (
      <Row className='text-align-center'>
      <div className="welcome"><h4>Welcome</h4><p>Connect a League to Get Started</p><AddLeagueButton onClick={toggleModal}></AddLeagueButton></div>
    </Row>
    )
  }

  const renderTitle = () => {
    return (<h2>Free Agent Probable Pitchers {activeLeagueId ? `(League ${activeLeagueId})`: ""}</h2>)
  }

  return (
    <div>
      
      
      <AppHeader logout={logout} email={email} toggleModal={toggleModal}></AppHeader>
      {/* <Button className="show-drawer" color="info" onClick={() => setShowDrawer(!showDrawer)}>Show Leagues</Button> */}
      <YahooConnectionModal submitLeagueId={createLeague} setLeagueId={setLeagueId} leagueIds={userLeagues} modal={modal} toggle={toggleModal}></YahooConnectionModal>
      <Row>
        <Col sm="2" className="side-panel">

          <ConnectedLeaguesDrawer deleteLeague={deleteLeague} showFreeAgents={showFreeAgents} openCreateLeague={toggleModal} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ConnectedLeaguesDrawer></Col>

        <Col>
          {userLeagues?.length > 0 ?  renderTitle() : null}
          {userLeagues?.length > 0 || isLoading ? null : renderConnectLeagueInstructions()}
          {isLoading ? renderLoadingIndicator() : renderProjectedStarters()}
        </Col>
      </Row>
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
