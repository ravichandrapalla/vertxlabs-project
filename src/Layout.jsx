import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";

const GlobalLayout = ({ children }) => {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-1 grid-rows-[6.39%_1fr] md:grid-cols-[18.75%_1fr] bg-[#000000] overflow-hidden">
      <Header />
      <Sidebar className="hidden md:block" /> {/* Hide sidebar on mobile */}
      <main className="min-h-full min-w-full">{children}</main>
    </div>
  );
};

export default GlobalLayout;
