import { useContext, useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";

const EditDataModal = ({ user, setUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { setLoader, route } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (user) {
      setUsername(user?.username);
      setEmail(user?.email);
      setPhone(user?.phone);
    }
  }, [user]);
  const onSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const data = {};
    if (user.username !== username) data.username = username;
    if (user.email !== email) data.email = email;
    if (user.phone !== phone) data.phone = phone;
    fetch(`${route}/users/changeMyData`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
          setIsModalOpen(false);
          toast.success(t("password_changed_successfully"));
        }
      })
      .finally(() => setLoader(false));
  };
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {t("edit_profile")}
      </button>
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="username">{t("username")}</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            id="username"
            required
          />
          <label htmlFor="email">{t("email")}</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            required
          />
          <label htmlFor="phone">{t("phone")}</label>{" "}
          <PhoneInput
            value={phone}
            country={"eg"}
            onChange={(value) => setPhone(value)}
          />
          <button className="submit">{t("change")}</button>
        </form>
      </Modal>
    </>
  );
};

export default EditDataModal;
