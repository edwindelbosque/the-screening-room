import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AccessModal from '../AccessModal/AccessModal';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Footer from '../Footer/Footer';
import { getMovies, getWallpapers, postFavorite, removeFavorite, getFavorites } from '../../apiCalls/apiCalls';
import { setMovies, setWallpapers, setLoading, hasError, addFavorite, setFavorites, setUser, setRandomWallpaper } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

export class App extends Component {
  componentDidMount = async () => {
    const { setMovies, setFavorites, setWallpapers, hasError, setRandomWallpaper, user } = this.props;
    try {
      const wallpapers = await getWallpapers();
      const fetchedMovies = await getMovies()
      const movieData = user.id 
        ? await this.markFavorites(fetchedMovies, await getFavorites(user.id)) 
        : fetchedMovies;

      if (user.id) {
        try {
          const favorites = await getFavorites(user.id);
          await setFavorites(favorites.favorites);
        } catch ({ message }) {
          hasError(message);
        }
      }
      setWallpapers(wallpapers);
      setRandomWallpaper(wallpapers)
      setMovies(movieData);
    } catch ({ message }) {
      hasError(message);
    }
  };
  
  markFavorites = (movies, favorites) => {
    if (favorites) {
      return movies.map(movie => {
      return favorites.favorites.find(favorite => favorite.movie_id === movie.movie_id)
        ? { ...movie, favorite: true }
        : { ...movie, favorite: false }
      })
    } else {
      return movies
    }
  }

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
      <main className='main'>
        <Nav logoutCurrentUser={this.logoutCurrentUser} />
        <Route
          path='/(movies|favorites)/:id'
          render={({ match }) => {
            const movieDetails = this.props.movies.find(
              movie => movie.movie_id === parseInt(match.params.id)
            );
            return <SelectedMovie movieDetails={movieDetails} match={match} wallpapers={this.props.wallpapers} />;
          }}
        />
        <Route
          path='/(|movies|signup|login)'
          render={() => <Container movies={this.props.movies} type='movies' updateFavorites={this.updateFavorites} />}
        />
        <Route path='/(login|signup)' render={() => <AccessModal />} />
        <Route
          path='/favorites'
          render={() => <Container movies={this.props.favorites} type='favorites' updateFavorites={this.updateFavorites} />}
        />
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = ({
  movies,
  wallpapers,
  hasError,
  isLoading,
  user,
  favorites
}) => ({
  movies,
  wallpapers,
  hasError,
  isLoading,
  user,
  favorites
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setMovies,
      setWallpapers,
      setLoading,
      hasError,
      addFavorite,
      setFavorites,
      setUser,
      setRandomWallpaper
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
