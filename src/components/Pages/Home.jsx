import React from "react";
import Slider from "../Slider";
import Announcement from "../Announcement";
import Message from "../Message";
import About from "../About";
import Gallery from "../Gallery";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <Slider />
      <Announcement nav={nav} />
      <Message />
      <About />
      <Gallery nav={nav} />
      <Footer />
    </>
  );
};
export default Home;
