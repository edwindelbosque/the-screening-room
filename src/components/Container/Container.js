import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './Container.scss';

const Container = ({ movies, toggleFavorites }) => {
  console.log(toggleFavorites);
  const allMovies = movies.map(movie => (
    <MovieCard {...movie} key={movie.id} toggleFavorites={toggleFavorites} />
  ));
  return <main className='Container'>{allMovies}</main>;
};

const mapStateToProps = ({ movies }) => ({
  movies,

});

export default connect(mapStateToProps)(Container);
