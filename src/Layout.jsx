import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";

const GlobalLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-[18.75%_1fr] grid-rows-[6.39%_1fr] bg-[#000000]">
      <Header />
      <Sidebar />
      <main className="min-h-full">{children}</main>
    </div>
  );
};

export default GlobalLayout;
