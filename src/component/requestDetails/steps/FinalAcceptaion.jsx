import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const FinalAcceptaion = ({ state, details }) => {
  const { t } = useTranslation();
  const { finalAcceptanceLetter } = details;

  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("gettingFinalAcceptance")}</h2>
          <p>{t("finalAcceptanceInstructions")}</p>
          <div>
            <button
              onClick={() => {
                window.open(finalAcceptanceLetter);
              }}
              disabled={finalAcceptanceLetter == null}
            >
              {t("downloadFinalAcceptanceLetter")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};
export default FinalAcceptaion;
