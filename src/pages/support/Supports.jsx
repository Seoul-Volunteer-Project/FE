import "../../layouts/Board.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getPostsByBoardType } from "../../api/postAPI";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa"; // 아이콘 불러오기

function SupportsBoard() {
  const { userInfo } = useAuth();
  const isAdmin = userInfo?.role === "ADMIN";
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchType, setSearchType] = useState("title");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postsPerPage = 10;

  // 게시글 목록 불러오기
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsByBoardType("SUPPORTS");
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ); // 최신순 정렬
        setPosts(data);
      } catch (error) {
        alert("게시글 목록을 불러오지 못했습니다.");
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  // 검색 필터링
  const filteredPosts = posts.filter((post) => {
    if (searchType === "title") {
      return post.title.includes(searchKeyword);
    } else if (searchType === "author") {
      return post.author.name.includes(searchKeyword);
    }
    return true;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

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
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post, idx) => (
                <tr key={post.id}>
                  <td>
                    {filteredPosts.length -
                      (currentPage - 1) * postsPerPage -
                      idx}
                  </td>
                  <td>{post.title}</td>
                  <td>{post.author.name}</td>
                  <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td>{post.viewContent}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">검색 결과가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* 페이징 + 작성 버튼 */}
        <div className="board-bottom-area">
          <div className="board-pagination">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <FaAngleDoubleLeft />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1 ? "active-page-btn" : ""}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <FaAngleRight />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <FaAngleDoubleRight />
            </button>
          </div>

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

export default SupportsBoard;
