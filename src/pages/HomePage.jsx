import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import BookCard from "../components/BookCard";
import { CardGroup } from "react-bootstrap";

const HomePage = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.getListingData().then((book) => setBooks(book.docs));
  }, []);
  return (
    <div className='container'>
      <CardGroup>
        {books.map((book) => {
          console.log(book);
          return (
            <BookCard
              book={book.data()}
              key={book.id}
              id={book.id}
            />
          );
        })}
      </CardGroup>
    </div>
  );
};

export default HomePage;
