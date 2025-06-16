import React from "react";
import Stats from "../components/statsSection/Stats";
import Language from "../components/Language/Language";
import Hero from "../components/header/Hero";
import BookingPlatform from "../components/bookingPlatform/BookingPlatform";
import EveryLearner from "../components/bookingPlatform/EveryLearner";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Language></Language>
      <BookingPlatform></BookingPlatform>
      <EveryLearner></EveryLearner>
    </div>
  );
};

export default Home;
