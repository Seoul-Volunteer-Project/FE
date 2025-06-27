import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SupportBanner from "./components/SupportBanner";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SupportBanner />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
