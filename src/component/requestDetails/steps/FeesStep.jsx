import { useContext, useState } from "react";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import Modal from "../../modal/Modal";

const FeesStep = ({ details, state, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const { setLoader, route } = useContext(AppContext);
  const onSubmit = () => {
    setLoader(true);
    fetch(`${route}/progress/checkoutSession/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.session.url) window.open(data.session.url);
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
  const onUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("contractFeesFile", file);
    setLoader(true);
    fetch(`${route}/progress/uploadcontractFeesFile/${id}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(data.message);
        setIsModalOpen(false);
      })
      .catch((err) => {
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

          <h2>Pay Fees of Contract</h2>
          <p>Wait until put the amount of mony then pay it</p>
          <div>
            <button onClick={onSubmit}>Pay</button>
            <span style={{ padding: "20px 0", fontWeight: "bold" }}>Or</span>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Upload fees bill of contract
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
        <h2>Upload fees bill of contract</h2>
        <form onSubmit={onUpload}>
          <label htmlFor="signedContact">Fees bill :*</label>
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

export default FeesStep;
