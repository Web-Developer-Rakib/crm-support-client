import React from "react";

const Register = () => {
  return (
    <div className="mt-10">
      <form action="">
        <h2 className="my-5 text-2xl">Register new user</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs "
        />{" "}
        <br />
        <input
          type="text"
          placeholder="User ID"
          className="input input-bordered w-full max-w-xs my-5"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered w-full max-w-xs my-5"
        />{" "}
        <br />
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
