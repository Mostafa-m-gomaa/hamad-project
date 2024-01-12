import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import { AppContext } from "../../../App";
import { toast } from "react-toastify";
import StepState from "./StepState";
import { useTranslation } from "react-i18next";

const ApplayVisaStep = ({ id, state }) => {
  const { t } = useTranslation();
  const { setLoader, route } = useContext(AppContext);
  const onSubmit = () => {
    setLoader(true);
    fetch(`${route}/progress/applyForVisa/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
        if (err.message) {
          toast.error(err.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      <div className="left">
        <div className="text">
          <StepState state={state} />
          <h2>{t("applyForVisa")}</h2>
          <div>
            <button onClick={onSubmit}>{t("apply")}</button>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </>
  );
};

export default ApplayVisaStep;
