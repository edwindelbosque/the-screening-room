import * as actions from './index';

describe('actions', () => {
  it('should have a type of SET_MOVIES', () => {
    const movies = [{}, {}, {}];
    const expectedAction = {
      type: 'SET_MOVIES',
      movies
    };

    const result = actions.setMovies(movies);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_WALLPAPERS', () => {
    const wallpapers = [
      {
        wallpaper: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
        id: 475557
      },
      {
        wallpaper: 'https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg',
        id: 420809
      }
    ];
    const expectedAction = {
      type: 'SET_WALLPAPERS',
      wallpapers
    };

    const result = actions.setWallpapers(wallpapers);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      bool
    };

    const result = actions.setLoading(bool);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERROR', () => {
    const errMsg = 'Could not fetch data';
    const expectedAction = {
      error: 'Could not fetch data',
      type: 'HAS_ERROR'
    };

    const result = actions.hasError(errMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of HAS_EMAIL_ERROR', () => {
    const errMsg = 'Email address already in use';
    const expectedAction = {
      error: 'Email address already in use',
      type: 'HAS_EMAIL_ERROR'
    };

    const result = actions.hasEmailError(errMsg);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of TOGGLE_FAVORITE', () => {
    const title = { title: 'Joker' };
    const expectedAction = {
      title: { title: 'Joker' },
      type: 'TOGGLE_FAVORITE'
    };

    const result = actions.toggleFavorite(title);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_FAVORITES', () => {
    const favorites = [
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

    const expectedAction = {
      type: 'SET_FAVORITES',
      favorites
    }

    const result = actions.setFavorites(favorites);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE', () => {
    const newFavorite = {
      id: 63,
      movie_id: 420809,
      user_id: 1,
      title: 'Maleficent: Mistress of Evil',
      poster_path: 'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    };

    const expectedAction = {
      type: 'ADD_FAVORITE',
      newFavorite
    }

    const result = actions.addFavorite(newFavorite);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of USER', () => {
    const user = {
      id: 2,
      name: 'Vanessa Randall',
      email: 'vanessa.randall@doane.edu'
    };
    const expectedAction = {
      user: {
        id: 2,
        name: 'Vanessa Randall',
        email: 'vanessa.randall@doane.edu'
      },
      type: 'USER'
    };

    const result = actions.setUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of USER_LOGOUT', () => {
    const expectedAction = {
      user: undefined,
      type: 'USER_LOGOUT'
    };

    const result = actions.logoutUser();

    expect(result).toEqual(expectedAction);
  });


});
