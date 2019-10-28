const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
// const genreBaseUrl = 'https://api.themoviedb.org/3/genre/';
const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

export const getMovies = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`);
  const data = await response.json();
  const results = data.results;
  const cleanedMovies = await results.map(async result => {
    const {
      id,
      title,
      overview,
      poster_path,
      release_date,
      vote_average
    } = result;
    return {
      title,
      id,
      overview,
      poster: `${imageBaseUrl}${poster_path}`,
      release_date,
      rating: vote_average,
      favorite: false
    };
  });
  return await Promise.all(cleanedMovies);
};

export const getWallpapers = async () => {
  const response = await fetch(`${baseUrl}${apiKey}`);
  const data = await response.json();
  const results = data.results;
  const wallpaper = await results.map(async result => {
    const { backdrop_path, id } = result;
    return {
      wallpaper: `${imageBaseUrl}${backdrop_path}`,
      id: id
    };
  });
  return await Promise.all(wallpaper);
};

// const getGenresData = async genreIds => {
//   const genres = await genreIds.map(id => {
//     return getGenres(id);
//   });
//   return await Promise.all(genres);
// };

// const getGenres = async id => {
//   const response = await fetch(`${genreBaseUrl}${id}?api_key=${apiKey}`);
//   const data = await response.json();
//   return await data.name;
// };

export const createUser = async newUser => {
  const url = 'http://localhost:3001/api/v1/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Email address already in use');
  }
  return response.json();
};

export const selectUser = async recurrentUser => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recurrentUser)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Email and password do not match');
  }
  return response.json();
};

export const getFavorites = async userId => {
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  const response = await fetch(url);
  const favorites = await response.json();
  return favorites;
};

export const postFavorite = async (movie, userId) => {
  const cleanedMovie = {
    movie_id: movie.id,
    title: movie.title,
    poster_path: movie.poster,
    release_date: movie.release_date,
    vote_average: movie.rating,
    overview: movie.overview
  };
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cleanedMovie)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Could not add new favorite.');
  }
  const newFavorite = await response.json();
  return newFavorite;
};

export const removeFavorite = async (movieId, userId) => {
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${movieId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error('Could not delete favorite.');
  }
};
