import React from 'react';
import { useNavigate } from 'react-router-dom';

const GundamCard = ({ gundam }) => {

  const navigate = useNavigate();

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
        key={gundam.id}
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: 'black solid',
          width: '100%',
          maxWidth: '200px',
          }}
        >
          {gundam.name}
        <img src={gundam.img_url} alt='gundam_pic' />
        <br />
        <button onClick={() => navigate(`/gundams/${gundam.id}`)}>
            Gundam Details
        </button>
      </div>
    </div>
  );
};

export default GundamCard;
