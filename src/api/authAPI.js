import axios from "axios";

const BASE_URL = "https://youthcare.site/api/user";

export const signup = async ({ email, password }) => {
  const response = await axios.post(`${BASE_URL}/register`, formData, {
    withCredentials: true, // 세션 쿠키 주고받기 위해 필요
  });
  return response.data;
};

export const login = async (formData) => {
  const response = await axios.post(`${BASE_URL}/login`, formData, {
    withCredentials: true, // 필수
  });
  return response.data; // 토큰 포함
};

export const logout = async () => {
  const response = await axios.post(
    `${BASE_URL}/logout`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const getMyInfo = async () => {
  const response = await axios.get(`${BASE_URL}/me`, {
    withCredentials: true,
  });
  return response.data;
};
