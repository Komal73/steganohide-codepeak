import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/Layout.css";

export default function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
