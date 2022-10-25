function Header ({dayTime, setDayTime}){

function handleToggle(){
    setDayTime(dayTime => !dayTime)
}
return (
    <div> 
        <h1>Synodic
        {dayTime ? 
        <button onClick={handleToggle}>🌞</button>:
        
        <button onClick={handleToggle}>🌙</button>}
        </h1>

    </div>
)
}

export default Header;