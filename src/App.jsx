import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
