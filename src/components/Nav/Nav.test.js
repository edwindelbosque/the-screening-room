import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  let wrapper;
  let handleCategory = jest.fn();
  let logoutCurrentUser = jest.fn();
  let searchResults = [{}, {}, {}]

  beforeEach(() => {
    wrapper = shallow(
      <Nav 
        logoutCurrentUser={logoutCurrentUser} 
        handleCategory={handleCategory}
        searchResults={searchResults}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
