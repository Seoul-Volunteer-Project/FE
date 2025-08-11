import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GlobalSidebarLayout from "./layouts/GlobalSidebarLayout";
import ScrollToTop from "./components/ScrollToTop";
import Intro from "./pages/about/Intro";
import Goal from "./pages/about/Goal";
import Housing from "./pages/youthInfo/Housing";
import Education from "./pages/youthInfo/Education";
import Finance from "./pages/youthInfo/Finance";
import Policy from "./pages/youthInfo/Policy";
import Supports from "./pages/supports/Supports";
import Custom from "./pages/supports/Custom";
import Community from "./pages/community/Community";
import Gallery from "./pages/community/Gallery";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PostCreateRouter from "./pages/posts/PostCreateRouter";

// 메뉴 정의
const aboutMenu = [
  { label: "기관 소개", path: "/about/intro" },
  { label: "함께하기", path: "/about/goal" },
];

const infoMenu = [
  { label: "주거 정보", path: "/boards/housing" },
  { label: "교육 정보", path: "/boards/education" },
  { label: "금융 정보", path: "/boards/finance" },
  { label: "정책 정보", path: "/boards/policy" },
];

const supportMenu = [
  { label: "전체 사업", path: "/boards/supports" },
  { label: "맞춤 사업 찾기", path: "/boards/custom" },
];

const communityMenu = [
  { label: "게시판", path: "/boards/community" },
  { label: "사진첩", path: "/boards/gallery" },
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Auth 페이지 라우팅 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* 소개 페이지 라우팅 */}
            <Route
              path="/about"
              element={<GlobalSidebarLayout menuItems={aboutMenu} />}
            >
              <Route index element={<Intro />} />
              <Route path="intro" element={<Intro />} />
              <Route path="goal" element={<Goal />} />
            </Route>

            {/* 청년정보 페이지 라우팅 */}
            <Route
              path="/boards"
              element={<GlobalSidebarLayout menuItems={infoMenu} />}
            >
              <Route index element={<Housing />} />
              <Route path="housing" element={<Housing />} />
              <Route path="education" element={<Education />} />
              <Route path="finance" element={<Finance />} />
              <Route path="policy" element={<Policy />} />
            </Route>

            {/* 지원사업 페이지 라우팅 */}
            <Route
              path="/boards"
              element={<GlobalSidebarLayout menuItems={supportMenu} />}
            >
              <Route index element={<Supports />} />
              <Route path="supports" element={<Supports />} />
              <Route path="custom" element={<Custom />} />
            </Route>

            {/* 소통공간 페이지 라우팅 */}
            <Route
              path="/boards"
              element={<GlobalSidebarLayout menuItems={communityMenu} />}
            >
              <Route path="community" element={<Community />} />
              <Route path="gallery" element={<Gallery />} />
            </Route>

            {/* 게시물 작성 페이지 라우팅 */}
            <Route
              path="/boards/:boardType/post"
              element={<PostCreateRouter />}
            />

            {/* 커스텀 페이지 (맞춤 사업 찾기 등) */}
            <Route
              path="/boards/custom"
              element={<div>맞춤사업 찾기 페이지</div>}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
