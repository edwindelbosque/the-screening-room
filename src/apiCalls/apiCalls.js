const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
const apiKey = '149174d30ba0677b5219f8786eaaaaa7';

export const apiHandler = async (method) => {
  if (method === 'trending-tv-today') {
    return await getMovies(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
  }
  if (method === 'trending-tv-week') {
    return await getMovies(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
  }
  if (method === 'playing-now') {
    return await getMovies();
  }
  if (method === 'trending-movie-today') {
    return await getMovies(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
  }
  if (method === 'trending-movie-week') {
    return await getMovies(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
  }
  if (method === 'top-rated') {
    return await getMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  }
};

export const getMovies = async (url = `${baseUrl}${apiKey}`) => {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  const cleanedMovies = await results.map(async result => {
    const {
      id,
      title,
      name,
      overview,
      poster_path,
      release_date,
      first_air_date,
      vote_average
    } = result;
    return {
      title: title ? title : name,
      movie_id: id,
      overview,
      poster_path: `${imageBaseUrl}${poster_path}`,
      release_date: release_date ? release_date : first_air_date,
      rating: vote_average,
      favorite: false
    };
  });
  if (!response.ok) {
    throw new Error("Could not fetch movies.");
  }
  return await Promise.all(cleanedMovies);
};

export const getTrailer = async movieId => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`);
  const data = await response.json();
  if (!response.ok) {
    return undefined
  } else {
    return data.results.length ? data.results[0].key : null
  }
};

export const getSearch = async search => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
  );
  const data = response.json();
  return data;
};

export const getFavoriteMovies = async favoriteMovies => {
  const movies = favoriteMovies.map(async movie => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=149174d30ba0677b5219f8786eaaaaa7`)
    const data = await response.json();
    const {
      id,
      title,
      overview,
      poster_path,
      release_date,
      vote_average
    } = data;
    return {
      title,
      movie_id: id,
      overview,
      poster_path: `${imageBaseUrl}${poster_path}`,
      release_date,
      rating: vote_average,
      favorite: true
    };
  });
  return Promise.all(movies);
}

export const cleanSearch = results => {
  const filteredResults = results.results.filter(
    movie => movie.poster_path !== null
  );
  const cleanResults = filteredResults.map(result => {
    const {
      id,
      title,
      overview,
      poster_path,
      release_date,
      vote_average,
      backdrop_path
    } = result;
    return {
      title,
      movie_id: id,
      overview,
      poster_path: `${imageBaseUrl}${poster_path}`,
      release_date,
      backdrop_path,
      rating: vote_average,
      favorite: false
    };
  });

  return cleanResults;
};

export const getWallpapers = async (url = `${baseUrl}${apiKey}`) => {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  const wallpaper = await results.map(async result => {
    const { backdrop_path, id } = result;
    return {
      wallpaper: `${imageBaseUrl}${backdrop_path}`,
      id: id
    };
  });
  if (!response.ok) {
    throw new Error("Could not fetch wallpapers");
  }
  return await Promise.all(wallpaper);
};

export const getSearchWallpapers = async searchMovies => {
  const searchWallpapers = searchMovies.map(async movie => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=149174d30ba0677b5219f8786eaaaaa7`)
    const data = await response.json();
    return { wallpaper: `${imageBaseUrl}${data.backdrop_path}`, id: data.id }
  });
  return Promise.all(searchWallpapers);
}

export const getFavoriteWallpapers = async favoriteMovies => {
  const searchWallpapers = favoriteMovies.map(async movie => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=149174d30ba0677b5219f8786eaaaaa7`)
    const data = await response.json();
    return { wallpaper: `${imageBaseUrl}${data.backdrop_path}`, id: data.id }
  });
  return Promise.all(searchWallpapers);
}

export const createUser = async newUser => {
  const url = "https://the-screening-room-db.herokuapp.com/api/v1/users";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Email address already in use");
  }
  return response.json();
};

export const selectUser = async recurrentUser => {
  const url = "https://the-screening-room-db.herokuapp.com/api/v1/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recurrentUser)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Email and password do not match");
  }
  return response.json();
};

export const getFavorites = async userId => {
  const url = `https://the-screening-room-db.herokuapp.com/api/v1/users/${userId}/moviefavorites`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable to fetch favorites");
  }
  const favorites = await response.json();
  return favorites;
};

export const postFavorite = async (movie, userId) => {
  const cleanedMovie = {
    movie_id: movie.movie_id,
    title: movie.title,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.rating,
    overview: movie.overview
  };
  const url = `https://the-screening-room-db.herokuapp.com/api/v1/users/${userId}/moviefavorites`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cleanedMovie)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Please log in to add favorites.");
  }
  const newFavorite = await response.json();
  return newFavorite;
};

export const removeFavorite = async (movieId, userId) => {
  const url = `https://the-screening-room-db.herokuapp.com/api/v1/users/${userId}/moviefavorites/${movieId}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Could not delete favorite.");
  }
};

export const apiWallpaperHandler = async (method) => {
  if (method === 'trending-tv-today') {
    return await getWallpapers(`https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`)
  }
  if (method === 'trending-tv-week') {
    return await getWallpapers(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`)
  }
  if (method === 'playing-now') {
    return await getWallpapers();
  }
  if (method === 'trending-movie-today') {
    return await getWallpapers(`https://api.themoviedb.org/3/trending/movies/day?api_key=${apiKey}`)
  }
  if (method === 'trending-movie-week') {
    return await getWallpapers(`https://api.themoviedb.org/3/trending/movies/week?api_key=${apiKey}`)
  }
  if (method === 'top-rated') {
    return await getWallpapers(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  }
};