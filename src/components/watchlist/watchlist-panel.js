import { Table } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons'



const WatchlistPanel = (props) => {
    const rows = [];
    for (let i=0; i < props.watchlist?.length; i++) {
        const dayOfGames = props.watchlist[i];
        if (dayOfGames.games?.length > 0) {
            const row = dayOfGames.games.map((game, index) => {
                let pitcher = {};
                let isPitcherHome = false;
                if (game.homePitcher) {
                    pitcher = game.homePitcher
                    isPitcherHome = true;
                } else {
                    pitcher = game.awayPitcher
                }

                const className =  pitcher.name.full === props.visiblePitcher ? "" : "faded-icon"
                const row = (
                    <tr key={index}>
                        <td>{dayOfGames.gameDate}</td>
                        <td><FontAwesomeIcon className="error" icon={faTimes} size="1x" onClick={() => props.removeFromWatchlist({playerId: pitcher.playerId, leagueId: props.leagueId, gameId: game.gameId })}></FontAwesomeIcon> {pitcher.name.full} </td>
                        <td>{isPitcherHome ? game.awayTeam.teamAbbr : game.homeTeam.teamAbbr}</td>
                        <td>
                            <FontAwesomeIcon className={className} icon={faEye} size="1x" onClick={() => props.setVisiblePitcher(pitcher.name.full)}></FontAwesomeIcon>
                        </td>
                    </tr>
                )
                return row;
            })
            rows.push(row)
            
        }
    }

    return (
        <div>
            <div className="text-align-center connected-leagues-header"><h4>{`Watched Players (League ${props.leagueId})`}</h4></div>
        <Table size="sm" >
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Player</th>
                    <th>Opponent</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
        </div>

    )
}


export default WatchlistPanel;