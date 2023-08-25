import React from 'react';
import "../App.css";
import CV from "../assets/CV.pdf";
import femdev from "../img/femdev.png";
// import girl from "../img/girl.png"
import ReactTyped from "react-typed";


export const Home = () => {
    return(
    <div className="flex-child1" id="Home">
        <div className='femdev'> <img src={femdev} alt='' id='femdevv'/> </div>
        <div className='stop'> <h1>Hi! I'm SAIRA</h1> </div> <br/>
        <div className='static'>
            {/* <h2> I'm a {""}</h2> */}
            <h2>
                 <span style={{color:'purple'}}>
                 <ReactTyped strings={["Web Developer","Political Scientist","Freelancer"]}
            typeSpeed={70}
            loopbackSpeed={10}
            repeat={Infinity}
            cursorChar="|"
            deleteSpeed={20}
            delaySpeed={1000}
            showCursor={true}/>
                    
                 </span> 
            </h2>
            <br></br>
        </div>

        <div className='CV'> 
            <a className='CV' href={CV} target="_blank" rel="noopener noreferrer" download={"CV.pdf"}> Download my cv</a>
        </div>


    </div> 
    );
};

export default Home;