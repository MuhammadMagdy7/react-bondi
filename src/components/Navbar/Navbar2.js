import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';




const Navbar2 = () => {
  return (
    <div>
        <Navbar variant='white' expand="lg" className="text-white fixed-top">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"><i class="fa-solid fa-sliders"></i></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to='/'>
          
            <Nav.Link href="#link" className='px-3'>Home</Nav.Link>
          
          </Link>
          
          <Nav.Link href="#link" className='px-3'>Services</Nav.Link>
          
          <Nav.Link href="#link" className='px-3'>About</Nav.Link>
          <Nav.Link href="#link" className='px-3'>Portfolio</Nav.Link>
          <Nav.Link href="#link" className='px-3'>Contant</Nav.Link>
          
          <div className='d-none d-lg-block search p-2'><i class="ms-2 fa-solid fa-magnifying-glass"></i></div>
      
        <Link to='/login' ><button className='btn btn-danger px-3 ms-2'>Login</button></Link>
      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Navbar2