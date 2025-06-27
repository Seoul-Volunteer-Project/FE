import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Community from "./pages/community/Community";
import SupportBoard from "./pages/support/SupportBoard";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/support" element={<SupportBoard />} />
            <Route path="/community/*" element={<Community />} />
            {/* 필요한 다른 페이지들 추가 가능 */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
