import WeatherGame from "./weather-game";


const WeatherGameDay = (props) => {

    const games = props.games.map((game, index) => {
        return <WeatherGame key={index} game={game}></WeatherGame>
    })

    return(
        <div>
            {games}
        </div>
    )

}

export default WeatherGameDay;