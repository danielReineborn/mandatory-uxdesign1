import React from 'react';
import './App.css';

import TextField from "./Components/TextField";

function App() {
  return (
    <div>
      <TextField disabled={false} placeHolder="Whatever you want.." width="280" />
    </div>
  );
}

export default App;
