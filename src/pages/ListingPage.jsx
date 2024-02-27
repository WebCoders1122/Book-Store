import { useState } from "react";

//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// context
import { useFirebase } from "../context/Firebase";

const ListingPage = () => {
  //    States
  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [cover, setCover] = useState("");
  const [price, setPrice] = useState("");

  //   firebase context
  const firebase = useFirebase();

  // Functions
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log("Creating user...");
    // await firebase.createUser(email, password);
    // console.log("Creating user Success...");
  };

  //   ListingPage component
  return (
    <div className='container mt-4'>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'>
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Book Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>ISBN Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='ISBN Number'
            onChange={(e) => setIsbn(e.target.value)}
            value={isbn}
          />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>Cover</Form.Label>
          <Form.Control
            type='file'
            onChange={(e) => setCover(e.target.files[0])}
            value={cover}
          />
        </Form.Group>
        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter Price'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'>
          Create Book Listing
        </Button>
      </Form>
    </div>
  );
};

export default ListingPage;
