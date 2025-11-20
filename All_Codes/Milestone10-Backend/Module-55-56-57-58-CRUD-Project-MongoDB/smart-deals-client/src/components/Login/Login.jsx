import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState('')


  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10 w-full p-4 lg:p-6 text-white">
          <div className="w-full max-w-md backdrop-blur-lg bg-linear-to-r from-[#000000] to-[#434343] shadow-2xl rounded-2xl p-8">
            <form 
            // onSubmit={handleLogin}
             className="space-y-5">
              <h2 className="text-3xl mb-2 text-center bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-bold">
                Login Now!
              </h2>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
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

              {/* forget password */}
              <p>
                <small
                  // onClick={handleForgetPassword}
                  className="inline hover:underline cursor-pointer"
                  type="button"
                >
                  Forget password?
                </small>
              </p>

              <button type="submit" className="btn w-full bg-secondary">
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-1">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or continue</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                // onClick={handleGoogleSignin}
                type="button"
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-600 hover:text-white transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Sign in with Google
              </button>
              <p className="text-center text-sm text-white/80 mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-pink-300 hover:text-white underline"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
    </div>
  );
};

export default Login;
