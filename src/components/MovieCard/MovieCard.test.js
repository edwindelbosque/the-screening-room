import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';

describe('MovieCard', () => {
  let wrapper;
  let toggleFavorites = jest.fn();
  let movie = {
    favorite: false,
    genre: (3)[('Crime', 'Drama', 'Thriller')],
    id: 475557,
    overview:
      'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    poster:
      'https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    rRated: false,
    rating: 8.6,
    release_date: '2019-10-04',
    title: 'Joker',
    wallpaper:
      'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'
  };

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard {...movie} key={movie.id} toggleFavorites={toggleFavorites} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
