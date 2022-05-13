import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Navigbar.css";

const Navigbar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt="logo"
            src={require("../assets/logo.png")}
            className="img-fluid p-2"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Discografia</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigbar;
