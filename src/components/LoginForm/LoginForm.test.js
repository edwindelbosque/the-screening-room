import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { setUser, hasError, setFavorites } from '../../actions/index';

describe('LoginForm', () => {
  let wrapper;
  let errMsg = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LoginForm errMsg={errMsg} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it('should return an object with a movies array, an error message and isLoading property', () => {
    const mockState = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      errMsg: '',
      isLoading: false
    };

    const expected = {
      movies: [{ id: 1 }, { id: 2 }, { id: 3 }],
      errMsg: '',
      isLoading: false
    };

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);
  });
});

describe('mapDispatchToProps', () => {
  let user = {
    name: 'Vanessa Randall',
    email: 'vanessa.randall@doane.edu',
    password: 'Password123',
    id: 2
  };

  let favorites = [
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path: 'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    },
    {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path: 'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    }
  ];

  const mockDispatch = jest.fn();

  it('should call dispatch with a setUser action when handleClick is called', () => {
    const actionToDispatch = setUser(user);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setUser(user);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('should call dispatch with a setFavorites action when handleClick is called', () => {
    const actionToDispatch = setFavorites(favorites)

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setFavorites(favorites);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});
