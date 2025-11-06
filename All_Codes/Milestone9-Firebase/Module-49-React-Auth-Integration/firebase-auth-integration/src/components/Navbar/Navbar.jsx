import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./navbar.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOutUser()
      .then(() => console.log("signOut Successfully"))
      .catch((error) => console.log(error.message));
  };

  const Links = (
    <>
      <NavLink className={"mr-4"} to={"/home"}>
        <li>Home</li>
      </NavLink>
      <NavLink className={"mr-4"} to={"/register"}>
        <li>Register</li>
      </NavLink>
      <NavLink className={"mr-4"} to={"/login"}>
        <li>Login</li>
      </NavLink>
      <NavLink className={"mr-4"} to={"/dashboard"}>
        <li>Dashboard</li>
      </NavLink>

      {user && (
        <>
          <NavLink className={"mr-4"} to={"/orders"}>
            <li>Orders</li>
          </NavLink>
          <NavLink to={"/profile"}>
            <li>Profile</li>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={handleSignOut} className="btn">
            Sign Out
          </a>
        ) : (
          <Link to={"/login"} className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
