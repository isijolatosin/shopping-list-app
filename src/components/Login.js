import React from 'react';
import './components-style/Login.css';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../slices/basketSlice';
import { Link } from 'react-router-dom';

function Login(props) {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(input));

    if (input.length !== 0) {
      dispatch(loggedIn(input));
      setInput('');
    }
  };

  return (
    <div className='login'>
      <h1 className='login_header'>Login</h1>
      <div className='input_container'>
        <span>Email:</span>
        <input
          className='input'
          onChange={(e) => setInput(e.target.value)}
          type='text'
          value={input}
          placeholder='Enter your Email Address...'
        />
      </div>
      <Link onClick={handleSubmit} to={input.length !== 0 && '/'}>
        <button className='submit_button'>Submit</button>
      </Link>
    </div>
  );
}

export default Login;
