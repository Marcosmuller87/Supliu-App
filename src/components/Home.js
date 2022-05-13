import React from "react";
import "./Home.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row className="p-2">
          <Col lg="10">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="TextInput">
                  Digite uma palavra chave
                </Form.Label>
                <Form.Control id="TextInput" type="light" />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="2">
            <Button variant="primary">Procurar</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
