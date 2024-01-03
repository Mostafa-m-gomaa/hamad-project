import StepState from "./StepState";

const DoneStep = ({ state }) => {
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
