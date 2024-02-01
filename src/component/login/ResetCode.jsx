import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ResetCode = () => {
  const nav = useNavigate();
  const { setLoader, route } = useContext(AppContext);
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const handelSubmit = function (e) {
    console.log(0);
    e.preventDefault();
    setLoader(true);
    fetch(`${route}/auth/verifyResetCode`, {
      body: JSON.stringify({
        resetCode: code,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "fail") {
          toast.error(res.message);
        } else {
          toast.success(t("code_verified_msg"));
          nav("/new-password");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err?.response?.data?.message);
        }
      })
      .finally(() => setLoader(false));
  };

  return (
    <div className="login">
      <div className="container">
        <p className="instructions">{t("enter_code_instructions")}</p>
        <form action="" className="form" onSubmit={handelSubmit}>
          <input
            required=""
            className="input"
            type="text"
            onChange={(e) => setCode(e.target.value)}
            placeholder={t("code")}
          />
          <input className="login-button" type="submit" value={t("send")} />
        </form>
      </div>
    </div>
  );
};

export default ResetCode;
