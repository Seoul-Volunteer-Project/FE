import { createContext, useContext, useEffect, useState } from "react";
import { getMyInfo } from "../api/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = 로딩 중

  // Context 내부에서만 상태 갱신
  const fetchUser = async () => {
    try {
      const user = await getMyInfo();
      setUserInfo(user);
      setIsLoggedIn(true);
    } catch {
      setUserInfo(null);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchUser(); // 앱 첫 진입 시 자동 호출
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, isLoggedIn, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
