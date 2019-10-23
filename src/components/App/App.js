import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { getMovies } from '../../apiCalls/apiCalls';
import { setMovies, isLoading, hasErrored } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

class App extends Component {

  componentDidMount = async () => {
    try {
      const { setMovies } = this.props
      isLoading(true);
      let movieData = await getMovies();
      isLoading(false);
      setMovies(movieData);
    } catch({message}) {
      isLoading(false);
      hasErrored(message);
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

const mapStateToProps = ({ movies, hasError, isLoading }) => ({
  movies,
  hasError,
  isLoading
});


const mapDispatchToProps = dispatch => (
  bindActionCreators({ setMovies }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
