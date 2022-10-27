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
        <div>
            <Good>{dayTime ?
                "Hello, Good Morning!" :
                "Hello, Good Evening!"}</Good>
            <span className="parent-container">   
            <span className="box a" ><Weather /></span>
            <span className="box b"><Link to="/todo">ToDo</Link></span>
            <span className="box c"><DrinkContainer dayTime={dayTime} /></span>
            </span> 
        </div>
    )
}

export default MainContent;