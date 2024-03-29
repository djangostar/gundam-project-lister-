import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

const NavBar = () => {
  const { user, logout, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    fetch('/logout', {
      method: 'DELETE',
    });
    logout();
    navigate('/');
  };

  const loggedInDisplay = (
    <div>
      {user ? <h1>Gundam List</h1> : null}
      <button onClick={handleLogOut}>Logout</button>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/gundams'>
        <button>All Gundams</button>
      </NavLink>
      <hr />
    </div>
  );

  const loggedOutDisplay = (
    <div>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to='/signup'>
        <button>Sign Up</button>
      </NavLink>
      <NavLink to='/login'>
        <button>Log In</button>
      </NavLink>
      <hr />
    </div>
  );

  return isLoggedIn ? loggedInDisplay : loggedOutDisplay;
};

export default NavBar;