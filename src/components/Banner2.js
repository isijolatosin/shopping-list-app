import React from 'react';
import './components-style/Banner2.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='Banner2'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            className='banner_gradient'
            loading='lazy'
            src='https://links.papareact.com/gi1'
            alt=''
          />
        </div>
        <div>
          <img
            className='banner_gradient'
            loading='lazy'
            src='https://links.papareact.com/6ff'
            alt=''
          />
        </div>
        <div>
          <img
            className='banner_gradient'
            loading='lazy'
            src='https://links.papareact.com/7ma'
            alt=''
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
