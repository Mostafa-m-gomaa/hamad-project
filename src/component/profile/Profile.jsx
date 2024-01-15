import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { setLoader, setLogin, route } = useContext(AppContext);
  const [user, setUser] = useState({});
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`${route}/users/getMe`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        if (data.data.type === "Bachelor") {
          fetch(`${route}/bachelor`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.data) {
                setRequests(data.data);
              }
            });
        } else if (data.data.type === "Master") {
          fetch(`${route}/master`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.data) {
                setRequests(data.data);
              }
            });
        } else if (data.data.type === "PHD") {
          fetch(`${route}/phd`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.data) {
                setRequests(data.data);
              }
            });
        }
      });
  }, []);
  const { t } = useTranslation();
  console.log(requests);
  return (
    <div className="profile">
      <div className="container">
        <div className="e-card playing">
          <div className="image"></div>

          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="infotop">
            {t("welcome")} <br />
            {user?.username}
            <br />
            {user?.email}
            <br />
          </div>
        </div>
        <div className="requests">
          <h2>{t("requests")}</h2>
          <div className="cards">
            {requests.map((request) => (
              <div key={request.id} className="request-card">
                <h3>
                  {t("request_state")} : {request.Eligibility}
                </h3>
                {request.Eligibility === "pending" ? null : (
                  <div>
                    {t("request_step")} : {request.currentStep}{" "}
                  </div>
                )}
                <div className="btns">
                  <Link to={`/request-details/${request.id}`}>
                    {t("details")}
                  </Link>
                  <Link
                    to={`/${request.title.toLocaleLowerCase()}/${request.id}`}
                  >
                    {t("edit")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
