import { useEffect, useRef, useState } from "react";
import "./SupportBanner.css";

import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import poster4 from "../assets/poster4.png";

const bannerItems = [
  { image: poster1, link: "https://example.com/1" },
  { image: poster2, link: "https://example.com/2" },
  { image: poster3, link: "https://example.com/3" },
  { image: poster4, link: "https://example.com/4" },
];

function SupportBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideWidth = slideRef.current.scrollWidth / (bannerItems.length * 2); // ✅ 전체 항목 수에 맞게 조정
    slideRef.current.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
  }, [currentIndex]);

  return (
    <div className="support-banner">
      {/* 왼쪽 : 슬라이드 영역 */}
      <div className="banner-left">
        <div className="banner-track" ref={slideRef}>
          {[...bannerItems, ...bannerItems].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="banner-item"
            >
              <img src={item.image} alt={`지원사업 ${index + 1}`} />
            </a>
          ))}
        </div>
      </div>

      {/* 오른쪽 : 맞춤 검색 영역 */}
      <div className="banner-right">
        <h1>
          청소년들의 건강한 성장과
          <br />
          미래를 응원합니다
        </h1>
        <h2>
          지금 바로 여러분에게 꼭 맞는 지원사업을 <br />
          찾아보세요!
        </h2>
        <button className="search-button">맞춤 정책 찾기</button>
      </div>
    </div>
  );
}

export default SupportBanner;
