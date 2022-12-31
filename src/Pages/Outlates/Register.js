import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const userType = "Employee";
  const userDetails = {
    name,
    userName,
    password,
    userType,
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      fetch("http://localhost:5000/post-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.log("Password did not matched");
    }
  };

  return (
    <div className="mt-10">
      <form action="">
        <h2 className="my-5 text-2xl">Register new user</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="User ID"
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
        <button className="btn btn-primary" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
