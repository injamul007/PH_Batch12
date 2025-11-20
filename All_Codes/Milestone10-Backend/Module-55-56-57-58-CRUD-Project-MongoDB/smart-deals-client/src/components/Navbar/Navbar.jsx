import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { ClockLoader } from 'react-spinners';

const Navbar = () => {
  const { user, loading, signOutUserFunc } = use(AuthContext);

  const handleSignOut = () => {
    signOutUserFunc()
      .then(() => {
        alert("signout Successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <NavLink to={"/home"} className={"mr-3"}>
        {" "}
        <li>Home</li>
      </NavLink>
      <NavLink to={"/all-products"} className={"mr-3"}>
        {" "}
        <li>All Products</li>
      </NavLink>
      {user && (
        <div className="flex lg:flex-row flex-col mr-3">
          <NavLink to={"/my-products"} className={"mr-3"}>
            {" "}
            <li>My Products</li>
          </NavLink>
          <NavLink to={"/my-bids"} className={'mr-3'}>
            {" "}
            <li>My Bids</li>
          </NavLink>
          <NavLink to={"/create-product"}>
            {" "}
            <li>Create A Product</li>
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex w-11/12 mx-auto">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            SmartDeals
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {loading? <ClockLoader color="#06b6d4" size={36} /> : user ? (
            <div className="flex items-center gap-4">
              <img className="w-9 h-9 rounded-full" src={user?.photoURL} alt="" />
              <button className="btn btn-primary" onClick={handleSignOut}>
              LogOut
            </button>
            </div>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
