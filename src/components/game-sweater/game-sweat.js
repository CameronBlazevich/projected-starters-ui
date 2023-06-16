import { useEffect, useState } from "react";
import { getLiveGameData } from "../../api/game-sweat";
import { getCurrentMatchup, getCurrentPlayEvents } from "./live-data-parser";
import { Col, Row } from "reactstrap";




const GameSweat = (props) => {



    const currentPlayEvents = props.playEvents;
    const currentPlayDisplay = currentPlayEvents.map(event => {
        if (event.isPitch) {
            return (
                <div>
                    {`${event.pitchNumber}: ${event.details.description}`}
                </div>
            )
        }
    })

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

    return (
        <div className="text-align-center">      
            <Row>
                <Col lg="2" className="solid-border">Header</Col>
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
                    <Row>
                        <Col lg="4"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col>
                    </Row>
                    <Row>
                        <Col lg="4"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col>
                    </Row>
                    <Row>
                        <Col lg="4"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col><Col lg="1" className="hitter-zone"></Col>
                    </Row>
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
                        <Col><img src={`https://midfield.mlbstatic.com/v1/people/${matchup?.pitcher?.id}/spots/90`}></img></Col>
                        <Col>{matchup?.pitcher?.fullName}</Col>
                        <Col></Col>
                        <Col>{matchup?.batter?.fullName}</Col>
                        <Col><img src={`https://midfield.mlbstatic.com/v1/people/${matchup?.batter?.id}/spots/90`}></img></Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}


export default GameSweat;