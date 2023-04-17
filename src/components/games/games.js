import GameRow from './game-row';

const Games = (props) => {
    const {playerData} = props;

    const gameRows = playerData.map((gameDay, index) => {
        return (
          <GameRow key={index} gameDate={gameDay.gameDate} games={gameDay.games}></GameRow>
        );
      });

    return (
        <div>
            {gameRows}
        </div>
    )
}

export default Games;