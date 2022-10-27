import styled from "styled-components"
import { Link } from "react-router-dom";

const Head = styled.h1`
font-size: 4em;
text-align: left;
`

const StyledLink = styled(Link)`
color: palevioletred;
text-shadow: 2px 2px #994E67;
margin: .2em;
text-decoration: none;
&:hover{
    color: #ff0000;
}
`

const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: .6em;
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
                <Head><StyledLink to="/">Synodic</StyledLink>
                    {dayTime ?
                        <Button className="toggle" onClick={handleToggle}>🌙</Button>:
                    <Button className="toggle" onClick={handleToggle}>🌞</Button>}
                </Head>
            </div>

    
    )
}

export default Header;