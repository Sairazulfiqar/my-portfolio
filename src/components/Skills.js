import React from 'react'
import reacticon from '../img/reacticon.png';
import java from '../img/java.png';
import html100 from '../img/html100.png';
import css3 from '../img/css3.png';
import python from '../img/python.png';
import mysql from '../img/mysql.png';
import 'animate.css';
import '../App.css';

export const Skills = () =>{
  return (
 
    <div className="flex-child2" id="Skills">   
      <div className='hsbox animate__animated animate__fadeInUp'>
        <h1>HARD SKILLS </h1> <br/>
      </div> <br/>
      <div className='hardskills'>
        <div className='hs animate__animated animate__fadeInUp'>
          <img src={html100} alt='' id='html100' />
        </div>
        <div className='hs animate__animated animate__fadeInUp'>
          <img src={java} alt='' id='java'/>
        </div>
        <div className='hs animate__animated animate__fadeInUp'>
          <img src={css3} alt='' id='css3'/>
        </div>
        <div className='hs animate__animated animate__fadeInUp'>
          <img src={reacticon} alt='' id='reactpic'/> 
        </div>
        <div className='hs animate__animated animate__fadeInUp'>
        <img src={python} alt='' id='python'/>
        </div>
        <div className='hs animate__animated animate__fadeInUp'>
          <img src={mysql} alt='' id='mysql'/>
        </div>
      </div> <br/>
      <br/>
      <div className='ssbox animate__animated animate__fadeInUp'>
        <h1>SOFT SKILLS </h1> <br/>
      </div>

      <div className='softskills'>
        <div className=' ss animate__animated animate__fadeInUp'>
          <h1>Teamwork</h1>
        </div>
        <div className='ss animate__animated animate__fadeInUp'>
          <h1> Leadership </h1>
        </div>
        <div className='ss animate__animated animate__fadeInUp'>
          <h1> Self-learning</h1>
        </div>
        <div className='ss animate__animated animate__fadeInUp'>
          <h1> Adaptability  </h1>
        </div>
        <div className='ss animate__animated animate__fadeInUp'>
          <h1> Comunication Skills</h1>
        </div>
      </div>
    </div>
  )
};

export default Skills;