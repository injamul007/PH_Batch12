import React, { use, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [showPassword, setShowPassword] = useState("");
  const {
    // user,
    setUser,
    // loading,
    setLoading,
    // createUserFunc,
    googleSignInFunc,
  } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };

  const handleGoogleSignin = (e) => {
    e.preventDefault();

    googleSignInFunc()
    .then(result => {
      const userDetails = result.user
      console.log(userDetails)
      setLoading(false)
      setUser(userDetails)
      
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL
      }

      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data => {
        console.log('data after user saved', data)
      })
    })
    .catch(error => {
      console.log(error.message)
    })
  }


  return (
    <div className="flex items-center justify-center">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full gap-10 p-6 lg:p-10 text-white">
        <div className="w-full max-w-md backdrop-blur-lg bg-linear-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-2xl rounded-2xl p-8">
          <form onSubmit={handleRegister} className="space-y-3">
            <h2 className="text-3xl mb-2 text-center bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-bold">
              Register Here!
            </h2>
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">PhotoURL</label>
              <input
                type="photo"
                name="photo"
                placeholder="Your PhotoURL"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-9 cursor-pointer z-50"
              >
                {showPassword ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>
            <button type="submit" className="btn w-full bg-secondary">
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or continue</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>

            {/* Google Signin */}
            <button
              onClick={handleGoogleSignin}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>
            <p className="text-center text-sm text-white/80 mt-3">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-pink-300 hover:text-white underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
