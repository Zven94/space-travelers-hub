import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import logoPlanet from '../assets/image/logo-planet.png';

export default function Navbar() {
  return (
    <main className="">
      <Nav className="nav-header justify-content-around ms-auto">
        <Container>
          <Row>
            <Col className="d-flex flex-row aling-item-center text-center">
              <img src={logoPlanet} className="nav-logoPlanet" alt="logoPlanet" />
              <h2 className="m-0 pt-1">Space Traveler`s Hub</h2>
            </Col>
            <Col className="d-flex flex-row aling-item-center justify-content-around">
              <NavLink to="/" className="text-decoration-none"> Rockets </NavLink>
              <NavLink to="/missions" className="text-decoration-none"> Missions</NavLink>
              <NavLink to="/profile" className="text-decoration-none">My Profile</NavLink>
            </Col>
          </Row>
        </Container>
      </Nav>
    </main>
  );
}
