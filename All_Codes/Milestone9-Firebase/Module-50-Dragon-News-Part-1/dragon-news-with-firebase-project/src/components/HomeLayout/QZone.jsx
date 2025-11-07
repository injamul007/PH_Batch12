import React from 'react';
import clsImg from "../../assets/class.png"
import swimmingImg from "../../assets/swimming.png"
import playgroundImg from "../../assets/playground.png"

const QZone = () => {
  return (
    <div className='mt-8 bg-base-200 rounded-md py-2'>
      <h2 className='font-bold pl-2 mb-5 text-accent'>Qzone</h2>
      <div className='px-4 space-y-4'>
        <img src={swimmingImg} alt="" />
        <img src={clsImg} alt="" />
        <img src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;