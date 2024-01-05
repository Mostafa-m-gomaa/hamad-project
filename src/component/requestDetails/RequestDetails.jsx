import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";
import "./requesDetails.css";
import ContractStep from "./steps/ContractStep";
import FeesStep from "./steps/FeesStep";
import OfferLetterStep from "./steps/OfferLetterStep";
import MohereStep from "./steps/MoherStep";
import { getRequestStateOrder } from "../../actions/getRequestStateOrder";
import GetOfferLetter from "./steps/GetOfferLetter";
import VisaFees from "./steps/VisaFees";
import EMGSStep from "./steps/EMGSStep";
import Eval from "./steps/Eval";
import RegistrationFees from "./steps/RegistrationFees";
import FinalAcceptaion from "./steps/FinalAcceptaion";
import TicketStep from "./steps/TicketStep";
import ApplayVisaStep from "./steps/ApplayVisaStep";
import AirportPickUp from "./steps/AirportPickUp";
import DoneStep from "./steps/DoneStep";
import Orders from "./Orders";
import MohereApproval from "./steps/MohereApproval";
const RequestDetails = () => {
  const { setLoader, route } = useContext(AppContext);
  const [requestDetails, setRequestDetails] = useState({});
  const [request, setRequest] = useState({});
  const [user, setUser] = useState({});

  const id = useParams().id;

  useEffect(() => {
    fetch(`${route}/users/getMe`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        if (data.data.type === "Bachelor") {
          fetch(`${route}/bachelor/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data) {
                setRequest(data.data);
              }
            });
        } else if (data.data.type === "Master") {
          fetch(`${route}/master/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data) {
                setRequest(data.data);
              }
            });
        } else if (data.data.type === "phd") {
          fetch(`${route}/phd/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.data) {
                setRequest(data.data);
              }
            });
        }
      })
      .catch((err) => console.log(err));
  }, [route]);
  useEffect(() => {
    if (request.requestDocId) {
      fetch(`${route}/crm/reqDoc/${request.requestDocId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data) {
            setRequestDetails(data.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [request, route]);
  const order = getRequestStateOrder(request.currentStep);
  const getStepState = (current) => {
    let state = "late";
    if (order === current) state = "current";
    if (current < order) state = "done";
    return state;
  };
  // ss
  return (
    <>
      <div className="timeline container">
        <h2>Current state of step : {request.currentStep}</h2>
        <div className="timeline-content">
          <ContractStep
            state={getStepState(0)}
            details={requestDetails}
            id={id}
          />
          <FeesStep state={getStepState(1)} details={requestDetails} id={id} />
          <GetOfferLetter state={getStepState(2)} details={requestDetails} />
          <OfferLetterStep
            id={id}
            state={getStepState(3)}
            details={requestDetails}
          />
          <MohereStep id={id} state={getStepState(4)} />
          <MohereApproval
            details={requestDetails}
            id={id}
            state={getStepState(5)}
          />
          <Eval details={requestDetails} id={id} state={getStepState(6)} />
          <VisaFees id={id} state={getStepState(7)} />
          <EMGSStep state={getStepState(8)} details={requestDetails} />
          <RegistrationFees state={getStepState(9)} id={id} />
          <FinalAcceptaion state={getStepState(10)} details={requestDetails} />
          <TicketStep state={getStepState(11)} id={id} />
          <ApplayVisaStep state={getStepState(12)} id={id} />
          <AirportPickUp state={getStepState(13)} />
          <DoneStep state={getStepState(14)} />
        </div>
        <Orders myData={user} />
      </div>
    </>
  );
};

export default RequestDetails;
