import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//bootstrap imports
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const BookDetails = () => {
  //book details and url
  const [book, setBook] = useState(null);
  const [URL, setURL] = useState("");

  //firebase hook and parameters by react router dom
  const firebase = useFirebase();
  const params = useParams();

  //navigation to home
  const navigate = useNavigate();

  // for getting book details
  useEffect(() => {
    let result = firebase
      .getDocByID(params.bookId)
      .then((book) => setBook(book.data()));
  }, []);

  // for getting book url
  useEffect(() => {
    book
      ? firebase.getImageURL(book.coverURL).then((url) => setURL(url))
      : null;
  }, [book]);

  // handeling orders
  const [quantity, setQuantity] = useState(0);
  const handleOrder = () => {
    let result = firebase.placeBookOrder(params.bookId, quantity);
    result.then(() => {
      alert("Your Order is Placed for " + quantity + " books.");
      setTimeout(() => {
        navigate("/");
      }, 100);
    });
  };

  // conditional rendering of book detail page
  if (book === null) {
    return <h1>leading..</h1>;
  } else {
    return (
      <div className='container m-5'>
        <h1 className=' m-2'>{book.name}</h1>
        <img
          src={URL}
          alt={book.name}
          width='500'
          style={{ borderRadius: "5px" }}
        />
        <h3 className='text-primary m-1 mb-3'>Book Details:</h3>
        <p>
          <b>ISBN: </b>
          {book.isbn}
        </p>
        <p>
          <b>Price: </b>
          {book.price}
        </p>
        <h3 className='text-primary m-1 mb-3'>Owner Details:</h3>
        {/* <img
          src={book.userPhoto}
          alt={book.userName}
        /> */}
        <p>
          <b>Name: </b>
          {book.userName}
        </p>
        <p>
          <b>Email: </b>
          {book.userEmail}
        </p>
        {/* for quantity */}
        <Form.Group
          className='mb-3'
          controlId='forQuantity'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Quantity'
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          />
        </Form.Group>
        <Button
          variant='success'
          onClick={handleOrder}>
          Buy Now
        </Button>
      </div>
    );
  }
};

export default BookDetails;
