import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeatures = ({feature}) => {
  return (
    <div className='bg-red-200 text-black rounded-lg'>
      <p className='mb-2 px-2 flex items-center'><CircleCheckBig className='mr-3' />{feature}</p>
    </div>
  );
};

export default PricingFeatures;