import StepState from "./StepState";

const GetOfferLetter = ({ details, currentStepIndx }) => {
  const { offerLetter } = details;
  let state = "late";
  if (currentStepIndx === 2) state = "current";
  if (currentStepIndx > 2) state = "done";
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />

          <h2>Receive offer letter</h2>
          <p>Wait until the offer letter is uploaded by our admins</p>
          <div>
            <button disabled={offerLetter == null}>Download</button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default GetOfferLetter;
