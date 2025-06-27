import "./Footer.css";
import instagramIcon from "../assets/instagram.png";
import blogIcon from "../assets/blog.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* 좌측: 로고 + 주소/전화 */}
        <div className="footer-left">
          <div className="footer-logo">Youth Care</div>
          <div className="footer-info">
            <p>(12345) 서울특별시 용산구 청소년로 123</p>
            <p>Tel: 02-123-4567</p>
          </div>
        </div>

        {/* 우측: 문의하기 버튼 + SNS 버튼 */}
        <div className="footer-right">
          <button className="contact-button">문의하기</button>
          <div className="sns-buttons">
            <button className="sns-icon-button">
              <img src={instagramIcon} alt="Instagram" />
            </button>
            <button className="sns-icon-button">
              <img src={blogIcon} alt="Blog" />
            </button>
          </div>
        </div>
      </div>

      {/* 하단 이용안내 / 개인정보 등 */}
      <div className="footer-bottom">
        <a href="#guide">이용안내</a>
        <a href="#privacy">개인정보처리방침</a>
        <a href="#copyright">저작권 정책</a>
        <span>© 2025 Youth Care. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
