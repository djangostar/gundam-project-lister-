import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user';
import PurchaseCard from '../Purchases/PurchaseCard';

const PurchaseList = () => {
  const { purchases } = useContext(UserContext);
 // console.log(typeof purchases);

 useEffect(() => {
console.log(purchases)
 }, [purchases])

  return (
    <div>
      <br />
      {purchases && purchases.map((purchase) => 
      (
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
              gundam={purchase.gundam}
            />
         ))
     }
    </div>
  );
};

export default PurchaseList;
