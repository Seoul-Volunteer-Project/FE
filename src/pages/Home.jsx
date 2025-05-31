// src/pages/Home.jsx
import ServiceCard from "../components/ServiceCard";
import "./Home.css";

const services = [
  {
    title: "상담 서비스",
    description: "청소년들의 고민과 어려움을 함께 나누고 해결책을 모색합니다.",
  },
  {
    title: "교육 지원",
    description:
      "학업에 어려움을 겪는 청소년들에게 맞춤형 교육 지원을 제공합니다.",
  },
  {
    title: "문화 활동",
    description:
      "다양한 문화 체험과 여가 활동을 통해 청소년들의 건강한 성장을 돕습니다.",
  },
  {
    title: "진로 지도",
    description:
      "청소년들의 적성과 흥미를 파악하여 미래 진로 설계를 지원합니다.",
  },
  {
    title: "건강 관리",
    description:
      "청소년들의 신체적, 정신적 건강을 위한 다양한 프로그램을 운영합니다.",
  },
  {
    title: "가족 지원",
    description:
      "청소년과 가족 간의 건강한 관계 형성을 위한 상담과 교육을 제공합니다.",
  },
];

function Home() {
  return (
    <main className="home-container">
      <h1 className="main-title">청소년 복지 서비스</h1>
      <p className="subtitle">
        청소년들의 건강한 성장과 발달을 지원하는 다양한 복지 서비스를
        제공합니다.
      </p>
      <div className="service-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </main>
  );
}

export default Home;
