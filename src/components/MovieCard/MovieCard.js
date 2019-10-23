import React from 'react';
import './MovieCard.scss';

const MovieCard = movie => {
  const { title, release_date, poster } = movie;
  return (
    <div className='MovieCard__div--container'>
      <img
        className='MovieCard__img--poster'
        src={poster}
        alt='Official movie poster'
      />
      <p className='MovieCard__p--title'>{title}</p>
      <p className='MovieCard__p--release_date'>{release_date}</p>
      <img
        className='MovieCard__img--favorite-icon'
        src='#'
        alt='Favorite icon'
      />
    </div>
  );
};

export default MovieCard;
