import React from "react";
import Logo from "../../assets/Logo.png";
import { SlOptionsVertical } from "react-icons/sl";
import Profile from "../../assets/Profile.png";
import MobileLogo from "../../assets/Mobile-Logo.png";

const Header = () => {
  return (
    <header className="col-span-2 flex items-center border-[#1D1D1D] md:border-b h-12.5">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-[18.75%] h-full items-center justify-around border-[#1D1D1D] border-r">
        <div className="w-12.5 flex items-center justify-center">
          <img src={Logo} width="30px" height="30px" alt="Logo" />
        </div>
        <div className="flex items-center w-47.5 justify-center">
          <span className="text-white font-medium">Vertxlabs, Inc</span>
        </div>
      </div>
      <div className="hidden md:flex flex-grow items-center justify-between">
        <div className="p-4">
          <p className="font-semibold text-white">Analytics</p>
        </div>
        <div className="flex w-60 items-center justify-center">
          <div className="flex items-center justify-center border-[#1D1D1D] border-l-1 w-1/2 p-4">
            <p className="font-medium text-white">Activity</p>
          </div>
          <div className="flex items-center justify-center border-[#1D1D1D] border-l-1 w-1/2 p-4">
            <p className="font-medium text-white">Logout</p>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden w-full justify-between p-2">
        <div className=" flex items-center justify-center">
          <img alt="profile pic" src={Profile} width={30} height={30} />
        </div>
        <div className="flex items-center justify-center">
          <img alt="app-logo" src={MobileLogo} width={30} height={30} />
        </div>
        <div className="flex items-center justify-center">
          <SlOptionsVertical size={20} color="white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
