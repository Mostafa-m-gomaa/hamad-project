import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

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

  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>Sign offer letter</h2>
          <p>sign offer letter and reupload the signed contact</p>
          <div>
            <button
              disabled={offerLetter == null}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Upload signed offer letter
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
        <h2>Upload offer letter after you sign in</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="offerLetter">Signed offer letter :*</label>
          <input
            type="file"
            id="offerLetter"
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

export default OfferLetterStep;
