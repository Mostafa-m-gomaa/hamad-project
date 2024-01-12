import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import { useTranslation } from "react-i18next";

const OfferLetterStep = ({ details, id, state }) => {
  const { offerLetter } = details;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoader, route } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("signedOfferLetter", file);
    setLoader(true);
    fetch(`${route}/progress/uploadSignedOfferLetter/${id}`, {
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
          <h2>{t("signOfferLetter")}</h2>
          <p>{t("offerLetterInstructions2")}</p>
          <div>
            <button
              disabled={offerLetter == null}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("uploadSignedOfferLetter")}
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
        <h2>{t("uploadSignedOfferLetterInstructions")}</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="signedOfferLetter">
            {t("signedOfferLetterLabel")}
          </label>
          <input
            type="file"
            id="signedOfferLetter"
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

export default OfferLetterStep;
