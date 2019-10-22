import React, { Component } from 'react';
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
      </>
    );
  }
}

export default App;
