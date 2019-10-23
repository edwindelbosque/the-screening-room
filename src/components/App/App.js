import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import LoginForm from "../LoginForm/LoginForm";
import Container from "../Container/Container";
import { getMovies } from "../../apiCalls/apiCalls";
import "./App.scss";

class App extends Component {
  componentDidMount = async () => {
    try {
      console.log(await getMovies());
      return await getMovies();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h1>Screening Room</h1>
        <Nav>
          <NavLink to="/" render={() => <Container />} />
          <NavLink to="/login" render={() => <LoginForm />} />
          <NavLink to="/favorites" render={() => <Container />} />
        </Nav>
      </>
    );
  }
}

export default App;
