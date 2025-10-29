import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)

  return (
    <div>
      {/* <h1>Hello From Root</h1> */}
      <Header></Header>
      <div className='grid-div'>
        <SideBar></SideBar>
        {isNavigating && <h1>Loading post....</h1>}
          <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;