import React from "react";

const Login = () => {
  return (
    <div className="mt-10">
      <form action="">
        <h2 className="my-5 text-2xl">Login</h2>
        <input
          type="text"
          placeholder="User ID"
          className="input input-bordered w-full max-w-xs "
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs my-5"
        />{" "}
        <br />
        <button className="btn btn-primary">Log in</button>
      </form>
    </div>
  );
};

export default Login;
