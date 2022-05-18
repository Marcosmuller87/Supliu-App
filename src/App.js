import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Componentes
import Layout from "./components/Layout";
import Navigbar from "./components/Navigbar";
// Pages
import Home from "./pages/Home";
import AddAlbum from "./pages/AddAlbum";
import AddTrack from "./pages/AddTrack";

const App = () => {
  return (
    <>
      <Layout>
        <Navigbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addAlbum" element={<AddAlbum />} />
            <Route path="/addTrack" element={<AddTrack />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
};

export default App;
