import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AccessModal from '../AccessModal/AccessModal';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Footer from '../Footer/Footer';
import {
  getMovies,
  getWallpapers,
  postFavorite,
  removeFavorite,
  getFavorites
} from '../../apiCalls/apiCalls';
import {
  setMovies,
  setWallpapers,
  setLoading,
  hasError,
  addFavorite,
  setFavorites,
  setUser,
  setRandomWallpaper
} from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

export class App extends Component {
  componentDidMount = async () => {
    const { setMovies, setWallpapers, setLoading, hasError, setRandomWallpaper, favorites, user } = this.props;
    try {
      // setLoading(true);
      let movieData = await getMovies();
      let wallpapers = await getWallpapers();
      let favoriteMovies = await getFavorites(user.id);
      setFavorites(favoriteMovies)
      setWallpapers(wallpapers);
      setRandomWallpaper(wallpapers)
      setMovies(movieData);
    } catch ({ message }) {
      hasError(message);
    }
  };

  updateFavorites = async (movie, isFavorite) => {
    const { user, addFavorite, setFavorites, hasError } = this.props;
    if (!isFavorite) {
      try {
        let favoritesData = await postFavorite(movie, user.id);
        addFavorite(favoritesData);
        setFavorites()
      } catch ({ message }) {
        hasError(message);
      }
    } else {
      try {
        await removeFavorite(movie.id, user.id);
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
          path='/movies/:id'
          render={({ match }) => {
            const movieDetails = this.props.movies.find(
              movie => movie.movie_id === parseInt(match.params.id)
            );
            return <SelectedMovie movieDetails={movieDetails} wallpapers={this.props.wallpapers} />;
          }}
        />
        <Route
          path='/(|movies|signup|login)'
          render={() => <Container movies={this.props.movies} updateFavorites={this.updateFavorites} />}
        />
        <Route path='/(login|signup)' render={() => <AccessModal />} />
        <Route
          exact
          path='/favorites'
          render={() => <Container movies={this.props.favorites} updateFavorites={this.updateFavorites} />}
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
