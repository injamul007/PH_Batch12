import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-base-300 p-3">
      <p className="bg-secondary text-base-100 px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={100}>
        <p className="font-bold text-accent mr-10">
          Messi will play fifa-2026
        </p>
        <p className="font-bold text-accent mr-10">
          Lamine yamal will be the most valuable player to watch in this fifa-2026
        </p>
        <p className="font-bold text-accent">
          Bangladesh fifa ranking is 180+
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
