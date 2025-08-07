import "../../layouts/Gallery.css";
import { motion } from "framer-motion";

// 더미 사진 데이터
const dummyImages = [
  { id: 1, src: "/assets/photo1.jpg", title: "청년기본소득" },
  { id: 2, src: "/assets/photo2.jpg", title: "청년정책참여단" },
  { id: 3, src: "/assets/photo3.jpg", title: "지역주도형 청년일자리" },
  { id: 4, src: "/assets/photo4.jpg", title: "청년마음건강지원" },
  { id: 5, src: "/assets/photo5.jpg", title: "청년교통비 지원" },
  { id: 6, src: "/assets/photo6.jpg", title: "청년문화패스" },
];

function PolicyBoard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="gallery-page">
        {/* 제목 */}
        <h1 className="gallery-title">정책 정보</h1>

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

export default PolicyBoard;
