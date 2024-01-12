import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import { useTranslation } from "react-i18next";

const ContractStep = ({ details, id, state }) => {
  const { contract } = details;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoader, route } = useContext(AppContext);
  const [file, setFile] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("signedContract", file);
    setLoader(true);
    fetch(`${route}/progress/uploadSignedContract/${id}`, {
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
          <h2>{t("signContract")}</h2>
          <p>{t("contractInstructions")}</p>
          <div>
            <button
              onClick={() => {
                window.open(contract);
              }}
              disabled={contract == null}
            >
              {t("downloadContract")}
            </button>
            <button
              disabled={contract == null}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {t("uploadSignedContract")}
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
        <h2>{t("uploadSignedContractInstructions")}</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="signedContact">{t("signedContractLabel")}</label>
          <input
            type="file"
            id="signedContact"
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

export default ContractStep;
