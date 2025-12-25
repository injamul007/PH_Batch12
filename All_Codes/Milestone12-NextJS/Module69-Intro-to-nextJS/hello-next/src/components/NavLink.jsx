import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
  const pathname = usePathname();
  return <Link className={`${pathname.startsWith(href) && 'bg-sky-500 px-4 py-2'}`} href={href}>{children}</Link>
};

export default NavLink;