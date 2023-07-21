import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-5 px-4 md:px-64">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
