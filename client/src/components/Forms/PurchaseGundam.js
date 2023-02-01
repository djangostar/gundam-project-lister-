import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewForm = () => {
  const { purchaseGundam } = useContext(UserContext);

  const navigate = useNavigate();

  const params = useParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      price: data.input,
      gundam_id: params.id,
    };
    purchaseGundam(payload);
    navigate('/gundams/:gundam_id/purchases');
    console.log(payload);
  };

  // const reviewHero = heroes.map(hero => hero.alias)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Price Paid: </label>
        <input
          type='integer'
          id='input'
          name='input'
          placeholder='Enter Price!'
        />
        <br />
        <input type='submit' value='Purchase Gundam!' />
      </form>
    </div>
  );
};

export default ReviewForm;
