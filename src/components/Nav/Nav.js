import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
	setUser,
	setError,
	resetFavorites,
	resetMoviesFavorites
} from '../../actions/index';
import './Nav.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Nav.scss';

export const Nav = ({
	logoutCurrentUser,
	resetFavorites,
	user,
	setError,
	favorites,
	resetMoviesFavorites,
	setRandomWallpaper,
	searchResults
}) => {
	const handleLogoutClick = () => {
		logoutCurrentUser();
		resetMoviesFavorites();
		resetFavorites({});
		setError('');
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
						activeClassName='nav-active'>
						<button className='link hover-home'>Home</button>
					</NavLink>
					{searchResults.length !== 0 && (
						<NavLink
							exact
							to='/search'
							className='Nav__button link-wrapper'
							activeClassName='nav-active'>
							<button className='link hover-home'>Search</button>
						</NavLink>
					)}
					<NavLink
						to='/favorites'
						className='Nav__button link-wrapper'
						activeClassName='nav-active'>
						<button className='link hover-1'>
							Favorites
							{favorites.length ? (
								<p className='favorite-counter'>{favorites.length}</p>
							) : (
								''
							)}
						</button>
					</NavLink>
					{user.name ? (
						<NavLink
							to='/login'
							className='Nav__button link-wrapper'
							activeClassName='nav-active'>
							<button className='link hover-1' onClick={handleLogoutClick}>
								Logout
							</button>
						</NavLink>
					) : (
						<NavLink
							to='/signup'
							className='Nav__button link-wrapper'
							activeClassName='nav-active'>
							<button className='link hover-1'>Account</button>
						</NavLink>
					)}
				</div>
				{user.name && (
					<div className='welcome-banner'>
						<div className='banner-peak'></div>
						<p>
							<span>Welcome,</span> {user.name.split(' ')[0]}
							<span>!</span>
						</p>
					</div>
				)}
			</header>
		</div>
	);
};

export const mapStateToProps = ({
	movies,
	user,
	setRandomWallpaper,
	favorites,
	searchResults
}) => {
	return { movies, user, setRandomWallpaper, favorites, searchResults };
};

export const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{ setUser, setError, resetFavorites, resetMoviesFavorites },
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

Nav.propTypes = {
	logoutCurrentUser: PropTypes.func,
	user: PropTypes.object,
	setUser: PropTypes.func,
	setError: PropTypes.func,
	favorites: PropTypes.array,
	resetFavorites: PropTypes.func,
	resetMoviesFavorites: PropTypes.func
};
