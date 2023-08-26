import React, { useState } from 'react';
import "../App.css";
import data from "./data.json";

export const Education = () => {
  const [jsonData, setJsonData] = useState(data)

  return (

    <div className="flex-child4" id="Education">

      <div className='education-row'>
        <div className='education-column'>
          <h3 className='title'> Education </h3>

          <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.education.map((education) => {
                  return <option> {education.f_start1}{education.f_end1}</option>
                })} </div>
                <h3> {data.education.map((education) => {
                  return <option>{education.title1}</option>
                })} </h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.education.map((education) => {
                  return <option> {education.f_start2}{education.f_end2}</option>
                })} </div>
                <h3> {data.education.map((education) => {
                  return <option>{education.title2}</option>
                })}</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.education.map((education) => {
                  return <option> {education.f_start3}{education.f_end3}</option>
                })} </div>
                <h3> {data.education.map((education) => {
                  return <option>{education.title3}</option>
                })}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className='education-column'>
          <h3 className='title'> Experience </h3>

          <div className='education-box'>
            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.f_start1}{workexperience.f_end1}</option>
                })}   </div>
                <h3 className='Location'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.location1}</option>
                })} </h3>
                <h3> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.company1}</option>
                })} </h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.f_start2}{workexperience.f_end2} </option>
                })}</div>
                <h3 className='Location'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.location2}</option>
                })} </h3>
                <h3> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.company2}</option>
                })}</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.f_start3}{workexperience.f_end3} </option>
                })} </div>
                <h3 className='Location'> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.location3}</option>
                })} </h3>
                <h3> {data.workexperience.map((workexperience) => {
                  return <option> {workexperience.company3}</option>
                })}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Education;