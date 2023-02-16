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

  const patchPurchase = (id, price) => {
    fetch(`/purchases/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log('error');
          return;
        }
        editPurchase(data);
      });
  };

  const editPurchase = (purchase) => {
    const newPurchases = purchases.map((p) => {
      if (p.id === purchase.id) {
        return purchase;
      } else {
        return p;
      }
    });
    setPurchases(newPurchases);
  };

  const destroyPurchase = (id) => {
    fetch(`/purchases/${id}`, {
      method: 'DELETE',
    });
    deletePurchase(id);
  };

  const deletePurchase = (id) => {
    const newPurchases = purchases.filter((p) => p.id !== id);
    setPurchases(newPurchases);
  };

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
        patchPurchase,
        destroyPurchase,
        setPurchases,
        // updateGundam,
        // deleteGundam
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };