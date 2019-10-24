import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import { connect } from 'react-redux';

const Nav = ({ movies }) => {

  return (
    <div className='Nav__container' style={{ backgroundImage: `${movies.length ? `linear-gradient(to top, #00000000, black), url(${movies[Math.floor(Math.random() * Math.floor(19))].wallpaper})` : 'none' }` }} >
        <header className='Nav'>
          <h1>The Screening Room</h1>
          <ul className='Nav__ul'>
            <Link to='/' className='Nav__li'>
              <li>Home</li>
            </Link>
            <Link to='/favorites' className='Nav__li'>
              <li>Favorites</li>
            </Link>
            <Link to='/signup' className='Nav__li'>
              <li>Account</li>
            </Link>
          </ul>
        </header>
    </div>
    );
  };

  const mapStateToProps = state => {
    return { movies: state.movies };
  }
  
  export default connect(mapStateToProps)(Nav)
