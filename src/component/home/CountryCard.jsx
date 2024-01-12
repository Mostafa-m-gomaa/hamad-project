import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaEarthAfrica } from "react-icons/fa6";

const CountryCard = ({ country, ind }) => {
  const container = useRef(null);
  const { t } = useTranslation();
  const { image, title_ar, title_en, description_ar, description_en } = country;
  useEffect(() => {
    if (container.current) {
      container.current.innerHTML =
        t("lang") === "ar" ? description_ar : description_en;
    }
  }, [country, container.current, t("lang")]);
  return (
    <div className="countryCard" key={country.id}>
      <div className="data">
        {image ? (
          <img src={image} alt="country" />
        ) : (
          <div className="icon">
            <FaEarthAfrica />
          </div>
        )}

        <h3>
          <span>{t("lang") === "ar" ? title_ar : title_en}</span>
          <span>#{ind + 1}</span>
        </h3>
      </div>
      <div className="contentContainer" ref={container}></div>
    </div>
  );
};

export default CountryCard;
