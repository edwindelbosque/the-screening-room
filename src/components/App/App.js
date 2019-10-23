import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import { getMovies } from '../../apiCalls/apiCalls';
import { setMovies, isLoading, hasErrored } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

class App extends Component {
  componentDidMount = async () => {
    try {
      const { setMovies } = this.props;
      isLoading(true);
      let movieData = await getMovies();
      isLoading(false);
      setMovies(movieData);
    } catch ({ message }) {
      isLoading(false);
      hasErrored(message);
    }
  };

  render() {
    // const { movies, hasError, setLoading } = this.props;
    return (
      <main className='main'>
        <Nav />
          <Route exact path='/' render={() => <Container />} />
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/favorites' render={() => <Container />} />
      </main>
    );
  }
}

const mapStateToProps = ({ movies, hasError, isLoading }) => ({
  movies,
  hasError,
  isLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
