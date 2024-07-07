import { Sidebar } from "../components/sidebar/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button lg:hidden fixed top-6 right-6"
        >
          <FaBarsStaggered className="w-8 h-8 text-primary" />
        </label>
        <div className="px-8 py-12 min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};
export default DashboardLayout;
