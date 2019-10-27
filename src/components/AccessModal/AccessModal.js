import React from 'react';
import './AccessModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Route, NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const AccessModal = ({ user, findUserFavorites }) => {
  return (
    <>
      <Link to='/'>
        <div className='modal-backdrop-white'>
          <div className='modal-backdrop'></div>
        </div>
      </Link>
      <div className='modal-container'>
        <ul className='modal-tabs'>
          <NavLink to='/login' className='form-navlink'>
            <li className='login_tab'>Log in</li>
          </NavLink>
          <NavLink to='/signup' className='form-navlink'>
            <li className='login_tab'>Sign up</li>
          </NavLink>
        </ul>
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/signup' render={() => <SignUpForm />} />
      </div>
    </>
  );
};

export const mapStateToProps = user => ({
  user
});

export default connect(mapStateToProps)(AccessModal);
