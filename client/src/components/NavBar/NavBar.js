import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './NavBar.scss';

const NavBar = () => {

  const auth = useContext(AuthContext);
  const history = useHistory();
  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  }

  return (
    <nav className='navbar'>
      <h1 className='navbar__header'>Cut your link!</h1>
      <ul className='navbar__list'>
        <li className='navbar__list-item'>
          <NavLink to='/create' className='navbar__link'>Create</NavLink>
        </li>
        <li className='navbar__list-item'>
          <NavLink to='/links' className='navbar__link'>Links</NavLink>
        </li>
        <li className='navbar__list-item'>
          <a href='/' onClick={ logoutHandler } className='navbar__link'>Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;