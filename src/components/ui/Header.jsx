import React from "react";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <header className="col-span-2 flex items-center border-[#1D1D1D] border-b">
      <div className="w-[18.75%] h-full flex items-center justify-around border-[#1D1D1D] border-r ">
        <div className="w-12.5 flex items-center justify-center border-[#1D1D1D] border-r">
          <img src={Logo} width="30px" height="30px" alt="Logo" />
        </div>
        <div className="flex items-center w-47.5 justify-center">
          <span className="text-white font-medium">Vertxlabs, Inc</span>
        </div>
      </div>

      <div className="flex flex-grow items-center justify-between ">
        <div className="p-4">
          <p className="font-medium text-white">Analytics</p>
        </div>

        <div className="flex items-center">
          <div className="border-[#1D1D1D] border-l-1 p-4">
            <span className="font-medium text-white">Activity</span>
          </div>

          <div className="border-[#1D1D1D] border-l-1  p-4">
            <span className="font-medium text-white">Logout</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
