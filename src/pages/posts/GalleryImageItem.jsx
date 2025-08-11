import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "IMAGE";

function GalleryImageItem({ id, preview, index, moveImage }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="gallery-image-item"
      style={{
        opacity: 1, // 드래그 중에도 희미해지지 않음
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    >
      <img src={preview} alt="preview" />
      <div className="image-index">{index + 1}</div>
    </div>
  );
}

export default GalleryImageItem;
