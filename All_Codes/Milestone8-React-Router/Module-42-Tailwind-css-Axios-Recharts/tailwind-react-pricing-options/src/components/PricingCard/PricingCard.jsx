import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
  
  const {name, price, description, features} = pricing;

  return (
    <div className='p-4 border-2 border-orange-300 rounded-xl bg-orange-200 mb-20 flex flex-col'>
      {/* card header */}
      <div>
        <h1 className="text-5xl">{name}</h1>
        <h4 className='text-2xl font-bold'>{price}</h4>
      </div>
      {/* card body */}
      <div className='bg-purple-700 rounded-xl p-3 my-4 text-white flex-1'>
        <p className='mb-4'>{description}</p>
        {
          features.map((feature, index) => <PricingFeatures key={index} feature={feature}></PricingFeatures>)
        }
      </div>
      <button className="btn w-full btn-primary">Subscribe</button>
    </div>
  );
};

export default PricingCard;