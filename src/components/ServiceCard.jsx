import "./ServiceCard.css";

// 각 항목에 맞는 이모지(또는 아이콘 이미지)를 넣을 수 있음
function ServiceCard({ title, emoji, backgroundColor }) {
  return (
    <div className="service-card" style={{ backgroundColor }}>
      <div className="emoji">{emoji}</div>
      <div className="service-title">{title}</div>
    </div>
  );
}

export default ServiceCard;
