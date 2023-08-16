import React from 'react';
import "./App.css";
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
    <div className='App'>
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
