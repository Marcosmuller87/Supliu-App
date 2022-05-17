import React from "react";
import "./Home.css";
import { Container, Form, Row, Col, Button, Table } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row className="p-2">
          <Col lg="8" xl="10" className="pe-0">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="TextInput">
                  Digite uma palavra chave
                </Form.Label>
                <Form.Control
                  rounded="true"
                  id="TextInput"
                  type="light"
                  className="rounded-pill me-0"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg="2" className="d-flex align-items-center">
            <Button
              variant="primary"
              className=" home-btn me-2 px-5 py-2 rounded-pill fs-6 mt-lg-3"
            >
              Procurar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
