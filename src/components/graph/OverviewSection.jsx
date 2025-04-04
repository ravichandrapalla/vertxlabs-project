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
import DemoGraphics from "./DemoGraphics";
import InsightsCard from "./InsightsCard";
import VisitorsGraph from "./VisitorsGraph";

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
    <div className="w-225 grid grid-cols-[2fr_1fr]  grid-rows-[auto_auto] gap-4 rounded-xl p-4">
      {/* Visitors Graph (Top Left, Large) */}

      <VisitorsGraph
        dropdownOptions={dropdownOptions}
        selectedTime={selectedTime}
        setSelectedVisitor={setSelectedVisitor}
        selectedVisitor={selectedVisitor}
        setSelectedTime={setSelectedTime}
        selectedAdd={selectedAdd}
        visitorData={visitorData}
        setSelectedAdd={setSelectedAdd}
      />
      {/* Insights (Top Right, Small) */}
      <InsightsCard
        dropdownOptions={dropdownOptions}
        selectedVisitor={selectedVisitor}
        setSelectedVisitor={setSelectedVisitor}
      />

      {/* Demographics (Full Width, Bottom Row) */}
      <DemoGraphics />
    </div>
  );
};

export default OverviewSection;
