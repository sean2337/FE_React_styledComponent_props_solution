import React from "react";
import styled from "styled-components";


const BoxEach = styled.div`
    width: 200px;
    height:100px;
    margin: 50px;
    border-radius: 30px;
    background-color: ${(props) => props.boxColor? props.boxColor:"green"};
    display:flex;
    align-items:center;
    justify-content:center;
`

const BoxText = styled.p`
    font-size: 30px;
    font-weight: 500;
`


const Box = (props) =>{
    return(<>
    <BoxEach boxColor = {props.boxColor}>
        <BoxText>box</BoxText>
    </BoxEach>
    </>)
}

export default Box;