import React from "react";
import styled from "styled-components";


const CircleShape = styled.div`
    width:50px;
    height: 50px;
    background-color: ${(props)=> props.circleColor};
    border-radius : 100%;
    margin:10px;
`


const Circle = (props) => {
    return(
    <>
        <CircleShape circleColor = {props.color} />
    
    </>
    )
}

export default Circle;