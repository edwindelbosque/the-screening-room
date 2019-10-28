import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Container.scss';

export const Container = ({ movies, updateFavorites, type }) => {
  // console.log(movies)
  const allMovies = movies.map(movie => (
    <MovieCard 
      key={movie.id}
      type={type}
      movie={movie} 
      updateFavorites={updateFavorites} 
    />
  ));
  return <main className='Container'>{allMovies}</main>;
};

export default Container;
