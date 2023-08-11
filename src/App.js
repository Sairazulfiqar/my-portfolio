import React from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

// Components

function App() {
  return (
    <div>
      <header />
      <h1>Hello World</h1>
      <Header />
      <Home/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>
      <Navbar />
    </div>
  );
};

export default App;
