import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [gundams, setGundams] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id) {
      // change this to a try catch block and use async await
      fetch(`/purchases/${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          setPurchases(data);
        });
        console.log(purchases)
    }
  }, [user]);

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
      body: JSON.stringify(gundam),
    })
      .then((res) => res.json())
      .then((data) => {
        setGundams([...gundams, data]);
      });
  };

  const purchaseGundam = (purchase) => {
    fetch('/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchase),
    })
      .then((res) => res.json())
      .then((data) => {
        purchases[0] && setPurchases([...purchases, data]);
        // use the gundam_id to find the gundam it was purchased on.
        // updated purchases = [...gundam.purchases, data];
        // const updatedGundam = {...gundam, purchases: updated purchases};
        // go through all the gundams, if same gundam, replace, otherwise not.
      });
  };

  // const updateGundam = (gundam) => {
  //   fetch(`/gundams/${gundam.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(gundam),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       patchGundam(data);
  //     });
  // }

  // const patchGundam = (patchedGundam) => {
  //   const updateGundams = gundams.map(gundam => {
  //     if (gundam.id === patchedGundam.id) {
  //       return patchedGundam
  //     } else {
  //       return gundam
  //     }
  //   })
  //   setGundams(updateGundams)
  // }

  // const deleteGundam = (id) => {
  //   const updatedGundams = gundams.filter(gundam => gundam.id !== id)
  //   setGundams(updatedGundams)
  // }
  
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
        // updateGundam,
        // deleteGundam
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };