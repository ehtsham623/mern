import React from "react";
import { NavLink } from "react-router";
import { URL } from "../../routes/urlEndpoints";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <span className="border text-4xl text-yellow-800 px-6 pt-10 pb-8 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10">
        Login
      </span>
      <div className="border relative px-4 pt-7 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md">
        <form action="">
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
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="text-sm ml-3">
                <label for="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button className="mt-5 bg-green-500 text-white uppercase text-sm font-semibold px-14 py-3 rounded">
              Login
            </button>
            <NavLink
              to={URL.SIGNUP}
              className="mt-5  text-gray-600 uppercase text-sm font-semibold px-14 py-3 rounded"
            >
              SignUp
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
