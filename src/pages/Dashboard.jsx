import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const visitorData = [
  { date: "Mar 1", value: 400 },
  { date: "Mar 5", value: 1200 },
  { date: "Mar 10", value: 900 },
  { date: "Mar 15", value: 700 },
  { date: "Mar 20", value: 1500 },
  { date: "Mar 25", value: 1100 },
  { date: "Mar 30", value: 1600 },
];

const demographics = [
  { country: "India", percentage: 40, color: "bg-purple-600", flag: "🇮🇳" },
  { country: "USA", percentage: 25, color: "bg-orange-500", flag: "🇺🇸" },
  { country: "CANADA", percentage: 10, color: "bg-red-500", flag: "🇨🇦" },
  { country: "UAE", percentage: 7, color: "bg-green-500", flag: "🇦🇪" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-[#000000] flex justify-between items-center border-b-1 border-[#1D1D1D] ">
        <div className="flex items-center space-x-4">
          <div className="p-4 border-r-1 border-[#1D1D1D]">
            <p>Overview</p>
          </div>
          <div className="p-4 border-r-1 border-[#1D1D1D]">
            <p>Demographics</p>
          </div>
        </div>
        <div className="p-4 border-l-1 border-[#1D1D1D]">
          <p>More</p>
        </div>
      </section>
      {/* Overview Section */}
      <section className="px-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {/* Visitors Graph */}
          <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <button className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-1">
                  <span>Visitors</span>
                  <FiChevronDown />
                </button>
                <button className="bg-gray-800 px-3 py-1 rounded-md flex items-center space-x-1">
                  <span>Last 30 days</span>
                  <FiChevronDown />
                </button>
              </div>
              <button className="bg-gray-800 px-3 py-1 rounded-md">
                + Add
              </button>
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

          {/* Insights Section */}
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Insights</h3>
            <div className="mt-4">
              <p className="text-gray-400">Founders</p>
              <h3 className="text-2xl font-bold">7.4K</h3>
            </div>
            <div className="mt-4">
              <p className="text-gray-400">Investors</p>
              <h3 className="text-2xl font-bold">6.09K</h3>
            </div>
            <button className="mt-6 flex items-center space-x-2 text-blue-400">
              <span>View detailed insights</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section>
        <h2 className="text-2xl font-bold">Demographics</h2>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {/* Map Placeholder */}
          <div className="col-span-2 bg-gray-900 p-6 rounded-lg shadow flex items-center justify-center">
            <p className="text-gray-400">[ World Map Placeholder ]</p>
          </div>

          {/* Country Data */}
          <div className="bg-gray-900 p-6 rounded-lg shadow">
            {demographics.map(({ country, percentage, color, flag }) => (
              <div key={country} className="mb-4">
                <div className="flex justify-between items-center">
                  <span className="flex items-center space-x-2">
                    <span>{flag}</span>
                    <span>{country}</span>
                  </span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-md mt-1">
                  <div
                    className={`${color} h-2 rounded-md`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
            <button className="mt-4 flex items-center space-x-2 text-blue-400">
              <span>View all countries</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
