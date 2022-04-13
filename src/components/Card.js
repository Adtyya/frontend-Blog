import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyModal from "./Modal";

const Card = () => {
  const [form, setForm] = useState({
    title: "",
    image: "",
    body: "",
  });
  const [hide, setHide] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setForm({ title: "", image: "", body: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.image || !form.body) {
      return;
    } else {
      setHide(false);
      setTimeout(() => {
        setHide(null);
      }, 500);
      console.log(form);
      resetForm();
    }
  };

  return (
    <div className="pt-20">
      <div className="block mx-auto w-max p-3">
        <h3 className="text-xl">Welcome back Aditya</h3>
      </div>
      <div className="block mx-auto w-max">
        <MyModal title="Buat postingan baru" hideModal={hide}>
          <form className="w-full p-1 md:p-5">
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-md">
                Judul Postingan
              </label>
              <input
                type="text"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                name="title"
                onChange={handleChange}
                placeholder="Merakit komputer"
                value={form.title}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-md">
                Gambar
              </label>
              <input
                type="file"
                className="cursor-pointer shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none file:text-md file:bg-white file:rounded"
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 font-semibold text-md">
                Konten
              </label>
              <textarea
                className="shadow border max-h-96 h-44 overflow-y-visible rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Hardisk berfungsi sebagai penyimpanan"
                onChange={handleChange}
                name="body"
                value={form.body}
              />
            </div>
          </form>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={handleSubmit}
          >
            Post
          </button>
        </MyModal>
      </div>
      <div className="flex flex-col md:flex-row w-full my-3">
        <div className="flex my-5 md:my-0 px-3 md:sticky flex-col h-max top-20 w-full md:w-1/4 bg-gray-100 rounded shadow-xl">
          <h3 className="text-lg font-semibold">Category</h3>
          <ul className="my-2 px-1">
            <li className="text-md cursor-pointer transition-all duration-300 hover:bg-gray-900 rounded w-max px-1 hover:text-white">
              Web programming
            </li>
            <li className="text-md cursor-pointer transition-all duration-300 hover:bg-gray-900 rounded w-max px-1 hover:text-white">
              Math
            </li>
            <li className="text-md cursor-pointer transition-all duration-300 hover:bg-gray-900 rounded w-max px-1 hover:text-white">
              Networking
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-3/4 bg-white rounded shadow-xl md:mx-5">
          <div className="bg-white mx-3 md:mx-8 mt-5 mb-10 rounded shadow-xl flex flex-col">
            <Link to="/blog/read/99">
              <img
                src="https://images.unsplash.com/photo-1648941902569-0132563ee5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                className="w-full h-64 object-cover px-3"
                alt="post"
              />
              <div className="mx-3 my-2">
                <h3 className="text-2xl font-medium my-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias facere quas nobis magni maiores illo tenetur nisi
                  accusantium. Nostrum laboriosam odit quidem recusandae
                  quibusdam et impedit, officia beatae, vitae necessitatibus
                  perferendis placeat voluptates quia natus expedita repellendus
                  libero, sed alias ducimus dolores. Ipsum exercitationem
                  adipisci, molestiae reprehenderit quam assumenda neque.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
