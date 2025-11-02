import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

  const BooksData = useLoaderData()
  

  return (
    <div>
      <Banner></Banner>
      <Books BooksData={BooksData}></Books>
    </div>
  );
};

export default Home;