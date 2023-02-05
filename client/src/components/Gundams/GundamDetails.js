import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user';
import PurchaseGundam from '../Forms/PurchaseGundam';

const GundamDetails = () => {
  const { gundams } = useContext(UserContext);
  const { gundam_id } = useParams();

  const [thisGundam, setThisGundam] = useState({});

  useEffect(() => {
    const gundam = gundams.find((gundam) => gundam.id === parseInt(gundam_id));
    setThisGundam(gundam);
  }, [gundams, gundam_id]);

  if (thisGundam) {
    return (
      <div>
        <h2>Gundam Details</h2>
        <h4>Name: {thisGundam.name}</h4>
        <h4>Model Series: {thisGundam.model_series}</h4>
        <h4>Grade: {thisGundam.grade}</h4>
        <h4>Year: {thisGundam.year}</h4>
        <img src={thisGundam.img_url} alt='Gundam' />
        <br />
        <PurchaseGundam />
      </div>
    );
  } else {
    return <h2>Not Authorized</h2>;
  }
};

export default GundamDetails;
