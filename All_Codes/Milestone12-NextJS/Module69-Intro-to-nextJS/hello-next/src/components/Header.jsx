"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  const pathname = usePathname();
  if(pathname.startsWith('/dashboard')) return '';
  return (
    <header className="px-12 py-4 text-center border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
      <Link className="text-2xl font-semibold" href={'/'}>🐦‍🔥 Dev-Story</Link>
      <div className="space-x-4">
        <NavLink href={'/tutorials'}>Tutorial</NavLink>
        <NavLink href={'/stories'}>Stories</NavLink>
        <NavLink href={'/about-us'}>AboutUs</NavLink>
      </div>
      <nav className="space-x-4">
        <NavLink href={'/login'}>Login</NavLink>
        <NavLink href={'/register'}>Register</NavLink>
      </nav>
    </header>
  );
};

export default Header;
