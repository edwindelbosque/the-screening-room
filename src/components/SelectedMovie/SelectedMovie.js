import React from 'react';
import './SelectedMovie.scss';
import { Link } from 'react-router-dom';

const SelectedMovie = ({ movieDetails }) => {
  const { wallpaper, title, overview, poster, rating, genre } = movieDetails;
  return (
    <>
      <Link to='/'>
        <div className='modal-backdrop-white'>
          <div className='modal-backdrop'></div>
        </div>
      </Link>
      <main className='SelectedMovie movie-modal'>
        <div className='SelectedMovie__div--container'>
          <header className='SelectedMovie__header'>
            <img
              className='SelectedMovie__img--favorite'
              src={wallpaper}
              alt='Favorite icon'
            />
            <img
              className='SelectedMovie__img--close'
              src={poster}
              alt='Close window icon'
            />
          </header>
          <div className='bottom-container'>
            <div className='movie-text'>
              <h2>{title}</h2>
              <h3 className='SelectedMovie__h3'>{overview}</h3>
            </div>
            <div className='movie-details'>
              <h4>
                Genre: <span>{genre.join(', ')}</span>
              </h4>
              <h4>
                Rating: <span>{rating}</span>
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SelectedMovie;
