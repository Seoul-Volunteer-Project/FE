import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

// 아이콘 이미지 경로
import iconSearch from "../assets/search.png";
import iconMoon from "../assets/moon.png";
import iconSun from "../assets/sun.png";
import iconUser from "../assets/user.png";
import iconHamburger from "../assets/hamburger.png";
import iconClose from "../assets/close.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 전환 시 body 클래스 토글
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prev) => !prev);
  // };

  return (
    <>
      {/* 헤더 */}
      <header className="header">
        <div className="logo">
          <a href="/"> Youth Care</a>
        </div>

        {/* 중앙 메뉴 */}
        <nav className="header-center">
          <ul className="nav-menu">
            <li>
              <Link to="/about/aboutIntro">소개</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/about/aboutIntro">기관 소개</Link>
                </li>
                <li>
                  <Link to="/about/aboutGoal">함께하기</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#service">청년정보</Link>
              <ul className="dropdown">
                <li>
                  <Link to="#housing">주거 정보</Link>
                </li>
                <li>
                  <Link to="#education">교육 정보</Link>
                </li>
                <li>
                  <Link to="#finance">금융 정보</Link>
                </li>
                <li>
                  <Link to="#policy">정책 정보</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/support/all">지원사업</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/support/all">전체 사업</Link>
                </li>
                <li>
                  <Link to="/support/custom">맞춤 사업 찾기</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/community/board">소통공간</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/community/board">게시판</Link>
                </li>
                <li>
                  <Link to="/community/gallery">사진첩</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* 우측 아이콘 영역 */}
        <div className="header-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="search-input"
            />
            <button className="icon-button search-icon">
              <img src={iconSearch} alt="search" />
            </button>
          </div>

          <div className="user-container">
            <button
              className="icon-button user-icon"
              onClick={() => navigate("/login")} // 로그인 페이지 이동
            >
              <img src={iconUser} alt="profile" />
            </button>
            {/* <button className="icon-button" onClick={toggleDarkMode}>
              <img src={isDarkMode ? iconSun : iconMoon} alt="theme toggle" />
            </button> */}
          </div>

          {/* 햄버거 버튼 (모바일용) */}
          <button
            className="hamburger-button"
            onClick={() => setIsMenuOpen(true)}
          >
            <img src={iconHamburger} alt="menu" />
          </button>
        </div>
      </header>

      {/* 오버레이 (드로어 열렸을 때만 표시) */}
      {isMenuOpen && <div className="drawer-overlay" onClick={closeMenu}></div>}

      {/* 모바일 드로어 메뉴 */}
      <nav className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-logo">Youth Care</div>
          <div className="mobile-icons">
            <button className="icon-button">
              <img src={iconUser} alt="profile" />
            </button>
            {/* <button className="icon-button" onClick={toggleDarkMode}>
              <img src={isDarkMode ? iconSun : iconMoon} alt="theme toggle" />
            </button> */}
            <button className="icon-button" onClick={closeMenu}>
              <img src={iconClose} alt="close" />
            </button>
          </div>
        </div>

        <ul className="nav-menu vertical">
          <li>
            <a href="#intro" onClick={closeMenu}>
              소개
            </a>
          </li>
          <li>
            <a href="#service" onClick={closeMenu}>
              청년정보
            </a>
          </li>
          <li>
            <a href="#program" onClick={closeMenu}>
              지원사업
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              소통공간
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
