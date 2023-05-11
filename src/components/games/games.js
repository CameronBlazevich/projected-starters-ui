import GameRow from './game-row';

const Games = (props) => {
    const {playerData, leagueId, watchedPlayerKeys} = props;

    const gameRows = playerData.map((gameDay, index) => {
        return (
          <GameRow key={index} leagueId={leagueId} gameDate={gameDay.gameDate} games={gameDay.games} watchedPlayerKeys={watchedPlayerKeys} addToWatch={props.addToWatchList} removeFromWatch={props.removeFromWatch}></GameRow>
        );
      });

    return (
        <div>
            {gameRows}
        </div>
    )
}

export default Games;