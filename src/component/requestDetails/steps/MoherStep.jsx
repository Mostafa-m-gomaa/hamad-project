import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import { useTranslation } from "react-i18next";

const MohereStep = ({ id, state }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoader, route } = useContext(AppContext);
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("MOHERE", file);
    setLoader(true);
    fetch(`${route}/progress/uploadMOHERE/${id}`, {
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
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("uploadMohere")}</h2>
          <p>{t("mohereInstructions")}</p>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("uploadMohere")}
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
        <h2>{t("uploadMohereInstructions")}</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="mohere">{t("mohereLabel")}</label>
          <input
            type="file"
            id="mohere"
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

export default MohereStep;
