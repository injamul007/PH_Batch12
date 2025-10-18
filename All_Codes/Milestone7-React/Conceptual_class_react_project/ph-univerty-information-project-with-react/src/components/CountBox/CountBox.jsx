import React from 'react';

const CountBox = ({data}) => {
  // console.log(data)

  const pendingData = data.filter(element => element.status == "Pending")
  const submittedData = data.filter(element => element.status == "Submitted")
  const reviewedData = data.filter(element => element.status == "Reviewed")

  
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-12 container mx-auto">
        <div className="rounded-md flex flex-col items-center justify-center p-6 text-white h-[220px] bg-gray-600">
          <h2 className="font-bold text-4xl">Pending</h2>
          <p className="font-bold text-[50px]">{pendingData.length}</p>
        </div>
        <div className="rounded-md flex flex-col items-center justify-center p-6 text-white h-[220px] bg-purple-500">
          <h2 className="font-bold text-4xl">Submitted</h2>
          <p className="font-bold text-[50px]">{submittedData.length}</p>
        </div>
        <div className="rounded-md flex flex-col items-center justify-center p-6 text-white h-[220px] bg-teal-500">
          <h2 className="font-bold text-4xl">Reviewed</h2>
          <p className="font-bold text-[50px]">{reviewedData.length}</p>
        </div>
      </div>
  );
};

export default CountBox;