import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

const ContractStep = ({ details, id, currentStepIndx }) => {
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
  let state = "late";
  if (currentStepIndx === 0) state = "current";
  if (currentStepIndx > 0) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>Sign Contract</h2>
          <p>
            Wait until the contract is uploaded by our admins and sign it and
            reupload the signed contact
          </p>
          <div>
            <button
              onClick={() => {
                window.open(contract);
              }}
              disabled={contract == null}
            >
              Download Contact
            </button>
            <button
              disabled={contract == null}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Upload signed contract
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
        <h2>Upload contact after you sign in</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="signedContact">Signed contract :*</label>
          <input
            type="file"
            id="signedContact"
            required
            accept="application/pdf"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button className="submit">Upload</button>
        </form>
      </Modal>
    </>
  );
};

export default ContractStep;
