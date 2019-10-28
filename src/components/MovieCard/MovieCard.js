import React from 'react';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { toggleFavorite, setFavorites } from '../../actions';

export const MovieCard = ({
  movie,
  user,
  favorites,
  toggleFavorite,
  updateFavorites,
  type,
  setFavorites,
  history
}) => {
  const { title, poster_path, favorite, movie_id } = movie;
  const isFavorite = favorites
    .map(favorite => favorite.title)
    .includes(movie.title);

  const handleClick = () => {
    if (user.name) {
      setFavorites(favorites);
      updateFavorites(movie, isFavorite);
      toggleFavorite(title);
    } else {
      updateFavorites(movie, isFavorite);
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

export const mapStateToProps = ({ movies, favorites, user }) => ({
  movies,
  favorites,
  user
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleFavorite, setFavorites }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieCard)
);
