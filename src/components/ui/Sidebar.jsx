// components/Sidebar.tsx
import { BiPlus } from "react-icons/bi";
import Profile from "../../assets/Profile.png"; // Adjust the path as necessary
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
    <aside className="flex border-[#1D1D1D] border-r">
      <div className="flex flex-col justify-between border-[#1D1D1D] border-r-1">
        <div className="border-[#1D1D1D] border-b-1 p-2 w-12.5 h-12.5">
          <img alt="profile pic" src={Profile} width={30} height={30} />
        </div>
        <div className="border-[#1D1D1D] border-t-1 p-2 w-12.5 h-12.5">
          <BiPlus size={30} color="white" />
        </div>
      </div>
      <div>
        <ul className="flex flex-col px-4 space-y-4 text-white">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-800 rounded-lg"
            >
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
