import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from "reactstrap";
import ConnectedLeagues from "./connected-leagues";
import AddLeagueButton from "./add-league-button";


const ConnectedLeaguesDrawer = (props) => {
    const {show, setShow, showFreeAgents, openCreateLeague, userLeagues } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderLeaguesTable = () => {
        return <ConnectedLeagues showFreeAgents={showFreeAgents} toggleModal={openCreateLeague} userLeagues={userLeagues}></ConnectedLeagues>;
    }

    const renderEmptyLeaguesView = () => {
        return (
            <div>
                <h5>Add a League to Get Started</h5>
                <AddLeagueButton onClick={openCreateLeague}></AddLeagueButton>
            </div>
        )
    }

    return (
    <Offcanvas transition={true} direction="start" isOpen={show} backdrop={false}  unmountOnClose={false}>
        <OffcanvasHeader><Button className="drawer-hide-button" onClick={handleClose}>Hide</Button></OffcanvasHeader>
        <OffcanvasBody>
        {userLeagues?.length > 0 ? renderLeaguesTable() : renderEmptyLeaguesView()} 
           
        </OffcanvasBody>
    </Offcanvas>
    )
}

export default ConnectedLeaguesDrawer;