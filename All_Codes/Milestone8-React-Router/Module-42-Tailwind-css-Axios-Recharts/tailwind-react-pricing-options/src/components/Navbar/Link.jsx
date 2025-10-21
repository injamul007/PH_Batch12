import React from 'react';

const Link = ({route}) => {
  return (
    <li className='hover:bg-orange-400 cursor-pointer px-2'>{route.name}</li>
  );
};

export default Link;