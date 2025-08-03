import "../community/Gallery.css";
import { motion } from "framer-motion";

// 더미 사진 데이터
const dummyImages = [
  { id: 1, src: "/assets/photo1.jpg", title: "청년희망적금" },
  { id: 2, src: "/assets/photo2.jpg", title: "청년도약계좌" },
  { id: 3, src: "/assets/photo3.jpg", title: "청년내일저축계좌" },
  { id: 4, src: "/assets/photo4.jpg", title: "청년자산형성지원" },
  { id: 5, src: "/assets/photo5.jpg", title: "신용회복지원" },
  { id: 6, src: "/assets/photo6.jpg", title: "긴급생계비 지원" },
];

function FinanceBoard() {
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
          {dummyImages.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.src} alt={item.title} />
              <div className="gallery-caption">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default FinanceBoard;
