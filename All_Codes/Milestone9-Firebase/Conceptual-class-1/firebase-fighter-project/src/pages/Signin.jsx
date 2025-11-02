import React, { useContext, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signin = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const location = useLocation()
  const navigate = useNavigate()

  const {
    signinUsersFunc,
    sendPassResetFunc,
    signinWithGoogleFunc,
    signinWithGithubFunc,
    setUser,
    setLoading,
    user
  } = useContext(AuthContext);

  if(user) {
    return  <Navigate to={'/'}></Navigate>
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUsersFunc(email, password)
      .then((result) => {
        setLoading(false)
        if (!result.user?.emailVerified) {
          toast.warn("Verify your Email Now");
          return;
        }
        console.log(result.user);
        setUser(result.user);
        toast.success("Login Successful", {
          position: "top-left",
        });
        navigate(location.state || '/')
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential. Please try again.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Try logging in instead."
          );
        } else if (error.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/missing-email") {
          toast.error("Email is required. Please enter your email.");
        } else if (error.code === "auth/missing-password") {
          toast.error("Password is required. Please enter your password.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many login attempts. Please try again later.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled. Contact support.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password accounts are not enabled.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Popup closed before completing sign-in.");
        } else if (error.code === "auth/cancelled-popup-request") {
          toast.error("Sign-in popup was closed or canceled.");
        } else if (
          error.code === "auth/account-exists-with-different-credential"
        ) {
          toast.error(
            "An account already exists with the same email but different sign-in method."
          );
        } else if (error.code === "auth/invalid-verification-code") {
          toast.error("Invalid verification code. Please try again.");
        } else if (error.code === "auth/invalid-verification-id") {
          toast.error("Invalid verification ID. Please try again.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.code === "auth/requires-recent-login") {
          toast.error("Please log in again to complete this action.");
        } else if (error.code === "auth/credential-already-in-use") {
          toast.error("This credential is already linked to another user.");
        } else if (error.code === "auth/invalid-action-code") {
          toast.error("The action code is invalid or expired.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;
    sendPassResetFunc(email)
      .then(() => {
        setLoading(false)
        toast.info("Email sent for reset your password");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signinWithGoogleFunc()
      .then((result) => {
        console.log(result.user);
        setLoading(false)
        toast.success("Google Signin Successful");
        setUser(result.user);
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential. Please try again.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Try logging in instead."
          );
        } else if (error.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/missing-email") {
          toast.error("Email is required. Please enter your email.");
        } else if (error.code === "auth/missing-password") {
          toast.error("Password is required. Please enter your password.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many login attempts. Please try again later.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled. Contact support.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password accounts are not enabled.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Popup closed before completing sign-in.");
        } else if (error.code === "auth/cancelled-popup-request") {
          toast.error("Sign-in popup was closed or canceled.");
        } else if (
          error.code === "auth/account-exists-with-different-credential"
        ) {
          toast.error(
            "An account already exists with the same email but different sign-in method."
          );
        } else if (error.code === "auth/invalid-verification-code") {
          toast.error("Invalid verification code. Please try again.");
        } else if (error.code === "auth/invalid-verification-id") {
          toast.error("Invalid verification ID. Please try again.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.code === "auth/requires-recent-login") {
          toast.error("Please log in again to complete this action.");
        } else if (error.code === "auth/credential-already-in-use") {
          toast.error("This credential is already linked to another user.");
        } else if (error.code === "auth/invalid-action-code") {
          toast.error("The action code is invalid or expired.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      });
  };

  const handleGithubSignin = () => {
    signinWithGithubFunc()
      .then((result) => {
        console.log(result.user);
        setLoading(false)
        toast.success("Github Signin Successful");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/invalid-credential") {
          toast.error("Invalid credential. Please try again.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Try logging in instead."
          );
        } else if (error.code === "auth/weak-password") {
          toast.error("Password must be at least 6 characters long.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email.");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (error.code === "auth/missing-email") {
          toast.error("Email is required. Please enter your email.");
        } else if (error.code === "auth/missing-password") {
          toast.error("Password is required. Please enter your password.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many login attempts. Please try again later.");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled. Contact support.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Email/password accounts are not enabled.");
        } else if (error.code === "auth/popup-closed-by-user") {
          toast.error("Popup closed before completing sign-in.");
        } else if (error.code === "auth/cancelled-popup-request") {
          toast.error("Sign-in popup was closed or canceled.");
        } else if (
          error.code === "auth/account-exists-with-different-credential"
        ) {
          toast.error(
            "An account already exists with the same email but different sign-in method."
          );
        } else if (error.code === "auth/invalid-verification-code") {
          toast.error("Invalid verification code. Please try again.");
        } else if (error.code === "auth/invalid-verification-id") {
          toast.error("Invalid verification ID. Please try again.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your internet connection.");
        } else if (error.code === "auth/requires-recent-login") {
          toast.error("Please log in again to complete this action.");
        } else if (error.code === "auth/credential-already-in-use") {
          toast.error("This credential is already linked to another user.");
        } else if (error.code === "auth/invalid-action-code") {
          toast.error("The action code is invalid or expired.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Animated glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          {/* Left section */}
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Welcome Back
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Sign in to continue your journey. Manage your account, explore new
              features, and more.
            </p>
          </div>

          {/* Login card */}
          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
              <form onSubmit={handleSignin} className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                  Sign In
                </h2>

                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button
                  onClick={handleResetPassword}
                  className="hover:underline cursor-pointer"
                  type="button"
                >
                  Forget password?
                </button>

                <button type="submit" className="my-btn">
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                {/* Github Signin */}
                <button
                  type="button"
                  onClick={handleGithubSignin}
                  className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Github
                </button>

                <p className="text-center text-sm text-white/80 mt-3">
                  Don’t have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-pink-300 hover:text-white underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signin;
