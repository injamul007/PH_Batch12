import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router';

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value
    const photoURL = e.target.photo.value
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log("register click", userName , photoURL, email, password, terms);

    //? password pattern
    // const lengthPattern = /^.{6,}$/;
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    // const specialCharacterPattern = /^(?=.*[!@#$%^&*(),.?:{}|<>]).+$/;

    // if(!lengthPattern.test(password)) {
    //   setError('password must be 6 character or more')
    //   return
    // } else if (!casePattern.test(password)) {
    //   setError('password must have lowercase and uppercase letters')
    //   return
    // } else if (!specialCharacterPattern.test(password)) {
    //   setError('Password must contain at least one special character')
    //   return
    // }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?~|/-]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 character long and includes at least one uppercase, one lowercase, and one special character."
      );
      return;
    }

    //? Reset Error
    setError("");
    setSuccess(false);
    if (!terms) {
      setError("Please accept our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creation of a new user", result.user);
        setSuccess(true);
        e.target.reset();
        //? update the displayName
        updateProfile(result.user, {
          displayName: userName, photoURL: photoURL
        }).then().catch(error => {
          setError(error.message)
        })
        //? send email verification
        sendEmailVerification(result.user)
        .then(()=> {
          alert('please login to email and verify your email address')
        })
      })
      .catch((error) => {
        console.log("Error Happened", error.message);
        setError(error.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Username</label>
                <input
                  type="text"
                  name="userName"
                  className="input"
                  placeholder="User Name"
                />
                <label className="label">PhotoURL</label>
                <input
                  type="photo"
                  name="photo"
                  className="input"
                  placeholder="photoURL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
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
                    onClick={handleTogglePasswordShow}
                    className="btn btn-xs absolute lg:right-2 md:right-2 right-2 top-2"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div>
                  <label className="label">
                    <input type="checkbox" name="terms" className="checkbox" />
                    Accept Our Terms and Conditions
                  </label>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {success && (
                <p className="text-green-500">Account Created Successfully</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <p><span className="mr-2">Already have an account? Please</span><Link className="text-blue-400 underline" to={'/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
