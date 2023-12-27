import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        } else if (data.data.type === "phd") {
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
            Welcome <br />
            {user?.username}
            <br />
            {user?.email}
            <br />
          </div>
        </div>
        <div className="requests">
          <h2>Requests</h2>
          <div className="cards">
            {requests.map((request) => (
              <div key={request.id} className="request-card">
                <h3>Request State : {request.Eligibility}</h3>
                {request.Eligibility === "pending" ? null : (
                  <div>Current Step : {request.currentStep} </div>
                )}
                <Link to={`/request-details/${request.id}`}>Details</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
