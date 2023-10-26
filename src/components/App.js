import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Works from "./Works";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Home/>
      <br/>
      <Works/>
      <br/>
      <Projects/>
      <br/>
    </div>

    <div className="footer">
      <Footer/>
    </div>
    </>
  );
}

export default App;
