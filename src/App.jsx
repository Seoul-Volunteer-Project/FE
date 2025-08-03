import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GlobalSidebarLayout from "./layouts/GlobalSidebarLayout";
import AboutIntro from "./pages/about/AboutIntro";
import AboutGoal from "./pages/about/AboutGoal";
import HousingBoard from "./pages/youthInfo/HousingBoard";
import EducationBoard from "./pages/youthInfo/EducationBoard";
import FinanceBoard from "./pages/youthInfo/FinanceBoard";
import PolicyBoard from "./pages/youthInfo/PolicyBoard";
import SupportList from "./pages/support/SupportList";
import CustomSearch from "./pages/support/CustomSearch";
import CommunityBoard from "./pages/community/CommunityBoard";
import Gallery from "./pages/community/Gallery";
import LoginPage from "./pages/user/LoginPage";
import SignupPage from "./pages/user/SignupPage";

// 메뉴 정의
const aboutMenu = [
  { label: "기관 소개", path: "/about/aboutIntro" },
  { label: "함께하기", path: "/about/aboutGoal" },
];

const infoMenu = [
  { label: "주거 정보", path: "/youthInfo/HousingBoard" },
  { label: "교육 정보", path: "/youthInfo/EducationBoard" },
  { label: "금융 정보", path: "/youthInfo/FinanceBoard" },
  { label: "정책 정보", path: "/youthInfo/PolicyBoard" },
];

const supportMenu = [
  { label: "전체 사업", path: "/support/all" },
  { label: "맞춤 사업 찾기", path: "/support/custom" },
];

const communityMenu = [
  { label: "게시판", path: "/community/board" },
  { label: "사진첩", path: "/community/gallery" },
];

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* 소개 페이지 라우팅 */}
            <Route
              path="/about"
              element={<GlobalSidebarLayout menuItems={aboutMenu} />}
            >
              <Route index element={<AboutIntro />} />
              <Route path="/about/aboutIntro" element={<AboutIntro />} />
              <Route path="/about/aboutGoal" element={<AboutGoal />} />
            </Route>

            {/* 청년정보 페이지 라우팅 */}
            <Route
              path="/youthInfo"
              element={<GlobalSidebarLayout menuItems={infoMenu} />}
            >
              <Route index element={<HousingBoard />} />
              <Route
                path="/youthInfo/housingBoard"
                element={<HousingBoard />}
              />
              <Route
                path="/youthInfo/educationBoard"
                element={<EducationBoard />}
              />
              <Route
                path="/youthInfo/financeBoard"
                element={<FinanceBoard />}
              />
              <Route path="/youthInfo/policyBoard" element={<PolicyBoard />} />
            </Route>

            {/* 지원사업 페이지 라우팅 */}
            <Route
              path="/support"
              element={<GlobalSidebarLayout menuItems={supportMenu} />}
            >
              <Route index element={<SupportList />} />
              <Route path="/support/all" element={<SupportList />} />
              <Route path="/support/custom" element={<CustomSearch />} />
            </Route>

            {/* 소통공간 페이지 라우팅 */}
            <Route
              path="/community"
              element={<GlobalSidebarLayout menuItems={communityMenu} />}
            >
              <Route path="/community/board" element={<CommunityBoard />} />
              <Route path="/community/gallery" element={<Gallery />} />
            </Route>

            {/* Auth 페이지 라우팅 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
