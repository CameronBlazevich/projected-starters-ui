import { Table, Button } from "reactstrap";
import AddLeagueButton from "./add-league-button";

const ConnectedLeagues = (props) => {
    const {userLeagues, toggleModal, showFreeAgents, deleteLeague, closeDrawer} = props; 

    const leagueIdMap = {1: "Yahoo", 2: "Espn"};

    const handleClick = (leagueId) => {
        closeDrawer();
        showFreeAgents(leagueId)
    }

    const tableRows = userLeagues.map((league, index) => {
        return (
            <tr key={index}>
                <td><Button onClick={() => handleClick(league.league_id)} color="success" size="sm">Show</Button></td>
                <td>{league.league_id}</td>
                <td>{leagueIdMap[league.league_type_id]}</td>
                <td><Button size="sm" color="danger" onClick={() => deleteLeague(league.league_id)}>Remove</Button></td>
            </tr>
        )
    }); 

    return (
    <div className="connected-leagues-container">
        <Table striped bordered hover>
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><AddLeagueButton onClick={toggleModal}></AddLeagueButton></td>
                </tr>
            </tbody>
        </Table>
    </div>
    )
}

export default ConnectedLeagues;