import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import Album from "./Album";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Form />
        <Album />
      </Container>
    </>
  );
};

export default Home;
