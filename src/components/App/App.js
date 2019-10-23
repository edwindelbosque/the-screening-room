import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
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
        <LoginForm />
        <Container />
        <SelectedMovie />
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
