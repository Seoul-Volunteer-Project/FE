import axios from "axios";

const BASE_URL = "https://youthcare.site/api/post";

export const createPost = async (formData) => {
  const response = await axios.post(`${BASE_URL}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true, // 세션 인증 기반일 경우 필요
  });
  return response.data;
};

export const getPostsByBoardType = async (boardType) => {
  const response = await axios.get(`/board/${boardType}`, {
    withCredentials: true,
  });
  return response.data;
};
