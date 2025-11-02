import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')

  const booksData = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();

    const convertedStoredData = storedBookData.map((id) => Number(id));

    const myReadList = booksData.filter((book) =>
      convertedStoredData.includes(book.bookId)
    );

    setReadList(myReadList);
  }, [booksData]);

  const handleSort = (type)=> {
    setSort(type)
    
    if(type === 'Pages') {
      const sortedByPages = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
      setReadList(sortedByPages)
    }
    if(type === 'Ratings') {
      const sortedByRatings = [...readList].sort((a,b)=> b.rating - a.rating)
      setReadList(sortedByRatings)
    }
  }

  return (
    <div>
      <div className="text-center">
        <div className="dropdown dropdown-bottom dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            Sort By : {sort? sort:""} ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={()=>handleSort('Pages')}>Pages</a>
            </li>
            <li>
              <a onClick={()=>handleSort('Ratings')}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read {readList.length}</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
