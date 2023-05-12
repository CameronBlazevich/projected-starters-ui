import { useState, useEffect } from 'react';
import { Col, Row, Button } from 'reactstrap';
import { useSearchParams } from "react-router-dom";
import getFreeAgents from "../api/get-free-agent-starters"

import useEmail from './auth/useEmail';
import { setCode } from '../api/yahoo-integration-info';
import LoadingIndicator from './loading-indicator';
import YahooConnectionModal from './yahoo/connection-modal';
import ConnectedLeaguesDrawer from './user-leagues/connected-leagues-drawer';
import { getUserLeagues, createUserLeague, deleteUserLeague } from '../api/user-leagues';
import { LeagueTypes } from '../enums';
import AddLeagueButton from './add-league-button';
import RegisterContainer from './auth/register-container';
import CollapsibleGamesContainer from './games/collapsible-games-container'
import ErrorAlert from './errors/error-alert';
import MyTeamsProjectedStarters from './my-teams-projected-starters';
import { addToWatchlistEntry, getWatchedPlayerIds, removeFromWatchlistEntry } from '../api/watchlist';
import { useAuthContext } from '../context/auth-context';
import { handleUnauthorized } from './errors/handle-unauthorized';



function ProjectedStarters() {

  const [data, setData] = useState([]);
 
  const [registerFlag, setRegisterFlag] = useState(false);
  const { email, setEmail } = useEmail();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [userLeagues, setUserLeagues] = useState([]);
  const [activeLeagueId, setActiveLeagueId] = useState(null)
  const [showDrawer, setShowDrawer] = useState(false);
  const [leagueId, setLeagueId] = useState();
  const [error, setError] = useState({});
  const [watchedPlayerKeys, setWatchedPlayerKeys] = useState([]);
  const toggleModal = () => setModal(!modal);

  const {user, logout} = useAuthContext();

  useEffect(() => {
    console.log(`Called useEffect()...`)
    if (user) {
      const hasCodeInUrl = searchParams.has("code");
      async function handleUrlCode(hasCodeInUrl) {
        if (hasCodeInUrl) {
          console.log('There is a code in the URL, lets save it...')
          const code = searchParams.get('code');
          const resp = await setCode(user.token, code)
          if (resp.success) {

          } else {
            handleUnauthorized(resp.error, logout)
            //ToDo Handle Error
          }

          setSearchParams(new URLSearchParams())
        }
      }

      handleUrlCode(hasCodeInUrl);
      if (hasCodeInUrl) {
        return;
      }

      async function getLeagues(authToken) {
        const userLeaguesResponse = await getUserLeagues(authToken);
        if (userLeaguesResponse.success) {
          setUserLeagues(userLeaguesResponse.data)
        } else {
          handleUnauthorized(userLeaguesResponse.error, logout)
          console.log(`Something went wrong getting user leagues`)
        }
      }

      getLeagues(user.token);

    }
  }, [user, email, searchParams]);


  const handleApiError = (error) => {
    setData([]);
  }

  const clearErrors = () => {
    setError({})
  }

  const toggleRegisterFlag = (isRegistering) => {
    setRegisterFlag(isRegistering);
  }

  const createLeague = async () => {
    console.log('Creating League...')
    const resp = await createUserLeague(user.token, leagueId, LeagueTypes.YAHOO);
    if (resp.success) {
      setUserLeagues(resp.data);
    } else {
      handleUnauthorized(resp.error, logout)
      // ToDo: handle error
      console.log(`Something went wrong creating League`)
    }

    toggleModal();

  }

  const deleteLeague = async (leagueId) => {
    console.log(`Deleting league with id: ${leagueId}`);
    const response = await deleteUserLeague(user.token, leagueId);
    if (response.success) {
      // console.log(response)
      setUserLeagues(response.data);
      setData([])
    } else {
      handleUnauthorized(response.error, logout);
      // ToDo: handle error
      console.error(response.error)
    }

  }

  if (!user) {
    return <RegisterContainer  registerFlag={registerFlag} setRegisterFlag={toggleRegisterFlag}></RegisterContainer>
  }

  const showFreeAgents = async (leagueId) => {
    setLoading(true);
    setActiveLeagueId(leagueId);

    const watchedPlayerKeysResp = await getWatchedPlayerIds(user.token, leagueId);
    if (watchedPlayerKeysResp.success) {
      setWatchedPlayerKeys(watchedPlayerKeysResp.data);
    }

    const response = await getFreeAgents(user.token, leagueId);
    if (response.success) {
      setData(response.data)
    } else {
      console.log(response.error)
      handleUnauthorized(response.error, logout);

      setError("yahoo-authentication")
    }
    setLoading(false)
  }

  const handleClick = () => {
    const client_id = process.env.REACT_APP_YAHOO_CLIENT_ID;

    const redirect_uri = encodeURI(process.env.REACT_APP_YAHOO_REDIRECT_URI)
    const url = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&language=en-us`;
    // eslint-disable-next-line
    location.href = url;
  }
  
  const addToWatchList = async (gameId, playerId, leagueId) => {
    console.log(`adding player ${playerId}, game ${gameId}, league ${leagueId} to watchlist`)
    const request = { gameId, playerId, leagueId }
    const resp = await addToWatchlistEntry(user.token, request)
    if (resp.success) {
      setWatchedPlayerKeys([...watchedPlayerKeys, {playerId, gameId}])
    } else {
      handleUnauthorized(resp.error, logout)
      console.error(resp.error)
    }
  }

  const removeFromWatch = async (gameId, playerId, leagueId) => {
    console.log(`removing player ${playerId}, game ${gameId}, league ${leagueId} from watchlist`)
    //ToDo: For now we're ignoring gameId
    const request = { gameId, playerId, leagueId }
    const resp = await removeFromWatchlistEntry(user.token, request)
    if (resp.success) {
      const watchedKeys = resp.data.map(wl =>  {
        const entry = {playerId: wl.player_id, gameId: wl.game_id};
        return entry;
      });
      setWatchedPlayerKeys(watchedKeys);
    } else {
      handleUnauthorized(resp.error, logout)
      console.error(resp.error)
    }

  }


  const renderLoadingIndicator = () => {
    return <LoadingIndicator></LoadingIndicator>
  }

  const renderShowFreeAgentInstructions = () => {
    return <div className="show-free-agent-instructions"><p>Click "Show" next to one of your Leagues to see some projected starters.</p></div>
  }

  const renderYahooAuthenticationFailure = () => {
    const messageLine1 = "There was an issue with your Yahoo account."
    const messageLine2 = "Click the \"Auhthorize Yahoo\" button in the upper-right to authenticate.";

    const messageLines = [messageLine1, messageLine2];
    return (
      <div className="fit-content">
        <ErrorAlert clearErrors={clearErrors} messages={messageLines}></ErrorAlert>
      </div>
    )
  }

  const renderGenericError = () => {
    return (
      <Row className="generic-error">
        <Col className="fit-content error-message">
          <p>Something went wrong.</p>
          <p>Please try again.</p>
        </Col>
      </Row>
    )
  }

  const renderErrorMessage = (error) => {
    if (error === "yahoo-authentication") {
      return renderYahooAuthenticationFailure()
    } else {
      return renderGenericError();
    }
  }

  const renderFreeAgentProjectedStarters = (playerData) => {
    return (
      <CollapsibleGamesContainer playerData={playerData} watchedPlayerKeys={watchedPlayerKeys} title={"Free Agent Scheduled Starters"} leagueId={activeLeagueId} addToWatchList={addToWatchList} removeFromWatch={removeFromWatch}></CollapsibleGamesContainer>
    )
  }

  const renderMyTeamsScheduledStarters = () => {
    return <MyTeamsProjectedStarters leagueId={activeLeagueId} userLeagues={userLeagues} setUserLeagues={setUserLeagues}></MyTeamsProjectedStarters>
  }

  const renderConnectLeagueInstructions = () => {
    if (Object.keys(error)?.length > 0) {
      clearErrors()
    }
    return (
      <Row className='text-align-center'>
        <Col sm="8">
          <div className="welcome"><h4>Welcome</h4><p>Connect a League to Get Started</p><AddLeagueButton onClick={toggleModal}></AddLeagueButton></div>
        </Col>
      </Row>
    )
  }

  const renderFreeAgentsAndRosteredScheduledStarters = () => {
    if (Object.keys(error)?.length > 0) {
      return renderErrorMessage(error);
    }

    return (
      <Col>
        {userLeagues?.length > 0 || isLoading ? null : renderConnectLeagueInstructions()}
        {(userLeagues?.length > 0 && data.length === 0 && !isLoading) ? renderShowFreeAgentInstructions() : null}
        {isLoading ? renderLoadingIndicator() : userLeagues?.length > 0 ? renderFreeAgentProjectedStarters(data) : null}
        {isLoading ? null : <hr></hr>}
        {isLoading ? renderLoadingIndicator() : userLeagues?.length > 0 && activeLeagueId ? renderMyTeamsScheduledStarters() : null}
      </Col>
    )
  }


  return (
    <div>
      <YahooConnectionModal submitLeagueId={createLeague} setLeagueId={setLeagueId} leagueIds={userLeagues} modal={modal} toggle={toggleModal}></YahooConnectionModal>
      <Row className='yahoo-auth'>
        <Col className="yahoo-auth">
          <Button className="margin-left-5" size="sm" onClick={() => handleClick()}>Authorize Yahoo</Button>
        </Col>
      </Row>
      <Row>
        <Col lg="3" className="side-panel">
          <ConnectedLeaguesDrawer deleteLeague={deleteLeague} showFreeAgents={showFreeAgents} openCreateLeague={toggleModal} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ConnectedLeaguesDrawer>
        </Col>
        {renderFreeAgentsAndRosteredScheduledStarters()}

      </Row>
    </div>)
}

export default ProjectedStarters;


