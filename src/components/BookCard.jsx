import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, id, link }) => {
  const firebase = useFirebase();
  const [imgURL, setImgURL] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    firebase.getImageURL(book.coverURL).then((url) => setImgURL(url));
  }, []);
  return (
    <Card
      style={{ width: "18rem", minWidth: "30%" }}
      className='m-5'>
      <Card.Img
        variant='top'
        src={imgURL}
      />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          Published by <b>{book.userName}</b> <br />
          Price RS: <b>{book.price}</b> only.
        </Card.Text>
        <Button
          variant='success'
          onClick={() => navigate(link)}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
