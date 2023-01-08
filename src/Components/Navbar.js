import React from "react";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
        <button className="btn btn-secondary lg:mr-3" onClick={logout}>
          Logout
        </button>
      ) : (
        <li>
          <Link to="/">Login</Link>
        </li>
      )}
      <li>
        <NavLink to="/dashboard/all-data">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
        <a className="btn btn-ghost normal-case text-xl">Jooskart</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div class="navbar-end">
        <div className=" w-[200px] hidden lg:flex justify-around"></div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaUser></FaUser>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
