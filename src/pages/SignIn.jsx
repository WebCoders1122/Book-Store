import { useEffect, useState } from "react";
//bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// context
import { useFirebase } from "../context/Firebase";
//router
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  //    States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   firebase context
  const firebase = useFirebase();
  // console.log(firebase.isSignedin);

  //FOR LOG in actions
  const navigate = useNavigate();
  useEffect(() => {
    firebase.isSignedin ? navigate("/") : null;
  }, [firebase, navigate]);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing in user...");
    const result = await firebase.signInUser(email, password);
    console.log("Sign in user Success...", result);
  };

  const handleClick = async () => {
    console.log("Signing in with google...");
    const result = await firebase.signInWithGoogle();
    console.log("Signing in with google Success...");
  };

  //   SignIn component
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
          Sign In
        </Button>
      </Form>
      <h3 className='mt-3 mb-3'>OR</h3>
      <Button
        onClick={handleClick}
        variant='danger'>
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
