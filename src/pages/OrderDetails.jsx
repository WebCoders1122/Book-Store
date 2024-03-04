import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import OrderCard from "../components/OrderCard";

const OrderDetails = () => {
  // for book id
  const params = useParams();
  console.log(params.bookId);

  //orders
  const [orders, setOrders] = useState([]);

  //firebase context
  const firebase = useFirebase();

  //getting orders
  useEffect(() => {
    firebase
      .getOrdersByID(params.bookId)
      .then((orders) => setOrders(orders.docs));
  }, []);
  return (
    <div className='container'>
      <h2>Total Orders : {orders.length}</h2>
      <div style={{ display: "flex", minWidth: "200px", gap: "10px" }}>
        {orders != [] &&
          orders.map((order) => {
            return (
              <OrderCard
                data={order.data()}
                id={order.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
