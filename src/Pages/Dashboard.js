import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
        <ul className="menu p-4 w-56 text-base-content bg-black text-white">
          {/* <!-- Sidebar content here --> */}
          {user.userType === "admin" && (
            <li>
              <NavLink to="/dashboard/all-data">All Data</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/dashboard/added-by-me">Added by me</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-customer-data">
              Add customer data
            </NavLink>
          </li>
          {user.userType === "admin" && (
            <li>
              <NavLink to="/dashboard/add-employee">Add new employee</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
