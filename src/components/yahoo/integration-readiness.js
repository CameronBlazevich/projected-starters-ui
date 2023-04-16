import { Row } from 'reactstrap'
import { useRef, useEffect } from 'react';

const IntegrationReadiness = (props) => {
    return (
        <div className='league-id-form'>
            <h6>To show league specific data, we need your league ID:</h6>
            <LeagueIdForm setLeagueId={props.setLeagueId}></LeagueIdForm>
        </div>)
}

export default IntegrationReadiness;


const LeagueIdForm = (props) => {
    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, []);

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
            <input type="text" ref={inputReference} placeholder="12345" onChange={e => props.setLeagueId(e.target.value)}></input>
        </div>
    )
}