import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, getMyInfo } from "../../api/authAPI";

function AdminLoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  useEffect(() => {
    document.body.classList.add("fade-in");
    return () => document.body.classList.remove("fade-in");
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      await login(formData);
      const user = await getMyInfo();
      if (user.role === "ADMIN") {
        navigate("/admin"); // 관리자 페이지로 이동
      } else {
        alert("관리자 계정이 아닙니다.");
      }
    } catch (err) {
      alert("로그인 실패: " + (err.response?.data || "서버 오류"));
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">관리자 로그인</h2>

      <form className="login-form" onSubmit={handleAdminLogin}>
        <input
          type="text"
          name="email"
          placeholder="이메일"
          className="login-input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="login-input"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className="login-button">
          로그인
        </button>

        <p className="signup-link">
          <span onClick={() => navigate("/login")}>뒤로가기</span>
        </p>
      </form>
    </div>
  );
}

export default AdminLoginPage;
