import React, { useEffect, useState } from 'react';
import AtBatResult from './at-bat-result';
import { getLiveGameData } from '../../api/game-sweat';
import { getCurrentMatchup, getCurrentPlayEvents } from './live-data-parser';
import { Col, Row } from 'reactstrap';

const GameSweat = (props) => {
  const strikezoneRef = React.useRef(null);

  const [strikezoneHeight, setStrikezoneHeight] = useState();
  const [strikezoneWidth, setStrikezoneWidth] = useState();
  const [showAtBatResult, setShowAtBatResult] = useState(false);

  useEffect(() => {
    const updateStrikezoneDimensions = () => {
      setStrikezoneWidth(strikezoneRef.current.offsetWidth);
      setStrikezoneHeight(strikezoneRef.current.offsetHeight);
    };

    window.addEventListener('resize', updateStrikezoneDimensions);
    updateStrikezoneDimensions();

    return () => {
      window.removeEventListener('resize', updateStrikezoneDimensions);
    };
  }, [strikezoneHeight, strikezoneWidth]);

  const currentPlayEvents = props.currentPlayEvents;
  const currentPlayDisplay = currentPlayEvents.map((event) => {
    if (event.isPitch) {
      return <div>{`${event.pitchNumber}: ${event.details.description}`}</div>;
    }
  });

  const xScale = 0.5;
  const yScale = 0.5;
  const x0 = strikezoneWidth / 2;
  const y0 = (-1 * strikezoneHeight) / 1.5;
  console.log(`height: ${strikezoneHeight}`);
  console.log(`width: ${strikezoneWidth}`);
  const currentPlayPitches = currentPlayEvents.map((event) => {
    if (event.isPitch) {
      const pitch = {
        pitchNumber: event.pitchNumber,
        x: event.pitchData.coordinates.pX * xScale * strikezoneWidth + x0,
        y: event.pitchData.coordinates.pZ * yScale * strikezoneHeight + y0,
        ballColor: event.details.ballColor,
      };

      console.log(pitch);

      return (
        <div
          className="pitch-circle"
          style={{
            left: `${pitch.x}px`,
            bottom: `${pitch.y}px`,
            backgroundColor: pitch.ballColor,
          }}
        >
          {pitch.pitchNumber}
        </div>
      );
    } else return [];
  });

  // // ==========================================
  // // ToDo: extract
  // const previousPlays = gameData?.liveData.plays.allPlays || [];
  // let playsToShow = [];
  // if (previousPlays?.length > 5) {
  //     playsToShow = previousPlays.slice(-5);
  // } else {
  //     playsToShow = previousPlays;
  // }

  // const playsToShowElements = playsToShow.map(play => {
  //     return (
  //         <Row><p>{play.result.description}</p></Row>
  //     )
  // })

  // //=========================

  const matchup = props.matchup;
  // if ()

  return (
    <div className="text-align-center">
      <Row>
        <Col lg="2" className="solid-border">
          Header
        </Col>
        <Col>
          <Row className="solid-border">
            <Col>Visitor</Col>
            <Col>Score</Col>
            <Col>Home</Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col lg="2">
          <Row>{currentPlayDisplay}</Row>
          <hr></hr>
          {/* {playsToShowElements} */}
        </Col>
        <Col className="solid-border">
          <Row className="height-50"></Row>
          <Row>
            <Col></Col>
            <Col>
              <div className="strike-zone solid-border" ref={strikezoneRef}>
                {currentPlayPitches}
              </div>
            </Col>
            <Col></Col>
          </Row>
          <Row className="height-50"></Row>
          {/* <Row>
              <Col lg="4"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
            </Row>
            <Row>
              <Col lg="4"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
            </Row>
            <Row>
              <Col lg="4"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
              <Col lg="1" className="hitter-zone"></Col>
            </Row> */}
        </Col>
        <Col>
          <Row>Scoreboard</Row>
          <Row>Lineups</Row>
          <Row>Other Shit</Row>
        </Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col>
          <Row>
            <Col>
              <img
                src={`https://midfield.mlbstatic.com/v1/people/${matchup?.pitcher?.id}/spots/90`}
              ></img>
            </Col>
            <Col>{matchup?.pitcher?.fullName}</Col>
            <Col className="">
              <Row></Row>
              <Row>
                {`${currentPlayEvents?.slice(-1)[0]?.count?.balls || 0} - ${
                  currentPlayEvents?.slice(-1)[0]?.count?.strikes || 0
                }`}
              </Row>
              <Row>
                {`${currentPlayEvents?.slice(-1)[0]?.count?.outs || 0} outs`}
              </Row>
            </Col>
            <Col>{matchup?.batter?.fullName}</Col>
            <Col>
              <img
                src={`https://midfield.mlbstatic.com/v1/people/${matchup?.batter?.id}/spots/90`}
              ></img>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default GameSweat;
