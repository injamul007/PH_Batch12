import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 border-r-2 min-h-screen space-y-5 mt-5">
          <div className="flex flex-col gap-6">
            <Link className="px-4 py-2 bg-gray-500 w-full" href={"/dashboard"}>Dashboard</Link>
            <Link className="px-4 py-2 bg-gray-500 w-full" href={"/dashboard/add-story"}>Add Story</Link>
            <Link className="px-4 py-2 bg-gray-500 w-full" href={"/dashboard/my-profile"}>My Profile</Link>
            <Link className="px-4 py-2 bg-gray-500 w-full" href={"/dashboard/settings"}>Settings</Link>
          </div>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
