import React from 'react';
// import "./Navbar.css";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


// Components

function App() {
  return (
    <div>
      <h1 ClassName='text text-red-700'>Hello World</h1>
      {/* <Navbar/> */}
      <Home/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
