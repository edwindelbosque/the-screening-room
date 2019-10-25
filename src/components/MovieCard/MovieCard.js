import React from 'react';
// import addFavorite from '../../Images/addFavorite.png';
import './MovieCard.scss';
import { toggleFavorite } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const MovieCard = movie => {
  const { title, poster, favorite, toggleFavorite } = movie;

  const handleClick = () => {
    toggleFavorite(title);
  }

  return (
    <div className='MovieCard__div--container'>
      <img
        className='MovieCard__img--poster'
        src={poster}
        alt='Official movie poster'
      />
      <footer className='MovieCard__footer'>
        <h3 className='MovieCard__h3--title'>{title}</h3>
        {/* <img
          className='MovieCard__img--favorite-icon'
          src={addFavorite}
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

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleFavorite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);