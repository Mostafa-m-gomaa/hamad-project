import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Landing from "../landing/Landing";
import { AppContext } from "../../App";
import { useTranslation } from "react-i18next";
import CountryCard from "./CountryCard";

function Home(props) {
  const [countries, setCountries] = useState([]);
  const [services, setServices] = useState([]);
  const { route } = useContext(AppContext);
  const { t } = useTranslation();
  useEffect(() => {
    fetch(`${route}/countryOfStudy`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCountries(data.data);
        }
      });
    fetch(`${route}/service`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setServices(data.data);
        }
      });
  }, []);
  return (
    <div className="home">
      <Landing />
      <section className="countriesSection container">
        <h2>{t("countries_to_study")}</h2>
        <div className="countriesContainer">
          {countries.map((country, ind) => (
            <CountryCard country={country} key={ind} ind={ind} />
          ))}
        </div>
      </section>
      <section className="countriesSection container">
        <h2>{t("additional_services")}</h2>
        <div className="countriesContainer">
          {services.map((country, ind) => (
            <CountryCard isServ={true} country={country} key={ind} ind={ind} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
