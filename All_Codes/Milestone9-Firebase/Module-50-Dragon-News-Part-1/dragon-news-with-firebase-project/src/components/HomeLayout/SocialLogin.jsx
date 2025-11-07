import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold text-accent mb-4'>Login With</h2>
      <div className='space-y-3 w-full'>
        <button className='btn btn-secondary btn-outline border-gray-400 w-full'><FcGoogle size={24} /> Login with Google</button>
        <button className='btn btn-primary btn-outline border-gray-400 w-full'><FaGithub size={24} /> Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;