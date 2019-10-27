import React from 'react';
import { Link } from 'react-router-dom';
import { setUser } from '../../actions/index';
import './Nav.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const Nav = ({ logoutCurrentUser, movies, user }) => {
  return (
    <div
      className='Nav__container'
      style={{
        backgroundImage: `${
          movies.length
            ? `linear-gradient(to top, #00000000, #00000000, rgb(31, 31, 31)), url(${movies[Math.floor(Math.random() * Math.floor(19))].wallpaper})`
            : 'none'
        }`
      }}
    >
      <header className='Nav'>
        <h1>The Screening Room</h1>
        <div className='Nav__ul'>
          <Link to='/movies' className='Nav__button link-wrapper'>
            <button className='link hover-home'>Home</button>
          </Link>
          <Link to='/favorites' className='Nav__button link-wrapper'>
            <button className='link hover-1'>Favorites</button>
          </Link>
          {user.name ? (
            <Link to='/login' className='Nav__button link-wrapper'>
              <button className='link hover-1' onClick={logoutCurrentUser}>
                Logout
              </button>
            </Link>
          ) : (
            <Link to='/signup' className='Nav__button link-wrapper'>
              <button className='link hover-1'>Account</button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export const mapStateToProps = ({ movies, user }) => {
  return { movies, user };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
