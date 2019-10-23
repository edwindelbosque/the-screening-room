import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
        <Nav>
          <NavLink to='/' render={() => <Container />} />
          <NavLink to='/login' render={() => <LoginForm />} />
          <NavLink to='/favorites' render={() => <Container />} />
        </Nav>
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
