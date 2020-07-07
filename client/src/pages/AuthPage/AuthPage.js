import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';

import './AuthPage.scss';
import { AuthContext } from '../../context/AuthContext';

const AuthPage = () => {

  const auth = useContext(AuthContext);
  const { loading, request, error } = useHttp();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {

  }, [error]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const registerHandler = async () => {
    try {
      const data = await request('api/auth/register', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request('api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className='login-page'>
      <h1 className='login-page__title'>Cut your link!</h1>
      <form className='login-page__form'>
        <h2 className='login-page__form-title'>Authorization</h2>
        <label htmlFor='email'>Name:</label>
        <input 
          type='text' 
          id='email' 
          name='email' 
          placeholder='Albert Einstein'
          className='login-page__input'
          value={ form.email }
          onChange={ changeHandler }
        />
        <label htmlFor='password'>Password:</label>
        <input 
          type='password' 
          id='password' 
          name='password'
          className='login-page__input'
          value={ form.password }
          onChange={ changeHandler } 
        />
        <button 
          type='button'
          onClick={ loginHandler } 
          className='login-page__btn'
          disabled={ loading }
        >
          Login
        </button>
        <button 
          type='button' 
          onClick={ registerHandler } 
          className='login-page__btn'
          disabled={ loading }
        >
          Registration
        </button>
      </form>
    </div>
  );
}

export default AuthPage;