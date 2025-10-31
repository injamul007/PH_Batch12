import React from 'react';
import Special from './Special';

const MySelf = ({asset}) => {
  return (
    <div>
      <h4>MySelf</h4>
      <section>
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default MySelf;