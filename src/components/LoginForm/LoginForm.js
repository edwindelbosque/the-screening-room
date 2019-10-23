import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <form className='Form'>
        <label for='email' className='Form__label'>
          Email
        </label>
        <input
          id='email'
          type='text'
          className='Form__input'
          name='email'
          value={this.state.email}
        ></input>
        <label for='password' className='Form__label'>
          Password
        </label>
        <input
          id='password'
          type='text'
          className='Form__input'
          name='password'
          value={this.state.password}
        ></input>
        <button type='submit' className='Form__button'>
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
