import React, { useContext, useEffect } from "react";
import "./bach.css";
import { toast } from "react-toastify";
import { useState } from "react";
import { AppContext } from "../../App";
import UploadFileInput from "./UploadFileInput";
import { countries } from "../../data/data";

const Bachelor = () => {
  const { login, setLogin, setLoader, route } = useContext(AppContext);
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
      paragraph: "Click to upload CV",
      name: "cv",
      type: "pdf",
      required: true,
    },
    {
      paragraph: "Upload High School Certification",
      name: "high",
      type: "pdf",
      required: true,
    },
    {
      paragraph: "Click to upload Personal Picture",
      name: "personal",
      type: "pdf",
      required: true,
    },
    {
      paragraph: "Click to upload Passport",
      name: "passport",
      type: "pdf",
      required: true,
    },
    {
      paragraph: "Upload Personal Statement (word file)",
      name: "statement",
      type: "word",
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
    if (values.country == "") {
      toast.error("you should select country");
      setLoader(false);
      return;
    }
    if (localStorage.getItem("token")) {
      const formData = new FormData();
      formData.append("CV", values.cv);
      formData.append("HighSchoolCertificate", values.high);
      formData.append("PersonalPicture", values.personal);
      formData.append("Passport", values.passport);
      formData.append("PersonalStatement", values.statement);
      formData.append("CountryOfStudy", values.country);
      formData.append("RequiredSpecialization", values.require);
      formData.append("additionalService", values.additionalService);

      try {
        const response = await fetch(`${route}/bachelor`, {
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
    } else {
      toast.error("you should login first");
    }
    console.log(login);
  }, []);
  return (
    <div className="bachelor">
      <div className="container">
        <h2>Apply to Bachelor</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="dropdown" tabIndex="0">
            <div className="dropdown-btn" aria-haspopup="menu">
              <span>
                {values.country ? values.country : "Country Of Study"}
              </span>
              <span className="arrow"></span>
            </div>
            <ul className="dropdown-content" role="menu">
              {countries.map((country) => (
                <li key={country}>
                  <div
                    onClick={handleCountry}
                    className={values.country === country ? "active" : ""}
                  >
                    {country}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="requireRow">
            <div className="require">
              riquire specialization
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
              Additional Service
              <textarea
                onChange={(e) =>
                  setValues({ ...values, additionalService: e.target.value })
                }
                cols="35"
                rows="5"
                placeholder="write here"
              ></textarea>
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
              <span className="text">Apply</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bachelor;
