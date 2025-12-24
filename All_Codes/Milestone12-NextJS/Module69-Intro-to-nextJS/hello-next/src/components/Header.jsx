import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-12 py-4 text-center border-b-2 border-gray-500 flex justify-between items-center flex-wrap">
      <Link className="text-2xl font-semibold" href={'/'}>🐦‍🔥 Dev-Story</Link>
      <div className="space-x-4">
        <Link href={'/tutorials'}>Tutorial</Link>
        <Link href={'/stories'}>Stories</Link>
        <Link href={'/about-us'}>AboutUs</Link>
      </div>
      <nav className="space-x-4">
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
      </nav>
    </header>
  );
};

export default Header;
