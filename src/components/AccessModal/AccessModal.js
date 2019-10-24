import React from 'react';
import './AccessModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Route, NavLink } from 'react-router-dom';

const AccessModal = () => {
  return (
    <div className='modal-container'>
    <ul className='modal-tabs'>
      <NavLink to='/login/access' className='form-navlink'>
        <li className='login_tab'>Log in</li>
      </NavLink>
      <NavLink to='/login/register' className='form-navlink'>
        <li className='login_tab'>Sign up</li>
      </NavLink>
    </ul>
    <Route exact path='/login/access' render={() => <LoginForm />} />
    <Route exact path='/login/register' render={() => <SignUpForm />} />
    </div>
  )
}

export default AccessModal;