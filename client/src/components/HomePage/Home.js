import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import MyGundams from '../Gundams/MyGundams';

const Home = () => {
  const { user, isLoggedIn, purchases } = useContext(UserContext);

  // useEffect(() => {
  //   console.log({ user, isLoggedIn });
  // }, [isLoggedIn, user]);

  const purchaseCards = purchases.map(purchase => <MyGundams key={purchase.id} purchase={purchase} gundam={purchase.gundam}/>)
  const loggedInDisplay = (
    <div>
      <h1>{user.username}'s Page</h1>
      { purchaseCards }
    </div>
  );

  const loggedOutDisplay = (
    <div>
      <h1>Welcome!</h1>
      <br />
      <h2>Please Sign Up or Log In to purchase and list your Gundams!</h2>
    </div>
  );

  return isLoggedIn ? loggedInDisplay : loggedOutDisplay;
};

export default Home;
