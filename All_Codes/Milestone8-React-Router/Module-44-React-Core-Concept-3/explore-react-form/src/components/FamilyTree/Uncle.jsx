import React from 'react';
import Cousin from './Cousin';
import Special from './Special';

const Uncle = ({asset}) => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className='flex'>
        <Cousin name={'Trisha'} asset={asset}></Cousin>
        <Cousin name={'Tanaz'}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;