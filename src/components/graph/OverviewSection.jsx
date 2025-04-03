import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Dropdown from "../ui/Dropdown";
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

const dropdownOptions = {
  visitors: ["Visitors", "Connections", "Interactions", "Impressions"],
  timeRange: [
    "Today",
    "Yesterday",
    "This week",
    "Last week",
    "Last 7 days",
    "Last 30 days",
  ],
  addOptions: ["Connections", "Interactions", "Impressions"],
};

const OverviewSection = () => {
  const [selectedVisitor, setSelectedVisitor] = useState("Visitors");
  const [selectedTime, setSelectedTime] = useState("Last 30 days");
  const [selectedAdd, setSelectedAdd] = useState("+ Add");

  return (
    <div className="w-225 h-68 grid grid-cols-[2fr_1fr] grid-rows-[auto_auto] gap-4 rounded-xl py-6">
      {/* Visitors Graph (Top Left, Large) */}
      <div className="p-6 rounded-lg shadow bg-gray-900">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Dropdown
              options={dropdownOptions.visitors}
              selected={selectedVisitor}
              setSelected={setSelectedVisitor}
            />
            <Dropdown
              options={dropdownOptions.timeRange}
              selected={selectedTime}
              setSelected={setSelectedTime}
            />
          </div>
          <Dropdown
            options={dropdownOptions.addOptions}
            selected={selectedAdd}
            setSelected={setSelectedAdd}
          />
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

      {/* Insights (Top Right, Small) */}
      <div className="bg-gray-900 p-6 rounded-lg shadow flex flex-col">
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
          <h3 className="text-3xl font-bold">7.4K</h3>
          <span className="text-green-400 text-xs">+000% (000)</span>
        </div>
        <div className="mt-4">
          <p className="text-gray-400 text-sm">Investors</p>
          <h3 className="text-3xl font-bold">6.09K</h3>
          <span className="text-green-400 text-xs">+000% (000)</span>
        </div>
        <button className="mt-6 flex items-center space-x-2 text-blue-400 self-start">
          <span>View detailed insights</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Demographics (Full Width, Bottom Row) */}
      <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Demographics</h3>
          <Dropdown
            options={dropdownOptions.visitors}
            selected={selectedVisitor}
            setSelected={setSelectedVisitor}
          />
        </div>
        <div className="mt-4">
          <img
            src="/mnt/data/new.png"
            alt="Demographics Chart"
            className="w-full"
          />
        </div>
        <div className="mt-6">
          <button className="text-blue-400 flex items-center space-x-2">
            <span>View all countries</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
