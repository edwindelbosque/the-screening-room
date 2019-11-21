import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, mapStateToProps, mapDispatchToProps } from './SearchBar';
import { setSearchResults, setSearchWallpapers } from '../../actions/index';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a favorites array', () => {
    let favorites;
    const mockState = {
      favorites
    };

    const expected = {
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
    const actionToDispatch = setSearchResults([{}, {}, {}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setSearchResults([{}, {}, {}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a setSearchWallpapers action', () => {
    const actionToDispatch = setSearchWallpapers([{}, {}, {}, {}, {}]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setSearchWallpapers([{}, {}, {}, {}, {}]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
