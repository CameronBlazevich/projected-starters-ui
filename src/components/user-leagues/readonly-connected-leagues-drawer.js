import { Row, Col } from "reactstrap";
import ReadOnlyConnectedLeagues from "./readonly-connected-leagues";


const ConnectedLeaguesDrawer = (props) => {
    const { show, setShow, showFreeAgents, userLeagues } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderLeaguesTable = () => {
        return (
            <Row>
                <Col>
                    <div className="text-align-center connected-leagues-header"><h4>Connected Leagues</h4></div>
                    <ReadOnlyConnectedLeagues closeDrawer={handleClose} showFreeAgents={showFreeAgents} userLeagues={userLeagues}></ReadOnlyConnectedLeagues>
                </Col>
            </Row>
        );
    }

    return (
        <div>
            {userLeagues?.length > 0 ? renderLeaguesTable() : null}

        </div>
    )
}

export default ConnectedLeaguesDrawer;