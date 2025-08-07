import "./Goal.css";
import { motion } from "framer-motion";

function GoalPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="goal-container">
        <h1 className="goal-title">함께하기</h1>

        <p className="goal-intro">
          '볕뉘'는 지역사회의 돌봄 공백을 해소하고, 청소년 및 취약계층의 성장과
          자립을 지원하기 위해 다양한 사업을 추진하고 있습니다.
        </p>

        <div className="goal-wrapper">
          <div className="goal-content">
            <h2 className="goal-subtitle">🌱 볕뉘의 약속</h2>
            <p>
              볕뉘는 작고 느릴 수 있지만, 지속 가능한 변화를 꿈 꿉니다. <br />
              한번의 햇살이 큰 위로가 되듯, 우리의 따뜻한 움직임이 누군가의 삶을
              환하게 비추기를 소망합니다.
            </p>

            <h2 className="goal-subtitle">🤝 함께해요</h2>
            <p>
              볕뉘의 활동에 함께하고 싶은 분, 후원 또는 협업을 희망하는 기관이
              있다면 언제든지 연락 주세요. <br />
              작은 마음들이 모여 큰 볕이 됩니다.
            </p>

            <div className="goal-form">
              <h3 className="goal-subtitle"> </h3>
              <form>
                <label htmlFor="email">📧 이메일 주소</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                />
                <label htmlFor="contact">📱 SNS 링크 또는 연락처</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="예: @byeotnwi / 010-1234-5678"
                />
                <label htmlFor="region">📍 활동지역</label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  placeholder="예: 서울, 경기 등"
                />
                <button type="submit">제출하기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GoalPage;
