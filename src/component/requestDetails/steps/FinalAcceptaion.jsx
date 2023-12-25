import StepState from "./StepState";

const FinalAcceptaion = ({ currentStepIndx }) => {
  let state = "late";
  if (currentStepIndx === 8) state = "current";
  if (currentStepIndx > 8) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>Getting final acceptance letter</h2>
          <p>wait until we get final acceptance letter</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default FinalAcceptaion;
