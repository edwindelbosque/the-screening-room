import React from 'react';
import addFavoriteImg from '../../Images/addFavorite.png';
import './MovieCard.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../../actions';

const MovieCard = (movie, user, favorites) => {
  const { title, poster } = movie;
  // let isFavorite = favorites.map(movie => movie.title).includes(title) ? 'favorite' : '';

  return (
    <div className={`MovieCard__div--container`}>
      <img
        className='MovieCard__img--poster'
        src={poster}
        alt='Official movie poster'
      />
      <footer className='MovieCard__footer'>
        <h3 className='MovieCard__h3--title'>{title}</h3>
        <img
          className='MovieCard__img--favorite-icon'
          src={addFavoriteImg}
          alt='Favorite icon'
        />
      </footer>
    </div>
  );
};

const mapStateToProps = ({ favorites, user }) => ({
  favorites,
  user
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addFavorite }, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
