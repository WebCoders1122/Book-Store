import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/BookCard";
import { CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.getListingData().then((book) => setBooks(book.docs));
  }, []);
  if (books.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div
        className='container d-flex flex-wrap'
        style={{ display: "flex", flexWrap: "wrap" }}>
        <CardGroup>
          {books.map((book) => {
            return (
              <BookCard
                book={book.data()}
                key={book.id}
                id={book.id}
                link={"/books/" + book.id}
              />
            );
          })}
        </CardGroup>
      </div>
    );
  }
};

export default HomePage;
