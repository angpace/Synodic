import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Good = styled.h2`
font-size: 60px;
color: goldenrod;
text-shadow:0 0 2px #FFD100,0 0 30px #FFD100,0px 0px 5px #FFD100, 0 0 150px #FFD100;color:#FFD100;
:hover{
    margin-top: 2px;}
`
const Night = styled.h2`
font-size: 60px;
animation: flicker 2s linear infinite;
color: goldenrod;
text-shadow:0 0 2px #FFD100,0 0 30px #FFD100,0px 0px 5px #FFD100, 0 0 150px #FFD100;color:#FFD100;
:hover{
    margin-top: 2px;}
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
const Button = styled.button`
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

    const dailyHabbits = <ul className="list">Daily Habits
        <li>Make Bed</li>
        <li>Drink a glass of warm lemon water</li>
        <li>Stretch</li>
        <li>Read 1 Chapter</li>
        <li>Apply sunscreen</li>
    </ul>

    const nightlyHabbits = <ul className="list">Before Bed
        <li>Wipe down Counters</li>
        <li>Adjust Thermostat</li>
        <li>Stretch</li>
        <li>Take Vitamins</li>
        <li>Set Alarm</li>
    </ul>

    const morning = <Good className="box a">Good Morning!</Good> 
    const night = <Night className="box a">Good Evening, Gorgeous!</Night>

    return (
        <div className={boxClass} >{dayTime ? 
            morning :
            night
        }
            <span id="box b" className={childBox} ><Weather dayTime={dayTime} Button={Button}/></span>
            <span id="box c" className={childBox}>
                <div className="title">Suggested Activity
                <p>{suggestion.activity}</p>
                </div>
                    {dayTime ?
                    dailyHabbits :
                    nightlyHabbits}
                <Button><StyledLink to="/todo">See to do list</StyledLink></Button>
            </span>
            <span id="box d" className={childBox}><DrinkContainer dayTime={dayTime} /></span>

        </div>
    )

}

export default MainContent;