import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Table } from "reactstrap";
import { getUserRoster } from '../../api/roster'
import useToken from "../auth/useToken";



const Roster = (props) => {
    const [roster, setRoster] = useState();
    const {token, setToken} = useToken();
    const location = useLocation();
    console.log(location)
    const leagueId = location.state?.leagueId;
    const teamId = location.state?.teamId;

    useEffect(() => {
        const getTeam = async (token, leagueId, teamId) => {
            const resp = await getUserRoster(token, leagueId, teamId);
            if (resp.success) {
                setRoster(resp.data);
            } else {
                console.error(resp.error)
            }
        }

        const props = {}
        if (token) {
            getTeam(token, leagueId, teamId);
        }

    }, [])

    console.log((roster))

    return (
        <div>
            <Table>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </Table>
        </div>
    )
}

export default Roster;