// "use client"
import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItems from './CartItems';
import InputSearch from '@/components/InputSearch';

const getFoods = async() => {
  try {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
    const data = await res.json()
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return data.foods || []
  } catch (error) {
    console.log(error.message)
  }
}

const FoodPage = async() => {
  const foods = await getFoods();
  return (
    <div className="w-11/12 mx-auto my-12">
      <div className='flex items-center gap-72'>
        <h2 className='text-4xl font-bold'>Total <span className='text-yellow-500'>{foods.length}</span> Foods found</h2>
        <div>
          <InputSearch></InputSearch>
        </div>
      </div>

      <div className='flex gap-5'>
        <div className='flex-1 grid grid-cols-3 gap-4 my-5'>
        {
          foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
        }
      </div>
      <div className='w-62.5 border-2 rounded-xl p-4 mt-4.5'>
        <h2 className='text-2xl font-bold'>Cart Items</h2> <hr className='mb-3' />
        <CartItems></CartItems>
      </div>
      </div>
    </div>
  );
};

export default FoodPage;