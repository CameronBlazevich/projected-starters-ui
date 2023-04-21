import WeatherGame from "./weather-game";


const WeatherGameDay = (props) => {

    const games = props.games.map(game => {
        return <WeatherGame game={game}></WeatherGame>
    })

    return(
        <div className="container text-align-center">
            {games}
        </div>
    )

}

export default WeatherGameDay;