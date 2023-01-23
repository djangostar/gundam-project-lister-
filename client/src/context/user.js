import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [gundams, setGundams] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // session
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          setUser(data);
          data.error ? setIsLoggedIn(false) : setIsLoggedIn(true);
        });
      } else {
        resp.json().then((data) => setErrors(data.error));
      }
    });
  }, []);
  
  useEffect(() => {
    // fetch all gundams
    fetch('/gundams')
      .then((res) => res.json())
      .then((data) => {
        setGundams(data);
      });
  }, []);


  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
  };

  const ctxSetUserAndLogin = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        gundams,
        errors,
        isLoggedIn,
        login,
        logout,
        ctxSetUserAndLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export { UserContext, UserProvider };