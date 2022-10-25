import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";

function MainContent({dayTime}){
return (
    <div>
        <h3>{dayTime ? 
        "Hello, Good Morning!" : 
        "Hello, Good Evening!"}</h3>
        <Weather />
        {/* <ToDo /> */}
        <DrinkContainer dayTime={dayTime}/>
    </div>
)
}

export default MainContent;