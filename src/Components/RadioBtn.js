import React from "react";
import styled from "styled-components";

const BtnWrapper = styled.label` 
box-sizing: border-box;
  position: relative;
  display: block;
  margin: 15px;

  .fakeBtn {
    box-sizing: border-box;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid #696969;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    

    :hover:after {
      display: block;
      background-color: #9b9b9b;
      opacity: 0.15;
    }

  }

  .fakeBtn:before {
    content: "";
    display: none;
    /* position: absolute;
    top: 0px;
    left: 0px; */
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .fakeBtn:after {
    content: "";
    display: none;
    position: absolute;
    top: -2.5px;
    left: -2.5px;
    width: 20px;
    height: 20px;
    transform: scale(2);
    border-radius: 50%; 
  }


  input {
    height: 0px;
    width: 0px;
    cursor: pointer;

    :checked ~ .fakeBtn {
      border: 2px solid #6200ee;
    }

    :checked ~ .fakeBtn:before {
      display: block;
      background-color: #6200ee;
    }

    :checked + .fakeBtn:after {
      display: block;
      background-color: #6200ee;
      opacity: 0.22;
  
    }
    
    
    :active ~ .fakeBtn:after {
      display: block;
      background-color: #6200ee;
      opacity: 0.35;
    }
  
  }


`


export default function RadioBtn() {


  function onClick(e) {
    console.log(e.target.checked)
  }

  return (
    <BtnWrapper>
      <input onClick={onClick} type="radio" name="radio" id="radio" />
      <span className="fakeBtn"></span>
    </BtnWrapper>
  )
}