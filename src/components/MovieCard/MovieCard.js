import addFavoriteImg from '../../Images/addFavorite.png';
import React from 'react';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../../actions';

const MovieCard = ({movie, favorites, updateFavorites}) => {
  const { title, poster, favorite, id } = movie;
  const isFavorite = favorites.map(favorite => favorite.title).includes(movie.title);

  const handleClick = () => {
    toggleFavorite(title);
    updateFavorites(movie, isFavorite);
  }
  return (
      <div className='MovieCard__div--container'>
        <Link to={`movies/${id}`}>
          <img
            className='MovieCard__img--poster'
            src={poster}
            alt='Official movie poster'
          />
        </Link>
        <footer className='MovieCard__footer'>
          <h3 className='MovieCard__h3--title'>{title}</h3>
          <div className='button-container' onClick={handleClick}>
            <div className={favorite ? 'stick-1-active' : 'stick-1'}></div>
            <div className={favorite ? 'stick-2-active' : 'stick-2'}></div>
          </div>
        </footer>
      </div>
  );
};

const mapStateToProps = ({ movies, favorites, user }) => ({
  movies,
  favorites,
  user
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleFavorite }, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);