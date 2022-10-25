function Header({ dayTime, setDayTime }) {

    function handleToggle() {
        setDayTime(dayTime => !dayTime)
    }

    // function handleTheme(){
    //     setDayTheme(dayTheme => !dayTheme)
    // }
    const appClass = dayTime ? "App light" : "App dark"
    return (
        <div>
            <h1>Synodic
                {dayTime ?
                    <button className={appClass} onClick={handleToggle} >🌞</button> :

                    <button className={appClass} onClick={handleToggle}>🌙</button>}
            </h1>

        </div>
    )
}

export default Header;