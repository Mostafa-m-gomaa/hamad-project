import StepState from "./StepState";

const GetOfferLetter = ({ details, state }) => {
  const { offerLetter } = details;

  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />

          <h2>Receive offer letter</h2>
          <p>Wait until the offer letter is uploaded by our admins</p>
          <div>
            <button
              onClick={() => {
                window.open(offerLetter);
              }}
              disabled={offerLetter == null}
            >
              Download offer letter
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default GetOfferLetter;
