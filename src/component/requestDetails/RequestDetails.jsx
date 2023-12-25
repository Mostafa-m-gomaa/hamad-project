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
import RegistrationFees from "./steps/RegistrationFees";
import FinalAcceptaion from "./steps/FinalAcceptaion";
import TicketStep from "./steps/TicketStep";
import ApplayVisaStep from "./steps/ApplayVisaStep";
import AirportPickUp from "./steps/AirportPickUp";
import DoneStep from "./steps/DoneStep";
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
          if (data.data) {
            setRequestDetails(data.data);
          }
        });
    }
  }, [request, route]);
  const order = getRequestStateOrder(request.currentStep);
  console.log(requestDetails);
  return (
    <>
      <div className="timeline container">
        <h2>Current state of step : {request.currentStep}</h2>
        <div className="timeline-content">
          <ContractStep
            currentStepIndx={order}
            details={requestDetails}
            id={id}
          />
          <FeesStep currentStepIndx={order} details={requestDetails} id={id} />
          <GetOfferLetter currentStepIndx={order} details={requestDetails} />
          <OfferLetterStep
            id={id}
            currentStepIndx={order}
            details={requestDetails}
          />
          <MohereStep id={id} myData={user} currentStepIndx={order} />
          <VisaFees id={id} currentStepIndx={order} />
          <EMGSStep currentStepIndx={order} />
          <RegistrationFees currentStepIndx={order} id={id} />
          <FinalAcceptaion currentStepIndx={order} details={requestDetails} />
          <TicketStep currentStepIndx={order} id={id} />
          <ApplayVisaStep currentStepIndx={order} id={id} />
          <AirportPickUp currentStepIndx={order} />
          <DoneStep currentStepIndx={order} />
        </div>
      </div>
    </>
  );
};

export default RequestDetails;
