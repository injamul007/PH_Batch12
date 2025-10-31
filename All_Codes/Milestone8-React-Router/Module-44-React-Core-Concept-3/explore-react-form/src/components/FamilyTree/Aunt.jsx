import React, { useContext } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {
  const [money, setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h3>Aunt</h3>
      <section className='flex'>
        <Cousin name={'Shoikat'}></Cousin>
        <Cousin name={'Jeba'}></Cousin>
      </section>
        <button onClick={()=> setMoney(money+5000)}>Add 5000 tk</button>
    </div>
  );
};

export default Aunt;