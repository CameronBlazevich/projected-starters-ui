import { Button } from "reactstrap";
import CollapsibleGamesContainer from "./games/collapsible-games-container";
import CreateTeamModal from "./teams/create-team-modal"
import {getRosteredProbablePitchers, createTeam} from '../api/user-teams'
import { useState, useEffect } from "react";
import ErrorAlert from "./errors/error-alert";
import { handleUnauthorized } from "./errors/handle-unauthorized";
import { useAuthContext } from "../context/auth-context";

const MyTeamsProjectedStarters = (props) => {
    const [myTeamsStarters, setMyTeamsStarters] = useState();
    const [isModalOpen, setIsModalOpen] = useState();
    const [error, setError] = useState();

    const { user, logout } = useAuthContext()
    const toggleModal = () => setIsModalOpen(!isModalOpen)


    const leagueInfo = props.userLeagues.find(ul => ul.league_id === props.leagueId);
    
    useEffect(() =>{
        console.log(`Error ${error}`)
        if (user) {
            if (leagueInfo?.team_id) {
                const getMyTeamsStarters = async (authToken, league) => {
                    const resp = await getRosteredProbablePitchers(authToken, league.league_id, league.team_id)
                    if (resp.success) {
                        setMyTeamsStarters(resp.data)
                    } else {
                        // setError(resp.error?.data?.error);
                        handleUnauthorized(resp.error, logout)
                        console.error(resp)
                    }
                }
                
                getMyTeamsStarters(user.token, leagueInfo);
            } else {
                return;
            }
        }

    }, [props.userLeagues])



    const submitTeamId = async (leagueId, teamId) => {
        setIsModalOpen(false);

        const createTeamResp = await createTeam(user.token, teamId, leagueId);
        if (createTeamResp.success) {
            props.setUserLeagues(createTeamResp.data)
        } else {
            handleUnauthorized(createTeamResp.error, logout)
        }

        console.log(`Creating team w/ id ${teamId} for league ${leagueId}`)

    }

    const openAddTeamModal = (leagueId) => {
        toggleModal()
    }

    if (error) {
        if (error === "invalid-team-key") {
            const line1 = "Yahoo rejected your team key."
            const line2 = "Remove the team id from this league and add a new one taking care to follow the instructions."
        
        return (
            <div> 
                <h2>{`My Team's Scheduled Starters (League ${props.leagueId})`}</h2>
                <p className='error'>{line1}</p>
                <p className='error'>{line2}</p>
                
            </div>
        )
        } else {
            return <div>Something went wrong.</div>
        }
    }
    

    if (!props.leagueId) {
        return null;
    }

    if (!leagueInfo) {
        return null;
    }
    

    if (!leagueInfo.team_id) {
        //ToDo: show a nice display
        return (
            <div> <h2>{`My Team's Scheduled Starters (League ${props.leagueId})`}</h2>
                To see your team's projected starters, add your team id: <Button onClick={() => openAddTeamModal(props.leagueId)} size="sm" color="primary">Add Team</Button>
                <CreateTeamModal leagueId={props.leagueId} isOpen={isModalOpen} toggle={toggleModal} submitTeamId={submitTeamId}></CreateTeamModal>
            </div>
        )
    }

    if (!(myTeamsStarters?.length > 0)) {
        return null;
    }

    
    return (
        <div>
            
            <CollapsibleGamesContainer playerData={myTeamsStarters} title="My Team's Scheduled Starters" leagueId={props.leagueId} teamId={props.teamId}></CollapsibleGamesContainer>
        </div>
    )
}

export default MyTeamsProjectedStarters;