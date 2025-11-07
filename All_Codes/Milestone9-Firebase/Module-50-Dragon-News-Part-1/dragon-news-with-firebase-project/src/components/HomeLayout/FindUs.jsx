import React from "react";
import fbImg from "../../assets/fb.png"
import twitterImg from "../../assets/twitter.png"
import igImg from "../../assets/instagram.png"


const FindUs = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-accent">Find Us On</h2>
      <div>
        <div className="join w-full mt-4 join-vertical">
          <button className="btn bg-white justify-start text-accent join-item"><img src={fbImg} alt="" /> Facebook</button>
          <button className="btn bg-white justify-start text-accent join-item"><img src={twitterImg} alt="" /> Twitter</button>
          <button className="btn bg-white justify-start text-accent join-item"><img src={igImg} alt="" /> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
