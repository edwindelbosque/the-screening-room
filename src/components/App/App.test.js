import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import {
  setMovies,
  setWallpapers,
  setLoading,
  hasError,
  addFavorite,
  setFavorites,
  setUser,
  setRandomWallpaper
} from '../../actions/index';

jest.mock('../../apiCalls/apiCalls.js');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with', () => {
    let movies, wallpapers, hasError, isLoading, user, favorites;
    const mockState = {
      movies,
      wallpapers,
      hasError,
      isLoading,
      user,
      favorites
    };

    const expected = {
      movies,
      wallpapers,
      hasError,
      isLoading,
      user,
      favorites
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it('calls dispatch with a setMovies action', () => {
    const actionToDispatch = setMovies([{}, {}, {}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setMovies([{}, {}, {}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with setWallpapers', () => {
    const actionToDispatch = setWallpapers([{}, {}, {}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setWallpapers([{}, {}, {}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with setLoading', () => {
    const actionToDispatch = setLoading(true);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setLoading(true);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with hasError', () => {
    const errMsg = {
      message: 'message'
    };
    const actionToDispatch = hasError(errMsg);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.hasError({ message: 'message' });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with addFavorite', () => {
    const newFavorite = {
      id: 17,
      movie_id: 290859,
      overview:
        "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      poster_path:
        'https://image.tmdb.org/t/p/original/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
      release_date: '2019-11-01',
      title: 'Terminator: Dark Fate',
      user_id: 2,
      vote_average: '6.8'
    };
    const actionToDispatch = addFavorite(newFavorite);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addFavorite({
      id: 17,
      movie_id: 290859,
      overview:
        "More than two decades have passed since Sarah Connor prevented Judgment Day, changed the future, and re-wrote the fate of the human race. Dani Ramos is living a simple life in Mexico City with her brother and father when a highly advanced and deadly new Terminator – a Rev-9 – travels back through time to hunt and kill her. Dani's survival depends on her joining forces with two warriors: Grace, an enhanced super-soldier from the future, and a battle-hardened Sarah Connor. As the Rev-9 ruthlessly destroys everything and everyone in its path on the hunt for Dani, the three are led to a T-800 from Sarah’s past that may be their last best hope.",
      poster_path:
        'https://image.tmdb.org/t/p/original/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg',
      release_date: '2019-11-01',
      title: 'Terminator: Dark Fate',
      user_id: 2,
      vote_average: '6.8'
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
