import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";
import { Button } from "react-bootstrap";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [URL, setURL] = useState("");
  const firebase = useFirebase();
  const params = useParams();
  useEffect(() => {
    let result = firebase
      .getDocByID(params.bookId)
      .then((book) => setBook(book.data()));
  }, []);
  useEffect(() => {
    book
      ? firebase.getImageURL(book.coverURL).then((url) => setURL(url))
      : null;
    console.log(book);
  }, [book]);
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
        <Button variant='success'>Buy Now</Button>
      </div>
    );
  }
};

export default BookDetails;
