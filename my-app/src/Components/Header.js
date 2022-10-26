import styled from "styled-components"
const Title = styled.h1`
font-size: 4em;
text-align: left;
color: palevioletred
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

function Header({ dayTime, setDayTime }) {



    function handleToggle() {
        setDayTime(dayTime => !dayTime)
    }
    return (

            <div>
                <Title> Synodic
                    {dayTime ?
                        <Button className="toggle" onClick={handleToggle}>🌙</Button>:
                    <Button className="toggle" onClick={handleToggle}>🌞</Button>}
                </Title>
            </div>

    
    )
}

export default Header;