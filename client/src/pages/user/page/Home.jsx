import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../home/Banner";
import Feedback from "../home/Feedback";
import Producs from "../home/Producs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TEELAB</title>
      </Helmet>
      <Banner></Banner>
      <Producs></Producs>
      <Feedback></Feedback>
    </>
  );
};

export default Home;
