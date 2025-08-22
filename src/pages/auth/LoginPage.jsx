import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { login, getMyInfo, logout } from "../../api/authAPI";
import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const { fetchUser } = useAuth();

  useEffect(() => {
    document.body.classList.add("fade-in");
    return () => document.body.classList.remove("fade-in");
  }, []);

  // 로그인 상태 확인
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const user = await getMyInfo();
        setIsLoggedIn(true);
        setUserInfo(user);
      } catch {
        setIsLoggedIn(false);
        setUserInfo(null);
      }
    };
    checkLogin();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      alert("이메일과 비밀번호를 모두 입력해 주세요.");
      return;
    }
    try {
      await login({ email, password });
      await fetchUser();
      navigate("/"); // 홈으로 이동
    } catch (error) {
      alert("로그인 실패: " + (error.response?.data || "서버 오류"));
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      await fetchUser();
      setIsLoggedIn(false);
      setUserInfo(null);
    } catch (error) {
      alert("로그아웃 실패");
    }
  };

  // ✅ 로딩 중 상태
  if (isLoggedIn === null) {
    return <div className="login-container">로딩 중...</div>;
  }

  // ✅ 로그인된 경우
  if (isLoggedIn) {
    return (
      <div className="login-container">
        <h2 className="login-title">안녕하세요, {userInfo?.name}님!</h2>
        <button onClick={handleLogout} className="login-button">
          로그아웃
        </button>
      </div>
    );
  }

  // ✅ 로그인되지 않은 경우 (기존 폼)
  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>

      <form className="login-form" onSubmit={handleLogin}>
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
          아직 회원이 아니신가요? <span onClick={() => navigate("/signup")}>회원가입</span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
