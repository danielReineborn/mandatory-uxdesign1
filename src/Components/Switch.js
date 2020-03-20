import React from "react";
import styled from "styled-components";

const CustomSwitch = styled.label`
  position: relative;
  margin: 45px;
  display: block;
  background-color: #9b9b9b;
  width: 36px;
  height: 14px;
  border-radius: 18px;
  
  .slider {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 16px;
  }

  .slider:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    top: -3px;
    left: 0px;
    background-color: #ffffff;
    transition: 0.4s;
    border-radius: 50%;
    z-index:3;
    box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);
    -webkit-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75); 
    -moz-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);

  }

  input {
    height: 0px;
    width: 0px;
    opacity: 0;

    :checked + .slider:before {
      background-color: #6200ee;
      transform: translateX(18px);
      transition: 0.4s;
    }

    :checked + .slider {
      background-color: #a472ea;
    }

    :not(:checked) + .slider:hover:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 0px;
      background-color: #9b9b9b;
      opacity: 0.15;
      transition: 0.4s;
      border-radius: 50%;
      z-index: 2;
      transform: scale(2.35);
    }

    :checked + .slider:hover:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 18px;
      background-color: #a472ea;
      opacity: 0.15;
      transition: 0.15s;
      border-radius: 50%;
      z-index: 2;
      transform: scale(2.35);
    }

    :checked + .slider:active:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 18px;
      background-color: #a472ea;
      opacity: 0.55;
      transition: 0.15s;
      border-radius: 50%;
      z-index: 2;
      transform: scale(2.35);
    }

    :not(:checked) + .slider:active:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 0px;
      background-color: #9b9b9b;
      opacity: 0.55;
      transition: 0.4s;
      border-radius: 50%;
      transform: scale(2.35);
      z-index: 2;
    }

    :not(:checked):focus + .slider:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 0px;
      background-color: #9b9b9b;
      opacity: 0.4;
      transition: 0.4s;
      border-radius: 50%;
      transform: scale(2.35);
      z-index: 2;
    }

    :checked:focus + .slider:after {
      content: "";
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -3px;
      left: 0px;
      background-color: #a472ea;
      opacity: 0.4;
      transition: 0.4s;
      border-radius: 50%;
      z-index: 2;
      transform: translateX(18px) scale(2.35);
    }
  }
}
`

const DisabledSwitch = styled.label`
opacity: 0.8;
position: relative;
  margin: 45px;
  display: block;
  background-color: #c8c8c8;
  width: 36px;
  height: 14px;
  border-radius: 18px;
  
  .slider {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 16px;
  }

  .slider:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    top: -3px;
    left: 0px;
    background-color: #eeeeee;
    
    border-radius: 50%;
    z-index:3;
    box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);
    -webkit-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75); 
    -moz-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);

  }
`
const DisabledSwitchOn = styled.label`
position: relative;
opacity: 0.8;
  margin: 45px;
  display: block;
  background-color: #ccb8e6;
  width: 36px;
  height: 14px;
  border-radius: 18px;
  
  .slider {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-radius: 16px;
  }

  .slider:before {
    content: "";
    display: inline-block;
    height: 20px;
    width: 20px;
    position: absolute;
    top: -3px;
    left: 16px;
    background-color: #b38de8;
    border-radius: 50%;
    z-index:3;
    box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);
    -webkit-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75); 
    -moz-box-shadow: 0px 1px 2px 0px rgba(102,102,102,0.75);

  }

  input {
    height: 0px;
    width: 0px;
    opacity: 0;

    :checked + .slider {
      background-color: #a472ea;
    }
  }

`

export default function Switch({ disabled }) {

  let slider;
  if (!disabled.state) {
    slider = <CustomSwitch className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </CustomSwitch>
  } else if (!disabled.on) {
    slider = <DisabledSwitch>
      <span className="slider"></span>
    </DisabledSwitch>
  } else {
    slider = slider = <DisabledSwitchOn>
      <span className="slider"></span>
    </DisabledSwitchOn>
  }
  return slider;
}