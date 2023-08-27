import React from 'react'
import reacticon from '../img/reacticon.png';
import java from '../img/java.png';
import html100 from '../img/html100.png';
import css from '../img/css.png';
import python from '../img/python.png';
import mysql from '../img/mysql.png';
import 'animate.css';
import '../App.css';

export const Skills = () =>{
  return (
    <div className="flex-child2" id="Skills">
      <div className='icons' id='hardskills'>
        <div className='up'>
            <img src={html100} alt='' id='html100'  className='animate__animated animate__fadeInUp'/>
            <img src={java} alt='' id='java' className='animate__animated animate__fadeInUp'/>
            <img src={css} alt='' id='css' className='animate__animated animate__fadeInUp'/>
        </div>
        <div className='down'>
          <img src={mysql} alt='' id='mysql' className='animate__animated animate__fadeInUp'/>
          <img src={reacticon} alt='' id='reactpic' className='animate__animated animate__fadeInUp'/>
          <img src={python} alt='' id='python' className='animate__animated animate__fadeInUp'/>  
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