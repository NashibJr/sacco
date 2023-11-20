import React from "react";
import NavBar from "../components/NavBar";
import Filters from "../components/Filters";
import QuickLinks from "../components/QuickLinks";
import Statistics from "../components/Statistics";

const Homepage = () => {
  return (
    <>
      <NavBar />
      <div className="hompage">
        {" "}
        <Filters />
        <QuickLinks />
        <p className="showing">Showing from 2023-11-17 to 2023-11-17</p>
        <Statistics />
      </div>
    </>
  );
};

export default Homepage;
