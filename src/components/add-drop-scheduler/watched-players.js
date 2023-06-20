import { Table } from "reactstrap";

const WatchedPlayers = (props) => {
    console.log(props.watchedPlayers)
    const rows = [];
    for (let i=0; i < props.watchedPlayers?.length; i++) {
        const dayOfGames = props.watchedPlayers[i];
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

                const row = (
                    <tr key={index} onClick={() => props.onClick(pitcher)}>
                        <td>{dayOfGames.gameDate}</td>
                        <td>{pitcher.name.full}</td>
                        <td>{isPitcherHome ? game.awayTeam.teamAbbr : game.homeTeam.teamAbbr}</td>
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
                <Table size="sm" hover >
                    <thead>
                        <tr>
                            <th>Start Date</th>
                            <th>Player</th>
                            <th>Opponent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </div>
        )
}

export default WatchedPlayers;