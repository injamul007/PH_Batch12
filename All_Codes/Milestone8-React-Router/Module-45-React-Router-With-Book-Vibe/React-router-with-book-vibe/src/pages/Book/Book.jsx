// import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const BooksData = use(BookPromise)
  // console.log(book)
  const { bookId,bookName, author, image, category, rating, tags, publisher } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-md p-4 border border-gray-200">
        <figure className="bg-gray-200 w-full p-3">
          <img
            src={image}
            className="object-cover w-[124px] h-[166px] py-4 px-6"
            alt={`${bookName} Book_image`}
          />
        </figure>
        <div className="flex justify-between mx-10 mt-4">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="text-green-500 px-2 rounded-lg border border-gray-300"
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title line-clamp-1">
            {bookName}
          </h2>
          <p className="font-semibold">{author}</p>
          <p className="text-gray-500">{publisher}</p>
          <div className="border-t border-dashed border-gray-400"></div>
          <div className="card-actions justify-between">
            <div>
              <p className="text-lg">{category}</p>
            </div>
            <div>
              <span className="badge badge-outline mr-3">{rating}</span>
              <span className="badge badge-outline">
                <FaStarHalfAlt />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
