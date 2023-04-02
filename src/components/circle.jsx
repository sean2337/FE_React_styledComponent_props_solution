import React from "react";
import styled from "styled-components";

const EachCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.circleColor? props.circleColor:"green"};
    border-radius: 100%;
    margin: 10px;
`




const Circle = (props) =>{
    return(<>
        <EachCircle circleColor = {props.circleColor}/>
    </>)
}

export default Circle;