import React from "react";
import Header from "../Header";
import HeroSec from "../HeroSec";
import Nav from "../Nav";
import { useNavigate } from "react-router-dom";

const CompulHeader = () => {
  const nav = useNavigate();
  return (
    <>
      <Header />
      <HeroSec />
      <Nav nav={nav} />
    </>
  );
};
export default CompulHeader;
