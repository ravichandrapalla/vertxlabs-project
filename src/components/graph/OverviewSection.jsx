import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
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

// Mock data for different metrics
const mockData = {
  Visitors: {
    data: [
      { date: "Mar 1", value: 400 },
      { date: "Mar 5", value: 1200 },
      { date: "Mar 10", value: 900 },
      { date: "Mar 15", value: 700 },
      { date: "Mar 20", value: 1500 },
      { date: "Mar 25", value: 1100 },
      { date: "Mar 30", value: 1600 },
    ],
    total: "13.49K",
    change: "+469%",
    changeValue: "(897)",
  },
  Connections: {
    data: [
      { date: "Mar 1", value: 300 },
      { date: "Mar 5", value: 800 },
      { date: "Mar 10", value: 650 },
      { date: "Mar 15", value: 500 },
      { date: "Mar 20", value: 1100 },
      { date: "Mar 25", value: 900 },
      { date: "Mar 30", value: 1200 },
    ],
    total: "3.49K",
    change: "+180%",
    changeValue: "(497)",
  },
  Interactions: {
    data: [
      { date: "Mar 1", value: 200 },
      { date: "Mar 5", value: 600 },
      { date: "Mar 10", value: 750 },
      { date: "Mar 15", value: 850 },
      { date: "Mar 20", value: 950 },
      { date: "Mar 25", value: 800 },
      { date: "Mar 30", value: 900 },
    ],
    total: "5.25K",
    change: "+205%",
    changeValue: "(601)",
  },
  Impressions: {
    data: [
      { date: "Mar 1", value: 1000 },
      { date: "Mar 5", value: 1800 },
      { date: "Mar 10", value: 1500 },
      { date: "Mar 15", value: 1300 },
      { date: "Mar 20", value: 2200 },
      { date: "Mar 25", value: 1900 },
      { date: "Mar 30", value: 2500 },
    ],
    total: "22.7K",
    change: "+352%",
    changeValue: "(1245)",
  },
};

// Time range filters - actual data processing would happen with real data
const timeRangeFilters = {
  Today: (data) => data.slice(-1),
  Yesterday: (data) => data.slice(-2, -1),
  "This week": (data) => data.slice(-7),
  "Last week": (data) => data.slice(-14, -7),
  "Last 7 days": (data) => data.slice(-7),
  "Last 30 days": (data) => data,
};

// Insight data based on visitor type
const insightData = {
  Visitors: {
    Founders: { total: "7.4K", change: "+000%", changeValue: "(000)" },
    Investors: { total: "6.09K", change: "+000%", changeValue: "(000)" },
  },
  Connections: {
    Founders: { total: "3.2K", change: "+125%", changeValue: "(214)" },
    Investors: { total: "2.8K", change: "+95%", changeValue: "(189)" },
  },
  Interactions: {
    Founders: { total: "4.5K", change: "+167%", changeValue: "(302)" },
    Investors: { total: "3.7K", change: "+112%", changeValue: "(257)" },
  },
  Impressions: {
    Founders: { total: "12.3K", change: "+289%", changeValue: "(874)" },
    Investors: { total: "9.6K", change: "+213%", changeValue: "(726)" },
  },
};

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
  const [compareMetric, setCompareMetric] = useState(null);
  const [visibleData, setVisibleData] = useState(mockData.Visitors.data);
  const [insightMetrics, setInsightMetrics] = useState(insightData.Visitors);

  // Update chart data when selections change
  useEffect(() => {
    const baseData = mockData[selectedVisitor].data;
    const filteredData = timeRangeFilters[selectedTime](baseData);
    setVisibleData(filteredData);
    setInsightMetrics(insightData[selectedVisitor]);
  }, [selectedVisitor, selectedTime]);

  // Handle adding comparison metric
  useEffect(() => {
    if (selectedAdd !== "+ Add" && selectedAdd !== selectedVisitor) {
      setCompareMetric(selectedAdd);
    } else {
      setCompareMetric(null);
    }
  }, [selectedAdd, selectedVisitor]);

  // Get comparison data if needed
  const getComparisonData = () => {
    if (!compareMetric) return null;

    const baseData = mockData[compareMetric].data;
    return timeRangeFilters[selectedTime](baseData);
  };

  const comparisonData = getComparisonData();

  return (
    <div className="w-full  flex flex-col  md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[auto_auto] gap-4 rounded-xl overflow-y-auto  md:overflow-hidden">
      {/* Visitors Graph (Top Left, Large) */}
      <VisitorsGraph
        dropdownOptions={dropdownOptions}
        selectedTime={selectedTime}
        setSelectedVisitor={setSelectedVisitor}
        selectedVisitor={selectedVisitor}
        setSelectedTime={setSelectedTime}
        selectedAdd={selectedAdd}
        setSelectedAdd={setSelectedAdd}
        visitorData={visibleData}
        comparisonData={comparisonData}
        compareMetric={compareMetric}
        metrics={mockData[selectedVisitor]}
      />

      {/* Insights (Top Right, Small) */}
      <InsightsCard
        dropdownOptions={dropdownOptions}
        selectedVisitor={selectedVisitor}
        setSelectedVisitor={setSelectedVisitor}
        insightMetrics={insightMetrics}
      />

      {/* Demographics (Full Width, Bottom Row) */}
      <DemoGraphics />
    </div>
  );
};

export default OverviewSection;
