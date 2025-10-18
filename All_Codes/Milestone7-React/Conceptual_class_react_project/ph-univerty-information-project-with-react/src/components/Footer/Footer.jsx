import React from "react";

const Footer = () => {
  return (
    <div className="footer_section bg-black">
      <div className="flex flex-col pt-18 justify-center items-center">
        <div className="lg:w-[96%] w-[90%] mx-auto text-gray-400 grid lg:grid-cols-5 grid-cols-1 gap-12 border-b border-b-gray-800 pb-18">
          <div className="cs_system lg:w-[250px]">
            <h2 className="text-2xl font-bold mb-3 text-white">
              PH — Assignment System
            </h2>
            <p className="text-justify">
              Our support team is dedicated to resolving customer issues
              quickly, from login errors to billing problems. Every ticket is
              carefully tracked with priority and status, ensuring nothing gets
              missed.
            </p>
          </div>
          <div className="Company_links lg:ml-18">
            <h3 className="text-xl font-semibold mb-3 text-white">Company</h3>
            <li className="list-none hover:underline mb-3">
              <a href="#">About Us</a>
            </li>
            <li className="list-none hover:underline mb-3">
              <a href="#">Our Mission</a>
            </li>
            <li className="list-none hover:underline">
              <a href="#">Contact Saled</a>
            </li>
          </div>
          <div className="Services_links lg:ml-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Services</h3>
            <li className="list-none hover:underline mb-3">
              <a href="#">Products & Services</a>
            </li>
            <li className="list-none hover:underline mb-3">
              <a href="#">Customer Stories</a>
            </li>
            <li className="list-none hover:underline">
              <a href="#">Download Apps</a>
            </li>
          </div>
          <div className="Information_links lg:ml-6">
            <h3 className="text-xl font-semibold mb-3 text-white">
              Information
            </h3>
            <li className="list-none hover:underline mb-3">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="list-none hover:underline mb-3">
              <a href="#">Terms & Conditions</a>
            </li>
            <li className="list-none hover:underline">
              <a href="#">Join Us</a>
            </li>
          </div>
          <div className="All_Social_Link">
            <h3 className="text-xl font-semibold lg:ml-8 mb-3 text-white">
              Social_Links
            </h3>
            <div className="flex flex-col lg:ml-8">
              <div className="twitterX flex items-center mb-3">
                
                <li className="list-none hover:underline">
                  <a href="#">@CS — Ticket System</a>
                </li>
              </div>
              <div className="linkedIn flex items-center mb-3">
                
                <li className="list-none hover:underline">
                  <a href="#">@CS — Ticket System</a>
                </li>
              </div>
              <div className="facebook flex items-center ml-[-3px] mb-3">
                
                <li className="list-none hover:underline">
                  <a href="#">@CS — Ticket System</a>
                </li>
              </div>
              <div className="email flex items-center ml-[-3px]">
                
                <li className="list-none hover:underline">
                  <a href="#">support@cst.com</a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white flex justify-center items-center py-8">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
