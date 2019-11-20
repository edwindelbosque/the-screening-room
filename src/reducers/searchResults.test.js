import { searchResults } from './searchResults';

it('should return the initial state', () => {
  const expected = [];
  const result = searchResults(undefined, {});
  expect(result).toEqual(expected);
});

it('should set search results', () => {
  const expected = [{}, {}, {}];

  const actionType = 'SET_SEARCH_RESULTS';
  const result = searchResults(expected, actionType);
  expect(result).toEqual(expected);
});

it('should TOGGLE_FAVORITE', () => {
  const expected = [
    { title: 'Santa Clause', favorite: true },
    { title: 'Santa Clause 2', favorite: true },
    { title: 'Santa Clause 3', favorite: true }
  ];

  const actionType = 'TOGGLE_FAVORITE';
  const result = searchResults(expected, actionType);
  expect(result).toEqual(expected);
});

it('should RESET_MOVIES_FAVORITE', () => {
  const expected = [
    { title: 'Santa Clause', favorite: false },
    { title: 'Santa Clause 2', favorite: false },
    { title: 'Santa Clause 3', favorite: false }
  ];

  const actionType = 'RESET_MOVIES_FAVORITE';
  const result = searchResults(expected, actionType);
  expect(result).toEqual(expected);
});
