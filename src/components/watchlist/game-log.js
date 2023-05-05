import { Table } from "reactstrap";


const GameLog = (props) => {

    if (!props.gameLog?.length > 0) {
        return <div></div>
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // getMonth() returns a zero-based index
        const day = date.getDate();
        return `${month}/${day}`;
      }
    const gameLogTableRows = props.gameLog.map((game, index) => {
        //format date display
        return (
            <tr key={index}>
                <td>{formatDate(game.date)}</td> 
                <td>{game.opponent}</td>
                <td>{game.score}</td>
                <td>{game.stats.decision}</td>
                <td>{game.stats.innings_pitched}</td>
                <td>{game.stats.hits}</td>
                <td>{game.stats.runs}</td>
                <td>{game.stats.earned_runs}</td>
                <td>{game.stats.walks}</td>
                <td>{game.stats.strikeouts}</td>
                <td>{game.stats.homeruns}</td>
                <td>{game.stats.era}</td>
                <td>{game.stats.whip}</td>
                <td>{game.stats.baa}</td>
            </tr>
        )
    })
    return <div>
         <Table size="sm">
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Opp</th>
                        <th>Score</th>
                        <th>Dec</th>
                        <th>IP</th>
                        <th>H</th>
                        <th>R</th>
                        <th>ER</th>
                        <th>BB</th>
                        <th>K</th>
                        <th>HR</th>
                        <th>ERA</th>
                        <th>WHIP</th>
                        <th>BAA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameLogTableRows}
                    </tbody>
                </Table>
    </div>

}


export default GameLog;