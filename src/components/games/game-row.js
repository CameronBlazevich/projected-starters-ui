import {Row} from 'reactstrap';
import Game from './game';

function GameRow(props) {
    const games = props.games.map((game, index) => {
      return <Game key={index} gameInfo={game}></Game>;
    });

    return (
      <Row className="game-row">
        <Row className="game-date">{props.gameDate}</Row>
        <Row className="justify-center-on-small">{games}</Row>
      </Row>
    );
  }

  export default GameRow;