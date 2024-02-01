import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const NewPassword = () => {
  const nav = useNavigate();
  const { setLoader, route } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  const handelSubmit = function (e) {
    e.preventDefault();
    setLoader(true);
    fetch(`${route}/auth/resetPassword`, {
      method: "PUT",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "fail") {
          toast.error(res?.message);
        } else {
          toast.success(t("password_changed_msg"));

          localStorage.removeItem("token");
          nav("/login");
        }
      })

      .finally(() => setLoader(false));
  };
  return (
    <div className="login">
      <div className="container">
        <p className="instructions">{t("new_password_instructions")}</p>
        <form action="" className="form" onSubmit={handelSubmit}>
          <input
            required=""
            className="input"
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email")}
          />
          <input
            required=""
            className="input"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder={t("password")}
          />
          <input className="login-button" type="submit" value={t("rest")} />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
