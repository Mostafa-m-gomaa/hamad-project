import StepState from "./StepState";

const DoneStep = ({ currentStepIndx }) => {
  let state = "late";
  if (currentStepIndx === 12) state = "current";
  if (currentStepIndx > 12) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>We Finished our job</h2>
          <p>Congratulation we Finished our job </p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default DoneStep;
