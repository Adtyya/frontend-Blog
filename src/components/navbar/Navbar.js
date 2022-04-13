import React, { useState, useEffect } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <nav
      className={`w-full ${
        color ? "bg-[#407BFF] shadow-xl" : "bg-transparent"
      } p-3 fixed z-20 transition-all duration-500`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center flex-wrap">
        <Link to="/" className="p-2 mr-4 inline-flex items-center">
          <span
            className={`text-xl ${
              color ? "text-white" : "text-black"
            } roboto font-bold uppercase tracking-wide`}
          >
            Shinyoku{" "}
            <span className={`${color ? "text-black" : "text-blue-500"}`}>
              Blog
            </span>
          </span>
        </Link>
        <button
          className={`${
            color ? "text-white" : "text-black"
          } inline-flex hover:bg-gray-900 rounded md:hidden ml-auto hover:text-white outline-none nav-toggler`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger />
        </button>

        <div id="mobile-menu" className="block w-full md:hidden">
          <Transition
            show={isOpen}
            enter="transition ease-out duration-150 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <div className="flex flex-col items-start w-full bg-[#407BFF]">
              <Link
                to="/"
                className="w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
              >
                <span>Home</span>
              </Link>
              <Link
                to="/blog"
                className="w-full px-3 py-2 rounded text-black items-center justify-center hover:transition-all hover:duration-500 hover:bg-gray-900 hover:text-white"
              >
                <span>Blog</span>
              </Link>
              <Link
                to="/profile"
                className="w-full px-3 py-2 rounded hover:transition-all hover:duration-500 text-black items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                <span>My Profile</span>
              </Link>
              <div className="flex flex-row">
                <Link
                  to="/login"
                  className="m-1 px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="m-1 px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
                >
                  <span>Register</span>
                </Link>
              </div>
            </div>
          </Transition>
        </div>
        <div className="hidden w-full md:inline-flex md:flex-grow md:w-auto">
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
            <Link
              to="/"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
            >
              <span>Home</span>
            </Link>
            <Link
              to="/blog"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
            >
              <span>Blog</span>
            </Link>
            <Link
              to="/profile"
              className="md:inline-flex md:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
            >
              <span>Profile</span>
            </Link>
            <div className="flex flex-row mx-1 space-x-1">
              <Link
                to="/login"
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded bg-[#407BFF] text-white items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
              >
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="md:inline-flex md:w-auto w-full px-3 py-2 rounded bg-[#407BFF] text-white items-center justify-center hover:bg-gray-900 hover:text-white hover:transition-all hover:duration-500"
              >
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
