import StepState from "./StepState";

const AirportPickUp = ({ state }) => {
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
