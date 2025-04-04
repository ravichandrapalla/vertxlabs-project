import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { IN, US, CA, AE } from "country-flag-icons/react/3x2";
import World from "../../assets/World.png";
import Legend from "../ui/Legend";

const demographics = [
  { country: "India", percentage: 40, color: "bg-purple-600", flag: "🇮🇳" },
  { country: "USA", percentage: 25, color: "bg-orange-500", flag: "🇺🇸" },
  { country: "CANADA", percentage: 10, color: "bg-red-500", flag: "🇨🇦" },
  { country: "UAE", percentage: 7, color: "bg-green-500", flag: "🇦🇪" },
];
const getFlag = (param) => {
  switch (param) {
    case "🇮🇳":
      return <IN title="India" className="w-8 h-8 rounded" />;
    case "🇺🇸":
      return <US title="United States" className="w-8 h-8 rounded" />;
    case "🇨🇦":
      return <CA title="United States" className="w-8 h-8 rounded" />;
    case "🇦🇪":
      return <AE title="United States" className="w-8 h-8 rounded" />;
    default:
      return null;
  }
};

const DemoGraphics = () => {
  return (
    <div className="col-span-2 flex items-center justify-between gap-x-5 bg-black rounded-xl ">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Demographics</h3>
      </div> */}

      {/* World Map Placeholder */}
      <div className="px-4 w-[65%] h-40 flex flex-col bg-[#000000] rounded-lg items-start justify-center">
        {/* <p className="text-gray-400 text-sm">[ World Map Placeholder ]</p> */}
        <h3 className="text-xl font-semibold">Demographics</h3>
        <img
          src={World}
          alt="World Map"
          className="w-full h-full px-6 rounded-lg"
        />
        <Legend />
      </div>

      {/* Country Data */}
      <div className="flex flex-col flex-grow p-4 ">
        <div className="flex flex-col border-[#1D1D1D] border-b-1 pb-2">
          {demographics.map(({ country, percentage, color, flag }) => (
            <div
              key={country}
              className="flex items-center justify-between w-full mb-3 gap-2"
            >
              <div className="">{getFlag(flag)}</div>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2">
                    <span>{country}</span>
                  </span>
                  <span className="text-sm">{percentage}%</span>
                </div>
                <div className=" bg-gray-700 h-2 rounded-md mt-1">
                  <div
                    className={`${color} h-2 rounded-md`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-2 flex items-center justify-end space-x-2 text-blue-400">
          <div className="w-[70%] flex items-center space-x-6 ">
            <span>View all countries</span>
            <FaArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default DemoGraphics;
