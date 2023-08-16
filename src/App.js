import React from 'react';
import "./App.css";
import Header from "./components/Header";
// import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

// Components

function App() {
  return (
    <div className='Container-main'>
  
      <Header />
      <Navbar />
      <Home/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>

    </div>
  );
};

export default App;
