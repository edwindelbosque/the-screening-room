import React from 'react';
import './AccessModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Route, NavLink } from 'react-router-dom';

const AccessModal = () => {
  return (
    <div className="modal-container">
    <h1>modal!</h1>
    <NavLink to='/login'>
      <li className='login_tab'>Log In</li>
    </NavLink>
    <NavLink to='/login/register'>
      <li className='login_tab'>Sign Up</li>
    </NavLink>
    <Route exact path='/login' render={() => <LoginForm />} />
    <Route exact path='/login/register' render={() => <SignUpForm />} />
    </div>
  )
}

export default AccessModal;