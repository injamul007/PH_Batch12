import React from "react";
import bannerImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-56 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse lg:mx-20">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg my-6 shadow-2xl"
        />
        <div className="lg:text-left text-center">
          <h1 className="text-5xl font-bold mb-7">Books to freshen up your bookshelf</h1>
          <button className="btn bg-green-500 text-white">View the List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
