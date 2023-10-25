import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
