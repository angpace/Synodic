import Weather from "./Weather";
import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";

function MainContent(){
return (
    <div>
        <h3>Hello, Good Morning!</h3>
        <Weather />
        <ToDo />
        <DrinkContainer />
    </div>
)
}

export default MainContent;