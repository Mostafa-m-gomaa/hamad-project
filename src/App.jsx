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
import ContactUs from "./component/contactus/Contactus";
import WhoWeAre from "./whoWeAre/WhoWeAre";
import enTranslation from "./translations/en.json";
import arTranslation from "./translations/ar.json";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import Footer from "./component/footer/Footer";
import TermsOfService from "./component/terms/TermsOfService";
import PrivacyPolicy from "./component/terms/PrivacyPolicy";
import ReturnsPolicy from "./component/terms/ReturnsPolicy";
import Resetpassword from "./component/login/Resetpassword";
import Resetcode from "./component/login/ResetCode";
import ResetPassword from "./component/login/Resetpassword";
import ResetCode from "./component/login/ResetCode";
import NewPassword from "./component/login/NewPassword";
i18next.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "en",
  fallbackLng: "en,ar",
  interpolation: {
    escapeValue: false,
  },
});
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
            if (data.notifications) setNotifications(data.notifications);
          })
          .catch((err) => console.log(err));
      }
    };
    getNotification();
  }, [localStorage.getItem("token"), login, route]);
  useEffect(() => {
    AOS.init();
  }, []);

  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
      changeLanguage("en");
      document.body.style.direction = "ltr";
    }
    if (localStorage.getItem("lang") === "ar") {
      changeLanguage("ar");
      document.body.style.direction = "rtl";
    }
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
          <Route path="/bachelor" element={<Bachelor isNew={true} />} />
          <Route path="/phd" element={<PHD isNew={true} />} />
          <Route path="/master" element={<Master isNew={true} />} />
          <Route path="/bachelor/:id" element={<Bachelor isNew={false} />} />
          <Route path="/phd/:id" element={<PHD isNew={false} />} />
          <Route path="/master/:id" element={<Master isNew={false} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/request-details/:id" element={<RequestDetails />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-code" element={<ResetCode />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Routes>
        <Footer />
      </>
    </AppContext.Provider>
  );
}

export default App;
