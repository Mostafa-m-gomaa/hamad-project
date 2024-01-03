import { useContext } from "react";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";

const VisaFees = ({ id, state }) => {
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

  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />

          <h2>Pay Fees of Visa</h2>
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

export default VisaFees;
