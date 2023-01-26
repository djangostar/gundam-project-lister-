import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import GundamForm from '../Forms/GundamForm'
import GundamCard from '../Gundams/GundamCard'

const GundamList = () => {
  const { gundams } = useContext(UserContext) 
  const gundamCards = gundams.map((gundam) => <GundamCard key={gundam.id} gundam={gundam} />)
  return (
    <div>
      <GundamForm />
      < br/>
      { gundamCards }
    </div>
  );
}

export default GundamList;
