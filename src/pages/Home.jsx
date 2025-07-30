// src/pages/Home.jsx
import SupportBanner from "../components/SupportBanner";
import ServiceCard from "../components/ServiceCard";
import "./Home.css";

const services = [
  {
    title: "안정된 보금자리, 주거지원",
    emoji: "🏠",
    backgroundColor: "#e6f0ff",
  },
  {
    title: "청년 금융·저축 프로그램",
    emoji: "💰",
    backgroundColor: "#e6fff0",
  },
  {
    title: "진로 탐색과 역량 강화",
    emoji: "🎓",
    backgroundColor: "#ffecec",
  },
  {
    title: "다양한 청년 맞춤 정책",
    emoji: "📄",
    backgroundColor: "#fff4e1",
  },
];

function Home() {
  return (
    <main className="home-container">
      <SupportBanner />
      <p className="subtitle">어떤 정보를 찾고 계시나요?</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </main>
  );
}

export default Home;
