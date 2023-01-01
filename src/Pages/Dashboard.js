import React from "react";
import { Link, Outlet } from "react-router-dom";
import useUser from "../Hooks/useUser";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* <!-- Outlate here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 text-base-content bg-zinc-300">
          {/* <!-- Sidebar content here --> */}
          {user.userType === "admin" && (
            <li>
              <Link to="/dashboard/all-data">All Data</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/added-by-me">Added by me</Link>
          </li>
          <li>
            <Link to="/dashboard/add-customer-data">Add customer data</Link>
          </li>
          {user.userType === "admin" && (
            <li>
              <Link to="/dashboard/Add-employee">Add new employee</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
