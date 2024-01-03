import StepState from "./StepState";

const FinalAcceptaion = ({ state }) => {
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
