import React, { Component } from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import AccessModal from "../AccessModal/AccessModal";
import Container from "../Container/Container";
import SelectedMovie from "../SelectedMovie/SelectedMovie";
import Footer from "../Footer/Footer";
import {
  getMovies,
  getWallpapers,
  postFavorite,
  removeFavorite,
  getFavorites,
  getFavoriteMovies,
  getFavoriteWallpapers
} from "../../apiCalls/apiCalls";
import {
  setMovies,
  setWallpapers,
  setLoading,
  setError,
  addFavorite,
  setFavorites,
  setUser,
  setRandomWallpaper,
  setFavoriteWallpapers
} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PropTypes } from "prop-types";
import "./App.scss";

export class App extends Component {
  componentDidMount = async () => {
    const {
      setWallpapers,
      hasError,
      setRandomWallpaper,
      setLoading
    } = this.props;
    try {
      setLoading(true);
      const wallpapers = await getWallpapers();
      await this.loadMovieData();
      setWallpapers(wallpapers);
      setRandomWallpaper(wallpapers);
      setLoading(false);
    } catch ({ message }) {
      hasError(message);
      setLoading(false);
    }
  };

  loadMovieData = async () => {
    const { setMovies, setFavorites, hasError, user, setFavoriteWallpapers } = this.props;
    const fetchedMovies = await getMovies();

    if (user.id) {
      try {
        const favoriteMovieIds = await getFavorites(user.id);
        const favorites = await getFavoriteMovies(favoriteMovieIds.favorites);
        setFavoriteWallpapers(await getFavoriteWallpapers(favorites));
        console.log(favorites);
        const markedMovies = await this.markFavorites(fetchedMovies, favorites);
        setMovies(markedMovies);
        await setFavorites(favorites);
      } catch ({ message }) {
        hasError(message);
      }
    } else {
      setMovies(fetchedMovies);
    }
  };

  markFavorites = (movies, favorites) => {
    return movies.map(movie => {
      return favorites.find(
        favorite => favorite.movie_id === movie.movie_id
      )
        ? { ...movie, favorite: true }
        : { ...movie, favorite: false };
    });
  };

  updateFavorites = async (movie, isFavorite) => {
    const { user, addFavorite, setFavorites, hasError } = this.props;
    if (!isFavorite) {
      try {
        let favoritesData = await postFavorite(movie, user.id);
        addFavorite(favoritesData);
      } catch ({ message }) {
        hasError(message);
      }
    } else {
      try {
        await removeFavorite(movie.movie_id, user.id);
        let newFavorites = await getFavorites(user.id);
        setFavorites(newFavorites.favorites);
      } catch ({ message }) {
        hasError(message);
      }
    }
  };

  logoutCurrentUser = () => {
    const { setUser } = this.props;
    setUser({});
  };

  render() {
    return (
      <main className="main">
        <Nav logoutCurrentUser={this.logoutCurrentUser} />
        <Route
          path="/(movies|favorites|search)/:id"
          render={({ match }) => {
            const { movies, searchResults, favorites } = this.props;
            const movieDetails = [...movies, ...searchResults, ...favorites].find(
              movie => movie.movie_id === parseInt(match.params.id)
            );
            console.log(searchResults, movies, movieDetails);
            return (
              <SelectedMovie
                movieDetails={movieDetails}
                match={match}
                wallpapers={[...this.props.wallpapers, ...this.props.favoriteWallpapers]}
              />
            );
          }}
        />
        <Route
          path="/(|movies|signup|login)"
          render={() => (
            <Container
              movies={this.props.movies}
              type="movies"
              updateFavorites={this.updateFavorites}
            />
          )}
        />
        <Route
          path="/(login|signup)"
          render={() => <AccessModal loadMovieData={this.loadMovieData} />}
        />
        <Route
          path="/favorites"
          render={() => (
            <Container
              movies={this.props.favorites}
              type="favorites"
              updateFavorites={this.updateFavorites}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Container
              movies={this.props.searchResults}
              type="search"
              updateFavorites={this.updateFavorites}
            />
          )}
        />
        <Footer />
      </main>
    );
  }
}

export const mapStateToProps = ({
  movies,
  wallpapers,
  hasError,
  isLoading,
  user,
  favorites,
  searchResults,
  favoriteWallpapers
}) => ({
  movies,
  wallpapers,
  hasError,
  isLoading,
  user,
  favorites,
  searchResults,
  favoriteWallpapers
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setMovies,
      setWallpapers,
      setLoading,
      setError,
      addFavorite,
      setFavorites,
      setUser,
      setRandomWallpaper,
      setFavoriteWallpapers
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  movies: PropTypes.array,
  wallpapers: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  favorites: PropTypes.array,
  setMovies: PropTypes.func,
  setWallpapers: PropTypes.func,
  setLoading: PropTypes.func,
  setError: PropTypes.func,
  addFavorite: PropTypes.func,
  setFavorites: PropTypes.func,
  setUser: PropTypes.func,
  setRandomWallpaper: PropTypes.func
};
