import React from 'react';
import './AccessModal.scss';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';

const AccessModal = ({ registerUser, selectUser }) => {
  return (
    <>
    <h1>modal!</h1>
    <SignUpForm />
    <LoginForm />
    </>
  )
}

export default AccessModal;