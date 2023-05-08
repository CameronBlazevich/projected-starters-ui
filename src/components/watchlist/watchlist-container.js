import { useEffect, useState } from "react";
import { getWatchedPlayers, removeFromWatchlistEntry } from "../../api/watchlist";
import { Col, Row } from "reactstrap";
import ReadOnlyConnectedLeaguesDrawer from "../user-leagues/readonly-connected-leagues-drawer";
import { getUserLeagues } from '../../api/user-leagues';
import WeatherGame from "../game-weather/weather-game";
import BattingLineup from "./batting-lineup";
import WatchlistPanel from "./watchlist-panel";
import PitcherInfo from "./pitcher-info";
import { useAuthContext } from "../../context/auth-context";
import { handleUnauthorized } from '../errors/handle-unauthorized'



const WatchlistContainer = (props) => {

    const [watchlistPlayers, setWatchlistPlayers] = useState();
    const [activeLeagueId, setActiveLeagueId] = useState();
    const [showDrawer, setShowDrawer] = useState(false);
    const [userLeagues, setUserLeagues] = useState([]);
    const [visiblePitcher, setVisiblePitcher] = useState();
    const [hasUpdated, setHasUpdated] = useState(false)
    const { user, logout } = useAuthContext();

    useEffect(() => {
        if (user) {
            const getWatchlist = async (leagueId, token) => {
                const result = await getWatchedPlayers(token, leagueId);
                if (result.success) {
                    setWatchlistPlayers(result.data);

                } else {
                    handleUnauthorized(result.error, logout)
                    console.error(result)
                }
            }

            if (activeLeagueId) {
                getWatchlist(activeLeagueId, user.token);
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

    }, [hasUpdated, activeLeagueId])

    const showPlayerList = async (leagueId) => {
        setWatchlistPlayers(null)
        setVisiblePitcher(null)
        setActiveLeagueId(leagueId)
        
    }

    const removeFromWatchlist = async (args) => {
        const removeResponse = await removeFromWatchlistEntry(user.token, args);
        if (removeResponse.success) {
            setVisiblePitcher(null)
            setHasUpdated(!hasUpdated)
        } else {
            handleUnauthorized(removeResponse.error, logout)
            console.error(removeResponse.error)
        }
    }

    if (!watchlistPlayers?.length > 0 || !activeLeagueId) {
        return (
            <Row>
                <Col Col lg="3" className="side-panel">
                    <Row>
                        <ReadOnlyConnectedLeaguesDrawer showFreeAgents={showPlayerList} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ReadOnlyConnectedLeaguesDrawer>
                    </Row>
                </Col>
            </Row>

        )
    }

    const daysWithGames = watchlistPlayers.filter(wp => wp.games.length !== 0);
    let gameToShow = {};
    if (visiblePitcher) {
        const gameDateWithDesiredPitcher = daysWithGames.find(gameDateObj =>
            gameDateObj.games.some(gameObj =>
                gameObj.awayPitcher?.name?.full === visiblePitcher ||
                gameObj.homePitcher?.name?.full === visiblePitcher
            )
        );

        const awayPitcherGame = gameDateWithDesiredPitcher.games.find(g => g.awayPitcher?.name?.full === visiblePitcher)

        const homePitcherGame = gameDateWithDesiredPitcher.games.find(g => g.homePitcher?.name?.full === visiblePitcher)

        const game = awayPitcherGame ? awayPitcherGame : homePitcherGame;

        let pitcher = {};
        let isPitcherHome = false;
        if (homePitcherGame) {
            pitcher = game.homePitcher
            isPitcherHome = true;
        } else {
            pitcher = game.awayPitcher
        }
        gameToShow = <WatchedPlayer visiblePitcher={visiblePitcher} game={game}></WatchedPlayer>
    } else {
        gameToShow = <div>Click on a Player</div>

    }

    return (
        <div>
            <Row>
                <Col lg="3" className="side-panel">
                    <Row>
                        <ReadOnlyConnectedLeaguesDrawer showFreeAgents={showPlayerList} userLeagues={userLeagues} show={showDrawer} setShow={setShowDrawer}></ReadOnlyConnectedLeaguesDrawer>
                    </Row>
                    <Row>
                        <WatchlistPanel visiblePitcher={visiblePitcher} setVisiblePitcher={setVisiblePitcher} leagueId={activeLeagueId} watchlist={watchlistPlayers} removeFromWatchlist={removeFromWatchlist}></WatchlistPanel>
                    </Row>
                </Col>
                <Col>
                    {gameToShow}
                </Col>
            </Row>
        </div>
    )
}

export default WatchlistContainer;

const WatchedPlayer = (props) => {
    let pitcher = {};
    let isPitcherHome = false;
    if (props.game.homePitcher) {
        pitcher = props.game.homePitcher
        isPitcherHome = true;
    } else {
        pitcher = props.game.awayPitcher
    }

    return (
        <div>
            <Row>
                <Col sm="4">
                    <PitcherInfo pitcher={pitcher}></PitcherInfo>
                </Col>
                <Col>
                    <Row>
                        <BattingLineup pitcher={pitcher} lineup={isPitcherHome ? props.game.awayBattingOrder : props.game.homeBattingOrder}></BattingLineup>
                    </Row>
                    <Row><WeatherGame game={props.game}></WeatherGame></Row>
                </Col>
            </Row>
        </div>
    )
}

