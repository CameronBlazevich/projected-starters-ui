import GameRow from './game-row';

const Games = (props) => {
    const {playerData, leagueId, watchedPlayerIds} = props;

    const gameRows = playerData.map((gameDay, index) => {
        return (
          <GameRow key={index} leagueId={leagueId} gameDate={gameDay.gameDate} games={gameDay.games} watchedPlayerIds={watchedPlayerIds} addToWatch={props.addToWatchList} removeFromWatch={props.removeFromWatch}></GameRow>
        );
      });

    return (
        <div>
            {gameRows}
        </div>
    )
}

export default Games;