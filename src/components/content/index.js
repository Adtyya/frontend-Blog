import React from "react";
import Modal from "../Modal";

const Ngoceh = () => {
  return (
    <div className="w-full bg-white relative z-10 mb-12">
      <div className="bg-[#407BFF] mx-2 md:mx-12 p-8 rounded shadow-2xl">
        <h3 className="text-white text-lg font-semibold">
          Apa sih SHINYOKU BLOG itu ?
        </h3>
        <p className="text-white my-1">
          SHINYOKU BLOG adalah blog yang membahas teknologi terkini dan
          perkembangannya. Website ini dibuat dengan menggunakan teknologi MERN
          STACK. Apa itu MERN STACK ?
          <br />
          MERN adalah sebuah singkatan yang artinya,
          <br /> 'M' sebagai Mongo DB sebagai data base, <br /> 'E' sebagai
          Express JS yang berperan sebagai bagian backend dari aplikasi ini,{" "}
          <br /> 'R' sebagai ReactJS sebagai front end, <br /> 'N' sebagai
          NodeJS rumah bagi MER.
        </p>
        <p className="text-white">
          Tujuan saya membuat website ini adalah sebagai tempat sharing ilmu
          pengetahuan agar dapat tersimpan dan dapat dilihat oleh siapa pun.
        </p>
      </div>
    </div>
  );
};

export default Ngoceh;
