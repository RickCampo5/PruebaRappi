import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import NestedDropdown from './NestedDropdown';
import './styles/Navbar.css';

function Greeting(props) {
  if(props.isLogged) {
    return (
      <NavDropdown title={`Bienvenido ${props.userData.username}`} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Mi Cuenta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Mis pedidos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Mis notificaciones</NavDropdown.Item>
        <LogInOut isLogged={props.isLogged} userData={props.userData}/>
      </NavDropdown>
    )
  }
  return (
    <NavDropdown.Item href="#action/3.1">Bienvenido</NavDropdown.Item>
  )
}

function LogInOut(props) {
  if(props.isLogged) {
    return (
      <NavDropdown.Item href="#action/3.1">Cerrar Sesión</NavDropdown.Item>
    )
  }
  return (
    <NavDropdown.Item href="#action/3.1">Iniciar Sesión</NavDropdown.Item>
  )
}

class NavbarApp extends React.Component {  
  render() {
    const { log, userData, categories } = this.props

    return(
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            El Baratón 
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <NestedDropdown categories={categories} />
            <Greeting isLogged={log} userData={userData}/>
            <Nav.Link>
              <Link to="/cart">Carrito</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarApp