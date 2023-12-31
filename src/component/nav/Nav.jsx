import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./nav.css";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import burger from "../../assets/burger.png";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import GoogleTranslate from "../GoogleTranslate";
import { FaEarthAfrica } from "react-icons/fa6";

function Nav(props) {
  const history = useNavigate();
  const { route, notifications } = useContext(AppContext);
  const { login, setLogin } = useContext(AppContext);
  const [active, setActive] = useState("");
  const [notRead, setNotRead] = useState(0);
  const [translateOpen, setTranslateOpen] = useState(false);
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
      <div
        style={{
          display: translateOpen ? "flex" : "none",
        }}
        className="googleTranslate"
      >
        <GoogleTranslate onClose={() => setTranslateOpen(false)} />
      </div>
      <div className="container">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="list">
          <Link onClick={clickOnLink} className="active" to="/">
            Home
          </Link>
          <Link onClick={clickOnLink} to="/who-us">
            Who Us
          </Link>
          <Link onClick={clickOnLink} to="/contact">
            Contact Us
          </Link>
          <Link onClick={clickOnLink} to="/apply">
            ِApply
          </Link>
          {login ? (
            <Link onClick={logOut} to="/login">
              Log Out
            </Link>
          ) : (
            <Link onClick={clickOnLink} to="/login">
              Login
            </Link>
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
            onClick={() => setTranslateOpen(true)}
            className="sv notificationsIcon"
          >
            <FaEarthAfrica />
          </button>
        </div>

        <img onClick={clickBurger} src={burger} className="burger" alt="" />
      </div>
    </div>
  );
}

export default Nav;
