import { useEffect, useState } from "react";

import { getSeasonStats } from "../../api/pitcher-stats";
import { Table } from "reactstrap";
import { useAuthContext } from "../../context/auth-context";
import { handleUnauthorized } from "../errors/handle-unauthorized";

const PitcherSeasons = (props) => {
    const [seasons, setSeasons] = useState();
    const {user, logout} = useAuthContext();

    useEffect(() => {
        console.log('Calling useEffect()')
        const getSeasons = async (token, yahooPlayerId) => {
            const resp = await getSeasonStats(token, yahooPlayerId);
            if (resp.success) {
                setSeasons(resp.data);
            } else {
                handleUnauthorized(resp.error, logout)
                console.error(resp.error)
            }
        }

        getSeasons(user.token, props.playerId)
    }, [props.playerId])


    if (!(seasons?.data?.length > 0)) {
        return <div>Seasons</div>
    }

    const getValueBetweenTags = (linkElement) => {
        var regex = />([^<]+)</;
        var match = regex.exec(linkElement);
        if (match && match.length > 1) {
            return match[1];
        }
        return null;
    }
   
    const actualSeasons = seasons.data.filter(s => s.Season.startsWith('<a href'))

    const sanitized = [];
    for (let i = 0; i < actualSeasons.length; i++) {
        const season = {...actualSeasons[i]};
        if (season.Season.startsWith('<a href')) {
            season.Season = getValueBetweenTags(season.Season)
        }
        if (season.Team.startsWith('<a href')) {
            season.Team = getValueBetweenTags(season.Team)
        }

        sanitized.push(season);
    }

    const seasonsFilter = ["2020", "2021", "2022", "2023", "TotalNot"]
    const seasonsToShow = sanitized.filter(s => seasonsFilter.includes(s.Season))
    console.log(seasonsToShow)

    const seasonRows = seasonsToShow.map((season, index) => {

        return (
            <tr className={"className"} key={index}>
                <td><span className="bold">{season.Season}</span></td>
                <td>{season.Team}</td>
                <td>{season.IP}</td>
                <td>{season.AVG?.toFixed(3)}</td>
                <td>{season.ER}</td>
                <td>{season.ERA?.toFixed(2)}</td>
                <td>{season.SO}</td>
                <td>{season.BABIP?.toFixed(3)}</td>
                <td>{season.FIP?.toFixed(2)}</td>
            </tr>
        )
    })

    return (
        <div>
            {/* <div>Splits Selector</div> */}
            <Table size="sm">
                <thead>
                    <tr className="border-none">
                        <th>Year</th>
                        <th>Team</th>
                        <th>IP</th>
                        <th>AVG</th>
                        <th>ER</th>
                        <th>ERA</th>
                        <th>SO</th>
                        <th>BABIP</th>
                        <th>FIP</th>
                    </tr>
                </thead>
                <tbody>
                    {seasonRows}
                </tbody>
            </Table>
        </div>
    )
}

export default PitcherSeasons;