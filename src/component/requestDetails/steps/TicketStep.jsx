import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

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

  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>Upload ticket</h2>
          <p>Upload your ticket</p>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Upload Ticket
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
        <h2>Upload Ticket</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="myTicket">Ticket :</label>
          <input
            type="file"
            id="myTicket"
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

export default TicketStep;
