import React from 'react';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Components

function App() {
  return (
    <div className='App'>
      <Header />
      <Home/>
      <Skills/>
      <Education/>
      <Work/>
      <Contact/>
      <Navbar />
      <Footer />
      </div>
  );
};

export default App;
