import { ReactNode } from "react";
import { Link } from "react-router";
import { FiLogOut, FiActivity, FiMenu } from "react-icons/fi";
import { FaChartBar, FaUser, FaCog } from "react-icons/fa";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";

const GlobalLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[60px_1fr] h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="col-span-2 flex items-center justify-between px-4 bg-black border-b border-gray-800">
        <Header />
      </header>

      {/* Sidebar */}
      <aside className="row-span-2 bg-gray-950  flex flex-col space-y-6">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default GlobalLayout;
