import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import "./nav.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import burger from "../../assets/burger.png";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { useTranslation } from "react-i18next";

function Nav(props) {
  const history = useNavigate();
  const { route, notifications } = useContext(AppContext);
  const { login, setLogin } = useContext(AppContext);
  const [active, setActive] = useState("");
  const [notRead, setNotRead] = useState(0);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (lng === "ar") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
    localStorage.setItem("lang", lng);
  };

  const clickBurger = () => {
    document.querySelector(".nav .list").classList.toggle("list-show");
  };

  const clickOnLink = (e) => {
    const elements = document.querySelectorAll(".nav .list a");
    elements.forEach((element) => {
      element.classList.remove("active");
    });

    setActive(e.target.innerHTML);
    localStorage.setItem("active", e.target.innerHTML);
    e.target.classList.add("active");

    document.querySelector(".nav .list").classList.toggle("list-show");
  };
  const clickOnLinkSvg = (e) => {
    const elements = document.querySelectorAll(".nav .list a");
    elements.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("active-svg");
    });

    // setActive(e.target.innerHTML)
    // localStorage.setItem("active",e.target.innerHTML)
    e.target.classList.add("active-svg");

    document.querySelector(".nav .list").classList.toggle("list-show");
  };
  const logOut = () => {
    setLogin(false);
    localStorage.clear();
    clickOnLink();
  };
  useEffect(() => {
    if (localStorage.getItem("active")) {
      document.querySelectorAll(".nav .list a").forEach((element) => {
        if (element.innerHTML === localStorage.getItem("active")) {
          element.classList.add("active");
        }
      });
    }
  }, []);
  useEffect(() => {
    const count = notifications?.filter((notification) => {
      return notification.isRead === false;
    }).length;
    setNotRead(count);
  }, [notifications]);
  return (
    <div className="nav">
      <div className="container">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="list">
          <NavLink to="/">{t("home")}</NavLink>
          <NavLink to="/who-we-are">{t("who_we_are")}</NavLink>
          <NavLink to="/contact">{t("contact_us")}</NavLink>
          <NavLink to="/apply">ِ{t("apply")}</NavLink>
          {login ? (
            <Link onClick={logOut} to="/login">
              {t("log_out")}
            </Link>
          ) : (
            <NavLink to="/login">{t("login")}</NavLink>
          )}
          {login ? (
            <Link onClick={clickOnLinkSvg} className="sv" to="/profile">
              <CgProfile />
            </Link>
          ) : null}
          {login ? (
            <Link
              onClick={clickOnLinkSvg}
              className="sv notificationsIcon"
              to="/notifications"
            >
              <IoIosNotifications />
              {notRead !== 0 && notRead !== undefined && (
                <>
                  <span>{notRead}</span>
                </>
              )}
            </Link>
          ) : null}
          <button
            onClick={() => {
              changeLanguage(t("lang") === "ar" ? "en" : "ar");
            }}
            style={{ fontSize: "1.2rem" }}
            className="sv notificationsIcon"
          >
            {t("lang") === "ar" ? "English" : "العربية"}
          </button>
        </div>

        <img onClick={clickBurger} src={burger} className="burger" alt="" />
      </div>
    </div>
  );
}

export default Nav;
