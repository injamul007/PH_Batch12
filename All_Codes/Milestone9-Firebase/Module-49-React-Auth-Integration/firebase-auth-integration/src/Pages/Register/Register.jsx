import React, { use } from "react";
import { Link } from 'react-router';
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Register = () => {

  const {createUser} = use(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)

    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }



  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <p>Already have an account? Please <Link className="text-blue-400" to={'/login'}>Login</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
