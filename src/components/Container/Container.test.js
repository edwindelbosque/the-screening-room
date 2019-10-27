import React from 'react';
import { shallow } from 'enzyme';
import { Container, mapStateToProps } from './Container';

describe('Container', () => {
  let allMoviesWrapper;

  it('should match the All Movies snapshot', () => {
    let movies = [{ id: 1 }, { id: 2 }, { id: 3 }];
    
    allMoviesWrapper = shallow(<Container movies={movies} />);

    expect(allMoviesWrapper).toMatchSnapshot();
  });
});

describe('mockStateToProps', () => {
  it('should return an object with the movies data array', () => {
    const mockState = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };
    const expected = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
