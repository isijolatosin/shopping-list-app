import React from 'react';
import './components-style/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems, userLoggedIn, loggedOut } from '../slices/basketSlice';

function Header() {
  const items = useSelector(selectItems);
  const user = useSelector(userLoggedIn);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loggedOut());
  };

  const handleNoUserAlert = () => {
    if (!user) {
      alert('Please Sign In to View Hostory!');
    }
  };

  return (
    <nav className='header'>
      {/* Link is use to route to the home page in this instance */}
      <Link className='header_link' to='/'>
        {/* The logo of the company is rendered with img tag */}
        <img className='header_img' src='' alt='company-logo' />
      </Link>

      {/* The search Box  */}
      <div className='header_search'>
        <input
          placeholder='Search Component not Active. It is Just for User Interface'
          type='text'
          className='header_searchInput'
        />
        <SearchIcon className='header_searchIcon' />
      </div>

      {/* The User Account Information */}
      <div className='header_info'>
        {user ? (
          <Link to='/' onClick={handleLogout} className='header_link'>
            <div className='header_signin_option'>
              <div>
                <span>Hello {user}</span>
              </div>
              <div className='header_text_bold'>
                <span>Account & Lists</span>
              </div>
            </div>
          </Link>
        ) : (
          <Link to='/login' className='header_link'>
            <div className='header_signin_option'>
              <div>
                <span>Hello, Sign In</span>
              </div>
              <div className='header_text_bold'>
                <span>Account & Lists</span>
              </div>
            </div>
          </Link>
        )}

        <Link
          onClick={handleNoUserAlert}
          to={user ? '/shopping-history' : '/'}
          className='header_link'
        >
          <div className='header_history'>
            <span>Shopping</span>
            <span className='header_text_bold'>Histories</span>
          </div>
        </Link>
        <Link to='/cart' className='header_link'>
          <div className='header_basket'>
            <ShoppingCartOutlinedIcon fontSize='large' />
            <div className='count'>
              <span className='header_item_count'>{items.length}</span>
              <span>Basket</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
