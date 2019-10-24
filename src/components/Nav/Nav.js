import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <div className='Nav__container'>
      <header className='Nav'>
        <h1>The Screening Room</h1>
        <ul className='Nav__ul'>
          <Link to='/'>
            <li className='Nav__li'>Home</li>
          </Link>
          <Link to='/favorites'>
            <li className='Nav__li'>Favorites</li>
          </Link>
          <Link to='/login'>
            <li className='Nav__li'>Account</li>
          </Link>
        </ul>
      </header>
    </div>
    );
  };
  
  export default Nav;
