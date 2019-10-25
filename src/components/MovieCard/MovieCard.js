import React from 'react';
import addFavoriteImg from '../../Images/addFavorite.png';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite, toggleFavorite } from '../../actions';

const MovieCard = movie => {
  const { title, poster, favorite, toggleFavorite } = movie;

  const handleClick = () => {
    toggleFavorite(title);
  }

  return (
    <div className={`MovieCard__div--container`}>
      <img
        className='MovieCard__img--poster'
        src={poster}
        alt='Official movie poster'
      />
      <footer className='MovieCard__footer'>
        <h3 className='MovieCard__h3--title'>{title}</h3>
        {/* <img
          className='MovieCard__img--favorite-icon'
          src={addFavoriteImg}
          alt='Favorite icon'
        /> */}
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
  return bindActionCreators({ addFavorite, toggleFavorite }, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);