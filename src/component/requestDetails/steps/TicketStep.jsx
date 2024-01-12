import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import { useTranslation } from "react-i18next";

const TicketStep = ({ id, state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoader, route } = useContext(AppContext);
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ticket", file);
    setLoader(true);
    fetch(`${route}/progress/uploadTicket/${id}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        setIsModalOpen(false);
        setFile(null);
      })
      .catch((err) => {
        console.log(err);
        if (err.message) {
          toast.error(err.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const { t } = useTranslation();
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>{t("uploadTicket")}</h2>
          <p>{t("uploadTicketInstructions")}</p>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("uploadTicketButton")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      >
        <h2>{t("uploadTicketModal")}</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="myTicket">{t("ticketLabel")}</label>
          <input
            type="file"
            id="myTicket"
            required
            accept="application/pdf"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button className="submit">{t("upload")}</button>
        </form>
      </Modal>
    </>
  );
};

export default TicketStep;
