import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
      <nav>
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/laptops">Laptops</a>
        <a href=""></a> */}
        <NavLink className='link' to={'/'}>Home</NavLink>
        <NavLink className='link' to={'/mobiles'}>Mobiles</NavLink>
        <NavLink className='link' to={'/laptops'}>Laptops</NavLink>
        <NavLink className='link' to={'/users'}>Users</NavLink>
        <NavLink className='link' to={'/user2'}>Users2</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;