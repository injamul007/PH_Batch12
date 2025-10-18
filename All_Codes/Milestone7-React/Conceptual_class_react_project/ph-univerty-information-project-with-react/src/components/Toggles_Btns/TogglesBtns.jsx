import React from "react";

const TogglesBtns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All","Pending","Submitted","Reviewed"];

  return (
    <div className="text-right container mx-auto mb-5">
      {
        btns.map((btn,index) => <button key={index}
        onClick={() => setToggleStatus(btn)}
        className={`${index == 0 && "rounded-l-md"}
        ${index == btns.length-1 && "rounded-r-md"} toggle_btn ${
          toggleStatus === btn && "!bg-purple-500 !text-white"
        }`}>{btn}</button>)
      }
    </div>
  );
};

export default TogglesBtns;
