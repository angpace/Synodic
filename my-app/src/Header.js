import styled from "styled-components"
import { Link } from "react-router-dom";

const Head = styled.h1`
font-size: 4em;
text-align: left;
color: palevioletred
`

const StyledLink = styled(Link)`
color: palevioletred;
/* :hover {
transform: scale(1.5);
} */
`

const Button = styled.button`
display: inline-block;
color: palevioletred;
font-size: .45em;
margin: .25em;
padding: 0.25em;
border: 0px solid palevioletred;
border-radius: .5px;
display: block;
background-color: transparent;
:hover{
margin-top: 2px;
/* transform: scale(1.5); */
}
`
/* const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`; */
function Header({ dayTime, setDayTime }) {


    function handleToggle() {
        setDayTime(dayTime => !dayTime)
    }
    return (

            <div>
                <Head><StyledLink to="/" style={{ textDecoration: 'none' }}>Synodic</StyledLink>
                    {dayTime ?
                        <Button className="toggle" onClick={handleToggle}>🌙</Button>:
                    <Button className="toggle" onClick={handleToggle}>🌞</Button>}
                </Head>
            </div>

    
    )
}

export default Header;