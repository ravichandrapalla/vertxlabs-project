// components/Sidebar.tsx
import { FiHome, FiBarChart2, FiUsers, FiSettings } from "react-icons/fi";

const menuItems = [
  { name: "Dashboard" },
  { name: "Analytics" },
  { name: "Connect" },
  { name: "Dealroom" },
  { name: "Profile" },
  { name: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 flex bg-[#000000] p-2  h-full">
      <div className="flex flex-col justify-between border-[#1D1D1D] border-r-1">
        <div className="border-[#1D1D1D] border-b-1 p-2">Pro</div>
        <div className="border-[#1D1D1D] border-t-1 p-2">icon</div>
      </div>
      <ul className="flex flex-col px-4 space-y-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-800 rounded-lg"
          >
            {/* <item.icon className="text-lg" /> */}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
