import React from "react";
import Dropdown from "../ui/Dropdown";
import { FaArrowRight } from "react-icons/fa";

const InsightsCard = ({
  dropdownOptions,
  selectedVisitor,
  setSelectedVisitor,
  insightMetrics,
}) => {
  return (
    <div className="bg-[#000000] p-6 rounded-lg shadow flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Insights</h3>
        <Dropdown
          options={dropdownOptions.visitors}
          selected={selectedVisitor}
          setSelected={setSelectedVisitor}
        />
      </div>

      <div className="mt-2">
        <p className="text-gray-400 text-sm">Founders</p>
        <h3 className="text-3xl font-bold">{insightMetrics.Founders.total}</h3>
        <span className="text-green-400 text-xs">
          {insightMetrics.Founders.change} {insightMetrics.Founders.changeValue}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-gray-400 text-sm">Investors</p>
        <h3 className="text-3xl font-bold">{insightMetrics.Investors.total}</h3>
        <span className="text-green-400 text-xs">
          {insightMetrics.Investors.change}{" "}
          {insightMetrics.Investors.changeValue}
        </span>
      </div>

      <button className="mt-6 flex items-center space-x-2 text-blue-400 self-start">
        <span>View detailed insights</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default InsightsCard;
