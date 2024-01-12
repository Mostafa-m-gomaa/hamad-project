import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const Eval = ({ id, state, details }) => {
  const { EVAL } = details;
  const { t } = useTranslation();
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("downloadEval")}</h2>
          <p>{t("evalInstructions")}</p>
          <div>
            <button
              disabled={!EVAL}
              onClick={() => {
                window.open(EVAL);
              }}
            >
              {t("downloadEvalButton")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default Eval;
