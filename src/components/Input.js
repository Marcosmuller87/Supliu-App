import React from "react";
import { Form } from "react-bootstrap";

const Input = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="TextInput">Digite uma palavra chave</Form.Label>
        <Form.Control
          rounded="true"
          id="TextInput"
          type="light"
          className="rounded-pill me-0"
        />
      </Form.Group>
    </Form>
  );
};

export default Input;
