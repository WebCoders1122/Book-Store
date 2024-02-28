import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFirebase } from "../context/Firebase";

const BookCard = ({ book }) => {
  const firebase = useFirebase();
  const [imgURL, setImgURL] = useState(null);
  useEffect(() => {
    firebase.getImageURL(book.coverURL).then((url) => setImgURL(url));
  }, []);
  return (
    <Card
      style={{ width: "18rem" }}
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
        <Button variant='primary'>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
