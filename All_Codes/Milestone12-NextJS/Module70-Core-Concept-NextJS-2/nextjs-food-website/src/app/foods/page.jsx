// "use client"
import FoodCard from '@/components/cards/FoodCard';
import React from 'react';

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
    <div>
      <h2 className='text-4xl font-bold text-center'>Total <span className='text-yellow-500'>{foods.length}</span> Foods found</h2>
      <div className='grid grid-cols-3 gap-4 my-5'>
        {
          foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default FoodPage;