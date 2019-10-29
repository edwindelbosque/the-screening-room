import React from 'react';
import './AccessModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import { Route, NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const AccessModal = ({ loadMovieData }) => {
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
        <Route
          exact
          path='/login'
          render={() => <LoginForm loadMovieData={loadMovieData} />}
        />
        <Route exact path='/signup' render={() => <SignUpForm />} />
      </div>
    </>
  );
};

export default AccessModal;

AccessModal.propTypes = {
  loadMovieData: PropTypes.func
};
