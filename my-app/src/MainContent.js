import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Good = styled.h2`
font-size: 40px;
`


function MainContent({ dayTime }) {

   

    return (
        <span>
            <Good>{dayTime ?
                "Hello, Good Morning!" :
                "Hello, Good Evening!"}</Good>
            <span className="parentBox">   
            <span className="weatherBox"><Weather /></span>
            <span className="taskBox"><Link to="/todo">ToDo</Link></span>
            <span className="drinkBox"><DrinkContainer dayTime={dayTime} /></span>
            </span> 
        </span>
    )
}

export default MainContent;