import { useContext, useState } from "react";
import Modal from "../modal/Modal";
import { useTranslation } from "react-i18next";
import { AppContext } from "../../App";
import { toast } from "react-toastify";

const EditPasswordModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { setLoader, route } = useContext(AppContext);
  const [currentPassword, setCurrentPassword] = useState(""); //
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    fetch(`${route}/users/changeMyPassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        password,
        passwordConfirm: confirmPassword,
        currentPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors.length) {
          toast.error(data.errors[0].msg);
        }
        if (data.data) {
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
        {t("change_password")}
      </button>
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="cpassword">{t("current_password")}</label>
          <input
            onChange={(e) => setCurrentPassword(e.target.value)}
            value={currentPassword}
            type="password"
            id="cpassword"
            required
          />
          <label htmlFor="password">{t("new_password")}</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            required
          />
          <label htmlFor="mconfirm_password">{t("confirm_new_password")}</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            pattern={password}
            id="mconfirm_password"
            required
          />
          <button className="submit">{t("change")}</button>
        </form>
      </Modal>
    </>
  );
};

export default EditPasswordModal;
