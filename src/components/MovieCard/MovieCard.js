import React from 'react';
import addFavorite from '../../Images/addFavorite.png';
import './MovieCard.scss';

const MovieCard = movie => {
  const { title, poster } = movie;
  return (
    <div className='MovieCard__div--container'>
      <img
        className='MovieCard__img--poster'
        src={poster}
        alt='Official movie poster'
      />
      <footer className='MovieCard__footer'>
        <h3 className='MovieCard__p--title'>{title}</h3>
          <img
            className='MovieCard__img--favorite-icon'
            src={addFavorite}
            alt='Favorite icon'
          />
      </footer>
    </div>
  );
};

export default MovieCard;
