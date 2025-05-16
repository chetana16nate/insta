import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';


const Home = () => {
  // const navigate=useNavigate();
  return (
  <div> <h1>Welcome to my App</h1>
      <div className='d-flex justify-content-center gap-3 mt-4'>
     <Button variant="success" onClick={() => navigate('/login')}>Click Here to Login</Button>
    <Button variant="primary" onClick={() => navigate('/Register')}>Click Here to Register</Button>
    </div> 
  )
  }
  

export default Home
