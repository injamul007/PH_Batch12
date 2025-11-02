import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const {
    createUsersFunc,
    updateProfileFunc,
    sendEmailVerificationFunc,
    signoutUserFunc,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("signup", { email, displayName, photoURL, password });

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?~|/-]).{6,}$/;

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    createUsersFunc(email, password)
      .then((result) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            sendEmailVerificationFunc()
              .then(() => {
                setLoading(false);
                //? signout from signup -----
                signoutUserFunc().then(() => {
                  toast.info("Email Verification Sent to your Email");
                  setUser(null);
                  navigate('/signin');
                });
              })
              .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
              });
            toast.success("Signup Successful");
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
          });
        console.log(result.user);
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
    <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated floating circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <MyContainer>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
          <div className="max-w-lg text-center lg:text-left">
            <h1 className="text-5xl font-extrabold drop-shadow-lg">
              Create Your Account
            </h1>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Join our community and unlock exclusive features. Your journey
              begins here!
            </p>
          </div>

          <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center text-white">
              Sign Up
            </h2>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button type="submit" className="my-btn">
                Sign Up
              </button>

              <div className="text-center mt-3">
                <p className="text-sm text-white/80">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="text-pink-300 hover:text-white font-medium underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
