import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';

const HomeLayout = () => {
  return (
    <div>
      <header className='mt-6'>
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='w-11/12 mx-auto my-4 grid grid-cols-12 gap-4'>
        <aside className='left-nav col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='right-nav col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;