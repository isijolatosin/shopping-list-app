import React from 'react';
import './components/components-style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import History from './components/History';
import Checkout from './components/Checkout';
import Header from './components/Header';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { userLoggedIn } from './slices/basketSlice';
import ProductPage from './components/ProductPage';

// FETCHING DATA FROM AN API
const getDataFromApi = () => {
  return axios
    .get('https://fakestoreapi.com/products?sort=desc')
    .then((res) => {
      const result = res.data;
      return result;
    })
    .catch((err) => console.log(err.message));
};

function App() {
  const [products, setProducts] = React.useState([]);
  const user = useSelector(userLoggedIn);

  React.useEffect(() => {
    getDataFromApi().then((data) => setProducts(data));
  }, []);

  return (
    // React <Router> is use to navigate between pages.
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          {/* THIS IS THE CART PAGE */}
          <Route path='/cart'>
            <Checkout />
          </Route>

          {/* THIS IS THE CHECKOUT PAGE */}
          <Route path='/shopping-history'>
            <History />
          </Route>

          {/* CONDITIONING HOW THE LOGIN AND PRODUCT PAGE ARE BEING RENDERED */}
          {user ? (
            <Route path='/product-page'>
              <ProductPage products={products} />
            </Route>
          ) : (
            <Route path='/login'>
              <Login />
            </Route>
          )}

          {/* LANDING PAGE */}
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
