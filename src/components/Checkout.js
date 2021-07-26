import React from 'react';
import { selectItems, userLoggedIn } from '../slices/basketSlice';
import { useSelector } from 'react-redux';
import CheckoutCard from './CheckoutCard';
import './components-style/Checkout.css';
import { Link } from 'react-router-dom';
import db from '../firebase';
import Currency from 'react-currency-formatter';

function Checkout() {
  const items = useSelector(selectItems);
  const user = useSelector(userLoggedIn);

  // Calculating Subtotal
  const subTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className='top_wrapper'>
        <h3 className='user'>Hi {user}</h3>
        <h2 className='container_header'>
          {items.length <= 1
            ? `You Have ${items.length} item in Your Cart`
            : items.length > 1
            ? `You Have ${items.length} items in Your Cart`
            : null}
        </h2>
      </div>
      <div className='container'>
        <div className='items_container'>
          {items.map((item) => (
            <CheckoutCard key={item.id} item={item} />
          ))}
        </div>
        <div className='proceed_container'>
          <Link to='/shopping-history'>
            <button className='button'>Proceed to Your Shopping History</button>
          </Link>
          <span>
            Your Subtotal is:{' '}
            <span className='currency'>
              CA
              <Currency quantity={subTotal} currency='CAD' />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
