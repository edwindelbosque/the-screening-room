import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps } from './SearchBar';
// import { setSearchResults, setSearchWallpapers } from '../../actions/index'

describe('SearchBar', () => {
  let wrapper;
  let mockEventSearch = {
    preventDefault: () => {},
    target: {
      name: 'search',
      value: 'batman'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should match the snapshot', () => {
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it('should update state on change of input', () => {
    const expectedSearch = 'batman';

    wrapper.instance().handleChange(mockEventSearch);
    expect(wrapper.state('search')).toEqual(expectedSearch);
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a favorites array', () => {
    const mockState = {
      favorites: [1, 2, 3]
    };

    const expected = {
      favorites: [1, 2, 3]
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});
