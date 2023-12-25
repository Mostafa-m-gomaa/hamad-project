import React, { useContext, useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./component/nav/Nav";
import Home from "./component/home/Home";
import Login from "./component/login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import SignUp from "./component/sign-up/SignUp";
import Verify from "./component/verify/Verify";
import Apply from "./component/apply/Apply";
import Bachelor from "./component/bachelor/Bachelor";
import Profile from "./component/profile/Profile";
import Master from "./component/bachelor/Master";
import PHD from "./component/bachelor/PHD";
import RequestDetails from "./component/requestDetails/RequestDetails";
import Notifications from "./component/notifications/Notifications";
export const AppContext = createContext();
function App() {
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState("");
  const [loader, setLoader] = useState(false);
  const [route, setRoute] = useState("https://api.hamad-edu.com/api/v1");
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setLogin(true);
    }
  }, [login]);
  useEffect(() => {
    const getNotification = () => {
      if (localStorage.getItem("token")) {
        fetch(`${route}/notification/myNotification`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setNotifications(data.notifications);
          })
          .catch((err) => console.log(err));
      }
    };
    getNotification();

    const inter = setInterval(() => {
      getNotification();
    }, 10000);

    return () => {
      clearInterval(inter);
    };
  }, [localStorage.getItem("token"), login, route]);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppContext.Provider
      value={{
        login,
        setLogin,
        token,
        setToken,
        loader,
        setLoader,
        route,
        setRoute,
        notifications,
        setNotifications,
      }}
    >
      <>
        {loader ? (
          <div className="spin-cont">
            <div className="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
          </div>
        ) : null}
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/bachelor" element={<Bachelor />} />
          <Route path="/master" element={<Master />} />
          <Route path="/phd" element={<PHD />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/request-details/:id" element={<RequestDetails />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
