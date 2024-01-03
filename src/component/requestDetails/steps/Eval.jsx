import StepState from "./StepState";

const Eval = ({ id, state, details }) => {
  const { EVAL } = details;
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>Download EVAL</h2>
          <p>wait until we get EVAL and upload it</p>
          <div>
            <button
              disabled={!EVAL}
              onClick={() => {
                // setIsModalOpen(true);
                window.open(EVAL);
              }}
            >
              download EVAL
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default Eval;
