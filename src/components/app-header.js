import {Col, Row, Button} from 'reactstrap'
import Logout from './auth/logout'

const AppHeader = (props) => {
    const handleClick = () => {
        const client_id = process.env.REACT_APP_YAHOO_CLIENT_ID;
        
        const redirect_uri = encodeURI(process.env.REACT_APP_YAHOO_REDIRECT_URI)
        const url = `https://api.login.yahoo.com/oauth2/request_auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&language=en-us`;
        // eslint-disable-next-line
        location.href = url;
    }
    
    return (
    <Row className="App-header">
        <Col className="logged-in-email">{props.email}
            <Logout logout={props.logout}></Logout>
        </Col>

        <Col className="yahoo-auth"><span className="d-none d-sm-block">Click to Authorize</span>
            <Button className="margin-left-5" size="sm" onClick={() => handleClick()}>Yahoo</Button>
        </Col>
    </Row>
    )
}

export default AppHeader;