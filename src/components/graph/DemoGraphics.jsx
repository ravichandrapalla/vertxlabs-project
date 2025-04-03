import React from "react";
import { FaArrowRight } from "react-icons/fa";
const demographics = [
  { country: "India", percentage: 40, color: "bg-purple-600", flag: "🇮🇳" },
  { country: "USA", percentage: 25, color: "bg-orange-500", flag: "🇺🇸" },
  { country: "CANADA", percentage: 10, color: "bg-red-500", flag: "🇨🇦" },
  { country: "UAE", percentage: 7, color: "bg-green-500", flag: "🇦🇪" },
];
const DemoGraphics = () => {
  return (
    <div className=" mt-4 bg-[#000000]">
      {/* Map Placeholder */}
      <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow flex items-center justify-center">
        <p className="text-gray-400">[ World Map Placeholder ]</p>
      </div>

      {/* Country Data */}
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        {demographics.map(({ country, percentage, color, flag }) => (
          <div key={country} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <span>{flag}</span>
                <span>{country}</span>
              </span>
              <span>{percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-md mt-1">
              <div
                className={`${color} h-2 rounded-md`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
        <button className="mt-4 flex items-center space-x-2 text-blue-400">
          <span>View all countries</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DemoGraphics;
