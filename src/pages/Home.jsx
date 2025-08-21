// src/pages/Home.jsx
import SupportBanner from "../components/SupportBanner";
import ServiceCard from "../components/ServiceCard";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      title: "안정된 보금자리, 주거지원",
      emoji: "🏠",
      backgroundColor: "#e6f0ff",
      path: "/boards/housing",
    },
    {
      title: "청년 금융·저축 프로그램",
      emoji: "💰",
      backgroundColor: "#e6fff0",
      path: "/boards/finance",
    },
    {
      title: "진로 탐색과 역량 강화",
      emoji: "🎓",
      backgroundColor: "#ffecec",
      path: "/boards/education",
    },
    {
      title: "다양한 청년 맞춤 정책",
      emoji: "📄",
      backgroundColor: "#fff4e1",
      path: "/boards/policy",
    },
  ];

  return (
    <main className="home-container">
      {/* SupportBanner 애니메이션 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <SupportBanner />
      </motion.div>

      {/* 부제목 애니메이션 */}
      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        어떤 정보를 찾고 계시나요?
      </motion.p>

      {/* ServiceCard 그리드에 stagger 애니메이션 */}
      <motion.div
        className="service-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <ServiceCard {...service} onClick={() => navigate(service.path)} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}

export default Home;
