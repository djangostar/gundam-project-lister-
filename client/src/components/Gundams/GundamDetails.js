import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/user';
import PurchaseGundam from '../Forms/PurchaseGundam'

const GundamDetails = () => {
  const { gundams } = useContext(UserContext);
  const params = useParams();

  const gundam = gundams.find((g) => `${g.id}` === params.id);

  if (gundam) {
    return (
      <div>
        <h2>Gundam Details</h2>
        <h4>Name: {gundam.name}</h4>
        <h4>Model Series: {gundam.model_series}</h4>
        <h4>Grade: {gundam.grade}</h4>
        <h4>Year: {gundam.year}</h4>
        <img src={gundam.img_url} alt='Gundam' />
        <br/>
        <PurchaseGundam />
      </div>
    );
  } else {
    return <h2>Not Authorized</h2>;
  }
}

export default GundamDetails;
