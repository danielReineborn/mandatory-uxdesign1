import React from 'react';
import './App.css';

import TextField from "./Components/TextField";
import Switch from "./Components/Switch";
import CheckBox from "./Components/CheckBox";
import RadioBtn from "./Components/RadioBtn";

function App() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <TextField disabled={false} placeHolder="Label" width="280" />
      <TextField disabled={false} placeHolder="Label" width="180" />
      <TextField disabled={true} placeHolder="Label" width="280" />


      <div>
        <Switch disabled={{ state: false, on: true, }} />
        <Switch disabled={{ state: true, on: false, }} />

        <Switch disabled={{ state: true, on: true, }} />
      </div>

      <div>
        <CheckBox />
        <CheckBox />
      </div>

      <div>
        <RadioBtn />

        <RadioBtn />

      </div>
    </div>
  );
}

export default App;
