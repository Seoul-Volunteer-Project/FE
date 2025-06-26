import { useState, useEffect } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 전환 시 body 클래스 토글
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* 헤더 */}
      <header className="header">
        <div className="logo">Youth Care</div>

        {/* 중앙 메뉴 (데스크탑) */}
        <nav className="header-center">
          <ul className="nav-menu">
            <li>
              <a href="#intro">소개</a>
            </li>
            <li>
              <a href="#service">청년정보</a>
            </li>
            <li>
              <a href="#program">지원사업</a>
            </li>
            <li>
              <a href="#contact">소통공간</a>
            </li>
          </ul>
        </nav>

        {/* 우측 아이콘 영역 */}
        <div className="header-right">
          {/* 항상 보이는 검색 버튼 */}
          <button className="icon-button">
            <img src={iconSearch} alt="search" />
          </button>
          {/* 데스크톱일 때만 보이는 두 버튼 */}
          <div className="desktop-icons">
            <button className="icon-button">
              <img src={iconUser} alt="profile" />
            </button>
            <button className="icon-button" onClick={toggleDarkMode}>
              <img src={isDarkMode ? iconSun : iconMoon} alt="theme toggle" />
            </button>
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
            <button className="icon-button" onClick={toggleDarkMode}>
              <img src={isDarkMode ? iconSun : iconMoon} alt="theme toggle" />
            </button>
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
