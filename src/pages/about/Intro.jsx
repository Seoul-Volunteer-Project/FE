import "./Intro.css";
import byeotnwiLogo from "../../assets/aboutPage.png"; // 로고 파일 경로에 맞게 조정
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="about-container">
        <h1 className="about-title">청년 봉사단체 ‘볕뉘’</h1>

        <div className="about-wrapper">
          <div className="about-content">
            <h2 className="about-subtitle">“세상의 그늘에 잠시 뉘일 햇살 하나, 볕뉘입니다”</h2>
            <p>
              볕뉘는 ‘작은 틈을 통해 잠시 비치는 햇볕’ 그리고 ‘남으로부터 받는 작은 보살핌’이라는 뜻을 지닌 이름입니다.
              저희는 그 의미처럼, 그늘진 곳에 잠시라도 뉘일 수 있는 따뜻한 햇볕이 되고자 모인 청년 봉사단체입니다.
            </p>

            <h2 className="about-section-title">설립 배경 및 운영 방식</h2>
            <p>
              볕뉘는 2025년 1월 6일, 같은 마음을 품은 청년들이 자발적으로 모여 결성하였고, 3월 29일부터 본격적인 활동을
              시작했습니다. <br></br>
              <br></br>
              전문가도, 거창한 조직도 아니지만 우리의 작은 손길이 누군가에게 ‘볕뉘’가 될 수 있다는 믿음으로 활동하고
              있습니다. 서울을 중심으로 활동하며, 보호가 필요한 아동·청소년, 특히 자립준비청년들을 위한 다양한
              프로그램을 기획·실행하고 있습니다.
            </p>

            <h2 className="about-section-title">주요 활동</h2>
            <ul className="about-list">
              <li>🌞 자립 정보 제공 : 자립준비청년에게 꼭 필요한 주거, 진로, 재정, 법률 등 실질적 정보 콘텐츠 제공</li>
              <li>
                🌱 정서 지원 프로그램 : 심리적 지지, 멘토링, 감정 나눔 모임 등 정서적 안정과 자존감 회복을 위한 활동
              </li>
              <li>
                🚀 문화·체험 프로그램 : 전시 관람, 소규모 여행, 요리 등 다양한 문화 체험을 통해 세상과의 연결감 확대
              </li>
              <li>🤝 아동·청소년 봉사 : 학습, 놀이, 관계 맺기 중심의 봉사를 통해 따뜻한 관계 경험 제공</li>
            </ul>
          </div>

          <div className="about-logo">
            <img src={byeotnwiLogo} alt="볕뉘 로고" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
