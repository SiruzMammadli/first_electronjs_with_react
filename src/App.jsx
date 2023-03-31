import React from "react";

const ipcRenderer = window.require('electron').ipcRenderer;

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="App">
      <button onClick={() => setValue(value + 1)}>{value}</button>
      <button onClick={() => ipcRenderer.send("number",value)}>Send value</button>
    </div>
  );
}

export default App;
