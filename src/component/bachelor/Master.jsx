import React, { useContext, useEffect } from "react";
import "./bach.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { AppContext } from "../../App";
import UploadFileInput from "./UploadFileInput";
import { countries } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Master = () => {
  const { login, setLogin, setLoader, route } = useContext(AppContext);
  const [countries, setCountries] = useState([]);
  const [services, setServices] = useState([]);
  const nav = useNavigate();
  const [values, setValues] = useState({
    cv: null,
    high: null,
    personal: null,
    passport: null,
    statement: null,
    english: null,
    recommendation1: null,
    recommendation2: null,
    bachelor: null,
    research: null,
    experience: null,
    country: "",
    additionalService: "",
    require: "",
  });
  const { t } = useTranslation();

  const inputs = [
    {
      paragraph: t("uploadCV"),
      name: "cv",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadHighSchoolCert"),
      name: "high",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadPersonalPic"),
      name: "personal",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadPassport"),
      name: "passport",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadPersonalStatement"),
      name: "statement",
      type: "word",
      required: true,
    },
    {
      paragraph: t("uploadEnglishTestResults"),
      name: "english",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadTwoRecommendationLetters"),
      name: "recommendation1",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadBachelorsDegreeCertificate"),
      name: "bachelor",
      type: "pdf",
      required: true,
    },
    {
      paragraph: t("uploadResearchProposal"),
      name: "research",
      type: "word",
      required: true,
    },
    {
      paragraph: t("uploadExperienceLetter"),
      name: "experience",
      type: "pdf",
      required: true,
    },
  ];
  const onFileChange = (event, name) => {
    const file = event.target.files[0];
    setValues({ ...values, [name]: file });
  };
  const handleCountry = (e) => {
    setValues({ ...values, country: e.target.innerHTML });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    const servicesss = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][name="services"]:checked'
    );
    Array.from(checkboxes).map(function (checkbox) {
      return servicesss.push(checkbox.value);
    });
    if (localStorage.getItem("token")) {
      const formData = new FormData();
      formData.append("CV", values.cv);
      formData.append("HighSchoolCertificate", values.high);
      formData.append(
        "BachelorsDegreeCertificateWithTranscript",
        values.bachelor
      );
      formData.append("ExperienceLetter", values.experience);
      formData.append("EnglishTestResults", values.english);
      formData.append("TwoRecommendationLetters", values.recommendation1);
      formData.append("PersonalPicture", values.personal);
      formData.append("Passport", values.passport);
      formData.append("PersonalStatement", values.statement);
      formData.append("ResearchProposal", values.research);
      formData.append("additionalService", values.additionalService);
      formData.append("CountryOfStudy", values.country);
      formData.append("additionalService", servicesss.join("/"));
      try {
        const response = await fetch(`${route}/master`, {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => res.json());
        console.log(response);
        setLoader(false);
        if (response.message == "Request sent successfully") {
          toast.success("Request sent successfully");
          nav("/profile");
        } else if (response.status == "fail") {
          toast.error(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      toast.error("you should login first");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
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
    } else {
      toast.error("you should login first");
    }
  }, []);
  return (
    <div className="bachelor">
      <div className="container">
        <h2>{t("apply_to_master")}</h2>
        <form action="" onSubmit={handleSubmit}>
          <select
            onChange={(e) => {
              setValues((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
          >
            <option value="">{t("country_of_study")}</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {t("lang") === "ar" ? country.title_ar : country.title_en}
              </option>
            ))}
          </select>

          <div className="requireRow">
            <div className="require">
              {t("require_specialization")}
              <textarea
                onChange={(e) =>
                  setValues({ ...values, require: e.target.value })
                }
                cols="35"
                rows="5"
                placeholder="write here"
              ></textarea>
            </div>
            <div className="require">
              {t("additional_service")}
              {services.map((service) => (
                <div key={service.title_en}>
                  <input
                    type="checkbox"
                    name="services"
                    id={service.title_en}
                    value={service.title_en}
                  />
                  <label htmlFor={service.title_en}>
                    {t("lang") === "ar" ? service.title_ar : service.title_en}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="files-container">
            {inputs.map((item) => (
              <UploadFileInput
                key={item.name}
                paragraph={item.paragraph}
                name={item.name}
                onChange={onFileChange}
                type={item.type}
                value={values[item.name]}
              />
            ))}
          </div>

          <button className="btn-31" type="submit">
            <span className="text-container">
              <span className="text">{t("apply")}</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Master;
