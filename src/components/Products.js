import React from 'react';
import Currency from 'react-currency-formatter';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import '../components/components-style/Products.css';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToBasket, userLoggedIn } from '../slices/basketSlice';
import db, { timestamp } from '../firebase';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, price, image, category, description }) {
  const user = useSelector(userLoggedIn);
  const [isMoused, setIsMoused] = React.useState(false);
  const dispatch = useDispatch();
  const [rating] = React.useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = React.useState(Math.random() < 0.5);

  const truncate = (str, length) => {
    if (str.length > length) {
      let subStr = str.substring(0, length);
      return subStr + '...';
    } else {
      return str;
    }
  };

  // ADDING ITEMS TO THE REDUX STORE
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };

    // Sending the product through dispatch action to REDUX store... the basket slice
    dispatch(addToBasket(product));

    // Saving cart history in Firebase DB...

    db.collection('histories')
      .doc(`${user}/`)
      .collection('shopping-history')
      .add(
        {
          id: id,
          title: title,
          price: price,
          description: description,
          category: category,
          image: image,
          hasPrime: hasPrime,
          timestamp: timestamp(),
        },
        { merge: true }
      )
      .then(() => {
        console.log(`SUCCESS: item ${user} had been added to the DB`);
      })
      .catch((error) => console.log('Error' + error.message));
  };

  return (
    <div
      onMouseOver={() => setIsMoused(true)}
      onMouseLeave={() => setIsMoused(false)}
      className='products'
    >
      <p className='products_category'>{category}</p>
      <div className='products_rate'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarOutlinedIcon />
          ))}
      </div>
      <img
        className='product_image'
        src={image}
        alt='product_picture'
        height={250}
        width={250}
      />
      <div>
        <p className='products_description'>{truncate(description, 60)}</p>
        <p className='products_price'>
          CA
          <Currency quantity={price} currency='CAD' />
        </p>
        {hasPrime && (
          <div className='product_del'>
            <img
              className='product_del_image'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='product_del_text'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {isMoused && (
        <div className='product_title'>
          <h4 className='product_title_text'>{title}</h4>
        </div>
      )}
      <button onClick={addItemToBasket} className='product_btn'>
        <AddShoppingCartIcon className='text-white' />
      </button>
    </div>
  );
}

export default Products;
