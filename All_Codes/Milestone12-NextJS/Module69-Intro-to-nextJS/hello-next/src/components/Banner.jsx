"use client"
import { useRouter } from "next/navigation";
import React from "react";
// import { toast } from 'react-hot-toast';

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    // toast.success('Hello From Banner')
    // alert('Hello from Banner')
    const password = prompt('Enter your Password !')
    if(password === '1234') {
      // console.log(router.push)
      router.push('/dashboard')
    }
    
  }
  return (
    <>
    <div className="text-center space-y-6 bg-linear-60 from-sky-200 to-sky-300 text-black p-10 rounded-lg">
      <h2 className="text-5xl font-bold">Welcome to Dev Story</h2>
      <button onClick={handleBtn} className="px-4 py-2 bg-sky-500 text-white rounded-lg cursor-pointer hover:bg-slate-600 duration-300">
        Share Story
      </button>
    </div>
    </>
  );
};

export default Banner;
