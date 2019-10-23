import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './Container.scss';

const Container = ({ movies }) => {
  // const { movies, hasError, setLoading } = this.props;
  const allMovies = movies.map(movie => (
    <MovieCard {...movie} key={movie.id} />
  ));
  return <main className='Container'>{allMovies}</main>;
};

const mapStateToProps = ({ movies }) => ({
  movies
});

export default connect(
  mapStateToProps,
  null
)(Container);
