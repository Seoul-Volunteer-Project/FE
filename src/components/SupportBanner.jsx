import { useEffect, useRef, useState } from "react";
import "./SupportBanner.css";

import poster1 from "../assets/poster1.png";
import poster2 from "../assets/poster2.png";
import poster3 from "../assets/poster3.png";
import poster4 from "../assets/poster4.png";
import poster5 from "../assets/poster5.png";

const bannerItems = [
  { image: poster1, link: "https://example.com/1" },
  { image: poster2, link: "https://example.com/2" },
  { image: poster3, link: "https://example.com/3" },
  { image: poster4, link: "https://example.com/4" },
  { image: poster5, link: "https://example.com/5" },
];

function SupportBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const slideRef = useRef(null);

  const totalItems = bannerItems.length * 2; // 원본 + 복제

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;

    const totalWidth = slideRef.current.scrollWidth;
    const itemWidth = totalWidth / totalItems;

    const container = slideRef.current.parentElement;
    const containerWidth = container.clientWidth;
    const offset = containerWidth / 2 - itemWidth / 2;

    slideRef.current.style.transition = isTransition
      ? "transform 0.5s ease-in-out"
      : "none";
    slideRef.current.style.transform = `translateX(-${
      itemWidth * currentIndex - offset
    }px)`;

    // ✅ 무한 루프 핵심 부분
    if (currentIndex >= bannerItems.length) {
      setTimeout(() => {
        setIsTransition(false);
        setCurrentIndex(0);
      }, 500); // 트랜지션 종료 후 바로 리셋
    } else {
      setIsTransition(true);
    }
  }, [currentIndex, isTransition, totalItems]);

  return (
    <div className="support-banner">
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
