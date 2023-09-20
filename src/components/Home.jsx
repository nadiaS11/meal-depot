import React from "react";
import PropTypes from "prop-types";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="py-4 md:py-8">
      <Gallery></Gallery>
    </div>
  );
};

Home.propTypes = {};

export default Home;
