import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AccessModal from '../AccessModal/AccessModal';
import Container from '../Container/Container';
import { getMovies, getFavorites, postFavorite } from '../../apiCalls/apiCalls';
import { setMovies, isLoading, hasError, addFavorite, setFavorites } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

class App extends Component {
  componentDidMount = async () => {
    const { setMovies } = this.props;
    try {
      isLoading(true);
      let movieData = await getMovies();
      isLoading(false);
      setMovies(movieData);
    } catch ({ message }) {
      isLoading(false);
      hasError(message);
      }
    }

  toggleFavorites = async(movie) => {
    try {
      let favoritesData = await postFavorite(movie)
      addFavorite(favoritesData)

    } catch ({message}){
      hasError(message)
    }
  };

  render() {
    return (
      <main className='main'>
        <Nav />
        <Route exact path='/' render={() => <Container />} />
        <Route path='/(login|signup)' render={() => <AccessModal />} />
        <Route exact path='/favorites' render={() => <Container />} />
      </main>
    );
  }
}

const mapStateToProps = ({ movies, hasError, isLoading, user, favorites }) => ({
  movies,
  hasError,
  isLoading,
  user,
  favorites
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setMovies }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
