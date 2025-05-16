import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import { useNavigate } from 'react-router-dom';

function Login() {
  const Navigate=useNavigate
  const handleLogin = (e) => {
    e.preventDefault(); 
    Navigate('/'); // safe to navigate now
  };
  return (
   
    <Form>
      <Form.Group className="plus" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="plus" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="plus" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </Form>
  );

}

export default Login;