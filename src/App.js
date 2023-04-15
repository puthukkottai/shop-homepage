import React from "react";
import "./App.css";
import Card from "./Component/parent-component/card";
function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Tomato</h1>
      </div>
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

export default App;
