import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { useTranslation } from "react-i18next";

const Orders = ({ myData }) => {
  const [orders, setOrders] = useState([]);
  const { route } = useContext(AppContext);
  const params = useParams();
  useEffect(() => {
    if (myData?.type) {
      fetch(`${route}/order/${params.id}/${myData?.type}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setOrders(data.requestOrders))
        .catch((err) => console.log(err));
    }
  }, [myData]);
  const { t } = useTranslation();
  return (
    <div className="orders">
      <h2>{t("allRequestOrders")}</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>{t("paid")}</th>
              <th>{t("totalPrice")}</th>
              <th>{t("orderType")}</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id}>
                <td>{order.isPaid ? t("yes") : t("no")}</td>
                <td>{order.totalOrderPrice}</td>
                <td>{order.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
