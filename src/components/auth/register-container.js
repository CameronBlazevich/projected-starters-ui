import {Row, Col} from 'reactstrap'
import Login from './login';

const RegisterContainer = (props) => {
    const { setToken, registerFlag, setRegisterFlag} = props;
    
    return (
        <div className='landing-page'>
            <Row className="white-text-black-outline text-align-center">
                <Col sm="2"></Col>
                <Col sm="8"><h1>Big Title Banner With App Name</h1></Col>
                
            </Row>
            <Row className="landing-page-content white-text-black-outline">
                <Col sm="2"></Col>
                <Col sm="4">
                <h3>Quickly find YOUR league's available players that have favorable matchups.</h3>
                <p></p>
                <p>Our app integrates with your Fantasy League to provide <strong>real-time, league specific </strong>data</p>
                <h5>Sign up now to immediately double your effectiveness as a manager.</h5>
                <ul className="d-none d-lg-block">
                    <li>Add players with favorable matchups before other managers even know they're available</li>
                    <li>Plan ahead for add/drops so you don't miss any opportunity for edge over your opponent</li>
                </ul>
                <div className='text-align-center'>
                <Login setToken={setToken} registerFlag={registerFlag} setRegisterFlag={setRegisterFlag}></Login>
                </div>
                </Col>
                <Col className="d-none d-lg-block" sm="4"><img className="app-sample-img" src={`${process.env.PUBLIC_URL}/app-sample-1.png`}></img></Col>
            </Row>
    </div>
    )
}

export default RegisterContainer;