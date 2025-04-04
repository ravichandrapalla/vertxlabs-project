import React from "react";
import Dropdown from "../ui/Dropdown";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const VisitorsGraph = ({
  dropdownOptions,
  selectedTime,
  setSelectedVisitor,
  selectedVisitor,
  setSelectedTime,
  selectedAdd,
  visitorData,
  setSelectedAdd,
}) => {
  return (
    <div className="p-6 rounded-lg shadow bg-[#000000]">
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
  );
};

export default VisitorsGraph;
