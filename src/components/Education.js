import React from 'react'
import "../App.css";

export const Education = () =>{

  return (
    <div className="flex-child4" id="Education">
      
      <div className='education-row'>
        <div className='education-column'>
          <h3 className='title'> Education </h3>          
          
          <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2020 </div>
                <h3> Curso</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2015 </div>
                <h3> Curso</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2015 </div>
                <h3> Curso</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='education-column'>
          <h3 className='title'> Experience </h3>          
          
          <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2018 </div>
                <h3> Curso</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2017 </div>
                <h3> Curso</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> 2015 </div>
                <h3> Curso</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Education;