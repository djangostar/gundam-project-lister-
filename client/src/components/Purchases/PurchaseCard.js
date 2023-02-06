import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom'

const PurchaseCard = ({ purchase, gundam }) => {
  const { patchPurchase, destroyPurchase } = useContext(UserContext);
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false);
  const [price, setPrice] = useState(purchase.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchPurchase(purchase.id, price);
    setEditing(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '90%',
        margin: 'auto',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <div
        key={purchase.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: 'black solid',
          width: '100%',
          maxWidth: '200px',
        }}
      >
        {gundam && gundam.name}
        <img src={gundam && gundam.img_url} alt="gundam_pic" />
        <br />
        <p><strong>Series: {gundam && gundam.model_series}</strong></p>
        <p><strong>Model Grade: {gundam && gundam.grade}</strong></p>
        <p><strong>Year: {gundam && gundam.year}</strong></p>

        {editing ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={price} 
            onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p><strong>Purchase Price: {purchase.price}</strong></p>
        )}
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => destroyPurchase(purchase.id)}>Delete</button>
      </div>
    </div>
  );
};

export default PurchaseCard;