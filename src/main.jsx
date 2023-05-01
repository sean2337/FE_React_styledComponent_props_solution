import React from "react";
import styled from "styled-components";
import Box from "./components/box";
import Circle from "./components/circle";


const CircleWrapper = styled.div`
    display:flex;

`
const Main = () =>{

    const circleColorArr = ["pink","red","black","gray","green","blue","orange"];

    return (<>
        <Box boxColor="red" text="text1"/>
        <Box boxColor="blue" text="text2"/>
        <Box text="text3"/>
        <Box boxColor="pink" text="text4"/>


        <CircleWrapper>
            {circleColorArr.map((eachColor)=>(
                <Circle color = {eachColor}/>
            ))}
        </CircleWrapper>
    </>)
}

export default Main;