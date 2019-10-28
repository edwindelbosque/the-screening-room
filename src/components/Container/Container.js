import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Container.scss';

export const Container = ({ movies, updateFavorites }) => {
  // console.log(movies)
  const allMovies = movies.map(movie => (
    <MovieCard movie={movie} key={movie.id} updateFavorites={updateFavorites} />
  ));
  return <main className='Container'>{allMovies}</main>;
};

export default Container;
