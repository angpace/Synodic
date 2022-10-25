function WeatherTable({ hourly }) {
    //precipitation temperature_2m time weathercode windspeed_10m
    const { precipitation, temperature_2m, time, weathercode, windspeed_10m } = hourly

    function renderWeather(code) {
        if (code === 0) {
            return (
                <p>Clear Sky</p>
            )
        } else if (code === 1) {
            return (
                <p>Mainly Clear</p>
            )
        } else if (code === 2) {
            return (
                <p>Partly Cloudy</p>
            )
        } else if (code === 3) {
            return (
                <p>Overcast</p>
            )
        } else if (code === 45) {
            return (
                <p>Foggy</p>
            )
        } else if (code === 48) {
            return (
                <p>Depositing Rime Fog</p>
            )
        } else if (code === 51) {
            return (
                <p>Light Drizzle</p>
            )
        } else if (code === 53) {
            return (
                <p>Moderate Drizzle</p>
            )
        } else if (code === 55) {
            return (
                <p>Dense Drizzle</p>
            )
        } else if (code === 56) {
            return (
                <p>Ligth Freezing Drizzle</p>
            )
        } else if (code === 57) {
            return (
                <p>Dense Freezing Drizzle</p>
            )
        } else if (code === 61) {
            return (
                <p>Light Rain</p>
            )
        } else if (code === 63) {
            return (
                <p>Moderate Rain</p>
            )
        } else if (code === 65) {
            return (
                <p>Heavy Rain</p>
            )
        } else if (code === 66) {
            return (
                <p>Light Freezing Rain</p>
            )
        } else if (code === 67) {
            return (
                <p>Heavy Freezing Rain</p>
            )
        } else if (code === 71) {
            return (
                <p>Light Snowfall</p>
            )
        } else if (code === 73) {
            return (
                <p>Moderate Snowfall</p>
            )
        } else if (code === 75) {
            return (
                <p>Heavy Snowfall</p>
            )
        } else if (code === 77) {
            return (
                <p>Flurries</p>
            )
        } else if (code === 80) {
            return (
                <p>Light Rain Showers</p>
            )
        } else if (code === 81) {
            return (
                <p>Moderate Rain Showers</p>
            )
        } else if (code === 82) {
            return (
                <p>Violent Rain Showers</p>
            )
        } else if (code === 85) {
            return (
                <p>Light Snow Showers</p>
            )
        } else if (code === 86) {
            return (
                <p>Heavy Snow Showers</p>
            )
        } else if (code === 95) {
            return (
                <p>Light/Moderate Thunderstorm</p>
            )
        }
    }

    const renderTable = time.map((hour, index) => {
        return (
            <tr key={hour}>
                <td> {hour.slice(11, 16)} </td>
                <td>{renderWeather(weathercode[index])}</td>
                <td>{parseInt(temperature_2m[index])} °F</td>
                <td>{windspeed_10m[index].toFixed(1)} mp/h</td>
                <td>{precipitation[index].toFixed(2)} in</td>
            </tr>
        )
    })

    return (
        <table className="weatherTable">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Weather</th>
                    <th>Temprature</th>
                    <th>Wind Speed</th>
                    <th>Precipitation</th>
                </tr>
            </thead>
            <tbody>
                {renderTable}
            </tbody>
        </table>
    )
}

export default WeatherTable