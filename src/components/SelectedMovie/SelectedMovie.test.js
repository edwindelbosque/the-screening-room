import React from 'react';
import { shallow } from 'enzyme';
import SelectedMovie from './SelectedMovie';

describe('SelectedMovie', () => {
  let wrapper;
  let movieDetails = {
    wallpaper:
      'https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
    poster:
      'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
    title: 'Maleficent: Mistress of Evil',
    overview:
      'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
    genre: ['Adventure', 'Fantasy', 'Family'],
    rating: 7.2
  };

  beforeEach(() => {
    wrapper = shallow(<SelectedMovie movieDetails={movieDetails} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
