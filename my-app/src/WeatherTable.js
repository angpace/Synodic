function WeatherTable({ hourly, dayTime}) {
    //precipitation temperature_2m time weathercode windspeed_10m
    const { precipitation, temperature_2m, time, weathercode, windspeed_10m, relativehumidity_2m, apparent_temperature} = hourly

    function renderWeather(code) {
        if (code === 0) {
            return (
                <p>Clear Sky βοΈ</p>
            )
        } else if (code === 1) {
            return (
                <p>Mainly Clear π€οΈ</p>
            )
        } else if (code === 2) {
            return (
                <p>Partly Cloudy β</p>
            )
        } else if (code === 3) {
            return (
                <p>Overcast βοΈ</p>
            )
        } else if (code === 45) {
            return (
                <p>Foggy π«οΈ</p>
            )
        } else if (code === 48) {
            return (
                <p>Depositing Rime Fog π«οΈπ₯Ά</p>
            )
        } else if (code === 51) {
            return (
                <p>Light Drizzle π§οΈ</p>
            )
        } else if (code === 53) {
            return (
                <p>Moderate Drizzle π§οΈπ§οΈ</p>
            )
        } else if (code === 55) {
            return (
                <p>Dense Drizzle π§οΈπ§οΈπ§οΈ</p>
            )
        } else if (code === 56) {
            return (
                <p>Ligth Freezing Drizzle π₯Άπ§οΈ</p>
            )
        } else if (code === 57) {
            return (
                <p>Dense Freezing Drizzle π₯Άπ§οΈπ§οΈπ§οΈ</p>
            )
        } else if (code === 61) {
            return (
                <p>Light Rain β</p>
            )
        } else if (code === 63) {
            return (
                <p>Moderate Rain ββ</p>
            )
        } else if (code === 65) {
            return (
                <p>Heavy Rain βββ</p>
            )
        } else if (code === 66) {
            return (
                <p>Light Freezing Rain π₯Άβ</p>
            )
        } else if (code === 67) {
            return (
                <p>Heavy Freezing Rain π₯Άβββ</p>
            )
        } else if (code === 71) {
            return (
                <p>Light Snowfall π¨οΈ</p>
            )
        } else if (code === 73) {
            return (
                <p>Moderate Snowfall π¨οΈπ¨οΈ</p>
            )
        } else if (code === 75) {
            return (
                <p>Heavy Snowfall π¨οΈπ¨οΈπ¨οΈ</p>
            )
        } else if (code === 77) {
            return (
                <p>Flurries βοΈ</p>
            )
        } else if (code === 80) {
            return (
                <p>Light Rain Showers π¦οΈ</p>
            )
        } else if (code === 81) {
            return (
                <p>Moderate Rain Showers π¦οΈπ¦οΈ</p>
            )
        } else if (code === 82) {
            return (
                <p>Violent Rain Showers π¦οΈπ¦οΈπ¦οΈ</p>
            )
        } else if (code === 85) {
            return (
                <p>Light Snow Showers π¨οΈβ</p>
            )
        } else if (code === 86) {
            return (
                <p>Heavy Snow Showers π¨οΈπ¨οΈββ</p>
            )
        } else if (code === 95) {
            return (
                <p>Light/Moderate Thunderstorm π©οΈπ©οΈ</p>
            )
        }
    }

    const renderTable = time.map((hour, index) => {
        return (
           
            <tr style={dayTime ? {color: "black"} : {background: "white", opacity: .70}} key={hour}>
                <td>{hour.slice(11, 16)}</td>
                <td>{renderWeather(weathercode[index])}</td>
                <td>{parseInt(temperature_2m[index])} Β°F</td>
                <td>{parseInt(apparent_temperature[index])} Β°F</td>
                <td>{relativehumidity_2m[index]}%</td>
                <td>{windspeed_10m[index].toFixed(1)} mp/h</td>
                <td>{precipitation[index].toFixed(2)} in</td>
            </tr>
        )
    })

    let date = new Date()
    let currentHour = date.getHours()
    let currentMin = date.getMinutes()
    let todaysDate = date.toJSON().slice(0, 11)
    let fullTime = currentHour + ":" + currentMin
    const currentTime = todaysDate + currentHour + ":00"
    const findIndex = time.indexOf(currentTime)
    function currentWeather(index) {
        return (
            <div className="currentWeather">
                <h1>Current Weather</h1>
                <h3>Time: {fullTime}</h3>
                <h1>{renderWeather(weathercode[index])}</h1>
                <h2>Temperature: {parseInt(temperature_2m[index])} Β°F</h2>
                <h2>Feels Like: {parseInt(apparent_temperature[index])} Β°F</h2>
                <h4>Humidity: {relativehumidity_2m[index]}%</h4>
                <h4>Wind Speed:{windspeed_10m[index].toFixed(1)} mp/h</h4>
                <h4>Precipitation: {precipitation[index].toFixed(2)} in</h4>
            </div>
        )
    }

    return (
        <>
            <div className="tableContainer">
                <table className="weatherTable">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Weather</th>
                            <th>Temperature</th>
                            <th>Feels Like</th>
                            <th>Humidity</th>
                            <th>Wind Speed</th>
                            <th>Precipitation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable}
                    </tbody>
                </table>
            </div>
            {currentWeather(findIndex)}
        </>
    )
}

export default WeatherTable