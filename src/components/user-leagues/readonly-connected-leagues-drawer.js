import { Row, Col } from "reactstrap";
import ReadOnlyConnectedLeagues from "./readonly-connected-leagues";
import { useAuthContext } from "../../context/auth-context";
import { handleUnauthorized } from '../errors/handle-unauthorized'
import { getUserLeagues } from '../../api/user-leagues';
import { useEffect, useState } from "react";


const ConnectedLeaguesDrawer = (props) => {
    const [userLeagues, setUserLeagues] = useState();
    const { user, logout } = useAuthContext();
    const { show, setShow, showFreeAgents} = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (user) {
            async function getLeagues(authToken) {
                const userLeaguesResponse = await getUserLeagues(authToken);
                if (userLeaguesResponse.success) {
                    setUserLeagues(userLeaguesResponse.data)
                } else {
                    handleUnauthorized(userLeaguesResponse.error, logout)
                    console.log(`Something went wrong getting user leagues`)
                }
            }

            getLeagues(user.token);
        }
    }, [])


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