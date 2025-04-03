import React from "react";
import { FiMenu, FiBell, FiLogOut } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full h-12.5  bg-[#000000] flex items-center border-b border-[#1D1D1D]">
      <div className="flex items-center justify-between w-full ">
        {/* Logo and menu button section */}
        <div className="flex items-center border-[#1D1D1D] border-r-1 h-12.5 w-60 p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mr-3">
              <div
                className="h-5 w-5 bg-vertx-dark transform rotate-180"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
            </div>
            <span className="font-semibold text-lg hidden md:block">
              Vertxlabs, Inc
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-4">
          {/* Center section with tabs (visible on desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="border-b-2 border-white px-2 py-4">
              <span className="font-medium">Analytics</span>
            </div>
          </div>

          {/* Right section with activity and logout */}
          <div className="flex items-center space-x-4">
            <button className="text-vertx-text-secondary hover:text-white focus:outline-none border-[#1D1D1D] border-l-1 p-4">
              <span className="hidden md:inline-block mr-1">Activity</span>
              {/* <FiBell className="md:hidden" size={20} /> */}
            </button>
            <button className=" text-vertx-text-secondary hover:text-white focus:outline-none border-[#1D1D1D] border-l-1 p-4">
              <span className="hidden md:inline-block mr-1">Log out</span>
              {/* <FiLogOut className="md:hidden" size={20} /> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
