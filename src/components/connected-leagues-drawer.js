import { Row, Col } from "reactstrap";
import ConnectedLeagues from "./connected-leagues";
import AddLeagueButton from "./add-league-button";


const ConnectedLeaguesDrawer = (props) => {
    const { show, setShow, showFreeAgents, openCreateLeague, userLeagues, deleteLeague } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderLeaguesTable = () => {
        return (
            <Row>
                <Col>
                    <div className="text-align-center connected-leagues-header"><h4>Connected Leagues</h4></div>
                    <ConnectedLeagues closeDrawer={handleClose} deleteLeague={deleteLeague} showFreeAgents={showFreeAgents} toggleModal={openCreateLeague} userLeagues={userLeagues}></ConnectedLeagues>
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