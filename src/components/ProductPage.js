import React from 'react';
import Banner from './Banner';
import Products from './Products';
import './components-style/ProductPage.css';

function ProductPage({ products }) {
  return (
    <div className='home'>
      <Banner />

      {/* RENDERING PRODUCTS IN THREES ON A ROW */}
      <div className='home_row'>
        {products
          .slice(0, 3)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(3, 6)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(6, 9)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(8, 12)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(12, 15)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(15, 18)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      <div className='home_row'>
        {products
          .slice(18, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {/* END OF RENDERING PRODUCTS IN THREES ON A ROW */}
    </div>
  );
}

export default ProductPage;
