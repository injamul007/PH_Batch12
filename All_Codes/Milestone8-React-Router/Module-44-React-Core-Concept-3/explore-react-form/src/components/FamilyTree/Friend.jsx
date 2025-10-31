import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
  const [money,] = useContext(MoneyContext);
  return (
    <div>
      <h3>Friend of Shoikat</h3>
      <button >{money}</button>
    </div>
  );
};

export default Friend;