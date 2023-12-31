import StepState from "./StepState";

const EMGSStep = ({ state, details }) => {
  const { EMGS } = details;
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>EMGS Approval</h2>
          <p>wait until we get EMGS Approval</p>
          <div>
            <button
              disabled={!EMGS}
              onClick={() => {
                // setIsModalOpen(true);
                window.open(EMGS);
              }}
            >
              download EMGS
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default EMGSStep;
