import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AccessModal from '../AccessModal/AccessModal';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import Footer from '../Footer/Footer';
import { getMovies, getFavorites, postFavorite } from '../../apiCalls/apiCalls';
import {
  setMovies,
  isLoading,
  hasError,
  addFavorite,
  setFavorites,
  setUser
} from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

export class App extends Component {
  componentDidMount = async () => {
    const { setMovies } = this.props;
    try {
      isLoading(true);
      let movieData = await getMovies();
      console.log(movieData);
      isLoading(false);
      setMovies(movieData);
    } catch ({ message }) {
      isLoading(false);
      hasError(message);
    }
  };

  toggleFavorites = async movie => {
    try {
      let favoritesData = await postFavorite(movie);
      addFavorite(favoritesData);
    } catch ({ message }) {
      hasError(message);
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
            console.log(match.params);
            const movieDetails = this.props.movies.find(
              movie => movie.id === parseInt(match.params.id)
            );
            return <SelectedMovie movieDetails={movieDetails} />;
          }}
        />
        <Route path='/(|movies|signup|login)' render={() => <Container />} />
        <Route path='/(login|signup)' render={() => <AccessModal />} />
        <Route exact path='/favorites' render={() => <Container />} />
        <Footer />
      </main>
    );
  }
}

export const mapStateToProps = ({
  movies,
  hasError,
  isLoading,
  user,
  favorites
}) => ({
  movies,
  hasError,
  isLoading,
  user,
  favorites
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setMovies, setUser }, dispatch);
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
