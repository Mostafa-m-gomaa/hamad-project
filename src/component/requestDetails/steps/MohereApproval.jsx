import StepState from "./StepState";

const MohereApproval = ({ id, state, details }) => {
  const { MOHEREApproval } = details;
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>Download mohere approval</h2>
          <p>wait until we get mohere approval and upload it</p>
          <div>
            <button
              disabled={!MOHEREApproval}
              onClick={() => {
                // setIsModalOpen(true);
                window.open(MOHEREApproval);
              }}
            >
              download mohere approval
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default MohereApproval;
