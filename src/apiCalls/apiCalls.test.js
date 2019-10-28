import {
  getMovies,
  getWallpapers,
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
  const mockResponse = {};

  // it('should call fetch with the correct URL', () => {
  //   window.fetch = jest.fn().mockImplementation(() => {});
  // });
});
