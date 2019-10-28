import React from 'react';
import { NavLink } from 'react-router-dom';
import { setUser } from '../../actions/index';
import './Nav.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const Nav = ({ logoutCurrentUser, user, setRandomWallpaper }) => {
  const navBackdrop = {
    backgroundImage: `linear-gradient(to top, #00000000, #00000000, rgb(31, 31, 31)), url(${setRandomWallpaper})`
  }
  
  return (
    <div className='Nav__container' style={navBackdrop}>
        <header className='Nav'>
          <h1>The Screening Room</h1>
          <div className='Nav__ul'>
            <NavLink exact to='/' className='Nav__button link-wrapper' activeClassName='nav-active'>
              <button className='link hover-home'>Home</button>
            </NavLink>
            <NavLink to='/favorites' className='Nav__button link-wrapper' activeClassName='nav-active'>
              <button className='link hover-1'>Favorites</button>
            </NavLink>
            {user.name ? (
              <NavLink to='/login' className='Nav__button link-wrapper' activeClassName='nav-active'>
                <button className='link hover-1' onClick={logoutCurrentUser}>
                  Logout
                </button>
              </NavLink>
            ) : (
              <NavLink to='/signup' className='Nav__button link-wrapper' activeClassName='nav-active'>
                <button className='link hover-1'>Account</button>
              </NavLink>
            )}
          </div>
        </header>
      </div>
    );
  };

export const mapStateToProps = ({ movies, user, setRandomWallpaper }) => {
  return { movies, user, setRandomWallpaper };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch);
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);