import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Album from "./components/Album";
import Layout from "./components/Layout";
import Navigbar from "./components/Navigbar";

const App = () => {
  return (
    <>
      <Layout>
        <Navigbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/album" element={<Album />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
};

export default App;
