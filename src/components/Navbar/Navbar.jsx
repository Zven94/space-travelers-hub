import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {
  Col, Container, Nav, Row,
} from 'react-bootstrap';
import logoPlanet from '../assets/image/logo-planet.png';

export default function Navbar() {
  return (
    <main className="d-flex flex-col justify-content-center aling-item-center">
      <Nav className="nav-header justify-content-around border-bottom mb-1">
        <Container>
          <Row className="d-flex justify-content-center aling-item-center">
            <Col className="">
              <div className="d-flex flex-row aling-item-center text-center justify-content-around div-width">
                <img src={logoPlanet} className="nav-logoPlanet" alt="logoPlanet" />
                <h2 className="m-0">Space Traveler`s Hub</h2>
              </div>
            </Col>
            <Col className="d-flex flex-row aling-item-center justify-content-around div-width">
              <div className="d-flex flex-row aling-item-center text-center justify-content-around div-width">
                <NavLink to="/" className="text-decoration-none navlink-border"> Rockets </NavLink>
                <NavLink to="/missions" className="text-decoration-none navlink-border"> Missions</NavLink>
                <NavLink to="/profile" className="text-decoration-none">My Profile</NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </Nav>
    </main>
  );
}
