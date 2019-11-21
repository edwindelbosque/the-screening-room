import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { setFavorites, setError, toggleFavorite } from '../../actions/index';

describe('MovieCard', () => {
  let wrapper;
  let toggleFavorites = jest.fn();
  let updateFavorites = jest.fn();

  let favorites = [
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path:
        'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    },
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path:
        'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    }
  ];

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
      <MovieCard
        favorites={favorites}
        movie={movie}
        key={movie.id}
        type={'movies'}
        toggleFavorites={toggleFavorites}
        updateFavorites={updateFavorites}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with the movies data array', () => {
    const mockState = {
      favorites: [{ id: 1 }, { id: 2 }],
      user: { name: 'Edwin', id: 33, email: 'edwindelbosquer@gmail.com' },
      searchResults: [{}, {}, {}]
    };
    const expected = {
      favorites: [{ id: 1 }, { id: 2 }],
      user: { name: 'Edwin', id: 33, email: 'edwindelbosquer@gmail.com' },
      searchResults: [{}, {}, {}]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });

  const mockDispatch = jest.fn();

  it('should call dispatch with a setFavorites action when handleClick is called', () => {
    let favorites = [
      {
        id: 63,
        movie_id: 420809,
        user_id: 1,
        title: 'Maleficent: Mistress of Evil',
        poster_path:
          'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
        release_date: '2019-10-18',
        vote_average: '7.2',
        overview:
          'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
        favorite: true
      },
      {
        id: 63,
        movie_id: 420809,
        user_id: 1,
        title: 'Maleficent: Mistress of Evil',
        poster_path:
          'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
        release_date: '2019-10-18',
        vote_average: '7.2',
        overview:
          'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
        favorite: true
      }
    ];

    const actionToDispatch = setFavorites(favorites);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavorites(favorites);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setError action when handleClick is called', () => {
    const message = '';
    const actionToDispatch = setError(message);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setError(message);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setUser action when handleClick is called', () => {
    const actionToDispatch = toggleFavorite('Joker');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleFavorite('Joker');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
