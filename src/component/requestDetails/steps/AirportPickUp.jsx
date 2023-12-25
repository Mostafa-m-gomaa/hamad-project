import StepState from "./StepState";

const AirportPickUp = ({ currentStepIndx }) => {
  let state = "late";
  if (currentStepIndx === 11) state = "current";
  if (currentStepIndx > 11) state = "done";
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>Arranging airport pickup</h2>
          <p>
            wait until we arrange the airport pickup for you and we will send
          </p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default AirportPickUp;
