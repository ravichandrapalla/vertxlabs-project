import { useState } from "react";
import DemoGraphics from "../components/graph/DemoGraphics";
import OverviewSection from "../components/graph/OverviewSection";
import TabsContainer from "../components/ui/TabsContainer";

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
        return <div className="text-white">More content coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="text-white h-full flex flex-col ">
      {/* Tabs Component */}
      <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Active Section */}
      <article className="bg-[#080808] flex-grow p-4">
        <section className="">{renderActiveSection()}</section>
      </article>
    </div>
  );
};

export default Dashboard;
