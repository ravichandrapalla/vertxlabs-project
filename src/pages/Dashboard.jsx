import { useState } from "react";
import DemoGraphics from "../components/graph/DemoGraphics";
import OverviewSection from "../components/graph/OverviewSection";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewSection />;
      case "Demographics":
        return <DemoGraphics />;
      case "More":
        return <div className="text-white">More content coming soon...</div>;
      case "Reports":
        return <div className="text-white">Reports coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="text-white h-full flex flex-col ">
      {/* Tabs Component */}
      <section className="bg-[#000000] text-white flex justify-around md:justify-between items-center md:border-b border-[#1D1D1D] overflow-hidden">
        {/* Left Tabs */}
        <div className="flex items-center text-white md:text-[#555555]">
          {["Overview", "Reports", "Demographics"].map((tab) => {
            const isActive = activeTab === tab;

            return (
              <div
                key={tab}
                className={`${
                  tab === "Reports" && "md:hidden"
                } flex items-center justify-center p-4 md:border-r border-[#1D1D1D] cursor-pointer
            ${isActive ? "md:text-white" : ""}
            ${isActive ? "border-b-2 border-b-white md:border-b-0" : ""}
          `}
                onClick={() => setActiveTab(tab)}
              >
                <p>{tab}</p>
              </div>
            );
          })}
        </div>

        {/* Right Tab */}
        <div className="hidden md:flex items-center justify-center md:border-l border-[#1D1D1D] w-30">
          <div
            className={`flex items-center justify-center p-4 cursor-pointer
        ${activeTab === "More" ? "md:text-white" : ""}
        ${activeTab === "More" ? "border-b-2 border-b-white md:border-b-0" : ""}
      `}
            onClick={() => setActiveTab("More")}
          >
            <p>More</p>
          </div>
        </div>
      </section>

      {/* Active Section */}
      <article className="bg-[#080808] p-4 flex-grow">
        <section className="px-6">{renderActiveSection()}</section>
      </article>
    </div>
  );
};

export default Dashboard;
