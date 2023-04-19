import {Row, Col} from 'reactstrap'
import Login from './login';

const RegisterContainer = (props) => {
    const { setToken, registerFlag, setRegisterFlag} = props;
    
    return (
        <div 
        className='landing-page' 
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/Hexagon.svg)`}}
        >
            <Row className="white-text text-align-center">
                <Col sm="2"></Col>
                <Col sm="8">
                    {/* <h1>Big Title Banner With App Name</h1> */}
                </Col>
                
            </Row>
            <Row className="landing-page-content">
                <Col sm="2"></Col>
                <Col sm="4" className='white-text'>
                <h1>Find YOUR league's available pitchers with favorable matchups.</h1>
                <p></p>
                <p>Our app integrates with your Fantasy League to provide <strong>real-time, league specific </strong>data</p>
                <h5>Sign up now to immediately double your effectiveness as a manager.</h5>
                <ul className="d-none d-lg-block">
                    <li>Add players with favorable matchups before other managers even know they're available</li>
                    <li>Plan ahead for add/drops so you don't miss any opportunity for edge over your opponent</li>
                    <li>Manage multiple leagues at once</li>
                </ul>
                <div className='text-align-center'>
                <Login setToken={setToken} registerFlag={registerFlag} setRegisterFlag={setRegisterFlag}></Login>
                </div>
                </Col>
                <Col className="app-image-container" sm="5">
                    <img className="app-sample-img d-none d-lg-block" src={`${process.env.PUBLIC_URL}/combined-laptop-phone.png`}></img>
                    {/* <img className="app-phone-img d-block d-sm-none" src={`${process.env.PUBLIC_URL}/my-app-on-phone-1.png`}></img>                   */}
                </Col>
               
            </Row>
    </div>
    )
}

export default RegisterContainer;