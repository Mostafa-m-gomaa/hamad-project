import React from "react";
import "./apply.css";
import bachelor from "../../assets/bachelors.png";
import master from "../../assets/master-degree.png";
import phd from "../../assets/phd.png";
import { Link } from "react-router-dom";

const Apply = () => {
  return (
    <div className="apply">
      <div className="container">
        <h2>Choose the type you want to apply</h2>
        <div className="cards">
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="8000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={bachelor} alt="" />
            <h3>Bachelor</h3>
            <p>Apply for a bachelor's degree</p>
            <Link to="/bachelor">Apply</Link>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={master} alt="" />
            <h3>Master</h3>
            <p>Apply for a Master degree</p>
            <Link to="/master">Apply</Link>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={phd} alt="" />
            <h3>PHD</h3>
            <p>Apply for a phd degree</p>
            <Link to="/phd">Apply</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
