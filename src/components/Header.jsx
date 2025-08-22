import { useState, useRef } from "react";
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

  // 모바일 드로어 아코디언 열림 상태
  const [openSection, setOpenSection] = useState(null);

  // 패널별 ref
  const aboutRef = useRef(null);
  const infoRef = useRef(null);
  const supportRef = useRef(null);
  const communityRef = useRef(null);

  // 토글 핸들러
  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  // 하위 메뉴 클릭 시 이동 + 메뉴 닫기
  const go = (path) => {
    navigate(path);
    closeMenu();
    setOpenSection(null);
  };

  // 패널 스타일 동적 계산 (열림: scrollHeight, 닫힘: 0)
  const getPanelStyle = (key, ref) => {
    const isOpen = openSection === key;
    const h = ref.current?.scrollHeight ?? 0;
    return {
      maxHeight: isOpen ? `${h}px` : "0px",
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? "auto" : "none",
    };
  };

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
              <Link to="/about/intro">소개</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/about/intro">기관 소개</Link>
                </li>
                <li>
                  <Link to="/about/goal">함께하기</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/boards/housing">청년정보</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/boards/housing">주거 정보</Link>
                </li>
                <li>
                  <Link to="/boards/education">교육 정보</Link>
                </li>
                <li>
                  <Link to="/boards/finance">금융 정보</Link>
                </li>
                <li>
                  <Link to="/boards/policy">정책 정보</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/boards/supports">지원사업</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/boards/supports">전체 사업</Link>
                </li>
                <li>
                  <Link to="/boards/custom">맞춤 사업 찾기</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/boards/community">소통공간</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/boards/community">게시판</Link>
                </li>
                <li>
                  <Link to="/boards/gallery">사진첩</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* 우측 아이콘 영역 */}
        <div className="header-right">
          <div className="search-container">
            <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
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
          <button className="hamburger-button" onClick={() => setIsMenuOpen(true)}>
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
            <button className="icon-button" onClick={closeMenu}>
              <img src={iconClose} alt="close" />
            </button>
          </div>
        </div>

        {/* 아코디언 네비게이션 */}
        <ul className="nav-menu vertical">
          {/* 소개 */}
          <li className={`accordion-item ${openSection === "about" ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleSection("about")}
              aria-expanded={openSection === "about"}
              aria-controls="about-panel"
            >
              소개
              <span className="chevron">{openSection === "about" ? "▲" : "▼"}</span>
            </button>

            <div
              id="about-panel"
              ref={aboutRef}
              className="accordion-panel"
              style={getPanelStyle("about", aboutRef)}
              aria-hidden={openSection !== "about"}
            >
              <button className="drawer-sublink" onClick={() => go("/about/intro")}>
                기관 소개
              </button>
              <button className="drawer-sublink" onClick={() => go("/about/goal")}>
                함께하기
              </button>
            </div>
          </li>

          {/* 청년정보 */}
          <li className={`accordion-item ${openSection === "info" ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleSection("info")}
              aria-expanded={openSection === "info"}
              aria-controls="info-panel"
            >
              청년정보
              <span className="chevron">{openSection === "info" ? "▲" : "▼"}</span>
            </button>

            <div
              id="info-panel"
              ref={infoRef}
              className="accordion-panel"
              style={getPanelStyle("info", infoRef)}
              aria-hidden={openSection !== "info"}
            >
              <button className="drawer-sublink" onClick={() => go("/boards/housing")}>
                주거 정보
              </button>
              <button className="drawer-sublink" onClick={() => go("/boards/education")}>
                교육 정보
              </button>
              <button className="drawer-sublink" onClick={() => go("/boards/finance")}>
                금융 정보
              </button>
              <button className="drawer-sublink" onClick={() => go("/boards/policy")}>
                정책 정보
              </button>
            </div>
          </li>

          {/* 지원사업 */}
          <li className={`accordion-item ${openSection === "support" ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleSection("support")}
              aria-expanded={openSection === "support"}
              aria-controls="support-panel"
            >
              지원사업
              <span className="chevron">{openSection === "support" ? "▲" : "▼"}</span>
            </button>

            <div
              id="support-panel"
              ref={supportRef}
              className="accordion-panel"
              style={getPanelStyle("support", supportRef)}
              aria-hidden={openSection !== "support"}
            >
              <button className="drawer-sublink" onClick={() => go("/boards/supports")}>
                전체 사업
              </button>
              <button className="drawer-sublink" onClick={() => go("/support/match")}>
                맞춤 사업 찾기
              </button>
            </div>
          </li>

          {/* 소통공간 */}
          <li className={`accordion-item ${openSection === "community" ? "open" : ""}`}>
            <button
              className="accordion-trigger"
              onClick={() => toggleSection("community")}
              aria-expanded={openSection === "community"}
              aria-controls="community-panel"
            >
              소통공간
              <span className="chevron">{openSection === "community" ? "▲" : "▼"}</span>
            </button>

            <div
              id="community-panel"
              ref={communityRef}
              className="accordion-panel"
              style={getPanelStyle("community", communityRef)}
              aria-hidden={openSection !== "community"}
            >
              <button className="drawer-sublink" onClick={() => go("/boards/community")}>
                게시판
              </button>
              <button className="drawer-sublink" onClick={() => go("/boards/gallery")}>
                사진첩
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
