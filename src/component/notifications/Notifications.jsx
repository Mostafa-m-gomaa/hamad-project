import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import "./notifications.css";
import { IoIosNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const Notifications = () => {
  const { notifications, setNotifications, route, setLoader } =
    useContext(AppContext);
  const nav = useNavigate();
  const makeAllRead = () => {
    setLoader(true);
    fetch(`${route}/notification/markAllsAsRead`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setNotifications((prev) =>
          prev.map((notification) => {
            notification.isRead = true;
            return notification;
          })
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };
  const clickNotif = (notId, reqId, isRead) => {
    if (isRead) {
      nav(`/request-details/${reqId}`);
    } else {
      setLoader(true);
      fetch(`${route}/notification/${notId}/read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          setNotifications((prev) =>
            prev.map((notification) => {
              if (notification.id === notId) notification.isRead = true;
              return notification;
            })
          );
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoader(false);
          nav(`/request-details/${reqId}`);
        });
    }
  };
  return (
    <div className="notifications container">
      <button className="reade-all" onClick={makeAllRead}>
        Mark all as read
      </button>
      {notifications.map((notification) => {
        return (
          <button
            onClick={() =>
              clickNotif(
                notification.id,
                notification.payload,
                notification.isRead
              )
            }
            className={`card ${!notification.isRead && "unread"}`}
            key={notification.id}
          >
            <span>
              <IoIosNotifications />
            </span>
            <p>{notification.message}</p>
          </button>
        );
      })}
    </div>
  );
};

export default Notifications;
