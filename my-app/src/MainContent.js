import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Good = styled.h2`
font-size: 60px;
/* animation: flicker 3s linear infinite; */
color: goldenrod;
text-shadow:0 0 2px #FFD100,0 0 30px #FFD100,0px 0px 5px #FFD100, 0 0 150px #FFD100;color:#FFD100;
:hover{
    margin-top: 2px;}


/* @keyframes flicker {
	0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
		opacity: .99;
		text-shadow: -1px -1px 0 $outline, 1px -1px 0 $outline, -1px 1px 0 $outline, 1px 1px 0 $outline, 0 -2px 8px, 0 0 2px, 0 0 5px #ff7e00, 0 0 15px #ff4444, 0 0 2px #ff7e00, 0 2px 3px #000;
	}
	20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
		opacity: 0.4;
		text-shadow: none;
	}
} */
`
const StyledLink = styled(Link)`
/* color: palevioletred;
font-size: 23px;
/*  */
text-decoration: none;
color: white;
&:hover {
    transform: scale(2);
    text-decoration: underline;
}
`

const Button = styled.button `
border-radius:25px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
font-size: 12px;
font-weight: 500;
padding: 7px 10px;
background-color: cornflowerblue;
margin: 5px;
`


function MainContent({ dayTime }) {
 const boxClass = dayTime ? "parent-container-light" : "parent-container-dark"
 const childBox = dayTime ? "box-light" : "box-dark"
 const [suggestion, setSuggestion] = useState([])

   

 useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(data => setSuggestion(data))
  }, [dayTime])
  console.log(suggestion)

  return (
        <div className={boxClass} >
            <Good className="box a">{dayTime ?
                "Good Morning!" :

                "Good Evening, Gorgeous!"}</Good>
            <span id="box b" className={childBox} ><Weather /></span>
            <span id="box c" className={childBox}>
            <ul className="list">Daily Habits:
                    <li>Make Bed</li>
                    <li>Drink a glass of warm lemon water</li>
                    <li>Stretch</li>
                    <li>Read</li>
                    <li>Apply sunscreen</li>
                </ul>

                <Button><StyledLink to="/todo">See to do list</StyledLink></Button>
            <p style={{color: "cornflowerblue"}}>Suggested Activity: 
                <p>{suggestion.activity}</p>
                </p>

            </span>
            <span id="box d" className={childBox}><DrinkContainer dayTime={dayTime} /></span>
            
        </div>
  )

}

export default MainContent;