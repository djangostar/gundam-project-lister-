import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import PurchaseCard from '../Purchases/PurchaseCard';

const PurchaseList = () => {
  const { purchases } = useContext(UserContext);

  return (
    <div>
      <br />
      {purchases.map((purchase) => (
        <PurchaseCard
          key={purchase.id}
          purchase={purchase}
          gundam={purchase.gundam}
        />
      ))}
    </div>
  );
};

export default PurchaseList;
