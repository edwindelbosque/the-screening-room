import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import LoginForm from '../LoginForm/LoginForm';
import Container from '../Container/Container';
import SelectedMovie from '../SelectedMovie/SelectedMovie';
import './App.scss';

class App extends Component {
  constructor() {
    super();
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
