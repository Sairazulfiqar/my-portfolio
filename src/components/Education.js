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
                  return <p> {education.date1}</p>
                })} </div>
                <h3> {data.education.map((education) => {
                return <p>{education.entity1}</p>
                })} </h3>
                <h3> {data.education.map((education) => {
                  return <p>{education.title1}</p>
                })} </h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.education.map((education) => {
                  return <p>{education.date2} </p>
                })} </div>
                <h3> {data.education.map((education) => {
                return <p>{education.entity2}</p>
                })} </h3>
                <h3> {data.education.map((education) => {
                  return <p>{education.title2}</p>
                })}</h3>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.education.map((education) => {
                  return <p> {education.date3}</p>
                })} </div>
                <h3> {data.education.map((education) => {
                  return <p>{education.entity3}</p>
                })} </h3>
                <h3> {data.education.map((education) => {
                  return <p>{education.title3}</p>
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
                  return <p> {workexperience.date1}</p>
                })}   </div>
                <div className='Location'> {data.workexperience.map((workexperience) => {
                  return <p> {workexperience.location1}</p>
                })} </div>
                <div> {data.workexperience.map((workexperience) => {
                  return <h3> {workexperience.company1}</h3>
                })} </div>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.workexperience.map((workexperience) => {
                  return <p> {workexperience.date2} </p>
                })}</div>
                <div className='Location'> {data.workexperience.map((workexperience) => {
                  return <p> {workexperience.location2}</p>
                })} </div>
                <div> {data.workexperience.map((workexperience) => {
                  return <h3> {workexperience.company2}</h3>
                })}</div>
              </div>
            </div>

            <div className='education-content'>
              <div className='content'>
                <div className='year'> {data.workexperience.map((workexperience) => {
                  return <p> {workexperience.date3} </p>
                })} </div>
                <div className='Location'> {data.workexperience.map((workexperience) => {
                  return <p> {workexperience.location3}</p>
                })} </div>
                <div> {data.workexperience.map((workexperience) => {
                  return <h3> {workexperience.company3}</h3>
                })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Education;