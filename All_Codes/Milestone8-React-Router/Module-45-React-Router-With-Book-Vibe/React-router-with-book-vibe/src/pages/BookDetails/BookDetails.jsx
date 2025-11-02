import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utilities/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const allBooksData = useLoaderData();
  const singleBookData = allBooksData.find(
    (book) => book.bookId === Number(id)
  );

  const { bookName, image } = singleBookData;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addToStoredDB(id);
  };

  return (
    <div className="w-3/4 mx-auto border border-gray-200 rounded-xl my-14 py-6">
      <div className="w-[40%] mx-auto flex flex-col items-center">
        <img className="w-48" src={image} alt="books_image" />
        <h2 className="my-6 font-bold">{bookName}</h2>

        <div>
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-accent mr-4"
          >
            Mark as Read
          </button>
          <button className="btn btn-info">Add to WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
