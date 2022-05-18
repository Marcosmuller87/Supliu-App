import React from "react";
import "./Home.css";
import { Container, Row, Col } from "react-bootstrap";
import Album from "./Album";
import Input from "../components/Input";
import SearchBtn from "../components/SearchBtn";

const Home = () => {
  return (
    <>
      <Container className="home">
        <Row className="p-2">
          <Col lg="8" xl="10" className="pe-0">
            <Input />
          </Col>
          <Col lg="2" className="d-flex align-items-center">
            <SearchBtn />
          </Col>
        </Row>
        <Row>
          <Album />
        </Row>
      </Container>
    </>
  );
};

export default Home;
