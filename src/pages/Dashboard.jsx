import DemoGraphics from "../components/graph/DemoGraphics";
import VisitorsGraph from "../components/graph/VisitorsGraph";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <section className="bg-[#000000] text-white flex justify-between items-center border-b-1 border-[#1D1D1D] ">
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center p-4 border-r-1 border-[#1D1D1D]">
            <p>Overview</p>
          </div>
          <div className="flex items-center justify-center p-4 border-r-1 border-[#1D1D1D]">
            <p>Demographics</p>
          </div>
        </div>
        <div className="flex items-center justify-center p-4 border-l-1 border-[#1D1D1D] w-30">
          <p>More</p>
        </div>
      </section>
      {/* Overview Section */}
      <section className="px-6">
        <h2 className="text-2xl font-bold">Overview</h2>
        <VisitorsGraph />
      </section>

      {/* Demographics Section */}
      {/* <section className="px-6">
        <h2 className="text-2xl font-bold">Demographics</h2>
        <DemoGraphics />
      </section> */}
    </div>
  );
};

export default Dashboard;
