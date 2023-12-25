import { FaRegCircleCheck } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";

const StepState = ({ state }) => {
  return (
    <>
      {state === "done" && (
        <div className="done">
          <FaRegCircleCheck />
        </div>
      )}
      {state === "late" && (
        <div className="late">
          <FaSpinner />
        </div>
      )}
    </>
  );
};

export default StepState;
