import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../Hooks/useUser";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    toast.success("Logout successful.");
  };
  const navLinks = (
    <>
      {user ? (
        <button className="btn btn-error" onClick={logout}>
          Logout
        </button>
      ) : (
        <li>
          <Link to="/">Login</Link>
        </li>
      )}
      <li>
        <Link to="/dashboard/all-data">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CRM Support</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div class="navbar-end">
        <div className=" w-[200px] hidden lg:flex justify-around"></div>
        <div class="dropdown">
          <label
            for="my-drawer-2"
            tabindex="0"
            class="btn btn-ghost lg:hidden"
            onClick={() => navigate("/dashboard/all-data")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
