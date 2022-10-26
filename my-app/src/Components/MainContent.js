import Weather from "./Weather";
// import ToDo from "./ToDo";
import DrinkContainer from "./DrinkContainer";
import styled from "styled-components";

const Box = styled.span`
background-color: white;
`
function MainContent({ dayTime }) {

   

    return (
        <Box>
            <h3>{dayTime ?
                "Hello, Good Morning!" :
                "Hello, Good Evening!"}</h3>
            <Weather />
            {/* <ToDo /> */}
            <DrinkContainer dayTime={dayTime} />
        </Box>
    )
}

export default MainContent;