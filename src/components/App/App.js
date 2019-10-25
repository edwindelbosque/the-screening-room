import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import AccessModal from '../AccessModal/AccessModal';
import Container from '../Container/Container';
import Footer from '../Footer/Footer';
import { getMovies } from '../../apiCalls/apiCalls';
import { setMovies, isLoading, hasError } from '../../actions';
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
      hasError(message);
    }
  }

  render() {
    return (
      <main className='main'>
        <Nav />
          <Route path='/(|movies|signup|login)' render={() => <Container />} />
          <Route path='/(login|signup)' render={() => <AccessModal />} />
          <Route exact path='/favorites' render={() => <Container />} />
        <Footer />
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
