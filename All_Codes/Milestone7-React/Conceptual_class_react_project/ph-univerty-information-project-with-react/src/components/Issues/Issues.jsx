import React from 'react';

const Issues = ({issue, data, setData}) => {
  // console.log(issue)
  const handleClick = () => {
    console.log('bula')
    setData([])
    data
  }

  return (
      <div className='shadow-md rounded-md cursor-pointer bg-slate-100 p-4' onClick={handleClick}>
      <div>
        <img src={issue.userImg} className='w-[80px] h-[80px] rounded-full' />
      </div>

      <div className='flex items-center'>
      <h2 className='font-bold text-[26px]'>{issue.subject}</h2>
      <div>
        <span className={`font-semibold py-1 px-2 shadow-sm rounded-md ${issue.priority == "High" ? 'text-red-500 bg-red-100': issue.priority == "Medium" ? 'text-yellow-500 bg-yellow-100': 'text-green-500 bg-green-100'}`}>{issue.priority}</span>
        <span className={`font-semibold py-1 px-2 shadow-sm rounded-md ${issue.status == "Pending" ? 'text-red-500 bg-red-100': issue.status == "Submitted" ? 'text-yellow-500 bg-yellow-100': 'text-green-500 bg-green-100'}`}>{issue.status}</span>
      </div>
      </div>
      <p className='text-[17px] text-slate-700'>{issue.description}</p>
      
    </div>
  );
};

export default Issues;