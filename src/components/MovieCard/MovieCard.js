import React from 'react';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../../actions';

export const MovieCard = ({
  movie,
  favorites,
  toggleFavorite,
  updateFavorites
}) => {
  const { title, poster, favorite, id } = movie;
  const isFavorite = favorites
    .map(favorite => favorite.title)
    .includes(movie.title);

  const handleClick = () => {
    toggleFavorite(title);
    updateFavorites(movie, isFavorite);
  };
  return (
    <div className='MovieCard__div--container'>
      <Link to={`movies/${id}`}>
        <img
          className='MovieCard__img--poster'
          src={poster}
          alt='Official movie poster'
        />
      </Link>
      <footer className={`MovieCard__footer ${favorite ? 'footer-active' : ''}`}>
        <h3 className='MovieCard__h3--title'>{title}</h3>
        <div className={`button-container ${favorite ? 'button-container-active' : ''}`} onClick={handleClick}>
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
  return bindActionCreators({ toggleFavorite }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
