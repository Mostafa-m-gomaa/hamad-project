import StepState from "./StepState";

const EMGSStep = ({ currentStepIndx }) => {
  let state = "late";
  if (currentStepIndx === 6) state = "current";
  if (currentStepIndx > 6) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>EMGS Approval</h2>
          <p>wait until we get EMGS Approval</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default EMGSStep;
