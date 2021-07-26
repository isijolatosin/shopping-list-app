import React from 'react';
import './components-style/CheckoutCard.css';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

function CheckoutCard({ item }) {
  const dispatch = useDispatch();

  // ADDING ITEMS TO THE REDUX STORE
  const addItemToBasket = () => {
    const product = {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      hasPrime: item.hasPrime,
    };

    // Sending the product through dispatch action to REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  // REMOVING ITEMS FROM THE REDUX STORE
  const removeItemFromBasket = () => {
    // Removing the Item from Redux STORE through dispatch action... the basket slice
    dispatch(removeFromBasket(item.id));
    // console.log(id);
  };

  return (
    <div className='checkout_container'>
      <div>
        <img className='checkout_image' src={item.image} alt='Selected-item' />
      </div>
      <div className='checkout_info'>
        <span>{item.category}</span>
        <h5>{item.title}</h5>
        <span className='checkout_description'>{item.description}</span>
        {item.hasPrime && (
          <div className='product_del'>
            <img
              className='product_del_image'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='product_del_text'>FREE Next-day Delivery</p>
          </div>
        )}
        <p className='products_price'>
          CA
          <Currency quantity={item.price} currency='CAD' />
        </p>
        <button onClick={addItemToBasket}>Add More</button>
        <button onClick={() => removeItemFromBasket()}>Remove</button>
      </div>
    </div>
  );
}

export default CheckoutCard;
