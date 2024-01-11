import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Producs from "./Producs";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>TEELAB</title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      <Producs></Producs>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
