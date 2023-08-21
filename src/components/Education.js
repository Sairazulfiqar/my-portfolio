import React from 'react'
import "../App.css";

export const Education = () =>{
  return (
    <div className="flex-child4" id="Education">
      <div className='education-row'>
        <div className='education-column'>
          <h3 className='title'> Education</h3>          <div className='education-box'>
            <div className='eduaction-content'>
              <div className='content'>
                <div className='year'> 2020 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='education-row'>
        <div className='education-column'>
          <h3 className='title'> Education</h3>          <div className='education-box'>
            <div className='eduaction-content'>
              <div className='content'>
                <div className='year'> 2015 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='education-row'>
        <div className='education-column'>
          <h3 className='title'> Education</h3>          <div className='education-box'>
            <div className='eduaction-content'>
              <div className='content'>
                <div className='year'> 2013 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;