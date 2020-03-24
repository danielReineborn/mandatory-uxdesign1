import React from "react";
import styled from "styled-components";

import TextField from "./TextField";
import Switch from "./Switch";
import CheckBox from "./CheckBox";
import RadioBtn from "./RadioBtn";

const FullWidth = styled.section`
width: 100vw;
`


const FlexContainer = styled.main`
display: flex;
border: 1px solid #9b9b9b;
flex-flow column;
margin: 15px auto 15px auto;

height: 500px;
width: 600px;

.info {
  margin: 5;
  padding: 5px;
  font-size: 18px;
  text-decoration: underline;
  text-align: center;
  color: #9b9b9b;
}

.info-dis {
  margin: 5;
  padding: 5px;
  text-decoration: underline;
  text-align: center;
  color: #9b9b9b;

}

.cont-main {
  height: 70%;
  width: 100%;
  display: flex;
  flex-flow column;

  justify-content: center;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid #9b9b9b;
}

.cont {
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.cont-sm {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow column;

}

.title {
  color: #9b9b9b;
  margin: 5px;
  padding: 5px;
}

`

export default function DemoPage() {

  return (
    <FullWidth>
      <FlexContainer>
        <h3 className="title">Text-field:</h3>
        <div className="cont-main">
          <p className="info">Interactive:</p>
          <TextField disabled={false} placeHolder="Label" width="280" />
          <div className="cont-sm">
            <p className="info">Custom width:</p>
            <TextField disabled={false} placeHolder="Cool Label" width="180" />
          </div>
        </div>
        <div className="cont">
          <div className="cont-sm">
            <p className="info-dis">Disabled:</p>
            <TextField className="text-dis-display" disabled={true} placeHolder="Label" width="280" />
          </div>
        </div>
      </FlexContainer>
      <FlexContainer>
        <h3 className="title">Switch:</h3>
        <div className="cont-main">
          <p className="info">Interactive:</p>
          <Switch disabled={{ state: false, on: true, }} />
        </div>
        <div className="cont">
          <div className="cont-sm">
            <p className="info-dis">Disabled On:</p>
            <Switch disabled={{ state: true, on: true, }} />
          </div>
          <div className="cont-sm">
            <p className="info-dis">Disabled Off:</p>
            <Switch disabled={{ state: true, on: false, }} />
          </div>
        </div>
      </FlexContainer>
      <FlexContainer>
        <h3 className="title">Radio-button:</h3>
        <div className="cont-main">
          <p className="info">Interactive:</p>
          <div className="cont">
            <RadioBtn name="radio" disabled={false} />
            <RadioBtn name="radio" disabled={false} />
            <RadioBtn name="radio" disabled={false} />
          </div>
        </div>

        <div className="cont">
          <div className="cont-sm">
            <p className="info-dis">Disabled checked:</p>
            <RadioBtn checked={true} disabled={true} />
          </div>
          <div className="cont-sm">
            <p className="info-dis">Disabled:</p>
            <RadioBtn disabled={true} />
          </div>
        </div>
      </FlexContainer>
      <FlexContainer>
        <h3 className="title">Checkbox:</h3>
        <div className="cont-main">
          <p className="info">Interactive:</p>
          <div className="cont">
            <CheckBox disabled={false} />
            <CheckBox disabled={false} />
            <CheckBox disabled={false} />

          </div>
        </div>
        <div className="cont">
          <div className="cont-sm">
            <p className="info-dis">Disabled checked:</p>
            <CheckBox checked={true} disabled={true} />
          </div>
          <div className="cont-sm">
            <p className="info-dis">Disabled:</p>
            <CheckBox checked={false} disabled={true} />
          </div>
        </div>
      </FlexContainer>
    </FullWidth >
  )
}