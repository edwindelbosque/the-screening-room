import React from 'react';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { toggleFavorite, setFavorites, setError } from '../../actions';
import { getFavorites } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export const MovieCard = ({
  movie,
  user,
  favorites,
  toggleFavorite,
  updateFavorites,
  type,
  setFavorites,
  setError,
  history,
}) => {
  const { title, poster_path, favorite, movie_id } = movie;
  const isFavorite = favorites
    .map(favorite => favorite.title)
    .includes(movie.title);

  const handleClick = async () => {
    if (user.name) {
      toggleFavorite(title);
      await updateFavorites(movie, isFavorite);
      const favoriteMovies = await getFavorites(user.id);
      console.log(favoriteMovies.favorites)
      setFavorites(favoriteMovies.favorites);
    } else {
      setError('Please log in to add favorites.');
      history.push('/login');
    }
  };

  return (
    <div className='MovieCard__div--container'>
      <Link to={`${type}/${movie_id}`}>
        <img
          className='MovieCard__img--poster'
          src={poster_path}
          alt='Official movie poster'
        />
      </Link>
      <footer
        className={`MovieCard__footer ${favorite ? 'footer-active' : ''}`}
      >
        <h3 className='MovieCard__h3--title'>{title}</h3>
        <div
          className={`button-container ${
            favorite ? 'button-container-active' : ''
            }`}
          onClick={handleClick}
        >
          <div className={favorite ? 'stick-1-active' : 'stick-1'}></div>
          <div className={favorite ? 'stick-2-active' : 'stick-2'}></div>
        </div>
      </footer>
    </div>
  );
};

export const mapStateToProps = ({ favorites, user, searchResults }) => ({
  favorites,
  user,
  searchResults
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { toggleFavorite, setFavorites, setError },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
);

MovieCard.propTypes = {
  favorites: PropTypes.array,
  user: PropTypes.object,
  toggleFavorite: PropTypes.func,
  setFavorites: PropTypes.func,
  setError: PropTypes.func
};
