import React from "react";
import Stats from "../components/statsSection/Stats";
import Language from "../components/Language/Language";
import Hero from "../components/header/Hero";
import BookingPlatform from "../components/bookingPlatform/BookingPlatform";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Language></Language>
      <BookingPlatform></BookingPlatform>
    </div>
  );
};

export default Home;
