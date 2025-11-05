import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("login clicking", email, password);

    //? Reset initial state
    setError("");
    setSuccess(false)

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(!result.user.emailVerified) {
          alert('Please verify your Email')
          return
        }
        setSuccess(true)
        e.target.reset()
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handlePasswordReset = () => {
    console.log('reset password')
    const email = emailRef.current.value
    sendPasswordResetEmail(auth, email)
    .then(()=> {
      alert('password reset email sent')
    })
    .catch(error => {
      setError(error.message)
    })

  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleShowPassword}
                    className="btn btn-xs absolute top-2 right-2"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <a onClick={handlePasswordReset} className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-400">Congratulations! Login Successfully</p>}
            </form>
            <p>
              Don't have a account ? Please{" "}
              <Link className="text-blue-400" to={"/register"}>
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
