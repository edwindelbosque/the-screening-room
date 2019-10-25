import React, { Component } from 'react';
import { selectUser, getFavorites } from '../../apiCalls/apiCalls';
import { setUser, hasError, setFavorites } from '../../actions/index';
import { connect } from 'react-redux';
import './LoginForm.scss';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = async () => {
    const { setUser, hasError } = this.props;
    try {
      let foundUser = await selectUser(this.state);
      console.log('foundUser', foundUser)
      setUser(foundUser);
      this.findUserFavorites(foundUser);
      this.setState({ isLoggedIn: true });
    } catch ({ message }) {
      hasError(message);
    }
    this.clearInputs();
  };

  clearInputs = () => {
    const stateKeys = Object.keys(this.state);
    stateKeys.forEach(stateKey =>
      this.setState({
        [stateKey]: ''
      })
    );
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  findUserFavorites = async (user) => {
    const { setFavorites } = this.props;
    console.log(user.id)
    if (user.id) {
      try {
        console.log('inside try favorites')
        let favorites = await getFavorites(user.id)
        console.log('favorite-favorite', favorites.favorites)
        setFavorites(favorites.favorites);
      } catch ({ message }) {
        hasErrored(message)
      }
    }
  } 

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }
    const { email, password } = this.state;
    const { errMsg } = this.props;
    return (
      <form className='form-model' onSubmit={e => this.handleSubmit(e)}>
        {errMsg ? (
          <p className='email-error'>{errMsg}</p>
        ) : (
          <p className='login-message'>
            Sign in with your email to keep track of your favorite movies.
          </p>
        )}
        <div>
          <label htmlFor='email' className='Form__label'>
            Your email
          </label>
          <input
            id='email'
            type='text'
            placeholder='your@email.com'
            className='Form__input'
            name='email'
            value={email}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor='password' className='Form__label'>
            Your password
          </label>
          <input
            id='password'
            type='password'
            className='Form__input'
            name='password'
            placeholder='Must have at least 8 characters'
            value={password}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <button
          type='submit'
          className='Form__button'
          onClick={e => this.handleClick(e)}
        >
          Continue
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ movies, errMsg, isLoading }) => ({
  movies,
  errMsg,
  isLoading
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser, setFavorites, hasError }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);