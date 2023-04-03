import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Nosotros from '../src/pages/nosotros'
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/nosotros" element={<Nosotros />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
);
