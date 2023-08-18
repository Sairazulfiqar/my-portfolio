import React from 'react'
import "../App.css";
// import CV from "../assets/cv.pdf";
// import girl from "../img/girl.png"
import {Typewriter} from 'react-simple-typewriter';


export const Home = () => {

  const handleDone = () => {
  }

  return (
    <div className="flex-child1" id="Home"> 
    {/* <img src={girl} alt='' id='girl'/> */} 
      <h1 style={{ paddingTop: '70px', margin: '200px', fontSize:'50px', fontWeight: 'normal' }}>
        I am a{' '}
        <span style={{ color: 'purple', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Developer', 'Political Scientist', 'Freelancer']}
            loop={3}
            cursor
            cursorStyle= '_'
            typeSpeed={70} //Character typing speed in Milliseconds
            deleteSpeed={50} //Character deleting speed in Milliseconds
            delaySpeed={1000}
            onLoopDone={handleDone}

          />
        </span>
      </h1>
    </div>
  )
};

export default Home;
