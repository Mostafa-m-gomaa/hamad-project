import { useContext } from "react";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

const RegistrationFees = ({ id, currentStepIndx }) => {
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
  let state = "late";
  if (currentStepIndx === 7) state = "current";
  if (currentStepIndx > 7) state = "done";

  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>Pay Fees of Registration</h2>
          <p>Wait until put the amount of mony then pay it</p>
          <div>
            <button onClick={onSubmit}>Pay</button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default RegistrationFees;
