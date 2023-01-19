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

  return (
    <UserContext.Provider
      value={{
        user,
        errors,
        isLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
export { UserContext, UserProvider };