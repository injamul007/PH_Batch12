import React from 'react';

const InputSearch = () => {
  return (
    <div>
      <form>
        <input className='border border-gray-500 rounded-lg px-4 py-1' type="search" placeholder='Enter Food Name' />
        <button className='border rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-600'>Search</button>
      </form>
    </div>
  );
};

export default InputSearch;