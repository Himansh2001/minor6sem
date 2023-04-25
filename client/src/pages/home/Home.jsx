import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./Home.css"
import Parking from "../../components/parking/Parking.jsx";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Parking/>
    </div>
  );
};

export default Home;
