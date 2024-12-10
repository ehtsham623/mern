import React from "react";
import { NavLink } from "react-router";
import { URL } from "../../routes/urlEndpoints";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
        Signup
      </span>
      <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
        <form action="">
          <label className="block pb-1">Name</label>
          <input
            type="text"
            className="border w-full h-10 px-3 mb-5 rounded-md"
            placeholder="Name"
          />
          <label className="block pb-1">Email</label>
          <input
            type="Email"
            className="border w-full h-10 px-3 mb-5 rounded-md"
            placeholder="Email"
          />
          <label className="block pb-1">Password</label>
          <input
            type="password"
            className="border w-full h-10 px-3 mb-5 rounded-md"
            placeholder="password"
          />

          <div className="flex justify-between items-center">
            <button className="mt-5 bg-green-500 text-white uppercase text-sm font-semibold px-14 py-3 rounded">
              Signup
            </button>
            <NavLink
              to={URL.LOGIN}
              className="mt-5  text-gray-600 uppercase text-sm font-semibold px-14 py-3 rounded"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
