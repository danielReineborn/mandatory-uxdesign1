import React from "react";
import styled from "styled-components";

const BtnWrapper = styled.label` 
  box-sizing: border-box;
  position: relative;
  display: inline-block;
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
      display: inline-block;
      background-color: #9b9b9b;
      opacity: 0.15;
    }

  }

  .fakeBtn:before {
    content: "";
    display: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .fakeBtn:after {
    content: "";
    display: none;
    position: absolute;
    top: -2px;
    left: -2px;
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
      display: inline-block;
      background-color: #6200ee;
    }

    :checked:focus + .fakeBtn:after {
      display: inline-block;
      background-color: #6200ee;
      opacity: 0.22;
  
    }
    
    
    :active ~ .fakeBtn:after {
      display: inline-block;
      background-color: #6200ee;
      opacity: 0.35;
    }

    :disabled ~ .fakeBtn {

      box-sizing: border-box;
      
      height: 20px;
      width: 20px;
      background-color: transparent;
      border: 2px solid #696969;
      opacity: 0.5;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      
      :after {
        display: none;
      }
    }

    :checked:disabled ~ .fakeBtn {
      box-sizing: border-box;
      
      height: 20px;
      width: 20px;
      background-color: transparent;
      border: 2px solid #696969;
      opacity: 0.5;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      :before {
        display: inline-block;
        background-color: #8d8d8d;
      }

      :after {
        display: none;
      }
    }
  }


`

const DisabledRadio = styled.label`
  box-sizing: border-box;
  position: relative;
  display: block;
  margin: 8px;
  .fakeBtn {
    box-sizing: border-box;
    
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid #696969;
    opacity: 0.5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`

export default function RadioBtn({ checked, disabled, name }) {




  /*  let radio;
   if (!disabled) {
     radio = 
   } else {
     radio = <DisabledRadio>
       <span className="fakeBtn"></span>
 
     </DisabledRadio>
   } */

  return (
    <BtnWrapper>
      <input checked={checked} disabled={disabled} type="radio" name={name} id="radio" />
      <span className="fakeBtn"></span>
    </BtnWrapper>
  );
}