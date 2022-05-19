import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
// Funcao Slice
import { fetchAllAlbums } from "../redux/slices/albums";

const Input = () => {
  const [form, setForm] = useState("");
  const dispatch = useDispatch();

  return (
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
              value={form}
              className="rounded-pill me-0"
              onChange={(e) => setForm(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col lg="2" className="d-flex align-items-center">
        <Button
          variant="primary"
          className=" home-btn me-2 px-5 py-2 rounded-pill fs-6 mt-lg-3"
          onClick={() => dispatch(fetchAllAlbums(form))}
        >
          Procurar
        </Button>
      </Col>
    </Row>
  );
};

export default Input;
