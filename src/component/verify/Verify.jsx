import React from "react";
import "./verify.css";
import { useState, useContext } from "react";
import { AppContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Verify = () => {
  const [verify, setVerify] = useState("");
  const { route, setToken, setLoader } = useContext(AppContext);
  const history = useNavigate();
  const { t } = useTranslation();
  const handleVerify = async (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(`${route}/auth/verifyEmail`, {
        method: "POST",
        body: JSON.stringify({
          verifyCode: verify,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => res.json());
      console.log(response);
      setLoader(false);
      if (response.token) {
        toast.success("you are verified");
        history("/login");
      } else if (response.status == "error") {
        toast.error(response.message);
      } else {
        toast.error("هناك خطأ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="verify">
      <div className="card">
        <span className="card__title">{t("verify_your_email")}</span>

        <div className="card__form">
          <input
            onChange={(e) => setVerify(e.target.value)}
            placeholder="Verify Code"
            type="text"
          />
          <button onClick={handleVerify} className="sign-up">
            {" "}
            {t("verify")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
