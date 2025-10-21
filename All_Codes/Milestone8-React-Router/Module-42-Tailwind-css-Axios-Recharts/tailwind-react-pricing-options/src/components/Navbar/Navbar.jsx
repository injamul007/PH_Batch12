import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

  return (
    <nav className='flex items-center justify-between mx-10'>
      <span onClick={()=>setOpen(!open)} className='flex items-center'>
        {
        open ? <X className='lg:hidden'></X> : 
        <Menu className='lg:hidden'>
          
        </Menu>
        }

        <ul className={`lg:hidden absolute duration-500 bg-amber-300 text-black ${open? "top-10" : "-top-64"}`}>
          {
            open ? links : ""
          }
        </ul>
        
        <h3 className='ml-5'>My Navbar</h3>
      </span>
      <ul className='lg:flex gap-8 hidden'>
        {
          links
        }
      </ul>
      <button className='btn btn-primary btn-ghost'>Sign In</button>
    </nav>
  );
};

export default Navbar;