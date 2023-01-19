import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [gundams, setGundams] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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