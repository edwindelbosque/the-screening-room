import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  it('should match the All Movies snapshot', () => {
    let movies = [{ id: 1 }, { id: 2 }, { id: 3 }];
    let updateFavorites = jest.fn();
    let type = 'movies',
      allMoviesWrapper = shallow(
        <Container
          movies={movies}
          updateFavorites={updateFavorites}
          type={type}
        />
      );

    expect(allMoviesWrapper).toMatchSnapshot();
  });
});
