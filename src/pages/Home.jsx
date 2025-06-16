import React from "react";
import Stats from "../components/statsSection/Stats";
import Language from "../components/Language/Language";
import Hero from "../components/header/Hero";
import BookingPlatform from "../components/bookingPlatform/BookingPlatform";
import EveryLearner from "../components/bookingPlatform/EveryLearner";
import Testimonials from "../components/bookingPlatform/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <Language></Language>
      <BookingPlatform></BookingPlatform>
      <EveryLearner></EveryLearner>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
