import React, { useState } from "react";
import styled, { keyframes } from "styled-components";


const increaseSize = keyframes`
from {
  width: 85%;
  left: 7.5%;
}

to {
  width: 100%;
  left: 0%;

}
`;

const Container = styled.div`

box-sizing: border-box;
position: relative;
width: ${props => props.width ? props.width + "px" : '280px'};
height: 56px;
margin: 15px;
box-shadow: none;

form {
  position: relative;
  width: ${props => props.width ? props.width + "px" : '280px'};
  height: 56px;
  border: none;
  box-shadow: none;
  
}

label {
  position: absolute;
  top: 16px;
  left: 12px;
  color: #626262;
  transform: translate(0px, 0px);
  transition: all 0.2s ease-in;

  :hover {
  cursor: text;
  }

  :hover ~ .text-field {
    background-color: rgba(236, 236, 236, 0.85);
    border-bottom: 1px solid #1f1f1f;
  }
}
.line-cont {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: transparent;
  
}

.text-field {
  box-sizing: border-box;
  border: none;
  width: 100%;
  height: 56px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #9b9b9bff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 16px 12px 1px 12px;
  font-size: 14px;

  :hover {
  background-color: rgba(236, 236, 236, 0.85);
  border-bottom: 1px solid #1f1f1f;
  }

  
  :focus {

    background-color: #dcdcdc;
    outline: none;
  }

  :focus ~ .line-cont {
    animation: ${increaseSize} 0.1s;
    height: 2px;
    width: 100%;
    background-color: #6200ee;
    animation-fill-mode: forwards;
  }

  :focus ~ .label{

    color: #6200ee;
    
    font-size: 0.75rem;
    transform: translate(0px, -12px);
  }

  :valid:not(:focus) + label {
    color: #626262;
    font-size: 0.75rem;
    transform: translate(0px, -12px);

  }
  
}

`;


const Disabled = styled.div`
  margin-bottom: 18px;

.disabled-cont {

  width: ${props => props.width ? props.width + "px" : '280px'};
  height: 56px;
  background-color: #e0e0e0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

}

.disabled-label {
  padding-left: 12px;
  line-height: 56px;
  color: #8a8a8a;
}

`

export default function TextField({ id, disabled, width, placeHolder }) {


  let textField;
  if (!disabled) {
    textField = <Container width={width}>
      <form className="form">
        <input required autoComplete="off" className="text-field" id={id} type="text" />
        <label htmlFor={id} className="label">{placeHolder}</label>
        <div className="line-cont">
        </div>
      </form>
    </Container>

  } else {
    textField = <Disabled width={width}>
      <div className="disabled-cont">
        <p className="disabled-label">{placeHolder}</p>

      </div>
    </Disabled >
  }
  return textField;
}