import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

const Profile = () => {
  const [file, setFile] = useState(null);

  const handleImage = (event) => {
    console.log(event.target.files[0]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col p-5 bg-white shadow-md relative rounded-lg-full w-full md:w-1/2">
          <h1 className="text-2xl font-semibold text-center">Profile</h1>
          <form className="w-full lg:w-1/2 ">
            <div className="flex my-3 flex-col justify-center items-center lg:absolute top-24 right-24">
              <img
                src="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="user"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="opacity-0 hover:opacity-100 duration-300 absolute z-10 inset-0 flex justify-center items-center text-4xl text-gray-700 font-semibold">
                <label htmlFor="upload" onChange={handleImage}>
                  <BsFillCameraFill />
                  <input type="file" id="upload" className="hidden" />
                </label>
              </div>
              <h5 className="text-md my-1">John doe</h5>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-lg">
                Name
              </label>
              <input
                type="text"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="John doe"
              />
            </div>
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
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-lg">
                Confirm Password
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
              Update profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
