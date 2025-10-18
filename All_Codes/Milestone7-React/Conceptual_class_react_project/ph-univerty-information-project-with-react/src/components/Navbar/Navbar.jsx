import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex justify-between items-center w-full lg:max-w-[96%] max-w-[90%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <a href="#">Home</a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">FAQ</a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">Changelog</a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">Blog</a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">Download</a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#">Contact</a>{" "}
              </li>
            </ul>
          </div>
          <a className="lg:text-2xl text-[16px] font-bold">
            PH — Assignment System
          </a>
        </div>
        <div className="navbar-end flex gap-8">
          <ul className="hidden lg:flex items-center gap-8">
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">Home</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">FAQ</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">Changelog</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">Blog</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">Download</a>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-300 transition">
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="btn btn-ghost bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white lg:text-[18px] text-[16px] lg:px-6 lg:py-4 px-2 py-2 rounded-lg">
            <span className="lg:mr-2 lg:mt-[-4px] mt-[-3px] text-xl">+</span>New
            Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
