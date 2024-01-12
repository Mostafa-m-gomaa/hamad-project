import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const EMGSStep = ({ state, details }) => {
  const { t } = useTranslation();
  const { EMGS } = details;
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>{t("emgsApproval")}</h2>
          <p>{t("emgsApprovalInstructions")}</p>
          <div>
            <button
              disabled={!EMGS}
              onClick={() => {
                window.open(EMGS);
              }}
            >
              {t("downloadEmgs")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default EMGSStep;
