import React from "react";
import Container from "react-bootstrap/Container";
import "./Layout.css";

const Layout = (props) => (
  <Container className="layout mt-2 mb-4 bg-light p-0">
    {props.children}
  </Container>
);

export default Layout;
