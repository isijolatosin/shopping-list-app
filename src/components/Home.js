import React from 'react';
import Banner2 from './Banner2';
import './components-style/Home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLoggedIn } from '../slices/basketSlice';

function Home() {
  const user = useSelector(userLoggedIn);
  return (
    <div className='home'>
      <Banner2 />
      <div className='bottom_container'>
        <h1>
          It’s never too early to prepare your retail customer experience for
          holiday shoppers.
        </h1>
        <h3>
          find your ecomm landing page inspiration from your creative ability
          within...
        </h3>
        <Link to={user ? '/product-page' : '/login'}>
          <button className='explore_button'>Explore Products Here</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
