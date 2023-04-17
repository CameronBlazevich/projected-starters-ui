import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { useSearchParams } from "react-router-dom";
import getData from "../api/get-free-agent-starters"
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
import RegisterContainer from './auth/register-container';
import {getRosteredProbablePitchers} from '../api/user-teams'


import CollapsibleGamesContainer from './games/collapsible-games-container'



function ProjectedStarters() {

  const [data, setData] = useState([]);
  const [rosteredProbablePitchers, setRosteredProbablePitchers] = useState([]);
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
          if (resp.success) {

          } else {
            handleUnautorized(resp.error)
            //ToDo Handle Error
          }

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
  }

  const showFreeAgents = async (leagueId) => {
    setLoading(true);
    setActiveLeagueId(leagueId);
    const rosteredPitcherInfo = await getRosteredProbablePitchers(token, leagueId);
    if (rosteredPitcherInfo.success) {
      setRosteredProbablePitchers(rosteredPitcherInfo.data);
    } else {
      //ToDo: handle error
      console.error(rosteredPitcherInfo.error)
    }
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
    resetState();

  }

  const resetState = () => {

    setData([]);
    setUserLeagues([]);
    setActiveLeagueId(null);
    setError({});
    setEmail(null);
    setRosteredProbablePitchers([])
  }

  // console.log(JSON.stringify(data))


  const renderLoadingIndicator = () => {
    return <LoadingIndicator></LoadingIndicator>
  }

  const renderShowFreeAgentInstructions = () => {
    return <div className="show-free-agent-instructions"><p>Click "Show" next to one of your Leagues to see some projected starters.</p></div>
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

  const renderProjectedStarters = (playerData, title) => {
    if (error === "yahoo-authentication" && title === "Free Agent Scheduled Starters") { //hack with title to show only once
      return renderYahooAuthenticationFailure()
    }
    if (userLeagues?.length === 0) {
      return null;
    }


    return (
      <CollapsibleGamesContainer playerData={playerData} title={title} leagueId={activeLeagueId}></CollapsibleGamesContainer>
    )
  }

  const renderConnectLeagueInstructions = () => {
    if (Object.keys(error)?.length > 0 ) {
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


  return (
    <div>
      <AppHeader logout={logout} email={email} toggleModal={toggleModal}></AppHeader>
      {/* <Button className="show-drawer" color="info" onClick={() => setShowDrawer(!showDrawer)}>Show Leagues</Button> */}
      <YahooConnectionModal submitLeagueId={createLeague} setLeagueId={setLeagueId} leagueIds={userLeagues} modal={modal} toggle={toggleModal}></YahooConnectionModal>
      <Row>
        <Col sm="2" className="side-panel">

          <ConnectedLeaguesDrawer deleteLeague={deleteLeague} showFreeAgents={showFreeAgents} openCreateLeague={toggleModal} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ConnectedLeaguesDrawer></Col>

        <Col>
          {userLeagues?.length > 0 || isLoading ? null : renderConnectLeagueInstructions()}
          {(userLeagues?.length > 0 && data.length === 0 && !isLoading) ? renderShowFreeAgentInstructions() : null}
          {isLoading ? renderLoadingIndicator() :  renderProjectedStarters(data, "Free Agent Scheduled Starters")}
          {isLoading ? renderLoadingIndicator() : renderProjectedStarters(rosteredProbablePitchers, "My Team's Scheduled Starters")}
        </Col>
      </Row>
    </div>)
}

export default ProjectedStarters;


