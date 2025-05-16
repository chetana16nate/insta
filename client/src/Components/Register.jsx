import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {useNavigate} from 'react-router-dom'

function Register() {
  const Navigate= useNavigate()
  const handleRegister = (e) => {
    e.preventDefault(); 
    Navigate('/login'); // safe to navigate now
  };
  return (
    <Form>
      <Form.Group className="plus" controlId="formBasicUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName" />
        
      </Form.Group>

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
      <button className="btn btn-success" onClick={handleRegister}>
        Register
      </button>
       
    </Form>
  );
}
      

export default Register;