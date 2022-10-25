import { useEffect, useState } from "react"
import WeatherTable from "./WeatherTable";

function Weather() {
    const [todaysWeather, setTodaysWeather] = useState({})

    //getting todays weather
    useEffect(() => {
        let date = new Date().toJSON().slice(0, 10);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m,precipitation,weathercode,windspeed_10m&daily=sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&start_date=${date}&end_date=${date}`)
            .then(res => res.json())
            .then(data => setTodaysWeather(data))
    }, [])

    //rendering weather once its recieved 
    if (Object.keys(todaysWeather).length > 0) {
        const { sunrise, sunset } = todaysWeather.daily
        const { temperature_2m } = todaysWeather.hourly
        const avgTemp = (temperature_2m.reduce((a, b) => a + b, 0) / temperature_2m.length).toFixed(2)
        //const renderedWeather = todaysWeather.hourly
        //<WeatherTable hourly={todaysWeather.hourly} />
        //console.log(todaysWeather)
        return (
            <div className="weather_preview">
                <div>Todays Avg Temp: {avgTemp} °F</div>
                <div>{sunrise[0].slice(11, 16)} Sunrise</div>
                <div>{sunset[0].slice(11, 16)} Sunset</div>
                <div>Click Here for more details</div>
                <WeatherTable hourly={todaysWeather.hourly} />
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