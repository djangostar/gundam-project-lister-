import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [gundams, setGundams] = useState([]);
  const [purchases, setPurchases] = useState([])
  const [errors, setErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // session
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((data) => {
          setUser(data);
          // fetchPurchases()
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

  // const fetchPurchases = () => {
  //   fetch('/purchases')
  //   .then(res => res.json())
  //   .then( data => {
  //     setPurchases(data)
  //   })
  // }
  
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

  const addGundam = (gundam) => {
    fetch('/gundams', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(gundam)
    })
    .then(res => res.json())
    .then(data => {
      setGundams([...gundams, data])
    })
  }

  const purchaseGundam = (purchase) => {
    fetch('/purchases', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(purchase)
    })
    .then(res => res.json())
    .then(data => {
      setPurchases([...purchases, data])
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        gundams,
        purchases,
        errors,
        isLoggedIn,
        login,
        logout,
        ctxSetUserAndLogin,
        addGundam,
        purchaseGundam,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
