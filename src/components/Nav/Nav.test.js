import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';
import {
  setError,
  resetFavorites,
  resetMoviesFavorites,
  setSearchResults
} from '../../actions/index';

describe('Nav', () => {
  let wrapper;
  let handleCategory = jest.fn();
  let logoutCurrentUser = jest.fn();
  let searchResults = [{}, {}, {}];
  let user = {
    name: 'Vanessa Randall',
    email: 'vanessa.randall@doane.edu',
    id: 2
  };
  let favorites = [{}, {}, {}];

  beforeEach(() => {
    wrapper = shallow(
      <Nav
        logoutCurrentUser={logoutCurrentUser}
        handleCategory={handleCategory}
        searchResults={searchResults}
        user={user}
        favorites={favorites}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call logoutCurrentUser on handleLogoutClick', () => {
    let logoutCurrentUser = jest.fn();

    wrapper.find('.NavLink__button--logout').simulate('click');
    expect(logoutCurrentUser).toHaveBeenCalled();
    expect(resetMoviesFavorites).toHaveBeenCalled();
    expect(resetFavorites).toHaveBeenCalled();
    expect(setSearchResults).toHaveBeenCalled();
    expect(setError).toHaveBeenCalled();
  });
});
