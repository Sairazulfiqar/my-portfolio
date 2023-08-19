import React from 'react'
import hardskills from '../img/hardskills.png';
import reacticon from '../img/reacticon.png';
import python from '../img/python.png';
import 'animate.css';
import '../App.css';

export const Skills = () =>{
  return (
    <div className="flex-child2" id="Skills">
      <div className='icons' id='hardskills'>
        <img src={python} alt='' id='phyton'/>  
        <img src={reacticon} alt='' id='reactpic'/>
        <img src={hardskills} alt='' id='iconspic'/>
      </div>
      <div className='softskills'>
        <h1 className='animate__animated animate__fadeIn'>Team work</h1>
        <h1 className='animate__fadeIn'> Leadership </h1>
        <h1 className='animate__fadeIn'> Comunication Skills</h1>
        <h1 className='animate__fadeIn'> Flexible </h1>
        <h1 className='animate__fadeIn'> Resolutive </h1>
      </div>
    </div>
  )
};

export default Skills;