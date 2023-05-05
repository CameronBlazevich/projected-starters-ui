import { Table } from "reactstrap";
import { getLogoId } from "../../mlb-team-logos/logo-mapper";
import { convertTimezone, convertTo12Hour } from "../../dates/date-helper";
import { getParkFactor } from "../../data/park-factors";


const WeatherGame = (props) => {


    

    const tableHeaders = props.game.weather.map((hour, index) => {
        return <th key={index} className="table-constant">{convertTo12Hour(hour.time_local.slice(11, 16))}</th>
    })

    const firstCellMapper = { 0: "Conditions", 1: "Temp", 2: "Feels Like", 3: "Precip %", 4: "Wind Speed", 5: "Wind Dir" }
    const timeZoneDisplayMap = {'America/New_York': 'ET', 'America/Detroit': 'ET', 'America/Chicago': 'CT', "America/Phoenix": 'MT', "America/Los_Angeles": "PT"};

    const parkFactor = getParkFactor(props.game.homeTeam.teamAbbr);

    const hours = props.game.weather;
    
    return (
        <div>
            <div className="weather-game-header">
                <div>
                {/* <img className="weather-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.game.awayTeam.teamAbbr)}.svg`}></img>
                {` @ `} */}
                <img className="weather-team-logo" src={`https://www.mlbstatic.com/team-logos/${getLogoId(props.game.homeTeam.teamAbbr)}.svg`}></img>
                </div>
                <div>{parkFactor?.Venue}</div>
                {props.game.date} {convertTimezone(props.game.gameTime.time, props.game.gameTime.tz, props.game.stadium_timezone )} 
                
                {` (${timeZoneDisplayMap[props.game.stadium_timezone]})`} 
            </div>
            <Table className="text-align-center" size="sm" bordered>
                <thead>
                <tr className="table-constant">
                    <th></th>
                    {tableHeaders}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="table-constant">{firstCellMapper[0]}</td>
                    <td><img className="weather-condition-icon" src={hours[0].condition.icon}></img> {hours[0].condition.description}</td>
                    <td><img className="weather-condition-icon" src={hours[1].condition.icon}></img> {hours[1].condition.description}</td>
                    <td className="game-time-hours"><img className="weather-condition-icon" src={hours[2].condition.icon}></img> {hours[2].condition.description}</td>
                    <td className="game-time-hours"><img className="weather-condition-icon" src={hours[3].condition.icon}></img> {hours[3].condition.description}</td>
                    <td className="game-time-hours"><img className="weather-condition-icon" src={hours[4].condition.icon}></img> {hours[4].condition.description}</td>
                    <td><img className="weather-condition-icon" src={hours[5].condition.icon}></img> {hours[5].condition.description}</td>
                    <td><img className="weather-condition-icon" src={hours[6].condition.icon}></img> {hours[6].condition.description}</td>
                </tr>
                <tr>
                    <td className="table-constant">{firstCellMapper[1]}</td>
                    <td>{hours[0].temp_f}</td>
                    <td>{hours[1].temp_f}</td>
                    <td className="game-time-hours">{hours[2].temp_f}</td>
                    <td className="game-time-hours">{hours[3].temp_f}</td>
                    <td className="game-time-hours">{hours[4].temp_f}</td>
                    <td>{hours[5].temp_f}</td>
                    <td>{hours[6].temp_f}</td>
                </tr>
                <tr>
                    <td className="table-constant">{firstCellMapper[2]}</td>
                    <td>{hours[0].feels_like_f}</td>
                    <td>{hours[1].feels_like_f}</td>
                    <td className="game-time-hours">{hours[2].feels_like_f}</td>
                    <td className="game-time-hours">{hours[3].feels_like_f}</td>
                    <td className="game-time-hours">{hours[4].feels_like_f}</td>
                    <td>{hours[5].feels_like_f}</td>
                    <td>{hours[6].feels_like_f}</td>
                </tr>
                <tr>
                    <td className="table-constant">{firstCellMapper[3]}</td>
                    <td>{hours[0].chance_of_rain}</td>
                    <td>{hours[1].chance_of_rain}</td>
                    <td className="game-time-hours">{hours[2].chance_of_rain}</td>
                    <td className="game-time-hours">{hours[3].chance_of_rain}</td>
                    <td className="game-time-hours">{hours[4].chance_of_rain}</td>
                    <td>{hours[5].chance_of_rain}</td>
                    <td>{hours[6].chance_of_rain}</td>
                </tr>
                <tr>
                    <td className="table-constant">{firstCellMapper[4]}</td>
                    <td>{hours[0].wind.speed_mph}</td>
                    <td>{hours[1].wind.speed_mph}</td>
                    <td className="game-time-hours">{hours[2].wind.speed_mph}</td>
                    <td className="game-time-hours">{hours[3].wind.speed_mph}</td>
                    <td className="game-time-hours">{hours[4].wind.speed_mph}</td>
                    <td>{hours[5].wind.speed_mph}</td>
                    <td>{hours[6].wind.speed_mph}</td>
                </tr>
                <tr>
                    <td className="table-constant">{firstCellMapper[5]}</td>
                    <td>{hours[0].wind.direction}</td>
                    <td>{hours[1].wind.direction}</td>
                    <td className="game-time-hours">{hours[2].wind.direction}</td>
                    <td className="game-time-hours">{hours[3].wind.direction}</td>
                    <td className="game-time-hours">{hours[4].wind.direction}</td>
                    <td>{hours[5].wind.direction}</td>
                    <td>{hours[6].wind.direction}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default WeatherGame;