import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const GundamCard = ({ gundam }) => {
  const { deleteGundam } = useContext(UserContext);

  const navigate = useNavigate();

  const destroyGundam = (id) => {
    fetch(`/gundams/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        deleteGundam(id);
      })
      .catch((error) => {
        console.error(error);
      });
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
        <img src={gundam.img_url} alt="gundam_pic" />
        <br />
        <button onClick={() => navigate(`/gundams/${gundam.id}`)}>
          Gundam Details
        </button>
        <button onClick={() => destroyGundam(gundam.id)}>Delete Gundam</button>
      </div>
    </div>
  );
};

export default GundamCard;
