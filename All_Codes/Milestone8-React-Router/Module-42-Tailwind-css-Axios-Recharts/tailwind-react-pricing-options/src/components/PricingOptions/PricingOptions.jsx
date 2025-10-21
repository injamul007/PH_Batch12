import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

  const pricingData = use(pricingPromise)

  return (
    <div className='lg:container w-[90%] mx-auto'>
      <h2 className='text-5xl mb-10'>Get our Membership</h2>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
        {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;