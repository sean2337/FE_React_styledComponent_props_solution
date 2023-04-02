import React from "react";
import styled from "styled-components";
import Box from "./components/box";
import Circle from "./components/circle";

const CircleWrapper = styled.div`
    width: 100%;
    height: auto;
    display:flex;
`


const Main = () =>{

    const circleColorArr = ["pink","red","black","gray","green","blue","orange"];
    let circles = circleColorArr.map(color=>(<Circle circleColor = {color}/>))

    return (<>
        <Box boxColor ="red"/>
        <Box boxColor ="blue"/>
        <Box/>
        <Box boxColor="pink"/>

        
        <CircleWrapper>
            {circles}
        </CircleWrapper>
    
    </>)
}

export default Main;