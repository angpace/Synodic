function Header({ dayTime, setDayTime }) {

    function handleToggle() {
        setDayTime(dayTime => !dayTime)
    }
    return (

            <div>
                <h1 className="header"> Synodic
                    {dayTime ?
                        <button className="toggle" onClick={handleToggle}>🌙</button>:
                    <button className="toggle" onClick={handleToggle}>🌞</button>}
                </h1>
            </div>

    
    )
}

export default Header;