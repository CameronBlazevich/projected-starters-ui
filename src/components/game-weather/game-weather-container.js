import { useEffect, useState } from "react";
import { getGameWeather } from "../../api/game-weather";
import WeatherGameDay from "./weather-game-day";
import { Col, Row } from "reactstrap";



const GameWeatherContainer = (props) => {
    const [gameWeather, setGameWeather] = useState();
    const [dateToShow, setDateToShow] = useState();

    useEffect(() => {
        const getWeatherForGames = async () => {
            const weather = await getGameWeather()
            if (weather.success) {
                setGameWeather(weather.data)
                setDateToShow(weather.data[1].date)
            } else {
                console.log(weather.error)
            }
        }

        getWeatherForGames();
    }, [])


    if (!gameWeather) {
        return <div>Game weather not defined</div>
    }

   

    const availableDates = gameWeather.map(gw => gw.date);

    const weatherDayToShow = gameWeather.find(gw => gw.date === dateToShow);

    const activeDateIndex = availableDates.indexOf(weatherDayToShow.date);

    const renderClickableDate = (availableDates, dateIndex) => {
        return <span onClick={() => setDateToShow(availableDates[dateIndex])}>{availableDates[dateIndex]}</span>
    }

    const renderDateSelector = (activeDateIndex, availableDates) => {
        if (activeDateIndex === 0 && availableDates?.[activeDateIndex + 1]) {
            return (
            <Row>
                <Col></Col>
                <Col>{availableDates[activeDateIndex]}</Col>
                <Col>{renderClickableDate(availableDates, activeDateIndex + 1)}</Col>
            </Row>
            )
        } else if (activeDateIndex > 0 && availableDates?.[activeDateIndex + 1]) {
            return (
                <Row>
                    <Col>{renderClickableDate(availableDates, activeDateIndex - 1)}</Col>
                    <Col>{availableDates[activeDateIndex]}</Col>
                    <Col>{renderClickableDate(availableDates, activeDateIndex + 1)}</Col>
                </Row>
                )
        } else {
            return (
                <Row>
                    <Col>{renderClickableDate(availableDates, activeDateIndex - 1)}</Col>
                    <Col>{availableDates[activeDateIndex]}</Col>
                    <Col></Col>
                </Row>
                )
        }
    }

    

    return (
        <div className="container text-align-center">
            {renderDateSelector(activeDateIndex, availableDates)}
            <WeatherGameDay games={weatherDayToShow.games}></WeatherGameDay>
            {/* <WeatherGame game={gameWeather[0].games[0]}></WeatherGame> */}
        </div>
    )
}

export default GameWeatherContainer;

