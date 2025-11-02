import React, { useContext } from "react";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { Link } from "react-router";
import navLogo from "../assets/firebase-logo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";

const Navbar = () => {
  const { user, setUser, signoutUserFunc, loading } = useContext(AuthContext);
  console.log(user, loading);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout Successful");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-slate-100f bg-black py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={navLogo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-2 text-white">
          <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
          <li>
            <MyLink to={"/about-us"}>About US</MyLink>
          </li>
          {
            user && <li>
            <MyLink to={"/profile"}>Profile</MyLink>
          </li>
          }
        </ul>

        {loading ? (
          <ClockLoader color="#e74c3c" size={36} />
        ) : user ? (
          <div className="text-center space-y-5">
            <div className="dropdown dropdown-left">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-outline bg-[#000]"
              >
                <img
                  src={user?.photoURL || <p>This is My Photo</p>}
                  className="h-8 w-8 rounded-full mx-auto"
                  alt=""
                />
              </div>
              <div
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit p-2 shadow-sm"
              >
                <h2>{user?.displayName || <p>Hello User</p>}</h2>
                <p className="py-2">{user.email}</p>
                <button onClick={handleSignout} className="my-btn">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
