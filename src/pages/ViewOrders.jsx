import React from "react";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//components
import BookCard from "../components/BookCard";

const ViewOrders = () => {
  //firebase context
  const firebase = useFirebase();

  //for navigation to login page
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/signin");
  };

  //
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (firebase.isSignedin)
      firebase.getBooksByQuery()?.then((res) => setBooks(res.docs));
  }, [firebase]);

  //conditional rendereing
  if (!firebase.isSignedin) {
    return (
      <div className='container'>
        <h1>Please Log in</h1>
        <Button onClick={navigateHandler}>Log in Here</Button>
      </div>
    );
  } else {
    return (
      <div>
        {books.map((book) => {
          return (
            <BookCard
              book={book.data()}
              key={book.id}
              id={book.id}
              link={`/books/orders/${book.id}`}
            />
          );
        })}
      </div>
    );
  }
};

export default ViewOrders;
