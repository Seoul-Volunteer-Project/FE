import { useState } from "react";
import "../../layouts/Board.css";
import { motion } from "framer-motion";

function CommunityBoard() {
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");

  const dummyPosts = [
    {
      id: 1,
      title: "게시판 첫번째 글입니다.",
      author: "관리자",
      date: "2025-06-26",
      views: 15,
    },
    {
      id: 2,
      title: "두 번째 글",
      author: "홍길동",
      date: "2025-06-25",
      views: 8,
    },
    {
      id: 3,
      title: "세 번째 글",
      author: "이순신",
      date: "2025-06-24",
      views: 20,
    },
    // 필요 시 더미 데이터 추가
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
        <h1 className="board-title">게시판</h1>
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

        {/* 게시판 목록 */}
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
      </div>
    </motion.div>
  );
}

export default CommunityBoard;
