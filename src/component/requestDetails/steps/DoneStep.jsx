import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const DoneStep = ({ state }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("weFinishedOurJob")}</h2>
          <p>{t("congratulationsMessage")}</p>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default DoneStep;
