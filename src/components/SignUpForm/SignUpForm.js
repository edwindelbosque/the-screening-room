import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../../apiCalls/apiCalls';
import { setUser, hasEmailError } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SignUpForm.scss';

export class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    const { setUser, hasEmailError } = this.props;
    try {
      let newUser = await createUser(this.state);
      setUser(newUser);
      this.setState({ isLoggedIn: true });
      hasEmailError('');
    } catch ({ message }) {
      hasEmailError(message);
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
    this.handleClick();
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }
    const { name, email, password } = this.state;
    const { emailErrMsg } = this.props;
    return (
      <form className='form-model' onSubmit={e => this.handleSubmit(e)}>
        {emailErrMsg ? (
          <p className='email-error signup-message'>{emailErrMsg}</p>
        ) : (
          <p className='signup-message'>
            Create an account with your email to keep track of your favorite
            movies.
          </p>
        )}
        <div>
          <label htmlFor='email' className='Form__label'>
            Your name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Walter White'
            className='Form__input Form__input--name'
            name='name'
            value={name}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <div>
          <label htmlFor='email' className='Form__label'>
            Your email
          </label>
          {emailErrMsg ? (
            <input
              id='email'
              type='text'
              placeholder='your@email.com'
              className='Form__input--error Form__input'
              name='email'
              value={email}
              onChange={e => this.handleChange(e)}
            ></input>
          ) : (
            <input
              id='email'
              type='text'
              placeholder='your@email.com'
              className='Form__input Form__input--email'
              name='email'
              value={email}
              onChange={e => this.handleChange(e)}
            ></input>
          )}
        </div>
        <div>
          <label htmlFor='password' className='Form__label'>
            Your password
          </label>
          <input
            id='password'
            type='password'
            placeholder='Must have at least 8 characters'
            className='Form__input'
            name='password'
            value={password}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <button
          type='submit'
          className='Form__button signup-form__button'
        >
          Continue
        </button>
      </form>
    );
  }
}

export const mapStateToProps = ({ emailErrMsg, isLoading }) => ({
  emailErrMsg,
  isLoading
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser, hasEmailError }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
