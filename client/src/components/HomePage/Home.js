import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import PurchaseList from '../Purchases/PurchaseList'

const Home = () => {
  const { user, isLoggedIn } = useContext(UserContext);

//  useEffect(() => {
 //  console.log(user, isLoggedIn );
 //}, [user, isLoggedIn]);

  const loggedInDisplay = (
    <div>
      <h1>{user && user.username}'s Page</h1>
      <PurchaseList />
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
