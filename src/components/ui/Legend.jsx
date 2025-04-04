import React from "react";

const legendItems = [
  { country: "India", color: "bg-purple-600" },
  { country: "USA", color: "bg-orange-500" },
  { country: "CANADA", color: "bg-red-500" },
  { country: "UAE", color: "bg-green-500" },
];

const Legend = () => {
  return (
    <div className="flex space-x-4  border=[#1D1D1D] rounded-4xl border-1 px-2">
      {legendItems.map(({ country, color }) => (
        <div
          key={country}
          className="flex items-center space-x-2 text-sm text-gray-300"
        >
          <span className={`w-3 h-3 rounded-full ${color}`}></span>
          <span>{country}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
