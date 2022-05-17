import React from "react";
import { Container, Table } from "react-bootstrap";
import loadData from "../actions";

const Album = (props) => (
  <Container className="mt-2 mb-4 p-2">
    <h1>Album: {loadData().album}</h1>
    <Table>
      <tr></tr>
    </Table>
  </Container>
);

export default Album;
