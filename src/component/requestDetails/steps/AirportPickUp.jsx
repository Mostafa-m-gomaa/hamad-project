import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const AirportPickUp = ({ state }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>{t("arrangingAirportPickup")}</h2>
          <p>{t("airportPickupInstructions")}</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default AirportPickUp;
