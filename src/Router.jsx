import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import data from "./logements.json";
import "./styles/pages/styles.css";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./components/Error";

import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element= {<Error/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
