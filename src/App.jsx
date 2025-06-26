import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.css";
import SupportBanner from "./components/SupportBanner";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <SupportBanner />
      <Home />
    </div>
  );
}

export default App;
