import React, { Component } from 'react';
import { createUser } from '../../apiCalls/apiCalls';
import { setUser, hasErrored } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './SignUpForm.scss';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
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
      let newUser = await createUser(this.state);
      setUser(newUser);
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

  render() {
    const { name, email, password } = this.state;
    return (
      <form className='form-model' onSubmit={e => this.handleSubmit(e)}>
        {/* {emailError ? <p className="email-error">{emailError}</p> : <p className="signup-message">Create an account with your email to keep track of your favorite movies.</p>} */}
        <p className='signup-message'>
          Create an account with your email to keep track of your favorite
          movies.
        </p>
        <div>
          <label htmlFor='email' className='Form__label'>
            Your name
          </label>
          <input
            id='name'
            type='text'
            placeholder='Walter White'
            className='Form__input'
            name='name'
            value={name}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
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
            placeholder='Must have at least 8 characters'
            className='Form__input'
            name='password'
            value={password}
            onChange={e => this.handleChange(e)}
          ></input>
        </div>
        <Link to='/'>
          <button
            type='submit'
            className='Form__button'
            onClick={this.handleClick}
          >
            Continue
          </button>
        </Link>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUser }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
