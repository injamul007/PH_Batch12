import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png"

const Navbar = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex items-center justify-between'>
      <div className='mr-[180px]'></div>
      <div className='nav flex gap-5 text-accent'>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className='login_btn flex gap-4'>
        <img src={userImg} alt="" />
        <button className='btn btn-primary px-7'>Login</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;