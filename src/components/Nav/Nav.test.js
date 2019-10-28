import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  let wrapper;
  let logoutCurrentUser = jest.fn();
  let user = {
    name: ''
  };
  let movies = [
    {
      wallpaper:
        'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg'
    },
    {
      wallpaper:
        'https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg'
    },
    {
      wallpaper:
        'https://image.tmdb.org/t/p/original/a6cDxdwaQIFjSkXf7uskg78ZyTq.jpg'
    }
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Nav logoutCurrentUser={logoutCurrentUser} movies={movies} user={user} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
