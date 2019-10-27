import {
  getMovies,
  getGenresData,
  getGenres,
  createUser,
  selecteUser,
  getFavorites,
  postFavorite
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
});

describe('getGenres', () => {
  const mockResponse = [{}, {}, {}];
  const id = 420809;
  const genreBaseUrl = 'https://api.themoviedb.org/3/genre/';
  const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getGenres(id);

    expect(window.fetch).toHaveBeenCalledWith(
      `${genreBaseUrl}${id}?api_key=${apiKey}`
    );
  });
});

describe('createUser', () => {
  const mockResponse = {};

  it('should call fetch with the correct URL', () => {
    window.fetch = jest.fn().mockImplementation(() => {});
  });
});
