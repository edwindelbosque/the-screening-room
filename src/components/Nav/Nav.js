import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { setUser, hasError, resetFavorites, resetMoviesFavorites } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Nav.scss';

export const Nav = ({
  logoutCurrentUser,
  resetFavorites,
  user,
  hasError,
  favorites,
  resetMoviesFavorites,
  setRandomWallpaper
}) => {
  const handleLogoutClick = () => {
    logoutCurrentUser();
    resetMoviesFavorites();
    resetFavorites({});
    hasError('');
  };

  const navBackdrop = {
    backgroundImage: `linear-gradient(to top, #00000000, #00000000, rgb(31, 31, 31)), url(${setRandomWallpaper})`
  };

  return (
    <div className='Nav__container' style={navBackdrop}>
      <header className='Nav'>
        <h1>The Screening Room</h1>
        <div className='Nav__ul'>
          <NavLink
            exact
            to='/'
            className='Nav__button link-wrapper'
            activeClassName='nav-active'
          >
            <button className='link hover-home'>Home</button>
          </NavLink>
          <NavLink
            to='/favorites'
            className='Nav__button link-wrapper'
            activeClassName='nav-active'
          >
            <button className='link hover-1'>
              Favorites 
              {favorites.length 
                ? <p className='favorite-counter'>{favorites.length}</p>
                : '' }
            </button>

          </NavLink>
          {user.name ? (
            <NavLink
              to='/login'
              className='Nav__button link-wrapper'
              activeClassName='nav-active'
            >
              <button className='link hover-1' onClick={handleLogoutClick}>
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink
              to='/signup'
              className='Nav__button link-wrapper'
              activeClassName='nav-active'
            >
              <button className='link hover-1'>Account</button>
            </NavLink>
          )}
        </div>
      </header>
    </div>
  );
};

export const mapStateToProps = ({ movies, user, setRandomWallpaper, favorites }) => {
  return { movies, user, setRandomWallpaper, favorites };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser, hasError, resetFavorites, resetMoviesFavorites }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

Nav.propTypes = {
  logoutCurrentUser: PropTypes.func,
  resetFavorites: PropTypes.func,
  user: PropTypes.object,
  setUser: PropTypes.func,
  hasError: PropTypes.func,
  favorites: PropTypes.array,
  resetFavorites: PropTypes.func,
  resetMoviesFavorites: PropTypes.func,
  setRandomWallpaper: PropTypes.string
}
