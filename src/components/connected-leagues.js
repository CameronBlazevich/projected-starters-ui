import { Table, Button } from "reactstrap";
import AddLeagueButton from "./add-league-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const ConnectedLeagues = (props) => {
    const {userLeagues, toggleModal, showFreeAgents, deleteLeague, closeDrawer} = props; 

    const leagueIdMap = {1: "Yahoo", 2: "Espn"};

    const handleClick = (leagueId) => {
        closeDrawer();
        showFreeAgents(leagueId)
    }

    const tableRows = userLeagues.map((league, index) => {
        const icon = league.team_id ? 
        <FontAwesomeIcon className="error" icon={faTimes} size="1x" onClick={() => deleteLeague(league.league_id)}></FontAwesomeIcon> :
        <FontAwesomeIcon className="primary" icon={faPlus} size="1x" onClick={() => deleteLeague(league.league_id)}></FontAwesomeIcon>


        return (
            <tr key={index}>
                <td><Button onClick={() => handleClick(league.league_id)} color="success" size="sm">Show</Button></td>
                <td>{league.league_id}</td>
                <td>{leagueIdMap[league.league_type_id]}</td>
                {/* <td>{league.team_id} {icon}</td> */}
                <td><FontAwesomeIcon icon={faTrash} size="1x" onClick={() => deleteLeague(league.league_id)}>Remove</FontAwesomeIcon></td>
            </tr>
        )
    }); 

    return (
    <div className="connected-leagues-container">
        <Table size="sm" striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th>Id</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
        <AddLeagueButton onClick={toggleModal}></AddLeagueButton>
    </div>
    )
}

export default ConnectedLeagues;