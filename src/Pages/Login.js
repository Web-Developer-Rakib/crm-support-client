import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginDetails = { username, password };
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.Error || data.Invalid) {
          toast.warn("Invalid login details");
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/dashboard/all-data");
          toast.success("Logout successful.");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <form>
          <h2 className="my-5 text-2xl text-center">Login</h2>
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs my-5"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <div className="flex justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
