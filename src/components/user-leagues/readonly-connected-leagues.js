import { Table, Button } from "reactstrap";

const ReadOnlyConnectedLeagues = (props) => {
    const {userLeagues, showFreeAgents, closeDrawer} = props; 

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
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </Table>
    </div>
    )
}

export default ReadOnlyConnectedLeagues;