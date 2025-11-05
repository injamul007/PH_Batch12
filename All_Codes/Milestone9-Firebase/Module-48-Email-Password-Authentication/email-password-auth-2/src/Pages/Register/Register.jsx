import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)


  const handleRegisterForm = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value
    const photoURL = e.target.photoURL.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log('register clicking', userName,photoURL,email,password)

    //? Reset All initial state
    setError('')
    setSuccess(false)

    //? passwordPattern Checking
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}:;<>,.?~|/-]).{6,}$/;

    if(!passwordPattern.test(password)) {
      setError('Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one special character.')
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
      setSuccess(true)
      e.target.reset();

      //? Email verification
      sendEmailVerification(result.user)
      .then(()=> {
        alert('Verification Email sent to your Email Address')
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message)
      })

      updateProfile(result.user, {
        displayName: userName, photoURL: photoURL
      })
      .then(()=> {
        console.log('profile updated')
      })
      .catch(error => {
        setError(error.message)
      })
    })
    .catch(error => {
      console.log(error.message)
      setError(error.message)
    })
  }


  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }



  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegisterForm}>
              <fieldset className="fieldset">
              <label className="label">User Name</label>
              <input type="text" name="userName" className="input" placeholder="User Name" />
              <label className="label">PhotoURL</label>
              <input type="photo" name="photoURL" className="input" placeholder="PhotoURL" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <div className="relative">
                <input type={showPassword? 'text' : 'password'} name="password" className="input" placeholder="Password" />
                <button onClick={handleShowPassword} className="btn btn-xs absolute top-2 right-2">{
                  showPassword? <FaEyeSlash /> : <FaEye />
                  }</button>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            {
              error && <p className="text-red-500">{error}</p>
            }
            {
              success && <p className="text-green-400">Congratulation! Register Successfully</p>
            }
            </form>
            <p>Already have an account? Please <Link className="text-blue-400" to={'/login'}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
