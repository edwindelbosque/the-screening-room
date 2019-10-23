import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import { getMovies } from '../../apiCalls/apiCalls';
import { setMovies } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

class App extends Component {

  componentDidMount = async () => {
    try {
      const { setMovies } = this.props
      let movieData = await getMovies();
      setMovies(movieData);
    } catch(error) {
      console.log(error);
    }
  } 

  render() {
    return (
      <>
        <h1>Screening Room</h1>
        <Nav />
          <Route exact path='/' render={() => <Container />} />
          <Route exact path='/login' render={() => <LoginForm />} />
          <Route exact path='/favorites' render={() => <Container />} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

// const mapDispatchToProps = dispatch => ({
//   setMovies: (data) => dispatch(setMovies(data))
// });

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setMovies }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
