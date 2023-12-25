import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

const MohereStep = ({ myData, id, currentStepIndx }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setLoader, route } = useContext(AppContext);
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("MOHERE", file);
    setLoader(true);
    fetch(`${route}/progress/uploadMOHERE/${id}/${myData?.type}`, {
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
  let state = "late";
  if (currentStepIndx === 4) state = "current";
  if (currentStepIndx > 4) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>Upload mohere</h2>
          <p>Upload your mohere</p>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Upload
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
        <h2>Upload Mohere</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="mohereFile">Mohere :</label>
          <input
            type="file"
            id="mohereFile"
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

export default MohereStep;
