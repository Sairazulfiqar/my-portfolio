import React from 'react'
import devlogs from '../img/devlogs.png';
// import hardskills from '../img/hardskills.png';
import reacticon from '../img/reacticon.png';
import python from '../img/python.png';
import mysql from '../img/mysql.png';
import 'animate.css';
import '../App.css';

export const Skills = () =>{
  return (
    <div className="flex-child2" id="Skills">
      <div className='icons' id='hardskills'>
        <div className='up'>
            <img src={devlogs} alt='' id='devlogs'/>  
        </div>
        <div className='down'>
          <img src={mysql} alt='' id='mysql'/>
          <img src={reacticon} alt='' id='reactpic'/>
          <img src={python} alt='' id='python'/>  
        </div>
      </div>
      
      <div className='softskills'>
        
        <h1 className='animate__animated animate__fadeInUp'>Team work</h1>
        <h1 className='animate__animated animate__fadeInUp'> Leadership </h1>
        <h1 className='animate__animated animate__fadeInUp'> Comunication Skills</h1>
        <h1 className='animate__animated animate__fadeInUp'> Flexibility </h1>
        <h1 className='animate__animated animate__fadeInUp'> Problem Solving </h1>
      </div>
    </div>
  )
};

export default Skills;