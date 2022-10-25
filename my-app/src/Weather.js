import { useEffect, useState } from "react"

function Weather() {
    const [todaysWeather, setTodaysWeather] = useState({})

    useEffect(() => {
        let date = new Date().toJSON().slice(0, 10);
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&hourly=temperature_2m,weathercode&daily=sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&start_date=${date}&end_date=${date}`)
            .then(res => res.json())
            .then(data => setTodaysWeather(data))
    }, [])

    if (Object.keys(todaysWeather).length > 0) {
        const { sunrise, sunset } = todaysWeather.daily
        const { temperature_2m, weathercode } = todaysWeather.hourly
        console.log(todaysWeather)
        return (
            <>
                <div>Click Here for todays Weather</div>
                <div>{sunrise}</div>
                <div>{sunset}</div>
            </>
        )
    }
    else {
        return <div>Loading ...</div>
    }
}

export default Weather;