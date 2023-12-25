import { useContext } from "react";
import { AppContext } from "../../App";
import "./notifications.css";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
const Notifications = () => {
  const { notifications, setNotifications, route } = useContext(AppContext);
  console.log(notifications);
  const onClick = (id, isRead) => {
    if (!isRead) {
      fetch(`${route}/notification/${id}/read`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          setNotifications((prev) =>
            prev.map((notification) => {
              if (notification.id === id) {
                notification.isRead = true;
              }
              return notification;
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className=" notifications container">
      {notifications.map((notification, index) => {
        return (
          <button
            onClick={() => {
              onClick(notification.id, notification.isRead);
            }}
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
