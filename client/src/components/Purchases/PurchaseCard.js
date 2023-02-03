import React from 'react';

const PurchaseCard = ({ purchase, gundam }) => {
  
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
        <img src={gundam && gundam.img_url} alt='gundam_pic' />
        {purchase.price}
        <br />
      </div>
    </div>
  );
};

export default PurchaseCard;
