import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";
import styled from "styled-components";
import { Link } from "react-router-dom"

const Good = styled.h2`
font-size: 50px;
`


function MainContent({ dayTime }) {
 const boxClass = dayTime ? "parent-container-light" : "parent-container-dark"
   

  return (
        <div className={boxClass} >
            <Good className="box a">{dayTime ?
                "Good Morning!" :
                "Good Evening!"}</Good>
            <span className="box b" ><Weather /></span>
            <span className="box c"><Link to="/todo">ToDo</Link></span>
            <span className="box d"><DrinkContainer dayTime={dayTime} /></span>
            
        </div>
  )

}

export default MainContent;