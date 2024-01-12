import { useTranslation } from "react-i18next";
import StepState from "./StepState";

const MohereApproval = ({ id, state, details }) => {
  const { t } = useTranslation();
  const { MOHEREApproval } = details;
  return (
    <>
      <div className="right">
        <div className="text">
          <StepState state={state} />
          <h2>{t("downloadMohereApproval")}</h2>
          <p>{t("mohereApprovalInstructions")}</p>
          <div>
            <button
              disabled={!MOHEREApproval}
              onClick={() => {
                // setIsModalOpen(true);
                window.open(MOHEREApproval);
              }}
            >
              {t("downloadMohereApprovalButton")}
            </button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default MohereApproval;
