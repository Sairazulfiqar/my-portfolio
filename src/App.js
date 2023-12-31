import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//import useKeys to use rooks library for surprise thing
import {useKeys} from 'rooks';
import { ScrollToTop } from './components/Scrolltotop';

// Components

function App() {
  useKeys(["KeyS", "KeyA", "KeyI", "KeyR", "KeyA"], () => {
    alert("Thanks for visiting!")
  
  });

  return (
    <div className='App'>
      <Header />
      <Home/>
      <Skills/>
      <Education/>
      <Work/>
      <Contact/>
      <Navbar />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default App;
