import React, { Component } from 'react';
import { createUser } from '../../apiCalls/apiCalls';
import './SignUpForm.scss';

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
    })
  }

  handleClick = async () => {
    await createUser(this.state);
    this.clearInputs();
  }

  clearInputs = () => {
    const stateKeys = Object.keys(this.state)
    stateKeys.forEach( stateKey => this.setState({ 
      [stateKey]: '' 
    }))
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { name, email, password } = this.state;
    return (
      <form className='Form' onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor='email' className='Form__label'>
          Name
        </label>
        <input
          id='name'
          type='text'
          className='Form__input'
          name='name'
          value={name}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label htmlFor='email' className='Form__label'>
          Email
        </label>
        <input
          id='email'
          type='text'
          className='Form__input'
          name='email'
          value={email}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <label htmlFor='password' className='Form__label'>
          Password
        </label>
        <input
          id='password'
          type='text'
          className='Form__input'
          name='password'
          value={password}
          onChange={(e) => this.handleChange(e)}
        ></input>
        <button 
          type='submit' 
          className='Form__button'
          onClick={(e) => this.handleClick(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

// mapStateToProps = (state) => ({
//   email: state.email,
//   password: state.password
// });

export default SignUpForm;
// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);