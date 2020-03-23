import React from "react";
import styled from "styled-components"
import { Check } from "@material-ui/icons";

const Box = styled.label`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: 15px;
  
  .check {
    display: none;
  }

  .fx {
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transform: scale(2.5);
    background-color: transparent;
  }

  .checkmark {
    box-sizing: border-box;
    z-index: 2;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    border: 2px solid #636363;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  input {
    height: 0px;
    width: 0px;
    cursor: pointer;

    :checked + .checkmark {
      z-index: 2;
      
      height: 20px;
      width: 20px;
      border: 2px solid #6200ee;
      background-color: #6200ee;
      border-radius: 2px;
    }

    :checked + .checkmark > .check {
      display: inline-block;
      color: white;
     
    }

    :checked:active ~ .fx {
      box-sizing: border-box;
      z-index: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      opacity: 0.5;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(2.5);
      background-color: #a472ea;
    }

    :not(:checked):active ~ .fx {
      box-sizing: border-box;
      z-index: 1;
      position: absolute;
      opacity: 0.5;
      top: 0px;
      left: 0px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(2.5);
      background-color: #a472ea;
    }

    :not(:focus) ~ .checkmark:hover ~ .fx {

      box-sizing: border-box;
      z-index: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(2.5);
      background-color: #9b9b9b;
      opacity: 0.15;
      
    }

    :focus ~ .fx {
      box-sizing: border-box;
      z-index: 1;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(2.5);
      background-color: #ece1fd;
    }

    
  }

  input:checked:active ~ .checkmark:active ~ .fx {
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0.5;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transform: scale(2.5);
    background-color: #a472ea;
  }
  input:not(:checked):active ~ .checkmark:active ~ .fx {
    box-sizing: border-box;
    z-index: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0.5;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    transform: scale(2.5);
    background-color: #a472ea;
  }
`

const DisabledBox = styled.label`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin: 15px;
  .checkmarkDis {
    box-sizing: border-box;
    z-index: 2;
    
    height: 20px;
    width: 20px;
    border: 2px solid #636363;
    opacity: 0.5;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
`

export default function CheckBox({ disabled }) {



  return (

    disabled === false ?
      <Box>
        <input type="checkbox" name="" id="" />
        <span className="checkmark"><Check className="check"></Check></span>
        <span className="fx"></span>
      </Box > :
      <DisabledBox>
        <span className="checkmarkDis"></span>
      </DisabledBox>

  )
}