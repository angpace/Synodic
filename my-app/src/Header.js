import styled from "styled-components"
import { Link } from "react-router-dom";

const Head = styled.h1`
font-size: 5em;
text-align: left;
`

const StyledLink = styled(Link)`
color: #EFE098;
-webkit-text-stroke: 1px palevioletred;
	text-shadow: 0px 2px 4px blue;
text-shadow: 2px 1px cornflowerblue;
margin: .2em;
text-decoration: none;
&:hover{
    color: paleturquoise ;
}
`

const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: .5em;
margin: .35em;
padding: 0.25em;
border: 0px solid palevioletred;
border-radius: .5px;
display: block;
background-color: transparent;
:hover{
margin-top: 2px;

}
`

function Header({ dayTime, setDayTime }) {


    function handleToggle() {
        setDayTime(dayTime => !dayTime)
    }
    return (

            <div>
                <Head> <em><StyledLink to="/">Synodic</StyledLink></em>
                    {dayTime ?
                        <Button className="toggle" onClick={handleToggle}>🌙</Button>:
                    <Button className="toggle" onClick={handleToggle}>🌞</Button>}
                </Head>
            </div>

    
    )
}

export default Header;