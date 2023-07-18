import { useEffect, useState } from 'react';
import GameSweat from './game-sweat';
import { useAuthContext } from '../../context/auth-context';
import { getRosteredPlayers } from '../../api/game-sweat';

const GameSweatContainer = (props) => {
  const [listening, setListening] = useState(false);
  const [liveGameData, setLiveGameData] = useState([]);
  const [shownBatterIds, setShownBatterIds] = useState([]);
  const [rosteredPlayers, setRosteredPlayers] = useState();
  const { logout, user } = useAuthContext();

  useEffect(() => {
    if (!listening) {
      const baseUrl = process.env.REACT_APP_API_URL;
      const url = `${baseUrl}/gamecast/events`;
      const events = new EventSource(url);

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        setLiveGameData(parsedData);
      };

      setListening(true);
    }

    const getRoster = async (token) => {
      const response = await getRosteredPlayers(token);
      if (response.success) {
        setRosteredPlayers(response.data);
      } else {
        console.error(response.error);
      }
    };
    if (!(rosteredPlayers?.length > 0)) {
      getRoster(user.token);
    }
  }, [listening, liveGameData]);

  // see if any current at-bats are rostered players
  if (!(rosteredPlayers?.length > 0)) {
    return <div>nothing</div>;
  }
  const mlbIdsForRosteredPlayers = rosteredPlayers?.map((p) => p.mlbid);
  console.log(mlbIdsForRosteredPlayers);

  const gameIds = liveGameData.map((d) => d.gameId);
  const batterIdsFromEvent = liveGameData.map((d) => d.matchup.batter.id);
  console.log(`batters from event: ${batterIdsFromEvent}`);
  const rosteredPlayersInAMatchup = liveGameData.filter((data) =>
    mlbIdsForRosteredPlayers.some((p) => p == data.matchup.batter.id)
  );

  console.log(`Rostered Players in a matchup: ${rosteredPlayersInAMatchup}`);

  // ToDo: this should be the filtered by roster ids
  // setShownBatterIds(batterIdsFromEvent);
  console.log(liveGameData);
  // const games = rosteredPlayersInAMatchup
  const games = liveGameData.map((game) => {
    return (
      <GameSweat
        gameId={game.gameId}
        matchup={game.matchup}
        allPlays={game.allPlays}
        currentPlayEvents={game.currentPlayEvents}
        previousPlay={game.previousPlay}
        currentHitter={`${game.matchup.batter.id}/${game.matchup.batter.fullName}`}
      ></GameSweat>
    );
  });

  return (
    <div>
      {games}
      {/*  <div>{JSON.stringify(liveGameData)}</div> */}
    </div>
  );
};

export default GameSweatContainer;
