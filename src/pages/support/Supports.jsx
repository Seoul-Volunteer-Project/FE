import "../../layouts/Board.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SupportList() {
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { userInfo } = useAuth(); // ✅ 관리자 판별
  const isAdmin = userInfo?.role === "ADMIN";
  const navigate = useNavigate();

  const dummyPosts = [
    {
      id: 1,
      title: "청년 주거 지원사업",
      author: "관리자",
      date: "2025-06-26",
      views: 12,
    },
    {
      id: 2,
      title: "청년 금융지원 신청",
      author: "홍길동",
      date: "2025-06-25",
      views: 8,
    },
    {
      id: 3,
      title: "취업 연계 프로그램",
      author: "이순신",
      date: "2025-06-24",
      views: 20,
    },
  ];

  const filteredPosts = dummyPosts.filter((post) => {
    if (searchType === "title") {
      return post.title.includes(searchKeyword);
    } else if (searchType === "author") {
      return post.author.includes(searchKeyword);
    }
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="board-page">
        {/* 페이지 제목 */}
        <h1 className="board-title">지원사업</h1>

        {/* 검색 필터 */}
        <div className="board-search">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="title">제목</option>
            <option value="author">작성자</option>
          </select>

          <div className="search-input-group">
            <input
              type="text"
              placeholder="검색어 입력"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button>검색</button>
          </div>
        </div>

        {/* 게시판 테이블 */}
        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{post.date}</td>
                  <td>{post.views}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">검색 결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ✅ 페이징 + 작성 버튼 */}
        <div className="board-bottom-area">
          <div className="board-pagination">〈 1 2 3 〉</div>

          {isAdmin && (
            <div className="board-write-btn-container">
              <button
                className="board-write-btn"
                onClick={() => navigate("post")}
              >
                작성하기
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default SupportList;
