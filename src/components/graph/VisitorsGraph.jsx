import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const visitorData = [
  { date: "Mar 1", value: 400 },
  { date: "Mar 5", value: 1200 },
  { date: "Mar 10", value: 900 },
  { date: "Mar 15", value: 700 },
  { date: "Mar 20", value: 1500 },
  { date: "Mar 25", value: 1100 },
  { date: "Mar 30", value: 1600 },
];

const VisitorsGraph = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4 bg-[#000000]">
      {/* Visitors Graph */}
      <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-1">
              <span>Visitors</span>
              <FiChevronDown />
            </button>
            <button className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-1">
              <span>Last 30 days</span>
              <FiChevronDown />
            </button>
          </div>
          <button className="bg-gray-800 px-3 py-1 rounded-md">+ Add</button>
        </div>
        <h3 className="text-3xl font-bold">13.49K</h3>
        <span className="text-green-400">+469%</span>
        <div className="mt-4 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visitorData}>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-gray-900 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold">Insights</h3>
        <div className="mt-4">
          <p className="text-gray-400">Founders</p>
          <h3 className="text-2xl font-bold">7.4K</h3>
        </div>
        <div className="mt-4">
          <p className="text-gray-400">Investors</p>
          <h3 className="text-2xl font-bold">6.09K</h3>
        </div>
        <button className="mt-6 flex items-center space-x-2 text-blue-400">
          <span>View detailed insights</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default VisitorsGraph;
