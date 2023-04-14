import {Col, Row} from 'reactstrap'
import YahooAuthorization from './YahooAuthorization'
import Logout from './auth/logout'

const AppHeader = (props) => {
    return (
    <Row className="App-header">
        <Col className="logged-in-email">{props.email}</Col>
        <Col>
            <Logout logout={props.logout}></Logout>
        </Col>
        <Col></Col>
        <Col>
            <YahooAuthorization toggleModal={props.toggleModal}></YahooAuthorization>
        </Col>
    </Row>
    )
}

export default AppHeader;