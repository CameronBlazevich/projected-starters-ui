import { Row, Col } from 'reactstrap'
import Roster from "./roster";
import AddDropStage from './add-drop-stage'
import { useEffect, useState } from 'react';
import WatchedPlayers from './watched-players';
import AddDropPlan from './add-drop-plan';
import ReadOnlyConnectedLeaguesDrawer from "../user-leagues/readonly-connected-leagues-drawer";
import { useAuthContext } from '../../context/auth-context';
import { getWatchedPlayers } from "../../api/watchlist";
import { handleUnauthorized } from '../errors/handle-unauthorized'
import { addScheduleAddDropRecord, getScheduledAddDropRecords, removeScheduleAddDropRecord } from '../../api/schedule-add-drop';

const AddDropScheduler = () => {
    const [activeLeagueId, setActiveLeagueId] = useState();
    const [activeTeamId, setActiveTeamId] = useState();
    const [watchedPlayers, setWatchedPlayers] = useState();
    const [addDropScheduleRecords, setAddDropScheduleRecords] = useState();
    const [showDrawer, setShowDrawer] = useState(false);
    const [playerToAdd, setPlayerToAdd] = useState();
    const [playerToDrop, setPlayerToDrop] = useState();
    const { user, logout } = useAuthContext();

    useEffect(() => {
        if (user) {
            const getWatchlist = async (leagueId, token) => {
                const result = await getWatchedPlayers(token, leagueId);
                if (result.success) {
                    setWatchedPlayers(result.data);

                } else {
                    handleUnauthorized(result.error, logout)
                    console.error(result)
                }
            }

            const getScheduleRecords = async (leagueId, teamId, token) => {
                const result = await getScheduledAddDropRecords(token, leagueId, teamId)
                if (result.success) {
                    setAddDropScheduleRecords(result.data);
                } else {
                    console.error(result.error)
                }
            }

            if (activeLeagueId) {
                getWatchlist(activeLeagueId, user.token);
                getScheduleRecords(activeLeagueId, activeTeamId, user.token);
            }

        }

    }, [activeLeagueId])

    const showWatchedPlayersForLeague = (leagueId, teamId) => {
        setWatchedPlayers(null)
        setActiveLeagueId(leagueId)
        setActiveTeamId(teamId)
    }


    if (!(watchedPlayers?.length > 0) || !activeLeagueId) {
        return (
            <Row>
                <Col lg="3" className="side-panel">
                    <Row>
                        <ReadOnlyConnectedLeaguesDrawer showFreeAgents={showWatchedPlayersForLeague} show={showDrawer} setShow={setShowDrawer}></ReadOnlyConnectedLeaguesDrawer>
                    </Row>
                </Col>
            </Row>

        )
    }

    const onRosterRowClick = (player) => {
        setPlayerToDrop(player);
    }

    const onWatchlistRowClick = (player) => {
        setPlayerToAdd(player);
    }

    const removeFromPlan = async (args) => {
        const result = await removeScheduleAddDropRecord(user.token, args);
        if (result.success) {
            setAddDropScheduleRecords(result.data);
        } else {
            console.log(result.error)
        }

    }

    const onSubmitScheduleAddDrop = async (args) => {
        const result = await addScheduleAddDropRecord(user.token, args)
        if (result.success) {
            setAddDropScheduleRecords(result.data);
            setPlayerToAdd(null);
            setPlayerToDrop(null);
        } else {
            console.log(result.error)
        }

    }

    return (
        <div>
            <Row>
                <Col lg="3" className="side-panel">
                    <ReadOnlyConnectedLeaguesDrawer showFreeAgents={showWatchedPlayersForLeague} show={showDrawer} setShow={setShowDrawer}></ReadOnlyConnectedLeaguesDrawer>
                </Col>
                <Col>
                    <Row>
                        <AddDropPlan scheduleRecords={addDropScheduleRecords} removeFromPlan={removeFromPlan} leagueId={activeLeagueId} teamId={activeTeamId}></AddDropPlan>
                    </Row>
                    <Row>
                        <AddDropStage playerToAdd={playerToAdd} playerToDrop={playerToDrop} leagueId={activeLeagueId} teamId={activeTeamId} onSubmit={onSubmitScheduleAddDrop}></AddDropStage>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col lg="3" className="side-panel">
                    <WatchedPlayers onClick={onWatchlistRowClick} leagueId={activeLeagueId} watchedPlayers={watchedPlayers}></WatchedPlayers>
                </Col>
                <Col>
                    <Roster onClick={onRosterRowClick}></Roster>
                </Col>
                <Col>

                </Col>
            </Row>
        </div>
    )


}

export default AddDropScheduler;