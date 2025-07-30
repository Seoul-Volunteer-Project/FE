import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      alert("아이디와 비밀번호를 모두 입력해 주세요.");
      return;
    }

    // TODO: API 로그인 요청
    console.log("로그인 정보:", formData);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">로그인</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="아이디"
          className="login-input"
          value={formData.username}
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
          아직 회원이 아니신가요?{" "}
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
