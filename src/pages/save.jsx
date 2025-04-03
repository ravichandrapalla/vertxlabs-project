import { useState } from "react";
import {
  FaChartLine,
  FaUsers,
  FaHome,
  FaBell,
  FaComments,
} from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

import clsx from "clsx";

import { MdOutlineDashboard } from "react-icons/md";
export const cn = (...classes) => clsx(classes);

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");
  const tabs = ["Overview", "Reports", "Demographics"];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col ">
      {/* Header */}
      <header className="flex justify-between items-center pt-4 px-2.75">
        <div className="w-7.5 h-7.5 rounded-full bg-gray-700"></div>
        <div className="text-lg font-semibold">Logo</div>
        <div>
          <SlOptionsVertical size={25} />
        </div>
      </header>
      {/* Tabs */}
      <div className="flex justify-around space-x-6 border-b border-gray-700 mt-11.75">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "pb-2 text-gray-400",
              selectedTab === tab && "border-b-2 border-white text-white"
            )}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Analytics Card */}
      <div className="bg-gray-900 p-4 rounded-xl mt-4">
        <div className="flex justify-between items-center">
          <button className="bg-gray-800 px-3 py-1 rounded-lg">Visitors</button>
          <button className="bg-gray-800 px-3 py-1 rounded-lg">
            Last 30 days ▾
          </button>
        </div>
        <h2 className="text-3xl font-bold mt-2">
          13.49K <span className="text-green-500 text-sm">+4.69%</span>
        </h2>
        <div className="w-full h-24 bg-gray-800 mt-4"></div>
      </div>
      {/* Insights */}
      <div className="bg-gray-900 p-4 rounded-xl mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg">Insights</h3>
          <button className="bg-gray-800 px-3 py-1 rounded-lg">Visitors</button>
        </div>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-gray-400">Founders</p>
            <h2 className="text-2xl font-bold">7.4K</h2>
          </div>
          <div>
            <p className="text-gray-400">Investors</p>
            <h2 className="text-2xl font-bold">6.09K</h2>
          </div>
        </div>
      </div>
      {/* Demographics */}
      <div className="bg-gray-900 p-4 rounded-xl mt-4">
        <h3 className="text-lg">Demographics</h3>
        <div className="w-full h-24 bg-gray-800 mt-2"></div>
      </div>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-between">
        <MdOutlineDashboard />
        {/* <FaHome className="text-xl text-white" /> */}
        <FaChartLine className="text-xl text-white" />
        <FaUsers className="text-xl text-white" />
        <FaBell className="text-xl text-white" />
        <FaComments className="text-xl text-white" />
      </div>
    </div>
  );
};

export default Dashboard;
