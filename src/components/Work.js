import React from 'react'
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../img/img1.jpg';
// import img2 from '../img/img2.jpg';
// import img3 from '../img/img3.jpg';



export const Work = () =>{

  return(
    <div className='flex-child4' id='Work'>

    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Example 1 </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Example 2</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3> Example 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Work;
