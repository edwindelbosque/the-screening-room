import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <label for='email'>Email</label>
        <input id='email' type='text' name='email' value={this.state.email}></input>
        <label for='password'>Password</label>
        <input id='password' type='text' name='password' value={this.state.password}></input>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default LoginForm;