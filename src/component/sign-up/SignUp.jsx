import "../login/login.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { countries } from "../../data/countries";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const SignUp = () => {
  const history = useNavigate();
  const { t } = useTranslation();
  const { route, setLoader } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  console.log(countries);
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoader(true);

    try {
      const response = await fetch(`${route}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: userName,
          phone: phone,
          passwordConfirm: confirmPassword,
          country: country,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      console.log(response);
      setLoader(false);
      if (response.token) {
        localStorage.setItem("token", response.token);
        history("/verify");
      } else if (response.errors) {
        toast.error(response.errors[0].msg);
      } else {
        toast.error("هناك خطأ");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="heading">{t("sign_up")}</div>
        <form action="" className="form" onSubmit={handleLogin}>
          <input
            required
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder={t("name")}
          />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            placeholder={t("email")}
          />
          <PhoneInput
            value={phone}
            country={"eg"}
            onChange={(value) => setPhone(value)}
          />

          <select
            onChange={(e) => setCountry(e.target.value)}
            className="input"
            required
          >
            <option value="">{t("country")}</option>
            {countries.map((country) => (
              <option value={country.value} key={country.value}>
                {country.value}
              </option>
            ))}
          </select>
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder={t("password")}
          />
          <input
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder={t("confirm_password")}
          />
          <input className="login-button" type="submit" value={t("sign_up")} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
