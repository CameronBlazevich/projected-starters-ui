import { Button, Col, Row } from "reactstrap"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";



const AddDropStage = (props) => {
    const [desiredRosteredDate, setDesiredRosteredDate] = useState();

    const hasPlayerToAdd = !!props.playerToAdd;
    const hasPlayerToDrop = !!props.playerToDrop;

    const submitArgs = {
        addPlayerId: props.playerToAdd?.playerId, 
        dropPlayerId: props.playerToDrop?.player_id,
        leagueId: props.leagueId,
        teamId: props.teamId,
        earliestAddTimeUtc: desiredRosteredDate //ToDo: Get this date as datetime in UTC
    }

    return (
        <div className="add-drop-stage solid-border text-align-center">
            <Row className="">
                <h3>Schedule Add Drop</h3>
            </Row>
            <Row>
                <Col><h5>Player To Add</h5></Col>
                <Col><h5>Player To Drop</h5></Col>
                <Col><h5>Scheduled Time</h5></Col>
            </Row>
            <Row>
                <Col><div className={hasPlayerToAdd ? 'solid-border-success add-drop-name' : ""}>{hasPlayerToAdd ? props.playerToAdd.name.full : 'Click Player in Watchlist'}</div></Col>
                <Col><div className={hasPlayerToDrop ? 'solid-border-warn add-drop-name' : ""}>{hasPlayerToDrop ? props.playerToDrop?.name.full : 'Click Player on Roster'}</div></Col>
                <Col><DatePicker selected={desiredRosteredDate} onChange={setDesiredRosteredDate} showTimeSelect dateFormat="E MM/d h:mm aa"></DatePicker></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col><Button color='primary' onClick={() => props.onSubmit(submitArgs)}>Schedule</Button></Col>
            </Row>
        </div>
    )
}

export default AddDropStage;