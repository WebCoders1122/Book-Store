import { useState, useEffect } from "react";

//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// context
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //    States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   firebase context
  const firebase = useFirebase();

  //FOR LOG in actions
  const navigate = useNavigate();
  useEffect(() => {
    firebase.isSignedin ? navigate("/") : null;
  }, [firebase, navigate]);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Creating user...");
    await firebase.createUser(email, password);
    console.log("Creating user Success...");
  };

  //   Register component
  return (
    <div className='container mt-4'>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group
          className='mb-3'
          controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
