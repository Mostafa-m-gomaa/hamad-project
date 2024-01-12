import React from "react";
import "./apply.css";
import bachelor from "../../assets/bachelors.png";
import master from "../../assets/master-degree.png";
import phd from "../../assets/phd.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Apply = () => {
  const { t } = useTranslation();
  return (
    <div className="apply">
      <div className="container">
        <h2>{t("choose_apply_type")}</h2>
        <div className="cards">
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="8000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={bachelor} alt="" />
            <h3>{t("bachelor")}</h3>
            <p>{t("apply_bachelor")}</p>
            <Link to="/bachelor">{t("apply")}</Link>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={master} alt="" />
            <h3>{t("master")}</h3>
            <p>{t("apply_master")}</p>
            <Link to="/master">{t("apply")}</Link>
          </div>
          <div
            className="card"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
          >
            <img src={phd} alt="" />
            <h3>{t("phd")}</h3>
            <p>{t("apply_phd")}</p>
            <Link to="/phd">{t("apply")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
