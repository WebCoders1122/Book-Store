import React from "react";
import { Card } from "react-bootstrap";

const OrderCard = ({ data, id }) => {
  return (
    <Card
      bg='success'
      key={id}
      // text={variant.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem", color: "white" }}
      className='mb-2'>
      <Card.Header>Ordered By : {data.userName}</Card.Header>
      <Card.Body>
        <Card.Title>Order ID : {id}</Card.Title>
        <Card.Text>
          <p>
            <b>Quantity: </b>
            {data.quantity}
          </p>
          <p>
            <b>Customer Email: </b>
            {data.userEmail}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OrderCard;
