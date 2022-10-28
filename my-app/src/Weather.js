import { useEffect, useState } from "react"
import { Link, Route } from "react-router-dom";
import WeatherTable from "./WeatherTable";
import styled from "styled-components";

const Button = styled.button `
border-radius:25px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 12px;
font-weight: 500;
padding: 7px 10px;
background-color: cornflowerblue;
`
const StyledLink = styled(Link)`
color: white;
text-decoration: none;
`

function Weather({dayTime}) {
    const [todaysWeather, setTodaysWeather] = useState({})
    const [weatherDetails, setWeatherDetails] = useState(false)

    function weatherDeatsClick(){
        setWeatherDetails(!weatherDetails)
    }

    //getting todays weather
    useEffect(() => {
        let date = new Date().toJSON().slice(0, 10);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=40.74&longitude=-73.92&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&start_date=${date}&end_date=${date}`)
            .then(res => res.json())
            .then(data => setTodaysWeather(data))
    }, [])

    //rendering weather once its recieved 
    if (Object.keys(todaysWeather).length > 0) {
        const { sunrise, sunset } = todaysWeather.daily
        const { temperature_2m } = todaysWeather.hourly
        const avgTemp = (temperature_2m.reduce((a, b) => a + b, 0) / temperature_2m.length).toFixed(2)

    const viewSunrise = <div>{sunrise[0].slice(11, 16)} Sunrise 🌅</div>

    const viewSunset = <div>{sunset[0].slice(11, 16)} Sunset 🌇</div>
    
        return (
            <div >
                <Route exact path="/">
                    <div>Avverage Temp: {avgTemp} F</div>
                    <div>{viewSunrise}</div>
                    <div>{viewSunset}</div>
                    <Button>
                        <StyledLink to="/weather/details">
                            See Weather
                        </StyledLink>
                    </Button>
                </Route>
                <Route path="/weather/details">
                    <Button>
                        <StyledLink to="/">
                            Return
                        </StyledLink>
                    </Button>
                    <WeatherTable dayTime={dayTime} hourly={todaysWeather.hourly} />
                </Route>    
            </div>
        )
    }
    else {
        return (
            <>
                <div>Loading ...</div>
                <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="loading" />
            </>
        )
    }
}

export default Weather;