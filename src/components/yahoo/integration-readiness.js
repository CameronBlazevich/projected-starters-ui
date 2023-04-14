import { Row, Col, Button } from 'reactstrap'
import { useState } from 'react';
import { setLeagueId } from '../../api/yahoo-integration-info';

const IntegrationReadiness = (props) => {

    const renderCompletedForm = () => {
        return <div className='league-id-form'>
            <h6>You've completed required items. Time to connect.</h6>
            <Row><p>Your League Id: {props.yahooInfo.league_id}</p>
                {/* <Col><Button onClick={props.setLeagueId} size="sm">Edit League Id</Button></Col> */}
            </Row>



        </div>
    }


    if (props.yahooInfo?.league_id?.length > 0) {
        return renderCompletedForm()
    }

    return (
        <div className='league-id-form'>
            <h6>To connect your Yahoo account, we need your League Id:</h6>
            <LeagueIdForm leagueId={props.yahooInfo?.league_id} setLeagueId={props.setLeagueId}></LeagueIdForm>
        </div>)
}

export default IntegrationReadiness;


const LeagueIdForm = (props) => {
    return (
        <div className='league-id-form'>
            <div className="league-id-container"><img className="league-id-img" src={`${process.env.PUBLIC_URL}/LeagueId.png`}></img></div>
            <p></p>
            <Row><p>You can find your League Id in the URL after logging into the Yahoo Fantasy Baseball website.</p></Row>
            <p>It'll be the value after <span className="url-display">https://baseball.fantasysports.yahoo.com/b1/</span></p>
            <Row><p>If your URL looks like <span className="url-display">https://baseball.fantasysports.yahoo.com/b1/92842/6?</span></p></Row>
            <p>Then your league id is <span className="url-display">92842</span></p>
            <hr></hr>
            <h4>Enter League Id Here:</h4>
            <input type="text" placeholder="12345" defaultValue={props.leagueId} onChange={e => props.setLeagueId(e.target.value)}></input>
        </div>
    )
}