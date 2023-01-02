import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userType = "employee";
  const userDetails = {
    name,
    userName,
    password,
    userType,
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      userName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.warn("Please fill up all fields.");
    } else if (password !== confirmPassword) {
      toast.warn("Password did not matched");
    } else {
      fetch(`${process.env.REACT_APP_Server_Link}/post-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.added) {
            setName("");
            setUserName("");
            setPassword("");
            setConfirmPassword("");
            toast.success(data.added);
          } else {
            toast.warn(data.exist);
          }
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    }
  };

  return (
    <div className="mt-10">
      <form action="">
        <h2 className="my-5 text-2xl text-center">REGISTER NEW EMPLOYEE</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs my-5"
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full max-w-xs my-5"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />{" "}
        <br />
        <div className="flex justify-center">
          <button className="btn btn-primary" onClick={handleRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
