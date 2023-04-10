import { Col, Row } from 'reactstrap';

function ProjectedStarters() {
  const mockData = [
    {
      gameDate: 'April 8',
      games: [
        {
          awayTeam: {
            teamAbbr: 'BOS',
            runsScored: 41,
            strikeouts: 50,
            onBasePercent: '.332',
            runsRank: 3,
            strikeoutsRank: 20,
          },
          homeTeam: {
            teamAbbr: 'DET',
            runsScored: 21,
            strikeouts: 70,
            onBasePercent: '.257',
            runsRank: 26,
            strikeoutsRank: 3,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Joey Wentz',
              first: 'Joey',
              last: 'Wentz',
              ascii_first: 'Joey',
              ascii_last: 'Wentz',
            },
            team: 'DET',
            playerUrl: 'https://sports.yahoo.com/mlb/players/10426',
            playerId: '10426',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'SEA',
            runsScored: 29,
            strikeouts: 62,
            onBasePercent: '.286',
            runsRank: 16,
            strikeoutsRank: 7,
          },
          homeTeam: {
            teamAbbr: 'CLE',
            runsScored: 38,
            strikeouts: 54,
            onBasePercent: '.334',
            runsRank: 5,
            strikeoutsRank: 15,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Cal Quantrill',
              first: 'Cal',
              last: 'Quantrill',
              ascii_first: 'Cal',
              ascii_last: 'Quantrill',
            },
            team: 'CLE',
            playerUrl: 'https://sports.yahoo.com/mlb/players/10573',
            playerId: '10573',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'SD',
            runsScored: 31,
            strikeouts: 48,
            onBasePercent: '.311',
            runsRank: 14,
            strikeoutsRank: 24,
          },
          homeTeam: {
            teamAbbr: 'ATL',
            runsScored: 39,
            strikeouts: 57,
            onBasePercent: '.357',
            runsRank: 4,
            strikeoutsRank: 12,
          },
          awayPitcher: {
            name: {
              full: 'Michael Wacha',
              first: 'Michael',
              last: 'Wacha',
              ascii_first: 'Michael',
              ascii_last: 'Wacha',
            },
            team: 'SD',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9329',
            playerId: '9329',
            eligiblePositions: { position: ['SP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'WSH',
            runsScored: 17,
            strikeouts: 49,
            onBasePercent: '.302',
            runsRank: 29,
            strikeoutsRank: 23,
          },
          homeTeam: {
            teamAbbr: 'COL',
            runsScored: 23,
            strikeouts: 69,
            onBasePercent: '.293',
            runsRank: 21,
            strikeoutsRank: 4,
          },
          awayPitcher: {
            name: {
              full: 'Trevor Williams',
              first: 'Trevor',
              last: 'Williams',
              ascii_first: 'Trevor',
              ascii_last: 'Williams',
            },
            team: 'WSH',
            playerUrl: 'https://sports.yahoo.com/mlb/players/10144',
            playerId: '10144',
            eligiblePositions: { position: ['SP', 'RP', 'P'] },
          },
          homePitcher: null,
        },
      ],
    },
    {
      gameDate: 'April 9',
      games: [
        {
          awayTeam: {
            teamAbbr: 'CIN',
            runsScored: 25,
            strikeouts: 45,
            onBasePercent: '.335',
            runsRank: 19,
            strikeoutsRank: 26,
          },
          homeTeam: {
            teamAbbr: 'PHI',
            runsScored: 18,
            strikeouts: 59,
            onBasePercent: '.309',
            runsRank: 27,
            strikeoutsRank: 10,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Taijuan Walker',
              first: 'Taijuan',
              last: 'Walker',
              ascii_first: 'Taijuan',
              ascii_last: 'Walker',
            },
            team: 'PHI',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9321',
            playerId: '9321',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'NYY',
            runsScored: 29,
            strikeouts: 55,
            onBasePercent: '.330',
            runsRank: 15,
            strikeoutsRank: 14,
          },
          homeTeam: {
            teamAbbr: 'BAL',
            runsScored: 34,
            strikeouts: 62,
            onBasePercent: '.343',
            runsRank: 9,
            strikeoutsRank: 6,
          },
          awayPitcher: {
            name: {
              full: 'Domingo Germán',
              first: 'Domingo',
              last: 'Germán',
              ascii_first: 'Domingo',
              ascii_last: 'Germán',
            },
            team: 'NYY',
            playerUrl: 'https://sports.yahoo.com/mlb/players/10069',
            playerId: '10069',
            eligiblePositions: { position: ['SP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'STL',
            runsScored: 29,
            strikeouts: 38,
            onBasePercent: '.380',
            runsRank: 17,
            strikeoutsRank: 29,
          },
          homeTeam: {
            teamAbbr: 'MIL',
            runsScored: 38,
            strikeouts: 54,
            onBasePercent: '.371',
            runsRank: 6,
            strikeoutsRank: 16,
          },
          awayPitcher: {
            name: {
              full: 'Jake Woodford',
              first: 'Jake',
              last: 'Woodford',
              ascii_first: 'Jake',
              ascii_last: 'Woodford',
            },
            team: 'STL',
            playerUrl: 'https://sports.yahoo.com/mlb/players/11542',
            playerId: '11542',
            eligiblePositions: { position: ['RP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'LAD',
            runsScored: 43,
            strikeouts: 67,
            onBasePercent: '.369',
            runsRank: 2,
            strikeoutsRank: 5,
          },
          homeTeam: {},
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Ryne Nelson',
              first: 'Ryne',
              last: 'Nelson',
              ascii_first: 'Ryne',
              ascii_last: 'Nelson',
            },
            team: 'ARI',
            playerUrl: 'https://sports.yahoo.com/mlb/players/12356',
            playerId: '12356',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
      ],
    },
    {
      gameDate: 'April 10',
      games: [
        {
          awayTeam: {
            teamAbbr: 'OAK',
            runsScored: 22,
            strikeouts: 52,
            onBasePercent: '.283',
            runsRank: 24,
            strikeoutsRank: 18,
          },
          homeTeam: {
            teamAbbr: 'BAL',
            runsScored: 34,
            strikeouts: 62,
            onBasePercent: '.343',
            runsRank: 9,
            strikeoutsRank: 6,
          },
          awayPitcher: {
            name: {
              full: 'JP Sears',
              first: 'JP',
              last: 'Sears',
              ascii_first: 'JP',
              ascii_last: 'Sears',
            },
            team: 'OAK',
            playerUrl: 'https://sports.yahoo.com/mlb/players/12333',
            playerId: '12333',
            eligiblePositions: { position: ['SP', 'RP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'CIN',
            runsScored: 25,
            strikeouts: 45,
            onBasePercent: '.335',
            runsRank: 19,
            strikeoutsRank: 26,
          },
          homeTeam: {
            teamAbbr: 'ATL',
            runsScored: 39,
            strikeouts: 57,
            onBasePercent: '.357',
            runsRank: 4,
            strikeoutsRank: 12,
          },
          awayPitcher: {
            name: {
              full: 'Connor Overton',
              first: 'Connor',
              last: 'Overton',
              ascii_first: 'Connor',
              ascii_last: 'Overton',
            },
            team: 'CIN',
            playerUrl: 'https://sports.yahoo.com/mlb/players/12249',
            playerId: '12249',
            eligiblePositions: { position: ['SP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'SEA',
            runsScored: 29,
            strikeouts: 62,
            onBasePercent: '.286',
            runsRank: 16,
            strikeoutsRank: 7,
          },
          homeTeam: {
            teamAbbr: 'CHC',
            runsScored: 28,
            strikeouts: 38,
            onBasePercent: '.343',
            runsRank: 18,
            strikeoutsRank: 30,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Drew Smyly',
              first: 'Drew',
              last: 'Smyly',
              ascii_first: 'Drew',
              ascii_last: 'Smyly',
            },
            team: 'CHC',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9140',
            playerId: '9140',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'KC',
            runsScored: 17,
            strikeouts: 62,
            onBasePercent: '.259',
            runsRank: 28,
            strikeoutsRank: 8,
          },
          homeTeam: {
            teamAbbr: 'TEX',
            runsScored: 36,
            strikeouts: 50,
            onBasePercent: '.319',
            runsRank: 8,
            strikeoutsRank: 21,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Andrew Heaney',
              first: 'Andrew',
              last: 'Heaney',
              ascii_first: 'Andrew',
              ascii_last: 'Heaney',
            },
            team: 'TEX',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9586',
            playerId: '9586',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'STL',
            runsScored: 29,
            strikeouts: 38,
            onBasePercent: '.380',
            runsRank: 17,
            strikeoutsRank: 29,
          },
          homeTeam: {
            teamAbbr: 'COL',
            runsScored: 23,
            strikeouts: 69,
            onBasePercent: '.293',
            runsRank: 21,
            strikeoutsRank: 4,
          },
          awayPitcher: {
            name: {
              full: 'Steven Matz',
              first: 'Steven',
              last: 'Matz',
              ascii_first: 'Steven',
              ascii_last: 'Matz',
            },
            team: 'STL',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9599',
            playerId: '9599',
            eligiblePositions: { position: ['SP', 'RP', 'P'] },
          },
          homePitcher: null,
        },
        {
          awayTeam: {
            teamAbbr: 'WSH',
            runsScored: 17,
            strikeouts: 49,
            onBasePercent: '.302',
            runsRank: 29,
            strikeoutsRank: 23,
          },
          homeTeam: {
            teamAbbr: 'LAA',
            runsScored: 33,
            strikeouts: 51,
            onBasePercent: '.332',
            runsRank: 11,
            strikeoutsRank: 19,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'José Suarez',
              first: 'José',
              last: 'Suarez',
              ascii_first: 'José',
              ascii_last: 'Suarez',
            },
            team: 'LAA',
            playerUrl: 'https://sports.yahoo.com/mlb/players/11211',
            playerId: '11211',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
        {
          awayTeam: {
            teamAbbr: 'MIL',
            runsScored: 38,
            strikeouts: 54,
            onBasePercent: '.371',
            runsRank: 6,
            strikeoutsRank: 16,
          },
          homeTeam: {},
          awayPitcher: {
            name: {
              full: 'Wade Miley',
              first: 'Wade',
              last: 'Miley',
              ascii_first: 'Wade',
              ascii_last: 'Miley',
            },
            team: 'MIL',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9017',
            playerId: '9017',
            eligiblePositions: { position: ['SP', 'P'] },
          },
          homePitcher: null,
        },
      ],
    },
    {
      gameDate: 'April 11',
      games: [
        {
          awayTeam: {
            teamAbbr: 'LAD',
            runsScored: 43,
            strikeouts: 67,
            onBasePercent: '.369',
            runsRank: 2,
            strikeoutsRank: 5,
          },
          homeTeam: {
            teamAbbr: 'SF',
            runsScored: 38,
            strikeouts: 72,
            onBasePercent: '.368',
            runsRank: 7,
            strikeoutsRank: 2,
          },
          awayPitcher: null,
          homePitcher: {
            name: {
              full: 'Alex Wood',
              first: 'Alex',
              last: 'Wood',
              ascii_first: 'Alex',
              ascii_last: 'Wood',
            },
            team: 'SF',
            playerUrl: 'https://sports.yahoo.com/mlb/players/9415',
            playerId: '9415',
            eligiblePositions: { position: ['SP', 'P'] },
          },
        },
      ],
    },
  ];

  const rows = mockData.map((gameDay) => {
    return (
      <GameRow gameDate={gameDay.gameDate} games={gameDay.games}></GameRow>
    );
  });

  return <div className="projected-starters">{rows}</div>;
}

export default ProjectedStarters;

function GameRow(props) {
  const games = props.games.map((game) => {
    return <Game gameInfo={game}></Game>;
  });
  return (
    <Row>
      <Row>{props.gameDate}</Row>
      <Row>{games}</Row>
    </Row>
  );
}

function Game(props) {
  return (
    <Col className="game-tile">
      <Row className="team-info">
        <Col>
          <Row className="team-abbr">{props.gameInfo.awayTeam.teamAbbr}</Row>
          <hr></hr>
          <TeamStat
            statLabel="R's Rank"
            statName="runsRank"
            team="awayTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
          <TeamStat
            statLabel="K's Rank"
            statName="strikeoutsRank"
            team="awayTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
        </Col>
        <Col>@</Col>
        <Col>
          <Row className="team-abbr">{props.gameInfo.homeTeam.teamAbbr}</Row>{' '}
          <hr></hr>
          <TeamStat
            statLabel="R's Rank"
            statName="runsRank"
            team="homeTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
          <TeamStat
            statLabel="K's Rank"
            statName="strikeoutsRank"
            team="homeTeam"
            gameInfo={props.gameInfo}
          ></TeamStat>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col className="player-name-link">
          <a href={props.gameInfo.awayPitcher?.playerUrl} target="_">
            {props.gameInfo.awayPitcher?.name?.full}
          </a>
        </Col>
        <Col className="player-name-link">
          <a href={props.gameInfo.homePitcher?.playerUrl} target="_">
            {props.gameInfo.homePitcher?.name?.full}
          </a>
        </Col>
      </Row>
    </Col>
  );
}

function TeamStat(props) {
  return (
    <Row className="team-stat">
      {props.statLabel}: {props.gameInfo[props.team][props.statName]}
    </Row>
  );
}
