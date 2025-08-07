import "../../layouts/Gallery.css";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// 더미 사진 데이터
const dummyImages = [
  { id: 1, src: "/assets/photo1.jpg", title: "청년취업 아카데미" },
  { id: 2, src: "/assets/photo2.jpg", title: "K-디지털 트레이닝" },
  { id: 3, src: "/assets/photo3.jpg", title: "내일배움카드" },
  { id: 4, src: "/assets/photo4.jpg", title: "청년인턴제" },
  { id: 5, src: "/assets/photo5.jpg", title: "직무교육 훈련비 지원" },
  { id: 6, src: "/assets/photo6.jpg", title: "진로설계 컨설팅" },
];

function EducationBoard() {
  const navigate = useNavigate();
  const { userInfo, isLoggedIn } = useAuth(); // Context에서 유저 정보 가져오기
  const isAdmin = userInfo?.role === "ADMIN"; // 관리자 여부 판단

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="gallery-page">
        {/* 제목 */}
        <h1 className="gallery-title">교육 정보</h1>

        {/* 구분선 */}
        <div className="gallery-divider"></div>

        {/* 앨범 그리드 */}
        <div className="gallery-grid">
          {dummyImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.src} alt={item.title} />
              <div className="gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>

        {/* 페이징 + 작성 버튼 */}
        <div className="gallery-bottom-area">
          <div className="gallery-pagination">〈 1 2 3 〉</div>

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

export default EducationBoard;
