import React from "react";
import Container from "react-bootstrap/Container";

const Layout = (props) => (
  <Container className="layout mt-2 mb-4 p-0">{props.children}</Container>
);

export default Layout;
