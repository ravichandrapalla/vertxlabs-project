import React from "react";
import Dropdown from "../ui/Dropdown";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-2 border border-gray-700 rounded">
        <p className="text-white">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const VisitorsGraph = ({
  dropdownOptions,
  selectedTime,
  setSelectedVisitor,
  selectedVisitor,
  setSelectedTime,
  selectedAdd,
  setSelectedAdd,
  visitorData,
  comparisonData,
  compareMetric,
  metrics,
}) => {
  // Create a combined dataset for the chart if we have comparison data
  const chartData = visitorData.map((item, index) => {
    if (comparisonData && comparisonData[index]) {
      return {
        ...item,
        [`${compareMetric}Value`]: comparisonData[index].value,
      };
    }
    return item;
  });

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
          <Dropdown
            options={dropdownOptions.addOptions}
            selected={selectedAdd}
            setSelected={setSelectedAdd}
          />
        </div>
      </div>

      <div className="flex items-baseline gap-4">
        <h3 className="text-3xl font-bold">{metrics.total}</h3>
        <span className="text-green-400">
          {metrics.change} {metrics.changeValue}
        </span>
      </div>

      <div className="mt-4 h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip content={<CustomTooltip />} />
            {compareMetric && <Legend />}
            <Line
              type="monotone"
              dataKey="value"
              name={selectedVisitor}
              stroke="#fff"
              strokeWidth={2}
              dot={{ r: 1 }}
              activeDot={{ r: 5 }}
            />
            {compareMetric && (
              <Line
                type="monotone"
                dataKey={`${compareMetric}Value`}
                name={compareMetric}
                stroke="#8884d8"
                strokeWidth={2}
                dot={{ r: 1 }}
                activeDot={{ r: 5 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsGraph;
