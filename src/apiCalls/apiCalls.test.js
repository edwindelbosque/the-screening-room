import {
  getMovies,
  getWallpapers,
  createUser,
  selectUser,
  getFavorites,
  postFavorite,
  removeFavorite
} from './apiCalls';

describe('getMovies', () => {
  const mockResponse = [{}, {}, {}, {}, {}, {}, {}, {}];
  const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getMovies();

    expect(window.fetch).toHaveBeenCalledWith(`${baseUrl}${apiKey}`);
  });

  it('should return an array of movies', () => {
    expect(getMovies()).resolves.toEqual(mockResponse);
  });

  it.skip('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getMovies().rejects.toEqual(''));
  });

  // it('should return an array of favorite movies', () => {
  //   expect(removeFavorite(movieId, userId)).resolves.toEqual(mockFavorites);
  // });

  // it('should return an error if the response is not okay', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: false
  //     });
  //   });

  //   expect(removeFavorite(movieId, userId)).rejects.toEqual(
  //     Error('Could not delete favorite.')
  //   );
  // });

  // it('should return an error if the server is down', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.reject(Error('fetch failed.'));
  //   });

  //   expect(removeFavorite(movieId, userId)).rejects.toEqual(
  //     Error('fetch failed.')
  //   );
  // });
});

describe('getWallpapers', () => {
  const mockResponse = [{}, {}, {}];
  const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
  const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getWallpapers();

    expect(window.fetch).toHaveBeenCalledWith(`${baseUrl}${apiKey}`);
  });
});

describe('createUser', () => {
  const newUser = {
    name: 'Vanessa Randall',
    email: 'vanessa.randall@doane.edu',
    password: 'Password123',
    isLoggedIn: false
  };
  const mockResponse = {
    type: 'cors',
    url: 'http://localhost:3001/api/v1/users',
    redirected: false,
    status: 201,
    ok: true
  };
  const url = 'http://localhost:3001/api/v1/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };

  it('should call fetch with the correct arguments', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    createUser(newUser);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(createUser(newUser)).rejects.toEqual(
      Error('Email address already in use')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(postFavorite(createUser(newUser)).rejects.toEqual(
      Error('fetch failed.')
    )
  );
});

describe('getFavorites', () => {
  const mockResponse = [{
    title: 'Yesterday',
    poster_path:
      'https://image.tmdb.org/t/p/original/1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg',
    release_date: '2019-06-28',
    overview:
      "Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that he's the only person on Earth who can remember The Beatles."
  }, {
    title: 'Yesterday',
    poster_path:
      'https://image.tmdb.org/t/p/original/1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg',
    release_date: '2019-06-28',
    overview:
      "Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that he's the only person on Earth who can remember The Beatles."
  }] 
  const url = 'http://localhost:3001/api/v1/users/1/moviefavorites';
  const userId = 1

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should fetch with the correct arguments', () => {
    getFavorites(userId);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an array of favorite movies', () => {
    expect(getFavorites(userId)).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getFavorites(userId)).rejects.toEqual(Error('Unable to fetch favorites'));
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(getFavorites(userId)).rejects.toEqual(
      Error('fetch failed.')
    );
  });
});

describe('postFavorite', () => {
  const mockFavorite = {
    movie_id: 515195,
    title: 'Yesterday',
    poster_path:
      'https://image.tmdb.org/t/p/original/1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg',
    release_date: '2019-06-28',
    overview:
      "Jack Malik is a struggling singer-songwriter in an English seaside town whose dreams of fame are rapidly fading, despite the fierce devotion and support of his childhood best friend, Ellie. After a freak bus accident during a mysterious global blackout, Jack wakes up to discover that he's the only person on Earth who can remember The Beatles."
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavorite)
      });
    });
  });

  it('should fetch with the correct arguments', () => {
    const url = `http://localhost:3001/api/v1/users/2/moviefavorites`;
    const expected = [
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockFavorite)
      }
    ];

    postFavorite(mockFavorite, 2);

    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return a new favorite movie', () => {
    expect(postFavorite(mockFavorite, 2)).resolves.toEqual(mockFavorite);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(postFavorite(mockFavorite, 2)).rejects.toEqual(
      Error('Please log in to add favorites.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(postFavorite(mockFavorite, 2)).rejects.toEqual(
      Error('fetch failed.')
    );
  });
});

describe('removeFavorite', () => {
  const mockFavorites = [
    {
      id: 12,
      movie_id: 559969,
      user_id: 2,
      title: 'El Camino: A Breaking Bad Movie',
      poster_path:
        'https://image.tmdb.org/t/p/original/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg',
      release_date: '2019-10-11',
      vote_average: '7.1',
      overview:
        'In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.',
      favorite: true
    },
    {
      id: 15,
      movie_id: 420809,
      user_id: 2,
      title: 'Maleficent: Mistress of Evil',
      poster_path:
        'https://image.tmdb.org/t/p/original/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg',
      release_date: '2019-10-18',
      vote_average: '7.2',
      overview:
        'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.',
      favorite: true
    }
  ];
  const userId = 2;
  const movieId = 420809;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavorites)
      });
    });
  });

  it('should call fetch with the correct URL and options', () => {
    const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${movieId}`;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    removeFavorite(movieId, userId);
    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return an array of favorite movies', () => {
    expect(removeFavorite(movieId, userId)).resolves.toEqual(mockFavorites);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(removeFavorite(movieId, userId)).rejects.toEqual(
      Error('Could not delete favorite.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed.'));
    });

    expect(removeFavorite(movieId, userId)).rejects.toEqual(
      Error('fetch failed.'))
  });
})

})
