import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import newlogo from "../../assets/newlogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src={newlogo} width="50" height="50" alt="Logo" />
              </a>
              <h5 className="head-title">YOUR-O-PLANNER</h5>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="text-right">
            <div className="contact-number">
              <h5>+1 561-900-****</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
