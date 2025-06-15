import React from "react";
import Stats from "../components/statsSection/Stats";
import Language from "../components/Language/Language";
import Hero from "../components/header/Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Language></Language>
    </div>
  );
};

export default Home;
