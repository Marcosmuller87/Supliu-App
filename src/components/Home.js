import React from "react";
import "./Home.css";
import { Container, Form } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="TextInput">
              Digite uma palavra chave
            </Form.Label>
            <Form.Control id="TextInput" type="light" />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Home;
