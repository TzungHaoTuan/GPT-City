// import { Sidebar } from "../components/sidebar/Sidebar";
import { FaBarsStaggered } from "react-icons/fa6";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer xl:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button fixed top-12 right-16 z-10"
        >
          <div className="btn border border-secondary hover:border-accent bg-base-100 hover:bg-neutral xl:hidden hover:cursor-pointer">
            <FaBarsStaggered className="w-4 h-4 text-accent drop-shadow" />
          </div>
        </label>
        <div className="min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* <Sidebar /> */}
      </div>
    </div>
  );
};
export default DashboardLayout;
