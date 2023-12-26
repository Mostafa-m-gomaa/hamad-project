import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import "./notifications.css";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
const Notifications = () => {
  const { notifications, setNotifications, route } = useContext(AppContext);
  useEffect(() => {
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
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" notifications container">
      {notifications.map((notification) => {
        return (
          <Link
            to={`/request-details/${notification.payload}`}
            className={`card ${!notification.isRead && "unread"}`}
            key={notification.id}
          >
            <span>
              <IoIosNotifications />
            </span>
            <p>{notification.message}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Notifications;
