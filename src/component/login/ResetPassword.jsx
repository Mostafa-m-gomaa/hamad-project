import "./login.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const nav = useNavigate();
  const { setLoader, route } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const handelSubmit = function (e) {
    e.preventDefault();
    setLoader(true);
    fetch(`${route}/auth/forgotPassword`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "fail") {
          toast.error(res.message);
        } else {
          toast.success(t("code_sent_msg"));
          nav("/reset-code");
        }
      })

      .finally(() => setLoader(false));
  };

  return (
    <div className="login">
      <div className="container">
        <p className="instructions">{t("reset_password_instructions")}</p>
        <form action="" className="form" onSubmit={handelSubmit}>
          <input
            required=""
            className="input"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email")}
          />
          <input className="login-button" type="submit" value={t("send")} />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
