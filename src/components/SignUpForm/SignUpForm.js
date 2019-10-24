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
      <form className='form-model' onSubmit={(e) => this.handleSubmit(e)}>
        <p className="signup-message">Create an account with your email to keep track of your favorite movies!</p>
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
          onChange={(e) => this.handleChange(e)}
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
          onChange={(e) => this.handleChange(e)}
        ></input>
        </div>
        <div>
        <label htmlFor='password' className='Form__label'>
          Your password
        </label>
        <input
          id='password'
          type='text'
          placeholder='secure-password123'
          className='Form__input'
          name='password'
          value={password}
          onChange={(e) => this.handleChange(e)}
        ></input>
        </div>
        <button 
          type='submit' 
          className='Form__button'
          onClick={(e) => this.handleClick(e)}
        >
          Continue
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