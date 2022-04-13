import React from "react";
import Img from "../assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center bg-gray-100 mx-auto w-full items-center h-screen">
      <div className="flex w-full max-w-4xl max-h-96 h-full mx-auto">
        <div className="hidden md:flex w-2/4">
          <img src={Img} alt="loginpg" />
        </div>
        <div className="block md:flex w-full mx-2 md:w-2/4 items-center justify-center">
          <form className="w-full p-5 bg-white shadow-md rounded-lg">
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-lg">
                Email
              </label>
              <input
                type="text"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-lg">
                Password
              </label>
              <input
                type="password"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 py-2 px-3 rounded shadow-lg hover:bg-gray-900 hover:transition-all hover:duration-500"
            >
              Login
            </button>
            <p className="text-sm mt-3 mb-1">
              Pengunjung baru? buat akun{" "}
              <span className="text-blue-500">
                <Link to="/register">di sini</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
