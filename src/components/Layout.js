import React from "react";
import Container from "react-bootstrap/Container";

const Layout = (props) => (
  <Container className="mt-2 mb-4 bg-light p-0">{props.children}</Container>
);

export default Layout;
