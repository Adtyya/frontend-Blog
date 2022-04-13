import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screen/Home/HomeScreen";
import { ParallaxProvider } from "react-scroll-parallax";
import Login from "./screen/Login";
import Register from "./screen/Register";
import Blog from "./screen/Blog";
import DetailBlog from "./screen/DetailBlog";
import About from "./screen/About/About";
import Profile from "./screen/Profile";

const App = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/read/:id" element={<DetailBlog />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </ParallaxProvider>
  );
};

export default App;
