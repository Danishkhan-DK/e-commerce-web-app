import React from 'react'
import './Banner.css'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import { Carousel } from 'bootstrap';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div className='banner'>
    {/* //     <div className='banner-logo'>
            
    //   <img src="download.jfif" alt='banner'/>
    //   </div> */}


<Carousel interval={1000}>
      <Carousel.Item>
        <img
          className="w-50 carousel-image"
          src="seeding.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Best Quality Seeds</h3>
          <p>We have great seeds all over the world!!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="w-50 carousel-image"
          src="fertilzer.jfif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Buy Best Fertilizer</h3>
          <p>We have great fertilizers all over the world!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-50 carousel-image"
          src="motor.jfif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Motors for farming</h3>
          <p>We have great motors all over the world!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>




    </div>
  )
}

export default Banner
