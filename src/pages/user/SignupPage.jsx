import "./SignupPage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    birthdate: "",
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
    const { email, username, password, birthdate } = formData;

    if (!email || !username || !password || !birthdate) {
      alert("모든 항목을 입력해 주세요.");
      return;
    }

    // TODO: API 요청
    console.log("회원가입 정보:", formData);
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">회원가입</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          className="signup-input"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="아이디"
          className="signup-input"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          className="signup-input"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthdate"
          className="signup-input"
          value={formData.birthdate}
          onChange={handleChange}
        />

        <button type="submit" className="signup-button">
          회원가입
        </button>

        <p className="login-link">
          이미 계정이 있으신가요?{" "}
          <span onClick={() => navigate("/login")}>로그인</span>
        </p>
      </form>
    </div>
  );
}

export default SignupPage;
