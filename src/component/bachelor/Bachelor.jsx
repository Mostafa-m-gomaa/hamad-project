import React, { useContext, useEffect } from "react";
import "./bach.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { AppContext } from "../../App";
import UploadFileInput from "./UploadFileInput";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Bachelor = ({ isNew }) => {
  const { login, setLogin, setLoader, route } = useContext(AppContext);
  const [countries, setCountries] = useState([]);
  const [services, setServices] = useState([]);
  const [thisRequest, setThisRequest] = useState({});
  const nav = useNavigate();
  const params = useParams();
  const { t } = useTranslation();
  const [values, setValues] = useState({
    cv: null,
    high: null,
    personal: null,
    passport: null,
    statement: null,
    country: "",
    require: "",
    additionalService: "",
  });
  const inputs = [
    {
      paragraph: t("uploadCV"),
      name: "cv",
      type: "pdf",
      required: isNew,
    },
    {
      paragraph: t("uploadHighSchoolCert"),
      name: "high",
      type: "pdf",
      required: isNew,
    },
    {
      paragraph: t("uploadPersonalPic"),
      name: "personal",
      type: "pdf",
      required: isNew,
    },
    {
      paragraph: t("uploadPassport"),
      name: "passport",
      type: "pdf",
      required: isNew,
    },
    {
      paragraph: t("uploadPersonalStatement"),
      name: "statement",
      type: "word",
      required: isNew,
    },
  ];
  const onFileChange = (event, name) => {
    const file = event.target.files[0];
    setValues({ ...values, [name]: file });
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
      if (values.cv) formData.append("CV", values.cv);
      if (values.high) formData.append("HighSchoolCertificate", values.high);
      if (values.personal) formData.append("PersonalPicture", values.personal);
      if (values.passport) formData.append("Passport", values.passport);
      if (values.statement)
        formData.append("PersonalStatement", values.statement);
      if (values.country) formData.append("CountryOfStudy", values.country);
      if (values.require)
        formData.append("RequiredSpecialization", values.require);
      if (servicesss?.length)
        formData.append("additionalService", servicesss.join("/"));
      try {
        const response = await fetch(
          `${route}/bachelor${isNew ? "" : `/${params.id}`}`,
          {
            method: isNew ? "POST" : "PUT",
            body: formData,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ).then((res) => res.json());
        console.log(response);
        setLoader(false);
        if (response.message == "Request sent successfully") {
          toast.success("Request sent successfully");
          nav("/profile");
        } else if (response.status == "fail") {
          toast.error(response.message);
        } else if (response.data.id) {
          toast.success("Request updated successfully");
          nav("/profile");
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
  useEffect(() => {
    if (!isNew) {
      fetch(`${route}/bachelor/${params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data) {
            setThisRequest(data.data);
            console.log(data.data);
          }
        });
    }
  }, []);
  const links = [
    {
      name: t("cv"),
      link: thisRequest?.CV,
    },
    {
      name: t("highSchoolCertificate"),
      link: thisRequest?.HighSchoolCertificate,
    },
    {
      name: t("passport"),
      link: thisRequest?.Passport,
    },
    {
      name: t("personalPicture"),
      link: thisRequest?.PersonalPicture,
    },
    {
      name: t("personalStatement"),
      link: thisRequest?.PersonalStatement,
    },
  ];
  const renderLinks = () => {
    return links.map((link) => {
      return link.link ? (
        <a href={link.link} key={link.name} target="_blank" rel="noreferrer">
          {link.name}
        </a>
      ) : null;
    });
  };

  return (
    <div className="bachelor">
      <div className="container">
        <h2>{isNew ? t("apply_to_bachelor") : t("edit_your_request")}</h2>
        {isNew ? null : (
          <div className="current_files">
            <h3>{t("current_files")}</h3>
            {renderLinks()}
          </div>
        )}
        <form action="" onSubmit={handleSubmit}>
          <select
            required={isNew}
            onChange={(e) => {
              setValues((prev) => {
                return { ...prev, country: e.target.value };
              });
            }}
          >
            <option value="">{t("country_of_study")}</option>
            {countries.map((country) => (
              <option key={country.id} value={country.title_en}>
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
                required={isNew}
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
                required={item.required}
                onChange={onFileChange}
                type={item.type}
                value={values[item.name]}
              />
            ))}
          </div>

          <button className="btn-31" type="submit">
            <span className="text-container">
              <span className="text">{isNew ? t("apply") : t("update")}</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bachelor;
