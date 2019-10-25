import React, { Component } from 'react';
import { selectUser, getFavorites } from '../../apiCalls/apiCalls';
import { setUser, hasErrored, setFavorites } from '../../actions/index';
import { connect } from 'react-redux';
import './LoginForm.scss';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      hasErrored: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = async () => {
    const { setUser } = this.props;
    try {
      let foundUser = await selectUser(this.state);
      console.log('foundUser', foundUser)
      setUser(foundUser);
      this.findUserFavorites(foundUser);
    } catch ({ message }) {
      hasErrored(message);
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
    const { email, password } = this.state;
    return (
      <form className='form-model' onSubmit={e => this.handleSubmit(e)}>
        <p className='login-message'>
          Sign in with your email to keep track of your favorite movies.
        </p>
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
        <Link to='/'>
          <button
            type='submit'
            className='Form__button'
            onClick={e => this.handleClick(e)}
          >
            Continue
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser, setFavorites }, dispatch);
};

export default connect(null, mapDispatchToProps)(LoginForm);
