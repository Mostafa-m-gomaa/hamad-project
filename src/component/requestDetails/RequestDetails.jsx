import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useParams } from "react-router-dom";

const RequestDetails = () => {
  const { setLoader, route } = useContext(AppContext);
  const [request, setRequest] = useState({});
  const [user, setUser] = useState({});
  const [couter, setCounter] = useState(0);
  const id = useParams().id;
  useEffect(() => {
    fetch(`${route}/users/getMe`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => console.log(err));
  }, [route]);
  useEffect(() => {
    if (user?.type) {
      let type = "bechlor";
      if (user?.type === "Bachelor") type = "bechlor";
      else if (user?.type === "Master") type = "master";
      else if (user?.type === "phd") type = "phd";
      console.log(type);
      fetch(`${route}/${type}/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.data) {
            setRequest(data.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user, route, id, couter]);
  return (
    <>
      <div className="container" style={{ marginTop: "65px" }}>
        <button onClick={() => setCounter((prev) => prev + 1)}>{couter}</button>
      </div>
    </>
  );
};

export default RequestDetails;
