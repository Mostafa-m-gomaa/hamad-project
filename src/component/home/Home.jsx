import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Landing from "../landing/Landing";
import { AppContext } from "../../App";
import { FaEarthAfrica } from "react-icons/fa6";

function Home(props) {
  const [countries, setCountries] = useState([]);
  const { route } = useContext(AppContext);
  useEffect(() => {
    fetch(`${route}/countryOfStudy`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCountries(data.data);
        }
      });
  }, []);
  return (
    <div className="home">
      <Landing />
      <section className="countriesSection container">
        <h2>Countries that offer education to international students</h2>
        <div className="countriesContainer">
          {countries.map((country, ind) => (
            <div className="countryCard" key={country.id}>
              <div className="icon">
                <FaEarthAfrica />
              </div>
              <h3>
                <span>{country.title}</span>
                <span>#{ind + 1}</span>
              </h3>
              <p>{country.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
