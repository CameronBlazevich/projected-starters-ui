import {Row, Col} from 'reactstrap'
import { getLogoId } from '../../mlb-team-logos/logo-mapper'
import { getParkFactor } from '../../data/park-factors'
import ParkFactorPopover from './park-factor-popover'


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
          <Col className="park-factor">{parkData.Venue} <span id={`${parkData.TeamAbbr}`} className='bold park-factor'>PF: {parkData.ParkFactor}</span></Col>
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
        <Row>
          <Col><PitcherStats pitcher={props.gameInfo.awayPitcher}></PitcherStats></Col>
          <Col><PitcherStats pitcher={props.gameInfo.homePitcher}></PitcherStats></Col>
        </Row>
      </Col>
    );
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
  
  function PitcherStats(props) {
    const {pitcher} = props;
    if (!pitcher) {
      return null;
    }
    return (
      <p className="pitcher-stats"><span className='bold'>{pitcher.stats.innings_pitched}</span> IP, <span className='bold'>{pitcher.stats.era}</span> ERA, <span className='bold'>{pitcher.stats.strikeouts}</span> SO</p>
    )
  }