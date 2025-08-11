import "../../layouts/Gallery.css";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostsByBoardType } from "../../api/postAPI";
import placeholder from "../../assets/placeholder.png";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

function FinanceBoard() {
  const navigate = useNavigate();
  const { userInfo, isLoggedIn } = useAuth(); // Context에서 유저 정보 가져오기
  const isAdmin = userInfo?.role === "ADMIN"; // 관리자 여부 판단
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsByBoardType("FINANCE");
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setPosts(sorted);
      } catch (err) {
        alert("게시글을 불러오지 못했습니다.");
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="gallery-page">
        {/* 제목 */}
        <h1 className="gallery-title">금융 정보</h1>

        {/* 구분선 */}
        <div className="gallery-divider"></div>

        {/* 앨범 그리드 */}
        <div className="gallery-grid">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => (
              <div key={post.id} className="gallery-item">
                <img
                  src={post.images?.[0]?.imageUrl || placeholder}
                  alt={post.title}
                  className={
                    post.images?.[0]?.imageUrl
                      ? "thumbnail-image"
                      : "placeholder-image"
                  }
                />
                <div className="gallery-caption">{post.title}</div>
              </div>
            ))
          ) : (
            <div className="no-posts-message">게시글이 없습니다.</div>
          )}
        </div>

        {/* 페이징 + 작성 버튼 */}
        <div className="gallery-bottom-area">
          <div className="gallery-pagination">
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
            <div className="gallery-write-btn-container">
              <button
                className="gallery-write-btn"
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

export default FinanceBoard;
