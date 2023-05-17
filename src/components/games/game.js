import {Row, Col} from 'reactstrap'
import { getLogoId } from '../../mlb-team-logos/logo-mapper'
import { getParkFactor } from '../../data/park-factors'
import ParkFactorPopover from './park-factor-popover'
import { Link } from 'react-router-dom'


function Game(props) {

    const renderPlayerImage = (playerUrl) => {
        return <img src={playerUrl}></img>
      }
      const parkData = getParkFactor(props.gameInfo.homeTeam.teamAbbr);

    return (
      <Col className="game-tile">
        <Row className="team-info">
          <Col className="team-abbr">{props.gameInfo.awayTeam.teamAbbr}</Col><Col></Col><Col className="team-abbr">{props.gameInfo.homeTeam.teamAbbr}</Col>
        </Row>
        <Row className="team-info logo-row">
          <Col><img className="hitting-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.gameInfo.awayTeam.teamAbbr)}.svg`}></img></Col>
          <Col>@</Col>
          <Col><img className="hitting-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.gameInfo.homeTeam.teamAbbr)}.svg`}></img></Col>
        </Row>
        <Row className="team-info logo-row">
          <Col className="team-record">{`(${props.gameInfo.awayTeam.wins} - ${props.gameInfo.awayTeam.losses})`}</Col>
          <Col></Col>
          <Col className="team-record">{`(${props.gameInfo.homeTeam.wins} - ${props.gameInfo.homeTeam.losses})`}</Col>
        </Row>
        <Row className="team-info">
          <Col>          
            <TeamStat
                statLabel="R's"
                statName="runsRank"
                team="awayTeam"
                gameInfo={props.gameInfo}>
            </TeamStat>
          </Col>
          <Col></Col>
          <Col>
            <TeamStat
                statLabel="R's"
                statName="runsRank"
                team="homeTeam"
                gameInfo={props.gameInfo}
              ></TeamStat>
          </Col>
        </Row>
        <Row className="team-info">
          <Col><TeamStat
              statLabel="K's"
              statName="strikeoutsRank"
              team="awayTeam"
              gameInfo={props.gameInfo}
            ></TeamStat></Col>
          <Col></Col>
          <Col> <TeamStat
              statLabel="K's"
              statName="strikeoutsRank"
              team="homeTeam"
              gameInfo={props.gameInfo}
            ></TeamStat></Col>
        </Row>
        
        <Row className="team-info">
          <Col className="park-factor">{parkData?.Venue} <span id={`${parkData.TeamAbbr}`} className='bold park-factor'>PF: {parkData.ParkFactor}</span></Col>
        </Row>
        <ParkFactorPopover popoverId={`${parkData.TeamAbbr}`} parkFactor={parkData.ParkFactor}></ParkFactorPopover>
  
        <hr></hr>
        <Row>
          <Col>{props.gameInfo.awayPitcher?.imageUrl ? renderPlayerImage(props.gameInfo.awayPitcher.imageUrl) : null}</Col>
          <Col>{props.gameInfo.homePitcher?.imageUrl ? renderPlayerImage(props.gameInfo.homePitcher.imageUrl) : null}</Col>
        </Row>
        <Row>
          <Col><a className="player-name-link" href={props.gameInfo.awayPitcher?.playerUrl} target="_">
              {props.gameInfo.awayPitcher?.name?.full}
            </a></Col>
          <Col><a className="player-name-link" href={props.gameInfo.homePitcher?.playerUrl} target="_">
              {props.gameInfo.homePitcher?.name?.full}
            </a></Col>
        </Row>
        <Row className="pitcher-stats">
          <Col><PitcherWinLoss pitcher={props.gameInfo.awayPitcher}></PitcherWinLoss></Col>
          <Col><PitcherWinLoss pitcher={props.gameInfo.homePitcher}></PitcherWinLoss></Col>
        </Row>
        <Row>
          <Col><PitcherStats pitcher={props.gameInfo.awayPitcher}></PitcherStats></Col>
          <Col><PitcherStats pitcher={props.gameInfo.homePitcher}></PitcherStats></Col>
        </Row>
        <Row>
          <Col><PitcherStats2 pitcher={props.gameInfo.awayPitcher}></PitcherStats2></Col>
          <Col><PitcherStats2 pitcher={props.gameInfo.homePitcher}></PitcherStats2></Col>
        </Row>
        <Row className="pitcher-stats">
          <Col>{renderAddWatch(props.gameInfo.gameId, props.gameInfo.awayPitcher?.playerId, props.leagueId, props.addToWatch, props.removeFromWatch, props.watchedPlayerKeys)}</Col>
          <Col>{renderAddWatch(props.gameInfo.gameId, props.gameInfo.homePitcher?.playerId, props.leagueId, props.addToWatch, props.removeFromWatch, props.watchedPlayerKeys)}</Col>
        </Row>
        {/* <Link to='/add-drop-scheduler' state={{leagueId: props.leagueId, teamId:'6'}}>Test</Link> */}
      </Col>
    );
  }

  const renderAddWatch = (gameId, pitcherId, leagueId, addToWatch, removeFromWatch, watchedPlayerKeys) => {
    // if game / pitcher is already watched, render "Unwatch"
    if (!addToWatch) {
      return null;
    }

    if (!pitcherId) {
      return null;
    }

    const isWatched = watchedPlayerKeys.some(x => parseInt(x.playerId) === parseInt(pitcherId) && parseInt(x.gameId) === parseInt(gameId));
    const text = isWatched ? "Remove Watch" : "Add To Watch"
    const link = isWatched ?  
      <span className="clickable" onClick={() => removeFromWatch(gameId, pitcherId, leagueId)}>{text}</span> :
      <span className="clickable" onClick={() => addToWatch(gameId, pitcherId, leagueId)}>{text}</span>
    return link;
  }

  function TeamStat(props) {
    return (
      <Row className="team-stat">
        {`${props.statLabel}: ${props.gameInfo[props.team][props.statName]}${getEnding(props.gameInfo[props.team][props.statName])}`}
      </Row>
    );
  }

  export default Game;
  
  const getEnding = (rank) => {
    if (rank === 1) {
      return "st";
    } else if (rank === 2) {
      return "nd"
    } else if (rank === 3) {
      return "rd"
    } else {
      return "th"
    }
  }
  
  function PitcherWinLoss(props) {
    const {pitcher} = props;
    if (!pitcher) {
      return null;
    }
    return (
      <span className="pitcher-stats">( <span className='bold'>{pitcher.stats.wins}</span> - <span className='bold'>{pitcher.stats.losses} )</span></span>
    )
  }

  function PitcherStats(props) {
    const {pitcher} = props;
    if (!pitcher) {
      return null;
    }
    return (
      <span className="pitcher-stats"><span className='bold'>{pitcher.stats.innings_pitched}</span> IP, <span className='bold'>{pitcher.stats.era.toFixed(2)}</span> ERA, <span className='bold'>{pitcher.stats.strikeouts}</span> SO</span>
    )
  }

  function PitcherStats2(props) {
    const {pitcher} = props;
    if (!pitcher) {
      return null;
    }
    const inningsPitchedPerAppearance = (pitcher.stats.innings_pitched / parseInt(pitcher.stats.games)).toFixed(1);
    const strikeoutsPerAppearance = ((pitcher.stats.strikeouts / pitcher.stats.innings_pitched) * inningsPitchedPerAppearance).toFixed(1);
    return (
      <p className="pitcher-stats"><span className='bold'>{inningsPitchedPerAppearance}</span> IP/G, <span className='bold'>{strikeoutsPerAppearance}</span> K/G</p>
    )
  }