import "./CustomSearch.css";
import { motion } from "framer-motion";

function CustomSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="custom-container">
        <h1 className="custom-title">나의 맞춤 사업 찾아보기</h1>

        <div className="custom-wrapper">
          <div className="custom-content">
            <h2 className="custom-subtitle">서비스 준비 중입니다.</h2>
            <p>지금 자신에게 필요한 사업을 찾을 수 있습니다.</p>

            <h2 className="custom-section-title">서비스 준비 중</h2>
            <p>Loading...</p>

            <h2 className="custom-section-title">탐색</h2>
            <ul className="custom-list">
              <li>list1</li>
              <li>list2</li>
              <li>list3</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CustomSearch;
