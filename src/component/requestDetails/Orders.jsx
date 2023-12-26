import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";

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
  return (
    <div className="orders">
      <h2>All request orders</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Paid</th>
              <th>total price</th>
              <th>order type </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.isPaid ? "yes" : "no"}</td>
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
