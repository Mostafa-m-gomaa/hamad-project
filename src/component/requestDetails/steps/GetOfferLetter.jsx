import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const GetOfferLetter = ({ details, state }) => {
  const { offerLetter } = details;
  const { t } = useTranslation();
  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("receiveOfferLetter")}</h2>
          <p>{t("offerLetterInstructions")}</p>
          <div>
            <button
              onClick={() => {
                window.open(offerLetter);
              }}
              disabled={offerLetter == null}
            >
              {t("downloadOfferLetter")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default GetOfferLetter;
