import { Table } from "reactstrap";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const AddDropPlan = (props) => {
    const planned = props.scheduleRecords?.filter(sr => sr.has_executed === false);
    const plannedRows = planned?.map(r => {
            const localDateTime = moment.utc(r.earliest_add_time_utc).local().format('dd MM/DD HH:mm A')
            return (
                <tr>
                    <td>{localDateTime}</td>
                    <td>{r.addPlayerName}</td>
                    <td>{r.dropPlayerName}</td>
                    <td><FontAwesomeIcon className="error" icon={faTrash} size="1x" onClick={() => props.removeFromPlan({addPlayerId: r.add_player_id, dropPlayerId: r.drop_player_id, leagueId: props.leagueId, teamId: props.teamId})}></FontAwesomeIcon></td>
                </tr>
            )
        }) || [];

        const completed = props.scheduleRecords?.filter(sr => sr.has_executed === true);
    const completedRows = completed?.map(r => {
            const localDateTime = moment.utc(r.earliest_add_time_utc).local().format('dd MM/DD HH:mm A')
            return (
                <tr>
                    <td>{localDateTime}</td>
                    <td>{r.addPlayerName}</td>
                    <td>{r.dropPlayerName}</td>
                    <td></td>
                </tr>
            )
        }) || [];


    return(
        <div className="add-drop-stage solid-border text-align-center">
            <h3>Add Drop Plan (Scheduled)</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Add</th>
                        <th>Drop</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {plannedRows}
                </tbody>
            </Table>
            <h3>Completed</h3>
            <Table>
                <thead>
                    <tr>
                        <th>Completed</th>
                        <th>Added</th>
                        <th>Dropped</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {completedRows}
                </tbody>
            </Table>
        </div>
    )
}


export default AddDropPlan;