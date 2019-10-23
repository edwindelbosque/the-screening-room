import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import { getMovies } from '../../apiCalls/apiCalls';
import './App.scss';

class App extends Component {
  
  componentDidMount = async () => {
    try {
      console.log(await getMovies())
      return await getMovies();
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

export default App;
