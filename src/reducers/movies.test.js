import { movies } from './movies.js';

describe('movies', () => {

    it('should return the initial state', () => {
      const expected = [];
  
      const result = movies(undefined, {});
  
      expect(result).toEqual(expected);
    });

  it('should output the correct case of SET_MOVIES action type', () => {
    const initialState = [];
    const action = {
      type: 'SET_MOVIES',
      movies: [{}, {}, {}]
    };

    const result = [{}, {}, {}];

    expect(movies(initialState, action)).toEqual(result);
  });

  it('should not output of the case of SET_MOVIES action type', () => {
    const initialState = [];
    const wrongAction = {
      type: 'WRONG_ACTION',
      movies: [{}, {}, {}]
    };

    expect(movies(initialState, wrongAction)).toEqual(initialState);
  });

  it('should toggle the movie to favorite property to true and false', () => {
    const initialState = [
      {title: 'Joker', favorite: true}, 
      {title: 'Batman', favorite: false}, 
      {title: 'Catwoman', favorite: true}
    ];
    const action = {
      type: 'TOGGLE_FAVORITE',
      title: 'Joker'
    }

    const result = [
      {title: 'Joker', favorite: false}, 
      {title: 'Batman', favorite: false}, 
      {title: 'Catwoman', favorite: true}
    ];

    expect(movies(initialState, action)).toEqual(result);
  })


  it('should reset all the movies to favorite false', () => {
    const initialState = [{favorite: true}, {favorite: false}, {favorite: true}];
    const action = {
      type: 'RESET_MOVIES_FAVORITES'
    };

    const result = [{favorite: false}, {favorite: false}, {favorite: false}];

    expect(movies(initialState, action)).toEqual(result);
  })
});
